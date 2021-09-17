const users = require('./db.json');
let userId = 4;

module.exports = {
    getUser: (req, res) => {
        res.status(200).send(users);
    },
    deleteUser: (req, res) => {
        const {id} = req.params;
        let index = users.findIndex(u => u.id === +id)
        users.splice(index, 1);
        res.status(200).send(users);
    },
    createUser: (req, res) => {
        const {name} = req.body;
        let newUser = {
            id: userId, 
            name,
        }

            users.push(newUser);
            userId++;
            res.status(200).send(users);
    }

}
