import User from '../models/user';

export class UserController {
    store = async(req: any, res: any) => {
        const { name } = req.body;

        const user = await User.create({name});
        return res.json(user);
    }
};
