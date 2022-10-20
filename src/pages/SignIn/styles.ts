import styled from "styled-components";

export const SignInContainer = styled.main`
  max-width: 28rem;
  margin: 0 auto;
  padding: 2rem;
`

export const SignInHeader = styled.header`
  padding: 1.5rem 0;
  text-align: center;

  img {
    width: 116px;
    height: 116px;
    margin-bottom: 1rem;
  }

  h2 {
    font-weight: 400;
  }
`

export const LoginForm = styled.form`
  position: relative;
  
  p {
    text-align: center;
    margin-bottom: 2.5rem;
    color: ${ props => props.theme.darkblue };
  }
`
export const Label = styled.label`
  position: absolute;
  left: 0;
  padding: 1rem;
`

export const EmailInput = styled.input`
  background: ${props => props.theme.gray};
  border: 1px solid ${props => props.theme.light100};
  border-radius: 6px;
  line-height: 1.6;
  padding: 0.85rem 0.75rem;
  margin-bottom: 2.5rem;
  width: 100%;
  color: ${ props => props.theme.light100 };
  font-weight: 400;

  &::placeholder {
    color: ${ props => props.theme.light100 };
  }
`


export const FormButton = styled.button`
  background: ${ props => props.theme.light100 };
  color: ${ props => props.theme.gray };
  padding: 1rem;
  outline: 0;
  border: 0;
  border-radius: 24px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: ${ props => props.theme.darkblue };
  }
`