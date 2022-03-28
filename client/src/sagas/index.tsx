import { all } from "redux-saga/effects";
import { watchGetCategories } from "./categories";

export default function* rootSaga(): Generator {
  yield all([watchGetCategories()]);
}
