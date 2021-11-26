"use strict";
const faker = require("faker/locale/es");
const idsUbigeo = require("./UbigeoIds.json");
// const idsProvince = require("./ProvinceIds.json");
// const idsDistric = require("./DistricIds.json");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */

        // faker.seed(123);
        let data = [];
        let amount = 50;
        while (amount--) {
            data.push({
                sName: faker.name.firstName() + " " + faker.name.lastName(),
                sEmail: faker.internet.email(),
                sInstitution: faker.company.companyName(),
                sTypePlanted: faker.lorem.word(),
                sDescription: faker.lorem.words(),
                sPhoto: faker.random.image(),
                sDepartmentId: faker.random.arrayElement(
                    idsUbigeo.DepartmentIds
                ),
                sProvinceId: faker.random.arrayElement(idsUbigeo.ProvinceIds),
                sDistricId: faker.random.arrayElement(idsUbigeo.DistricIds),
                sCommunity: faker.address.cityName(),
                sDirection: faker.address.streetAddress(),
                sLatitude: faker.address.latitude(),
                sLongitude: faker.address.longitude(),
                nState: faker.datatype.number(2),
                nRowState: faker.datatype.number(3),
                // dCreatedAt: new Date(),
                // dUpdatedAt: new Date(),
            });
        }

        await queryInterface.bulkInsert("core_register", data, {});
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete("core_register", null, {});
    },
};
