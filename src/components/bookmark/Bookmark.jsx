const Bookmark = ({bookmarks}) => {
    return (
        <div className="w-1/3 border border-green-300 min-h-screen rounded-md">
            <h1 className="text-3xl text-center">Bookmark:{bookmarks.length}</h1>
        </div>
    );
};

export default Bookmark;