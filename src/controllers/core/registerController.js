const { response } = require("express");
const {
    GetRegistersService,
    GetRegisterByIdService,
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

const CreateRegister = async (req, res = response) => {
    const {
        name: sName,
        email: sEmail,
        institution: sInstitution,
        typePlanted: sTypePlanted,
        description: sDescription,
        photo: sPhoto,
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
        sCommunity,
        sDirection,
        sLatitude,
        sLongitude,
    });
    if (oResponse !== null) {
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
    CreateRegister,
};
