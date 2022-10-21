import { HeaderContainer, HeaderContent } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import logoImg from '../../assets/logo.svg';
import { RegisterHoursModal } from "../RegisterHoursModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button>Registrar horas</button>
          </Dialog.Trigger>

          <RegisterHoursModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}