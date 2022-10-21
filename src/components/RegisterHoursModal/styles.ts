import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${ props => props.theme.darkblue };

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${ props => props.theme.blue };
      color: ${ props => props.theme.light100 };
      padding: 1rem;

      &::placeholder {
        color: ${ props => props.theme.green };
      }
    }

    button[type="submit"] {
        height: 58px;
        border: 0; 
        background: ${ props => props.theme.green };
        color: ${ props => props.theme.light100 };
        font-weight: bold;
        padding: 0 1.25rem;
        border-radius: 6px;
        margin-top: 1.5rem;
        cursor: pointer;

        &:hover {
          background: ${ props => props.theme.blue };
          transition: background-color 0.2s;
        }
      }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
`