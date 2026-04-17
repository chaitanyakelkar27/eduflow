import type { CourseCardProps } from "@/components/home/CourseCard";

export const homeContent = {
    navbar: {
        brand: { prefix: "Edu", highlight: "Flow", href: "/" },
        items: [
            { label: "Browse", href: "/", exact: true },
            { label: "My Learning", href: "/my-learning" },
            { label: "Studio", href: "/studio" },
        ],
        notificationCount: 1,
    },

    hero: {
        eyebrow: "Editorial Learning Platform",
        titlePrefix: "Master practical skills with",
        titleHighlight: "atelier-style learning paths",
        description:
            "Learn from expert-led lessons, interactive assignments, and guided milestones designed to build real confidence.",
        searchPlaceholder: "Search courses, skills, mentors",
        ctaLabel: "Browse Courses",
        imageSrc: "/hero-learning.svg",
        imageAlt: "Online course classroom",
        stats: [
            { label: "Students", value: "18k+" },
            { label: "Courses", value: "320" },
            { label: "Experts", value: "95" },
        ],
    },

    categories: [
        "All Categories",
        "Product Design",
        "Web Development",
        "Data Science",
        "AI Foundations",
        "Marketing",
        "Business",
    ],

    featuredSection: {
        eyebrow: "Curated Highlights",
        title: "Featured in the Atelier",
        courses: [
            {
                title: "Design Systems from First Principles",
                image: "/course-design.svg",
                rating: 4.9,
                students: 6420,
                price: "$89",
            },
            {
                title: "Modern React Architecture",
                image: "/course-react.svg",
                rating: 4.8,
                students: 8120,
                price: "$99",
            },
            {
                title: "Data Storytelling with Dashboards",
                image: "/course-data.svg",
                rating: 4.7,
                students: 4750,
                price: "$79",
            },
            {
                title: "AI Product Foundations",
                image: "/course-design.svg",
                rating: 4.8,
                students: 5380,
                price: "$94",
            },
            {
                title: "API Design for Production",
                image: "/course-react.svg",
                rating: 4.9,
                students: 7020,
                price: "$88",
            },
            {
                title: "Growth Experiments for Builders",
                image: "/course-data.svg",
                rating: 4.6,
                students: 3910,
                price: "$72",
            },
        ] as CourseCardProps[],
    },

    courseListSection: {
        eyebrow: "Browse Catalog",
        title: "Courses that fit your goals",
        applyButtonLabel: "Apply Filters",
        courses: [
            {
                title: "Backend Systems with Node and Prisma",
                image: "/course-react.svg",
                rating: 4.8,
                students: 6280,
                price: "$92",
            },
            {
                title: "No-Code Analytics for Teams",
                image: "/course-data.svg",
                rating: 4.6,
                students: 3340,
                price: "$67",
            },
            {
                title: "Product Thinking for Engineers",
                image: "/course-design.svg",
                rating: 4.7,
                students: 4590,
                price: "$84",
            },
            {
                title: "Motion Design for Interfaces",
                image: "/course-design.svg",
                rating: 4.8,
                students: 3720,
                price: "$76",
            },
        ] as CourseCardProps[],
        filterGroups: [
            { title: "Level", items: ["Beginner", "Intermediate", "Advanced"] },
            { title: "Language", items: ["English", "Spanish", "Hindi"] },
            { title: "Price", items: ["Free", "$1 - $50", "$51 - $100", "$100+"] },
        ],
    },

    testimonials: {
        eyebrow: "Learner Stories",
        title: "Built for learners who move with purpose",
        featured: {
            quote:
                "EduFlow helped me build a real portfolio, not just complete videos. The project-based format made every hour count.",
            name: "Karan Mehta",
            role: "Software Engineer",
        },
        others: [
            {
                quote:
                    "The structure is exceptional. Every course feels intentional and practical.",
                name: "Rhea Malhotra",
                role: "Product Designer",
            },
            {
                quote:
                    "I switched careers in six months because the labs mirrored real team workflows.",
                name: "Aarav Singh",
                role: "Frontend Engineer",
            },
            {
                quote:
                    "The mentor feedback loops are incredibly fast, clear, and actionable.",
                name: "Sara Thomas",
                role: "Data Analyst",
            },
        ],
    },

    footer: {
        brandPrefix: "Edu",
        brandHighlight: "Flow",
        description:
            "A premium learning experience where practical projects, mentors, and milestones come together to accelerate your growth.",
        footerLinks: [
            { label: "About", href: "#" },
            { label: "Courses", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Careers", href: "#" },
            { label: "Support", href: "#" },
        ],
        newsletterPlaceholder: "Enter your email",
        newsletterButtonLabel: "Join",
        legalText: `© ${new Date().getFullYear()} EduFlow. All rights reserved.`,
        legalLinks: [
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
        ],
    },
};
