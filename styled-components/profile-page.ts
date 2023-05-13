import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  height: 100vh;
  gap: 50px ;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`
export const TasksField = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`

export const TaskButton = styled.button`
  width: 300px;
  height: 50px;
  font-size: 20px;
  border: none;
  background-color: bisque;
  padding: 15px 15px;
  cursor: pointer;
  transition: 0.2s transform ease-in-out;
  will-change: transform;
  z-index: 0;
  position: relative;
  overflow: hidden;
  color: brown;

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
    color: sandybrown;
    transform: scale(1.05);
    will-change: transform;
`

export const LogOutButton = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  font-size: 18px;
  background-color: bisque;
  padding: 15px 15px;
  cursor: pointer;
  transition: 0.2s transform ease-in-out;
  will-change: transform;
  z-index: 0;
  position: relative;
  overflow: hidden;
  color: brown;


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
    color: sandybrown;
    transform: scale(1.05);
    will-change: transform;

`