import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react'
import { CloseButton, Content, Overlay } from './styles';

export function RegisterHoursModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>
          Registrar Horas Trabalhadas
        </Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder='Projeto' required />
          <input type="text" placeholder='Tarefa' required />
          <input type="text" placeholder='Hora de Início' required />
          <input type="text" placeholder='Hora de Término' required />

          <button type='submit'>Registrar horas</button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}