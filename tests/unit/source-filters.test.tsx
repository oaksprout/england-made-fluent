import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SourceFilterList } from "@/components/citations/SourceFilters";
import { sources } from "@/data/sources";

describe("SourceFilterList", () => {
  it("shows every source by default with an accurate count", () => {
    render(<SourceFilterList sources={sources} />);
    expect(
      screen.getByText(
        `Showing ${sources.length} of ${sources.length} sources`,
      ),
    ).toBeInTheDocument();
    expect(screen.getAllByTestId("source-entry")).toHaveLength(sources.length);
  });

  it("reduces the count when searching by a distinctive title fragment", async () => {
    const user = userEvent.setup();
    const target = sources[0]!;
    const fragment = target.title.split(" ").slice(0, 2).join(" ");
    render(<SourceFilterList sources={sources} />);

    await user.type(screen.getByLabelText(/search/i), fragment);

    const entries = screen.getAllByTestId("source-entry");
    expect(entries.length).toBeLessThan(sources.length);
    expect(entries.length).toBeGreaterThan(0);
  });

  it("shows a no-matches message when the search matches nothing", async () => {
    const user = userEvent.setup();
    render(<SourceFilterList sources={sources} />);
    await user.type(
      screen.getByLabelText(/search/i),
      "zzz-no-such-source-anywhere",
    );
    expect(screen.queryAllByTestId("source-entry")).toHaveLength(0);
    expect(
      screen.getByText(/no sources match these filters/i),
    ).toBeInTheDocument();
  });

  it("filters to only official entries when the official source type is selected", async () => {
    const user = userEvent.setup();
    const officialCount = sources.filter(
      (s) => s.sourceType === "official",
    ).length;
    render(<SourceFilterList sources={sources} />);

    await user.selectOptions(screen.getByLabelText(/source type/i), "official");

    const entries = screen.getAllByTestId("source-entry");
    expect(entries).toHaveLength(officialCount);
    expect(
      screen.getByText(`Showing ${officialCount} of ${sources.length} sources`),
    ).toBeInTheDocument();
  });

  it("clears the filter back to the full list", async () => {
    const user = userEvent.setup();
    render(<SourceFilterList sources={sources} />);

    await user.selectOptions(screen.getByLabelText(/source type/i), "official");
    expect(screen.getAllByTestId("source-entry").length).toBeLessThan(
      sources.length,
    );

    await user.selectOptions(screen.getByLabelText(/source type/i), "all");
    expect(screen.getAllByTestId("source-entry")).toHaveLength(sources.length);
  });

  it("filters by verification status via the pressed toggle buttons", async () => {
    const user = userEvent.setup();
    const placeholderCount = sources.filter(
      (s) => s.verificationStatus === "placeholder",
    ).length;
    render(<SourceFilterList sources={sources} />);

    const group = screen.getByRole("group", { name: /verification status/i });
    await user.click(
      within(group).getByRole("button", { name: /placeholder/i }),
    );

    expect(screen.getAllByTestId("source-entry")).toHaveLength(
      placeholderCount,
    );
  });
});
