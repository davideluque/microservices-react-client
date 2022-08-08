import React, { useState } from 'react';
import axios from 'axios';

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
  
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, { content });
  
    setContent('');
  };

  return <div>
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Leave a comment</label>
        <textarea value={content} onChange={e => setContent(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>;
}

export default CommentCreate;