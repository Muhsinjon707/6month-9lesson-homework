import { useEffect, useRef, useState } from "react";

const Validation = () => {
    const nameRef = useRef("");
    const emailRef = useRef("");

    const [users, setUsers] = useState([]);

    const [message, setMessage] = useState("");

    const validate = (name, email) => {
        let msg = '';
        if (name.length < 3) {
            msg = ("Name length should be at least 3 characters?!");
            return false;
        }

        if (!name) {
            msg = ("You didn't type in name field?!");
            return false;
        }

        if (!email) {
            msg = ("You didn't type in email field?!");
            return false;
        }

        if (!email.includes("@")) {
            msg = ("Email field should contain '@' character!!");
            return false;
        }

        if (!email.endsWith("gmail.com")) {
            msg = ("Email should end with gmail.com");
            return false;
        }

        setMessage(msg);
        return true;
    };

    const handleValidate = (e) => {
        e.preventDefault();

        const isValid = validate(nameRef.current.value, emailRef.current.value);

        if (!isValid) {
            setMessage("Something went wrong...");
            return;
        }

        let user = {
            id: Date.now(),
            name: nameRef.current.value,
            email: emailRef.current.value
        };

        let copied = [...users];
        copied.push(user);
        setUsers(copied);

        localStorage.setItem("users", JSON.stringify(copied));

        setMessage("Successfully registered");
        console.log("User: ", user);

        nameRef.current.value = "";
        emailRef.current.value = "";
    };

    const handleClear = () => {
        localStorage.setItem("users", JSON.stringify([]));
    };

    const deleteOnlyThis = (id) => {
        let copied = [...users];

        copied = copied.filter(user => user.id !== id);

        setUsers(copied);

        localStorage.setItem("users", JSON.stringify(copied));
    };

    useEffect(() => {
        let storedData = JSON.parse(localStorage.getItem("users"));
        if (storedData) {
            setUsers(storedData || []);
        } else {
            setUsers([]);
        }
    }, []);

    return (
        <div className="w-full">
            <h2 className="mx-auto w-2/5 mt-5 font-bold text-2xl">Form Validation</h2>
            <form className="w-[600px] border border-black my-8 mx-auto px-5 py-5 rounded-lg flex flex-col gap-8">
                <label htmlFor="name" className="border-b border-black pb-3">
                    <input ref={nameRef} className="w-full px-5 py-2 outline-none border-none focus:border-blue-500 transition-translate duration-500 active:-translate-y-5" type="text" id="name" name="name" placeholder="Enter name..." />
                </label>
                <label htmlFor="email" className="border-b border-black pb-3">
                    <input ref={emailRef} className="w-full px-5 py-2 outline-none border-none focus:border-blue-500 transition-translate duration-500 active:-translate-y-5" type="email" id="email" name="email" placeholder="Enter email..." />
                </label>

                <div className="w-full flex items-center justify-between">
                    <button onClick={handleValidate} className="bg-green-600 w-1/5 text-white py-2 mx-auto">Validate</button>
                    <button onClick={handleClear} className="bg-blue-600 w-1/5 text-white py-2 mx-auto">Clear All</button>
                </div>
            </form>

            {
                message && <h2 className="bg-blue-600 px-4 py-3 w-2/5 mx-auto rounded-lg text-white text-lg font-normal">{message}</h2>
            }

            <div className="w-full flex flex-wrap flex-1 gap-4 items-start justify-center content-start mt-10 mx-auto">
                {
                    users.length > 0 && users.map(user => {
                        return (
                            <div key={user.id} className="w-1/3 flex flex-col items-start justify-center border-2 border-black rounded-md p-5">
                                <h2>ID: {user.id}</h2>
                                <h3>Name: {user.name}</h3>
                                <p>email: {user.email}</p>
                                <button onClick={() => { deleteOnlyThis(user.id); }} className="self-end bg-red-500 transition-bg duration-300 py-2 px-3 text-white hover:bg-red-600">Delete</button>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Validation;