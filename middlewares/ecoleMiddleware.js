const { createSchool, deleteSchool, upadateSchool } = require("../lib/ecole");
const { all } = require("../routes/users");




const createSchoolMiddleware = async function (req, res, next) {
    try {
        const schoolCreated =  await createSchool(req.body);
        res.status(200).json({
            message : "school created",
            data: schoolCreated
        })
    } catch (error) {
        res.status(500).json({
            error : error.message
        })
    }
}

exports.createSchoolMiddleware = createSchoolMiddleware;

const deleteScoolMiddleware = async function (req, res, next) {
    try {
        const schoolDeleted =  await deleteSchool(req.body)
        res.status(200).json({
            message : "school deleted",
            data: schoolDeleted
        })
    } catch (error) {
        res.status(500).json({
            error : error.message
        })
    }
}

exports.deleteSchoolMiddleware = deleteScoolMiddleware;


const updateSchoolMiddleware = async function (req, res, next) {
    try {
        const updatedSchool =  await upadateSchool(req.body)
        res.status(200).json({
            message : "school updated",
            data: updatedSchool
        })
    } catch (error) {
        res.status(500).json({
            error : error.message
        })
    }
}

exports.updateSchoolMiddleware = updateSchoolMiddleware;

const allSchoolMiddleware = async function () {
    try {
        const allSchool = await getAllSchool();
        res.status(200).json({
            data: allSchool
        })
    } catch (error) {
        res.status(500).json({
            error : error.message
        })
    }
}
exports.allSchoolMiddleware = allSchoolMiddleware;