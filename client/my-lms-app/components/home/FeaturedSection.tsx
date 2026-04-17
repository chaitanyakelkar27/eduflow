import { CourseCard, type CourseCardProps } from "@/components/home/CourseCard";

type FeaturedSectionProps = {
    eyebrow: string;
    title: string;
    courses: CourseCardProps[];
};

export function FeaturedSection({ eyebrow, title, courses }: FeaturedSectionProps) {
    return (
        <section className="py-10">
            <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                    <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
                        {eyebrow}
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold text-foreground md:text-4xl">
                        {title}
                    </h2>
                </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {courses.map((course) => (
                    <CourseCard key={course.title} {...course} />
                ))}
            </div>
        </section>
    );
}
