import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Posts = ({ posts }) => (
  <div>
    <h2 className="text-secondary">Past Shout outs!</h2>
    {posts.length > 0 ? (
      posts.map((post) => (
        <div key={post.id}>
          <h3>{post.name}</h3>
          <p>{post.message}</p>
        </div>
      ))
    ) : (
      <span>Add your own!</span>
    )}
  </div>
);

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, {})(Posts);
