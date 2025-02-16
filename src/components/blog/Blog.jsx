import PropTypes from "prop-types";
const Blog = ({ blog }) => {
    const {title, cover, author, author_img, hashtags, reading_time } = blog;
    return (
        <div>
            <img src={cover} alt="" />
            <div className="flex items-center justify-between">
                <div className="flex gap-3 py-2 items-center">
                    <img className="w-12 h-12" src={author_img} alt="" />
                    <div>
                        <h3 className="font-bold text-lg">{author}</h3>
                        <h3 className="">{title}</h3>
                    </div>
                </div>
                <div>
                <h2>{reading_time} <span>min Read</span></h2>
                </div>
            </div>
        </div>

    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,

}
export default Blog;