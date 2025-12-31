'use strict';

import { DataTypes, QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface : QueryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Hotels', 'MANAGERID', {
      type: DataTypes.INTEGER,
      allowNull: false
    });
    await queryInterface.addColumn('Hotels', 'CITY', {
      type: DataTypes.STRING,
      allowNull: false
    });
    await queryInterface.addColumn('Hotels', 'STATE', {
      type: DataTypes.STRING,
      allowNull: false
    });
    await queryInterface.addColumn('Hotels', 'PINCODE', {
      type: DataTypes.INTEGER,
      allowNull: false
    });
    await queryInterface.addColumn('Hotels', 'DESCRIPTION', {
      type: DataTypes.STRING,
    });

  },

  async down (queryInterface : QueryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Hotels', 'MANAGERID');
    await queryInterface.removeColumn('Hotels', 'CITY');
    await queryInterface.removeColumn('Hotels', 'STATE');
    await queryInterface.removeColumn('Hotels', 'PINCODE');
    await queryInterface.removeColumn('Hotels', 'DESCRIPTION');
  }
};
