import styled from "styled-components";

export const SearchFormContainer = styled.div`
  display: flex;

  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 4rem 1.5rem 0.5rem;
`

export const SearchInput = styled.input`
  flex: 1;

  padding-left: 0.5rem;
  border-radius: 6px;
  box-shadow: 0;
  border: 0;
  margin-right: 1rem;
`

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  
  background: transparent;
  color: ${ props => props.theme.light100 };
  border: 2px solid ${ props => props.theme.light100 };
  border-radius: 6px;
  padding: 0.725rem 2rem;
  cursor: pointer;
`