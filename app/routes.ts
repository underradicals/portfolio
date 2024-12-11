import {type RouteConfig, index, route, layout} from "@react-router/dev/routes";

export default [
    layout("routes/layouts/home_layout.tsx", [
        index("routes/home.tsx"),
        route("projects", "routes/projects.tsx"),
        route("about", "routes/about.tsx"),
    ]),
    layout("routes/layouts/three_column_layout.tsx", [
        route("blog", "routes/blog.tsx"),
        route("docs", "routes/docs.tsx")
    ])
] satisfies RouteConfig;
