import express, { Response, Request, Express } from "express";
import fetch from "node-fetch";
import qs from "qs";
import cors from "cors";

const options: cors.CorsOptions = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token"
  ],
  credentials: true,
  origin: "*"
};

const PORT = 4000;
const PIXABAY_URL = "https://pixabay.com/api/?";
const PIXABAY_API_KEY = "11979721-01914f404087f7fb67b1824ff";

const GIPHY_URL = "https://api.giphy.com/v1/gifs/search?";
const GIPHY_API_KEY = "NqC2EAHFi0GvsTrIb6923eStEmERwvps";

const englishLang = "en";
//number of items from api
const limit = 3;

const app = express();

app.use(cors(options));
app.options("*", cors(options));
interface PrepareParamsInterface {
  searchTerm: string;
  isPixaby: boolean;
}
const prepareParams = ({ searchTerm, isPixaby }: PrepareParamsInterface) => {
  const params = isPixaby
    ? {
        key: PIXABAY_API_KEY,
        q: searchTerm,
        lang: englishLang,
        per_page: limit
      }
    : {
        api_key: GIPHY_API_KEY,
        q: searchTerm,
        lang: englishLang,
        limit
      };

  return qs.stringify(params);
};

app.get("/search", async (request: Request, response: Response) => {
  const searchTerm = request.query.searchTerm;

  const pixabyParams = prepareParams({ searchTerm, isPixaby: true });

  const giphyParams = prepareParams({ searchTerm, isPixaby: false });

  const pixabyApiUrl = PIXABAY_URL + pixabyParams;
  const giphyApiUrl = GIPHY_URL + giphyParams;

  const giphyResponse = await fetch(giphyApiUrl)
    .then(res => {
      if (res.status !== 200) {
        throw new Error(
          JSON.stringify({ status: res.status, message: res.statusText })
        );
      }
      return res.json();
    })
    .catch(function(res) {
      const giphyRes = JSON.parse(res.message);
      response.status(400).send({ ...giphyRes });
      return;
    });

  const giphy = giphyResponse.data.map(
    ({ id, title, source, images: { downsized } }: any) => ({
      id,
      pageURL: source,
      contentUrl: downsized.url,
      description: title,
      type: "gif"
    })
  );

  const pixabyResponse = await fetch(pixabyApiUrl)
    .then(res => {
      return res.json();
    })
    .catch(function(res) {
      response.status(400).send({ ...res });
    });
  const pixaby = pixabyResponse.hits.map(
    ({ pageURL, webformatURL, id, tags }: any) => ({
      id,
      pageURL,
      contentUrl: webformatURL,
      description: tags,
      type: "image"
    })
  );
  const images = pixaby.concat(giphy);

  console.log("zaraz zwroce!!!");
  response.status(200).send({ data: { images, count: images.length } });
  //TODO:error handling
});

app.listen(PORT, function() {
  console.log(`Server is listening on port ${PORT}`);
});
