import planningDeskImg from '../assets/images/chapter_planning_desk_1791658218736.jpg';
import savingsJarImg from '../assets/images/chapter_savings_jar_1791658227901.jpg';

export interface TermDefinition {
  term: string;
  definition: string;
}

export interface TableData {
  caption: string;
  headers: string[];
  rows: (string | number)[][];
  footer?: (string | number)[];
}

export interface MistakeItem {
  number: number;
  error: string;
  whyHarmful: string;
  howToAvoid: string;
}

export interface ChallengeDay {
  day: number;
  week: number;
  title: string;
  task: string;
  tip: string;
}

export interface ChapterSection {
  id: string;
  title: string;
  paragraphs: string[];
  terms?: TermDefinition[];
  steps?: { stepNumber: string; title: string; description: string }[];
  bulletList?: { title?: string; items: string[] };
  exampleBox?: {
    title: string;
    scenario: string;
    takeaway: string;
    breakdown?: { label: string; value: string }[];
  };
  table?: TableData;
  pullQuote?: string;
}

export interface Chapter {
  id: string;
  number: string;
  shortTitle: string;
  title: string;
  subtitle: string;
  readingTime: string;
  summary: string;
  heroImage?: string;
  heroImageCaption?: string;
  sections: ChapterSection[];
  keyTakeaways: string[];
}

export const EBOOK_METADATA = {
  title: "DINHEIRO ORGANIZADO",
  subtitle: "O Guia Prático para Cuidar Melhor das Suas Finanças",
  deck: "Aprenda a organizar seus gastos, planejar seu dinheiro, criar metas e desenvolver hábitos financeiros mais conscientes.",
  targetAudience: "Jovens e adultos iniciantes em educação financeira que querem aprender a organizar o próprio dinheiro de maneira simples e prática.",
  edition: "1ª Edição Digital Completa · Outubro 2026",
  disclaimer:
    "AVISO LEGAL E EDUCATIVO: Todo o conteúdo apresentado neste e-book possui caráter exclusivamente educativo, informativo e didático. As informações, exemplos fictícios, tabelas e metodologias aqui descritas não configuram recomendação de investimento, consultoria financeira, análise de valores mobiliários, aconselhamento jurídico ou contábil. Resultados financeiros dependem da realidade individual de cada pessoa. Este material não substitui a orientação de profissionais certificados e especializados para casos específicos."
};

