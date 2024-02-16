const { setJwt } = require("../lib/JWT");
const { createStudent, deleteStudent, updateStudent } = require("../lib/eleve");


const createStudentMiddleware = async function (req, res, next) {
    try {
        const studentCreated =  await createStudent(req.body);
        res.status(200).json({
            message : "student created",
            data: studentCreated
        })
    } catch (error) {
        res.status(500).json({
            error : error.message
        })
    }
}

exports.createStudentMiddleware = createStudentMiddleware;

const deleteStudentMiddleware = async function (req, res, next) {
    try {
        const studentDelted =  await deleteStudent(req.body)
        res.status(200).json({
            message : "student deleted",
            data: studentDelted
        })
    } catch (error) {
        res.status(500).json({
            error : error.message
        })
    }
}

exports.deleteStudentMiddleware = deleteStudentMiddleware;


const updateStudentMiddleware = async function (req, res, next) {
    try {
        const updatedStudent =  await updateStudent(req.boyd)
        res.status(200).json({
            message : "student updated",
            data: updatedStudent
        })
    } catch (error) {
        res.status(500).json({
            error : error.message
        })
    }
}

exports.updateStudentMiddleware = updateStudentMiddleware;

const allStudentMiddleware = async function (triClass = null) {
    if (triClass) {
        try {
            const allStudent = await getAllUsers(triClass);
            res.status(200).json({
                data: allStudent
            })
        } catch (error) {
            res.status(500).json({
                error : error.message
            })
        }
    } else {
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

}
exports.allStudentMiddleware = allStudentMiddleware;