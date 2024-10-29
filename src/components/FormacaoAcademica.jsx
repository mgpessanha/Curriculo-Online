import '../style/FormacaoAcademica.css';

export function FormacaoAcademica() {
    const formacao1 = {
        faculdade: "IBMEC",
        status: "Formada",
        conclusao: "Agosto de 2024"
    };
    const formacao2 = {
        faculdade: "IBMEC",
        status: "Em andamento",
        conclusao: "Dezembro de 2026"
    };
    const formacao3 = {
        faculdade: "Step Computer Academy",
        status: "Em andamento",
        conclusao: "Dezembro de 2026"
    };

    return (
        <div className="formacao-container">
            <div className="formacao-content">
                <h2>Formação Acadêmica</h2>
                <h3>Full Stack Development</h3>
                <ul>
                    <li><strong>Faculdade:</strong> {formacao1.faculdade}</li>
                    <li><strong>Status:</strong> {formacao1.status}</li>
                    <li><strong>Previsão de Conclusão:</strong> {formacao1.conclusao}</li>
                </ul>
                <h3>Engenharia de Software</h3>
                <ul>
                    <li><strong>Faculdade:</strong> {formacao2.faculdade}</li>
                    <li><strong>Status:</strong> {formacao2.status}</li>
                    <li><strong>Previsão de Conclusão:</strong> {formacao2.conclusao}</li>
                </ul>
                <h3>Programação Full Stack</h3>
                <ul>
                    <li><strong>Faculdade:</strong> {formacao3.faculdade}</li>
                    <li><strong>Status:</strong> {formacao3.status}</li>
                    <li><strong>Previsão de Conclusão:</strong> {formacao3.conclusao}</li>
                </ul>
            </div>
        </div>
    );
}
