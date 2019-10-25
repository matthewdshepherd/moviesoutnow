export const toggleModal = (toggleState = false, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return !toggleState
    default:
      return toggleState
  }
}