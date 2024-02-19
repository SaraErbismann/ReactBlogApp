import BlogPost from "./BlogPost";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

export default function BlogList({refresh}) {
  
  // initialize the useState with the values existing in localStorage or an empty array
  const [blogPosts, setBlogPosts] = useState(() => { 
    const saved = localStorage.getItem("blogPost"); 
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  //set LocalStorage data to blogPosts whenever refresh is changed
  useEffect(() => {
    setBlogPosts(JSON.parse(localStorage.getItem('blogPost')));
    console.log('BlogList refreshed!');
  }, [refresh]);
  
  //map blogPosts and push data to BlogPost component as props
  return (
    <>
    <div className="blog-list">
      <h2>See all posts</h2>
      {blogPosts.map((blogPost, index) => {
        return <BlogPost key={index} title={blogPost.title} content={blogPost.content} />
      })}
    </div>
    </>
  );
}

//validate prop types
BlogList.propTypes = {
  refresh: PropTypes.bool, // Adjust the PropTypes based on the actual type of the refresh prop
};