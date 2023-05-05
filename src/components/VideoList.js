import React from 'react'
import VideoItem from './VideoItem';
import { Grid } from '@mui/material';


export default function VideoList({videos , onVideoSelect}) {
    const listOfVideos = videos.map((video,id) => <VideoItem onVideoSelect={onVideoSelect} key={id} video={video} ></VideoItem>)
  return (
   <>
   <Grid container spacing={10}>
    {listOfVideos}
   </Grid>
   </>
  )
}
