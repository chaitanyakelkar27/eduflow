export interface RegisterDTO {
    email: string;
    password: string;
    name: string;
    role?: 'STUDENT' | 'INSTRUCTOR';
}

export interface LoginDTO {
    email: string;
    password: string;
}

export interface AuthResponse {
    user: {
        id: string;
        email: string;
        name: string;
        role: string;
        avatar?: string;
    };
    token: string;
}

export interface JWTPayload {
    userId: string;
    email: string;
    role: string;
}