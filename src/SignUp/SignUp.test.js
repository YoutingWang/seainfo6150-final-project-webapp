import React from "react";
import {
    render
} from "@testing-library/react";
import SignUp from "./SignUp.jsx";

it("renders the home component correctly", () => {
    const {
        container
    } = render( < SignUp / > );
    expect(container).toMatchSnapshot();
});