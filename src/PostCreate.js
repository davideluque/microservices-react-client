import React from 'react';

const PostCreate = () => {
  return (
    <div>
      <h1>Create a new post</h1>
      <form>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" id="title" placeholder="Enter title" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  ); 
};

export default PostCreate;