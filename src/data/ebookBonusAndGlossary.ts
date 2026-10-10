export interface GlossaryEntry {
  id: string;
  term: string;
  category: "Conceitos Básicos" | "Orçamento e Controle" | "Crédito e Dívidas" | "Planejamento e Proteção";
  definition: string;
  practicalExample: string;
}

export interface BonusChecklistItem {
  id: string;
  group: string;
  label: string;
  helper: string;
}

export const BONUS_CHECKLIST_MENSAL: BonusChecklistItem[] = [
  { id: "chk-1", group: "Início do Mês (Dia 1 ao Dia 5)", label: "Confirmar o valor exato da Renda Líquida que entrou na conta", helper: "Considere apenas o dinheiro líquido após descontos em folha." },
  { id: "chk-2", group: "Início do Mês (Dia 1 ao Dia 5)", label: "Separar e transferir o valor da Reserva para Imprevistos e Metas", helper: "Pague-se primeiro antes de iniciar os gastos cotidianos." },
  { id: "chk-3", group: "Início do Mês (Dia 1 ao Dia 5)", label: "Quitar os gastos fixos essenciais (Aluguel/Moradia, Condomínio, Luz, Água, Internet)", helper: "Garanta a tranquilidade das contas estruturais da casa." },
  { id: "chk-4", group: "Início do Mês (Dia 1 ao Dia 5)", label: "Definir o limite semanal para Supermercado, Transporte e Lazer", helper: "Divida a verba mensal por 4 semanas para facilitar o controle." },
  { id: "chk-5", group: "Durante o Mês (Acompanhamento Semanal)", label: "Registrar todas as despesas realizadas na semana (Pix, Débito, Dinheiro e Cartão)", helper: "Reserve 10 minutos todo domingo para atualizar a tabela." },
  { id: "chk-6", group: "Durante o Mês (Acompanhamento Semanal)", label: "Conferir o valor parcial da fatura aberta do cartão de crédito", helper: "Evita surpresas no dia do fechamento da fatura." },
  { id: "chk-7", group: "Durante o Mês (Acompanhamento Semanal)", label: "Fazer compras de supermercado sempre utilizando lista fechada", helper: "Confira a despensa e a geladeira antes de sair de casa." },
  { id: "chk-8", group: "Vencimentos e Compromissos", label: "Pagar 100% do valor total da fatura do cartão até a data de vencimento", helper: "Jamais pague apenas o valor mínimo para não cair no rotativo." },
  { id: "chk-9", group: "Vencimentos e Compromissos", label: "Guardar comprovantes importantes de pagamento em pasta organizada", helper: "Mantenha os comprovantes organizados por mês." }
];

export const BONUS_CHECKLIST_REVISAO_FINAL: BonusChecklistItem[] = [
  { id: "rev-1", group: "1. Balanço de Entradas e Saídas", label: "Somar todas as Receitas Líquidas recebidas no mês que terminou", helper: "Inclua salário líquido e eventuais rendas extras." },
  { id: "rev-2", group: "1. Balanço de Entradas e Saídas", label: "Somar todos os Gastos Fixos e Gastos Variáveis realizados no período", helper: "Compare o total gasto com o total recebido." },
  { id: "rev-3", group: "2. Análise de Orçamento vs. Realidade", label: "Verificar quais categorias ficaram dentro do limite planejado", helper: "Reconheça e celebre onde você conseguiu manter a disciplina." },
  { id: "rev-4", group: "2. Análise de Orçamento vs. Realidade", label: "Identificar se alguma categoria estourou o orçamento e entender o motivo", helper: "Foi um imprevisto pontual ou o limite precisa ser ajustado?" },
  { id: "rev-5", group: "3. Auditoria de Desperdícios", label: "Revisar extrato e fatura em busca de tarifas bancárias ou assinaturas sem uso", helper: "Se encontrar algo que não usou nos últimos 30 dias, cancele." },
  { id: "rev-6", group: "4. Evolução das Metas e Reserva", label: "Atualizar o saldo acumulado na Reserva para Imprevistos e nas Metas", helper: "Veja quantos degraus você já avançou em direção ao seu objetivo." },
  { id: "rev-7", group: "5. Preparação do Novo Ciclo", label: "Verificar se o próximo mês terá alguma despesa extra ou sazonal (aniversário, imposto, consulta)", helper: "Incorpore esse gasto no orçamento do novo mês antes de ele começar." },
  { id: "rev-8", group: "5. Preparação do Novo Ciclo", label: "Deixar a planilha/tabela do próximo mês pronta com os novos limites", helper: "Comece o dia 1º do próximo mês com clareza total." }
];

