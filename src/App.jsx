
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmark from './components/bookmark/Bookmark'
import Header from './components/header/Header'

function App() {

  return (
    <>
    <Header></Header> 
    <div className='md:flex mx-10 gap-5 my-7'>
    <Blogs></Blogs>
    <Bookmark></Bookmark>

    </div>
    </>
  )
}

export default App
