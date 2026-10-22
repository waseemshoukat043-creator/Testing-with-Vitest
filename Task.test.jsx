
 // @vitest-environment jsdom

import { describe, it, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Task from "./Task";

afterEach(() => {
  cleanup();
});

describe("Task component", () => {
  it("displays the task title", () => {
    render(<Task title="Complete Day 26 Testing" />);

    expect(
      screen.getByText("Complete Day 26 Testing")
    ).toBeInTheDocument();
  });

  it("displays the Task Manager heading", () => {
    render(<Task title="Learn Vitest" />);

    expect(
      screen.getByRole("heading", { name: "Task Manager" })
    ).toBeInTheDocument();
  });
});
