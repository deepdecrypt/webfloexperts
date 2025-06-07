export declare const contentfulClient: import("contentful").ContentfulClientApi<undefined>;
export declare const previewClient: import("contentful").ContentfulClientApi<undefined>;
export interface BlogPost {
    title: string;
    slug: string;
    content: any;
    excerpt: string;
    featuredImage?: {
        url: string;
        title: string;
    };
    publishDate: string;
    author?: string;
}
export declare function getBlogPosts(preview?: boolean): Promise<import("contentful").Entry<import("contentful").EntrySkeletonType, undefined, string>[]>;
export declare function getBlogPostBySlug(slug: string, preview?: boolean): Promise<import("contentful").Entry<import("contentful").EntrySkeletonType, undefined, string>>;
