import '../style/AtividadesExtracurriculares.css';

export function AtividadesExtracurriculares() {
    const atividades = [
        "Participação em maratonas de programação",
        "Desenvolvimento de projetos voluntários",
        "Participação em grupos de estudo de tecnologia",
        "Organização de meetups locais de tecnologia"
    ];

    return (
        <div className="atividades-container">
            <div className="atividades-content">
                <h2>Atividades Extracurriculares</h2>
                <ul>
                    {atividades.map((atividade, index) => (
                        <li key={index}>{atividade}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
