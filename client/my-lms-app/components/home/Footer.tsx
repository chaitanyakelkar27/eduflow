type FooterLink = {
    label: string;
    href: string;
};

type FooterProps = {
    brandPrefix: string;
    brandHighlight: string;
    description: string;
    footerLinks: FooterLink[];
    newsletterPlaceholder: string;
    newsletterButtonLabel: string;
    legalText: string;
    legalLinks: FooterLink[];
};

export function Footer({
    brandPrefix,
    brandHighlight,
    description,
    footerLinks,
    newsletterPlaceholder,
    newsletterButtonLabel,
    legalText,
    legalLinks,
}: FooterProps) {
    return (
        <footer className="mt-20 border-t border-border/60 bg-background/60 py-12 backdrop-blur-sm">
            <div className="grid gap-10 md:grid-cols-2 md:items-start">

                {/* Left Section */}
                <div>
                    <p className="text-xl font-semibold tracking-tight text-foreground">
                        {brandPrefix}<span className="text-primary">{brandHighlight}</span>
                    </p>

                    <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                        {description}
                    </p>
                </div>

                {/* Right Section */}
                <div className="space-y-6 md:justify-self-end">

                    {/* Links */}
                    <nav className="flex flex-wrap gap-2">
                        {footerLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted hover:text-foreground"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Newsletter */}
                    <form className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <div className="flex h-11 flex-1 items-center rounded-full border border-border bg-card px-4 transition-all focus-within:ring-2 focus-within:ring-ring/40">
                            <input
                                type="email"
                                placeholder={newsletterPlaceholder}
                                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="h-11 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md"
                        >
                            {newsletterButtonLabel}
                        </button>
                    </form>

                </div>
            </div>

            {/* Bottom strip */}
            <div className="mt-10 flex flex-col gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                <p>{legalText}</p>
                <div className="flex gap-4">
                    {legalLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="transition-colors hover:text-foreground"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}