import { useLocation } from "react-router-dom";

export function UseLastPathname(pos) {
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    return pathSegments[pathSegments.length - pos];
}