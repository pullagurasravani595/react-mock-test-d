import {Component} from 'react'
import {
  LoginContainer,
  FormContainer,
  ImageElement,
  LoginFormContainer,
  Heading,
  InputContainer,
  LabelElement,
  InputElement,
  LoginButton,
  ErrorElement,
} from './styledComponents'

class LoginForm extends Component {
  state = {userId: '', pin: '', showError: false, errorMsg: ''}

  changeUserId = event => {
    this.setState({userId: parseInt(event.target.value)})
  }

  changePin = event => {
    this.setState({pin: parseInt(event.target.value)})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {userId, pin} = this.state
    const userDetails = {userId, pin}
    const apiUrl = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(response)
    console.log(userDetails)
    console.log(data)
  }

  render() {
    const {showError, errorMsg, userId, pin} = this.state
    return (
      <LoginContainer>
        <FormContainer>
          <ImageElement
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <LoginFormContainer onSubmit={this.onSubmitForm}>
            <Heading>Welcome Back!</Heading>
            <InputContainer>
              <LabelElement htmlFor="user id">User ID</LabelElement>
              <InputElement
                type="text"
                placeholder="Enter User ID"
                value={userId}
                onChange={this.changeUserId}
              />
            </InputContainer>
            <InputContainer>
              <LabelElement htmlFor="pin">PIN</LabelElement>
              <InputElement
                type="password"
                placeholder="Enter PIN"
                value={pin}
                onChange={this.changePin}
              />
            </InputContainer>
            <LoginButton type="submit">Login</LoginButton>
            {showError && <ErrorElement>{errorMsg}</ErrorElement>}
          </LoginFormContainer>
        </FormContainer>
      </LoginContainer>
    )
  }
}

export default LoginForm
