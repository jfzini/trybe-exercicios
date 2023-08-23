const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      tableName: 'users',
      underscored: true,
    },
  );
  (async () => {
    await sequelize.sync({ force: true });
    const sara = await User.create({
      fullName: 'Sara Kubitschek',
      email: 'sarakbt@gmail.com',
    });
  })();
  return User;
};

module.exports = UserModel;
