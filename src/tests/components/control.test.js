import React from "react";
import { BrowserRouter } from "react-router-dom";
import { mount, render } from "enzyme";
import { Control } from "../../components/control/control.component";
import { BotsContext } from "../../context/bots.context";

describe("Control Component", () => {
  it("correctly renders Control Component", () => {
    const wrapper = render(
      <BotsContext.Provider
        value={{ sortBots: () => null, setView: () => null }}
      >
        <BrowserRouter>
          <Control setSearchText={() => null} searchText="" />
        </BrowserRouter>
      </BotsContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("calls the sortBots function with name if 'Order with Name' is clicked", () => {
    const mockSortBots = jest.fn();
    const wrapper = mount(
      <BotsContext.Provider
        value={{ sortBots: mockSortBots, setView: () => null }}
      >
        <BrowserRouter>
          <Control setSearchText={() => null} searchText="" />
        </BrowserRouter>
      </BotsContext.Provider>
    );

    wrapper.find('[data-test="order-name"]').simulate("click");

    expect(mockSortBots).toBeCalledTimes(1);
    expect(mockSortBots).toBeCalledWith("name");
  });

  it("calls the sortBots function with creation if 'Order with Creation' is clicked", () => {
    const mockSortBots = jest.fn();
    const wrapper = mount(
      <BotsContext.Provider
        value={{ sortBots: mockSortBots, setView: () => null }}
      >
        <BrowserRouter>
          <Control setSearchText={() => null} searchText="" />
        </BrowserRouter>
      </BotsContext.Provider>
    );

    wrapper.find('[data-test="order-creation"]').simulate("click");

    expect(mockSortBots).toBeCalledTimes(1);
    expect(mockSortBots).toBeCalledWith("creation");
  });

  it("calls the setView function with grid if grid icon is clicked", () => {
    const mockSetView = jest.fn();
    const wrapper = mount(
      <BotsContext.Provider
        value={{ sortBots: () => null, setView: mockSetView }}
      >
        <BrowserRouter>
          <Control setSearchText={() => null} searchText="" />
        </BrowserRouter>
      </BotsContext.Provider>
    );

    wrapper.find('[data-test="view-grid"]').simulate("click");

    expect(mockSetView).toBeCalledTimes(1);
    expect(mockSetView).toBeCalledWith("grid");
  });

  it("calls the setView function with list if list icon is clicked", () => {
    const mockSetView = jest.fn();
    const wrapper = mount(
      <BotsContext.Provider
        value={{ sortBots: () => null, setView: mockSetView }}
      >
        <BrowserRouter>
          <Control setSearchText={() => null} searchText="" />
        </BrowserRouter>
      </BotsContext.Provider>
    );

    wrapper.find('[data-test="view-list"]').simulate("click");

    expect(mockSetView).toBeCalledTimes(1);
    expect(mockSetView).toBeCalledWith("list");
  });
});
