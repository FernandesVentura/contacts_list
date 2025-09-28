import styled from 'styled-components'

export const Card = styled.div`
  background-color: rgb(38, 38, 48);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.01);
  }
`

export const ContactName = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #f0f0f0;
  margin-bottom: 8px;
`

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`

export const InfoText = styled.p`
  font-size: 14px;
  color: #ccc;
  margin: 2px 0;
  text-align: right;
`

export const Tag = styled.span`
  padding: 4px 10px;
  background-color: #444;
  color: #aaa;
  font-size: 14px;
  border-radius: 6px;
`

export const ActionBar = styled.div`
  border-top: 1px solid #444;
  margin-top: 12px;
  padding-top: 12px;
  display: flex;
  gap: 8px;
`

export const BtnButton = styled.button`
  padding: 8px 12px;
  width: 100px;
  background-color: #1e90ff;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background-color: #1c7ee8;
  }

  @media (max-width: 500px) {
    width: 55px;
    font-size: 10px;
    padding: 8px 5px;
  }
`
