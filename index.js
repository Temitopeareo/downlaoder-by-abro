const YouTubeHelper = require('./youtube-utils');
const ytHelper = new YouTubeHelper('AIzaSyCQIAvY9aNozPzjYQBJepDVcDA9ktNPQ_I')


This is the Api I got used credentials);
// Get download URLs
ytHelper.getDownloadUrls('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  .then(urls => console.log(urls))
  .catch(err => console.error(err));


module.exports = YouTubeHelper;