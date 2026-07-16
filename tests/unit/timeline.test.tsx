import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Timeline } from "@/components/timeline/Timeline";
import { timelineEntries } from "@/data/timeline";

describe("Timeline", () => {
  it("renders every entry by default", () => {
    render(<Timeline entries={timelineEntries} />);
    expect(screen.getAllByTestId("timeline-entry")).toHaveLength(
      timelineEntries.length,
    );
  });

  it("carries the timeline and timeline-filters testids", () => {
    render(<Timeline entries={timelineEntries} />);
    expect(screen.getByTestId("timeline")).toBeInTheDocument();
    expect(screen.getByTestId("timeline-filters")).toBeInTheDocument();
  });

  it("reduces the rendered entries when filtering by country", async () => {
    const user = userEvent.setup();
    const targetCountry = timelineEntries[0]!.country;
    const expectedCount = timelineEntries.filter(
      (e) => e.country === targetCountry,
    ).length;

    render(<Timeline entries={timelineEntries} />);
    await user.selectOptions(screen.getByLabelText(/country/i), targetCountry);

    expect(screen.getAllByTestId("timeline-entry")).toHaveLength(expectedCount);
    expect(expectedCount).toBeLessThan(timelineEntries.length);
  });

  it("filters by category using the category buttons", async () => {
    const user = userEvent.setup();
    const targetCategory = timelineEntries[0]!.category;
    const expectedCount = timelineEntries.filter(
      (e) => e.category === targetCategory,
    ).length;

    render(<Timeline entries={timelineEntries} />);
    const group = screen.getByRole("group", { name: /filter by category/i });
    const categoryButton = Array.from(group.querySelectorAll("button")).find(
      (btn) => btn.getAttribute("aria-pressed") !== null,
    );
    expect(categoryButton).toBeTruthy();

    // Click through category buttons until we find the one matching our target
    // category count, since chip labels are human copy rather than raw enum
    // values.
    const buttons = Array.from(
      group.querySelectorAll<HTMLButtonElement>("button[aria-pressed]"),
    );
    let matched = false;
    for (const button of buttons) {
      await user.click(button);
      const count = screen.getAllByTestId("timeline-entry").length;
      if (
        count === expectedCount &&
        button.getAttribute("aria-pressed") === "true"
      ) {
        matched = true;
        break;
      }
      // toggle back off before trying the next one
      if (button.getAttribute("aria-pressed") === "true") {
        await user.click(button);
      }
    }
    expect(matched).toBe(true);
  });

  it("resets to all entries via the All button", async () => {
    const user = userEvent.setup();
    render(<Timeline entries={timelineEntries} />);

    const targetCountry = timelineEntries[0]!.country;
    await user.selectOptions(screen.getByLabelText(/country/i), targetCountry);
    expect(screen.getAllByTestId("timeline-entry").length).toBeLessThan(
      timelineEntries.length,
    );

    await user.click(screen.getByRole("button", { name: "All" }));
    expect(screen.getAllByTestId("timeline-entry")).toHaveLength(
      timelineEntries.length,
    );
  });

  it("expands an entry to reveal Interpretation and Measurable evidence", async () => {
    const user = userEvent.setup();
    render(<Timeline entries={timelineEntries} />);

    const [firstDetails] = screen.getAllByText(/full detail/i);
    await user.click(firstDetails!);

    expect(screen.getAllByText(/interpretation/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/measurable evidence/i).length).toBeGreaterThan(
      0,
    );
  });
});
