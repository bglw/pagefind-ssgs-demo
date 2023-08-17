const slugify = require("slugify");

/* Creating a collection containing all ssgs by filtering based on folder and filetype */
const getAllPosts = (collectionApi) => {
  return collectionApi.getFilteredByGlob("./src/ssg/*.md").reverse();
};

module.exports = {
  getAllPosts,
};
