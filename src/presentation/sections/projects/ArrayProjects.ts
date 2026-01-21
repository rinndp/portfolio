import wimmCover from "../../../assets/wimm-cover.png";
import gamingSwipeCover from "../../../assets/gaming-swipe-cover.png";
import calculatorCover from "../../../assets/calculator-cover.png";
import type {Project} from "../../../domain/interfaces/Project.ts";

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
                label: "View frontend code",
                url: "https://github.com/rinndp/gaming-swipe-frontend",
            },
            {
                label: "View backend code",
                url: "https://github.com/rinndp/gaming-swipe-backend",
            },
        ]
    },
    {
        name: "Calculator",
        slug: "calculator",
        img: calculatorCover,
        description: "Modern calculator designed for simplicity and style.",
        long_description: "With its minimalist dark interface and smooth rounded buttons, it offers an elegant experience for everyday calculations. The app supports parentheses and basic operations such as addition, subtraction, multiplication, and division, showing instant results as you type. A clear “C” button lets you reset easily, and the layout is fully optimized for both small and large screens, making it perfect for users who enjoy a clean, refined design without sacrificing functionality.",
        technologies: [
            {
                name: "Android Studio"
            },
            {
                name: "Java"
            }
        ],
        urls: [
            {
                label: "View code",
                url: "https://github.com/rinndp/epsum-pmdm-calculator"
            }
        ]
    },
]

export default projects