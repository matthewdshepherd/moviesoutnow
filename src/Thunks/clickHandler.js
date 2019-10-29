import { setCurrentMovie } from '../Actions';

export const clickHandler = (event, id) => {
  return (dispatch) => {
    event.stopPropagation();
    dispatch(setCurrentMovie(id));
  }
}