'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("wallet_assets", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      qtd: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      walletId: {
        type: Sequelize.INTEGER,
        references: {model: "wallets", key: "id"},
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      assetId: {
        type: Sequelize.INTEGER,
        references: {model: "assets", key: "id"},
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("wallet_assets")
  }
};
