import { CardHeader, LoggedHours, SummaryCard, SummaryContainer } from "./styles";
import { ClockClockwise } from 'phosphor-react'

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <CardHeader>
          <span>Mês</span>
          <ClockClockwise size={32} />
        </CardHeader>

        <LoggedHours>148h</LoggedHours>
      </SummaryCard>

      <SummaryCard>
        <CardHeader>
          <span>Semana</span>
          <ClockClockwise size={32} />
        </CardHeader>

        <LoggedHours>32h</LoggedHours>
      </SummaryCard>

      <SummaryCard>
        <CardHeader>
          <span>Hoje</span>
          <ClockClockwise size={32} />
        </CardHeader>

        <LoggedHours>6.5h</LoggedHours>
      </SummaryCard>
    </SummaryContainer>
  )
}