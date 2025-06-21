export interface ImageUrl {
  small: string;
  regular: string;
  full: string;
}

export interface User {
  name: string;
  username: string;
}

export interface Image {
  id: string;
  alt_description: string | null;
  urls: ImageUrl;
  likes: number;
  user: User;
}

export interface ApiResponse {
  total: number;
  total_pages: number;
  results: Image[];
}
