export interface PrepareParamsInterface {
  searchTerm: string;
  isPixaby: boolean;
}

export interface GiphyResInterface {
  id: string;
  title: string;
  source: string;
  images: any;
}

export interface PixabyResInterface {
  pageURL: string;
  webformatURL: string;
  id: string;
  tags: string;
}
