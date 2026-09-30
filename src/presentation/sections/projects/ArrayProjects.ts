import wimmCover from "../../../assets/wimm-cover.webp";
import gamingSwipeCover from "../../../assets/gaming-swipe-cover.webp";
import helmiCover from "../../../assets/helmiheikkinen-cover.webp";
import type { Project } from "../../../domain/interfaces/Project.ts";


const projects: Project[] = [
    {
        name: "Wimm",
        slug: "wimm",
        img: wimmCover,
        description: "Managing your debtors and creditors has never been so easy.",
        long_description: "Wimm (Where Is My Money), a cross-platform mobile app (iOS and Android) designed to easily manage debtors and creditors: what people owe you and what you owe. The idea is to simplify as much as possible the control of that information we usually keep in notes, papers, or just in our heads.",
        technologies: [
            {
                name: "React Native"
            },
            {
                name: "TypeScript"
            },
            {
                name: "Expo"
            },
            {
                name: "EAS"
            },
            {
                name: "Django"
            },
            {
                name: "Python"
            },
            {
                name: "PosgreSQL"
            },
            {
                name: "JWT"
            },
            {
                name: "Render"
            },
            {
                name: "Git"
            },
            {
                name: "Figma"
            }
        ],
        urls: [
            {
                label: "View frontend code",
                url: "https://github.com/rinndp/wimm-frontend",
            },
            {
                label: "View backend code",
                url: "https://github.com/rinndp/wimm-backend",
            },
            {
                label: "View linkedIn post",
                url: "https://www.linkedin.com/posts/axelrojas3_nuevo-proyecto-personal-quiero-activity-7373688873517744128-z_29",
            }
        ]
    },
    {
        name: "GamingSwipe",
        slug: "gaming-swipe",
        img: gamingSwipeCover,
        description: "Discover new games through swipes, manage your game library and see other people's libraries",
        long_description: "GamingSwipe is a cross-platform and innovative application designed to make discovering videogames easier and more dynamic for users. Through a swipe-based system, it allows users to expand their wishlist in a much smoother way.",
        technologies: [
            {
                name: "React Native"
            },
            {
                name: "TypeScript"
            },
            {
                name: "Expo"
            },
            {
                name: "EAS"
            },
            {
                name: "Django"
            },
            {
                name: "Python"
            },
            {
                name: "PosgreSQL"
            },
            {
                name: "JWT"
            },
            {
                name: "Render"
            },
            {
                name: "Git"
            },
            {
                name: "IGDB API"
            },
            {
                name: "Figma"
            }
        ],
        urls: [
            {
                label: "View linkedIn post",
                url: "https://www.linkedin.com/posts/axelrojas3_despu%C3%A9s-de-hacer-un-prototipo-base-para-activity-7436027475278807040-bH-r?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkCElIBq2F0IG6nb31WOGTAZ2ddZa1P1y4",
            },
            {
                label: "Download it from Google Play Store!",
                url: "https://play.google.com/store/apps/details?id=com.rinndp.gamingswipe",
            },
        ]
    },
    {
        name: "Helmi's Portfolio",
        slug: "helmi-portfolio",
        img: helmiCover,
        description: "Clean and smooth photography portfolio showcasing Helmi Heikkinen's photo sessions.",
        long_description: "A personal portfolio website built for photographer Helmi Heikkinen. It presents Helmi's photo sessions in a clean, well-organized way, letting the images take center stage while navigation stays smooth and effortless. The site also includes contact information so potential clients can easily get in touch and book a session.",
        technologies: [
            {
                name: "React"
            },
            {
                name: "Vite"
            },
            {
                name: "TailwindCSS"
            },
            {
                name: "TypeScript"
            },
            {
                name: "Vercel"
            },
            {
                name: "Git"
            }
        ],
        urls: [
            {
                label: "Visit Website",
                url: "https://helmiheikkinen.com/#home"
            }
        ]
    },
]

export default projects