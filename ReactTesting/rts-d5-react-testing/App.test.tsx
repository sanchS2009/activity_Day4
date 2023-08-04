import React from "react";
import { describe, test, expect } from "vitest";
import { getByText, fireEvent, render, screen } from "@testing-library/react";
import App from "./src/App";

describe("<App />", () => {
  test("App mounts properly", () => {
    const wrapper = render(<App />);
    expect(wrapper).toBeTruthy();

    // Get by h1
    const h1 = wrapper.container.querySelector("h1");
    expect(h1?.textContent).toBe("Vite + React");

    // Get by text using the React testing library
    const text = screen.getByText(
      /Click on the Vite and React logos to learn more/i
    );
    expect(text.textContent).toBeTruthy();

    const h2 = wrapper.container.querySelector("h2");
    expect(h2?.textContent).toBe("0");
  

  });

//   test("Click the button", () => {
//     const wrapper = render(<App />);
//     const button = wrapper.container.querySelector(
//       "button"
//     ) as HTMLButtonElement;

//     expect(button.textContent).toBe("count is 0");

//     fireEvent(
//       getByText(button, "count is 0"),
//       new MouseEvent("click", {
//         bubbles: true,
//       })
//     );
//     expect(button.textContent).toBe("count is 1");
//   });
});
