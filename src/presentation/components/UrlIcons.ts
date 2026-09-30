// Known hosts use Simple Icons (light tone for the dark background);
// any other site falls back to its real favicon through Google's favicon service.

const simpleIconHosts: Record<string, string> = {
    "github.com": "github/FFFFFF",
    "play.google.com": "googleplay/FFFFFF",
};

export const getUrlIcon = (url: string) => {
    let host: string;
    try {
        host = new URL(url).hostname.replace(/^www\./, "");
    } catch {
        return null;
    }
    const simpleIcon = simpleIconHosts[host];
    if (simpleIcon) return `https://cdn.simpleicons.org/${simpleIcon}`;
    return `https://www.google.com/s2/favicons?domain=${host}&sz=64`;
}
