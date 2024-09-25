'use client'; // Adicione esta linha no topo

import React from 'react';
import styles from './Noticias.module.css';

interface NewsArticle {
    id: number;
    title: string;
    imageUrl: string;
    about: string;
}

const newsArticles: NewsArticle[] = [
    {
        id: 1,
        title: "Legal Innovations to Watch",
        imageUrl: "https://via.placeholder.com/400x250",
        about: "Explore the latest innovations in the legal industry, including AI and machine learning applications."
    },
    {
        id: 2,
        title: "Updates in International Law",
        imageUrl: "https://via.placeholder.com/400x250",
        about: "A comprehensive look at recent changes in international law that could impact global operations."
    },
    {
        id: 3,
        title: "Best Practices for Remote Legal Teams",
        imageUrl: "https://via.placeholder.com/400x250",
        about: "Discover effective strategies for managing and supporting remote legal teams in today's environment."
    },
];

export default function Noticias() {
    return (
        <section id="noticias" className={styles.container}>
            <div className={styles.innerContainer}>
                <h2 className={styles.title}>Notícias</h2>
                <p className={styles.subtitle}>Acompanhe nossas últimas notícias.</p>
                <div className={styles.grid}>
                    {newsArticles.map((article) => (
                        <div key={article.id} className={styles.card}>
                            <img src={article.imageUrl} alt={article.title} className={styles.image}/>
                            <div className={styles.cardContent}>
                                <h3 className={styles.articleTitle}>{article.title}</h3>
                                <p className={styles.articleDescription}>{article.about}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
