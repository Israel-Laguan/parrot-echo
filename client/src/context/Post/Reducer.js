import { GET_DATA } from '../types'

export default (state, action) => {
  const { payload, type } = action

  switch (type) {
    case GET_DATA:
      return {
        ...state,
        items: payload
      }
    default:
      return state
  }
}
