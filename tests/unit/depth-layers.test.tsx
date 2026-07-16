import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  DepthBrief,
  DepthDetailed,
  DepthEvidence,
  DepthLayers,
} from "@/components/ui/DepthLayers";

function renderLayers() {
  return render(
    <DepthLayers>
      <DepthBrief>Brief content here</DepthBrief>
      <DepthDetailed>Detailed content here</DepthDetailed>
      <DepthEvidence>Evidence content here</DepthEvidence>
    </DepthLayers>,
  );
}

describe("DepthLayers", () => {
  it("shows the brief panel by default", () => {
    renderLayers();
    expect(screen.getByText("Brief content here")).toBeVisible();
  });

  it("hides the other panels by default (hidden attribute set)", () => {
    renderLayers();
    const detailedPanel = screen
      .getByText("Detailed content here")
      .closest('[role="tabpanel"]');
    const evidencePanel = screen
      .getByText("Evidence content here")
      .closest('[role="tabpanel"]');
    expect(detailedPanel).toHaveAttribute("hidden");
    expect(evidencePanel).toHaveAttribute("hidden");
  });

  it("uses proper tablist semantics with aria-selected", () => {
    renderLayers();
    expect(
      screen.getByRole("tablist", { name: /reading depth/i }),
    ).toBeInTheDocument();
    const briefTab = screen.getByTestId("depth-tab-brief");
    const detailedTab = screen.getByTestId("depth-tab-detailed");
    const evidenceTab = screen.getByTestId("depth-tab-evidence");
    expect(briefTab).toHaveAttribute("aria-selected", "true");
    expect(detailedTab).toHaveAttribute("aria-selected", "false");
    expect(evidenceTab).toHaveAttribute("aria-selected", "false");
  });

  it("switches to the Detailed panel on click, hiding Brief", async () => {
    const user = userEvent.setup();
    renderLayers();
    await user.click(screen.getByTestId("depth-tab-detailed"));

    const briefPanel = screen
      .getByText("Brief content here")
      .closest('[role="tabpanel"]');
    const detailedPanel = screen
      .getByText("Detailed content here")
      .closest('[role="tabpanel"]');
    expect(briefPanel).toHaveAttribute("hidden");
    expect(detailedPanel).not.toHaveAttribute("hidden");
    expect(screen.getByTestId("depth-tab-detailed")).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  it("switches to the Evidence panel on click", async () => {
    const user = userEvent.setup();
    renderLayers();
    await user.click(screen.getByTestId("depth-tab-evidence"));

    const evidencePanel = screen
      .getByText("Evidence content here")
      .closest('[role="tabpanel"]');
    expect(evidencePanel).not.toHaveAttribute("hidden");
    expect(screen.getByTestId("depth-tab-evidence")).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  it("moves focus and selection to the next tab on ArrowRight", async () => {
    const user = userEvent.setup();
    renderLayers();
    const briefTab = screen.getByTestId("depth-tab-brief");
    briefTab.focus();
    await user.keyboard("{ArrowRight}");

    const detailedTab = screen.getByTestId("depth-tab-detailed");
    expect(detailedTab).toHaveFocus();
    expect(detailedTab).toHaveAttribute("aria-selected", "true");
  });

  it("wraps around from the last tab to the first on ArrowRight", async () => {
    const user = userEvent.setup();
    renderLayers();
    const evidenceTab = screen.getByTestId("depth-tab-evidence");
    evidenceTab.focus();
    await user.keyboard("{ArrowRight}");

    const briefTab = screen.getByTestId("depth-tab-brief");
    expect(briefTab).toHaveFocus();
    expect(briefTab).toHaveAttribute("aria-selected", "true");
  });

  it("moves focus to the previous tab on ArrowLeft", async () => {
    const user = userEvent.setup();
    renderLayers();
    const evidenceTab = screen.getByTestId("depth-tab-evidence");
    evidenceTab.focus();
    await user.keyboard("{ArrowLeft}");

    const detailedTab = screen.getByTestId("depth-tab-detailed");
    expect(detailedTab).toHaveFocus();
  });

  it("respects a defaultLayer prop other than brief", () => {
    render(
      <DepthLayers defaultLayer="detailed">
        <DepthBrief>Brief content here</DepthBrief>
        <DepthDetailed>Detailed content here</DepthDetailed>
        <DepthEvidence>Evidence content here</DepthEvidence>
      </DepthLayers>,
    );
    expect(screen.getByTestId("depth-tab-detailed")).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });
});
