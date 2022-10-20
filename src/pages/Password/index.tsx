import { EmailInput, FormButton, LoginForm, SignInContainer, SignInHeader } from "../SignIn/styles";
import pageLogo from '../../assets/logo.svg'
import { Link } from "react-router-dom";

export function Password() {

  return (
    <SignInContainer>
      <SignInHeader>
        <img src={pageLogo} />
        <h2>Log in de usuário cadastrado</h2>
      </SignInHeader>

      <LoginForm>

        <EmailInput required placeholder="Senha" type="password" />
      
        <p>Ao continuar você concorda com a <a href="/">Política de Privacidade</a> e os <a href="/">Termos de Uso</a></p>

        <Link to="/logs">
          <FormButton>Entrar</FormButton>
        </Link>
      </LoginForm>

    </SignInContainer>
  )
}