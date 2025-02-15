import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blog, setBlog] = useState([]);
    console.log(blog)
    useEffect(() =>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data =>setBlog(data))
    },[])
    return (
        <div className=" w-2/3">
            <h2 className="text-3xl">blogs</h2>
        </div>
    );
};

export default Blogs;