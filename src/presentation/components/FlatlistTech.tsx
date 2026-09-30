import type {Tech} from "../../domain/interfaces/Tech.ts";
import "./StyleFlatlistTech.css"
import {getTechIcon} from "./TechIcons.ts";
import {useState, type CSSProperties} from "react";

interface Props {
    techStack: Tech[]
    animation: boolean
}

const TechChip = ({tech, index, animation}: { tech: Tech, index: number, animation: boolean }) => {
    const icon = getTechIcon(tech.name);
    const [iconFailed, setIconFailed] = useState(false);

    return (
        <li data-aos={animation ? "fade-up" : undefined}
            data-aos-delay={animation ? Math.min(index * 40, 400) : undefined}
            className="tech-chip"
            style={{"--brand": icon?.color ?? "var(--light-purple)"} as CSSProperties}>
            {icon?.glyph ? (
                <span className="tech-chip-icon tech-chip-glyph" aria-hidden="true">{icon.glyph}</span>
            ) : icon?.url && !iconFailed ? (
                <img className="tech-chip-icon" src={icon.url} alt="" width={18} height={18}
                     loading="lazy" onError={() => setIconFailed(true)}/>
            ) : (
                <span className="tech-chip-dot" aria-hidden="true"/>
            )}
            <span>{tech.name}</span>
        </li>
    )
}

export const FlatListTech = ({techStack, animation}: Props) => {
    return (
        <ul className="tech-list">
            {techStack.map((tech, index) => (
                <TechChip key={tech.name} tech={tech} index={index} animation={animation}/>
            ))}
        </ul>
    )
}
