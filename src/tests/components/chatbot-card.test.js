import React from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { mount, render } from "enzyme";
import { ChatbotCard } from "../../components/chatbot-card/chatbot-card.component";
import { defaultProfile } from "../../services/data";
import { BotsContext } from "../../context/bots.context";

const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <BotsContext.Provider {...providerProps}>{ui}</BotsContext.Provider>,
    renderOptions
  );
};

defaultProfile.id = "ad4t4rww4";

const mockedNavigator = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigator,
}));

describe("ChatBot Card", () => {
  it("correctly renders ChatBot Card", () => {
    const wrapper = render(
      <BotsContext.Provider
        value={{ view: "grid", toggleFavorite: () => null }}
      >
        <BrowserRouter>
          <ChatbotCard bot={defaultProfile} />
        </BrowserRouter>
      </BotsContext.Provider>
    );
    //console.log(wrapper);
    expect(wrapper).toMatchSnapshot();
  });

  it("calls the toggleFavourite Function if Star is Clicked", () => {
    const toggleFavorite = jest.fn();

    const wrapper = mount(
      <div>
        <BotsContext.Provider value={{ view: "grid", toggleFavorite }}>
          <BrowserRouter>
            <ChatbotCard bot={defaultProfile} />
          </BrowserRouter>
        </BotsContext.Provider>
      </div>
    );

    wrapper.find("div.card.grid > button").simulate("click");

    expect(toggleFavorite).toBeCalledTimes(1);
    expect(toggleFavorite).toBeCalledWith(defaultProfile);
  });

  it("displays the list view if specified", () => {
    const toggleFavorite = jest.fn();

    const wrapper = mount(
      <div>
        <BotsContext.Provider value={{ view: "list", toggleFavorite }}>
          <BrowserRouter>
            <ChatbotCard bot={defaultProfile} />
          </BrowserRouter>
        </BotsContext.Provider>
      </div>
    );

    expect(wrapper.find("div.card.list")).toHaveLength(1);
  });

  it("displays the grid view if specified", () => {
    const toggleFavorite = jest.fn();

    const wrapper = mount(
      <div>
        <BotsContext.Provider value={{ view: "grid", toggleFavorite }}>
          <BrowserRouter>
            <ChatbotCard bot={defaultProfile} />
          </BrowserRouter>
        </BotsContext.Provider>
      </div>
    );

    expect(wrapper.find("div.card.grid")).toHaveLength(1);
  });

  it("calls the navigate function on Card Click", () => {
    const wrapper = mount(
      <div>
        <BotsContext.Provider
          value={{ view: "grid", toggleFavorite: () => null }}
        >
          <BrowserRouter>
            <ChatbotCard bot={defaultProfile} />
          </BrowserRouter>
        </BotsContext.Provider>
      </div>
    );
    wrapper.find("div.card.grid").simulate("click");
    expect(mockedNavigator).toBeCalledTimes(1);
    expect(mockedNavigator).toBeCalledWith(`/profile/${defaultProfile.id}`);
  });
});
