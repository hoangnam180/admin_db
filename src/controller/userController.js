const User = require('../model/User');

class UserController {
    createUser = async (req, res) => {
        try {
            const { username, password, email, role } = req.body;
            const user = await User.create({
                username: username,
                password: password,
                email: email,
                role: role,
            });
            if (user) {
                return res.status(200).json({ data: user, message: 'Create user successfully' });
            } else {
                return res.status(400).json({ message: 'Internal server error' });
            }
        } catch (err) {
            console.log(err);
            return res.status(404).json({ message: 'Internal server error' });
        }
    };
    getUserPagination = async (req, res) => {
        console.log(req.query);
        try {
            const { page, limit } = req.query;
            // get user but not get pass word 
            const users = await User.find()
                .skip((parseInt(page) - 1) * parseInt(limit))
                .limit(parseInt(limit))
                .select('-password');
            const count = await User.countDocuments();
            if (users) {
                return res.status(200).json({ data: users, count: count, message: 'Get users successfully' });
            } else {
                return res.status(400).json({ message: 'Internal server error' });
            }
        } catch (err) {
            console.log(err);
            return res.status(404).json({ message: 'Internal server error' });
        }
    }
}

module.exports = new UserController();
