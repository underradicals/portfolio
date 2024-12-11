import {useLocation} from "react-router";

function BrandTitle() {
    const { pathname } = useLocation();

    if (pathname === '/') {
        return <h2>Portfolio</h2>
    }else{
        const title = pathname.replace("/", "");
        return <h2 className={`capitalize`}>{title}</h2>
    }
}

export default BrandTitle;