'use client'; // Adicione esta linha no topo

import React from 'react';
import styles from './Eventos.module.css';
import { events } from '@/app/models/EventModel';

export default function Eventos() {
    return (
        <section id='eventos' className={styles.container}>
            <h2 className={styles.title}>Nossos Eventos</h2>
            <div className={styles.grid}>
                {events.slice(0, 3).map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
            {/* <div className={styles.moreEvents}>
                <a href="/events" className={styles.seeMore}>See More Events</a>
            </div> */}
        </section>
    );
};

interface EventCardProps {
    event: {
        id: number;
        title: string;
        date: string;
        location: string;
        description: string;
        imageUrl: string;
        eventUrl: string;
        address: {
            street: string;
            number: string;
            neighborhood: string;
            city: string;
            state: string;
        };
    };
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
    const eventDate = new Date(event.date);
    const currentDate = new Date();
    const hasOccurred = eventDate < currentDate;
    const day = eventDate.getDate();
    const month = eventDate.toLocaleString('pt-BR', { month: 'short' }).toUpperCase();

    const handleCardClick = () => {
        if (!hasOccurred) {
            window.location.href = event.eventUrl;
        }
    };

    return (
        <div
            className={`${styles.card} ${hasOccurred ? styles.occurred : styles.upcoming}`}
            onClick={handleCardClick}
        >
            <div className={styles.imageWrapper}>
                <img src={event.imageUrl} alt={event.title} className={styles.image} />
                {hasOccurred && (
                    <div className={styles.occurredOverlay}>
                        <span className={styles.occurredText}>Evento ocorrido</span>
                    </div>
                )}
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.eventTitle}>{event.title}</h3>
                    <div className={styles.dateBox}>
                        <span className={styles.day}>{day}</span>
                        <span className={styles.month}>{month}</span>
                    </div>
                </div>
                <p className={styles.address}>{event.address.street}, {event.address.number}, {event.address.neighborhood}, {event.address.city}, {event.address.state}</p>
                <p className={styles.description}>{event.description}</p>
            </div>
        </div>
    );
};
