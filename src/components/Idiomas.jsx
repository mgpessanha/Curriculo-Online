import '../style/Idiomas.css';

export function Idiomas() {
    const idiomas = [
        { idioma: "Inglês", nivel: "Avançado" },
        { idioma: "Espanhol", nivel: "Intermediário" },
        { idioma: "Português", nivel: "Nativo" }
    ];

    return (
        <div className="idiomas-container">
            <div className="idiomas-content">
                <h2>Idiomas</h2>
                <ul>
                    {idiomas.map((idioma, index) => (
                        <li key={index}>
                            <strong>Idioma:</strong> {idioma.idioma} - <strong>Nível:</strong> {idioma.nivel}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
