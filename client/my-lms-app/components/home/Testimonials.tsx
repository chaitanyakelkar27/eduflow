type Testimonial = {
    quote: string;
    name: string;
    role: string;
};

type TestimonialsProps = {
    eyebrow: string;
    title: string;
    featured: Testimonial;
    others: Testimonial[];
};

export function Testimonials({ eyebrow, title, featured, others }: TestimonialsProps) {

    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    {eyebrow}
                </p>

                <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground leading-tight max-w-2xl">
                    {title}
                </h2>

                <div className="mt-10 grid gap-6 lg:grid-cols-3 items-stretch">

                    {/* Featured Card */}
                    <article className="lg:col-span-2 flex flex-col justify-between rounded-[2rem] bg-primary p-10 text-primary-foreground shadow-[0_25px_70px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_30px_80px_rgba(0,0,0,0.2)]">

                        <p className="text-xl md:text-2xl leading-relaxed tracking-tight font-medium">
                            “{featured.quote}”
                        </p>

                        <div className="mt-10">
                            <p className="text-sm font-semibold">
                                {featured.name}
                            </p>
                            <p className="text-xs opacity-80">
                                {featured.role}
                            </p>
                        </div>

                    </article>

                    {/* Side Cards */}
                    <div className="flex flex-col gap-6">
                        {others.slice(0, 2).map((item) => (
                            <article
                                key={item.name}
                                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <p className="text-sm leading-relaxed text-foreground">
                                    “{item.quote}”
                                </p>

                                <div className="mt-4">
                                    <p className="text-sm font-medium text-foreground">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">
                                        {item.role}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}