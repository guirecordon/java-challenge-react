import styled from "styled-components";


export const HeaderContainer = styled.header`
  background: ${ props => props.theme.gray };
  padding: 2.5rem 0 4.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto; 
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 10.25rem;
    width: 10.25rem;
  }

  button {
    background: ${ props => props.theme.light100 };
    color: ${ props => props.theme.gray };
    padding: 1rem;
    outline: 0;
    border: 0;
    border-radius: 48px;
    width: 13.25rem;
    cursor: pointer;

    &:hover {
      background: ${ props => props.theme.darkblue };
      color: ${ props => props.theme.gray };
      transition: background-color 0.2s;
    }
  }
`