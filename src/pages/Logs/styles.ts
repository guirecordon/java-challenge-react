import styled from "styled-components";

export const ColorWrapper = styled.div`
  background: #6e5f5f;
` 

export const LogsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
`

export const LogsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 0.5rem;

  th {
    text-align: center;
    padding: 0.5rem 0.5rem;
    background: rgba(0, 0, 0, 0.00);
    color: ${ props => props.theme.gray };
    color: ${ props => props.theme.light100 };
  }

  td {
    text-align: center;
    padding: 1.25rem 1rem;
    background: rgba(0, 0, 0, 0.32);
  
    &:first-child {
      border-top-left-radius: 48px;
      border-bottom-left-radius: 48px;
    }

    &:last-child {
      border-top-right-radius: 48px;
      border-bottom-right-radius: 48px;
    }
  }


`