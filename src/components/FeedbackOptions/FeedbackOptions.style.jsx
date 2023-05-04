import styled from '@emotion/styled'


export const ButtonCountainer=styled.div`
   display: flex;

   align-items: center;

   justify-content: center;

`

export const Button = styled.button`
  margin-left: 8px;
  width: 64px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background-color: rgb(102 129 159);
  color: white;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
    background-color: #306097;

  }

`;