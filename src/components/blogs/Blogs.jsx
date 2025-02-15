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
        <div>
        </div>
    );
};

export default Blogs;