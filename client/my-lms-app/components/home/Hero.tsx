import Image from "next/image";
import { Search } from "lucide-react";

type HeroStat = {
    label: string;
    value: string;
};

type HeroProps = {
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    searchPlaceholder: string;
    ctaLabel: string;
    imageSrc: string;
    imageAlt: string;
    stats: HeroStat[];
};

export function Hero({
    eyebrow,
    titlePrefix,
    titleHighlight,
    description,
    searchPlaceholder,
    ctaLabel,
    imageSrc,
    imageAlt,
    stats,
}: HeroProps) {
    return (
        <section className="grid items-center gap-10 py-10 md:grid-cols-[1.05fr_0.95fr] md:py-16">
            <div>
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {eyebrow}
                </p>

                <h1 className="mt-4 max-w-2xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
                    {titlePrefix}
                    <span className="text-primary"> {titleHighlight}</span>
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                    {description}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <div className="flex h-12 flex-1 items-center gap-3 rounded-full border border-border bg-card px-4 shadow-sm transition-all focus-within:border-primary/40 focus-within:ring-2 focus-within:ring-primary/10">
                        <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder={searchPlaceholder}
                            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                        />
                    </div>

                    <button
                        type="button"
                        className="h-12 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md"
                    >
                        {ctaLabel}
                    </button>
                </div>
            </div>

            <div className="relative">
                <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_24px_70px_rgba(0,0,0,0.10)]">
                    <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={900}
                        height={700}
                        className="h-auto w-full object-cover"
                        priority
                    />
                </div>

                <div className="absolute -bottom-6 left-4 rounded-3xl border border-border bg-background/95 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.10)] backdrop-blur-sm md:left-6">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                        Momentum Snapshot
                    </p>

                    <div className="mt-3 grid grid-cols-3 gap-5 text-center">
                        {stats.map((item) => (
                            <div key={item.label}>
                                <p className="text-2xl font-semibold text-foreground">{item.value}</p>
                                <p className="text-xs text-muted-foreground">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}