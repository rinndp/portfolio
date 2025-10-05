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
                url: "https://github.com/rinndp/wimm-frontend",
            },
            {
                url: "https://github.com/rinndp/wimm-backend",
            },
            {
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
                url: "https://github.com/mega025/epsum-react-gaming-swipe",
            },
            {
                url: "https://github.com/rinndp/gaming-swipe-backend",
            },
        ]
    },
    {
        name: "Calculator",
        slug: "calculator",
        img: calculatorCover,
        description: "Basic calculator made with Android Studio",
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
                url: "https://github.com/rinndp/epsum-pmdm-calculator"
            }
        ]
    },
]

export default projects