import type {Route} from "../../.react-router/types/app/routes/+types/home";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Portfolio's Docs" },
        { name: "description", content: "This story of how did what I did." },
    ];
}

function Docs() {
    return (
        <>
            <h2>Docs Page</h2>
        </>
    )
}

export default Docs;