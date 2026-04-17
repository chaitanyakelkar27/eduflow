export type CourseLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'ALL_LEVELS';

export interface CourseInstructor {
    id: string;
    name: string;
    avatar?: string;
}

export interface CourseCategory {
    id: string;
    name: string;
    slug: string;
}

export interface CourseDTO {
    id: string;
    title: string;
    slug: string;
    description: string;
    thumbnail?: string;
    price: number;
    discountPrice?: number;
    level: CourseLevel;
    language: string;
    requirements: string[];
    whatYouWillLearn: string[];
    isPublished: boolean;
    instructorId?: string;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
    instructor?: CourseInstructor;
    category?: CourseCategory;
}

export interface CreateCourseDTO {
    title: string;
    description: string;
    thumbnail?: string;
    price: number;
    discountPrice?: number;
    level?: CourseLevel;
    language?: string;
    requirements?: string[];
    whatYouWillLearn?: string[];
    categoryId: string;
}

export interface UpdateCourseDTO {
    title?: string;
    description?: string;
    thumbnail?: string;
    price?: number;
    discountPrice?: number;
    level?: CourseLevel;
    language?: string;
    requirements?: string[];
    whatYouWillLearn?: string[];
    categoryId?: string;
    isPublished?: boolean;
}

export interface CourseQueryDTO {
    search?: string;
    categoryId?: string;
    level?: CourseLevel;
    language?: string;
    minPrice?: number;
    maxPrice?: number;
    isPublished?: boolean;
    page?: number;
    limit?: number;
    sortBy?: 'createdAt' | 'price' | 'title';
    sortOrder?: 'asc' | 'desc';
}

export interface PaginatedCoursesResponse {
    data: CourseDTO[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
