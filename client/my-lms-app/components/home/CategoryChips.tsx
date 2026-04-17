"use client";

import { useState } from "react";

type CategoryChipsProps = {
    categories: string[];
    initialActiveIndex?: number;
    onCategoryChange?: (category: string, index: number) => void;
};

export function CategoryChips({
    categories,
    initialActiveIndex = 0,
    onCategoryChange,
}: CategoryChipsProps) {
    const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

    return (
        <section className="pb-4">
            <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((item, index) => (
                    <button
                        key={item}
                        type="button"
                        onClick={() => {
                            setActiveIndex(index);
                            onCategoryChange?.(item, index);
                        }}
                        aria-pressed={activeIndex === index}
                        className={
                            "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors " +
                            (activeIndex === index
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground hover:text-foreground")
                        }
                    >
                        {item}
                    </button>
                ))}
            </div>
        </section>
    );
}
