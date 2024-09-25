'use client';
import React from 'react';
import styles from './Nossahistoria.module.css';

const OurStory: React.FC = () => {
    return (
        <section className={styles.storySection}>
            <h2 className={styles.storyTitle}>Nossa História</h2>
            <p className={styles.storyText}>
            A Associação Brasileira de Jurados (ABJUR) foi registrada no dia 30 de abril de 1987, quando o então presidente da entidade, Sr. José Antônio Nunes da Silva, abriu requerimento de registro do Estatuto Social, junto ao Cartório do 1º Ofício de Registro Civil das pessoas Jurídicas, na capital federal.
            <br></br><br></br>
            O Estatuto Social da ABJUR foi aprovado em Assembléia Geral Ordinária, no dia 14 de fevereiro de 1987, tendo sido assinado pelos Sócios Fundadores:
           
                <br /><br />
                José Antônio Nunes da Silva – Presidente Nacional<br />
                Raimundo Barbosa Mangabeira – 1º Vice-presidente Nacional<br />
                Carlos Pereira – 2º Vice-presidente Nacional...
                <br /><br />
                Atualmente, a gestão da ABJUR trabalha em prol de melhorias, investimentos na educação continuada, ampliação dos serviços oferecidos aos associados e presença constante junto às filiadas em todas as regiões do Brasil.
            </p>
        </section>
    );
};

export default OurStory;
