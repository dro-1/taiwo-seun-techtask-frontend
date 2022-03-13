import React from "react";
import { shallow } from "enzyme";
import { Loader } from "../../components/loader/loader.component";

describe("Loader Component", () => {
  it("expect to render Loader", () => {
    const loader = shallow(<Loader />);
    expect(loader).toMatchSnapshot();
  });
});
