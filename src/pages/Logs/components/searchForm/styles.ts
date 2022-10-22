import styled from "styled-components";

export const SearchFormContainer = styled.div`
  display: flex;

  position: relative;
  
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 4rem 1.5rem 3.5rem;
`

export const SearchInput = styled.input`
  flex: 1;

  height: 3.5rem;
  background: rgba(0, 0, 0, 0.20);
  color: ${ props => props.theme.light100 };
  padding-left: 1.25rem;
  padding-right: 10rem;
  border-radius: 48px;
  box-shadow: 0;
  border: 0;
  margin-right: 1rem;

  &::placeholder {
    color: ${ props => props.theme.darkblue };
  }
`

export const SearchButton = styled.button`
  position: absolute;
  top: 4.325rem;
  right: 2.85rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  
  background: transparent;
  color: ${ props => props.theme.light100 };
  border: 2px solid ${ props => props.theme.light100 };
  border-radius: 48px;
  padding: 0.725rem 2rem;
  cursor: pointer;

  &:hover {
    border: 2px solid ${ props => props.theme.darkblue };
    background: ${ props => props.theme.darkblue };
    color: ${ props => props.theme.gray };
  }
`