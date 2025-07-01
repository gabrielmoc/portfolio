
export interface Experience {
  company: string;
  position: string;
  period: string;
}

export interface Tech {
  name: string;
  icon: string;
}

export const frontEndTechs: Tech[] = [
  { name: "HTML", icon: "html" },
  { name: "CSS", icon: "css" },
  { name: "JavaScript", icon: "javascript" },
  { name: "TypeScript", icon: "typescript" },
  { name: "React.js", icon: "react" },
  { name: "Angular", icon: "angular" },
  { name: "Next.js", icon: "next.js" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Styled Components", icon: "styled-components" }
];

export const backEndTechs: Tech[] = [
  { name: "Node.js", icon: "node.js" },
  { name: "Express", icon: "express" },
  { name: "NestJS", icon: "nestjs" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "MySQL", icon: "mysql" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "JWT", icon: "jwt" },
  { name: "bcrypt", icon: "bcrypt" },
  { name: "APIs RESTful", icon: "api" }
];

export const toolsTechs: Tech[] = [
  { name: "Git & GitHub", icon: "git" },
  { name: "Docker", icon: "docker" },
  { name: "Postman", icon: "postman" },
  { name: "Figma", icon: "figma" },
  { name: "Notion", icon: "notion" },
  { name: "AWS (S3, EC2)", icon: "aws" },
  { name: "Google Cloud", icon: "googlecloud" },
  { name: "WordPress", icon: "wordpress" }
];

export const experiences: Experience[] = [
  {
    company: "Rbianco",
    position: "Desenvolvedor Front-End Jr",
    period: "05/2025 - Presente"
  },
  {
    company: "Desenvolvedor Freelancer",
    position: "Criação de Sites e Aplicações Personalizadas",
    period: "2022 - Presente"
  },
  {
    company: "GepMed (Estágio)",
    position: "Desenvolvedor Full Stack e Gestor de Dados",
    period: "11/2023 - 05/2025"
  },
  {
    company: "Agilité Assessoria Contábil (Estágio)",
    position: "Analista de Dados",
    period: "05/2024 - Presente"
  }
];

export const courses: string[] = [
  "Lógica de Programação e Algoritmos - UDEMY",
  "HTML e CSS - ALURA", 
  "Javascript do básico ao avançado - UDEMY",
  "GO (GoLang) - Do zero ao avançado - UDEMY",
  "Curso de Angular (v15+) Typescript - UDEMY",
  "API RESTfull com Spring Boot - UDEMY",
  "SQL para Análise de Dados - UDEMY",
  "Git e Github - ALURA",
  "Curso Completo de Power BI - HASHTAG",
  "Monitoria Java e Python - MONITORIA NEXT"
];

export const projects: string[] = [
  "Sistema de Cadastro de Eventos e Usuários",
  "Sistema de Intermediação na Vendas de Bebidas", 
  "Loja Virtual com Integração de Banco de Dados",
  "Aplicação Web de Gestão de Passagens Aéreas"
];
