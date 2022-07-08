const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const RevertedAppeal = sequelize.define(
    'revertedappeal',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        reason: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
);

module.exports = RevertedAppeal;
