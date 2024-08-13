// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  min-height: 100vh;
`
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #434451;
  width: 60%;
  height: 400px;
  border-radius: 10px;
`
export const Heading = styled.h1`
  font-size: 30px;
  color: #ffffff;
  font-family: Roboto;
`
export const Para = styled.p`
  font-size: 20px;
  color: #f8fafc;
`
export const PasswordInputField = styled.input`
  width: 60%;
  padding-block: 8px;
  padding-inline: 12px;
  outline: none;
  border-radius: 6px;
  border: none;
`
export const ErrorMsg = styled.p`
  font-size: 16px;
  color: #ef4444;
`
