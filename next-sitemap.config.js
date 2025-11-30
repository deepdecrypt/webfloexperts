/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://webfloexperts.com',
  generateRobotsTxt: true,
  outDir: 'out',
  exclude: ['/admin/*', '/api/*', '/server-sitemap.xml'],
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://webfloexperts.com'}/sitemap.xml`
    ]
  },
};
