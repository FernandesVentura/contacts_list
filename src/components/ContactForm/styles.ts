import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(15, 15, 20, 0.8); /* fundo mais escuro e suave */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`

export const FormContainer = styled.div`
  background: #1f2028; /* tom escuro neutro */
  padding: 32px 36px;
  border-radius: 16px;
  width: 420px;
  max-width: 90vw;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const Input = styled.input`
  padding: 18px;
  font-size: 18px;
  border-radius: 8px;
  border: 1.8px solid #444654;
  background-color: #2a2b38;
  color: #e0e0e0;
  outline-offset: 2px;
  transition: border-color 0.3s ease;
  margin-bottom: 8px;

  &:focus {
    border-color: #4a90e2;
    background-color: #363746;
  }

  &::placeholder {
    color: #8a8a9f;
  }
`

export const Select = styled.select`
  padding: 14px 18px;
  font-size: 17px;
  border-radius: 12px;
  border: 1.8px solid #444654;
  background-color: #2a2b38;
  color: #e0e0e0;
  outline-offset: 2px;
  cursor: pointer;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4a90e2;
    background-color: #363746;
  }
`

export const Button = styled.button`
  padding: 8px;
  background-color: #4a90e2;
  color: white;
  font-size: 18px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-left: 8px;

  transition: background-color 0.25s ease;

  &:hover {
    background-color: rgb(42, 86, 130);
  }

  &:active {
    background-color: #2a5d8f;
  }
`

export const CancelButton = styled(Button)`
  background-color: rgb(240, 85, 85);
  box-shadow: none;
  margin-top: 8px;

  &:hover {
    background-color: rgb(110, 70, 70);
  }

  &:active {
    background-color: #444556;
  }
`
