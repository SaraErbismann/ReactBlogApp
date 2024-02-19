import './App.css'
import AddBlogPost from './components/AddBlogPost'
import BlogList from './components/BlogList'
import { useState } from 'react'

function App() {
  //state that holds a boolen value for when the localStorage is updated
  const [refresh, setRefresh] = useState(false); 

  //function that sets the refresh state to the opposite ince called
  const isRefreshed = () => {
    setRefresh(!refresh);
  };
  
  // AddBlogPost and Bloglist will have isRefreshed and refresh as props
  return (
    <>
      <figure>
      <header>
          <h1>Blog app</h1>
      </header>
      <figcaption><a href="https://www.freepik.com/free-photo/eucalyptus-silver-dollar-white-marble-banner_17848547.htm#page=2&query=blog%20header%20image&position=11&from_view=search&track=ais&uuid=a97ee2cc-6bca-4d38-9067-6fa1d48bc430">Image by rawpixel.com</a> on Freepik</figcaption>
      </figure>
      <div className="container">
      <AddBlogPost onRefresh={isRefreshed} />
      <BlogList refresh={refresh} />
      </div>
    </>
  )
}

export default App
