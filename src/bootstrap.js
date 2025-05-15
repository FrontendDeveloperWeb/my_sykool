import lodash from "lodash";
import constants from "./config/constants";
import helper from "./helpers";
function bootstrap() {
  window.lodash = lodash;
  window.constants = constants;
  window.helper = helper;
  window.user = window.helper.getStorageData("user");
}

export default bootstrap;
