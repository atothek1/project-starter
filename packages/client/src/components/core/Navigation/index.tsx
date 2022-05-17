import { Link } from "react-router-dom";
import { NavigationContainer } from "./styled";

export function Navigation(){
    return (
        <NavigationContainer>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </NavigationContainer>
    );
}