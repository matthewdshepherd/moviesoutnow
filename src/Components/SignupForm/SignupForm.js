import React from "react"
import "./SignupForm.css"
import { postNewUser } from '../../Thunks/postNewUser'
import { connect } from 'react-redux'
import { toggleModal } from '../../Actions'
import { bindActionCreators } from 'redux';
import close_button from '../../images/close_btn.png'


export class SignupForm extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postNewUser(this.state)
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    })
    this.props.toggleModal()
  }

  handleChnage = event => {
    this.setState({ [event.target.name]: event.target.value })
  };

  canBeSubmitted() {
    const { firstName, lastName, email, password } = this.state;
    return firstName.length > 0 && email.length > 0 && lastName.length > 0 && password.length > 0 ;
  }

  render() {
    const isEnabled = this.canBeSubmitted();
    return(
      <form className="SignupForm">
        <div className="signup-login">
          <h3 className="signup-text">SIGN UP</h3>
          <img
            src={close_button }
            alt="Close Button"
            className="signup_close_button"
            onClick={() => this.props.toggleModal()}
          />
        </div>
        <div className="first--last--name__div">
          <div className="name__div--input">
            <label
            className="signup--label"
            htmlFor='firstNameSU'
            >First Name</label>
            <input
            type="text"
            className="signup--name--input"
            id="signup--name--input fname"
            placeholder="First Name"
            name="firstName"
            onChange={this.handleChnage}
            value={this.state.firstName}
            />
          </div>
          <div className="name__div--input">
            <label
            className="signup--label"
            htmlFor='lastNameSU'
            >Last Name</label>
            <input
            type="text"
            className="signup--name--input"
            id="signup--name--input lname"
            placeholder="Last Name"
            name="lastName"
            onChange={this.handleChnage}
            value={this.state.lastName}
            />
          </div>
        </div>
        <div>
          <div className="email--password--SU__div">
            <label
            className="email--password--SU__label"
            htmlFor="email">Email</label>
            <input
            type="text"
            className="email--password--SU__input"
            id="email--SU"
            placeholder="Email"
            name="email"
            onChange={this.handleChnage}
            value={this.state.email}
            />
          </div>
          <div className="email--password--SU__div">
            <label
            className="email--password--SU__label"
            htmlFor="password">Passowrd</label>
            <input
            type="password"
            className="email--password--SU__input"
            id="password--SU"
            placeholder="Password"
            name="password"
            onChange={this.handleChnage}
            value={this.state.password}
            />
          </div>
        </div>
        <button
          type="button"
          disabled={!isEnabled}
          className="signup--submit__button"
          onClick={(event) => this.handleSubmit(event)}>SIGN UP</button>
      </form>
    )
  }

}

const mapStateToProps = ({ toggleModal }) => ({ toggleModal })

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ toggleModal, postNewUser}, dispatch)
)

// const mapDispatchToProp = dispatch => ({
//   toggleModal: bool => dispatch(toggleModal(bool)),
//   postNewUser: () => dispatch(postNewUser)
// })

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
