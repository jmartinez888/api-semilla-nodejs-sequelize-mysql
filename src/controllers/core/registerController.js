const { response } = require("express");
const { GetRegistersService } = require("../../services/core/registerService");

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

module.exports = {
    GetRegisters,
};
