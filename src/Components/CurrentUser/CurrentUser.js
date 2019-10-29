import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './CurrentUser.css';
import { signOut } from '../../Actions';

export class CurrentUser extends React.Component{

  handleClick = (event) => {
    event.preventDefault();
    this.props.signOut();
    this.props.setFavorites([]);
  }

  render() {
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
            onClick={(event) => this.handleClick(event)}>
          <Link to='/' className='sign--out__button'>
            Sign Out
          </Link>
        </button>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, favorites }) => ({
  currentUser,
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ signOut }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUser)