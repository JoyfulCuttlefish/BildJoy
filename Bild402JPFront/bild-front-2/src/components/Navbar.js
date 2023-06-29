import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Welcome: Create image page</Link>
                    </li>
                    {/* <li>
                        <Link to="/2">tbd Images</Link>
                    </li> */}
                    <li>
                        <Link to="/seeimages">See Images</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar