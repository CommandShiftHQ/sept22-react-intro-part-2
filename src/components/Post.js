import React, {useState} from "react";
import PropTypes from "prop-types";

import "../styles/post.css"

const Post = ({post, handleUpvote}) => {
  const [votes, setVotes] = useState(0);

  const handleClick = () => {
    setVotes(prev => prev + 1)
    handleUpvote(title)
  }

  const {title, author, date, isPublished, body, tags} = post;
  return (
    <div className="post">
      <div className="post-heading">
        <h2>{title}</h2>
        {isPublished ? <p>{body}</p> : <p>Coming soon!</p>}
      </div>
      <div className="post-counter">
      <span>Upvotes: {votes}</span>
        <button type="button" onClick={handleClick}>Click to upvote!</button>
      </div>
      <div className="post-author">Author: {author}</div>
      <div className="post-date">Published: {date}</div>
      <h3>Tags:</h3>
      <ul>
        {tags.map((tag, index) => {
          return <li key={index}>{tag}</li>
        })}
      </ul>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    author: PropTypes.string,
    date: PropTypes.string,
    isPublished: PropTypes.bool
  }).isRequired,
  handleUpvote: PropTypes.func.isRequired
}

export default Post;
