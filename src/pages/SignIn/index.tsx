import { EmailInput, FormButton, LoginForm, SignInContainer, SignInHeader } from "./styles";
import pageLogo from '../../assets/logo.svg'
import { Link } from "react-router-dom";

export function SignIn() {

  return (
    <SignInContainer>
      <SignInHeader>
        <img src={pageLogo} />
        <h2>Log in de usuário cadastrado</h2>
      </SignInHeader>

      <LoginForm>

        <EmailInput required placeholder="Email" type="email" />
      
        <p>Ao continuar você concorda com a <a href="/">Política de Privacidade</a> e os <a href="/">Termos de Uso</a></p>

        <Link to="/password">
          <FormButton>Próximo</FormButton>
        </Link>
      </LoginForm>

    </SignInContainer>
  )
}