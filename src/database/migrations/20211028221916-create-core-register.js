"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("core_register", {
            nId: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            sName: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            sEmail: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING,
            },
            sInstitution: {
                allowNull: true,
                type: Sequelize.STRING,
            },
            sTypePlanted: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            sDescription: {
                type: Sequelize.STRING,
            },
            sPhoto: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            sCommunity: {
                type: Sequelize.STRING,
            },
            sDirection: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            sLatitude: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            sLongitude: {
                allowNull: false,
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
        await queryInterface.dropTable("core_register");
    },
};
