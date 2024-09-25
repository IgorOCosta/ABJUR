// components/Beneficios.jsx
import React from 'react';
import styles from './Benefits.module.css';
import {
  FaHandsHelping,
  FaBalanceScale,
  FaUsers,
  FaGavel,
  FaHeartbeat,
  FaNetworkWired
} from 'react-icons/fa';

const beneficiosData = [
  {
    icon: <FaHandsHelping />,
    title: 'Experiência Cívica',
    description: 'Participar do sistema judicial é uma maneira direta de envolvimento cívico. Você contribui para a administração da justiça na sociedade.',
  },
  {
    icon: <FaBalanceScale />,
    title: 'Entendimento do Sistema Judicial',
    description: 'Oferece a oportunidade de compreender melhor como o sistema judicial funciona na prática, proporcionando insights sobre o processo legal.',
  },
  {
    icon: <FaUsers />,
    title: 'Responsabilidade e Dever',
    description: 'Servir como jurado é uma responsabilidade cívica e um dever. Muitas pessoas consideram isso uma maneira de retribuir à comunidade.',
  },
  {
    icon: <FaGavel />,
    title: 'Aprendizado',
    description: 'Oferece uma oportunidade de aprendizado sobre o sistema legal, os casos apresentados e os princípios legais envolvidos.',
  },
  {
    icon: <FaHeartbeat />,
    title: 'Contribuição para a Justiça',
    description: 'Participar do processo de julgamento permite que os jurados desempenhem um papel ativo na busca pela justiça em casos específicos.',
  },
  {
    icon: <FaNetworkWired />,
    title: 'Networking e Interações Sociais',
    description: 'Pode proporcionar oportunidades de interação social e networking, pois você trabalha em conjunto com outros jurados e profissionais do sistema judicial.',
  },
];

export default function Beneficios() {
  return (
    <section id="beneficios" className={styles.beneficios}>
    
      <div className={styles.content}>
        <h2>Benefícios em ser Jurado</h2>
        <div className={styles.cards}>
          {beneficiosData.map((beneficio, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{beneficio.icon}</div>
              <h3>{beneficio.title}</h3>
              <p>{beneficio.description}</p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
