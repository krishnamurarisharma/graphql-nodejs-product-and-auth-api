const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../../utils/auth');

module.exports = {
  Query: {
    me: async (_, __, { user }) => {
      if (!user) throw new Error('Not authenticated');
      return await User.findById(user.id);
    },
  },
  Mutation: {
    register: async (_, { username, email, password }) => {
      const existing = await User.findOne({ email });
      if (existing) throw new Error('Email already registered');

      const hashed = await bcrypt.hash(password, 12);
      const user = new User({ username, email, password: hashed });
      await user.save();

      const token = generateToken(user);
      return { ...user._doc, id: user._id, token };
    },

    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw new Error('Invalid credentials');

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw new Error('Invalid credentials');

      const token = generateToken(user);
      return { ...user._doc, id: user._id, token };
    },
  },
};
