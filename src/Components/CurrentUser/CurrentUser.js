import React from 'react'
import './CurrentUser.css'

const CurrentUser = () => {


  return (
    <div className="currentUser__div">
      <p className="currentUser__p--name">Current User</p>
      <button
        type="button"
        className="view--favorite--movies__button">Favorite Movies</button>
      <button
        type="button"
        className="sign--out__button">Sign Out</button>
    </div>
  )
}

export default CurrentUser