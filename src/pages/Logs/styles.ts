import styled from "styled-components";

export const LogsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const LogsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  th {
    text-align: center;
    padding: 0.825rem 0.5rem;
    background: ${props => props.theme.light100};
    color: ${ props => props.theme.gray };

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
    
  }

  td {
    text-align: center;
    padding: 1.25rem 1rem;
    background: ${props => props.theme.darkblue};
  
    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }


`