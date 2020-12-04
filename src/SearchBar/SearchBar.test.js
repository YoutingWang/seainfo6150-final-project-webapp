import React from "react";
import {
    render
} from "@testing-library/react";
import SearchBar from "./SearchBar.jsx";

const search = {
    "term": "pizza",
    "location": "san jose"
};

it("renders the home component correctly", () => {
            const {
                container
            } = render( < SearchBar search = {
                    search
                }
                / > );
                expect(container).toMatchSnapshot();
            });