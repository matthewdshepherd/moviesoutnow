import { setCurrentMovie } from '../Actions';

export const clickHandler = (event, id) => {
  return (dispatch) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(setCurrentMovie(id));
  }
}