import '../style/CursosCertificados.css';

export function CursosCertificados() {
    const cursos = [
        { nome: "Curso de Inglês", plataforma: "CCAA" },
        { nome: "Java Foundations", plataforma: "Oracle Academy" },
        { nome: "My First Work Experience", plataforma: "SAP" },
        { nome: "Scrum Foundation", plataforma: "CertiProf" },
        { nome: "Software Testing Fundamentals", plataforma: "AICS" },
        { nome: "Scrum Fundamentals", plataforma: "AICS" },
        { nome: "Curso de Excel", plataforma: "Curso em Vídeo" },
        { nome: "Curso de Javascript", plataforma: "Curso em Vídeo" }
    ];

    return (
        <div className="cursos-container">
            <div className="cursos-content">
                <h2>Cursos e Certificados</h2>
                <ul>
                    {cursos.map((curso, index) => (
                        <li key={index}>
                            <strong>Certificado:</strong> {curso.nome} - <strong>Curso:</strong> {curso.plataforma}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
