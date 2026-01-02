'use strict';

import { DataTypes , QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface : QueryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.addColumn('Hotels', 'DELETED_AT', {
      type: DataTypes.DATE,
      defaultValue: null,
    })

  },

  async down (queryInterface : QueryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.removeColumn('Hotels', 'DELETED_AT');
  }
};
