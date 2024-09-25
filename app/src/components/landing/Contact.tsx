'use client'; // Adicione esta linha no topo
'use client'; // Adicione esta linha no topo
import React, { useState } from 'react';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
import styles from './Contact.module.css';

// Componente TextArea
interface TextAreaProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    placeholder: string;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, value, onChange, placeholder }) => {
    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label}>{label}</label>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={styles.textarea}
            />
        </div>
    );
};

// Componente PhoneInput
interface PhoneInputProps {
    label: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ label, name, value, onChange }) => {
    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label}>{label}</label>
            <input
                type="text"
                name={name}
                value={value}
                onChange={onChange}
                placeholder="+55 (99) 99999-9999"
                className={styles.input}
            />
        </div>
    );
};

// Componente InputField
interface InputFieldProps {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, name, value, onChange, placeholder }) => {
    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label}>{label}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={styles.input}
            />
        </div>
    );
};

// Componente principal Contato
export default function Contato() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section id="contato" className={styles.container}>
            <div className={styles.innerContainer}>
                {/* Bloco da esquerda */}
                <div className={styles.leftBlock}>
                    <h2 className={styles.title}>Entre em contato</h2>
                    <div className={styles.textWithLine}>
                        <div className={styles.line}></div>
                        <p className={styles.description}>
                            Estamos ansiosos para iniciar um projeto com você! Entre em contato para que possamos discutir suas necessidades e como podemos ajudar.
                        </p>
                    </div>
                    <div className={styles.socialIcons}>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <div className={styles.iconWrapper}>
                                <FaInstagram className={styles.icon} />
                            </div>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                            <div className={styles.iconWrapper}>
                                <FaYoutube className={styles.icon} />
                            </div>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <div className={styles.iconWrapper}>
                                <FaFacebook className={styles.icon} />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Bloco da direita - Formulário */}
                <div className={styles.rightBlock}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <InputField
                            label="Nome"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Digite seu nome"
                        />
                        <InputField
                            label="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Digite seu email"
                        />
                        <PhoneInput
                            label="Telefone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <TextArea
                            label="Mensagem"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Digite sua mensagem"
                        />
                        <button type="submit" className={styles.submitButton}>
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
