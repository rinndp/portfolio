import type {Tech} from "../../domain/interfaces/Tech.ts";
import "../sections/about-me/StyleAboutMe.css"

interface Props {
    techStack: Tech[]
}

export const FlatListTech = ({techStack}: Props) => {
    return (
        <div className="flex flex-wrap gap-3 h-auto">
            {techStack.map((tech, index) => (
                <div data-aos={"fade-left"}
                     key={index}
                     className="tech-card-container h-10 text-white px-4 py-2 rounded-xl shadow-md"
                >
                    {tech.name}
                </div>
            ))}
        </div>
    )
}