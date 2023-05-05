import React from 'react';
import './App.css';
import youtube from './api/youtube';
import { Grid } from '@mui/material';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';

class App extends React.Component {

  state = {
    video : [] , 
    selectedVideo : null
  }

  handleSubmit = async (searchTerm) => {
    const response =  await youtube.get('search' , {
      params : {
        part : 'snippet',
        maxResults : 5 ,
        key : 'AIzaSyDByk7bsrJkhrwhJ650Dr00Vr1BJ0oPm50',
        q: searchTerm
    }
    });
    console.log(response);
    this.setState( { video : response.data.items , selectedVideo : response.data.items[1] });
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo : video})
  }

  render() {
    const { video , selectedVideo } = this.state;
    return (
    <div className="App">
     <Grid justify='center' container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={this.handleSubmit}/>
          </Grid>
          <Grid item xs={8}>
           <VideoDetail video={selectedVideo}/>
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={video} onVideoSelect={this.onVideoSelect}></VideoList>
          </Grid>
        </Grid>
      </Grid>
     </Grid>
    </div>
    );
}
}

export default App;
