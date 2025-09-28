import styled from 'styled-components'

interface AsideProps {
  $open: boolean
}

export const Aside = styled.aside<AsideProps>`
  padding: 20px;
  background-color: rgb(38, 38, 48);
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid #333;
  box-sizing: border-box;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    transform: ${({ $open }) => ($open ? 'translateX(0)' : 'translate(-100%)')};
  }
`

export const Filtros = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
`
export const Hamburguer = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 28px;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 16px;
    left: 16px;
    z-index: 20;
  }
`

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 15;
`
