import Image from "next/image";
import { Star, Users } from "lucide-react";

export type CourseCardProps = {
    title: string;
    image: string;
    rating: number;
    students: number;
    price: string;
};

export function CourseCard({
    title,
    image,
    rating,
    students,
    price,
}: CourseCardProps) {
    return (
        <article className="rounded-3xl border border-border bg-card p-3 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
            <Image
                src={image}
                alt={title}
                width={900}
                height={540}
                className="h-44 w-full rounded-2xl object-cover"
            />

            <div className="p-2">
                <h3 className="mt-3 text-base font-semibold text-foreground">{title}</h3>

                <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                    <p className="inline-flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        {rating.toFixed(1)}
                    </p>
                    <p className="inline-flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {students.toLocaleString()}
                    </p>
                </div>

                <p className="mt-3 text-lg font-semibold text-foreground">{price}</p>
            </div>
        </article>
    );
}