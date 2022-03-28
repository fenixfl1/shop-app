import { CategoriesActions } from '../actions/categories'
import {
  GENERAL_GET_CATEGORIES,
  GENERAL_GET_CATEGORIES_SUCCESS,
  GENERAL_GET_CATEGORIES_FAILURE,
} from '../constants/actions'

export type CategoriesState = {
  categories: any[]
  sendingData: boolean
}

const initialState: CategoriesState = {
  sendingData: false,
  categories: new Array<any>(),
}

const categories = (action: CategoriesActions, state = initialState) => {
  switch (action?.type) {
    case GENERAL_GET_CATEGORIES: {
      return {
        ...state,
        sendingData: true,
      }
    }
    case GENERAL_GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        sendingData: false,
        categories: action.categories,
      }
    }
    case GENERAL_GET_CATEGORIES_FAILURE: {
      return {
        ...state,
        sendingData: false,
      }
    }
    default:
      return state
  }
}

export default categories
