const { all } = require("../app");
const { setJwt } = require("../lib/JWT");
const { createUser, deleteUser, upadateUser , getAllUsers} = require("../lib/userLib")

const createUserMiddleware = async function (req, res, next) {
    try {
        const userCreated =  await createUser(req.body);
        const cookie = setJwt(userCreated);
        res.cookie("myschool_jwt", cookie);
        res.status(200).json({
            message : "user created",
            data: userCreated
        })
    } catch (error) {
        res.status(500).json({
            error : error.message
        })
    }
}

exports.createUserMiddleware = createUserMiddleware;

const deleteUserMiddleware = async function (req, res, next) {
    try {
        const userDeleted =  await deleteUser(req.body)
        res.status(200).json({
            message : "user deleted",
            data: userDeleted
        })
    } catch (error) {
        res.status(500).json({
            error : error.message
        })
    }
}

exports.deleteUserMiddleware = deleteUserMiddleware;


const updateUserMidleware = async function (req, res, next) {
    try {
        const updatedUser =  await upadateUser(req.boyd)
        res.status(200).json({
            message : "user updated",
            data: updatedUser
        })
    } catch (error) {
        res.status(500).json({
            error : error.message
        })
    }
}

exports.updateUserMidleware = updateUserMidleware;

const allUserMiddleware = async function () {
    try {
        const allUsers = await getAllUsers();
        res.status(200).json({
            data: allUsers
        })
    } catch (error) {
        res.status(500).json({
            error : error.message
        })
    }
}
exports.allUserMiddleware = allUserMiddleware;