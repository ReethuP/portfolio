
export const getImageURL = (path) => {
    return new URL(`/content/${path}`, import.meta.url).href;
}

