import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NationComparison } from "@/components/nations/NationComparison";
import { nations } from "@/data/nations";

describe("NationComparison", () => {
  it("carries the nation-compare testid", () => {
    render(<NationComparison nations={nations} />);
    expect(screen.getByTestId("nation-compare")).toBeInTheDocument();
  });

  it("selects the first two nations by default, with aria-pressed toggles", () => {
    render(<NationComparison nations={nations} />);
    const first = nations[0]!;
    const second = nations[1]!;
    const third = nations[2]!;

    expect(screen.getByTestId(`nation-toggle-${first.id}`)).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByTestId(`nation-toggle-${second.id}`)).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByTestId(`nation-toggle-${third.id}`)).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  it("shows the two default nations' names in the comparison", () => {
    render(<NationComparison nations={nations} />);
    expect(screen.getAllByText(nations[0]!.name).length).toBeGreaterThan(0);
    expect(screen.getAllByText(nations[1]!.name).length).toBeGreaterThan(0);
  });

  it("adds a third nation to the comparison when toggled on", async () => {
    const user = userEvent.setup();
    render(<NationComparison nations={nations} />);
    const third = nations[2]!;

    await user.click(screen.getByTestId(`nation-toggle-${third.id}`));

    expect(screen.getByTestId(`nation-toggle-${third.id}`)).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getAllByText(third.name).length).toBeGreaterThan(0);
    // All three headline dimension rows should now render three cells; check
    // the accent-column header count via nation name occurrences instead of
    // relying on layout (desktop table vs mobile cards both render names).
    for (const nation of [nations[0]!, nations[1]!, third]) {
      expect(screen.getAllByText(nation.name).length).toBeGreaterThan(0);
    }
  });

  it("keeps a maximum of 3 selected, deselecting the oldest when a fourth is chosen", async () => {
    const user = userEvent.setup();
    render(<NationComparison nations={nations} />);
    const [first, second, third, fourth] = nations;

    await user.click(screen.getByTestId(`nation-toggle-${third!.id}`));
    await user.click(screen.getByTestId(`nation-toggle-${fourth!.id}`));

    // The oldest selection (first) should now be deselected.
    expect(screen.getByTestId(`nation-toggle-${first!.id}`)).toHaveAttribute(
      "aria-pressed",
      "false",
    );
    expect(screen.getByTestId(`nation-toggle-${second!.id}`)).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByTestId(`nation-toggle-${third!.id}`)).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByTestId(`nation-toggle-${fourth!.id}`)).toHaveAttribute(
      "aria-pressed",
      "true",
    );

    const pressedButtons = nations.filter(
      (n) =>
        screen
          .getByTestId(`nation-toggle-${n.id}`)
          .getAttribute("aria-pressed") === "true",
    );
    expect(pressedButtons).toHaveLength(3);
  });

  it("removes a nation from the comparison when its toggle is clicked again", async () => {
    const user = userEvent.setup();
    render(<NationComparison nations={nations} />);
    const first = nations[0]!;

    await user.click(screen.getByTestId(`nation-toggle-${first.id}`));

    expect(screen.getByTestId(`nation-toggle-${first.id}`)).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });
});
