import axios from 'axios';

const KEY = 'AIzaSyCocFvxIsSLqyK8nAObiR-D6mXxz5Z3DRc';

export default axios.create({
baseURL: 'https://www.googleapis.com/youtube/v3',
params: {
key: KEY,
part: 'snippet',
maxResults: 5,

}
});