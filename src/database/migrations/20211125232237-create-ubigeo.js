"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("ubigeo", {
            nId: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            sDepartmentId: {
                type: Sequelize.STRING,
            },
            sDepartmentName: {
                type: Sequelize.STRING,
            },
            sProvinceId: {
                type: Sequelize.STRING,
            },
            sProvinceName: {
                type: Sequelize.STRING,
            },
            sDistricId: {
                type: Sequelize.STRING,
            },
            sDistricName: {
                type: Sequelize.STRING,
            },
            nState: {
                type: Sequelize.INTEGER,
            },
            nRowState: {
                type: Sequelize.INTEGER,
            },
            dCreatedAt: {
                allowNull: false,
                defaultValue: Sequelize.fn("now"),
                type: Sequelize.DATE,
            },
            dUpdatedAt: {
                allowNull: false,
                defaultValue: Sequelize.fn("now"),
                type: Sequelize.DATE,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("ubigeo");
    },
};
