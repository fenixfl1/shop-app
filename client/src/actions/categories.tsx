import {
  GENERAL_GET_CATEGORIES,
  GENERAL_GET_CATEGORIES_SUCCESS,
  GENERAL_GET_CATEGORIES_FAILURE,
} from "../constants/actions";

export type GetCategoriesAction = {
  type: typeof GENERAL_GET_CATEGORIES;
};

export type GetCategoriesSuccessAction = {
  type: typeof GENERAL_GET_CATEGORIES_SUCCESS;
  categories: any[];
};

export type GetCategoriesFailureAction = {
  type: typeof GENERAL_GET_CATEGORIES_FAILURE;
};

export const getCategories = (): GetCategoriesAction => {
  return {
    type: GENERAL_GET_CATEGORIES,
  };
};

export const getCategoriesSuccess = (
  categories: any[]
): GetCategoriesSuccessAction => {
  return {
    type: GENERAL_GET_CATEGORIES_SUCCESS,
    categories,
  };
};

export const getCategoriesFailure = (): GetCategoriesFailureAction => {
  return {
    type: GENERAL_GET_CATEGORIES_FAILURE,
  };
};

export type CategoriesActions =
  | GetCategoriesAction
  | GetCategoriesSuccessAction
  | GetCategoriesFailureAction;
