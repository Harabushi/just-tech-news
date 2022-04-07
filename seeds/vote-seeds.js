const { resolve } = require('path');
const { Post, Vote, Comment, User } = require('../models');

const voteData = [
  {
    user_id: 1,
    post_id: 4
  },
  {
    user_id: 2,
    post_id: 1
  },
  {
    user_id: 2,
    post_id: 2
  },
  {
    user_id: 2,
    post_id: 3
  },
  {
    user_id: 3,
    post_id: 1
  },
  {
    user_id: 3,
    post_id: 2
  },
  {
    user_id: 4,
    post_id: 1
  }
];

const seedVotes = async () => {
  for await (const vote of voteData) {
    await Post.upvote(vote, { Vote, Comment, User })
  }
};

module.exports = seedVotes;