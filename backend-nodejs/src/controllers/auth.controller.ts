import { v4 as uuidv4 } from 'uuid';
import { users } from '../models/user.model';
import { generateHash, verifyPassword } from '../utils/hash';

export const register = (username: string, password: string, role: 'student' | 'teacher') => {
    const hashedPassword = generateHash(password);
    const newUser = { id: uuidv4(), username, password: hashedPassword, role };
    users[newUser.id] = newUser;
    return newUser;
};

export const login = (username: string, password: string) => {
    const user = Object.values(users).find(user => user.username === username);
    if (!user || !verifyPassword(password, user.password)) {
        throw new Error('Invalid credentials');
    }
    return user;
};
