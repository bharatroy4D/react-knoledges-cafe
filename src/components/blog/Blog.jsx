import PropTypes from "prop-types";
import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({ blog , handleBookmarks}) => {
    const { title, cover, author, author_img, hashtags, reading_time } = blog;
    return (
        <div className="mb-12">
            <img src={cover} alt="" />
            <div className="flex items-center justify-between">
                <div className="flex gap-3 py-5 items-center">
                    <img className="w-12 h-12" src={author_img} alt="" />
                    <div>
                        <h3 className="font-bold text-lg">{author}</h3>
                        <h3 className="">{title}</h3>
                    </div>
                </div>
                <div>
                    <h2 className="flex items-center gap-2">{reading_time} <span>min Read</span>
                            <button onClick={() =>handleBookmarks(blog)} className="text-2xl"><IoBookmarkOutline /></button>
                    </h2>
                </div>
            </div>
            <h2 className="text-3xl font-bold">How to get your first job
                as a <br /> self-taught programmer</h2>

            <p className="py-5">
                {
                    hashtags.map((hash, idx) =><span key={ idx}>{hash}</span>)
                }
            </p>
            <button className="underline text-blue-500">Mark is read</button>
        </div>

    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks:PropTypes.func.isRequired,

}
export default Blog;