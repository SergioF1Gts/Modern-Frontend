import React, { useState } from 'react';

interface CardProps {
    id: string;
    weeks: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    tags: string[];
    resources: { type: string, text: string }[];
    difficulty: number;
    isDone: boolean;
    onToggleDone: (id: string, newStatus: boolean) => void;
}

export const Card = ({ id, weeks, title, description, icon, color, tags, resources, difficulty, isDone, onToggleDone }: CardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const handleDoneClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        onToggleDone(id, !isDone);
    };

    return (
        <div 
            onClick={toggleOpen}
            className={`bg-surface border border-border rounded-2xl p-7 cursor-pointer transition-all duration-300 relative overflow-hidden group 
                hover:-translate-y-[3px] hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]
                before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-[var(--card-color)] before:opacity-0 before:transition-opacity before:duration-300 
                hover:before:opacity-1 hover:border-[var(--card-color)]
                ${isDone ? 'opacity-60 border-accent3 before:opacity-1 before:bg-accent3' : ''}`}
            style={{'--card-color': color} as React.CSSProperties}
        >
            <div className="flex justify-between items-start mb-3.5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                     style={{
                        background: `color-mix(in srgb, var(--card-color) 15%, transparent)`,
                        border: `1px solid color-mix(in srgb, var(--card-color) 30%, transparent)`
                     }}>
                    {icon}
                </div>
                <span className="font-mono text-[10px] py-1 px-2.5 rounded-full border border-border text-muted bg-surface/50">
                    {weeks}
                </span>
            </div>

            <div className="font-syne text-[1.25rem] font-bold mb-2 text-text">{title}</div>
            <div className="text-[0.88rem] text-muted leading-[1.6] mb-4.5">{description}</div>

            <div className="flex flex-wrap gap-1.5 mb-4.5">
                {tags.map((tag, idx) => (
                    <span key={idx} className="font-mono text-[10px] py-0.5 px-2 rounded-md bg-surface2 text-[var(--card-color)] border border-[color-mix(in_srgb,var(--card-color)_25%,transparent)]">
                        {tag}
                    </span>
                ))}
            </div>

            <div className={`border-t border-border pt-3.5 ${isOpen ? 'block' : 'hidden'}`}>
                <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted mb-2.5">// Conceptos clave / Recursos</div>
                {resources.map((res, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 py-2 px-2.5 rounded-lg bg-surface2 mb-1.5 text-text text-[0.83rem] transition-colors border border-transparent hover:border-[var(--card-color)] hover:bg-[color-mix(in_srgb,var(--card-color)_8%,var(--surface2))]">
                        <span className="font-mono text-[9px] py-0.5 px-1.5 rounded bg-[color-mix(in_srgb,var(--card-color)_20%,transparent)] text-[var(--card-color)] shrink-0">
                            {res.type}
                        </span>
                        {res.text}
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center mt-3.5">
                <div className="flex gap-1">
                    {[1, 2, 3, 4].map(dot => (
                        <div key={dot} className={`w-[7px] h-[7px] rounded-full ${dot <= difficulty ? 'bg-[var(--card-color)]' : 'bg-border'}`} />
                    ))}
                </div>
                
                <span className="font-mono text-[12px] text-muted ml-auto pl-2.5">
                    {isOpen ? '▲ cerrar' : '▼ ver más'}
                </span>
                
                <button 
                    onClick={handleDoneClick}
                    className={`ml-2 font-mono text-[10px] py-1 px-3.5 rounded-full border border-[var(--card-color)] bg-transparent text-[var(--card-color)] cursor-pointer transition-all duration-200 hover:bg-[var(--card-color)] hover:text-bg
                     ${isDone ? '!bg-accent3 !border-accent3 !text-bg' : ''}`}
                >
                    {isDone ? '✓ Completado' : 'Marcar listo ✓'}
                </button>
            </div>
        </div>
    );
};
