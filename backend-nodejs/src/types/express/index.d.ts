import { User } from '../../models/user.model'; // Adjust the path to your User model

declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}
