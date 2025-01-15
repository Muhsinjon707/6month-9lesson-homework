import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="w-full my-10 flex flex-col gap-5 items-start justify-between">
            <h2 className="font-bold text-xl">Homework Links</h2>
            <div className="w-full flex wrap mt-10 items-start justify-center gap-8 h-[1000px]">
                <div className="bg-blue-600 shadow-lg text-white w-1/3 h-[160px] flex items-center justify-center rounded-xl transition-[translate, bg] duration-300 hover:bg-blue-500 hover:-translate-y-4">
                    <Link to="/validation" className="font-bold text-xl bg-white text-black py-5 px-6 rounded-xl ">User validation</Link>
                </div>
                <div className="bg-blue-600 shadow-lg text-white w-1/3 h-[160px] flex items-center justify-center rounded-xl transition-[translate, bg] duration-300 hover:bg-blue-500 hover:-translate-y-4">
                    <Link to="/modal-control" className="font-bold text-xl bg-white text-black py-5 px-6 rounded-xl ">Modal Control</Link>
                </div>
                <div className="bg-blue-600 shadow-lg text-white w-1/3 h-[160px] flex items-center justify-center rounded-xl transition-[translate, bg] duration-300 hover:bg-blue-500 hover:-translate-y-4">
                    <Link to="/progress-bar" className="font-bold text-xl bg-white text-black py-5 px-6 rounded-xl ">Progress Bar</Link>
                </div>
                <div className="bg-blue-600 shadow-lg text-white w-1/3 h-[160px] flex items-center justify-center rounded-xl transition-[translate, bg] duration-300 hover:bg-blue-500 hover:-translate-y-4">
                    <Link to="/scroll-animation" className="font-bold text-xl bg-white text-black py-5 px-6 rounded-xl ">Scroll Animation</Link>
                </div>
            </div>
        </div>
    );
}
          
export default Home;