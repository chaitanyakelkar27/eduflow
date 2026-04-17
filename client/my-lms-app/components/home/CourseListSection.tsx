import { CourseCard, type CourseCardProps } from "@/components/home/CourseCard";

type FilterGroup = {
    title: string;
    items: string[];
};

type CourseListSectionProps = {
    eyebrow: string;
    title: string;
    courses: CourseCardProps[];
    filterGroups: FilterGroup[];
    applyButtonLabel: string;
};

export function CourseListSection({
    eyebrow,
    title,
    courses,
    filterGroups,
    applyButtonLabel,
}: CourseListSectionProps) {
    return (
        <section className="py-10">
            <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
                <aside className="h-fit rounded-3xl border border-border bg-card p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-foreground">Filters</h3>

                    <div className="mt-5 space-y-5 text-sm">
                        {filterGroups.map((group) => (
                            <FilterGroupSection
                                key={group.title}
                                title={group.title}
                                items={group.items}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        className="mt-6 h-10 w-full rounded-full bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                        {applyButtonLabel}
                    </button>
                </aside>

                <div>
                    <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
                        <div>
                            <p className="text-sm font-medium uppercase tracking-[0.12em] text-muted-foreground">
                                {eyebrow}
                            </p>
                            <h3 className="mt-1 text-2xl font-semibold text-foreground">
                                {title}
                            </h3>
                        </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                        {courses.map((course) => (
                            <CourseCard key={course.title} {...course} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function FilterGroupSection({ title, items }: { title: string; items: string[] }) {
    return (
        <section>
            <h4 className="mb-2 font-medium text-foreground">{title}</h4>
            <div className="space-y-2">
                {items.map((item, index) => (
                    <label
                        key={item}
                        className="flex items-center gap-2 rounded-xl px-2 py-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                        <input
                            type="checkbox"
                            defaultChecked={index === 0}
                            className="h-4 w-4 rounded border-border text-primary focus:ring-primary"
                        />
                        <span>{item}</span>
                    </label>
                ))}
            </div>
        </section>
    );
}
