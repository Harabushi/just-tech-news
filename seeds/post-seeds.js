const { Post } = require('../models');

const postData = [
  {
    title: "Runbuddy reaches 1 million subscribers",
    post_url: "https://runbuddy.com/press",
    user_id: 1
  },
  {
    title: "Taskmaster reaches 1 million subscribers",
    post_url: "https://taskmaster.com/press",
    user_id: 2
  },
  {
    title: "Jest-Another-RPG reaches 1 million subscribers",
    post_url: "https://jest-another-rpg.com/press",
    user_id: 3
  },
  {
    title: "Zookeepr reaches 1 million subscribers",
    post_url: "https://zookeepr.com/press",
    user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;