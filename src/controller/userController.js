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
                console.log(user.username);
                return res.status(200).json({ data: user, message: 'Create user successfully' });
            } else {
                return res.status(500).json({ message: 'Internal server error' });
            }
        } catch (err) {
            console.log(err);
            return res.status(500).json({ message: 'Internal server error' });
        }
    };
}

module.exports = new UserController();
