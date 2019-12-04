export interface Image {
  contentUrl: string;
  description: string;
  id: number;
  pageURL: string;
  type: string;
}
export interface GalleryProps {
  searchTerm: string;
  filter?: string;
}
export interface SearchComponentProps {
  getSearchTerm: (value: string) => void;
  getFilterOption: (value: string) => void;
}
