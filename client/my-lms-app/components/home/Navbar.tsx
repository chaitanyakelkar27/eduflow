"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Menu, UserRound, X } from "lucide-react";

type NavItem = {
    label: string;
    href: string;
    exact?: boolean;
};

type NavbarProps = {
    brand: {
        prefix: string;
        highlight: string;
        href: string;
    };
    items: NavItem[];
    notificationCount?: number;
};

export function Navbar({ brand, items, notificationCount = 0 }: NavbarProps) {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isItemActive = (item: NavItem) => {
        if (item.exact) {
            return pathname === item.href;
        }

        if (item.href === "/") {
            return pathname === "/";
        }

        return pathname.startsWith(item.href);
    };

    return (
        <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
            <div className="flex h-16 items-center justify-between">
                <Link href={brand.href} className="text-xl font-semibold tracking-tight text-foreground">
                    {brand.prefix}
                    <span className="text-primary">{brand.highlight}</span>
                </Link>

                <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
                    {items.map((item) => {
                        const isActive = isItemActive(item);

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={
                                    "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 " +
                                    (isActive
                                        ? "bg-primary/15 text-primary"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground")
                                }
                            >
                                {item.label}
                                {isActive && (
                                    <span className="absolute inset-x-2 -bottom-1 h-0.5 rounded-full bg-primary" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-foreground hover:shadow-sm"
                        aria-label="Notifications"
                    >
                        <Bell className="h-4 w-4" />
                        {notificationCount > 0 && (
                            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-primary" />
                        )}
                    </button>

                    <button
                        type="button"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/20 hover:shadow-sm"
                        aria-label="Profile"
                    >
                        <UserRound className="h-4 w-4" />
                    </button>

                    <button
                        type="button"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground md:hidden"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    >
                        {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <nav className="border-t border-border/60 py-3 md:hidden" aria-label="Mobile navigation">
                    <div className="flex flex-col gap-1">
                        {items.map((item) => {
                            const isActive = isItemActive(item);

                            return (
                                <Link
                                    key={`mobile-${item.href}`}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={
                                        "rounded-2xl px-4 py-2 text-sm font-medium transition-colors " +
                                        (isActive
                                            ? "bg-primary/15 text-primary"
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground")
                                    }
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            )}
        </header>
    );
}