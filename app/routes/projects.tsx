import type {Route} from "../../.react-router/types/app/routes/+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Joseph's Projects" },
        { name: "description", content: "Here are the cool projects I've done" },
    ];
}

function Projects() {
    return (
        <>
            <h2>Projects Page</h2>
        </>
    )
}

export default Projects;