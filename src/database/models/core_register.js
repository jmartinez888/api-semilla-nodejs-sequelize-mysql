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
            nId: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            sName: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            sEmail: {
                allowNull: false,
                // unique: true,
                type: DataTypes.STRING,
            },
            sInstitution: {
                allowNull: true,
                type: DataTypes.STRING,
            },
            sTypePlanted: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            sDescription: {
                type: DataTypes.STRING,
            },
            sPhoto: {
                allowNull: false,
                type: DataTypes.TEXT("long"),
            },
            sDepartmentId: {
                type: DataTypes.STRING,
            },
            sProvinceId: {
                type: DataTypes.STRING,
            },
            sDistricId: {
                type: DataTypes.STRING,
            },
            sCommunity: {
                type: DataTypes.STRING,
            },
            sDirection: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            sLatitude: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            sLongitude: {
                allowNull: false,
                type: DataTypes.STRING,
            },
            nState: {
                type: DataTypes.INTEGER,
            },
            nRowState: {
                type: DataTypes.INTEGER,
            },
            dCreatedAt: {
                allowNull: false,
                defaultValue: DataTypes.NOW,
                type: DataTypes.DATE,
            },
            dUpdatedAt: {
                allowNull: false,
                defaultValue: DataTypes.NOW,
                type: DataTypes.DATE,
            },
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
