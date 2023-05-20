/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://riccardotornesello.it',
    generateRobotsTxt: true,
    output: 'export',
}