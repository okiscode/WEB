import { yourExpectationsData } from "../../mockData/yourExpectationsData.js";
import { YourExpectationsTemplate } from "../templates/yourExpectationsTemplate.js";

const initYourExpectations = (yourExpectationsNode) => {
  yourExpectationsNode.insertAdjacentHTML("beforeend", YourExpectationsTemplate(yourExpectationsData));
};

export default initYourExpectations;