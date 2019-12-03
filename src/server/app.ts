import express from "express";
import fetch from "node-fetch";
import qs from "qs";
const PORT = 4000;
const PIXABAY_URL = "https://pixabay.com/api/?";
const PIXABAY_API_KEY = "11979721-01914f404087f7fb67b1824ff";

const GIPHY_URL = "https://api.giphy.com/v1/gifs/search?";
const GIPHY_API_KEY = "NqC2EAHFi0GvsTrIb6923eStEmERwvps";

const englishLang = "en";
const limit = 3;

const app = express();

app.get("/search", async (req, res) => {
  const searchTerm = req.query.searchTerm;

  const pixabyParams = qs.stringify({
    key: PIXABAY_API_KEY,
    q: searchTerm,
    lang: englishLang,
    per_page: limit
  });

  const giphyParams = qs.stringify({
    api_key: GIPHY_API_KEY,
    q: searchTerm,
    lang: englishLang,
    limit
  });
  const pixabyApiUrl = PIXABAY_URL + pixabyParams;
  const giphyApiUrl = GIPHY_URL + giphyParams;
  const giphyResponse = await fetch(giphyApiUrl).then(res => res.json());

  const giphy = giphyResponse.data.map(
    ({ id, title, source, images: { downsized } }: any) => ({
      id,
      pageURL: source,
      contentUrl: downsized.url,
      description: title
    })
  );

  const pixabyResponse = await fetch(pixabyApiUrl).then(res => res.json());
  const pixaby = pixabyResponse.hits.map(
    ({ pageURL, webformatURL, id, tags }: any) => ({
      id,
      pageURL,
      contentUrl: webformatURL,
      description: tags
    })
  );

  res.send({ pixaby, giphy });
});

app.listen(PORT, function() {
  console.log(`Server is listening on port ${PORT}`);
});
