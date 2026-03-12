export const Roadmap = () => {
    return (
        <>
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted mb-5 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-border">Orden de estudio recomendado</div>

            <div className="flex flex-col gap-3 mb-12">
                <div className="flex items-center gap-4 py-4 px-6 bg-surface border border-border rounded-xl relative" style={{'--card-color': '#7c6af7'} as React.CSSProperties}>
                    <div className="font-syne text-[1.4rem] font-extrabold text-[var(--card-color)] w-9 shrink-0 opacity-40">01</div>
                    <div className="flex-1">
                        <div className="font-syne font-bold text-base mb-1">React Hooks</div>
                        <div className="text-[0.82rem] text-muted">Todo lo demás depende de esto. Empieza aquí sin excepción.</div>
                    </div>
                    <div className="font-mono text-[10px] text-muted text-right shrink-0">Sem 1-2</div>
                </div>
                <div className="flex items-center gap-4 py-4 px-6 bg-surface border border-border rounded-xl relative" style={{'--card-color': '#f76a8a'} as React.CSSProperties}>
                    <div className="font-syne text-[1.4rem] font-extrabold text-[var(--card-color)] w-9 shrink-0 opacity-40">02</div>
                    <div className="flex-1">
                        <div className="font-syne font-bold text-base mb-1">TanStack Query</div>
                        <div className="text-[0.82rem] text-muted">Una vez que controlas Hooks, manejar server state es el siguiente nivel.</div>
                    </div>
                    <div className="font-mono text-[10px] text-muted text-right shrink-0">Sem 3-4</div>
                </div>
                <div className="flex items-center gap-4 py-4 px-6 bg-surface border border-border rounded-xl relative" style={{'--card-color': '#6af7c8'} as React.CSSProperties}>
                    <div className="font-syne text-[1.4rem] font-extrabold text-[var(--card-color)] w-9 shrink-0 opacity-40">03</div>
                    <div className="flex-1">
                        <div className="font-syne font-bold text-base mb-1">Zustand</div>
                        <div className="text-[0.82rem] text-muted">Cubre el client state que TanStack Query no maneja. Aprende juntos para saber cuándo usar cada uno.</div>
                    </div>
                    <div className="font-mono text-[10px] text-muted text-right shrink-0">Sem 4-5</div>
                </div>
                <div className="flex items-center gap-4 py-4 px-6 bg-surface border border-border rounded-xl relative" style={{'--card-color': '#f7c46a'} as React.CSSProperties}>
                    <div className="font-syne text-[1.4rem] font-extrabold text-[var(--card-color)] w-9 shrink-0 opacity-40">04</div>
                    <div className="flex-1">
                        <div className="font-syne font-bold text-base mb-1">Design System + Skeleton</div>
                        <div className="text-[0.82rem] text-muted">Aprende a construir componentes reutilizables con buena UX desde el inicio.</div>
                    </div>
                    <div className="font-mono text-[10px] text-muted text-right shrink-0">Sem 5-8</div>
                </div>
                <div className="flex items-center gap-4 py-4 px-6 bg-surface border border-border rounded-xl relative" style={{'--card-color': '#f7946a'} as React.CSSProperties}>
                    <div className="font-syne text-[1.4rem] font-extrabold text-[var(--card-color)] w-9 shrink-0 opacity-40">05</div>
                    <div className="flex-1">
                        <div className="font-syne font-bold text-base mb-1">Storybook</div>
                        <div className="text-[0.82rem] text-muted">Documenta el Design System que construiste. Práctica real inmediata.</div>
                    </div>
                    <div className="font-mono text-[10px] text-muted text-right shrink-0">Sem 7-8</div>
                </div>
                <div className="flex items-center gap-4 py-4 px-6 bg-surface border border-border rounded-xl relative" style={{'--card-color': '#6af7f7'} as React.CSSProperties}>
                    <div className="font-syne text-[1.4rem] font-extrabold text-[var(--card-color)] w-9 shrink-0 opacity-40">06</div>
                    <div className="flex-1">
                        <div className="font-syne font-bold text-base mb-1">Vibe Coding</div>
                        <div className="text-[0.82rem] text-muted">Con bases sólidas, la IA amplifica tu velocidad. Sin bases, te hace dependiente.</div>
                    </div>
                    <div className="font-mono text-[10px] text-muted text-right shrink-0">Sem 9-10</div>
                </div>
                <div className="flex items-center gap-4 py-4 px-6 bg-surface border border-border rounded-xl relative" style={{'--card-color': '#f76af7'} as React.CSSProperties}>
                    <div className="font-syne text-[1.4rem] font-extrabold text-[var(--card-color)] w-9 shrink-0 opacity-40">07</div>
                    <div className="flex-1">
                        <div className="font-syne font-bold text-base mb-1">Spec Driven Development</div>
                        <div className="text-[0.82rem] text-muted">Metodología que mejora tu proceso de desarrollo profesional completo.</div>
                    </div>
                    <div className="font-mono text-[10px] text-muted text-right shrink-0">Sem 10-12</div>
                </div>
                <div className="flex items-center gap-4 py-4 px-6 bg-surface border border-border rounded-xl relative" style={{'--card-color': '#6ab4f7'} as React.CSSProperties}>
                    <div className="font-syne text-[1.4rem] font-extrabold text-[var(--card-color)] w-9 shrink-0 opacity-40">08</div>
                    <div className="flex-1">
                        <div className="font-syne font-bold text-base mb-1">CMS Headless</div>
                        <div className="text-[0.82rem] text-muted">Integra todo con un proyecto real. Blog o portfolio con Next.js + Sanity.</div>
                    </div>
                    <div className="font-mono text-[10px] text-muted text-right shrink-0">Sem 13-16</div>
                </div>
            </div>
        </>
    )
}
