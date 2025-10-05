import type {Tech} from "./Tech.ts";
import type {Url} from "./Url.ts";

export interface Project {
    name: string;
    slug: string;
    img: string;
    description: string;
    long_description?: string;
    technologies: Tech[];
    urls?: Url[];
}