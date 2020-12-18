import React from "react";
import { shallow } from "enzyme";

import { App } from "./App";

describe("App", () => {
    it("this is a simple test", () => {
        const result = shallow(<App />);

        expect(result.find(".App-header").text()).toEqual("Page has been open for 0 seconds.");

        const btn = result.find("button");

        const onClick: any = btn.prop("onClick");

        onClick();

        result.update();

        expect(result.find(".App-header").text()).toEqual("Page has been open for 1 seconds.");
    });
});
