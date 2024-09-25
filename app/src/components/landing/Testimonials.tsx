'use client'; // Adicione esta linha no topo

import React from 'react';
import styles from './Testimonials.module.css';

interface Testimonial {
    id: number;
    quote: string;
    author: string;
    position: string;
    imageUrl: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "Joining the Brazilian Association of Juri has significantly enhanced my professional network and opened up new opportunities in my career.",
        author: "Ana Silva",
        position: "Senior Advocate",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 2,
        quote: "The workshops and seminars provided by the association are top-notch and have helped me stay ahead in my field.",
        author: "Carlos Gomes",
        position: "Corporate Lawyer",
        imageUrl: "https://via.placeholder.com/150"
    },
    {
        id: 3,
        quote: "The support and resources available through the association are invaluable, especially for young lawyers just starting their careers.",
        author: "Leticia Dias",
        position: "Junior Barrister",
        imageUrl: "https://via.placeholder.com/150"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className={styles.container}>
            <div className={styles.innerContainer}>
                <h2 className={styles.title}>Testemunhos</h2>
                <div className={styles.testimonialGrid}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className={styles.testimonialCard}>
                            <img src={testimonial.imageUrl} alt={testimonial.author} className={styles.testimonialImage} />
                            <p className={styles.quote}>"{testimonial.quote}"</p>
                            <p className={styles.author}>- {testimonial.author}, {testimonial.position}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
