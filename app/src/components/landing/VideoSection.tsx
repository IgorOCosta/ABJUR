'use client';
import React from 'react';
import styles from './VideoSection.module.css';

const VideoSection: React.FC = () => {
    return (
        <section className={styles.videoSection}>
            <h2 className={styles.videoTitle}>Quem Somos</h2>
            <p className={styles.videoSubtitle}>Conheça mais sobre nossa história e trajetória.</p>
            <div className={styles.videoContainer}>
                <iframe
                    src="https://www.youtube.com/watch?v=x65Aua3iVos"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className={styles.video}
                ></iframe>
            </div>
        </section>
    );
};

export default VideoSection;
