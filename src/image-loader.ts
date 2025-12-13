'use client'

export default function myImageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
    if (process.env.NODE_ENV === 'development') {
        return src;
    }
    return `/nextImageExportOptimizer${src}?width=${width}&quality=${quality || 75}`;
}
