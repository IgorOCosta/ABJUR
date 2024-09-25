'use client';
import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.left}>
                    <p>Todos os direitos reservados a Abjur - Associação Brasileira Dos Jurados</p>
                </div>
                <div className={styles.right}>
                    <div className={styles.socialIcons}>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <div className={styles.iconWrapper}>
                                <FaInstagram className={styles.icon} />
                            </div>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <div className={styles.iconWrapper}>
                                <FaYoutube className={styles.icon} />
                            </div>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <div className={styles.iconWrapper}>
                                <FaFacebook className={styles.icon} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
