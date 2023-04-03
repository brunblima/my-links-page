import styled from "styled-components";

export const Container =  styled.div`
  max-width: 500px;
  margin: 0 auto;

  @media screen and (max-width:720px) {
    max-width: 350px;
  }
`

export const Button = styled.a`

  color: #000000;
  background-color: #ffffff;

  width: 100%;
  min-height: 3.5rem;
  vertical-align: middle;
  margin-top: 1.5rem;

  text-decoration: none;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;

  display: block;
  font-weight: 500;
  border: none;
  border-radius: 50px;

  &:hover {
    color: #ffffff;
    background-color: #e7323f;

`
