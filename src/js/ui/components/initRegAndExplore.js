import { regAndExploreData } from "../../mockData/regAndExploreData.js";
import { RegAndExploreTemplate } from "../templates/regAndExploreTemplate.js";

const initRegAndExplore = (regAndExploreNode) => {
  regAndExploreNode.insertAdjacentHTML("beforeend", RegAndExploreTemplate(regAndExploreData));
};

export default initRegAndExplore;