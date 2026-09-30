// Icons served by the Simple Icons CDN: https://cdn.simpleicons.org/<slug>/<hex>
// Brands whose official color is too dark for the purple background use a lighter tone.
// `src` overrides the CDN icon (brands missing from Simple Icons); `glyph` renders text instead of an image.

interface TechIcon {
    slug?: string;
    src?: string;
    glyph?: string;
    color: string;
}

const techIcons: Record<string, TechIcon> = {
    "react": { slug: "react", color: "61DAFB" },
    "react native": { slug: "react", color: "61DAFB" },
    "typescript": { slug: "typescript", color: "3178C6" },
    "expo": { slug: "expo", color: "FFFFFF" },
    "eas": { slug: "expo", color: "FFFFFF" },
    "django": { slug: "django", color: "44B78B" },
    "python": { slug: "python", color: "FFD43B" },
    "posgresql": { slug: "postgresql", color: "699ECA" },
    "postgresql": { slug: "postgresql", color: "699ECA" },
    "mysql": { slug: "mysql", color: "F29111" },
    "jwt": { slug: "jsonwebtokens", color: "FB015B" },
    "json": { glyph: "{ }", color: "F5DE19" },
    "vite": { slug: "vite", color: "9499FF" },
    "tailwindcss": { slug: "tailwindcss", color: "06B6D4" },
    "vercel": { slug: "vercel", color: "FFFFFF" },
    "render": { slug: "render", color: "FFFFFF" },
    "git": { slug: "git", color: "F05032" },
    "github": { slug: "github", color: "FFFFFF" },
    "figma": { slug: "figma", color: "F24E1E" },
    "java": {
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        color: "ED8B00",
    },
    "jira": { slug: "jira", color: "2684FF" },
    "postman": { slug: "postman", color: "FF6C37" },
    "cursor": { slug: "cursor", color: "FFFFFF" },
    "igdb api": { slug: "igdb", color: "9147FF" },
};

export const getTechIcon = (name: string) => {
    const icon = techIcons[name.trim().toLowerCase()];
    if (!icon) return null;
    return {
        url: icon.src ?? (icon.slug ? `https://cdn.simpleicons.org/${icon.slug}/${icon.color}` : null),
        glyph: icon.glyph ?? null,
        color: `#${icon.color}`,
    };
}
