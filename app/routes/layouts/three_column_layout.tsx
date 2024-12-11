import {NavLink, Outlet} from "react-router";
import BrandTitle from "~/components/BrandTitle/BrandTitle";

function ThreeColumnLayout() {
    return (
        <>
            <header>
                <nav>
                    <BrandTitle/>
                    <div>
                        <NavLink to={`/`} end>
                            home
                        </NavLink>
                        <NavLink to={`/blog`} end>
                            blog
                        </NavLink>
                        <NavLink to={`/projects`} end>
                            projects
                        </NavLink>
                        <NavLink to={`/docs`} end>
                            docs
                        </NavLink>
                        <NavLink to={`/about`} end>
                            about
                        </NavLink>
                    </div>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default ThreeColumnLayout;