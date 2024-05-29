import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText, Alert, Avatar, ListItemAvatar, IconButton } from '@mui/material';
import { Favorite, FavoriteBorder, Edit } from '@mui/icons-material';

const CommentPage = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isEmptyComment, setIsEmptyComment] = useState(false);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedCommentText, setEditedCommentText] = useState('');

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get('https://66572ca39f970b3b36c83f05.mockapi.io/api/v1/comments');
      console.log("response", response);
      setComments(response.data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleAddComment = async () => {
    if(!newComment){
      setIsEmptyComment(true);
      return;
    }
    setIsEmptyComment(false);
    try {
      const response = await axios.post('https://66572ca39f970b3b36c83f05.mockapi.io/api/v1/comments', {
        name: 'Test User', 
        body: newComment,
        likes: 0,
        createdAt: new Date().toISOString(),
      });
      setComments([response.data, ...comments, ]); 
      setNewComment(''); 
    } catch (error) {
      console.error('Error adding comment:', error);
    }
  };
  const handleLikeComment = async (commentId) => {
    try {
      const updatedComments = comments.map(comment => {
        if (comment.id === commentId) {
          return { ...comment, likes: (comment.likes ?? 0) + 1, isLiked: true };
        }
        return comment;
      });
      setComments(updatedComments);

      await axios.put(`https://66572ca39f970b3b36c83f05.mockapi.io/api/v1/comments/${commentId}`, { likes: (comments.find(comment => comment.id === commentId)?.likes || 0) + 1, isLiked: true });
    } catch (error) {
      console.error('Error liking comment:', error);
    }
  };

  const handleUnlikeComment = async (commentId) => {
    try {
      const updatedComments = comments.map(comment => {
        if (comment.id === commentId && comment.likes > 0) {
          return { ...comment, likes: comment.likes - 1, isLiked: false };
        }
        return comment;
      });
      setComments(updatedComments);

      await axios.put(`https://66572ca39f970b3b36c83f05.mockapi.io/api/v1/comments/${commentId}`, { likes: Math.max(comments.find(comment => comment.id === commentId).likes - 1, 0), isLiked: false });
    } catch (error) {
      console.error('Error unliking comment:', error);
    }
  };

  const handleEditComment = async (commentId, newText) => {
    try {
      const updatedComments = comments.map(comment => {
        if (comment.id === commentId) {
          return { ...comment, body: newText };
        }
        return comment;
      });
      setComments(updatedComments);

      await axios.put(`https://66572ca39f970b3b36c83f05.mockapi.io/api/v1/comments/${commentId}`, { body : newText });
      setEditingCommentId(null);
      setEditedCommentText("");
    } catch (error) {
      console.error('Error editing comment:', error);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h6" gutterBottom>
        Add a Comment
      </Typography>
      {isEmptyComment && <Alert severity="error">{"Please a comment"}</Alert>}
      <TextField
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        placeholder="Write your comment here..."
        margin="normal"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddComment}>
        Add Comment
      </Button>
      <Typography variant="h4" gutterBottom>
        Comments
      </Typography>
      <List>
        {comments.map((comment) => (
          <ListItem key={comment.id}>
             <ListItemAvatar>
              <Avatar alt={comment.author} src={`${comment.avatar}`} />
            </ListItemAvatar>
            {editingCommentId !== comment.id && <ListItemText primary={comment.name} secondary={comment.body} />}
            {editingCommentId === comment.id && <><TextField
                multiline
                rows={4}
                variant="outlined"
                fullWidth
                placeholder="Write your comment here..."
                margin="normal"
                value={editedCommentText}
                onChange={(e) => setEditedCommentText(e.target.value)}
              />
              <Button variant="contained" color="primary" onClick={()=> handleEditComment(editingCommentId, editedCommentText)}>
                Update Comment
              </Button></>}
            {!comment.isLiked && <IconButton onClick={() => handleLikeComment(comment.id)} color="primary">
              <Favorite />
            </IconButton>}
            {comment.isLiked &&<IconButton onClick={() => handleUnlikeComment(comment.id)} color="primary">
              <FavoriteBorder />
            </IconButton>}
            <span>{comment.likes}</span>
           
            <IconButton onClick={() => {
              setEditingCommentId(comment.id);
              setEditedCommentText(comment.body);
            }}>
              <Edit />
            </IconButton>
          </ListItem>
        ))}
      </List>
      
    </Container>
  );
};

export default CommentPage;