export const CHAPTERS_PART_1: Chapter[] = [
  {
    id: "capitulo-1",
    number: "01",
    shortTitle: "O Que São Finanças Pessoais",
    title: "Capítulo 1 — O Que São Finanças Pessoais",
    subtitle: "Os alicerces para compreender como o dinheiro circula na sua vida cotidiana e por que a clareza é o primeiro passo para a tranquilidade.",
    readingTime: "8 min de leitura",
    summary: "Compreenda o conceito de finanças pessoais, a importância da organização no dia a dia, a diferença exata entre renda, gasto, economia e patrimônio, e por que conhecer sua realidade atual muda o seu futuro.",
    sections: [
      {
        id: "cap1-sec1",
        title: "1.1 O que são finanças pessoais na prática?",
        paragraphs: [
          "Quando muitas pessoas ouvem a expressão 'finanças pessoais', imediatamente imaginam gráficos complexos na bolsa de valores, planilhas intermináveis ou economistas falando difícil no noticiário. Na realidade, finanças pessoais dizem respeito a algo muito mais próximo e humano: a forma como você ganha, utiliza, protege e planeja o seu próprio dinheiro todos os dias.",
          "Desde o momento em que você recebe seu pagamento mensal, paga a conta de energia elétrica, decide comprar um lanche na padaria ou separa uma quantia para realizar uma viagem no fim do ano, você já está praticando gestão financeira pessoal. A grande diferença está em fazer isso de maneira consciente — sabendo exatamente o que está acontecendo — ou deixar que as decisões aconteçam no piloto automático.",
          "Cuidar das finanças não exige ser um gênio da matemática. As quatro operações básicas (somar, subtrair, multiplicar e dividir), aliadas a hábitos simples de observação e registro, são suficientes para transformar completamente a sua relação com o dinheiro."
        ],
        pullQuote: "Organizar o próprio dinheiro não é sobre restringir a sua liberdade de viver o presente, mas sobre garantir que o seu 'eu do futuro' tenha escolhas e tranquilidade."
      },
      {
        id: "cap1-sec2",
        title: "1.2 Por que a organização financeira é tão importante?",
        paragraphs: [
          "A falta de organização financeira raramente afeta apenas o saldo bancário; ela costuma impactar o sono, os relacionamentos familiares, a concentração no trabalho e a saúde emocional. A sensação de trabalhar o mês inteiro e não saber para onde o dinheiro foi gera ansiedade constante.",
          "Quando você organiza suas contas, três mudanças imediatas acontecem na sua rotina: primeiro, você substitui a dúvida pela clareza (você passa a saber exatamente quanto pode gastar sem comprometer o aluguel ou o mercado). Segundo, você evita multas e juros por esquecimento de datas de vencimento. Terceiro, você conquista poder de decisão para direcionar seu esforço para o que realmente importa para você."
        ],
        bulletList: {
          title: "Benefícios diretos de uma vida financeira organizada:",
          items: [
            "Redução do estresse causado por boletos inesperados no fim do mês.",
            "Capacidade de lidar com pequenos imprevistos sem precisar recorrer a empréstimos caros.",
            "Clareza para dizer 'sim' ao que é prioridade e 'não' ao que é apenas impulso momentâneo.",
            "Construção gradual de objetivos reais, como fazer um curso, reformar a casa ou trocar de equipamento de trabalho."
          ]
        }
      },
      {
        id: "cap1-sec3",
        title: "1.3 Diferença entre Renda, Gasto, Economia e Patrimônio",
        paragraphs: [
          "Na educação financeira para iniciantes, um dos maiores obstáculos é a confusão entre conceitos básicos. Muitas vezes, alguém que recebe um salário alto acredita ser rico, mas gasta tudo o que ganha e não possui nenhuma reserva. Para construir uma base sólida, precisamos definir e separar quatro termos fundamentais antes de avançarmos."
        ],
        terms: [
          {
            term: "Renda (ou Receita)",
            definition: "É todo o dinheiro que entra para você em um determinado período (geralmente medido por mês). Inclui salário, pagamento por serviços prestados, pensão, comissões ou vendas."
          },
          {
            term: "Gasto (ou Despesa)",
            definition: "É todo o dinheiro que sai do seu bolso para pagar por produtos, serviços ou obrigações. Envolve desde o aluguel e o supermercado até o cafézinho e o transporte."
          },
          {
            term: "Economia (ou Poupança Mensal)",
            definition: "É a diferença positiva entre o que você ganha (renda) e o que você gasta (despesa) em um mês. Se você ganhou R$ 2.500 e gastou R$ 2.200, sua economia naquele mês foi de R$ 300."
          },
          {
            term: "Patrimônio",
            definition: "É o conjunto acumulado de bens, direitos e valores que você possui ao longo do tempo (dinheiro guardado, imóvel, veículo quitado, equipamentos), descontadas todas as suas dívidas."
          }
        ],
        table: {
          caption: "Tabela 1.1 — Comparativo Prático dos 4 Pilares Financeiros",
          headers: ["Conceito", "Pergunta-Chave", "Exemplo Cotidiano", "Comportamento no Tempo"],
          rows: [
            ["Renda", "Quanto dinheiro entrou?", "Salário líquido de R$ 3.000,00 recebido no dia 5", "Fluxo mensal (entra periodicamente)"],
            ["Gasto", "Quanto dinheiro saiu?", "R$ 2.650,00 usados para contas e compras do mês", "Fluxo mensal (sai periodicamente)"],
            ["Economia", "Quanto sobrou no mês?", "R$ 350,00 separados após pagar todas as despesas", "Resultado do mês (Renda menos Gasto)"],
            ["Patrimônio", "O que eu construí até hoje?", "R$ 4.200,00 acumulados na reserva após 12 meses", "Estoque acumulado ao longo dos anos"]
          ]
        }
      },
      {
        id: "cap1-sec4",
        title: "1.4 A importância de conhecer a própria situação financeira",
        paragraphs: [
          "Imagine tentar chegar a um endereço desconhecido usando um aplicativo de mapas, mas sem permitir que o aparelho saiba onde você está agora. Sem o ponto de partida, nenhuma rota pode ser traçada. Nas finanças pessoais acontece exatamente o mesmo: muitas pessoas querem economizar ou sair das dívidas, mas têm receio de abrir o extrato bancário e encarar os números reais.",
          "Conhecer a sua situação financeira atual com honestidade — sem culpa e sem julgamentos — é o ato mais corajoso e produtivo que você pode realizar hoje. Não importa se no momento sua conta está no zero ou se existem pendências a resolver; o diagnóstico claro é o que transforma um problema vago em um plano de ação com começo, meio e fim."
        ],
        exampleBox: {
          title: "Exemplo Fictício: O Retrato de Lucas e Mariana",
          scenario: "Lucas ganha R$ 4.500 por mês, mas gasta R$ 4.550 todos os meses porque não acompanha suas saídas. Mariana ganha R$ 2.800 por mês, conhece todas as suas contas e mantém seus gastos em R$ 2.450, guardando R$ 350 todo mês. Ao final de um ano, quem está em situação financeira mais segura?",
          takeaway: "Embora Lucas tenha uma renda maior, Mariana constrói R$ 4.200 de reserva em um ano, enquanto Lucas acumula R$ 600 de déficit. O que define sua tranquilidade financeira não é apenas quanto você ganha, mas a relação entre o que entra e o que sai.",
          breakdown: [
            { label: "Renda Mensal de Mariana", value: "R$ 2.800,00" },
            { label: "Gastos Mensais de Mariana", value: "R$ 2.450,00" },
            { label: "Economia Mensal", value: "R$ 350,00" },
            { label: "Patrimônio em 12 Meses", value: "R$ 4.200,00" }
          ]
        }
      }
    ],
    keyTakeaways: [
      "Finanças pessoais são o conjunto de decisões diárias sobre ganhar, gastar, economizar e planejar o seu dinheiro.",
      "Renda é o que entra no mês; gasto é o que sai; economia é o que sobra no mês; patrimônio é o que você acumula ao longo da vida.",
      "Encarar os números reais sem medo é o ponto de partida indispensável para qualquer melhoria financeira."
    ]
  },
  {
    id: "capitulo-2",
    number: "02",
    shortTitle: "Descubra Para Onde Seu Dinheiro Vai",
    title: "Capítulo 2 — Descubra Para Onde Seu Dinheiro Vai",
    subtitle: "Como mapear receitas, classificar despesas fixas e variáveis, identificar pequenos vazamentos no orçamento e analisar seus hábitos.",
    readingTime: "10 min de leitura",
    summary: "Aprenda na prática a registrar entradas e saídas, diferenciar gastos fixos de variáveis, localizar despesas invisíveis e utilizar uma tabela-modelo de controle mensal.",
    heroImage: planningDeskImg,
    heroImageCaption: "Fig. 1 — O hábito de dedicar 10 minutos semanais ao registro financeiro elimina a sensação de que o dinheiro 'sumiu' sem explicação.",
    sections: [
      {
        id: "cap2-sec1",
        title: "2.1 Como registrar receitas com precisão",
        paragraphs: [
          "O primeiro passo prático do mapeamento financeiro é registrar todas as suas fontes de receita. Porém, existe uma regra de ouro que evita erros graves de cálculo: considere sempre a sua Renda Líquida, e nunca a Renda Bruta.",
          "Antes de continuar, vamos explicar esses dois termos: Renda Bruta é o valor total do seu salário ou serviço antes dos descontos obrigatórios (como INSS, imposto de renda, vale-transporte ou coparticipação em plano de saúde). Já a Renda Líquida é o dinheiro que efetivamente cai na sua conta bancária e está disponível para você usar."
        ],
        terms: [
          {
            term: "Receita Fixa",
            definition: "Valores que você recebe regularmente com quantia previsível, como salário mensal com carteira assinada ou aposentadoria."
          },
          {
            term: "Receita Variável",
            definition: "Valores que mudam de um mês para o outro, como comissões de vendas, trabalhos autônomos (freelances), horas extras ou gorjetas."
          }
        ]
      },
      {
        id: "cap2-sec2",
        title: "2.2 Registrando despesas e separando Gastos Fixos e Variáveis",
        paragraphs: [
          "Depois de anotar quanto entra, precisamos registrar cada saída de dinheiro. Para que esse registro seja útil e fácil de analisar, dividimos todas as despesas em duas categorias principais: Gastos Fixos e Gastos Variáveis.",
          "Compreender essa divisão é essencial porque ela mostra qual parte do seu orçamento já está comprometida antes mesmo de o mês começar e qual parte depende diretamente do seu comportamento semanal."
        ],
        terms: [
          {
            term: "Gastos Fixos",
            definition: "São despesas que acontecem todos os meses e cujo valor não muda (ou muda muito pouco) em função do seu consumo imediato. Exemplos: aluguel, condomínio, mensalidade escolar, internet residencial, seguro."
          },
          {
            term: "Gastos Variáveis",
            definition: "São despesas cujo valor sobe ou desce conforme o seu uso, suas escolhas ou acontecimentos do mês. Exemplos: supermercado, conta de luz, combustível, transporte por aplicativo, lazer, farmácia e presentes."
          }
        ],
        steps: [
          {
            stepNumber: "Passo 01",
            title: "Escolha uma única ferramenta de anotação",
            description: "Pode ser um caderno pequeno, uma planilha no computador ou um bloco de notas no celular. O melhor método é aquele que você realmente abre e usa."
          },
          {
            stepNumber: "Passo 02",
            title: "Anote a data, a descrição, a categoria e o valor",
            description: "Não confie apenas na memória. Sempre que fizer um pagamento via Pix, débito, dinheiro ou cartão, registre o valor exato."
          },
          {
            stepNumber: "Passo 03",
            title: "Agrupe os pequenos gastos semanais",
            description: "Um gasto de R$ 12,00 parece irrelevante isoladamente, mas repetido 20 vezes no mês torna-se R$ 240,00."
          }
        ]
      },
      {
        id: "cap2-sec3",
        title: "2.3 Identificando gastos desnecessários e analisando hábitos",
        paragraphs: [
          "Ao observar suas anotações após 15 ou 30 dias, você começará a enxergar padrões. É aqui que surgem os chamados 'gastos invisíveis' ou desnecessários: pequenas cobranças automáticas ou compras por hábito que não trazem satisfação real para a sua vida.",
          "Exemplos clássicos incluem assinaturas de aplicativos ou serviços de streaming que você não assiste há meses, taxas de manutenção de pacotes bancários que poderiam ser gratuitos, pedidos de entrega de comida por puro cansaço de planejar a refeição, ou taxas de atraso em contas que você tinha dinheiro para pagar no dia certo."
        ],
        bulletList: {
          title: "Perguntas para analisar seus hábitos financeiros:",
          items: [
            "Em quais dias da semana ou horários eu costumo gastar mais por impulso? (Ex.: sexta-feira à noite ou domingo após o almoço).",
            "Quais serviços mensais estão sendo descontados automaticamente sem que eu utilize de verdade?",
            "Quanto do meu dinheiro está indo para conveniência rápida (entregas, taxas, transportes de última hora) por falta de planejamento?",
            "Esses gastos estão alinhados com o que eu digo que é importante para mim?"
          ]
        }
      },
      {
        id: "cap2-sec4",
        title: "2.4 Tabela-Modelo de Controle Mensal",
        paragraphs: [
          "Abaixo, apresentamos um modelo prático e completo de controle mensal preenchido com dados fictícios da personagem Camila (assistente administrativa, renda líquida total de R$ 3.100,00). Observe como a separação clara permite enxergar exatamente o destino de cada real."
        ],
        table: {
          caption: "Tabela 2.1 — Modelo de Controle Mensal de Entradas e Saídas (Exemplo: Camila)",
          headers: ["Data", "Descrição do Lançamento", "Tipo / Classificação", "Categoria", "Valor (R$)"],
          rows: [
            ["05/10", "Salário Líquido Mensal", "Receita Fixa", "Trabalho Principal", "2.800,00"],
            ["15/10", "Serviço extra de digitação fim de semana", "Receita Variável", "Renda Extra", "300,00"],
            ["06/10", "Aluguel + Condomínio", "Gasto Fixo", "Moradia", "-1.150,00"],
            ["08/10", "Internet fibra residencial e plano celular", "Gasto Fixo", "Comunicação", "-140,00"],
            ["10/10", "Conta de Energia Elétrica e Água", "Gasto Variável", "Utilidades", "-210,00"],
            ["12/10", "Compra mensal de Supermercado e Feira", "Gasto Variável", "Alimentação", "-680,00"],
            ["18/10", "Transporte público e recarga de bilhete", "Gasto Fixo", "Transporte", "-220,00"],
            ["22/10", "Assinaturas de vídeos e música (3 serviços)", "Gasto Fixo", "Assinaturas", "-89,90"],
            ["25/10", "Lanches, padaria e aplicativos de entrega", "Gasto Variável", "Alimentação Fora", "-260,10"],
            ["28/10", "Transferência para Reserva Financeira", "Economia / Meta", "Futuro", "-350,00"]
          ],
          footer: ["TOTAL DO MÊS", "Entradas: R$ 3.100,00 | Saídas: R$ 2.750,00", "Economia: R$ 350,00", "Saldo Final:", "R$ 0,00 (Tudo Direcionado)"]
        }
      }
    ],
    keyTakeaways: [
      "Trabalhe sempre com a sua Renda Líquida (o valor que realmente cai na conta após os descontos).",
      "Separe Gastos Fixos (previsíveis todo mês) de Gastos Variáveis (que dependem do seu consumo e escolhas).",
      "O registro escrito revela 'gastos invisíveis', como assinaturas esquecidas e pequenos consumos repetitivos."
    ]
  },
  {
    id: "capitulo-3",
    number: "03",
    shortTitle: "Como Montar um Orçamento",
    title: "Capítulo 3 — Como Montar um Orçamento",
    subtitle: "Passo a passo para dar uma missão a cada real antes mesmo de o mês começar, definir limites realistas e acompanhar a execução.",
    readingTime: "11 min de leitura",
    summary: "Aprenda a diferença entre apenas anotar gastos passados e construir um orçamento preventivo. Veja como calcular sua renda disponível, distribuir limites por categoria e ajustar rotas durante o mês.",
    sections: [
      {
        id: "cap3-sec1",
        title: "3.1 O que é um orçamento e como calcular a renda disponível",
        paragraphs: [
          "No Capítulo 2, você aprendeu a anotar para onde o seu dinheiro foi. Porém, anotar gastos depois que eles já aconteceram é como olhar pelo espelho retrovisor de um carro: é importante, mas não impede você de bater se não olhar para o para-brisa à sua frente. O orçamento financeiro é justamente a visão pelo para-brisa.",
          "Orçamento é um plano prévio onde você define, no início do mês, quanto pretende destinar para cada área da sua vida com base na sua Renda Disponível.",
          "Como calcular a Renda Disponível? Some todas as receitas líquidas garantidas daquele mês. Se você possui renda variável (é autônomo ou ganha por comissão), utilize a média dos últimos 6 meses ou baseie seu orçamento no valor mínimo que costuma receber nos meses mais fracos — nunca no mês recorde."
        ],
        terms: [
          {
            term: "Orçamento Financeiro",
            definition: "Planejamento antecipado que distribui a renda disponível entre despesas essenciais, estilo de vida, pagamento de compromissos e metas futuras."
          },
          {
            term: "Renda Disponível",
            definition: "A soma total do dinheiro líquido que você tem certeza de que contará no mês para honrar seus pagamentos e objetivos."
          }
        ]
      },
      {
        id: "cap3-sec2",
        title: "3.2 Passo a passo para organizar despesas e definir limites",
        paragraphs: [
          "Para montar um orçamento que funcione na vida real — e não apenas no papel —, ele precisa ser realista. Não adianta definir que você gastará R$ 150,00 de supermercado no mês inteiro se a sua família consome no mínimo R$ 600,00. Um orçamento irreal gera frustração e faz a pessoa desistir na segunda semana.",
          "Uma referência didática muito utilizada na educação financeira é a distribuição proporcional (como a divisão 50 / 30 / 20 ou 60 / 20 / 20), que você pode adaptar livremente à sua realidade salarial:"
        ],
        steps: [
          {
            stepNumber: "Etapa 1",
            title: "Liste e proteja os Gastos Essenciais (cerca de 50% a 60% da renda)",
            description: "Some moradia, alimentação básica de supermercado, luz, água, transporte para o trabalho e saúde. Esses itens garantem sua segurança e capacidade de trabalhar."
          },
          {
            stepNumber: "Etapa 2",
            title: "Reserve a parcela das Metas e Reserva (cerca de 10% a 20% da renda)",
            description: "Defina um valor fixo para guardar assim que receber, além de valores destinados a quitar eventuais dívidas. Mesmo que comece com 5% (ex.: R$ 50 ou R$ 100), crie o hábito."
          },
          {
            stepNumber: "Etapa 3",
            title: "Estabeleça tetos para Estilo de Vida e Desejos (cerca de 20% a 30% da renda)",
            description: "Defina um limite claro para lazer, passeios, restaurantes, roupas, cuidados pessoais e assinaturas. Quando o limite da categoria acabar no mês, você aguarda o próximo mês."
          },
          {
            stepNumber: "Etapa 4",
            title: "Acompanhe semanalmente (Revisão de 15 minutos)",
            description: "Escolha um dia fixo na semana (por exemplo, domingo à noite) para comparar o 'Valor Planejado' com o 'Valor Realizado até agora' e fazer pequenos ajustes se necessário."
          }
        ]
      },
      {
        id: "cap3-sec3",
        title: "3.3 Exemplos fictícios e simples de Orçamento Mensal",
        paragraphs: [
          "Vamos observar dois exemplos fictícios completos: o primeiro de Rafael, um jovem solteiro no primeiro emprego que ganha R$ 2.000,00 líquidos e divide moradia; e o segundo da Família Souza, com renda familiar conjunta de R$ 4.500,00."
        ],
        exampleBox: {
          title: "Exemplo Fictício 1: Orçamento de Rafael (Jovem Iniciante — Renda de R$ 2.000,00)",
          scenario: "Rafael divide apartamento com um amigo, usa transporte público e quer juntar dinheiro para comprar um notebook novo de estudo e formar sua reserva.",
          takeaway: "Ao estabelecer um teto de R$ 250,00 para lazer e lanches no mês (cerca de R$ 62,50 por semana), Rafael consegue se divertir com amigos sem comprometer os R$ 300,00 das suas metas.",
          breakdown: [
            { label: "Essenciais (60% — Moradia, Mercado, Transporte)", value: "R$ 1.200,00" },
            { label: "Estilo de Vida e Lazer (25% — Saídas, Celular, Corte de Cabelo)", value: "R$ 500,00" },
            { label: "Economia e Metas (15% — Reserva + Meta Notebook)", value: "R$ 300,00" },
            { label: "Total Planejado", value: "R$ 2.000,00" }
          ]
        },
        table: {
          caption: "Tabela 3.1 — Orçamento Planejado vs. Realizado (Família Souza — Renda: R$ 4.500,00)",
          headers: ["Categoria do Orçamento", "Limite Planejado (R$)", "Gasto Realizado (R$)", "Diferença / Status", "Ação para o Próximo Mês"],
          rows: [
            ["Moradia (Aluguel, IPTU, Água, Luz)", "1.650,00", "1.620,00", "+30,00 (Dentro do limite)", "Manter consumo consciente de energia"],
            ["Supermercado e Feira", "1.100,00", "1.180,00", "-80,00 (Ultrapassou)", "Fazer lista fechada antes de ir ao mercado"],
            ["Transporte e Combustível", "550,00", "540,00", "+10,00 (Dentro do limite)", "Manter planejamento de rotas"],
            ["Saúde e Farmácia", "250,00", "190,00", "+60,00 (Dentro do limite)", "Sobras compensaram o supermercado"],
            ["Lazer, Passeios e Restaurantes", "450,00", "470,00", "-20,00 (Leve excesso)", "Reduzir 1 pedido de entrega no mês"],
            ["Reserva Financeira e Metas", "500,00", "500,00", "0,00 (Meta cumprida!)", "Separado no 1º dia após receber o salário"]
          ],
          footer: ["TOTAIS DO MÊS", "R$ 4.500,00", "R$ 4.500,00", "Orçamento Equilibrado", "Sem endividamento no período"]
        }
      }
    ],
    keyTakeaways: [
      "Um bom orçamento é feito antes de o mês começar, dando destino certo a cada real da sua Renda Disponível.",
      "Definir limites por categoria permite aproveitar momentos de lazer sem culpa, pois o valor já estava previsto.",
      "Se uma categoria estourar levemente o limite no meio do mês, compense reduzindo outra categoria variável para fechar a conta no azul."
    ]
  },
  {
    id: "capitulo-4",
    number: "04",
    shortTitle: "Necessidades x Desejos",
    title: "Capítulo 4 — Necessidades x Desejos",
    subtitle: "Como distinguir o que é indispensável do que é opcional e tomar decisões de compra com muito mais consciência.",
    readingTime: "9 min de leitura",
    summary: "Entenda as diferenças entre necessidades básicas, desejos legítimos, gastos importantes e gastos que podem esperar. Aprenda perguntas práticas para decidir antes de passar o cartão ou fazer o Pix.",
    sections: [
      {
        id: "cap4-sec1",
        title: "4.1 A diferença real entre Necessidades e Desejos",
        paragraphs: [
          "Um dos maiores desafios da vida moderna é que a publicidade e as redes sociais tentam transformar todo desejo imediato em uma 'necessidade urgente'. Para proteger seu dinheiro, você precisa treinar seu olhar para separar quatro conceitos distintos: Necessidades, Desejos, Gastos Importantes e Gastos que Podem Esperar.",
          "Importante destacar: ter desejos não é errado! Desejar comer em um bom restaurante, comprar uma roupa bonita ou viajar é saudável e faz parte de uma vida feliz. O problema financeiro surge apenas quando tratamos desejos como se fossem urgências vitais e colocamos em risco o pagamento das nossas necessidades básicas."
        ],
        terms: [
          {
            term: "Necessidades",
            definition: "Tudo aquilo que é estritamente indispensável para sua sobrevivência, saúde, dignidade e capacidade de trabalhar. Exemplos: alimentação básica, moradia, água, luz, remédios essenciais e transporte para o trabalho."
          },
          {
            term: "Desejos",
            definition: "Aquilo que traz conforto, prazer, entretenimento ou status, mas cuja ausência temporária não coloca sua saúde ou seu trabalho em risco. Exemplos: trocar um celular que ainda funciona perfeitamente pelo modelo recém-lançado, pedir comida por aplicativo na terça-feira ou comprar o quarto par de tênis."
          },
          {
            term: "Gastos Importantes",
            definition: "Despesas que, mesmo não sendo de sobrevivência imediata hoje, protegem seu futuro ou evitam prejuízos maiores amanhã. Exemplos: manutenção preventiva do freio do carro/moto, consulta odontológica anual, curso profissionalizante ou formação da reserva para imprevistos."
          },
          {
            term: "Gastos que Podem Esperar",
            definition: "Compras que fazem sentido, mas que não precisam acontecer neste mês porque o seu orçamento atual já está comprometido. Podem ser programadas para daqui a 2 ou 3 meses com pagamento à vista."
          }
        ]
      },
      {
        id: "cap4-sec2",
        title: "4.2 A linha tênue: quando uma necessidade esconde um desejo",
        paragraphs: [
          "Muitas vezes nos enganamos usando uma necessidade real para justificar um gasto exagerado. Por exemplo: 'Alimentar-se' é uma necessidade básica indiscutível. Porém, preparar uma refeição nutritiva em casa por R$ 15,00 atende à necessidade de alimentação; pedir um prato gourmet no aplicativo por R$ 85,00 em uma quarta-feira comum atende ao desejo de conforto e gastronomia.",
          "Outro exemplo: 'Vestir-se para o trabalho' é uma necessidade. Comprar uma camisa de boa qualidade que cabe no seu orçamento atende à necessidade; parcelar três peças de grife que comprometem metade do seu salário é um desejo."
        ],
        table: {
          caption: "Tabela 4.1 — Matriz de Classificação de Decisões de Consumo",
          headers: ["Situação do Dia a Dia", "Classificação Correta", "Impacto se Não Comprar Hoje", "Decisão Consciente Recomendada"],
          rows: [
            ["Comprar arroz, feijão, ovos, legumes e carnes no mercado", "Necessidade Básica", "Falta de alimentação adequada em casa", "Prioridade máxima no orçamento do mês"],
            ["Fazer revisão preventiva na fiação elétrica ou veículo de trabalho", "Gasto Importante", "Risco de acidente ou conserto muito mais caro depois", "Programar e realizar dentro do orçamento"],
            ["Trocar a televisão da sala que funciona bem por uma maior", "Desejo / Pode Esperar", "Nenhum impacto real na saúde ou rotina", "Criar meta, juntar o valor e comprar à vista"],
            ["Assinar o 4º serviço de streaming por causa de uma única série", "Desejo Opcional", "Nenhum impacto; há opções já contratadas", "Cancelar um serviço antigo antes de assinar outro"]
          ]
        }
      },
      {
        id: "cap4-sec3",
        title: "4.3 O Método das 5 Perguntas para compras conscientes",
        paragraphs: [
          "Sempre que você estiver diante de uma vitrine física ou de um carrinho de compras na internet para adquirir algo que não estava na sua lista mensal, faça uma pausa de dois minutos e responda mentalmente a estas cinco perguntas:"
        ],
        steps: [
          {
            stepNumber: "Pergunta 1",
            title: "Eu realmente preciso disso agora ou estou comprando por emoção?",
            description: "Verifique se você não está comprando apenas porque está cansado, estressado, entediado ou empolgado com uma propaganda de 'últimas horas'."
          },
          {
            stepNumber: "Pergunta 2",
            title: "Eu já tenho algo em casa que cumpre exatamente a mesma função?",
            description: "Muitas vezes compramos itens duplicados (roupas parecidas, utensílios, calçados) apenas pela sensação momentânea da novidade."
          },
          {
            stepNumber: "Pergunta 3",
            title: "Eu tenho o dinheiro disponível para pagar à vista sem mexer na minha reserva?",
            description: "Se você precisa parcelar a perder de vista porque não tem o valor no orçamento deste mês, é um forte sinal de que a compra pode esperar."
          },
          {
            stepNumber: "Pergunta 4",
            title: "Quantas horas do meu trabalho essa compra custa?",
            description: "Se você ganha R$ 2.200 por mês trabalhando 220 horas, cada hora do seu esforço vale R$ 10,00. Uma compra por impulso de R$ 200,00 equivale a 20 horas inteiras do seu suor."
          },
          {
            stepNumber: "Pergunta 5",
            title: "O que acontece se eu esperar 48 horas antes de fechar a compra?",
            description: "Na grande maioria das vezes, após dois dias de espera, a urgência emocional desaparece e você percebe que preferia manter o dinheiro na conta."
          }
        ]
      }
    ],
    keyTakeaways: [
      "Necessidades garantem sua vida, saúde e trabalho; desejos trazem conforto e lazer, mas devem respeitar os limites do orçamento.",
      "Gastos importantes (como manutenção preventiva e saúde) evitam despesas graves no futuro.",
      "Converter o preço de um produto em 'horas de trabalho necessárias para pagá-lo' é uma das ferramentas mais eficazes de consciência financeira."
    ]
  },
  {
    id: "capitulo-5",
    number: "05",
    shortTitle: "Como Economizar Dinheiro",
    title: "Capítulo 5 — Como Economizar Dinheiro",
    subtitle: "Estratégias práticas e realistas para reduzir desperdícios, planejar compras e aproveitar melhor seus recursos sem cair em privações extremas.",
    readingTime: "10 min de leitura",
    summary: "Descubra como economizar no dia a dia com inteligência, reduzindo desperdícios em casa, comparando preços de forma estratégica e evitando armadilhas de consumo impulsivo, mantendo sua qualidade de vida.",
    heroImage: savingsJarImg,
    heroImageCaption: "Fig. 2 — Economizar com equilíbrio significa eliminar o desperdício para preservar recursos para o que realmente traz bem-estar.",
    sections: [
      {
        id: "cap5-sec1",
        title: "5.1 Economia saudável x Privação extrema",
        paragraphs: [
          "Antes de apresentarmos as técnicas de economia, precisamos esclarecer um ponto fundamental: economizar dinheiro de forma saudável não significa viver na escassez extrema, passar vontade de tudo, cortar o convívio com amigos ou negligenciar sua saúde e alimentação.",
          "Comportamentos financeiros radicais — onde a pessoa corta absolutamente todo lazer e vive obcecada por centavos — funcionam como dietas restritivas demais: duram poucas semanas e costumam terminar em um efeito rebote de gastos compulsivos.",
          "A verdadeira economia inteligente consiste em cortar o desperdício (aquilo que vai para o lixo, que você paga caro sem perceber ou que não agrega valor à sua vida) para que sobre dinheiro justamente para a sua qualidade de vida e segurança."
        ],
        pullQuote: "Economizar com sabedoria não é deixar de viver o hoje; é parar de desperdiçar recursos com o que não tem importância para ter dinheiro para o que realmente importa."
      },
      {
        id: "cap5-sec2",
        title: "5.2 Estratégias práticas para reduzir desperdícios e planejar compras",
        paragraphs: [
          "Pequenos ajustes nos maiores grupos de despesas de uma casa (supermercado, energia/água, comunicação e compras gerais) podem liberar de 10% a 20% da sua renda mensal sem qualquer queda no seu padrão de bem-estar. Veja como aplicar no seu cotidiano:"
        ],
        steps: [
          {
            stepNumber: "Estratégia 1",
            title: "Planejamento de Supermercado e Alimentação",
            description: "Verifique a despensa e a geladeira antes de sair, monte um cardápio simples da semana e leve uma lista escrita. Nunca vá ao supermercado com fome ou com pressa. Observe o preço por quilo ou por litro nas etiquetas das prateleiras (muitas vezes embalagens promocionais são mais caras proporcionalmente)."
          },
          {
            stepNumber: "Estratégia 2",
            title: "Combate ao Desperdício Doméstico",
            description: "Alimentos que estragam na geladeira são notas de dinheiro jogadas diretamente no lixo. Congele porções, aproveite integralmente frutas e legumes da estação (que são mais baratos e nutritivos) e revise hábitos de luz acesa em cômodos vazios ou banhos excessivamente longos."
          },
          {
            stepNumber: "Estratégia 3",
            title: "Pesquisa e Comparação de Preços em 3 Fontes",
            description: "Para qualquer compra acima de R$ 100,00 (como eletrodomésticos, roupas, calçados, medicamentos de uso contínuo ou serviços de oficina), crie a regra pessoal de consultar pelo menos 3 locais ou sites diferentes. A diferença de preço para o mesmíssimo produto frequentemente chega a 30%."
          },
          {
            stepNumber: "Estratégia 4",
            title: "Renegociação Anual de Contratos e Tarifas",
            description: "Uma vez por ano, ligue para a operadora de internet/celular e verifique planos mais econômicos (clientes antigos muitas vezes pagam mais caro que pacotes atuais). No banco, utilize pacotes essenciais gratuitos regulamentados pelo Banco Central ou contas digitais isentas de tarifas de manutenção."
          },
          {
            stepNumber: "Estratégia 5",
            title: "Fuga das Compras Impulsivas no Ambiente Digital",
            description: "Desative notificações de aplicativos de lojas no celular, descadastre seu e-mail de listas promocionais tentadoras e nunca deixe os dados do seu cartão de crédito salvos para 'compra com 1 clique'. O pequeno trabalho de ter que levantar e pegar o cartão na carteira já evita inúmeras compras por impulso."
          }
        ]
      },
      {
        id: "cap5-sec3",
        title: "5.3 Aproveitando melhor os recursos disponíveis",
        paragraphs: [
          "Além de comprar melhor, você pode potencializar o que já possui. Cuidar bem das suas roupas, calçados, eletrodomésticos e ferramentas aumenta drasticamente a vida útil desses bens, adiando a necessidade de reposição.",
          "Da mesma forma, explore opções de lazer gratuitas ou de baixo custo na sua cidade: parques públicos, centros culturais, bibliotecas, sessões de cinema em dias promocionais e encontros em casa com amigos onde cada pessoa leva um prato são excelentes formas de manter a vida social ativa gastando uma fração do que custaria um restaurante caro."
        ],
        exampleBox: {
          title: "Exemplo Fictício: A Economia Mensal Silenciosa de Beatriz",
          scenario: "Beatriz sentia que seu salário de R$ 2.600 não rendia. Sem passar nenhuma privação alimentar ou deixar de ver os amigos, ela aplicou quatro ajustes simples durante 30 dias:",
          takeaway: "Com mudanças que não trouxeram nenhum sofrimento, Beatriz liberou R$ 345,00 por mês — o equivalente a R$ 4.140,00 economizados em um único ano.",
          breakdown: [
            { label: "Troca do pacote bancário pago por conta gratuita", value: "Economia de R$ 45,00/mês" },
            { label: "Renegociação do plano de internet + celular", value: "Economia de R$ 60,00/mês" },
            { label: "Lista de mercado + levar marmita 3x na semana", value: "Economia de R$ 180,00/mês" },
            { label: "Cancelamento de 2 assinaturas não utilizadas", value: "Economia de R$ 60,00/mês" }
          ]
        }
      }
    ],
    keyTakeaways: [
      "Economizar não é sofrer privação extrema, mas eliminar desperdícios que não trazem felicidade real.",
      "Ir ao mercado com lista fechada, comparar preços em três lugares e revisar tarifas bancárias/assinaturas geram alívio imediato no orçamento.",
      "Criar pequenas barreiras contra o impulso (como remover cartões salvos de aplicativos de compra) protege o seu dinheiro."
    ]
  },
  {
    id: "capitulo-6",
    number: "06",
    shortTitle: "Metas Financeiras",
    title: "Capítulo 6 — Metas Financeiras",
    subtitle: "Como definir objetivos de curto, médio e longo prazo e transformar grandes sonhos em pequenas etapas mensais alcançáveis.",
    readingTime: "9 min de leitura",
    summary: "Quem não sabe para o que está guardando dinheiro acaba gastando na primeira tentação. Aprenda a estruturar metas claras com valor, prazo e propósito, dividindo objetivos grandes em passos mensais.",
    sections: [
      {
        id: "cap6-sec1",
        title: "6.1 Por que metas claras dão sentido ao seu esforço",
        paragraphs: [
          "Guardar dinheiro apenas 'por guardar' é psicologicamente difícil. Quando você deixa de fazer uma compra por impulso hoje, seu cérebro precisa entender qual benefício concreto você está conquistando em troca. É exatamente esse o papel das Metas Financeiras.",
          "Um desejo vago é dizer: 'Um dia quero fazer uma viagem' ou 'Preciso trocar de geladeira'. Uma meta financeira bem construída tem três elementos obrigatórios: 1) O objetivo específico; 2) O custo total estimado em reais; e 3) O prazo em meses para acontecer."
        ],
        terms: [
          {
            term: "Metas de Curto Prazo (até 12 meses)",
            definition: "Objetivos próximos que serão realizados dentro de alguns meses até no máximo 1 ano. Exemplos: quitar uma pequena dívida, comprar um eletrodoméstico à vista, pagar matrícula de um curso ou fazer uma viagem de fim de semana."
          },
          {
            term: "Metas de Médio Prazo (de 1 a 5 anos)",
            definition: "Objetivos que exigem planejamento mais prolongado e constância. Exemplos: completar a reserva para imprevistos, reformar a casa, pagar uma faculdade/pós-graduação, fazer uma grande viagem de férias ou trocar de veículo sem financiamento pesado."
          },
          {
            term: "Metas de Longo Prazo (acima de 5 anos)",
            definition: "Projetos estruturais de vida. Exemplos: dar entrada ou quitar a casa própria, planejar uma transição de carreira segura ou construir uma reserva complementar para uma aposentadoria tranquila."
          }
        ]
      },
      {
        id: "cap6-sec2",
        title: "6.2 Como transformar uma meta grande em pequenas etapas mensais",
        paragraphs: [
          "Quando olhamos para o valor cheio de um objetivo — por exemplo, R$ 3.600,00 para comprar um equipamento de trabalho ou reformar um quarto —, o número pode assustar quem ganha um salário modesto. A sensação imediata é 'eu nunca vou ter R$ 3.600,00 sobrando de uma vez'.",
          "O segredo da organização financeira é fatiar a meta grande pelo número de meses disponíveis. Em vez de olhar para a montanha inteira, você olha apenas para o degrau deste mês."
        ],
        steps: [
          {
            stepNumber: "Passo 1",
            title: "Pesquise o custo real do seu objetivo",
            description: "Não chute valores. Pesquise quanto custa exatamente o curso, o produto, o conserto ou a viagem (incluindo transporte, hospedagem e alimentação)."
          },
          {
            stepNumber: "Passo 2",
            title: "Divida o Valor Total pelo Prazo em Meses (ou pelo valor que cabe no seu bolso)",
            description: "Fórmula simples: Valor da Etapa Mensal = Valor Total da Meta ÷ Número de Meses. Se a parcela mensal ficar alta demais para o seu orçamento atual, basta aumentar o prazo em alguns meses."
          },
          {
            stepNumber: "Passo 3",
            title: "Trate a meta mensal como um boleto prioritário para você mesmo",
            description: "Não espere 'sobrar dinheiro no fim do mês' para guardar para sua meta. Assim que receber sua renda, separe o valor da etapa mensal em uma conta ou espaço separado do dinheiro do dia a dia."
          }
        ],
        table: {
          caption: "Tabela 6.1 — Exemplos de Divisão de Metas Grandes em Etapas Mensais",
          headers: ["Objetivo Específico", "Horizonte", "Custo Total Estimado", "Prazo Escolhido", "Etapa Mensal", "Equivalente por Semana"],
          rows: [
            ["Comprar óculos de grau novos à vista", "Curto Prazo", "R$ 600,00", "4 meses", "R$ 150,00 / mês", "R$ 37,50 / semana"],
            ["Comprar notebook para estudo e trabalho", "Curto Prazo", "R$ 2.400,00", "10 meses", "R$ 240,00 / mês", "R$ 60,00 / semana"],
            ["Viagem de férias em família no próximo ano", "Médio Prazo", "R$ 3.600,00", "18 meses", "R$ 200,00 / mês", "R$ 50,00 / semana"],
            ["Reforma da cozinha e pintura da casa", "Médio Prazo", "R$ 7.200,00", "24 meses", "R$ 300,00 / mês", "R$ 75,00 / semana"],
            ["Entrada planejada para imóvel próprio", "Longo Prazo", "R$ 30.000,00", "60 meses (5 anos)", "R$ 500,00 / mês", "R$ 125,00 / semana"]
          ]
        }
      }
    ],
    keyTakeaways: [
      "Toda meta financeira precisa ter nome específico, valor total em reais e data definida.",
      "Classifique seus objetivos em Curto (até 1 ano), Médio (1 a 5 anos) e Longo Prazo (mais de 5 anos) para não tentar fazer tudo ao mesmo tempo.",
      "Dividir uma meta grande em pequenas parcelas mensais transforma o que parecia impossível em um hábito simples e previsível."
    ]
  }
];
