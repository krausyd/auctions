import sequelize from "../config/connection.js";
import { UserFactory } from "./User.js";
import { AuctionedItemFactory } from "./AuctionedItem.js";
import { ItemizedFactory } from "./Itemized.js";
import { PushFactory } from "./Push.js"

// Initialize the models
const User = UserFactory(sequelize);
const AuctionedItem = AuctionedItemFactory(sequelize);
const Itemized = ItemizedFactory(sequelize);
const Push = PushFactory(sequelize);

User.hasMany(Push, {
    onDelete: 'RESTRICT',
});

Push.belongsTo(User);

AuctionedItem.hasMany(Push, {
    onDelete: 'RESTRICT',
});

Push.belongsTo(AuctionedItem);

AuctionedItem.hasMany(Itemized, {
    onDelete: 'CASCADE',
});

Itemized.belongsTo(AuctionedItem);

export { sequelize, AuctionedItem, Itemized, Push, User };

