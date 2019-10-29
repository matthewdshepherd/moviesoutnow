import React from "react"
import "./LoginForm.css"
import { connect } from 'react-redux'
import { postUserLogin } from '../../Thunks/postUserLogin'
import { toggleModal } from '../../Actions'
import { bindActionCreators } from 'redux';


export class LoginForm extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postUserLogin(this.state)
    this.setState({
      email: "",
      password: ""
    })
  }

  handleChange = event => {
    this.setState( {[event.target.name]: event.target.value})
  };

  canBeSubmitted() {
   const { email, password } = this.state;
   return email.length > 0 && password.length > 0;
 }

  render() {
    const isEnabled = this.canBeSubmitted();
    const hidden = {display: 'none'}
    return(
      <form className="header--login" onSubmit={(event) => this.handleSubmit(event)}>
        <div className="header--userinput__div">
          <label
            className="login__label"
            htmlFor="email">Email</label>
          <input
            className="header--userinput__input"
            id="email"
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <p className="login--bottomtext new--account__btn"
            onClick={ this.props.toggleModal }
          >Create new account</p>
        </div>
        <div className="header--userinput__div">
          <label
            className="login__label"
            htmlFor="password">Password</label>
          <input
            className="header--userinput__input"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <p className="login--bottomtext">Forgot account?</p>
        </div>
        <input type='submit' style={hidden} />
        <button
          type="button"
          className="login__button"
          onClick={(event) => this.handleSubmit(event)} 
          disabled={!isEnabled}>Login</button>
      </form>
    )
  }
}

const mapStateToProps = ({ toggleModal }) => ({
  toggleModal,
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ toggleModal, postUserLogin }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)