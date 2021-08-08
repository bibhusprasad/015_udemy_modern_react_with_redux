import axios from 'axios';

const KEY = 'AIzaSyBhGzdiaExf6RQTTrGCAr7SrcX_0jDAzX0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
