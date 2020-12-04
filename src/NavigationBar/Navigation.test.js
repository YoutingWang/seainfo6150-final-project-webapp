import React from "react";
import {
    render
} from "@testing-library/react";
import Navigation from "./Navigation.jsx";

it("renders the home component correctly", () => {
    const {
        container
    } = render( < Navigation / > );
    expect(container).toMatchSnapshot();
});