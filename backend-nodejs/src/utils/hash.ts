import bcrypt from 'bcrypt';

const saltRounds = 10;

export const generateHash = (password: string): string => {
    return bcrypt.hashSync(password, saltRounds);
};

export const verifyPassword = (password: string, hashedPassword: string): boolean => {
    return bcrypt.compareSync(password, hashedPassword);
};
