import React from 'react';
import pic from '../assets/pic.jpeg';
import '../style/DadosPessoais.css';

export function DadosPessoais() {
    return (
        <div>
            <div className="profile-container">
                <div className="profile-content">
                    <h1>Maria Giulia Pessanha</h1>
                    <h3>Desenvolvedora Full Stack</h3>
                    <p>
                        Olá, meu nome é Maria Giulia Pessanha e sou uma desenvolvedora Full Stack. Desde cedo, descobri o quanto amo criar e desenvolver soluções digitais que possam transformar ideias em realidade. A programação se tornou mais do que uma carreira, é minha forma de explorar o mundo e construir experiências inovadoras.
                    </p>
                    <a href="https://www.instagram.com/pessanha.giulia/" className="btn">
                        Contact Me
                    </a>
                </div>
                <div className="profile-image">
                    <img src={pic} alt="Maria Giulia Pessanha" />
                </div>
            </div>

            <div className="info-container">
                <h2>Informações Pessoais</h2>
                <ul className="info-list">
                    <li><strong>Localização:</strong> Rio de Janeiro, RJ</li>
                    <li><strong>Idade:</strong> 21 anos</li>
                    <li><strong>Estado Civil:</strong> Solteira</li>
                    <li><strong>Data de Nascimento:</strong> 31/12/2002</li>
                    <li><strong>Email:</strong> <a href="mailto:mgpessanh@gmail.com">mgpessanh@gmail.com</a></li>
                    <li><strong>Telefone:</strong> <a href="tel:+5522999755545">+55 22 99975-5545</a></li>
                    <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/giulia-pessanha22/" target="_blank" rel="noopener noreferrer">Meu LinkedIn</a></li>
                </ul>
            </div>
        </div>
    );
}
