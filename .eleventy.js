const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const { EleventyRenderPlugin } = require("@11ty/eleventy");

const markdownIt = require("markdown-it");
const markdownItRenderer = new markdownIt();

const { getAllPosts } = require("./config/collections");

const { readableDate, inEra } = require("./config/filters");

const {
  eraHeadingShortCode,
  addEraSsgsShortCode,
  addImageShortcode,
} = require("./config/shortcodes");

module.exports = function (eleventyConfig) {
  /*================================*/
  /*   plugins and configurations   */
  /*================================*/
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->",
    excerpt_alias: "excerpt",
  });

  /*===================================================*/
  /* files that need to be copied to the build folder  */
  /*===================================================*/
  eleventyConfig.addPassthroughCopy("./src/assets/social-image.jpg");
  eleventyConfig.addPassthroughCopy("./src/assets/css");
  eleventyConfig.addPassthroughCopy("./src/assets/images");
  eleventyConfig.addPassthroughCopy("./src/assets/js");

  /*=================*/
  /*     Layouts     */
  /*=================*/
  eleventyConfig.addLayoutAlias("page", "layouts/page");
  eleventyConfig.addLayoutAlias("article", "layouts/article");
  eleventyConfig.addLayoutAlias("timeline", "layouts/timeline");

  /*=================*/
  /*   Collections   */
  /*=================*/
  eleventyConfig.addCollection("ssgs", getAllPosts);

  /*=================*/
  /*     Filters     */
  /*=================*/
  eleventyConfig.addFilter("readableDate", readableDate);
  eleventyConfig.addFilter("inEra", inEra);
  eleventyConfig.addFilter("markdownify", (str) => {
    return markdownItRenderer.render(str);
  });

  /*=================*/
  /*    shortcodes   */
  /*=================*/
  eleventyConfig.addShortcode("eraHeading", eraHeadingShortCode);
  addEraSsgsShortCode(eleventyConfig);
  addImageShortcode(eleventyConfig);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
  };
};
