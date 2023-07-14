var ffmpeg = require("ffmpeg");

// Constants
const m3u8Url =
  "https://live.meesho.com/ivs/v1/847438129436/pYfpV38XFHDe/2023/7/13/12/59/lUjKVvd1QSYR/media/hls/master.m3u8";
const outputMp3Path = "/path/to/output.mp3";
const gcpBucketName = "live-gen-ai-code";
// const gcpBucketUrl = `https://storage.googleapis.com/${gcpBucketName}/output.mp3`;
// const apiUrl = 'https://your-api-endpoint.com/transcribe';

// Convert M3U8 to MP3 using FFmpeg
const convertM3U8ToMP3 = () => {
  try {
    var process = new ffmpeg(m3u8Url);
    process.then(
      function (video) {
        video.fnExtractSoundToMP3("audio/subs.mp3", (err) => {
          console.log("fnExtractSoundToMP3 : ", err);
        });
      },
      function (err) {
        console.log("Error: " + err);
      }
    );
  } catch (e) {
    console.log(e.code);
    console.log(e.msg);
  }
};

function main() {
  convertM3U8ToMP3();
}

export default main;
