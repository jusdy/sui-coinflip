/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://suicoinflip.vercel.app', // Replace with your site URL
  generateRobotsTxt: true, // Generate robots.txt file
  // Additional options: https://www.npmjs.com/package/next-sitemap
};