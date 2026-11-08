import { stepIntoTheFutureData } from "../../mockData/stepIntoTheFutureData.js";
import { stepIntoTheFutureTemplate } from "../templates/stepIntoTheFutureTemplate.js";

const initStepIntoTheFuture = (stepIntoTheFutureNode) => {
  stepIntoTheFutureNode.insertAdjacentHTML("beforeend", stepIntoTheFutureTemplate(stepIntoTheFutureData));
};

export default initStepIntoTheFuture;