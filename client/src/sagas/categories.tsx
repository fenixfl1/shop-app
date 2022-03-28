import { call, ForkEffect, put, takeLatest } from 'redux-saga/effects'
import {
  getCategoriesSuccess,
  getCategoriesFailure,
} from '../actions/categories'
import { GENERAL_GET_CATEGORIES } from '../constants/actions'
import { categoriesApiHelper } from '../utils/api'

function* getCategoriesSaga() {
  try {
    const { data: response } = yield call(() => {
      return categoriesApiHelper.getCategories()
    })
    const { data } = response
    yield put(getCategoriesSuccess(data))
  } catch ({ response }) {
    yield put(getCategoriesFailure())
  }
}

function* watchGetCategories(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(GENERAL_GET_CATEGORIES, getCategoriesSaga)
}

export { watchGetCategories }
