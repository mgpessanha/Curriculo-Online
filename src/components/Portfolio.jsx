import '../style/Portfolio.css';

export function Portfolio() {
    const projetos = [
        { nome: "Projeto Tatualize", link: "https://github.com/mgpessanha/Projeto-Tatuagem" },
        { nome: "Projeto Recintos Zoo", link: "https://github.com/mgpessanha/desafio-mgpessanha-2024" },
        { nome: "Projeto Site Horóscopo", link: "https://github.com/mgpessanha/Site-Horoscopo" },
        { nome: "Projeto Sound-", link: "https://github.com/mgpessanha/Sound-" },
        { nome: "Projeto Quiz Harry Potter", link: "https://github.com/mgpessanha/Quiz-HP" },
        { nome: "Projeto Simulador Arduíno", link: "https://github.com/mgpessanha/Simulador-Arduino" },
        { nome: "Projeto Página Jogadores", link: "https://github.com/mgpessanha/Pagina-Jogadores" },
        { nome: "Projeto Calculadora IMC", link: "https://github.com/mgpessanha/Calculadora-Imc-Testes" },
        { nome: "Projeto Pong Game", link: "https://github.com/mgpessanha/Pong-Game" },
        { nome: "Projeto Currículo Online", link: "https://github.com/mgpessanha/Curriculo-Online" }
    ];

    return (
        <div className="portfolio-container">
            <div className="portfolio-content">
                <h2>Portfólio</h2>
                <ul>
                    {projetos.map((projeto, index) => (
                        <li key={index}>
                            <strong>{projeto.nome}: </strong> 
                            <a href={projeto.link} target="_blank" rel="noopener noreferrer">{projeto.link}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
