const models = require("../../database/models");

const GetRegistersService = async () => {
    try {
        // console.log(models.sequelize.models.CoreRegister);
        // console.log(
        //     models.CoreRegister.findAll({
        //         attributes: { exclude: ["id"] },
        //     })
        // );
        // await sequelize.sync();
        const oResponse = await models.CoreRegister.findAll({
            attributes: { exclude: ["id"] },
        });

        if (oResponse.length > 0) {
            return oResponse;
        }
        return null;
    } catch (e) {
        return null;
    }
};

module.exports = {
    GetRegistersService,
};
