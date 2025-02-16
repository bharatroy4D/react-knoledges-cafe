
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmark from './components/bookmark/Bookmark'
import Header from './components/header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  function handleBookmarks(blog) {
    const newBookmarks =[...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
    <h1>blogs length:{bookmarks.length}</h1>
      <Header></Header>
      <div className='md:flex mx-10 gap-5 my-7'>
        <Blogs handleBookmarks ={handleBookmarks}></Blogs>
        <Bookmark bookmarks={bookmarks}></Bookmark>
      </div>
    </>
  )
}

export default App
