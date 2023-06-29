import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
  background-size: cover;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #e0eefe;
  width: 50%;
  height: 50%;
  border-radius: 12px;
  margin-top: 40px;
`

export const ImageElement = styled.img`
  width: 50%;
  height: 400px;
`
export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #ffffff;
  width: 100%;
  border-radius: 16px;
  padding-top: 12px;
  padding-left: 14px;
`
export const Heading = styled.h1`
  color: #183b56;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 28px;
  padding-top: 30px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding-top: 6px;
  width: 100%;
`
export const LabelElement = styled.label`
  font-size: 19px;
  color: #5a7184;
  font-weight: bold;
  margin-top: 6px;
  font-family: 'Roboto';
`
export const InputElement = styled.input`
  height: 26px;
  outline: none;
  width: 85%;
  margin-top: 8px;
`
export const LoginButton = styled.button`
  background-color: #1565d8;
  line-height: 2;
  width: 80%;
  height: 30px;
  border-width: 0px;
  align-self: flex-start;
  margin-top: 13px;
  color: #ffffff;
`
export const ErrorElement = styled.p`
  color: #ff0b37;
  font-size: 12px;
  font-family: 'Roboto';
  align-self: flex-start;
`
