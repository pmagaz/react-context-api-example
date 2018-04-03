import { createActions } from './createActions'

export const createStore = (state) => {
  const actions = createActions(state)
  return { ...state, actions }
}