import React from "react"
import "./LoginForm.css"
import movie_time_logo from '../../images/movie_time.png'
import { connect } from 'react-redux'
import { postUserLogin } from '../../Thunks/postUserLogin'
import { toggleModal, hasErrored } from '../../Actions'
import { bindActionCreators } from 'redux';
import error_icon from '../../images/error_icon.png'



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
    this.props.currentUser.id ? this.setState({
      email: "",
      password: ""
    }) : this.setState({
      password: ""
    })
  }

  handleChnage = event => {
    this.setState( {[event.target.name]: event.target.value})
  };

  canBeSubmitted() {
   const { email, password } = this.state;
   return email.length > 0 && password.length > 0;
  }
  
  createNewAccountModal = () => {
    this.props.toggleModal()
    this.props.hasErrored('', { type: 'CLEAR_ERROR' })
  }

  render() {
    const isEnabled = this.canBeSubmitted();
    return (
      <div className="errorHolder__div">
        <form className={this.props.currentUser.id ? 'header--login__hidden' : 'header--login'}>
          <div className="header--userinput__div">
            <label
              className="login__label"
              htmlFor="email">Email</label>
            <input
              className={this.props.error === "Unauthorized" ? "header--userinput__input error__input" : "header--userinput__input"}
              id="email"
              type="text"
              name="email"
              placeholder="Email"
              onChange={this.handleChnage}
              value={this.state.email} />
            <p className="login--bottomtext new--account__btn"
              onClick={() => this.createNewAccountModal()}
            >Create new account</p>
          </div>
          <div className="header--userinput__div">
            <label
              className="login__label"
              htmlFor="password">Password</label>
            <input
              className={this.props.error === "Unauthorized" ? "header--userinput__input error__input" : "header--userinput__input"}
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChnage}
              value={this.state.password} />
            <p className="login--bottomtext" >Forgot account?</p>
          </div>
          <button
            type="button"
            className="login__button"
            onClick={(event) => this.handleSubmit(event)} 
            disabled={!isEnabled}>Login</button>
        </form>
        <div className={this.props.error === "Unauthorized" ? "error--text__div" : "error--text__div__hidden"}>
          <img src={error_icon}
            alt="Error Icon"
            className="error__icon" />
          <p className= "error--text"
          >The email and/or passowrd you've entered is incorrect.</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ toggleModal, currentUser, error }) => ({
  toggleModal,
  currentUser,
  error
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ toggleModal, postUserLogin, hasErrored}, dispatch)
)


// export default connect(null, mapDispatchToProps)(LoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)