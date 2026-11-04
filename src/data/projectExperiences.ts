export type DemoKind = 'request' | 'inventory' | 'commerce' | 'content';
export const projectDemos: Record<string, DemoKind> = {
  relato: 'inventory', siga: 'request', avivia: 'content', nobile: 'commerce',
  jkaibrindes: 'commerce', migusmar: 'inventory', portalbrasil: 'content', cherry: 'commerce',
  ceno: 'content', marchef: 'content', lucasmiranda: 'content', ceustudio: 'content',
};

export interface ArchitectureNode {
  label: string;
  technology: string;
  description: string;
  concept: string;
}
const reactNode: ArchitectureNode = {
  label: 'Interface', technology: 'React',
  description: 'A interface organiza as telas e responde às ações do visitante.',
  concept: 'Componentes e estado permitem atualizar a tela sem recarregar a página.',
};
const databaseNode: ArchitectureNode = {
  label: 'Dados', technology: 'PostgreSQL',
  description: 'O banco relacional representa a camada de armazenamento da aplicação.',
  concept: 'Relacionamentos e restrições ajudam a manter os registros consistentes.',
};
export const projectArchitecture: Record<string, ArchitectureNode[]> = {
  relato: [reactNode, {
    label: 'Aplicação', technology: 'Node',
    description: 'A camada de aplicação dá suporte às funcionalidades de conteúdo e gestão descritas neste projeto.',
    concept: 'Separar interface e regras de negócio permite evoluir cada parte com responsabilidades claras.',
  }, {
    label: 'Tradução', technology: 'GTranslate',
    description: 'GTranslate é a ferramenta de tradução listada na stack deste projeto.',
    concept: 'A tradução amplia o acesso ao conteúdo para visitantes de outros idiomas.',
  }],
  siga: [reactNode, {
    label: 'Regras de negócio', technology: 'Django',
    description: 'O back-end representa a camada que processa solicitações e valida as regras do sistema.',
    concept: 'Uma validação na interface melhora a experiência, mas o servidor também precisa validar os dados.',
  }, databaseNode],
  avivia: [reactNode, {
    label: 'Acesso e aplicação', technology: 'Node.js · JWT',
    description: 'Node.js e JWT estão na stack do projeto, que inclui login e uma área de acesso restrito.',
    concept: 'Autenticação identifica o usuário; autorização define quais ações ele pode executar.',
  }, databaseNode],
};

export const commerceProducts: Record<string, { name: string; priceCents: number; stock: number }> = {
  nobile: { name: 'Relógio de demonstração', priceCents: 250000, stock: 2 },
  jkaibrindes: { name: 'Kit de brindes de demonstração', priceCents: 4500, stock: 10 },
  cherry: { name: 'Vaso decorativo de demonstração', priceCents: 12000, stock: 5 },
};
