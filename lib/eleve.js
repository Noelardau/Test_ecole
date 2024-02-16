const { PrismaClient } = require("@prisma/client");  


const prisma = new PrismaClient()

const createStudent= async function (studentObject, schoolId) {
    try {
        const studentCreated = await prisma.user.create({
            data : {
                ...studentObject,
                schoolId : schoolId
            }
        })
        return studentCreated
    } catch (error) {
        throw new Error(error.message)
    }
}
exports.createStudent= createStudent ;


const deleteStudent = async function (studentId) {
    try {
        const studentDeleted = await prisma.student.delete({
            where : {
                studentId : +studentId
            }
        })
        return studentDeleted
    } catch (error) {
        throw new Error(error.message)
    }
}
exports.deleteStudent = deleteStudent;

const updateStudent = async function (studentObject) {
    try {
        const studentObject = await prisma.student.update({
            where : {
                id : +studentObject.id
            },
            data : studentObject
        })
    } catch (error) {
        throw new Error(error.message)
    }
}

exports.updateStudent = updateStudent;


const getAllStudent = async function (triClass) {
    try {
      if (triClass) {
         const allStudentPerClass = await prisma.student.findMany({
             where : {
                 class : triClass
             }
         })
         return allStudentPerClass;
      } else {
         const allStudent = await prisma.student.findMany({})
         return allStudent;
      }
    } catch (error) {
         throw new Error(error.message)
    }
 }
 
 exports.getAllStudent = getAllStudent;




exports.getAllUsers = getAllUsers