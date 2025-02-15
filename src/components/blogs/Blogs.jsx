import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    console.log(blogs)
    useEffect(() =>{
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data =>setBlogs(data))
    },[])
    return (
        <div className=" w-2/3 ">
            <h2 className="text-3xl">blogs</h2>
            {
                blogs.map(blog =><Blog
                key={blog.id}
                blog ={blog}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;