"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class CoreRegister extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    CoreRegister.init(
        {
            sName: DataTypes.STRING,
            sEmail: DataTypes.STRING,
            sInstitution: DataTypes.STRING,
            sTypePlanted: DataTypes.STRING,
            sDescription: DataTypes.STRING,
            sPhoto: DataTypes.STRING,
            sCommunity: DataTypes.STRING,
            sDirection: DataTypes.STRING,
            sLatitude: DataTypes.STRING,
            sLongitude: DataTypes.STRING,
            nState: DataTypes.INTEGER,
            nRowState: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "CoreRegister",
            // freezeTableName: true,   //Este para que apunte a una tabla con el mismo nombre del modelo osea CoreRegister
            tableName: "core_register", //Para que apunte a una tabla con el nombre 'core_register'
            // Sequelize agrega automáticamente los campos createdAty updatedAta cada modelo
            // createdAt: false, //Para deshabilitar este campo predeterminado
            createdAt: "dCreatedAt",
            updatedAt: "dUpdatedAt",
        }
    );
    return CoreRegister;
};
