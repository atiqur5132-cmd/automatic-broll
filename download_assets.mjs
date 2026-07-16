import fs from "fs";
import path from "path";
import https from "https";

const libertyVideoUrl = "https://video.twimg.com/amplify_video/2077601869476827136/vid/avc1/480x270/JU_7pzc0-aHl2uAV.mp4?tag=29";
const kimiVideoUrl = "https://video.twimg.com/amplify_video/2077452830621958144/vid/avc1/480x270/7S82pLrm6zi3Onud.mp4?tag=28";

const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    console.log(`Downloading ${url} -> ${dest}...`);
    const file = fs.createWriteStream(dest);
    
    https.get(url, (response) => {
      // Handle redirects if any
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' Status Code: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      file.on("finish", () => {
        file.close();
        console.log(`Finished downloading ${dest}`);
        resolve();
      });
    }).on("error", (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
};

const run = async () => {
  try {
    const pubDir = path.resolve("public");
    if (!fs.existsSync(pubDir)) {
      fs.mkdirSync(pubDir);
    }
    
    const dest1 = path.join(pubDir, "liberty_voxel.mp4");
    const dest2 = path.join(pubDir, "kimi_demo.mp4");
    
    await downloadFile(libertyVideoUrl, dest1);
    await downloadFile(kimiVideoUrl, dest2);
    
    console.log("ALL REAL MEDIA ASSETS DOWNLOADED SUCCESSFULLY!");
  } catch (error) {
    console.error("Error downloading assets:", error);
    process.exit(1);
  }
};

run();
