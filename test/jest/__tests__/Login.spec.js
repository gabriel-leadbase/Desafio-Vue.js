import Login from "./../../../src/pages/Login"; // <= note the absence of `.vue` extension, here we are importing the JS/TS part of a Double File Component
import { createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import Quasar, * as All from "quasar";

const localVue = createLocalVue();

localVue.use(Vuex);
const components = Object.keys(All).reduce((object, key) => {
  const val = All[key];
  if (val && val.component && val.component.name != null) {
    object[key] = val;
  }
  return object;
}, {});

describe("Test Login interface", () => {
  localVue.use(Quasar, { components });
  const wrapper = shallowMount(Login, {
    localVue
  });

  test("render a vue instance for Login component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("login exists", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
