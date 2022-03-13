import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "enzyme";
import { Profile } from "../../pages/profile/profile.page";
import { BotsContext } from "../../context/bots.context";
import { defaultProfile } from "./../../services/data";

describe("Profile Page", () => {
  it("correctly renders Profile Page Loader if bot is unavailable", () => {
    const wrapper = render(
      <BotsContext.Provider
        value={{
          getBot: () => null,
        }}
      >
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </BotsContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("correctly renders Bot Profile if bot is available", () => {
    const mockGetBot = jest.fn(() => {
      return defaultProfile;
    });
    const wrapper = render(
      <BotsContext.Provider
        value={{
          getBot: mockGetBot,
        }}
      >
        <BrowserRouter>
          <Profile />
        </BrowserRouter>
      </BotsContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
