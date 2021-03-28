import VendedorLayout from "./../../../../src/layouts/VendedorLayout";
import Drawer from "./../../../../src/components/Drawer";
import ToolBar from "./../../../../src/components/ToolBar"; // <= note the absence of `.vue` extension, here we are importing the JS/TS part of a Double File Component
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

describe("Test VendedorLayout", () => {
  localVue.use(Quasar, { components });

  const build = () => {
    const wrapper = shallowMount(VendedorLayout, {
      localVue: localVue
    });
    return {
      wrapper,
      drawer: () => wrapper.findComponent(Drawer),
      toolbar: () => wrapper.findComponent(ToolBar)
    };
  };

  test("render a vue instance for VendedorLayout component", () => {
    const { wrapper } = build();
    expect(wrapper.exists()).toBe(true);
  });

  it("render the two children components from VendedorLayout ", () => {
    const { wrapper, drawer, toolbar } = build();
    expect(drawer().exists()).toBe(true);
    expect(toolbar().exists()).toBe(true);
  });
});
