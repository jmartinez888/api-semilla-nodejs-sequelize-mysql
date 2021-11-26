"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Ubigeo extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Ubigeo.init(
        {
            nId: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            sDepartmentId: DataTypes.STRING,
            sDepartmentName: DataTypes.STRING,
            sProvinceId: DataTypes.STRING,
            sProvinceName: DataTypes.STRING,
            sDistricId: DataTypes.STRING,
            sDistricName: DataTypes.STRING,
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
            modelName: "Ubigeo",
            // freezeTableName: true,   //Este para que apunte a una tabla con el mismo nombre del modelo osea CoreRegister
            tableName: "ubigeo", //Para que apunte a una tabla con el nombre 'core_register'
            // Sequelize agrega automáticamente los campos createdAty updatedAta cada modelo
            // createdAt: false, //Para deshabilitar este campo predeterminado
            createdAt: "dCreatedAt",
            updatedAt: "dUpdatedAt",
        }
    );
    return Ubigeo;
};
