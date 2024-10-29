import '../style/HistoricoProfissional.css';

export function HistoricoProfissional() {
    const historico = [
        { empresa: "Tech Solutions", cargo: "Desenvolvedora Frontend", periodo: "2021 - Presente" },
        { empresa: "Creative Labs", cargo: "Estagiária de Desenvolvimento", periodo: "2020 - 2021" }
    ];

    return (
        <div className="historico-container">
            <div className="historico-content">
                <h1>Histórico Profissional</h1>
                <h2>Freelancer em Projeto Autoral - 2024</h2>
                <h3>Função: Desenvolvimento Web</h3>
                <p>Desenvolvi uma solução web voltada para o público de tatuagem, integrando Inteligência Artificial para geração de imagens personalizadas.</p>
                <p>Implementei uma API para remoção de fundo em imagens.</p>
                <p>Idealizei, documentei o projeto e criei protótipos funcionais. Gerenciei o projeto, alcançando resultados significativos.</p>
            </div>
        </div>
    );
}
