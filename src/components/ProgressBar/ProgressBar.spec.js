import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import ProgressBar from "./ProgressBar";

describe("ProgressBar", () => {
  test("should getWidthAsPercentOfTotalWidth should return 250 with total width of 500 and percent of 50", () => {
    const wrapper = Enzyme.shallow(<ProgressBar width={500} percent={50} />);
    const width = wrapper.instance().getWidthAsPercentOfTotalWidth();

    expect(width).toEqual(250);
  });
});
