const { DateTime } = require("luxon");

const readableDate = (dateObj) => {
  return DateTime.fromJSDate(dateObj, {
    zone: "Europe/Paris",
  })
    .setLocale("en")
    .toLocaleString(DateTime.DATE_FULL);
};

const inEra = (collection, era) => {
  if (!era) return collection;
  return collection.filter((item) => item.data.era == era);
};

module.exports = {
  readableDate,
  inEra,
};
