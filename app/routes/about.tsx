import type {Route} from "../../.react-router/types/app/routes/+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "About Page" },
        { name: "description", content: "Welcome to the About Page" },
    ];
}

function About() {
    return (
        <h1>About page</h1>
    )
}

export default About;