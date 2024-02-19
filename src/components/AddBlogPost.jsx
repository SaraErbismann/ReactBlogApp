import { useState } from "react"; 
import { useEffect } from "react";
import PropTypes from 'prop-types';

export default function AddBlogPost({isRefreshed}) {

    // set a state object to handle user input
    const [blogPost, setBlogPost] = useState({ 
        title: "",
        content: ""
    });
    
    //states for expanding content and changing button text
    const [expanded, setExpanded] = useState(false);
    const [button, setButton] = useState("Press here");

    // initialize the useState with the values existing in localStorage or an empty array
    const [postList, setPostList] = useState(() => { 
        const saved = localStorage.getItem("blogPost"); 
        const initialValue = JSON.parse(saved);
        return initialValue || [];
    });
    
    //handle click on the submit button
    const handleClick = () => { 
        blogPost.title && blogPost.content ? //check that both fields have input
        setPostList([...postList, blogPost]):
        alert("Fill in both fields");

        setBlogPost({title:"", content:""}); //set both input and textarea fiels as empty after click
        alert("Your blog post has been saved!");
        setExpanded("false");
        isRefreshed(); //If a new blog post is submitted, the isRefreshed function is called
    }

    //When the "press here" button is pressed, expanded value is set to the opposite value and button text is changed
    const handleExpand = () => {
        setExpanded(!expanded);
        !expanded ? 
        setButton("Close"):
        setButton("Press here")
    }

    //useEffect hook to store postLists to localStorage
    useEffect(() => { 
        localStorage.setItem("blogPost", JSON.stringify(postList));
      }, [postList]);

    return(
        <>
        <h2>Add a new blog post</h2>
        <span className="showMore" onClick={handleExpand}>
            <button>{button}</button>
        </span>
        {
            expanded ? (
                <div className="add-post">
                <label htmlFor="title">Enter title: <input id ="title" name="title" value={blogPost.title} onChange={(e) => setBlogPost({...blogPost, title: e.target.value})}/></label>
                
                <br />
                <label htmlFor="content">Enter content:</label>
                <textarea id="content" name="content" value={blogPost.content} onChange={(e) => setBlogPost({...blogPost, content: e.target.value})} ></textarea>
                <br />
                <button onClick={handleClick}>Submit</button>
                <br />
                </div>

            ) : null }

        </>
    );
}

//validate prop types
AddBlogPost.propTypes = {
    isRefreshed: PropTypes.func.isRequired,
  };