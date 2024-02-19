import { useState } from 'react';
import PropTypes from 'prop-types';

function BlogPost({title, content}) {
  //state holding a boolean value to determine whether a post is expanded or not
  const [expanded, setExpanded] = useState(false);
  const [expandText, setExpandText] = useState("Click to read more...");

  // //When the read more text is clicked, expanded value is set to the opposite value and text is changed
  const handleClick = () => {
    setExpanded(!expanded);
    !expanded ?
    setExpandText("Close"):
    setExpandText("Click to read more...")
  }

  //render only title if expanded = false and content if expanded = true
  return (
    <>
      <div className="blog-post">
      <span className="showMore" onClick={handleClick}>
        <h4>{title}</h4>
        <p className="expand">{expandText}</p>
        </span>
        {expanded ? (
          <div className="expanded">
            <p>{content}</p>
          </div>
        ) : null}
      </div>
    </>
  );
}

//validate prop types
BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default BlogPost;