const axios = require('axios');
const ytdl = require('ytdl-core');

class YouTubeHelper {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://www.googleapis.com/youtube/v3';
  }

  async searchVideos(query, maxResults = 10) {
    try {
      const response = await axios.get(`${this.baseUrl}/search`, {
        params: {
          part: 'snippet',
          q: query,
          type: 'video',
          maxResults: maxResults,
          key: this.apiKey
        }
      });

      return response.data.items.map(item => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.medium.url
      }));
    } catch (error) {
      throw new Error(`Error searching videos: ${error.message}`);
    }
  }

  async getDownloadUrls(videoUrl) {
    try {
      const info = await ytdl.getInfo(videoUrl);
      
      const mp4Url = ytdl.chooseFormat(info.formats, { quality: 'highest', filter: 'audioandvideo' }).url;
      const mp3Url = ytdl.chooseFormat(info.formats, { quality: 'highestaudio', filter: 'audioonly' }).url;

      return {
        mp4: mp4Url,
        mp3: mp3Url
      };
    } catch (error) {
      throw new Error(`Error getting download URLs: ${error.message}`);
    }
  }
}

module.exports = YouTubeHelper;