import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFavorites } from '../../Thunks/fetchFavorites';
import './CurrentUser.css';
import { signOut } from '../../Actions';

export class CurrentUser extends React.Component{
  constructor() {
    super()
  }

  render() {
    const userId = this.props.currentUser.id
    return (
      <div className={this.props.currentUser.id ? 'currentUser__div' : 'currentUser__hidden'}>
        <p className="currentUser__p--name">Welcome, {this.props.currentUser.name}!</p>
        <Link to='/favorites'>
          <button
            type="button"
            className="view--favorite--movies__button">Favorite Movies
          </button>
        </Link>  
        <button
          type="button"
          className="sign--out__button"
          onClick={ () => this.props.signOut()}
        >Sign Out</button>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, favorites }) => ({
  currentUser,
  favorites
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ signOut, fetchFavorites }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUser)