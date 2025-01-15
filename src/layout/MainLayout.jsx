import { Link } from "react-router-dom";

const MainLayout = ({ children }) => {
    return (
        <div className="mx-auto my-5">
            <header className="w-[1440px] flex items-center justify-between border-b border-black pb-2 mb-3">
                <div className="font-bold text-lg">
                    <Link to="/">Muhsinjon.</Link>
                </div>
                <ul className="flex justify-between items-center gap-5">
                    <li className="navEle">
                        <Link className="font-bold" to="/">Home</Link>
                    </li>
                    <li className="navEle">
                        <Link className="font-bold" to="/validation">Validation</Link>
                    </li>
                    <li className="navEle">
                        <Link className="font-bold" to="/modal-control">Modal Control</Link>
                    </li>
                    <li className="navEle">
                        <Link className="font-bold" to="/progress-bar">Progress Bar</Link>
                    </li>
                    <li className="navEle">
                        <Link className="font-bold" to="/scroll-animation">Scroll Animation</Link>
                    </li>
                </ul>
            </header>
            <main className="w-[1440px] flex flex-col items-start justify-center">{children}</main>
        </div>
    );
}

export default MainLayout;