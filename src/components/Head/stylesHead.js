
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// Container principal do header
export const ReadConteiner = styled.header`
    background-color: aqua;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    
    width: 70.215rem;
    height: 5rem;
    overflow: hidden;

    img{
        width: 15%;
    };

    @media (max-width: 825px) {
        width: 50.215rem;
        height: auto;
        padding: 1rem;
    };
    
    @media (max-width: 573px) {
        width: 34.115rem;
        padding: 1rem;
    };
    
    @media (max-width: 481px) {
        width: 30.115rem;
        
        padding: 1rem;
        background-color: bisque;
    };
    
    @media (max-width: 440px) {
        width: 26.715rem;
        padding: 1rem;
    };
    
    @media (max-width: 393px) {
        width: 23.915rem;
        padding: 1rem;
    };
    
    @media (max-width: 377px) {
        width: 22.515rem;
        padding: 1rem;
    };
    
    @media (max-width: 425px){
            max-width: 26.6rem;
    };

`;

// Botão do Menu (3 Traços)
export const MenuButton = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    gap: 5px;
    margin-right: 2rem;
    width: 30px; /* Ajuste a largura do botão */
    height: 20px; /* Ajuste a altura do botão */

    .line {
        width: 30px;
        height: 4px;
        background: black;
        transition: 0.4s;
        border-radius: 2px;
    };

    .open:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    };

    .open:nth-child(2) {
        opacity: 0;
    };

    .open:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    };

    @media (max-width: 825px) {
        display: flex;
    };

`;

// Container do menu de navegação
export const NavConteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 10px;

    max-width: 100%;
    width: 41.938rem;
    height: 4rem;

    color: #16215B;
    border: 1px solid #CECECE;
    border-radius: 9.75rem; 
    overflow: hidden;
    
    @media (max-width: 1024px) {
        width: auto;
        height: auto;
        padding: 10px;
    };

    @media (max-width: 825px) {
        position: fixed;
        top: 0;
        left: ${props => (props.menuOpen ? '0' : '-250px')};
        width: 250px;
        height: 100vh;
        background:rgba(0, 112, 250, 0.8);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 60px;
        transition: left 0.3s ease-in-out;
        box-shadow: ${props => (props.menuOpen ? '5px 0 10px rgba(0,0,0,0.2)' : 'none')};
        border-radius: 0;
        border: none;

        li{
            font-size: 3.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        };
    };
`;

// Estilo do menu de navegação
export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

// Lista de navegação
export const NavList = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 825px) {
      flex-direction: column;
      align-items: center;
      gap: 10px;
      
      height: 400px;
  };
`;

// Itens da lista de navegação
export const NavItem = styled.li`
    width: 5.6rem;
`;

// Links estilizados
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #16215B;
  font-size: 0.875rem;
  
  padding: 8px 12px;
  transition: 0.3s;

  @media (max-width: 825px){
    color: #F2F5F9;

  }
`;
        
// Botão de Home com estilo diferente
export const HomeButtom = styled.div`
  
  img {
    width: 20px;
    margin-right: 8px;
  };

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0070FA;
    color: white;
    
    text-decoration: none;
    padding: 20px 10px;
    border-radius: 108px;
    width: 120px;
    height: 50px;
    cursor: pointer;
  };

  @media (max-width: 825px) {
        display: none;
        
    };

`;

export const ButtomComteiner = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    width: 172px;
    height: 59px;

    color: white;
    text-decoration: none;
    padding: 24px 12px;
    border-radius: 37px;
    border: none;
    padding: 10px 15px;
    background-color: #0070FA;
    
    cursor: pointer;
    
    transition: 0.3s;

    img {
        width: 20px;
    };

    &:hover {
        background-color:rgb(3, 103, 224);
        transform: scale(1.05);
    };

  @media (max-width: 825px) {
        display: none;
        width: 140px;
        height: 50px;
        font-size: 14px;
    };
`;

// Overlay para clicar e fechar o menu
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: ${props => (props.menuOpen ? '998' : '-1')}; /* Abaixo da sidebar */
    opacity: ${props => (props.menuOpen ? 1 : 0)}; /* Animação de fade */
    transition: opacity 0.3s ease-in-out;
`;

    