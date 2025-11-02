import { useState } from 'react';
import './Quiz.scss';

export default function Quiz() {
    const [selectedProblems, setSelectedProblems] = useState([]);
    const [customFeeling, setCustomFeeling] = useState('');
    const [showResults, setShowResults] = useState(false);

    const problemsData = [
        { 
            name: 'Depressão',
            advice: 'A depressão pode fazer você se sentir sem energia. Tente estabelecer pequenas metas diárias e comemore cada conquista. Não hesite em buscar ajuda profissional - a terapia pode fazer uma grande diferença.'
        },
        { 
            name: 'Ansiedade',
            advice: 'A ansiedade muitas vezes vem de preocupações com o futuro. Tente focar no presente através de exercícios de respiração. Limitar o consumo de notícias e redes sociais também pode ajudar a reduzir a sobrecarga.'
        },
        { 
            name: 'Bullying',
            advice: 'Lembre-se que o bullying diz mais sobre quem pratica do que sobre você. Converse com alguém de confiança e registre os incidentes. Você não está sozinho e merece respeito.'
        },
        { 
            name: 'Insônia',
            advice: 'Crie uma rotina relaxante antes de dormir: evite telas, tome um chá calmante e leia um livro. Manter horários consistentes para dormir e acordar ajuda a regular seu relógio biológico.'
        },
        { 
            name: 'Problemas com a Família',
            advice: 'A comunicação aberta e respeitosa é fundamental. Tente expressar seus sentimentos usando "eu sinto" em vez de acusações. Às vezes, um mediador profissional pode ajudar a resolver conflitos.'
        },
        { 
            name: 'Remorso',
            advice: 'Todos cometemos erros - isso nos torna humanos. Aprenda com a experiência e pratique o autoperdão. Se possível, faça as pazes com as pessoas envolvidas.'
        },
        { 
            name: 'Procrastinação',
            advice: 'Divida tarefas grandes em partes menores de 5-10 minutos. Use a técnica Pomodoro: 25 minutos de foco, 5 minutos de pausa. Remova distrações e recompense seu progresso.'
        },
        { 
            name: 'Raiva',
            advice: 'Antes de reagir, respire fundo e conte até 10. Identifique o que realmente desencadeou sua raiva. Atividade física pode ajudar a liberar a tensão de forma saudável.'
        }
    ];

    const handleSelect = (problemName) => {
        setSelectedProblems(prev => {
            if (prev.includes(problemName)) {
                return prev.filter(p => p !== problemName);
            } else {
                return [...prev, problemName];
            }
        });
    };

    const handleSubmit = () => {
        if (selectedProblems.length > 0 || customFeeling.trim() !== '') {
            setShowResults(true);
        }
    };

 

    return (
        <div className="quiz">
            <h1>Como você está se sentindo?</h1>

            {!showResults ? (
                <>
                    <div className="problems">
                        {problemsData.map(problem => (
                            <div 
                                key={problem.name}
                                className={`problem ${selectedProblems.includes(problem.name) ? 'selected' : ''}`}
                                onClick={() => handleSelect(problem.name)}
                            >
                                <input 
                                    type="checkbox" 
                                    checked={selectedProblems.includes(problem.name)}
                                    readOnly
                                />
                                <span>{problem.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Campo para digitar sentimentos personalizados */}
                    <div className="custom-feeling">
                        <h3>Ou descreva o que você está sentindo:</h3>
                        <div className="input-group">
                            <input 
                                type="text" 
                                placeholder="Digite aqui o que está sentindo..."
                                value={customFeeling}
                                onChange={(e) => setCustomFeeling(e.target.value)}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') {
                                        handleCustomSubmit();
                                    }
                                }}
                            />
                            
                        </div>
                    </div>

                    <button 
                        onClick={handleSubmit}
                        disabled={selectedProblems.length === 0 && customFeeling.trim() === ''}
                        className="continue-btn"
                    >
                        Ver orientações ({selectedProblems.length})
                    </button>
                </>
            ) : (
                <div className="results">
                    <h2>Orientações para você</h2>
                    
                    <div className="advices">
                        {problemsData
                            .filter(problem => selectedProblems.includes(problem.name))
                            .map(problem => (
                                <div key={problem.name} className="advice-item">
                                    <h3>{problem.name}</h3>
                                    <p>{problem.advice}</p>
                                </div>
                            ))
                        }
                        
                        {/* Mostra o sentimento personalizado se o usuário digitou */}
                        {customFeeling.trim() !== '' && (
                            <div className="custom-advice">
                                <h3>Seu sentimento: "{customFeeling}"</h3>
                                <p>Obrigado por compartilhar isso conosco. É importante reconhecer e expressar seus sentimentos. Só tenho uma resposta... Siga o senhor jesus Cristo.</p>
                            </div>
                        )}
                    </div>

                    <button onClick={() => setShowResults(false)}>
                        Voltar e selecionar novamente
                    </button>
                </div>
            )}
        </div>
    );
}