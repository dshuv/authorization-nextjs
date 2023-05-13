import styled from "styled-components";

export const LoginWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`

export const Border = styled.span`
  position: relative;
  width: 350px;
  height: 1px;

  &:before {
    content: '';
    position: absolute;
    top: -20px;
    height: 1px;
    width: 100%;
    background-color: darkslategray;
  }

  &:after {
    content: '';
    position: absolute;
    top: 370px;
    height: 1px;
    width: 100%;
    background-color: darkslategray;
  }
`

export const Title = styled.h1`
  font-size: 45px;
  margin: 0;
  color: darkslategray;
`

export const AuthorizationForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const AuthorizationField = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const Input = styled.input`
  height: 25px;
  border: 0;
  border-bottom: 1px solid #555;
  background: transparent;
  width: 280px;
  padding: 8px 0 5px 0;
  font-size: 16px;
  color: aqua;

  &:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid aqua;
  }
`
export const Label = styled.label`
  font-size: 15px;
  position: absolute;
  top: -10px;
  left: 0;
  color: darkslategray;
  pointer-events: none;
  transition: all 0.5s ease-in-out;

  ${Input}:focus ~ & {
    top: -14px;
    font-size: 14px;
    color: aqua;
  }
`


export const ErrorMessage = styled.span`
  margin-top: 5px;
  font-size: 13px;
  text-align: center;
  color: darkslategray;
`

export const AuthorizationCheckbox = styled.div`
  display: flex;
  gap: 5px;
`

export const CheckBox = styled.input`
  width: 15px;
  height: 12px;
  accent-color: aqua;
`

export const CheckBoxLabel = styled.label`
  font-size: 13px;
  color: darkslategray;

    // ${CheckBox}:checked ~ & {
  //   color: aqua;
  // }
`

export const Button = styled.button`
  width: 300px;
  height: 52px;
  background-color: darkslategray;
  padding: 15px 15px;
  border: none;
  font-size: 17px;
  cursor: pointer;
  transition: 0.2s transform ease-in-out;
  will-change: transform;
  z-index: 0;
  position: relative;
  overflow: hidden;

  &:after {
    border-radius: 3rem;
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-100%, 0) rotate(10deg);
    transform-origin: top left;
    transition: 0.4s transform ease-out;
    will-change: transform;
    z-index: -1;
  }

  &:hover {
    border: 1px solid aqua;
    color: aqua;
    transform: scale(1.05);
    will-change: transform;
  }
`