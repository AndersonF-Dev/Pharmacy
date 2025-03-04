import styled from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px; /* Ajuste o tamanho do carrossel para mostrar 4 imagens */
  margin: 0 auto;
  /* padding:20px; */
  height: 430px;
  background-color: aqua;
  
`;

export const ImageList = styled.div`
  display: flex;
  gap: 60px;
  margin-left: 19px;
  transition: transform 0.5s ease-in-out;
  /* background-color: blue; */
`;

export const ImageWrapper = styled.div`
  width: 25%; /* Cada imagem ocupa 25% do carrossel para exibir 4 imagens por vez */
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin-left: 20px;
  
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  bottom: 0px;
  right: 0;
  width: 400px;
  padding: 0 20px;
  /* background-color: chartreuse; */

`;

export const LeftButton = styled.button`
  background-color:  #F2F5F9;
  border: 1px solid rgb(160, 174, 192);
  border-radius: 2rem;
  padding: 10px;
  color: white;
  cursor: pointer;
`;

export const RightButton = styled.button`
  background-color:  #F2F5F9;
  border: 1px solid rgb(160, 174, 192);
  border-radius: 2rem;
  padding: 10px;
  color: white;
  cursor: pointer;
`;

export const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

export const Indicator = styled.div`
  width: ${(props) => (props.active ? "40px" : "10px")}; /* Traço maior quando ativo */
  height: 5px; /* Altura fixa */
  background-color: ${(props) => (props.active ? "#0070FA" : "gray")}; /* Cor */
  border-radius: ${(props) => (props.active ? "10px" : "50%")}; /* Arredondado se for bolinha */
  transition: all 0.3s ease;
  margin: 0 5px;
`;

