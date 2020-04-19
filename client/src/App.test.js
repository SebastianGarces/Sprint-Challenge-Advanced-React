import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

import { render, fireEvent, cleanup } from "@testing-library/react";
import PLayersList from "./components/PLayersList";
import Counter from "./components/Counter";

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});

test("counter contains correct buttons", () => {
    const player = { name: "Sebastian", searches: 5, id: 1 };
    const setSearches = () => console.log("hello");

    const { getByTestId } = render(
        <Counter player={player} setSearches={setSearches} />
    );

    expect(getByTestId("increment")).toHaveTextContent("+");
    expect(getByTestId("decrement")).toHaveTextContent("-");
    expect(getByTestId(/reset/i)).toHaveTextContent("Reset");
});

test("increment function increases searches by 1", () => {
    const player = { name: "Sebastian", searches: 5, id: 1 };
    const setSearches = () => console.log("hello");

    const { getByTestId, getByText } = render(
        <Counter player={player} setSearches={setSearches} />
    );

    const button = getByTestId("increment");
    const count = getByTestId("count");

    fireEvent.click(button);

    expect(count).toHaveTextContent("6");
});

test("decrement function decreases searches by 1", () => {
    const player = { name: "Sebastian", searches: 8, id: 1 };
    const setSearches = () => console.log("hello");

    const { getByTestId } = render(
        <Counter player={player} setSearches={setSearches} />
    );

    const button = getByTestId("decrement");
    const count = getByTestId("count");

    console.log(count.textContent);

    fireEvent.click(button);

    expect(count).toHaveTextContent("7");
});

test("reset function resets count to 0", () => {
    const player = { name: "Sebastian", searches: 99, id: 1 };
    const setSearches = () => console.log("hello");

    const { getByTestId } = render(
        <Counter player={player} setSearches={setSearches} />
    );

    const button = getByTestId("reset");
    const count = getByTestId("count");

    console.log(count.textContent);

    fireEvent.click(button);

    expect(count).toHaveTextContent("0");
});
