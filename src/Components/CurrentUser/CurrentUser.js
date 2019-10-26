import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './CurrentUser.css'
import { signOut } from '../../Actions'

export class CurrentUser extends React.Component{
  constructor() {
    super()
  }

  render() {
    { console.log(this.props.currentUser.id) }
    return (
      <div className={this.props.currentUser.id ? 'currentUser__div' : 'currentUser__hidden'}>
        <p className="currentUser__p--name">{this.props.currentUser.name}</p>
        <button
          type="button"
          className="view--favorite--movies__button">Favorite Movies</button>
        <button
          type="button"
          className="sign--out__button"
          onClick={ () => this.props.signOut()}
        >Sign Out</button>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ signOut }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUser)