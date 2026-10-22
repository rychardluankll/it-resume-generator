import {useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import {AcessContext} from '../contexts/AcessContext';

export default function Home(){

    //Aqui eu torno a próxima página acessível com true e permito o acesso
    const { acessAreasInteresse, setAcessInformacoesIniciais } = useContext(AcessContext)
    const navigate = useNavigate();

    function handleStart() {
        setAcessInformacoesIniciais(true);
        navigate("/informacoesIniciais");
    }

    return (
        <section id="services-2051">
            <div className="cs-container">
                <div className="cs-wrapper">
                    <div className="cs-content">
                        <span className="cs-topper">Carreira &amp; Tecnologia</span>
                        <h1 className="cs-title">Bem vindo ao gerador de currículos para TI</h1>
                        <p className="cs-text">
                            Estruture suas competências técnicas, ferramentas, projetos e certificações
                            em um currículo pensado especificamente para recrutadores e processos seletivos da área de tecnologia.
                        </p>
                        <p className="cs-text">
                            1 - Adicione as informações &bull; 2 - Clique em gerar &bull; 3 - Receba o seu CV estruturado e pronto para se aplicar
                        </p>
                        <button
                            type="button"
                            className="cs-button-solid"
                            onClick={handleStart}
                        >
                            Prosseguir
                        </button>
                    </div>
                    <div className="cs-picture-group">
                        <picture className="cs-picture">
                            <img
                                loading="lazy"
                                decoding="async"
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
                                alt="Profissionais de tecnologia trabalhando em equipe"
                                width="328"
                                height="520"
                            />
                        </picture>
                        <div className="cs-box">
                            <span className="cs-box-number">6 Áreas</span>
                            <span className="cs-box-desc">
                                Trilhas especializadas para Backend, Frontend, Android, DevOps, Dados e Cyber Security
                            </span>
                        </div>
                    </div>
                </div>

                <div className="cs-stat-group">
                    <p className="cs-text">
                        Siga o fluxo guiado em 3 etapas simples para mapear seus fundamentos técnicos,
                        stack de ferramentas e histórico de projetos com clareza e objetividade.
                    </p>
                    <ul className="cs-stats">
                        <li className="cs-li">
                            <div className="cs-icon" aria-hidden="true">01</div>
                            <div className="cs-flex">
                                <span className="cs-stat">Dados</span>
                                <p className="cs-stat-text">Adicione suas informações pessoais, stack e experiências.</p>
                            </div>
                        </li>
                        <li className="cs-li">
                            <div className="cs-icon" aria-hidden="true">02</div>
                            <div className="cs-flex">
                                <span className="cs-stat">CV Pronto</span>
                                <p className="cs-stat-text">Gere e receba seu currículo estruturado para aplicar.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <ul className="cs-card-group">
                    <li className="cs-item">
                        <div className="cs-flex">
                            <h3 className="cs-h3">1. Mapeamento de Competências</h3>
                            <p className="cs-item-text">
                                Selecione sua área de atuação e marque os fundamentos e ferramentas que você domina na prática.
                            </p>
                            <button type="button" className="cs-link" onClick={handleStart}>
                                Começar Agora
                            </button>
                        </div>
                    </li>
                    <li className="cs-item">
                        <div className="cs-flex">
                            <h3 className="cs-h3">2. Projetos &amp; Certificações</h3>
                            <p className="cs-item-text">
                                Destaque problemas reais resolvidos, links para repositórios no GitHub, formação acadêmica e certificações.
                            </p>
                            <button type="button" className="cs-link" onClick={handleStart}>
                                Estruturar Currículo
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
