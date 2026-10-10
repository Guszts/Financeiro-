import { Chapter, MistakeItem, ChallengeDay } from './ebookChaptersPart1';

export const CHAPTERS_PART_2: Chapter[] = [
  {
    id: "capitulo-7",
    number: "07",
    shortTitle: "Reserva para Imprevistos",
    title: "Capítulo 7 — Reserva para Imprevistos",
    subtitle: "O escudo de proteção que impede que problemas inesperados do cotidiano se transformem em dívidas descontroladas.",
    readingTime: "9 min de leitura",
    summary: "Compreenda o que é uma reserva financeira para imprevistos, para que ela serve exclusivamente, por que imprevistos acontecem na vida de todas as pessoas e como calcular sua meta de proteção passo a passo.",
    sections: [
      {
        id: "cap7-sec1",
        title: "7.1 O que é uma reserva financeira e para que ela serve?",
        paragraphs: [
          "Reserva financeira (também conhecida como reserva para imprevistos ou reserva de emergência) é um valor em dinheiro guardado exclusivamente para cobrir situações inesperadas e necessárias que fogem do orçamento normal do mês.",
          "Imagine que ela funciona como o estepe de um carro ou um guarda-chuva na mochila: você espera não precisar usá-la hoje, mas, quando o pneu fura ou a tempestade cai de repente, ter essa proteção evita que você fique parado na estrada ou precise recorrer a empréstimos com juros altíssimos.",
          "Importante deixar claro: reserva para imprevistos não serve para aproveitar promoções de liquidação, comprar presentes de última hora ou trocar de celular. Ela é o seu fundo de paz de espírito e segurança familiar."
        ],
        terms: [
          {
            term: "Reserva para Imprevistos",
            definition: "Quantia financeira separada das contas do dia a dia, mantida em local seguro e de fácil acesso (liquidez imediata), destinada unicamente a cobrir urgências reais ou queda temporária de renda."
          },
          {
            term: "Liquidez",
            definition: "Termo financeiro que indica a velocidade e facilidade com que você consegue resgatar seu dinheiro quando precisa dele na mão. Para a reserva de imprevistos, o dinheiro deve estar disponível no mesmo dia."
          }
        ]
      },
      {
        id: "cap7-sec2",
        title: "7.2 Por que imprevistos podem acontecer com qualquer pessoa?",
        paragraphs: [
          "Muitas pessoas planejam o orçamento mensal contando que todos os 12 meses do ano serão perfeitamente iguais, sem nenhum contratempo. Porém, na vida real, sabemos que se um aparelho doméstico existe, um dia ele precisará de manutenção; se temos saúde, ainda assim uma gripe forte ou dor de dente pode exigir medicamentos imediatos.",
          "O imprevisto é incerto quanto ao dia exato em que vai ocorrer, mas é certo que em algum momento do ano ele aparecerá. Quando você não tem reserva, um problema simples de R$ 400,00 (como uma geladeira que para de gelar ou um cano com vazamento) obriga você a atrasar contas ou entrar no rotativo do cartão. Quando você possui reserva, um imprevisto deixa de ser uma crise desesperadora e passa a ser apenas uma despesa resolvida à vista."
        ],
        bulletList: {
          title: "Exemplos reais de situações em que a Reserva deve ser acionada:",
          items: [
            "Despesas médicas ou odontológicas urgentes e compra de medicamentos necessários.",
            "Conserto indispensável em itens básicos da casa (geladeira, fogão, chuveiro, encanamento ou telhado).",
            "Reparo mecânico essencial no veículo ou equipamento utilizado para trabalhar.",
            "Perda inesperada de emprego ou redução temporária da renda em trabalhadores autônomos."
          ]
        }
      },
      {
        id: "cap7-sec3",
        title: "7.3 Como estabelecer uma meta de reserva realista",
        paragraphs: [
          "Na educação financeira, a recomendação clássica para uma reserva completa varia entre 3 a 6 vezes o valor dos seus Custos Essenciais Mensais (aqueles gastos indispensáveis que vimos no Capítulo 3, e não necessariamente o seu salário inteiro).",
          "Contudo, para quem está começando do zero absoluto, pensar em juntar 6 meses de despesas pode parecer distante demais. Por isso, o método mais eficiente e encorajador é construir sua reserva em 3 Degraus Progressivos, sem pressa e sem promessas irreais:"
        ],
        steps: [
          {
            stepNumber: "Degrau 1",
            title: "Reserva Inicial de Fôlego (Meta: R$ 500,00 a R$ 1.000,00)",
            description: "O seu primeiro objetivo rápido. Ter R$ 500 ou R$ 1.000 guardados já resolve a grande maioria dos pequenos contratempos domésticos ou de farmácia sem precisar fazer dívidas."
          },
          {
            stepNumber: "Degrau 2",
            title: "Um Mês de Custos Essenciais",
            description: "Some quanto você precisa para pagar o básico de 1 mês (moradia, mercado, água, luz e transporte). Se seus gastos essenciais somam R$ 1.800,00, essa passa a ser a sua segunda meta."
          },
          {
            stepNumber: "Degrau 3",
            title: "Reserva Completa (de 3 a 6 Meses de Custos Essenciais)",
            description: "Se você tem renda fixa estável, busque acumular gradualmente o equivalente a 3 meses de custos essenciais. Se você é autônomo ou tem renda variável, busque chegar a 6 meses para ter tranquilidade total."
          }
        ],
        table: {
          caption: "Tabela 7.1 — Simulação de Metas de Reserva por Perfil de Custo Essencial",
          headers: ["Custo Essencial Mensal", "Degrau 1 (Início Rápido)", "Degrau 2 (1 Mês Básico)", "Degrau 3 (3 Meses — Estável)", "Degrau 3 (6 Meses — Autônomo)"],
          rows: [
            ["R$ 1.500,00 / mês", "R$ 500,00", "R$ 1.500,00", "R$ 4.500,00", "R$ 9.000,00"],
            ["R$ 2.200,00 / mês", "R$ 800,00", "R$ 2.200,00", "R$ 6.600,00", "R$ 13.200,00"],
            ["R$ 3.000,00 / mês", "R$ 1.000,00", "R$ 3.000,00", "R$ 9.000,00", "R$ 18.000,00"]
          ]
        }
      }
    ],
    keyTakeaways: [
      "A reserva para imprevistos tem como objetivo segurança e disponibilidade imediata, não enriquecimento rápido.",
      "Comece pequeno: atingir os primeiros R$ 500,00 ou R$ 1.000,00 de reserva já muda sua relação de segurança com o dinheiro.",
      "Se precisar usar parte da reserva em uma urgência real, utilize sem culpa — ela foi criada exatamente para isso — e depois retome a reposição mensal."
    ]
  },
  {
    id: "capitulo-8",
    number: "08",
    shortTitle: "Como Evitar Dívidas",
    title: "Capítulo 8 — Como Evitar Dívidas",
    subtitle: "Compreenda como funcionam os compromissos financeiros, o perigo silencioso do acúmulo de parcelas e o impacto dos juros no seu bolso.",
    readingTime: "10 min de leitura",
    summary: "Aprenda o que caracteriza uma dívida, por que diversas parcelas pequenas podem sufocar sua renda mensal, como funcionam juros e taxas adicionais e como organizar seus compromissos financeiros.",
    sections: [
      {
        id: "cap8-sec1",
        title: "8.1 O que são dívidas e como elas começam",
        paragraphs: [
          "De forma simples e direta, uma dívida é qualquer compromisso financeiro em que você utiliza hoje um dinheiro que ainda não ganhou, comprometendo a sua renda dos próximos meses ou anos. Quando esse compromisso passa a cobrar juros ou ultrapassa a sua capacidade de pagamento mensal, surge o endividamento descontrolado.",
          "Raramente alguém se endivida por causa de uma única compra gigantesca. Na maioria dos casos, o endividamento começa devagar: um parcelamento aqui, um pequeno limite do cheque especial usado ali, um boleto atrasado na semana seguinte, até que o salário inteiro já entra na conta comprometido."
        ],
        terms: [
          {
            term: "Juros",
            definition: "É o 'aluguel' cobrado pelo uso do dinheiro emprestado no tempo. Quando você atrasa uma conta ou faz um empréstimo/financiamento, paga o valor original mais uma porcentagem adicional (os juros)."
          },
          {
            term: "Custo Efetivo Total (CET)",
            definition: "É a soma real de tudo o que você paga em um empréstimo ou financiamento: inclui não apenas os juros, mas também taxas administrativas, seguros embutidos e impostos (como o IOF)."
          },
          {
            term: "Inadimplência",
            definition: "Situação em que uma dívida ou conta vence e permanece sem pagamento após a data limite acordada, gerando multa, juros diários e possível restrição no CPF."
          }
        ]
      },
      {
        id: "cap8-sec2",
        title: "8.2 Cuidados com compras parceladas e o efeito 'bola de neve'",
        paragraphs: [
          "No Brasil, a cultura do parcelamento ('em até 10x ou 12x') é muito presente. O grande perigo mora na ilusão da parcela pequena: quando você olha apenas para uma prestação de R$ 70,00 por mês, pensa 'R$ 70,00 cabe facilmente no meu bolso'.",
          "O problema é quando você soma 8 ou 10 compras diferentes feitas em meses seguidos, todas com parcelas 'pequenas'. Sem perceber, você cria um gasto fixo mensal de R$ 700,00 ou R$ 900,00 que engessa completamente o seu orçamento pelos próximos 10 meses."
        ],
        exampleBox: {
          title: "Exemplo Fictício: A Armadilha das Parcelas Pequenas de André",
          scenario: "André recebe R$ 2.400,00 por mês. Ao longo de quatro meses, ele fez seis compras parceladas achando que cada parcela individual era barata:",
          takeaway: "Nenhuma parcela isolada passava de R$ 150,00, mas somadas elas consumiam R$ 630,00 todos os meses (mais de 26% do salário líquido de André!). Antes de fazer qualquer novo parcelamento, olhe sempre para a SOMA TOTAL das parcelas que você já tem em andamento.",
          breakdown: [
            { label: "Celular em 10x de R$ 150,00 + Tênis em 6x de R$ 80,00", value: "R$ 230,00 / mês" },
            { label: "Micro-ondas em 8x de R$ 90,00 + Roupas em 5x de R$ 110,00", value: "R$ 200,00 / mês" },
            { label: "Presentes em 4x de R$ 85,00 + Conserto em 6x de R$ 115,00", value: "R$ 200,00 / mês" },
            { label: "Comprometimento Mensal Acumulado", value: "R$ 630,00 todo mês" }
          ]
        }
      },
      {
        id: "cap8-sec3",
        title: "8.3 Importância de entender juros e como organizar compromissos",
        paragraphs: [
          "Quando você compra algo à vista (ou com dinheiro que já juntou previamente), você tem poder de barganha para pedir desconto. Quando você financia ou atrasa pagamentos com juros altos, você acaba pagando por um produto e meio — ou até dois produtos — levando apenas um para casa.",
          "Para nunca perder o controle dos seus compromissos financeiros, aplique estas quatro regras de organização:"
        ],
        steps: [
          {
            stepNumber: "Regra 1",
            title: "Centralize as datas de vencimento próximas ao recebimento do salário",
            description: "Se você recebe no dia 5 de cada mês, altere o vencimento da luz, água, internet e cartão para os dias 8 ou 10. Assim, você paga tudo de uma vez logo que o dinheiro entra."
          },
          {
            stepNumber: "Regra 2",
            title: "Nunca comprometa mais de 15% a 20% da renda com prestações somadas",
            description: "Estabeleça um teto máximo para compras a prazo. Se você já tem duas parcelas em andamento, espere quitar uma delas antes de assumir qualquer outra."
          },
          {
            stepNumber: "Regra 3",
            title: "Evite usar o limite da conta corrente (Cheque Especial)",
            description: "O valor de 'limite disponível' que aparece no aplicativo do banco junto com o seu saldo não é dinheiro seu; é um empréstimo pré-aprovado com juros elevados."
          },
          {
            stepNumber: "Regra 4",
            title: "Se já tiver dívidas, liste todas e priorize as de juros mais altos",
            description: "Caso você já possua contas atrasadas hoje, anote o nome do credor, o valor original e a taxa de juros. Priorize negociar e quitar primeiro as dívidas de serviços essenciais (luz/água/moradia) e as de juros mais caros (cartão de crédito e cheque especial)."
          }
        ]
      }
    ],
    keyTakeaways: [
      "Nunca avalie uma compra parcelada apenas pelo valor de uma prestação isolada; some todas as parcelas que você já tem nos próximos meses.",
      "O limite da conta bancária (cheque especial) não faz parte da sua renda: é um empréstimo caro.",
      "Concentrar as datas de vencimento das contas logo após o dia do pagamento reduz drasticamente o risco de esquecimentos e multas."
    ]
  },
  {
    id: "capitulo-9",
    number: "09",
    shortTitle: "Cartão de Crédito",
    title: "Capítulo 9 — Cartão de Crédito",
    subtitle: "Como funciona o limite, a fatura, o crédito rotativo e as regras de ouro para transformar o cartão em aliado sem cair em armadilhas.",
    readingTime: "10 min de leitura",
    summary: "O cartão de crédito não é um vilão em si, mas uma ferramenta que exige conhecimento técnico básico. Entenda a diferença entre limite e dinheiro real, o funcionamento da fatura e como usar o cartão com total segurança.",
    sections: [
      {
        id: "cap9-sec1",
        title: "9.1 Como funciona o limite e a diferença para dinheiro disponível",
        paragraphs: [
          "O cartão de crédito é um meio de pagamento que permite concentrar suas compras do mês em uma única data de pagamento futura. Porém, o erro número um dos iniciantes é confundir Limite do Cartão com Renda Disponível.",
          "Se você ganha R$ 2.500,00 por mês e o banco libera um limite de R$ 5.000,00 no seu cartão de crédito, você NÃO ficou R$ 5.000,00 mais rico. O limite é apenas o valor máximo que a instituição financeira aceita emprestar temporariamente para você até o dia do vencimento da fatura. O seu verdadeiro limite de gastos no cartão deve ser ditado pelo seu orçamento mensal, e nunca pelo teto que o banco liberou no aplicativo."
        ],
        terms: [
          {
            term: "Limite Total vs. Limite Disponível",
            definition: "Limite Total é o teto máximo concedido pelo banco. Quando você faz uma compra parcelada de R$ 600,00 (em 6x de R$ 100), o banco bloqueia os R$ 600,00 inteiros do seu limite, e vai liberando R$ 100,00 a cada fatura paga."
          },
          {
            term: "Fatura do Cartão",
            definition: "É o documento mensal que soma todas as compras à vista e parcelas daquele período. Possui duas datas essenciais: a Data de Fechamento (quando o banco encerra a soma do mês) e a Data de Vencimento (o dia limite para você pagar)."
          },
          {
            term: "Crédito Rotativo e Parcelamento de Fatura",
            definition: "Acontece quando você não paga o valor total da fatura até o vencimento (por exemplo, paga apenas o 'valor mínimo' ou parte da conta). O valor restante vira um empréstimo automático com algumas das taxas de juros mais altas do mercado."
          }
        ]
      },
      {
        id: "cap9-sec2",
        title: "9.2 O perigo dos juros do cartão e cuidados com parcelamentos",
        paragraphs: [
          "O cartão de crédito só é vantajoso e gratuito quando você cumpre duas condições inegociáveis: 1) Não paga anuidade cara sem necessidade; e 2) Paga 100% do valor total da fatura até a data de vencimento todos os meses.",
          "Quando você paga apenas o 'Pagamento Mínimo' indicado no boleto, você evita que seu nome fique negativado naquele mês, mas aciona os juros do crédito rotativo sobre a diferença que ficou aberta. Em poucos meses, esses juros compostos fazem a dívida dobrar de tamanho.",
          "Além disso, tome cuidado com compras parceladas de itens de consumo rápido: nunca parcele compras de supermercado, combustível, lanches ou passeios de fim de semana. Se você parcelar o supermercado deste mês em 3 vezes, no mês que vem você terá que pagar o mercado novo mais a parcela da comida que já foi consumida no mês passado."
        ],
        table: {
          caption: "Tabela 9.1 — O que Comprar e o que Nunca Parcelar no Cartão de Crédito",
          headers: ["Tipo de Despesa", "Recomendação de Uso", "Motivo Prático"],
          rows: [
            ["Supermercado, feira, padaria e farmácia do mês", "À vista (Débito, Pix ou 1x na fatura)", "São gastos que se repetem todo mês; parcelar acumula duas contas no mês seguinte"],
            ["Combustível e transporte semanal", "À vista (Débito, Pix ou 1x na fatura)", "O combustível acaba em dias, mas a parcela continuaria cobrando no mês seguinte"],
            ["Assinaturas recorrentes planejadas no orçamento", "1x na fatura (dentro do limite planejado)", "Facilita centralizar o controle em um só lugar, desde que previsto no orçamento"],
            ["Bens duráveis planejados (ex.: geladeira, notebook)", "À vista com desconto (preferencial) ou parcelado sem juros se couber no orçamento", "O bem dura vários anos, mas a parcela precisa caber com folga na sua renda mensal"]
          ]
        }
      },
      {
        id: "cap9-sec3",
        title: "9.3 Como utilizar o cartão de crédito de maneira responsável",
        paragraphs: [
          "Para usar o cartão de crédito com total domínio e tranquilidade, adote estas práticas simples no aplicativo do seu banco hoje mesmo:"
        ],
        steps: [
          {
            stepNumber: "Prática 1",
            title: "Reduza manualmente o limite no aplicativo do banco",
            description: "Quase todos os aplicativos bancários possuem uma barrinha de 'Ajuste de Limite'. Mesmo que o banco dê R$ 6.000,00 de limite, reduza a barrinha para um valor seguro (ex.: R$ 800,00 ou no máximo 30% do seu salário líquido)."
          },
          {
            stepNumber: "Prática 2",
            title: "Tenha apenas 1 (no máximo 2) cartões de crédito",
            description: "Ter quatro ou cinco cartões de bancos diferentes espalha seus gastos em várias datas de vencimento e cria uma falsa sensação de que cada fatura é baixa."
          },
          {
            stepNumber: "Prática 3",
            title: "Acompanhe a fatura aberta toda semana",
            description: "Não espere a fatura fechar para levar um susto com o valor total. Abra o aplicativo uma vez por semana para ver em quanto já está a soma parcial do mês."
          },
          {
            stepNumber: "Prática 4",
            title: "Pague sempre o valor integral até o vencimento",
            description: "Encare o valor total da fatura como uma conta única e obrigatória. Jamais considere o 'pagamento mínimo' como uma opção normal de planejamento."
          }
        ]
      }
    ],
    keyTakeaways: [
      "Limite do cartão de crédito não é extensão do seu salário; é um empréstimo que precisa ser pago integralmente no vencimento.",
      "Jamais parcele despesas que se repetem todo mês, como supermercado, combustível ou contas básicas.",
      "Use a ferramenta de ajuste do aplicativo do banco para travar seu limite em um teto que caiba com segurança dentro do seu orçamento."
    ]
  },
  {
    id: "capitulo-10",
    number: "10",
    shortTitle: "Planejamento Financeiro Mensal",
    title: "Capítulo 10 — Planejamento Financeiro Mensal",
    subtitle: "Um método simples em 6 passos para planejar cada mês do início ao fim: receitas, despesas, metas, economia, pagamentos e revisão.",
    readingTime: "9 min de leitura",
    summary: "Agora que você conhece todos os conceitos fundamentais, vamos unir tudo em um ritual prático mensal. Aprenda o Método do Ciclo Mensal em 6 etapas para manter suas finanças sempre em ordem.",
    sections: [
      {
        id: "cap10-sec1",
        title: "10.1 O Método do Ciclo Mensal: como organizar cada mês sem complicação",
        paragraphs: [
          "Muitas pessoas até montam uma planilha empolgadas em janeiro, mas abandonam tudo em fevereiro porque tentam fazer controles complicados demais. O segredo para manter a organização financeira pelo resto da vida é ter um ritual simples, rápido e repetível a cada mês.",
          "Nosso método divide o mês em 6 pilares claros que você executa em momentos específicos: 1) Previsão de Receitas; 2) Separação de Economia e Metas; 3) Organização de Despesas; 4) Calendário de Pagamentos; 5) Controle Semanal; e 6) Revisão de Fechamento do Mês."
        ],
        steps: [
          {
            stepNumber: "Fase 1 — Dia 01 (Antes de gastar)",
            title: "Confirme suas Receitas Líquidas do Mês",
            description: "Anote o valor exato que vai entrar no mês. Se houver valores extras (como 13º salário, férias ou serviço extra), inclua apenas o que já estiver confirmado."
          },
          {
            stepNumber: "Fase 2 — No Dia do Recebimento",
            title: "Separe primeiro sua Economia e Metas ('Pague-se Primeiro')",
            description: "Assim que o salário cair na conta, transfira imediatamente o valor planejado para a sua Reserva de Imprevistos e para as suas Metas Financeiras. Não deixe para guardar 'o que sobrar'."
          },
          {
            stepNumber: "Fase 3 — Nos Primeiros 5 Dias",
            title: "Quite os Pagamentos Fixos e Essenciais",
            description: "Pague aluguel/moradia, luz, água, internet, condomínio e separe a verba sagrada do supermercado e transporte do mês."
          },
          {
            stepNumber: "Fase 4 — Ao Longo das 4 Semanas",
            title: "Acompanhe as Despesas Variáveis por Semana",
            description: "Divida o valor restante para estilo de vida e gastos variáveis por 4 semanas. É muito mais fácil controlar uma meta de R$ 100,00 por semana do que R$ 400,00 soltos no mês inteiro."
          },
          {
            stepNumber: "Fase 5 — Agenda de Vencimentos",
            title: "Verifique o Calendário de Pagamentos",
            description: "Tenha uma lista simples com o dia de vencimento de cada boleto ou fatura para garantir zero atrasos e zero multas."
          },
          {
            stepNumber: "Fase 6 — Último Dia do Mês (20 minutos)",
            title: "Faça a Revisão no Final do Mês",
            description: "Compare o que você planejou com o que realmente aconteceu, celebre os avanços e ajuste os limites para o mês seguinte."
          }
        ]
      },
      {
        id: "cap10-sec2",
        title: "10.2 Roteiro de Revisão no Final do Mês",
        paragraphs: [
          "A revisão de final de mês é o momento de aprendizado. Mesmo que em algum mês aconteça um gasto fora do esperado, fazer o fechamento impede que um deslize pontual vire descontrole permanente. Utilize a tabela abaixo como guia da sua reunião mensal consigo mesmo (ou com sua família):"
        ],
        table: {
          caption: "Tabela 10.1 — Roteiro dos 6 Pilares do Planejamento Mensal",
          headers: ["Pilar do Método", "Quando Fazer", "Tempo Necessário", "Ação Prática Principal"],
          rows: [
            ["1. Receitas", "3 dias antes de virar o mês", "5 minutos", "Calcular a renda líquida disponível garantida para o novo mês"],
            ["2. Economia e Metas", "No dia em que receber o salário", "5 minutos", "Transferir o valor da reserva e metas para conta separada"],
            ["3. Pagamentos Fixos", "Até o dia 10 do mês", "15 minutos", "Pagar boletos de moradia, contas básicas e compromissos"],
            ["4. Despesas Variáveis", "Toda semana (ex.: domingo)", "10 minutos", "Conferir gastos de mercado, transporte e lazer da semana"],
            ["5. Cartão de Crédito", "Quinzenalmente e no fechamento", "5 minutos", "Checar fatura aberta e garantir o pagamento 100% integral"],
            ["6. Revisão Final", "Último fim de semana do mês", "20 minutos", "Avaliar o que funcionou, somar a reserva e planejar o mês seguinte"]
          ]
        }
      }
    ],
    keyTakeaways: [
      "O hábito de 'pagar-se primeiro' (guardar o valor da meta no dia em que recebe o salário) é o segredo das pessoas que conseguem poupar com constância.",
      "Dividir os gastos variáveis e de lazer por semana evita que o dinheiro acabe no dia 15 do mês.",
      "Uma revisão mensal de apenas 20 minutos garante que você comece o mês seguinte com clareza total."
    ]
  },
  {
    id: "capitulo-11",
    number: "11",
    shortTitle: "Erros Financeiros Comuns",
    title: "Capítulo 11 — Erros Financeiros Comuns",
    subtitle: "Conheça os 16 erros mais frequentes que sabotam o orçamento de iniciantes, entenda por que são prejudiciais e saiba como evitá-los.",
    readingTime: "12 min de leitura",
    summary: "Aprender com os erros mais comuns é o caminho mais curto para proteger o seu bolso. Analise detalhadamente 16 armadilhas financeiras cotidianas e veja a solução prática para cada uma delas.",
    sections: [
      {
        id: "cap11-sec1",
        title: "11.1 Por que identificar padrões de erro protege o seu dinheiro?",
        paragraphs: [
          "Ninguém nasce sabendo lidar com dinheiro, e a maioria de nós não teve aulas de educação financeira na escola. Por isso, é perfeitamente compreensível que quase todos os adultos já tenham cometido pelo menos metade dos erros listados a seguir em algum momento da vida.",
          "O objetivo deste capítulo não é gerar culpa pelo passado, mas acender um alerta preventivo. Para cada um dos 16 erros abaixo, explicamos claramente qual é a falha, por que ela prejudica suas finanças e qual atitude prática você deve adotar para evitá-la."
        ]
      }
    ],
    keyTakeaways: [
      "Identificar um erro financeiro que você comete hoje é uma ótima notícia: significa que você acabou de encontrar uma oportunidade imediata de melhorar seu saldo mensal.",
      "Trocar o hábito de 'guardar o que sobra' por 'separar assim que recebe' resolve um dos erros mais universais das finanças pessoais.",
      "Pequenas correções de rota feitas hoje evitam anos de estresse com juros e endividamento."
    ]
  },
  {
    id: "capitulo-12",
    number: "12",
    shortTitle: "Desafio de 30 Dias",
    title: "Capítulo 12 — Desafio Financeiro de 30 Dias",
    subtitle: "Um plano de ação diário com 30 pequenas tarefas práticas para transformar sua organização financeira em apenas um mês.",
    readingTime: "14 min de leitura",
    summary: "Conhecimento sem prática não muda o saldo da conta. Execute uma pequena tarefa de 10 a 15 minutos por dia durante 30 dias e construa todos os hábitos ensinados neste livro.",
    sections: [
      {
        id: "cap12-sec1",
        title: "12.1 Como funciona a jornada prática de 30 dias",
        paragraphs: [
          "Ler um livro inteiro sobre educação financeira é um passo admirável, mas a verdadeira transformação acontece quando você coloca a mão na massa. Para evitar que você se sinta sobrecarregado tentando fazer tudo em uma única tarde, criamos o Desafio de 30 Dias do Dinheiro Organizado.",
          "O desafio está estruturado em 4 Semanas Temáticas: Semana 1 (Diagnóstico e Clareza), Semana 2 (Faxina Financeira e Economia), Semana 3 (Orçamento, Cartão e Proteção) e Semana 4 (Metas, Hábitos e Fechamento). Marque cada dia abaixo conforme concluir sua pequena tarefa diária!"
        ]
      }
    ],
    keyTakeaways: [
      "A constância supera a intensidade: fazer uma tarefa simples de 10 minutos por dia constrói hábitos duradouros sem cansaço.",
      "Ao concluir os 30 dias, você terá seu diagnóstico pronto, gastos desnecessários cortados, orçamento ativo e sua reserva iniciada.",
      "Você pode repetir ou revisar este ciclo sempre que sua vida financeira passar por mudanças importantes."
    ]
  }
];

