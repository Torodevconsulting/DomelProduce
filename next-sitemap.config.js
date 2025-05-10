/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.domelproduce.com', // Added www
  generateRobotsTxt: true,
  exclude: ['/404'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.domelproduce.com/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
};