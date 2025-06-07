"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.previewClient = exports.contentfulClient = void 0;
exports.getBlogPosts = getBlogPosts;
exports.getBlogPostBySlug = getBlogPostBySlug;
const contentful_1 = require("contentful");
const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const previewToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
const environment = process.env.CONTENTFUL_ENVIRONMENT || 'master';
if (!space || !accessToken) {
    throw new Error('Contentful space ID and access token are required');
}
exports.contentfulClient = (0, contentful_1.createClient)({
    space,
    accessToken,
    environment,
});
exports.previewClient = (0, contentful_1.createClient)({
    space,
    accessToken: previewToken || accessToken,
    environment,
    host: 'preview.contentful.com',
});
// Helper functions
async function getBlogPosts(preview = false) {
    const client = preview ? exports.previewClient : exports.contentfulClient;
    const response = await client.getEntries({
        content_type: 'blogPost',
        order: ['-fields.publishDate'],
    });
    return response.items;
}
async function getBlogPostBySlug(slug, preview = false) {
    const client = preview ? exports.previewClient : exports.contentfulClient;
    const response = await client.getEntries({
        content_type: 'blogPost',
        'fields.slug': slug,
    });
    return response.items[0];
}
