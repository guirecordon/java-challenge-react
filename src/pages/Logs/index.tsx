import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/searchForm";
import { LogsContainer, LogsTable } from "./styles";

export function Logs() {
  return (
    <>
      <Header />
      <Summary />
      <SearchForm />

      <LogsContainer>
        <LogsTable>
          <thead>
            <tr>
              <th>Projeto</th>
              <th>Tarefa</th>
              <th>Tempo logado</th>
              <th>Dia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="30%">App Clínica Dentária</td>
              <td width="40%">Calendário de agendamentos</td>
              <td>2.5h</td>
              <td>20 out 2022</td>
            </tr>
            <tr>
              <td width="25%">App Clínica Dentária</td>
              <td width="35%">Calendário de agendamentos</td>
              <td>2.5h</td>
              <td>20 out 2022</td>
            </tr>
          </tbody>
        </LogsTable>
      </LogsContainer>
    </>
  )
}