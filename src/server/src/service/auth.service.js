const { userIds } = require("../config/userIds")

function userIDValidation(req, res) {
    userIds.includes(req.params.userId) ?
        res.status(200).json({ message: 'User logged in' }) : res.status(401).json({ message: 'UserId not valid' })
}

module.exports = { userIDValidation }
