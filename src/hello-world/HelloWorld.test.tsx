import { expect, test } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import HelloWorld from "./HelloWorld";

test("renders initial greeting", () => {
  const markup = renderToStaticMarkup(<HelloWorld name="Vitest" />);

  expect(markup).toContain("Hello Vitest x1!");
  expect(markup).toContain("Increment");
});
