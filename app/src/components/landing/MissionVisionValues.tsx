'use client';
import React, { useState } from 'react';
import styles from './MissionVisionValues.module.css';

const MissionVisionValues: React.FC = () => {
    const [activeTab, setActiveTab] = useState('missao');

    return (
        <section className={styles.missionSection}>
            <div className={styles.textSection}>
                <h2 className={styles.title}>
                    Nossa Missão, Visão e Valores
                </h2>
                <p className={styles.subtitle}>
                    Saiba mais sobre o que nos motiva e nossos princípios fundamentais.
                </p>
                <div className={styles.separator}></div>
                <div className={styles.tabButtons}>
                    <button
                        onClick={() => setActiveTab('missao')}
                        className={`${styles.tabButton} ${activeTab === 'missao' ? styles.activeTab : ''}`}
                    >
                        Missão
                    </button>
                    <button
                        onClick={() => setActiveTab('visao')}
                        className={`${styles.tabButton} ${activeTab === 'visao' ? styles.activeTab : ''}`}
                    >
                        Visão
                    </button>
                    <button
                        onClick={() => setActiveTab('valor')}
                        className={`${styles.tabButton} ${activeTab === 'valor' ? styles.activeTab : ''}`}
                    >
                        Valores
                    </button>
                </div>
                <div className={styles.tabContent}>
                    {activeTab === 'missao' && (
                        <p>
                            Associar e representar os jurados que compõem o conselho de sentença dos tribunais de júri
                            de todos os Estados da Federação, promovendo o aprimoramento e a valorização profissional,
                            com ética e responsabilidade social.
                        </p>
                    )}
                    {activeTab === 'visao' && (
                        <p>
                            Nossa visão é ser reconhecida como a principal organização de referência no aprimoramento
                            profissional e na valorização dos jurados em nível nacional, sendo defensora da ética e da
                            responsabilidade social.
                        </p>
                    )}
                    {activeTab === 'valor' && (
                        <p>
                            Nossos valores são:
                            <ul>
                                <li>Ética</li>
                                <li>Justiça</li>
                                <li>Transparência</li>
                                <li>Liberdade de pensamento</li>
                                <li>Responsabilização</li>
                                <li>Responsabilidade Social</li>
                            </ul>
                        </p>
                    )}
                </div>
            </div>
            <div className={styles.imageContainer}>
                <img
                    src="https://via.placeholder.com/400"
                    alt="Missão, Visão e Valores"
                    className={styles.image}
                />
            </div>
        </section>
    );
};

export default MissionVisionValues;