export const COMMON_MISTAKES: MistakeItem[] = [
  {
    number: 1,
    error: "Não registrar os pequenos gastos do dia a dia",
    whyHarmful: "Pequenas despesas de R$ 8,00 a R$ 20,00 (lanches, cafés, taxas, entregas) passam despercebidas na memória, mas juntas podem consumir de R$ 300,00 a R$ 600,00 por mês sem que você saiba para onde o dinheiro foi.",
    howToAvoid: "Anote todas as saídas no mesmo dia em que ocorrerem (em caderno, planilha ou aplicativo) e revise a soma desses pequenos gastos toda semana."
  },
  {
    number: 2,
    error: "Fazer contas usando o Salário Bruto em vez do Salário Líquido",
    whyHarmful: "Quem planeja gastos pensando que ganha R$ 3.000,00 brutos, mas recebe R$ 2.550,00 líquidos na conta, já começa o mês gastando R$ 450,00 que simplesmente não existem.",
    howToAvoid: "Baseie 100% do seu orçamento apenas no valor líquido exato que efetivamente cai na sua conta bancária após todos os descontos."
  },
  {
    number: 3,
    error: "Deixar para guardar dinheiro apenas 'se sobrar no fim do mês'",
    whyHarmful: "Quando o dinheiro fica parado na conta corrente disponível para uso, nossa tendência natural é ajustar o consumo até gastar tudo. Resultado: quase nunca sobra nada no dia 30.",
    howToAvoid: "Aplique a regra de ouro: separe o valor da sua reserva e das suas metas no primeiro dia em que receber o salário, como se fosse a conta mais importante do mês."
  },
  {
    number: 4,
    error: "Considerar o limite do cartão de crédito ou cheque especial como parte da renda",
    whyHarmful: "Usar o limite da conta ou do cartão além do que você pode pagar à vista cria dívidas com algumas das maiores taxas de juros do mundo, corroendo seu salário futuro.",
    howToAvoid: "Desative ou ignore o limite do cheque especial e reduza manualmente o limite do cartão no aplicativo para um valor que caiba com folga dentro da sua renda mensal."
  },
  {
    number: 5,
    error: "Pagar apenas o 'Valor Mínimo' da fatura do cartão de crédito",
    whyHarmful: "O saldo restante entra automaticamente no crédito rotativo ou parcelamento de fatura, fazendo a dívida crescer em efeito bola de neve a cada mês que passa.",
    howToAvoid: "Controle os gastos semanais no cartão para garantir sempre o pagamento de 100% do valor integral da fatura até a data de vencimento."
  },
  {
    number: 6,
    error: "Acumular várias compras parceladas ao mesmo tempo",
    whyHarmful: "Olhar apenas se 'a parcela de R$ 60,00 cabe no bolso' faz a pessoa acumular 8 ou 10 parcelamentos simultâneos que travam metade do salário por quase um ano inteiro.",
    howToAvoid: "Mantenha uma lista com a soma de todas as parcelas já ativas. Só assuma uma nova prestação quando outra terminar e respeite o limite máximo de 15% da renda."
  },
  {
    number: 7,
    error: "Parcelar despesas recorrentes (como supermercado e combustível)",
    whyHarmful: "Itens que acabam dentro do próprio mês nunca devem ser divididos para os meses seguintes, pois no próximo mês você terá que comprar comida e combustível novamente enquanto ainda paga os do mês passado.",
    howToAvoid: "Pague todas as despesas de consumo mensal (alimentação, luz, transporte, lazer) sempre à vista ou em parcela única dentro do orçamento do mês."
  },
  {
    number: 8,
    error: "Não ter nenhuma Reserva para Imprevistos",
    whyHarmful: "Sem uma reserva mínima, qualquer contratempo comum da vida (um remédio, um conserto doméstico ou pneu furado) obriga você a atrasar contas ou pegar empréstimos caros.",
    howToAvoid: "Construa sua reserva em degraus, começando pela meta inicial rápida de R$ 500,00 a R$ 1.000,00 em local seguro e separado da conta corrente."
  },
  {
    number: 9,
    error: "Fazer compras por impulso emocional (cansaço, estresse ou euforia)",
    whyHarmful: "Comprar para aliviar um dia estressante ou porque uma promoção diz 'só hoje' leva à aquisição de produtos que você não usa e que deixam arrependimento quando a fatura chega.",
    howToAvoid: "Adote a regra das 48 horas de espera para qualquer compra não planejada e pergunte-se quantas horas do seu trabalho aquele item custa."
  },
  {
    number: 10,
    error: "Ir ao supermercado sem lista fechada e com fome",
    whyHarmful: "Sem lista e com fome, compramos itens duplicados que já temos em casa, produtos ultraprocessados mais caros por impulso e esquecemos o que realmente faltava na despensa.",
    howToAvoid: "Confira os armários antes de sair, escreva uma lista objetiva, alimente-se antes de ir ao mercado e compare o preço por quilo/litro nas prateleiras."
  },
  {
    number: 11,
    error: "Manter assinaturas automáticas e tarifas bancárias que não utiliza",
    whyHarmful: "Cobranças mensais de R$ 19,90 a R$ 49,90 em serviços de streaming, clubes, aplicativos ou pacotes de banco não usados drenam centenas de reais por ano no piloto automático.",
    howToAvoid: "Revise seu extrato e fatura a cada 3 meses, cancele imediatamente o que não usou nos últimos 30 dias e migre para conta bancária isenta de tarifa de manutenção."
  },
  {
    number: 12,
    error: "Esquecer Despesas Sazonais (IPTU, IPVA, material escolar, seguros)",
    whyHarmful: "Essas contas acontecem todo ano na mesma época, mas quem não se prepara é pego de surpresa em janeiro e fevereiro, desequilibrando o ano inteiro logo no começo.",
    howToAvoid: "Some o valor anual dessas despesas e divida por 12 meses, guardando um doze avos (1/12) por mês ao longo do ano para pagar tudo à vista e com desconto."
  },
  {
    number: 13,
    error: "Elevar os gastos imediatamente na mesma proporção de um aumento de renda",
    whyHarmful: "Quando a pessoa ganha um aumento de R$ 500,00 e imediatamente assume R$ 550,00 em novos gastos fixos, ela continua sem reserva e ainda mais vulnerável.",
    howToAvoid: "Sempre que sua renda aumentar ou entrar um dinheiro extra, direcione pelo menos 50% desse aumento para acelerar suas metas e sua reserva financeira."
  },
  {
    number: 14,
    error: "Emprestar seu nome ou cartão de crédito para terceiros sem garantia",
    whyHarmful: "Mesmo com boa intenção de ajudar amigos ou parentes, se a outra pessoa enfrentar um imprevisto e não puder pagar, a dívida jurídica e o impacto no CPF recaem 100% sobre você.",
    howToAvoid: "Aprenda a dizer 'não' com educação e firmeza: explique que seu orçamento mensal e o limite do seu cartão já estão integralmente comprometidos no seu planejamento."
  },
  {
    number: 15,
    error: "Ignorar multas e juros por pagar contas com poucos dias de atraso",
    whyHarmful: "Pagar boletos com 5 ou 10 dias de atraso por simples esquecimento gera multa imediata (geralmente 2%) mais juros diários, jogando dinheiro fora mesmo tendo saldo na conta.",
    howToAvoid: "Concentre os vencimentos para logo após o dia do salário, ative lembretes no celular ou utilize débito automático para contas essenciais."
  },
  {
    number: 16,
    error: "Acreditar em promessas de dinheiro fácil ou enriquecimento rápido",
    whyHarmful: "Golpes financeiros, apostas tratadas como renda e promessas de lucros garantidos fora da realidade destroem economias que levaram anos de trabalho honesto para serem juntadas.",
    howToAvoid: "Desconfie de qualquer promessa de ganho rápido e fácil. Construa sua segurança financeira com base em organização, trabalho, orçamento consciente e constância."
  }
];

