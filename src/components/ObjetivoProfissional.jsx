import '../style/ObjetivoProfissional.css';

export function ObjetivoProfissional() {
    const objetivo = {
        descricao: "Busco uma oportunidade para aplicar e expandir meus conhecimentos acadêmicos em uma empresa inovadora. Sou motivada, dedicada e desejo crescer profissionalmente, contribuindo com minhas habilidades técnicas e colaborando efetivamente para alcançar os objetivos da organização.",
    };
  
    return (
        <div className="objetivo-container">
            <div className="objetivo-content">
                <h1>Objetivo Profissional</h1>
                <p>{objetivo.descricao}</p>
            </div>
        </div>
    );
}
