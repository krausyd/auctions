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

export class Itemized extends Model<
    InferAttributes<Itemized>,
    InferCreationAttributes<Itemized>
> {
    declare id: CreationOptional<number>;
    declare product_id: ForeignKey<AuctionedItem['id']>;
    declare description: string;
    declare quantity: number;
}

export function ItemizedFactory(sequelize: Sequelize) {
    Itemized.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 1,
            },
        },
        {
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: 'itemized',
        },
    );
    return Itemized;
}
