"use strict";

module.exports = function(sequelize, DataTypes) {
	var Order = sequelize.define("order", {
		user_id: DataTypes.INTEGER,
		product_id: DataTypes.INTEGER,
		quantity: DataTypes.INTEGER,
		condition: DataTypes.STRING,
		status: DataTypes.STRING,
		latitude: DataTypes.DECIMAL(9,6),
		longitude: DataTypes.DECIMAL(9,6),
	}, { 
		underscored: true 
	});

	return Order;
};