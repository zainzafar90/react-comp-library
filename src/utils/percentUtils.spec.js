import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

import { getWidthAsPercentOfTotalWidth } from "./percentUtils";

describe("getWidthAsPercentOfTotalWidth", () => {
  test("getWidthAsPercentOfTotalWidth should return 250 with total width of 500 and percent of 50", () => {
    const width = getWidthAsPercentOfTotalWidth(50, 500);
    expect(width).toEqual(250);
  });
});
