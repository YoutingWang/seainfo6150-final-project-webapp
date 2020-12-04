import React from "react";
import {
    render
} from "@testing-library/react";
import TopBar from "./TopBar.jsx";

it("renders the home component correctly", () => {
    const {
        container
    } = render( < TopBar / > );
    expect(container).toMatchSnapshot();
});