import React from "react";
import {
    render
} from "@testing-library/react";
import Contact from "./Contact.jsx";

it("renders the home component correctly", () => {
    const {
        container
    } = render( < Contact / > );
    expect(container).toMatchSnapshot();
});