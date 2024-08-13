// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  SubContainer,
  Heading,
  Para,
  PasswordInputField,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <SubContainer>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <PasswordInputField
          type="password"
          onChange={onChangePassword}
          value={password}
        />
        {password.length < 8 && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </SubContainer>
    </MainContainer>
  )
}

export default PasswordValidator
