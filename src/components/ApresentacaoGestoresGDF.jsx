import React, { useState } from 'react';
import { 
  TrendingUp, DollarSign, Users, Target, BarChart3, Shield, Brain,
  ArrowRight, CheckCircle, AlertTriangle, Award, Building2, Star, Rocket
} from 'lucide-react';

const ApresentacaoGestoresGDF = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'abertura',
      titulo: 'OPORTUNIDADE ESTRATÉGICA',
      subtitulo: 'R$ 139 Milhões em Recursos Sub-Utilizados no GDF'
    },
    {
      id: 'problema', 
      titulo: 'O PROBLEMA CRÍTICO',
      subtitulo: 'Menos de 1% dos servidores destinam seu IR'
    },
    {
      id: 'dados',
      titulo: 'IMPACTO FINANCEIRO', 
      subtitulo: 'Potencial de Captação para o DF'
    },
    {
      id: 'solucao',
      titulo: 'SOLUÇÃO INCENTIVABR',
      subtitulo: 'Plataforma Especializada para Servidores Públicos'
    },
    {
      id: 'resultados',
      titulo: 'RESULTADOS ESPERADOS',
      subtitulo: 'Projeções baseadas em dados reais'
    }
  ];

  const renderSlideContent = () => {
    const slide = slides[currentSlide];
    
    switch(slide.id) {
      case 'abertura':
        return (
          <div className="text-center space-y-8">
            <div className="mb-8">
              <div className="inline-flex items-center bg-red-100 text-red-800 px-6 py-3 rounded-full mb-6">
                <AlertTriangle className="w-6 h-6 mr-2" />
                <span className="font-bold">OPORTUNIDADE CRÍTICA IDENTIFICADA</span>
              </div>
              <h1 className="text-6xl font-bold text-gray-800 mb-4">R$ 139 MILHÕES</h1>
              <p className="text-2xl text-gray-600 mb-6">
                em recursos de destinação de IR <strong>sub-utilizados</strong> no GDF anualmente
              </p>
              <p className="text-lg text-gray-500 mb-4">
                *Servidores elegíveis (declaração completa) - dados oficiais validados
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-red-600 mb-2">0.8%</h3>
                <p className="text-red-700">Taxa atual de servidores que destinam</p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-yellow-600 mb-2">Elegíveis</h3>
                <p className="text-yellow-700">Servidores que fazem declaração completa</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-green-600 mb-2">25%</h3>
                <p className="text-green-700">Meta realista de engajamento</p>
              </div>
            </div>

            <div className="bg-blue-100 rounded-xl p-6">
              <p className="text-xl text-blue-800">
                <strong>IncentivaBR:</strong> A solução tecnológica que pode transformar 
                esta oportunidade latente em <strong>impacto social real</strong> para o DF
              </p>
            </div>
          </div>
        );

      case 'problema':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-red-600 mb-4">O DESPERDÍCIO DE OPORTUNIDADE</h2>
              <p className="text-xl text-gray-600">Análise das barreiras que impedem a destinação</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Cenário Atual DF</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                    <span className="text-red-700">Servidores que destinam</span>
                    <span className="text-2xl font-bold text-red-600">1,440</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Servidores que NÃO destinam</span>
                    <span className="text-2xl font-bold text-gray-600">178,560</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-red-100 rounded-lg">
                    <span className="text-red-800">Recursos perdidos anualmente</span>
                    <span className="text-2xl font-bold text-red-700">R$ 137.9M</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Principais Barreiras Identificadas</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-red-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">1</div>
                    <span className="text-red-700">Acham que é "doação" (gasto extra)</span>
                  </div>
                  <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">2</div>
                    <span className="text-orange-700">Desconhecem o processo</span>
                  </div>
                  <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                    <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">3</div>
                    <span className="text-yellow-700">Acham muito complicado</span>
                  </div>
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">4</div>
                    <span className="text-purple-700">Medo de complicações fiscais</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Observação:</strong> Barreiras identificadas pela IncentivaBR através de experiência com servidores públicos
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">CUSTO DA INAÇÃO</h3>
              <p className="text-lg mb-4">
                A cada ano que passa sem uma solução eficaz, o DF perde a oportunidade 
                de direcionar <strong>R$ 137.9 milhões</strong> para projetos estratégicos
              </p>
              <div className="bg-white/20 rounded-lg p-4">
                <p className="text-xl font-bold">
                  Um volume significativo de recursos que poderia estar gerando impacto social real no Distrito Federal
                </p>
              </div>
            </div>
          </div>
        );

      case 'dados':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-blue-600 mb-4">POTENCIAL FINANCEIRO DO DF</h2>
              <p className="text-xl text-gray-600">Comparativo nacional e projeções realistas</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Cenário Atual</h3>
                <div className="text-4xl font-bold mb-2">R$ 1.1M</div>
                <p className="text-red-100">0.8% dos servidores destinam</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Potencial Total</h3>
                <div className="text-4xl font-bold mb-2">R$ 139M</div>
                <p className="text-yellow-100">100% dos servidores (teórico)</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Meta Realista</h3>
                <div className="text-4xl font-bold mb-2">R$ 34.7M</div>
                <p className="text-green-100">25% dos servidores destinam</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Potencial Exclusivo do DF</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <h4 className="font-bold text-blue-800 mb-2">Cenário Atual</h4>
                    <p className="text-blue-700">Menos de 1% dos servidores destinam seu IR</p>
                    <div className="text-2xl font-bold text-blue-600">R$ 1.1M/ano</div>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <h4 className="font-bold text-green-800 mb-2">Meta Realista (25%)</h4>
                    <p className="text-green-700">1 em cada 4 servidores engajados</p>
                    <div className="text-2xl font-bold text-green-600">R$ 34.7M/ano</div>
                  </div>
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                    <h4 className="font-bold text-purple-800 mb-2">Oportunidade Perdida</h4>
                    <p className="text-purple-700">Recursos que poderiam estar gerando impacto</p>
                    <div className="text-2xl font-bold text-purple-600">R$ 33.6M/ano</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Projetos Potenciais DF</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800">Educação Digital DF</h4>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Educação</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Valor:</span>
                        <div className="font-bold text-green-600">R$ 15M</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Beneficiários:</span>
                        <div className="font-bold text-blue-600">50,000</div>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800">Saúde Preventiva Comunitária</h4>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">Saúde</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Valor:</span>
                        <div className="font-bold text-green-600">R$ 12M</div>
                      </div>
                      <div>
                        <span className="text-gray-600">Beneficiários:</span>
                        <div className="font-bold text-blue-600">80,000</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'solucao':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-green-600 mb-4">SOLUÇÃO INCENTIVABR</h2>
              <p className="text-xl text-gray-600">Plataforma especializada que remove todas as barreiras</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3">IA Especializada</h3>
                <ul className="text-sm space-y-1 text-blue-100">
                  <li>• Assistente "TINA" conversacional</li>
                  <li>• Explicações personalizadas</li>
                  <li>• Desmistificação automática</li>
                  <li>• Suporte 24/7</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3">Segmentação Inteligente</h3>
                <ul className="text-sm space-y-1 text-purple-100">
                  <li>• Projetos por área profissional</li>
                  <li>• Curadoria especializada</li>
                  <li>• Conexão emocional forte</li>
                  <li>• Relevância garantida</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-3">Compliance Total</h3>
                <ul className="text-sm space-y-1 text-green-100">
                  <li>• Registro INPI protegido</li>
                  <li>• Certificação digital</li>
                  <li>• Recibos automáticos</li>
                  <li>• Zero risco fiscal</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">PIONEIRISMO E EXCLUSIVIDADE</h3>
              <p className="text-lg mb-4">
                A IncentivaBR é a <strong>PRIMEIRA e ÚNICA</strong> plataforma do Brasil especializada 
                em destinação de IR para servidores públicos
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-xl font-bold">1ª</div>
                  <div className="text-sm">Plataforma do gênero no Brasil</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-xl font-bold">100%</div>
                  <div className="text-sm">Focada em servidores públicos</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="text-xl font-bold">INPI</div>
                  <div className="text-sm">Tecnologia protegida e exclusiva</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'resultados':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-green-600 mb-4">PROJEÇÃO DE RESULTADOS</h2>
              <p className="text-xl text-gray-600">Crescimento progressivo nos próximos 4 anos</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Evolução da Taxa de Destinação</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 bg-blue-500">
                    5%
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Ano 1</h4>
                  <div className="space-y-1 text-sm">
                    <div className="text-green-600 font-semibold">R$ 6.9M</div>
                    <div className="text-gray-600">15 projetos</div>
                    <div className="text-blue-600">35,000 beneficiados</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 bg-purple-500">
                    12%
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Ano 2</h4>
                  <div className="space-y-1 text-sm">
                    <div className="text-green-600 font-semibold">R$ 16.7M</div>
                    <div className="text-gray-600">35 projetos</div>
                    <div className="text-blue-600">85,000 beneficiados</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 bg-green-500">
                    20%
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Ano 3</h4>
                  <div className="space-y-1 text-sm">
                    <div className="text-green-600 font-semibold">R$ 27.8M</div>
                    <div className="text-gray-600">60 projetos</div>
                    <div className="text-blue-600">140,000 beneficiados</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 bg-yellow-500">
                    25%
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Ano 4</h4>
                  <div className="space-y-1 text-sm">
                    <div className="text-green-600 font-semibold">R$ 34.7M</div>
                    <div className="text-gray-600">75 projetos</div>
                    <div className="text-blue-600">175,000 beneficiados</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-xl p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">TRANSFORMAÇÃO DO DF</h3>
              <p className="text-xl mb-6">
                Em 4 anos, o DF pode ser <strong>referência nacional</strong> em destinação de IR por servidores públicos
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-2">Potencial Atual</h4>
                  <div className="text-4xl font-bold mb-2">R$ 139M</div>
                  <div className="text-sm">Recursos disponíveis anualmente</div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Oportunidade Perdida</h4>
                  <div className="text-4xl font-bold mb-2">R$ 137.9M</div>
                  <div className="text-sm">Desperdiçados por ano</div>
                </div>
              </div>
              <div className="mt-6 bg-white/20 rounded-xl p-4">
                <p className="text-lg font-bold">
                  A IncentivaBR pode transformar essa oportunidade perdida em impacto social real
                </p>
                <p className="text-sm mt-2">
                  *Valores de investimento e retorno a serem definidos em proposta comercial específica
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Slide não encontrado</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header da Apresentação */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-4">
            <Rocket className="w-8 h-8 mr-3" />
            <div>
              <h1 className="text-2xl font-bold">IncentivaBR para GDF</h1>
              <p className="text-blue-200 text-sm">Apresentação Estratégica para Gestores</p>
            </div>
          </div>
          
          <div className="bg-red-500/20 border border-red-400 rounded-xl p-4 max-w-4xl mx-auto">
            <p className="text-red-100">
              <strong>URGENTE:</strong> R$ 139 milhões em oportunidade de captação sendo desperdiçados anualmente no DF
            </p>
          </div>
        </div>

        {/* Navegação dos Slides */}
        <div className="flex justify-center mb-8 overflow-x-auto">
          <div className="flex space-x-2 bg-white/10 backdrop-blur-lg rounded-xl p-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap ${
                  currentSlide === index
                    ? 'bg-white text-blue-900'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {index + 1}. {slide.titulo}
              </button>
            ))}
          </div>
        </div>

        {/* Conteúdo do Slide */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-2">{slides[currentSlide].titulo}</h2>
            <p className="text-xl text-blue-200">{slides[currentSlide].subtitulo}</p>
          </div>
          
          <div className="bg-white text-gray-800 rounded-xl p-8">
            {renderSlideContent()}
          </div>
        </div>

        {/* Controles de Navegação */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            disabled={currentSlide === 0}
            className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-xl transition-all duration-200"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
            <span>Anterior</span>
          </button>

          <div className="flex items-center space-x-4">
            <span className="text-white/70">
              {currentSlide + 1} de {slides.length}
            </span>
            <div className="flex space-x-1">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          <button
            onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 rounded-xl transition-all duration-200"
          >
            <span>Próximo</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Resumo Executivo Fixo */}
        <div className="mt-8 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 border border-white/20">
          <h3 className="text-xl font-bold mb-4 text-center">📊 RESUMO EXECUTIVO</h3>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-400">R$ 139M</div>
              <div className="text-sm text-white/70">Potencial total DF</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-400">R$ 1.1M</div>
              <div className="text-sm text-white/70">Destinação atual</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">R$ 137.9M</div>
              <div className="text-sm text-white/70">Oportunidade perdida/ano</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">25%</div>
              <div className="text-sm text-white/70">Meta de engajamento</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApresentacaoGestoresGDF;
