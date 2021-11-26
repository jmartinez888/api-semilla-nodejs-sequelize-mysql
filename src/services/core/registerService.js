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
            // attributes: { exclude: ["id"] },
        });

        if (oResponse.length > 0) {
            return oResponse;
        }
        return null;
    } catch (e) {
        return null;
    }
};

const GetRegisterByIdService = async ({ _id }) => {
    try {
        const oResponse = await models.CoreRegister.findOne({
            // attributes: { exclude: ["id"] },
            where: {
                nId: _id,
            },
        })
            .then((register) => {
                if (register === null || register.length === 0) {
                    return null;
                }
                return register.dataValues;
            })
            .catch((error) => {
                return null;
            });
        return oResponse;
    } catch (e) {
        return null;
    }
};

const GetRegistersByEmailService = async ({ sEmail }) => {
    try {
        const oResponse = await models.CoreRegister.findAll({
            // attributes: { exclude: ["id"] },
            where: {
                sEmail: sEmail,
            },
        })
            .then((register) => {
                if (register === null || register.length === 0) {
                    return null;
                }
                return register.dataValues;
            })
            .catch((error) => {
                return null;
            });
        return oResponse;
    } catch (e) {
        return null;
    }
};

const CreateRegisterService = async ({
    sName,
    sEmail,
    sInstitution,
    sTypePlanted,
    sDescription,
    sPhoto,
    sDepartment,
    sProvince,
    sDistric,
    sCommunity,
    sDirection,
    sLatitude,
    sLongitude,
}) => {
    try {
        // console.log("rrrrr");
        const oResponse = await models.CoreRegister.create({
            sName: sName,
            sEmail: sEmail,
            sInstitution: sInstitution,
            sTypePlanted: sTypePlanted,
            sDescription: sDescription,
            sPhoto: sPhoto,
            sDepartmentId: sDepartment,
            sProvinceId: sProvince,
            sDistricId: sDistric,
            sCommunity: sCommunity,
            sDirection: sDirection,
            sLatitude: sLatitude,
            sLongitude: sLongitude,
            nState: 1,
            nRowState: 1,
        })
            .then((register) => {
                // console.log("rrrrr");
                // console.log(register);
                if (register === null || register.length === 0) {
                    return null;
                }
                return register.dataValues;
            })
            .catch((error) => {
                return null;
            });
        return oResponse;
    } catch (e) {
        return null;
    }
};

module.exports = {
    GetRegistersService,
    GetRegisterByIdService,
    GetRegistersByEmailService,
    CreateRegisterService,
};
