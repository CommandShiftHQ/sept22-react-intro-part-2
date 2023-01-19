import React, {useState} from "react";
import Post from "./Post";
import PropTypes from "prop-types";
import "../styles/postlist.css";

const PostList = ({posts}) => {
  const [lastUpvoted, setLastUpvoted] = useState("");

  const handleUpvote = (title) => {
    setLastUpvoted(title)
  }

  return (
    <div className="postlist">
      {lastUpvoted}
      {posts.map((post) => (
        <Post key={post.id} post={post} handleUpvote={handleUpvote} />
      ))}
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      author: PropTypes.string,
      date: PropTypes.string,
      isPublished: PropTypes.bool
    })
  ).isRequired
}

export default PostList;