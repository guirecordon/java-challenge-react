import styled from "styled-components";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto; 
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -4rem;
`

export const SummaryCard = styled.div`
  background: ${ props => props.theme.darkblue };
  box-shadow: 0 0 20px ${ props => props.theme.gray };
  border-radius: 48px;
  padding: 1rem 2.5rem;

  &:last-child {
    background: ${ props => props.theme.blue }
  }
`

export const CardHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LoggedHours = styled.strong`
  font-size: 2rem;
`