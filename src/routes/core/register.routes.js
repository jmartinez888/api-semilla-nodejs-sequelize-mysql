const { Router } = require("express");
// const { check } = require("express-validator");

// const { Roles } = require("../../constants/Roles");
// const { validarJWT } = require("../../middlewares/validar-jwt");
// const { validarCampos } = require("../../middlewares/validar-campos");
// const { validarSession } = require("../../middlewares/validar-session");
// const { validarRol } = require("../../middlewares/validar-rol");
// const {
//     GetCourseController,
//     GetCoursesController,
//     UpdateCourseController,
//     RegisterCourseController,
// } = require("../../controllers/core/course");

// const {
//     GetRegisters,
//     GetRegisterById,
// } = require("../../controllers/core/registerController");


const registerController = require("../../controllers/core/registerController");

const router = Router();

router.get(
    "/all",
    // validarApp([NairakkataAdminApp]),
    // validarJWT,
    // validarSession, ---19/11/2021 lopez traumatologo 4.30pm
    // validarRol(Roles.Teacher),
    registerController.GetRegisters
);

router.get(
    "/byId/:id",
    // validarApp([NairakkataAdminApp]),
    // validarJWT,
    // validarSession,
    // validarRol(Roles.Teacher),
    registerController.GetRegisterById
);

router.post(
    "/create",
    // validarApp([NairakkataAdminApp]),
    // [
    //     check("courseName", "El role es obligatorio").isString(),
    //     check("courseDescription", "El role es obligatorio").isString(),
    //     validarCampos,
    // ],
    // validarJWT,
    // validarSession,
    // validarRol(Roles.Teacher),
    registerController.CreateRegister
);

router.put(
    "/update"
    // validarApp([NairakkataAdminApp]),
    // [
    //     check("courseId", "El id es obligatorio").isNumeric(),
    //     check("courseName", "El nombre es obligatorio").isString(),
    //     check("courseDescription", "La descripcion es obligatorio").isString(),
    //     check("courseLink", "El link es obligatorio").isString(),
    //     check("courseBanner", "El banner es obligatorio").isString(),
    //     check("courseType", "El tipo es obligatorio").isNumeric(),
    //     validarCampos,
    // ],
    // validarJWT,
    // validarSession,
    // validarRol(Roles.Teacher),
    // app.use('/api/core', require('./src/routes/core/index'));
    // UpdateCourseController
);

module.exports = router;
