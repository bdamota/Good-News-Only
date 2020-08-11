const User = require('./User');
const Post = require("./Post");

// create associations
User.hasMany(Post, {
    foreignKey: 'id'
  });

Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

module.exports = { User };
module.exports = { User, Post };