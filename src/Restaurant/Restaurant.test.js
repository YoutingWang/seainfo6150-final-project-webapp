import React from "react";
import { render } from "@testing-library/react";
import Restaurant from "./Restaurant";
const restaurant = {
            "id": "ufl25yYz8lXeKzt11nZOUQ",
            "alias": "maldonados-pizzeria-mountain-view",
            "name": "Maldonado's Pizzeria",
            "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/V0ButCWCkna7ieqkq4dlRA/o.jpg",
            "is_closed": false,
            "url": "https://www.yelp.com/biz/maldonados-pizzeria-mountain-view?adjust_creative=z8902j_QQLYWdUdGPKjP3A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=z8902j_QQLYWdUdGPKjP3A",
            "review_count": 526,
            "categories": [
                {
                    "alias": "pizza",
                    "title": "Pizza"
                }
            ],
            "rating": 4.0,
            "coordinates": {
                "latitude": 37.3963847,
                "longitude": -122.1009097
            },
            "transactions": [
                "delivery"
            ],
            "price": "$",
            "location": {
                "address1": "615 S Rengstorff Ave",
                "address2": "",
                "address3": "",
                "city": "Mountain View",
                "zip_code": "94040",
                "country": "US",
                "state": "CA",
                "display_address": [
                    "615 S Rengstorff Ave",
                    "Mountain View, CA 94040"
                ]
            },
            "phone": "+16509628499",
            "display_phone": "(650) 962-8499",
            "distance": 3389.2434837571523
};

describe("Restaurant tests", () => {
    it("renders correctly", () => {
        const { container } = render(<Restaurant restaurant={restaurant}/>);
        expect(container).toMatchSnapshot();
    });
}); 