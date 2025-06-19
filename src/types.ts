export type Image = {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
};

export type ApiImage = {
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  description?: string;
  user: {
    name: string;
  };
  likes: number;
};