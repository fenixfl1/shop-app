import { combineReducers } from 'redux'
import categories from './categories'
import products, { ProductsState } from './products'
import user, { UserState } from './user'

export type StoreState = {
  categories: any
  products: ProductsState
  user: UserState
}

export default combineReducers({ categories, products, user })
