import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../../config/database';
import { RegisterDTO, LoginDTO, AuthResponse, JWTPayload } from './auth.types';

class AuthService {
    private readonly JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
    private readonly JWT_EXPIRES_IN = '7d';

    public async register(data: RegisterDTO): Promise<AuthResponse> {
        const { email, password, name, role = 'STUDENT' } = data;

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            throw new Error('User with this email already exists');
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                role,
            }
        });

        // Generate token
        const token = this.generateToken({
            userId: user.id,
            email: user.email,
            role: user.role,
        });

        return {
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
                avatar: user.avatar || undefined,
            },
            token,
        };
    }

    public async login(data: LoginDTO): Promise<AuthResponse> {
        const { email, password } = data;
        // Find user by email
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.password) {
            throw new Error('Invalid credentials');
        }
        if (user.isDeleted) {
            throw new Error('Account has been deleted');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            throw new Error('Invalid Credentials');
        }

        const token = this.generateToken({
            userId: user.id,
            email: user.email,
            role: user.role,
        });

        return {
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
                avatar: user.avatar || undefined,
            },
            token,
        };
    }

    public async verifyToken(token: string): Promise<JWTPayload> {
        try {
            const decoded = jwt.verify(token, this.JWT_SECRET) as JWTPayload;
            return decoded;
        } catch (error) {
            throw new Error('Invalid or expired token');
        }
    }

    public async getUserById(userId: string) {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                avatar: true,
                bio: true,
                isEmailVerified: true,
                createdAt: true,
                isDeleted: true,
            },
        });
        if (!user || user.isDeleted) {
            throw new Error('User not found');
        }
        return user;
    }

    private generateToken(payload: JWTPayload): string {
        return jwt.sign(payload, this.JWT_SECRET, {
            expiresIn: this.JWT_EXPIRES_IN,
        });
    }
}

export default new AuthService();