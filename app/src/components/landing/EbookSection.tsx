// app/src/components/landing/EbookSection.tsx
import React from 'react';
import styles from './EbookSection.module.css';
import Image from 'next/image';

const EbookSection: React.FC = () => {
    return (
        <section id="ebook" className={styles.ebookSection}>
            <div className={styles.container}>
                {/* Texto e botão à esquerda em telas grandes */}
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>GET YOUR EBOOK</h1>
                    <h2 className={styles.subtitle}>
                        Discover our latest ebook to enhance your skills!
                    </h2>
                    <div className={styles.quote}>
                        <div className={styles.line}></div>
                        <p className={styles.quoteText}>
                            Our ebook offers insights into various techniques and strategies to improve your professional performance and stay up to date with trends.
                        </p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.button}>Comprar</button>
                    </div>
                </div>

                {/* Imagem à direita em telas grandes, abaixo em telas pequenas */}
                <div className={styles.imageContainer}>
                    <Image 
                        src="/assets/ebook.png" 
                        alt="Ebook" 
                        width={400} 
                        height={400} 
                        className={styles.ebookImage}
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default EbookSection;
