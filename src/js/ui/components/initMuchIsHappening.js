import { muchIsHappeningData } from "../../mockData/muchIsHappeningData.js";
import { muchIsHappeningTemplate } from "../templates/muchIsHappeningTemplate.js";

const initMuchIsHappening = (muchIsHappeningNode) => {
  muchIsHappeningNode.insertAdjacentHTML("beforeend", muchIsHappeningTemplate(muchIsHappeningData));
};

export default initMuchIsHappening;