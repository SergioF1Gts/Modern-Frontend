import { useState } from 'react'
import { Header } from './components/Header'
import { Card } from './components/Card'
import { Roadmap } from './components/Roadmap'

const CARDS_DATA = [
  {
    id: 'react-hooks',
    category: 'Fundamentos React',
    weeks: 'Semana 1–2',
    title: 'React Hooks',
    description: 'La base de todo React moderno. Sin entender Hooks profundamente, el resto del stack no tiene sentido.',
    icon: '⚓',
    color: '#7c6af7',
    difficulty: 2,
    tags: ['useState', 'useEffect', 'useCallback', 'useMemo', 'useRef', 'Custom Hooks'],
    resources: [
      { type: 'TEORÍA', text: 'Closure en hooks y por qué importa' },
      { type: 'TEORÍA', text: 'Reglas de los Hooks (eslint-plugin-react-hooks)' },
      { type: 'PRÁCTICA', text: 'Crear un custom hook useLocalStorage' },
      { type: 'PRÁCTICA', text: 'Crear useFetch con manejo de estados' },
      { type: 'AVANZADO', text: 'useReducer para estado complejo' },
      { type: 'AVANZADO', text: 'useContext + useReducer como mini-Redux' },
      { type: 'DOCS', text: 'react.dev/reference/react (oficial)' },
      { type: 'VIDEO', text: '"React Hooks" – Jack Herrington en YouTube' },
      { type: 'LIBRO', text: '"Learning React" – O\'Reilly' }
    ]
  },
  {
    id: 'tanstack',
    category: 'Fundamentos React',
    weeks: 'Semana 3–4',
    title: 'TanStack Query',
    description: 'El estándar de facto para manejo de server state. Reemplaza useEffect+fetch de forma elegante y poderosa.',
    icon: '🔄',
    color: '#f76a8a',
    difficulty: 3,
    tags: ['useQuery', 'useMutation', 'Cache', 'Invalidation', 'Optimistic UI'],
    resources: [
      { type: 'TEORÍA', text: 'Server state vs Client state: la diferencia crucial' },
      { type: 'TEORÍA', text: 'staleTime, gcTime y cómo funciona la cache' },
      { type: 'PRÁCTICA', text: 'CRUD completo con useQuery + useMutation' },
      { type: 'PRÁCTICA', text: 'Infinite scroll con useInfiniteQuery' },
      { type: 'AVANZADO', text: 'Optimistic updates con rollback' },
      { type: 'AVANZADO', text: 'Prefetching y suspense mode' },
      { type: 'DOCS', text: 'tanstack.com/query/latest' },
      { type: 'VIDEO', text: 'TanStack Query v5 – Dominik Dorfmeister' },
      { type: 'BLOG', text: 'tkdodo.eu/blog (el blog del maintainer)' }
    ]
  },
  {
    id: 'zustand',
    category: 'Fundamentos React',
    weeks: 'Semana 4–5',
    title: 'Zustand',
    description: 'State management minimalista y sin boilerplate. La alternativa moderna a Redux para client state.',
    icon: '🐻',
    color: '#6af7c8',
    difficulty: 2,
    tags: ['Store', 'Slices', 'Persist', 'Immer', 'DevTools'],
    resources: [
      { type: 'TEORÍA', text: 'Cuándo usar Zustand vs TanStack Query' },
      { type: 'PRÁCTICA', text: 'Store con acciones y selectores optimizados' },
      { type: 'PRÁCTICA', text: 'Persist middleware para localStorage' },
      { type: 'AVANZADO', text: 'Patrón de slices para stores grandes' },
      { type: 'AVANZADO', text: 'Integración con Immer para inmutabilidad' },
      { type: 'DOCS', text: 'docs.pmnd.rs/zustand' },
      { type: 'VIDEO', text: '"Zustand Tutorial" – Lama Dev' },
      { type: 'BLOG', text: '"Working with Zustand" – TkDodo' }
    ]
  },
  {
    id: 'design-system',
    category: 'Diseño y Componentes',
    weeks: 'Semana 5–7',
    title: 'Design System',
    description: 'Aprende a construir y consumir sistemas de diseño. La diferencia entre un dev junior y senior.',
    icon: '🎨',
    color: '#f7c46a',
    difficulty: 3,
    tags: ['Tokens', 'Componentes', 'Figma', 'Accesibilidad', 'Temas'],
    resources: [
      { type: 'TEORÍA', text: 'Design Tokens: colores, tipografía, espaciado' },
      { type: 'TEORÍA', text: 'Atomic Design: átomos → moléculas → organismos' },
      { type: 'PRÁCTICA', text: 'Construir un sistema con CSS Variables' },
      { type: 'PRÁCTICA', text: 'Estudiar shadcn/ui como referencia' },
      { type: 'AVANZADO', text: 'Dark mode y theming dinámico' },
      { type: 'AVANZADO', text: 'Compound Components pattern' },
      { type: 'WEB', text: 'designsystems.com' },
      { type: 'CASO', text: 'Material Design, Radix UI, Chakra' },
      { type: 'HERRAMIENTA', text: 'shadcn/ui como base de referencia' }
    ]
  },
  {
    id: 'storybook',
    category: 'Diseño y Componentes',
    weeks: 'Semana 7–8',
    title: 'Storybook',
    description: 'El entorno estándar para desarrollar y documentar componentes de forma aislada. Imprescindible en equipos.',
    icon: '📖',
    color: '#f7946a',
    difficulty: 2,
    tags: ['Stories', 'Controls', 'Addons', 'CSF3', 'Testing'],
    resources: [
      { type: 'TEORÍA', text: 'Component Story Format (CSF3)' },
      { type: 'PRÁCTICA', text: 'Crear stories con args y controls' },
      { type: 'PRÁCTICA', text: 'Configurar addons: a11y, viewport, docs' },
      { type: 'AVANZADO', text: 'Visual testing con Chromatic' },
      { type: 'AVANZADO', text: 'Interaction testing dentro de Storybook' },
      { type: 'DOCS', text: 'storybook.js.org/docs' },
      { type: 'CURSO', text: '"Storybook for React" – LearnStorybook.com' }
    ]
  },
  {
    id: 'skeleton',
    category: 'Diseño y Componentes',
    weeks: 'Semana 8',
    title: 'Skeleton UI',
    description: 'Técnica de UX para mejorar la percepción de carga. Un detalle pequeño con impacto enorme en la experiencia.',
    icon: '👻',
    color: '#a06af7',
    difficulty: 1,
    tags: ['Loading States', 'UX', 'Animación', 'Suspense'],
    resources: [
      { type: 'TEORÍA', text: 'Skeleton vs Spinner: cuándo usar cada uno' },
      { type: 'PRÁCTICA', text: 'Construir skeleton con CSS shimmer animation' },
      { type: 'PRÁCTICA', text: 'Integrar con TanStack Query (isLoading)' },
      { type: 'AVANZADO', text: 'React Suspense + streaming SSR' },
      { type: 'LIB', text: 'react-loading-skeleton (npm)' },
      { type: 'ARTÍCULO', text: '"Everything you need to know about skeleton screens" – UX Planet' }
    ]
  },
  {
    id: 'vibe-coding',
    category: 'Metodologías y Arquitectura',
    weeks: 'Semana 9–10',
    title: 'Vibe Coding',
    description: 'Desarrollar software usando IA (Cursor, Claude, Copilot) de forma estratégica. El skill más hot de 2025.',
    icon: '🤖',
    color: '#6af7f7',
    difficulty: 2,
    tags: ['AI-assisted', 'Cursor IDE', 'Prompting', 'Code Review'],
    resources: [
      { type: 'TEORÍA', text: 'Cuándo usar IA y cuándo no confiar en ella' },
      { type: 'PRÁCTICA', text: 'Instalar y configurar Cursor IDE' },
      { type: 'PRÁCTICA', text: 'Prompt engineering para código: ser específico' },
      { type: 'AVANZADO', text: 'Usar .cursorrules para contexto persistente' },
      { type: 'AVANZADO', text: 'Revisar y entender todo el código generado' },
      { type: 'HERRAMIENTA', text: 'cursor.com' },
      { type: 'VIDEO', text: '"Vibe Coding" – Fireship en YouTube' },
      { type: 'BLOG', text: '"The Vibe Coding Manifesto" – Andrej Karpathy' }
    ]
  },
  {
    id: 'spec-driven',
    category: 'Metodologías y Arquitectura',
    weeks: 'Semana 10–12',
    title: 'Spec Driven Development',
    description: 'Escribir especificaciones antes de código. Metodología que reduce re-trabajo y mejora la comunicación con equipos.',
    icon: '📋',
    color: '#f76af7',
    difficulty: 3,
    tags: ['OpenAPI', 'PRD', 'Tests primero', 'Contratos'],
    resources: [
      { type: 'TEORÍA', text: 'API-first: diseñar contratos antes de implementar' },
      { type: 'TEORÍA', text: 'OpenAPI Specification 3.x' },
      { type: 'PRÁCTICA', text: 'Escribir un spec de una feature antes de codearla' },
      { type: 'PRÁCTICA', text: 'Generar tipos TypeScript desde OpenAPI' },
      { type: 'AVANZADO', text: 'Contract testing con Pact.js' },
      { type: 'HERRAMIENTA', text: 'swagger.io/specification' },
      { type: 'HERRAMIENTA', text: 'Stoplight.io para diseño visual' },
      { type: 'BLOG', text: '"Spec-Driven Development" – Nordic APIs' }
    ]
  },
  {
    id: 'cms-headless',
    category: 'Metodologías y Arquitectura',
    weeks: 'Semana 13–16',
    title: 'CMS Headless',
    description: 'Separar el backend de contenido del frontend. Arquitectura moderna para sitios escalables con Next.js u otros frameworks.',
    icon: '🗄️',
    color: '#6ab4f7',
    difficulty: 4,
    tags: ['Sanity', 'Contentful', 'Strapi', 'GraphQL', 'REST API'],
    resources: [
      { type: 'TEORÍA', text: 'Headless vs tradicional: pros y contras' },
      { type: 'TEORÍA', text: 'GROQ (Sanity) vs GraphQL (Contentful)' },
      { type: 'PRÁCTICA', text: 'Blog con Next.js + Sanity.io' },
      { type: 'PRÁCTICA', text: 'Webhooks para revalidación en tiempo real' },
      { type: 'AVANZADO', text: 'Preview mode y draft content' },
      { type: 'AVANZADO', text: 'ISR (Incremental Static Regeneration)' },
      { type: 'HERRAMIENTA', text: 'sanity.io (gratuito para empezar)' },
      { type: 'HERRAMIENTA', text: 'strapi.io (self-hosted, open source)' },
      { type: 'CURSO', text: '"Next.js + Sanity" – Kevin Powell' }
    ]
  }
];

