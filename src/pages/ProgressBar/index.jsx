import { useRef } from "react";

const ProgressBar = () => {
    const progressRef = useRef();
    const buttonRef = useRef();

    const handleIncrement = () => {
        console.log(progressRef.current.offsetWidth);

        if (progressRef.current.offsetWidth < 500) {
            let newWidth = progressRef.current.offsetWidth + 50;
            progressRef.current.style.width = newWidth + "px";

            if (progressRef.current.offsetWidth >= 100) {
                progressRef.current.style.backgroundColor = "green";
            }

            if (progressRef.current.offsetWidth >= 250) {
                progressRef.current.style.backgroundColor = "yellow";
            }

            if (progressRef.current.offsetWidth >= 400) {
                progressRef.current.style.backgroundColor = "red";
            }
        } else {
            buttonRef.current.setAttribute("disabled", true);
            buttonRef.current.style.opacity = ".4";
        }
    };

    const handleClear = () => {
        progressRef.current.style.width = 0;
        progressRef.current.style.backgroundColor = "bg-gray-400";
        buttonRef.current.removeAttribute("disabled");
        buttonRef.current.style.opacity = "1";
    };

    return (
        <div className="flex flex-col gap-4 mx-auto w-full mt-10 items-center">
            <div className="w-[500px] relative">
                <hr className="absolute w-[500px] h-3 bg-gray-400" />
                <hr ref={progressRef} className="absolute w-0 h-3 bg-blue-500 transition-all duration-1000" />
            </div>
            <div className="flex gap-4 mt-5">
                <button ref={buttonRef} onClick={handleIncrement} className="bg-gray-300 px-5 py-3 rounded-lg text-white transition-bg duration-300 ease-in hover:bg-gray-500">+</button>
                <button onClick={handleClear} className="bg-gray-300 px-5 py-3 rounded-lg text-white transition-bg duration-300 ease-in hover:bg-gray-500">clear</button>
            </div>
        </div>
    );
};

export default ProgressBar;