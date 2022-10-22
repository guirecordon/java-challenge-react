import { HeaderContainer, HeaderContent } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
import logoHorizonImg from '../../assets/logo-horizon.svg';
import { RegisterHoursModal } from "../RegisterHoursModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoHorizonImg} alt="" />

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