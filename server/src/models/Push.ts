import {
    CreationOptional,
    DataTypes,
    ForeignKey,
    InferAttributes,
    InferCreationAttributes,
    Model,
    Sequelize,
} from 'sequelize';
import type { AuctionedItem } from './AuctionedItem.js';
import type { User } from './User.js';

export class Push extends Model<
    InferAttributes<Push>,
    InferCreationAttributes<Push>
> {
    declare id: CreationOptional<number>;
    declare product_id: ForeignKey<AuctionedItem['id']>;
    declare username: ForeignKey<User['username']>;
    declare amount: number;
    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

export function PushFactory(sequelize: Sequelize) {
    Push.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            amount: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
        },
        {
            sequelize,
            timestamps: true,
            underscored: true,
            modelName: 'push',
        },
    );
    return Push;
}