'use client';
import React from 'react';
import MissionVisionValues from './MissionVisionValues';
import styles from './QuemSomos.module.css';
import OurStory from './Nossahistoria';
import VideoSection from './VideoSection';

export default function QuemSomos() {
    return (
        <section id="quem-somos" className={styles.container}>
            <MissionVisionValues />
            <OurStory />
            <VideoSection />
        </section>
    );
}
