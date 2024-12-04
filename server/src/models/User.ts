import {
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
    Model,
    Sequelize,
} from 'sequelize';
import bcrypt from 'bcrypt';

export class User extends Model<
    InferAttributes<User>,
    InferCreationAttributes<User>
> {
    declare id: CreationOptional<number>;
    declare username: string;
    declare email: string;
    declare password: string;
    declare name: string;
    declare isActive: boolean;
    declare role: string;

    // Hash the password before saving the user
    public async setPassword(password: string) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(password, saltRounds);
    }
}

export function UserFactory(sequelize: Sequelize) {
    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Please enter a password',
                    },
                    // ! At this point, the password length validator won't work as we're hashing before hitting the Model. We have removed the validator for now, but we'll learn how to fix it in a future activity!
                },
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notNull: {
                        msg: 'Please enter your full name',
                    },
                },
            },
            isActive: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            role: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: "user"
            }
        },
        {
            sequelize,
            timestamps: false,
            underscored: true,
            modelName: 'user',
            hooks: {
                beforeCreate: async (user: User) => {
                    await user.setPassword(user.password);
                },
                beforeUpdate: async (user: User) => {
                    await user.setPassword(user.password);
                },
            },
        }
    );

    return User;
}