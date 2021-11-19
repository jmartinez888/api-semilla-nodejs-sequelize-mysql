const { Router, response } = require("express");
// const { GetRolesService } = require("../services/account/roles");
// const {
//     GetAllNotesByIdActivityService,
// } = require("../services/core/ActivityNotes");

const router = Router();

router.get("/", async (_, res = response) => {
    // const lRoles = await GetRolesService();
    // const lForums = await GetAllNotesByIdActivityService({
    //     nIdActivity: 1,
    //     nIdUser: 2,
    // });
    return res.status(200).json({
        mysqlDB: "lRoles",
        mongoDB: "lForums",
    });
});

module.exports = router;
