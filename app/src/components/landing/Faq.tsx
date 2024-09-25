// app/src/components/landing/Faq.tsx
'use client'; // Adicione esta linha no topo

import React, { useState } from 'react';
import styles from './Faq.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'O que é o Tribunal do Júri?',
    answer: 'O Tribunal do Júri é uma instituição prevista na Constituição Federal do Brasil, responsável por julgar crimes dolosos contra a vida, como homicídio, infanticídio, aborto e participação em suicídio assistido. É uma garantia do sistema jurídico brasileiro que permite a participação direta da sociedade na administração da justiça penal.',
  },
  {
    question: 'O que é o Júri Popular?',
    answer: 'O Júri Popular refere-se ao conjunto de cidadãos comuns que são convocados para compor o Conselho de Sentença no Tribunal do Júri. Esses jurados são responsáveis por ouvir o caso, avaliar as provas apresentadas e, em conjunto com o juiz togado, proferir o veredicto de culpabilidade ou absolvição do réu.',
  },
  {
    question: 'Como são selecionados os jurados?',
    answer: 'Convocação: Os jurados são selecionados por sorteio entre cidadãos brasileiros que atendem aos requisitos legais (maiores de 18 anos, em pleno gozo dos direitos políticos, etc.).\nLista de Jurados: A seleção é feita a partir das listas de jurados mantidas pelos cartórios eleitorais ou tribunais de justiça.\nExclusões: Alguns indivíduos podem ser excluídos da seleção, como aqueles que possuem antecedentes criminais, estão incapacitados mentalmente ou possuem outras impedimentos legais.',
  },
  {
    question: 'Quantos jurados compõem o Júri Popular?',
    answer: 'O Conselho de Sentença é composto por sete jurados titulares e um suplente. Esses jurados são selecionados dentre os convocados para cada sessão de julgamento.',
  },
  {
    question: 'Quais são as responsabilidades dos jurados?',
    answer: 'Ouvir as Alegações: Participar das audiências, ouvir as partes envolvidas, testemunhas e peritos.\nAvaliar as Provas: Analisar as evidências apresentadas durante o julgamento.\nDeliberar: Discutir em conjunto com os demais jurados para chegar a um veredicto.\nDecidir o Veredicto: Votar entre "culpado" ou "absolvido" com base na sua convicção pessoal sobre o caso.',
  },
  {
    question: 'Como funciona a deliberação e o veredicto?',
    answer: 'Sigilo: As discussões entre os jurados são realizadas em segredo para garantir a imparcialidade e a integridade do julgamento.\nMaioria Simples: O veredicto é determinado pela maioria dos votos dos jurados presentes.\nInstrução do Juiz: O juiz orienta os jurados sobre as questões legais, mas a decisão final sobre a culpabilidade é dos jurados.',
  },
  {
    question: 'Qual é a duração do serviço como jurado no Tribunal do Júri?',
    answer: 'A participação como jurado no Tribunal do Júri pode variar conforme a complexidade do caso. Geralmente, envolve:\nDias de Sessão: Pode durar de alguns dias a semanas, dependendo da quantidade de provas e testemunhas.\nDisponibilidade: Os jurados devem estar disponíveis durante todo o período do julgamento para garantir a continuidade do processo.',
  },
  {
    question: 'Como virar um Jurado',
    answer: 'Tornar-se um jurado no Tribunal do Júri é um processo que envolve alguns passos importantes:\nCadastro Automático: A inscrição para ser jurado geralmente ocorre de forma automática com base nas listas eleitorais, já que todos os eleitores habilitados estão aptos a ser convocados.\nManutenção dos Dados Atualizados: É essencial manter seus dados atualizados junto à Justiça Eleitoral e aos tribunais locais responsáveis pela convocação. Mudanças de endereço, telefone ou situação civil devem ser informadas para evitar desclassificação.\nAtendimento aos Requisitos Legais: Certifique-se de cumprir todos os requisitos legais, como ser brasileiro nato ou naturalizado, ter no mínimo 18 anos, estar em dia com as obrigações eleitorais e não ter impedimentos legais, como antecedentes criminais.\nComparecimento às Convocações: Quando convocado, é fundamental comparecer pontualmente ao tribunal na data e horário indicados. A ausência injustificada pode resultar em penalidades, como multas ou impedimento de votar em futuras eleições.\nParticipação no Processo Seletivo: Em alguns casos, além do sorteio, pode haver uma fase de seleção onde os jurados são entrevistados para garantir sua imparcialidade e capacidade de julgar o caso de forma justa.\nPreparo e Disponibilidade: Esteja preparado para dedicar o tempo necessário ao julgamento, que pode envolver a participação em sessões que duram vários dias ou semanas.',
  },
  {
    question: 'Posso ser jurado no Tribunal do Júri mais de uma vez?',
    answer: 'Sim, é possível ser convocado para atuar como jurado em múltiplos julgamentos, desde que continue atendendo aos requisitos legais e não haja impedimentos específicos.',
  },
  {
    question: 'Quais são os direitos e garantias dos jurados?',
    answer: 'Imparcialidade: Os jurados devem julgar com base nas provas e na legislação, sem influências externas.\nSigilo: Devem manter confidencialidade sobre as deliberações e decisões tomadas durante o julgamento.\nProteção Legal: Têm garantias de proteção contra retaliações ou pressões externas relacionadas ao exercício de suas funções.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faq}>
      <h2>FAQ</h2>
      <div className={styles.accordion}>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className={styles.question}>
              {item.question}
              <span className={styles.icon}>{activeIndex === index ? '-' : '+'}</span>
            </div>
            <div className={styles.answer}>
              {item.answer.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
