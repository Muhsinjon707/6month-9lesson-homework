import { useState, useEffect } from "react";
import axios from "axios";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const ScrollAnimation = () => {
    const [comments, setComments] = useState([]);

    axios.get(`https://jsonplaceholder.typicode.com/comments`)
        .then(response => {
            if (response.status == 200) {
                console.log(response);
                setComments(response.data);
            }
        })
        .catch(error => console.log(error));

    return (
        <motion.div
            variants={fadeIn("up", .2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: .7 }}

            className="w-full flex items-center justify-center flex-wrap gap-3 mt-10">
            {
                comments.length > 0 && comments.map(comment => {
                    return (
                        <motion.div
                            variants={fadeIn("left", .3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: .7 }}

                            className="w-[30%] text-white min-h-[300px] p-5 bg-slate-500 shadow-md border-1 rounded-md flex flex-col items-start justify-center gap-4" key={comment.id}>
                            <h2>ID: <span className="font-bold">{comment.id}</span></h2>
                            <h3>Name: <span className="font-bold">{comment.name}</span></h3>
                            <p>email: <span className="font-bold">{comment.email}</span></p>
                            <p>Text: <span className="font-extrabold">{comment.body}</span></p>
                        </motion.div>
                    );
                })
            }
        </motion.div>
    );
};

export default ScrollAnimation;