export const hasErrored = (state = '', action) => {
  switch (action.type) {
    case 'HAS_ERRORED':
      return action.msg
    default:
      return state
  }
}