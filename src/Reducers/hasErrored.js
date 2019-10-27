export const hasErrored = (state = '', action) => {
  switch (action.type) {
    case 'HAS_ERRORED':
      return action.msg
    case 'CLEAR_ERROR':
      return ""
    default:
      return state
  }
}