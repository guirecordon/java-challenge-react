import styled from "styled-components";


export const HeaderContainer = styled.header`
  background: ${ props => props.theme.darkblue };
  padding: 2.5rem 0 7.5rem;
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
    height: 6.25rem;
    width: 6.25rem;
  }

  button {
    background: ${ props => props.theme.light100 };
    color: ${ props => props.theme.gray };
    padding: 1rem;
    outline: 0;
    border: 0;
    border-radius: 24px;
    width: 11.25rem;
    cursor: pointer;

    &:hover {
      background: ${ props => props.theme.darkblue };
      transition: background-color 0.2s;
    }
  }
`