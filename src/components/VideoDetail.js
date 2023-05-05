import React from "react";
import { Paper , Typography } from '@mui/material';
const VideoDetail = ({video})=> {

    if(!video) return <div>Loading...</div>

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <>
        <Paper elevation={6} style={{height : '65%'}}>
            <iframe src={videoSrc} frameborder="0" title="Video Player" width='100%' height='100%'></iframe>
        </Paper>
        <Paper elevation={6} style={{padding : '15px'}}>
        <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
        <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
        <Typography variant="subtitle2">{video.snippet.description}</Typography>
        </Paper>
        </>
    )
}
export default VideoDetail;