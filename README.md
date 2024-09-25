# YouTube Download Helper

A simple Node.js package to search for YouTube videos and get download URLs for MP4 and MP3 formats.

## Installation

```
npm install downloader-by-abro
```

## Usage

```javascript
require('dotenv').config();
const YouTubeHelper = require('downloader-by-abro');

const ytHelper = new YouTubeHelper(process.env.YOUTUBE_API_KEY);

// Search for videos
ytHelper.searchVideos('Node.js tutorial', 5)
  .then(videos => console.log(videos))
  .catch(err => console.error(err));

// Get download URLs
ytHelper.getDownloadUrls('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  .then(urls => console.log(urls))
  .catch(err => console.error(err));
```

## API

### `new YouTubeHelper(apiKey)`

Creates a new instance of the YouTube helper.

- `apiKey`: Your YouTube Data API key.

### `searchVideos(query, maxResults)`

Searches for YouTube videos.

- `query`: The search query.
- `maxResults`: Maximum number of results to return (default: 10).

Returns a Promise that resolves to an array of video objects.

### `getDownloadUrls(videoUrl)`

Gets download URLs for a YouTube video.

- `videoUrl`: The YouTube video URL.

Returns a Promise that resolves to an object containing MP4 and MP3 download URLs.

## Setting up the API Key

1. Go to the [Google Developers Console](https://console.developers.google.com/).
2. Create a new project or select an existing one.
3. Enable the YouTube Data API v3 for your project.
4. Create credentials (API key) for the YouTube Data API v3.
5. Store your API key securely (e.g., in a .env file) and never commit it to version control.

## License

MIT
