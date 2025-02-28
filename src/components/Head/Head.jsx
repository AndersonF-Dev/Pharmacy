
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/imagens/logo.svg'
import HomeIcom from '../../assets/icones/home.svg'
import ContatoIcom from '../../assets/icones/contato.svg'
import { ReadConteiner, NavConteiner, HomeButtom, Nav, NavList, NavItem, StyledLink, ButtomComteiner, MenuButton, Overlay } from './stylesHead.js'


const Head = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <ReadConteiner>
            <img src={Logo} alt="Logo da Farmácia"/>

            {/* Botão de Menu (Aparece só no Mobile) */}
            <MenuButton onClick={() => setMenuOpen(!menuOpen)}>
                <div className={menuOpen ? "line open" : "line"} />
                <div className={menuOpen ? "line open" : "line"} />
                <div className={menuOpen ? "line open" : "line"} />
            </MenuButton>

            <NavConteiner menuOpen={menuOpen}>
                <Nav>
                    {/* Botão Home com StyledLink para manter SPA */}
                    <HomeButtom>
                        <StyledLink to="/">
                            <img src={HomeIcom} alt="Home Icon" />
                            Home
                        </StyledLink>
                    </HomeButtom>

                    {/* Lista de Navegação */}
                    <NavList>
                        <NavItem><StyledLink to="/" onClick={() => setMenuOpen(false)}>Home</StyledLink></NavItem>
                        <NavItem><StyledLink to="/services" onClick={() => setMenuOpen(false)}>Services</StyledLink></NavItem>
                        <NavItem><StyledLink to="/speciality" onClick={() => setMenuOpen(false)}>Speciality</StyledLink></NavItem>
                        <NavItem><StyledLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</StyledLink></NavItem>
                        <NavItem><StyledLink to="/aboutus" onClick={() => setMenuOpen(false)}>About Us</StyledLink></NavItem>
                        <NavItem><StyledLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</StyledLink></NavItem>
                    </NavList>
                </Nav>

                {/* Overlay para fechar o menu ao clicar fora */}
                {menuOpen && <Overlay onClick={() => setMenuOpen(false)} />}
            </NavConteiner>

            <ButtomComteiner to="/contact">
                <img src={ContatoIcom} alt="Contato Ícone" />
                <p>Get In Touch</p>
            </ButtomComteiner>
        </ReadConteiner>
    )
}

export default Head
