import type { Course } from '../types';

export const courses: Course[] = [
  {
    id: 'iot-101', slug: 'iot', title: 'IoT desde cero', description: 'Fundamentos de sensores, conectividad y edge computing.', level: 'intro', duration: '6 semanas',
    modules: ['Introducción al IoT', 'Sensores y actuadores', 'Redes y protocolos', 'Proyecto final'], tags: ['IoT', 'Hardware'], instructor: 'Laura Méndez', rating: 4.8, students: 1240,
    path: 'iot', lessons: [
      { id: 'l1', title: '¿Qué es IoT?', duration: '12 min' }, { id: 'l2', title: 'Tipos de sensores', duration: '18 min' }, { id: 'l3', title: 'MQTT en práctica', duration: '21 min' }, { id: 'l4', title: 'Proyecto guiado', duration: '27 min' }
    ]
  },
  {
    id: 'ia-101', slug: 'ia', title: 'IA aplicada', description: 'Modelos de IA para automatización y toma de decisiones.', level: 'intro', duration: '8 semanas',
    modules: ['ML básico', 'NLP y visión', 'MLOps inicial', 'Caso práctico'], tags: ['IA', 'Machine Learning'], instructor: 'Carlos Vega', rating: 4.9, students: 1780,
    path: 'ia', lessons: [
      { id: 'l1', title: 'Cómo aprende un modelo', duration: '16 min' }, { id: 'l2', title: 'Clasificación y regresión', duration: '24 min' }, { id: 'l3', title: 'Prompt engineering', duration: '19 min' }, { id: 'l4', title: 'Deploy básico', duration: '25 min' }
    ]
  },
  {
    id: 'datos-101', slug: 'datos', title: 'Analítica de datos', description: 'Análisis de datos orientado a productos inteligentes.', level: 'intro', duration: '5 semanas',
    modules: ['Data wrangling', 'KPIs', 'Dashboards', 'Storytelling'], tags: ['Datos', 'BI'], instructor: 'Marta Ruiz', rating: 4.7, students: 980,
    path: 'datos', lessons: [
      { id: 'l1', title: 'Limpieza de datos', duration: '15 min' }, { id: 'l2', title: 'Visualizaciones efectivas', duration: '20 min' }, { id: 'l3', title: 'Métricas clave', duration: '17 min' }, { id: 'l4', title: 'Caso de negocio', duration: '23 min' }
    ]
  },
  {
    id: 'master-iot', slug: 'master-iot', title: 'Máster IoT Industrial', description: 'Arquitecturas IoT industriales y despliegues escalables.', level: 'master', duration: '6 meses',
    modules: ['Arquitectura', 'Seguridad IoT', 'Plataformas cloud', 'Capstone'], tags: ['IoT', 'Industrial'], instructor: 'Sergio Pardo', rating: 4.9, students: 530,
    path: 'iot', lessons: [
      { id: 'l1', title: 'Arquitectura industrial', duration: '31 min' }, { id: 'l2', title: 'Hardening de dispositivos', duration: '28 min' }, { id: 'l3', title: 'Edge + Cloud', duration: '34 min' }, { id: 'l4', title: 'Capstone', duration: '40 min' }
    ]
  },
  {
    id: 'master-ia', slug: 'master-ia', title: 'Máster IA Empresarial', description: 'Implementación de IA en procesos empresariales y producto.', level: 'master', duration: '6 meses',
    modules: ['Estrategia IA', 'Modelos avanzados', 'Gobernanza', 'Capstone'], tags: ['IA', 'Empresa'], instructor: 'Ana Cifuentes', rating: 4.9, students: 610,
    path: 'ia', lessons: [
      { id: 'l1', title: 'Roadmap de IA', duration: '29 min' }, { id: 'l2', title: 'Fine-tuning y evaluación', duration: '36 min' }, { id: 'l3', title: 'Riesgo y compliance', duration: '26 min' }, { id: 'l4', title: 'Capstone', duration: '42 min' }
    ]
  }
];

export const learningPaths = [
  { id: 'iot', title: 'Ruta IoT Engineer', description: 'Desde fundamentos de hardware hasta arquitectura industrial.' },
  { id: 'ia', title: 'Ruta AI Engineer', description: 'Desde ML aplicado hasta despliegues en producto.' },
  { id: 'datos', title: 'Ruta Data Analyst', description: 'Domina métricas, visualización y storytelling.' }
] as const;

export const findCourseBySlug = (slug: string) => courses.find((course) => course.slug === slug);
