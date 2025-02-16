import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({handleBookmarks}) => {
    const [blogs, setBlogs] = useState([]);
    console.log(blogs)
    console.log(blogs)
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className=" w-2/3 ">
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleBookmarks={handleBookmarks}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;