function App() {
  const [completedCards, setCompletedCards] = useState<string[]>([]);

  const handleToggleDone = (id: string, newStatus: boolean) => {
    if (newStatus) {
      setCompletedCards([...completedCards, id]);
    } else {
      setCompletedCards(completedCards.filter(c => c !== id));
    }
  };

  const doneCount = completedCards.length;
  const totalCount = CARDS_DATA.length;
  const progressPercent = Math.round((doneCount / totalCount) * 100);

  // Agrupar por categorías
  const groupedCards = CARDS_DATA.reduce((acc, card) => {
    if (!acc[card.category]) acc[card.category] = [];
    acc[card.category].push(card);
    return acc;
  }, {} as Record<string, typeof CARDS_DATA>);

  return (
    <>
      <Header 
        totalTopics={totalCount} 
        doneCount={doneCount} 
        totalWeeks={16} 
        progressPercent={progressPercent} 
      />
      
      <main className="relative z-10 py-10 px-5 sm:px-10 max-w-[1200px] mx-auto">
        <div className="bg-[color-mix(in_srgb,var(--accent1)_8%,var(--surface))] border border-[color-mix(in_srgb,var(--accent1)_25%,transparent)] rounded-xl py-5 px-6 mb-8 text-[0.9rem] leading-[1.7] text-[#c0c0d8]">
          💡 <strong className="text-accent1">Cómo usar esta guía:</strong> Haz clic en cada card para ver recursos y conceptos clave. Marca como <strong className="text-accent1">"Listo"</strong> cuando domines el tema. La barra de progreso se actualiza automáticamente.
        </div>

        {Object.entries(groupedCards).map(([category, cards]) => (
          <div key={category}>
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted mb-5 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-border">
              {category}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5 mb-12">
              {cards.map(card => (
                <Card 
                  key={card.id}
                  {...card}
                  isDone={completedCards.includes(card.id)}
                  onToggleDone={handleToggleDone}
                />
              ))}
            </div>
          </div>
        ))}

        <Roadmap />
      </main>
    </>
  )
}

export default App
