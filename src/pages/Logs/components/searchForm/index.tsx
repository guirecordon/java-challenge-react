import { SearchButton, SearchFormContainer, SearchInput } from "./styles";
import { MagnifyingGlass } from 'phosphor-react';

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchInput />

      <SearchButton>
        <MagnifyingGlass size={18} weight="bold" />
        <span>Buscar</span>
      </SearchButton>
    </SearchFormContainer>
  )
}