import type {Route} from "../../.react-router/types/app/routes/+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Joseph's Blog" },
        { name: "description", content: "Cool Stiff I like think about" },
    ];
}

function Blog() {
    return (
        <>
            <h2>Blog Page</h2>
        </>
    )
}

export default Blog;