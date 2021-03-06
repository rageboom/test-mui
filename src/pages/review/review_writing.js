import React, { useState, useCallback } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Box,
  Grid,
  Typography,
  TextareaAutosize,
  Rating,
  CssBaseline,
} from '@mui/material';

export default function ReviewWrite({ data, isShow, setVisible }) {
  const [rating, setRating] = useState(5);
  const handleClose = (event) => {
    setVisible(false, event);
  };
  const handleSave = () => {};
  const handleChangeRating = useCallback(
    (event, newValue) => setRating(newValue),
    []
  );
  return (
    <Dialog open={isShow} onClose={handleClose}>
      <DialogTitle>리뷰 작성</DialogTitle>
      <DialogContent>
        <Grid container sx={{ padding: '10px 0' }}>
          <Grid item xs={2}>
            <Typography variant="subtitle1">충전소</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1">충전소</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="subtitle1">날짜</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1">충전소</Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" sx={{ padding: '10px 0' }}>
          <Grid item xs={1}>
            <Typography variant="subtitle1">평점</Typography>
          </Grid>
          <Grid item xs={3}>
            <Rating
              name="rating"
              value={rating}
              defaultValue={5}
              precision={1}
              onChange={handleChangeRating}
            />
          </Grid>
          <CssBaseline></CssBaseline>
          <Grid item xs>
            <Typography variant="subtitle1">{rating}</Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" sx={{ padding: '10px 0' }}>
          <Grid item xs={1}>
            <Typography variant="subtitle1">리뷰</Typography>
          </Grid>
          <Grid item xs={3}>
            <TextareaAutosize
              placeholder="리뷰를 적어 주세요."
              minRows={3}
              style={{ width: 500 }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSave}>Save</Button>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