export const THIRTY_DAY_CHALLENGE: ChallengeDay[] = [
  // Semana 1: Diagnóstico e Clareza
  { day: 1, week: 1, title: "Fotografia do Saldo Atual", task: "Abra o aplicativo do seu banco, anote o saldo exato da sua conta corrente e de qualquer dinheiro guardado.", tip: "Encare o número com tranquilidade: este é o seu ponto de partida oficial." },
  { day: 2, week: 1, title: "Cálculo da Renda Líquida Real", task: "Confira seu último comprovante de pagamento ou entradas do mês e anote quanto realmente cai líquido na sua conta.", tip: "Se tiver renda variável, calcule a média dos últimos 3 a 6 meses." },
  { day: 3, week: 1, title: "Mapeamento dos Gastos Fixos", task: "Liste todas as despesas que você paga todo mês com valor fixo ou muito parecido (aluguel, internet, condomínio, cursos).", tip: "Some o total para descobrir quanto da sua renda já começa comprometida." },
  { day: 4, week: 1, title: "Levantamento de Faturas e Parcelas", task: "Abra a fatura do cartão de crédito (e carnês, se houver) e liste todas as compras parceladas que ainda vão vencer nos próximos meses.", tip: "Anote quantas parcelas faltam para cada compra terminar." },
  { day: 5, week: 1, title: "Escolha da Ferramenta de Controle", task: "Defina onde você vai registrar seus gastos pelos próximos 30 dias (um caderno dedicado, a planilha deste e-book ou bloco de notas).", tip: "Deixe a ferramenta escolhida em local super fácil de acessar." },
  { day: 6, week: 1, title: "Início do Registro Diário", task: "Anote absolutamente todos os gastos feitos hoje, até mesmo o menor valor em dinheiro ou Pix.", tip: "Leva menos de 2 minutos antes de dormir." },
  { day: 7, week: 1, title: "Balanço da Primeira Semana", task: "Revise tudo o que você descobriu nos últimos 6 dias e celebre por ter concluído sua primeira semana de clareza financeira.", tip: "Conhecer os números já reduz metade da ansiedade." },

  // Semana 2: Faxina Financeira e Economia
  { day: 8, week: 2, title: "Caça às Assinaturas Esquecidas", task: "Verifique na fatura do cartão e no extrato bancário todas as cobranças recorrentes de aplicativos, streaming, jogos ou clubes.", tip: "Cancele hoje mesmo pelo menos 1 serviço que você quase não usa." },
  { day: 9, week: 2, title: "Auditoria de Tarifas Bancárias", task: "Olhe o extrato do último mês e veja se o banco cobrou 'cesta de serviços' ou 'manutenção de conta', ou anuidade de cartão.", tip: "Se houver cobrança, solicite mudança para o Pacote de Serviços Essenciais gratuito." },
  { day: 10, week: 2, title: "Dia Zero Impulso (24h Sem Compras Extras)", task: "Passe o dia de hoje sem realizar nenhum gasto fora do estritamente essencial (leve água e lanche/refeição de casa).", tip: "Observe em quais momentos do dia surge a vontade de comprar por hábito." },
  { day: 11, week: 2, title: "Inventário da Despensa e Geladeira", task: "Olhe seus armários e geladeira, organize os alimentos por validade e planeje refeições usando o que você já tem em casa.", tip: "Evitar que alimentos estraguem é economia direta no bolso." },
  { day: 12, week: 2, title: "Revisão de Planos de Internet e Celular", task: "Consulte quanto você paga hoje de celular e internet residencial e pesquise se a própria operadora oferece um plano mais barato.", tip: "Uma ligação de 10 minutos pode economizar R$ 300 a R$ 600 no ano." },
  { day: 13, week: 2, title: "Limpeza de Gatilhos de Consumo Digital", task: "Desative notificações de aplicativos de compras no celular, saia de listas de e-mail de promoções e remova cartões salvos em sites.", tip: "Menos tentações visuais significam menos gastos por impulso." },
  { day: 14, week: 2, title: "Cálculo da Economia da Semana 2", task: "Some quanto você economizará por mês e por ano com os cortes de tarifas, assinaturas e ajustes feitos nesta semana.", tip: "Veja como o dinheiro começa a aparecer sem sofrimento." },

  // Semana 3: Orçamento, Cartão e Proteção
  { day: 15, week: 3, title: "Montagem do Orçamento por Categorias", task: "Distribua sua Renda Líquida definindo tetos claros para Essenciais, Estilo de Vida/Lazer e Economia/Metas.", tip: "Use o modelo de orçamento deste e-book para guiar os valores." },
  { day: 16, week: 3, title: "Trava de Segurança no Cartão de Crédito", task: "Entre no aplicativo do banco e ajuste a barrinha de limite do seu cartão para um teto seguro que caiba no seu orçamento mensal.", tip: "Isso impede que você gaste além da conta por distração." },
  { day: 17, week: 3, title: "Calendário de Datas de Vencimento", task: "Liste o dia de vencimento de todas as suas contas mensais e veja se é possível alterar as datas para logo após o dia do seu salário.", tip: "Pagar tudo junto no início do mês evita esquecimentos e multas." },
  { day: 18, week: 3, title: "Cálculo da Sua Hora de Trabalho", task: "Divida sua renda líquida mensal pelo total de horas que você trabalha no mês (ex.: 220h ou 160h) e descubra quanto vale 1 hora do seu esforço.", tip: "Use esse valor para avaliar se um desejo de compra vale a pena." },
  { day: 19, week: 3, title: "Lista Estratégica de Supermercado", task: "Monte uma lista padrão com os itens básicos que sua casa realmente consome no mês para usar sempre antes de ir às compras.", tip: "Quem vai ao mercado com lista gasta até 25% menos." },
  { day: 20, week: 3, title: "Previsão de Despesas Anuais (Sazonais)", task: "Anote quais despesas extras você terá nos próximos 12 meses (IPTU, IPVA, material escolar, aniversários) e estime o valor total.", tip: "Divida por 12 para saber quanto reservar por mês para não ser pego de surpresa." },
  { day: 21, week: 3, title: "Checagem Semanal do Orçamento", task: "Compare seus gastos anotados até o dia 21 com os limites que você definiu no orçamento e veja se todas as categorias estão sob controle.", tip: "Se uma categoria subiu demais, compense em outra nesta última semana." },

  // Semana 4: Metas, Reserva e Hábitos Duradouros
  { day: 22, week: 4, title: "Definição da Meta de Curto Prazo", task: "Escolha 1 objetivo concreto para realizar nos próximos 6 a 12 meses, anote o valor total e divida pelo número de meses.", tip: "Ter um objetivo claro dá motivação para manter a disciplina." },
  { day: 23, week: 4, title: "Definição das Metas de Médio e Longo Prazo", task: "Escreva 1 meta de médio prazo (1 a 5 anos) e 1 de longo prazo (acima de 5 anos) com valores e etapas mensais.", tip: "Grandes conquistas começam com o primeiro passo planejado." },
  { day: 24, week: 4, title: "Cálculo dos 3 Degraus da Sua Reserva", task: "Anote qual é o valor do seu Degrau 1 (R$ 500 a R$ 1.000), do Degrau 2 (1 mês de custos essenciais) e do Degrau 3 (3 a 6 meses).", tip: "Foque 100% da sua atenção em completar o Degrau 1 primeiro." },
  { day: 25, week: 4, title: "Primeiro Depósito na Reserva para Imprevistos", task: "Separe hoje mesmo uma quantia inicial — pode ser R$ 20,00, R$ 50,00 ou R$ 100,00 — em uma conta ou caixinha separada.", tip: "O valor inicial importa menos do que o ato concreto de começar." },
  { day: 26, week: 4, title: "Desapego Inteligente em Casa", task: "Separe 2 ou 3 objetos, roupas ou aparelhos em ótimo estado que estão parados sem uso há mais de 1 ano para vender ou doar.", tip: "Se vender, direcione 100% do valor para sua Reserva para Imprevistos." },
  { day: 27, week: 4, title: "Planejamento de Lazer Consciente", task: "Programe uma atividade de lazer gratuita ou de baixo custo para este fim de semana (parque, passeio cultural, filme ou encontro em casa).", tip: "Divertir-se bem não exige gastar muito dinheiro." },
  { day: 28, week: 4, title: "Organização de Comprovantes e Documentos", task: "Crie uma pasta física em casa e uma pasta digital no celular/computador para guardar comprovantes de pagamento e contratos importantes.", tip: "Evita pagar contas em duplicidade ou perder garantias de produtos." },
  { day: 29, week: 4, title: "Revisão Geral de Fechamento do Mês", task: "Some todas as receitas, despesas e economias dos últimos 30 dias usando o Checklist de Fechamento Mensal deste livro.", tip: "Compare como você estava no Dia 1 e quanto controle ganhou até hoje." },
  { day: 30, week: 4, title: "Planejamento Completo do Próximo Mês", task: "Deixe o orçamento do próximo mês já desenhado antes mesmo de ele começar e comemore sua formatura no Desafio de 30 Dias!", tip: "Agora basta manter sua revisão rápida de 15 minutos por semana." }
];
