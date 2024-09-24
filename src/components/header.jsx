import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header id="header" className="mb-3">
            <div className="container px-0 py-2 d-flex justify-content-between align-items-center">
                <img src="/logo192.png" alt="logo" width="80px"/>
                <nav className="d-flex align-items-center gap-3">
                    <Link to="/">صفحه اصلی</Link>
                    <Link to="/about">درباره ما</Link>
                </nav>
                <div></div>
            </div>
        </header>
    )
}

export default Header;