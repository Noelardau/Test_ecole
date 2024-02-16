const { PrismaClient } = require("@prisma/client");  
const { all } = require("../app");


const prisma = new PrismaClient()

const createSchool= async function (schoolObject, userId) {
    try {
        const schoolCreated = await prisma.user.create({
            data : {
                ...schoolObject,
                ownerId : userId
            }
        })
        return schoolCreated
    } catch (error) {
        throw new Error(error.message)
    }
}
exports.createSchool= createSchool ;


const deleteSchool = async function (schoolId) {
    try {
        const schoolDeleted = await prisma.school.delete({
            where : {
                id : +schoolId
            }
        })
        return schoolDeleted
    } catch (error) {
        throw new Error(error.message)
    }
}
exports.deleteSchool = deleteSchool;

const updateSchool = async function (schoolObject) {
    try {
        const scholUpdated = await prisma.school.update({
            where : {
                id : +schoolObject.id
            },
            data : schoolObject
        })
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.upadateSchool = updateSchool;

const getAllSchool = async function () {
    try {
        const allSchool = await prisma.school.findMany();
        return allSchool;
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.getAllSchool = getAllSchool