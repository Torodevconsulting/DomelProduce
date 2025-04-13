/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://domelproduce.com',
  generateRobotsTxt: true,
  exclude: ['/404'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
};