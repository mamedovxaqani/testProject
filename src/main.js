import { createApp } from "vue";
import App from "./App.vue";
import leftPanel from "./components/leftPanel";
import mainComponent from "./components/mainComponent";
import headerComponent from "./components/main/headerComponent";
import mainHeader from "./components/main/mainHeader";
import mainContainer from "./components/main/mainContainer";
import filterMenu from "./components/main/filterMenu";
import mainContent from "./components/main/mainContent";
import mainCards from "./components/main/mainCards";

createApp(App)
  .component("leftPanel", leftPanel)
  .component("mainComponent", mainComponent)
  .component("headerComponent", headerComponent)
  .component("mainHeader", mainHeader)
  .component("mainContainer", mainContainer)
  .component("filterMenu", filterMenu)
  .component("mainContent", mainContent)
  .component("mainCards", mainCards)
  .mount("#app");
