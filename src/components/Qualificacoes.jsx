import '../style/Qualificacoes.css';

export function Qualificacoes() {
    const qualificacao = {
        backend: "Java, Python, Kotlin, C",
        frontend: "Javascript, HTML, CSS, Angular, React, Typescript",
        cloud: "Azure, Firebase",
        banco: "SQL, Firebase",
        metodologias: "Scrum, Kanban",
        pacote: "Microsoft Word, Excel, PowerPoint, Outlook",
        business: "Power BI",
        design: "Photoshop, Illustrator, Figma",
        controle: "Git, GitHub, GitLab"
    };

    return (
        <div className="qualificacoes-container">
            <div className="qualificacoes-content">
                <h2>Qualificações</h2>
                <ul>
                    <li><strong>Backend:</strong> {qualificacao.backend}</li>
                    <li><strong>Frontend:</strong> {qualificacao.frontend}</li>
                    <li><strong>Cloud Computing:</strong> {qualificacao.cloud}</li>
                    <li><strong>Banco de Dados:</strong> {qualificacao.banco}</li>
                    <li><strong>Metodologias Ágeis:</strong> {qualificacao.metodologias}</li>
                    <li><strong>Pacote Office:</strong> {qualificacao.pacote}</li>
                    <li><strong>Business Intelligence:</strong> {qualificacao.business}</li>
                    <li><strong>Design Gráfico:</strong> {qualificacao.design}</li>
                    <li><strong>Controle de Versão:</strong> {qualificacao.controle}</li>
                </ul>
            </div>
        </div>
    );
}
