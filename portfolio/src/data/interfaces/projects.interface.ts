/**
 * Properties of a Project Detail object
 */
interface ProjectDetails {
    header: string,
    body: string
}

/**
 * Properties of a Project object
 */
export interface Project {
    name: string,
    year: string,
    description: string,
    tags: Array<string>,
    details: Array<ProjectDetails>
}