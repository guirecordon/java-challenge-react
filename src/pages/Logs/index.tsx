import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/searchForm";
import { ColorWrapper, LogsContainer, LogsTable } from "./styles";

export function Logs() {
  return (
    <ColorWrapper>
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
                <td width="40%">Calendário de agendamento responsivo</td>
                <td>3.5h</td>
                <td>20 out 2022</td>
              </tr>
              <tr>
                <td width="25%">App Clínica Dentária</td>
                <td width="35%">Consertar bug no avatar do usuário</td>
                <td>2.5h</td>
                <td>20 out 2022</td>
              </tr>
              <tr>
                <td width="25%">App de Cobranças</td>
                <td width="35%">Hotfix bug no portal de pagamentos</td>
                <td>1h</td>
                <td>21 out 2022</td>
              </tr>
            </tbody>
        </LogsTable>
      </LogsContainer>
    </ColorWrapper>
  )
}