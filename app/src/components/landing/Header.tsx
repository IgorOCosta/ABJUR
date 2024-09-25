"use client";
import React, { useState, useEffect } from "react";
import { MdMenu, MdClose } from "react-icons/md"; // Ícones de menu e fechar
import styles from "./Header.module.css";
import { throttle } from 'lodash';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Função para monitorar o scroll da página
  useEffect(() => {
    const handleScroll = throttle(() => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    }, 100); // A cada 100ms

    window.addEventListener("scroll", handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`} style={{ marginLeft: "-6px", paddingTop: "12px" }}>
      <nav className={styles.nav }>
        {/* Nome Abjur à esquerda */}
        <div className={`${styles.logo} ${scrolled ? styles.scrolled : ""}`}>
          Abjur
            
          <link rel="icon" href="app\favicon.ico" />
        </div>

        {/* Links e botão Área de Membros */}
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ""}`}>
          <li><a href="#quem-somos" className={`${styles.navLink} ${isMenuOpen ? styles.openLink : ""}`}>Quem Somos</a></li>
          <li><a href="#beneficios" className={`${styles.navLink} ${isMenuOpen ? styles.openLink : ""}`}>Benefícios</a></li>
          <li><a href="#faq" className={`${styles.navLink} ${isMenuOpen ? styles.openLink : ""}`}>FAQ</a></li>
          <li><a href="#noticias" className={`${styles.navLink} ${isMenuOpen ? styles.openLink : ""}`}>Notícias</a></li>
          <li><a href="#eventos" className={`${styles.navLink} ${isMenuOpen ? styles.openLink : ""}`}>Eventos</a></li>
          <li><a href="#contato" className={`${styles.navLink} ${isMenuOpen ? styles.openLink : ""}`}>Contato</a></li>
          <li>
            <a
              href="#area-membros"
              className={`${styles.memberButton} ${scrolled ? styles.scrolled : ""}`}
            >
              Área de Membros
            </a>
          </li>
        </ul>

        {/* Ícone de menu para abrir/fechar o menu */}
        <button
          onClick={toggleMenu}
          className={styles.menuButton}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <MdClose className="w-6 h-6 text-white" /> // Ícone de fechar (X)
          ) : (
            <MdMenu className="w-6 h-6 text-white" /> // Ícone de menu
          )}
        </button>
      </nav>
    </header>
  );
}
