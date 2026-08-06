// @vitest-environment jsdom
import { act } from "react";
import { createRoot } from "react-dom/client";
import { expect, test } from "vitest";
import HelloWorld from "./HelloWorld";

test("renders and updates the greeting", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);

  act(() => {
    root.render(<HelloWorld name="Vitest" />);
  });

  expect(container.textContent).toContain("Hello Vitest x1!");

  const button = container.querySelector("button");
  expect(button).not.toBeNull();

  act(() => {
    button?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(container.textContent).toContain("Hello Vitest x2!");

  root.unmount();
  container.remove();
});
