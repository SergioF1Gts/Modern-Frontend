interface HeaderProps {
    totalTopics: number;
    doneCount: number;
    totalWeeks: number;
    progressPercent: number;
}

export const Header = ({ totalTopics, doneCount, totalWeeks, progressPercent }: HeaderProps) => {
    return (
        <header className="relative z-10 pt-[60px] pb-10 px-10 text-center border-b border-border max-sm:pt-10 max-sm:pb-[30px] max-sm:px-5">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent3 mb-4">// Hoja de ruta personalizada</div>
            <h1 className="font-syne text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.05] mb-4 text-transparent bg-clip-text bg-gradient-to-br from-[#e8e8f0] via-accent1 to-accent2">
                Frontend Moderno<br />2025
            </h1>
            <p className="text-[1.05rem] text-muted max-w-[500px] mx-auto leading-[1.6]">
                9 tecnologías clave para convertirte en un dev de alto nivel. Haz clic en cada card para explorar.
            </p>

            <div className="flex justify-center gap-5 pt-5 flex-wrap">
                <div className="text-center">
                    <span className="font-syne text-2xl font-extrabold block text-accent1">{totalTopics}</span>
                    <span className="font-mono text-[10px] text-muted uppercase tracking-[0.1em]">Temas</span>
                </div>
                <div className="text-center">
                    <span className="font-syne text-2xl font-extrabold block text-accent3">{doneCount}</span>
                    <span className="font-mono text-[10px] text-muted uppercase tracking-[0.1em]">Dominados</span>
                </div>
                <div className="text-center">
                    <span className="font-syne text-2xl font-extrabold block text-accent4">~{totalWeeks}</span>
                    <span className="font-mono text-[10px] text-muted uppercase tracking-[0.1em]">Semanas</span>
                </div>
            </div>

            <div className="mt-6 mx-auto max-w-[400px]">
                <div className="flex justify-between font-mono text-[11px] text-muted mb-2">
                    <span>Progreso</span>
                    <span>{progressPercent}%</span>
                </div>
                <div className="h-1 bg-border rounded-full overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-accent1 to-accent3 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
            </div>
        </header>
    );
};
