const { PrismaClient } = require("@prisma/client"); 
const { setJwt } = require("./JWT"); 
const { all } = require("../app");


const prisma = new PrismaClient()

const createUser = async function (userObject) {
    try {
        const userCreated = await prisma.user.create({
            data : userObject
        })
        console.log(userCreated);
        return userCreated;
    } catch (error) {
        throw new Error(error.message)
    }
}
exports.createUser = createUser ;

const deleteUser = async function (userId) {
    try {
        const userDeleted = await prisma.user.delete({
            where : {
                id : +userId
            }
        })
        return userDeleted;
    } catch (error) {
        throw new Error(error.message)
    }
}
exports.deleteUser = deleteUser;

const upadateUser = async function (userObject) {
    try {
        const userUpdated = await prisma.user.update({
            where : {
                id : +userObject.id
            },
            data : userObject
        })
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.upadateUser = upadateUser;

const getAllUsers = async function () {
    try {
        const allUsers = await prisma.user.findMany();
        return allUsers;
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.getAllUsers = getAllUsers