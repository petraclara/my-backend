// cookies.js
const cookieParser = require('cookie-parser');

// Configure cookie-parser middleware
const configureCookies = (app) => {
  app.use(cookieParser());
};

// Function to set preferences in cookies
const setPreferencesInCookies = (res, preferences) => {
  // Serialize preferences object to JSON string
  const preferencesJson = JSON.stringify(preferences);
  // Set preferences as a cookie
  res.cookie('preferences', preferencesJson, { path: '/' });
};

// Function to get preferences from cookies
const getPreferencesFromCookies = (req) => {
  const preferencesJson = req.cookies.preferences;
  return preferencesJson ? JSON.parse(preferencesJson) : null;
};

module.exports = {
  configureCookies,
  setPreferencesInCookies,
  getPreferencesFromCookies,
};
