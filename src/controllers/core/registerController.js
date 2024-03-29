const { response } = require("express");
const fs = require("fs");
const {
    GetRegistersService,
    GetRegisterByIdService,
    GetRegistersByEmailService,
    CreateRegisterService,
} = require("../../services/core/registerService");

const GetRegisters = async (req, res = response) => {
    const oResponse = await GetRegistersService();
    if (oResponse === null) {
        return res.status(200).json({
            ok: false,
            msg: "No se encontró el registro",
            data: oResponse,
        });
    }

    return res.status(200).json({
        ok: true,
        msg: "Datos de registros...",
        data: oResponse,
    });
};

const GetRegisterById = async (req, res = response) => {
    const { id: _id } = req.params;
    const oResponse = await GetRegisterByIdService({ _id });
    if (oResponse === null) {
        return res.status(200).json({
            ok: false,
            msg: "No se encontró el registro",
            data: oResponse,
        });
    }

    return res.status(200).json({
        ok: true,
        msg: "Dato de registro...",
        data: oResponse,
    });
};

const GetRegistersByEmail = async (req, res = response) => {
    const { email: sEmail } = req.params;
    const oResponse = await GetRegistersByEmailService({ sEmail });
    if (oResponse === null) {
        return res.status(200).json({
            ok: false,
            msg: "No se encontró el registro",
            data: oResponse,
        });
    }

    return res.status(200).json({
        ok: true,
        msg: "Dato de registro...",
        data: oResponse,
    });
};

const CreateRegister = async (req, res = response) => {
    const {
        name: sName,
        email: sEmail,
        institution: sInstitution,
        typePlanted: sTypePlanted,
        description: sDescription,
        photo: sPhoto,
        department: sDepartment,
        province: sProvince,
        distric: sDistric,
        community: sCommunity,
        direction: sDirection,
        latitude: sLatitude,
        longitude: sLongitude,
    } = req.body;

    const oResponse = await CreateRegisterService({
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
    });
    if (oResponse !== null) {
        // base64Data = sPhoto.replace(/^data:image\/png;base64,/, "");
        // base64Data += base64Data.replace("+", " ");
        // binaryData = new Buffer.from(sPhoto, "base64").toString("binary");
        // fs.writeFileSync("../../public/new-path.jpg", binaryData);
        // fs.writeFile("out.jpg", binaryData, "binary", function (err) {
        //     console.log(err); // writes out file without error, but it's not a valid image
        // });

        return res.status(200).json({
            ok: true,
            data: oResponse,
            msg: "Registro Exitoso..!!",
        });
    }
    return res.status(200).json({
        ok: false,
        msg: "No se pudo registrar!",
    });
};

module.exports = {
    GetRegisters,
    GetRegisterById,
    GetRegistersByEmail,
    CreateRegister,
};
