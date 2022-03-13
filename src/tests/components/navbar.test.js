import React from "react";
import { shallow } from "enzyme";
import { Navbar } from "../../components/navbar/navbar.component";

describe("Navbar Component", () => {
  it("expect to render Navbar", () => {
    const navbar = shallow(<Navbar />);
    expect(navbar).toMatchSnapshot();
  });
});