export const FINANCIAL_GLOSSARY: GlossaryEntry[] = [
  {
    id: "glos-1",
    term: "Renda Bruta",
    category: "Conceitos Básicos",
    definition: "É o valor total do seu salário ou remuneração registrado no contrato ou holerite antes de serem feitos os descontos obrigatórios (como INSS, Imposto de Renda, vale-transporte ou plano de saúde).",
    practicalExample: "Se o seu salário contratado é R$ 3.000,00, essa é a sua Renda Bruta — mas não é o valor total que cairá na sua conta."
  },
  {
    id: "glos-2",
    term: "Renda Líquida (ou Renda Disponível)",
    category: "Conceitos Básicos",
    definition: "É o dinheiro real que efetivamente entra na sua conta bancária após todos os descontos obrigatórios. É sempre sobre a Renda Líquida que você deve montar o seu orçamento.",
    practicalExample: "De um salário bruto de R$ 3.000,00, após R$ 400,00 de descontos em folha, sobram R$ 2.600,00 na conta: essa é a sua Renda Líquida."
  },
  {
    id: "glos-3",
    term: "Despesa (ou Gasto)",
    category: "Conceitos Básicos",
    definition: "Qualquer saída de dinheiro utilizada para pagar contas, adquirir produtos ou contratar serviços no seu dia a dia.",
    practicalExample: "O pagamento do aluguel, a compra na padaria e a passagem de ônibus são despesas."
  },
  {
    id: "glos-4",
    term: "Gastos Fixos",
    category: "Orçamento e Controle",
    definition: "Despesas que se repetem todos os meses e cujo valor é igual ou varia muito pouco, independentemente da intensidade do seu uso imediato.",
    practicalExample: "Aluguel, condomínio, mensalidade escolar e plano de internet residencial."
  },
  {
    id: "glos-5",
    term: "Gastos Variáveis",
    category: "Orçamento e Controle",
    definition: "Despesas cujo valor muda de um mês para o outro de acordo com o seu consumo, seus hábitos ou acontecimentos da rotina.",
    practicalExample: "Supermercado, feira, conta de energia elétrica, combustível, lazer e farmácia."
  },
  {
    id: "glos-6",
    term: "Economia (ou Poupança Mensal)",
    category: "Conceitos Básicos",
    definition: "A sobra positiva resultante da diferença entre a sua Renda Líquida e os seus Gastos totais dentro de um mês. É o dinheiro que você preserva para o futuro.",
    practicalExample: "Se você recebeu R$ 2.500,00 líquidos e gastou R$ 2.200,00 no mês, você gerou uma economia mensal de R$ 300,00."
  },
  {
    id: "glos-7",
    term: "Patrimônio Líquido",
    category: "Conceitos Básicos",
    definition: "O conjunto de todos os bens e valores que você construiu e acumulou ao longo da vida (dinheiro guardado, casa, veículo, equipamentos), subtraindo todas as suas dívidas.",
    practicalExample: "Se você tem uma moto quitada de R$ 12.000,00, R$ 3.000,00 na reserva e zero dívidas, seu patrimônio líquido atual é de R$ 15.000,00."
  },
  {
    id: "glos-8",
    term: "Orçamento Financeiro",
    category: "Orçamento e Controle",
    definition: "Ferramenta de planejamento preventivo na qual você decide, antes de o mês começar, quanto dinheiro será destinado para cada categoria de despesa e para suas metas.",
    practicalExample: "Definir no dia 1º que você gastará no máximo R$ 800,00 com mercado e R$ 300,00 com lazer naquele mês."
  },
  {
    id: "glos-9",
    term: "Gastos Invisíveis (ou Pequenos Vazamentos)",
    category: "Orçamento e Controle",
    definition: "Pequenas despesas cotidianas ou cobranças automáticas de baixo valor unitário que passam despercebidas, mas que somadas ao final do mês consomem parte relevante da renda.",
    practicalExample: "Assinaturas de aplicativos que você não usa, taxas bancárias mensais e pequenos lanches por impulso todos os dias."
  },
  {
    id: "glos-10",
    term: "Despesas Sazonais",
    category: "Orçamento e Controle",
    definition: "Gastos previsíveis que não acontecem todo mês, mas ocorrem em épocas específicas do ano e exigem preparação antecipada.",
    practicalExample: "IPTU, IPVA, matrícula e material escolar em janeiro, seguro anual e presentes de fim de ano."
  },
  {
    id: "glos-11",
    term: "Reserva de Emergência (ou Reserva para Imprevistos)",
    category: "Planejamento e Proteção",
    definition: "Quantia em dinheiro guardada exclusivamente para cobrir urgências reais e inesperadas (saúde, consertos essenciais ou perda de renda), oferecendo segurança sem precisar fazer dívidas.",
    practicalExample: "Ter entre 3 e 6 meses do seu custo essencial guardados em local seguro e de resgate imediato."
  },
  {
    id: "glos-12",
    term: "Liquidez",
    category: "Planejamento e Proteção",
    definition: "A facilidade e a velocidade com que um valor guardado ou bem pode ser transformado em dinheiro disponível na sua mão sem perda de valor.",
    practicalExample: "O dinheiro na reserva tem alta liquidez (você saca no mesmo dia); já um imóvel tem baixa liquidez (pode levar meses para ser vendido)."
  },
  {
    id: "glos-13",
    term: "Metas Financeiras",
    category: "Planejamento e Proteção",
    definition: "Objetivos claros que possuem destino específico, valor em reais calculado e prazo definido (curto, médio ou longo prazo) para serem alcançados.",
    practicalExample: "Juntar R$ 1.800,00 em 9 meses (guardando R$ 200,00 por mês) para comprar uma geladeira nova à vista."
  },
  {
    id: "glos-14",
    term: "Juros",
    category: "Crédito e Dívidas",
    definition: "O custo cobrado pelo uso de dinheiro emprestado ao longo do tempo. Quem pega empréstimo ou atrasa contas paga juros; quem guarda dinheiro em aplicações seguras recebe juros.",
    practicalExample: "Se você pega R$ 1.000,00 emprestados e devolve R$ 1.250,00, os R$ 250,00 adicionais são os juros pagos."
  },
  {
    id: "glos-15",
    term: "Juros Compostos",
    category: "Crédito e Dívidas",
    definition: "Popularmente chamados de 'juros sobre juros'. Ocorrem quando a taxa de juros de cada novo mês é calculada sobre o valor original somado aos juros que já se acumularam nos meses anteriores.",
    practicalExample: "Nas dívidas de cartão de crédito, os juros compostos fazem uma conta não paga crescer rapidamente como uma bola de neve."
  },
  {
    id: "glos-16",
    term: "Fatura do Cartão de Crédito",
    category: "Crédito e Dívidas",
    definition: "Documento mensal emitido pelo banco que reúne todas as compras à vista e parcelas feitas no cartão durante o ciclo, informando a data de fechamento e a data de vencimento.",
    practicalExample: "A fatura fecha no dia 3 e vence no dia 10, somando R$ 650,00 referentes às compras daquele período."
  },
  {
    id: "glos-17",
    term: "Limite de Crédito",
    category: "Crédito e Dívidas",
    definition: "O valor máximo que o banco disponibiliza para empréstimo temporário no seu cartão de crédito ou conta. Não faz parte do seu salário nem do seu patrimônio.",
    practicalExample: "Mesmo tendo R$ 4.000,00 de limite no cartão, você só deve gastar o valor que consegue pagar integralmente com o seu salário do mês."
  },
  {
    id: "glos-18",
    term: "Crédito Rotativo",
    category: "Crédito e Dívidas",
    definition: "Modalidade de empréstimo automático acionada quando o consumidor não paga o valor total da fatura do cartão até o vencimento (por exemplo, pagando apenas o valor mínimo). Possui juros altíssimos.",
    practicalExample: "Se a fatura era de R$ 800,00 e você pagou apenas R$ 200,00, os R$ 600,00 restantes entram no crédito rotativo com cobrança pesada de juros e impostos."
  },
  {
    id: "glos-19",
    term: "Cheque Especial",
    category: "Crédito e Dívidas",
    definition: "Limite de crédito pré-aprovado vinculado diretamente à conta corrente bancária. Quando o saldo da conta chega a zero e você continua fazendo pagamentos, entra automaticamente nesse empréstimo caro.",
    practicalExample: "Ver 'Saldo: R$ 100,00 + Limite: R$ 1.000,00' no aplicativo do banco e gastar R$ 300,00 significa pegar R$ 200,00 emprestados no cheque especial."
  },
  {
    id: "glos-20",
    term: "Custo Efetivo Total (CET)",
    category: "Crédito e Dívidas",
    definition: "A taxa percentual que mostra o custo verdadeiro e completo de um empréstimo ou financiamento, somando os juros, tarifas bancárias, seguros obrigatórios e impostos.",
    practicalExample: "Um empréstimo pode anunciar juros de 3% ao mês, mas com seguros e taxas embutidas o CET real pode ser de 4,5% ao mês."
  },
  {
    id: "glos-21",
    term: "Inadimplência",
    category: "Crédito e Dívidas",
    definition: "O descumprimento de uma obrigação financeira até a data de vencimento combinada. A inadimplência gera multa, juros por dia de atraso e pode levar à negativação do CPF nos órgãos de proteção ao crédito.",
    practicalExample: "Deixar uma conta de luz ou parcela de carnê em aberto semanas após o vencimento."
  },
  {
    id: "glos-22",
    term: "Inflação",
    category: "Conceitos Básicos",
    definition: "O aumento generalizado e contínuo dos preços de produtos e serviços ao longo do tempo, que faz com que o dinheiro perca poder de compra se não for bem administrado.",
    practicalExample: "Quando uma cesta de supermercado que custava R$ 400,00 no ano passado passa a custar R$ 430,00 neste ano."
  },
  {
    id: "glos-23",
    term: "Fluxo de Caixa Pessoal",
    category: "Orçamento e Controle",
    definition: "O movimento completo de entradas (receitas) e saídas (despesas) de dinheiro da sua vida financeira ao longo de um período determinado.",
    practicalExample: "Acompanhar em quais dias do mês o dinheiro entra e em quais dias os boletos vencem para nunca ficar com saldo negativo."
  },
  {
    id: "glos-24",
    term: "Pagar-se Primeiro",
    category: "Planejamento e Proteção",
    definition: "Princípio prático de educação financeira que consiste em separar a quantia destinada à sua reserva e às suas metas no exato momento em que recebe sua renda, antes de começar a gastar.",
    practicalExample: "Receber o salário no dia 5 e transferir imediatamente R$ 200,00 para a conta da Reserva para Imprevistos."
  }
];
