import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { DadosPessoais } from './components/DadosPessoais';
import { ObjetivoProfissional } from './components/ObjetivoProfissional';
import { FormacaoAcademica } from './components/FormacaoAcademica';
import { Portfolio } from './components/Portfolio';
import { Qualificacoes } from './components/Qualificacoes';
import { Idiomas } from './components/Idiomas';
import { AtividadesExtracurriculares } from './components/AtividadesExtracurriculares';
import { CursosCertificados} from './components/CursosCertificados';
import { HistoricoProfissional } from './components/HistoricoProfissional';

function App() {

  const navLinks = [
    { path: '/', name: 'Dados Pessoais' },
    { path: '/objetivo-profissional', name: 'Objetivo Profissional' },
    { path: '/formacao-academica', name: 'Formação Acadêmica' },
    { path: '/portfolio', name: 'Portfólio' },
    { path: '/qualificacoes', name: 'Qualificações' },
    { path: '/idiomas', name: 'Idiomas' },
    { path: '/atividades-extracurriculares', name: 'Atividades Extracurriculares' },
    { path: '/cursos-certificados', name: 'Cursos e Certificados' },
    { path: '/historico-profissional', name: 'Histórico Profissional' },
  ];

  const handleOptionClick = (path) => {
    window.location.href = path;
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar navLinks={navLinks} onSelect={handleOptionClick} />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<DadosPessoais />} />
            <Route path="/objetivo-profissional" element={<ObjetivoProfissional />} />
            <Route path="/formacao-academica" element={<FormacaoAcademica />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/qualificacoes" element={<Qualificacoes />} />
            <Route path="/idiomas" element={<Idiomas />} />
            <Route path="/atividades-extracurriculares" element={<AtividadesExtracurriculares />} />
            <Route path="/cursos-certificados" element={<CursosCertificados />} />
            <Route path="/historico-profissional" element={<HistoricoProfissional />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
