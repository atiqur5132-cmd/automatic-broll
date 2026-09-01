import fs from 'fs';

const urls = [
  'https://api.fxtwitter.com/Priyannkaaaa/status/2094644600053068236',
  'https://api.fxtwitter.com/buildwithrajath/status/2094643707329073557',
  'https://api.fxtwitter.com/Stevie_658jjh/status/2094635741515276430',
  'https://api.fxtwitter.com/AIToolsBrief/status/2094533093201731681',
  'https://api.fxtwitter.com/Mr_Salio/status/2093305143328383414',
  'https://api.fxtwitter.com/0x0SojalSec/status/2093306702804525545',
  'https://api.fxtwitter.com/Mr_Salio/status/2092944367413587986',
  'https://api.fxtwitter.com/0x0SojalSec/status/2093089650202325255',
  'https://api.fxtwitter.com/Mr_Salio/status/2089319650672714220'
];

async function fetchAll() {
  const results = [];
  for (const url of urls) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const data = await res.json();
      if (data.tweet) {
        results.push({
          url: data.tweet.url,
          author: `${data.tweet.author.name} (@${data.tweet.author.screen_name})`,
          text: data.tweet.text,
          created_at: data.tweet.created_at,
          media: data.tweet.media,
          quote: data.tweet.quote ? {
            author: data.tweet.quote.author?.screen_name,
            text: data.tweet.quote.text
          } : null
        });
      } else {
        results.push({ url, error: 'Tweet not found or private' });
      }
    } catch (e) {
      results.push({ url, error: e.message });
    }
  }

  fs.writeFileSync('research_tweets.json', JSON.stringify(results, null, 2));
  console.log(`Fetched ${results.length} tweets successfully.`);
}

fetchAll();
