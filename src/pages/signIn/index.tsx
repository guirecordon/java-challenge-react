import { EmailInput, FormButton, LoginForm, SignInContainer, SignInHeader } from "./styles";
import pageLogo from '../../assets/logo.svg'

export function SignIn() {
  return (
    <SignInContainer>
      <SignInHeader>
        <img src={pageLogo} />
        <h2>Registre-se ou faça log in</h2>
      </SignInHeader>

      <LoginForm>
        <EmailInput />
        <p>Ao continuar você concorda com a <a href="/">Política de Privacidade</a> e os <a href="/">Termos de Uso</a></p>
        <FormButton>Próximo</FormButton>
      </LoginForm>

    </SignInContainer>
  )
}