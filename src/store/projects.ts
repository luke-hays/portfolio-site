import { atom } from "nanostores";
import {getCollection, getEntries} from "astro:content";

const projects = await getCollection('projects')

export const topProjects = atom(projects.filter(project => project.data.displayOnHome))
export const allProjects = atom(projects)
