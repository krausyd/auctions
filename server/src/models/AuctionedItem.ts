import {
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    Sequelize,
} from 'sequelize';

export class AuctionedItem extends Model<
    InferAttributes<AuctionedItem>,
    InferCreationAttributes<AuctionedItem>
> {
    declare id: CreationOptional<number>;
    declare description: string;
    declare photo_url: string;
    declare start_price: number;
}

export function AuctionedItemFactory(sequelize: Sequelize) {
    AuctionedItem.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            photo_url: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            start_price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        {
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: 'auctioned_item',
        },
    );

    return AuctionedItem;
}