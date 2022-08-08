import React from 'react';

const CommentCreate = ({ postId }) => {
  return <div>
    <form>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Leave a comment</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>;
}

export default CommentCreate;