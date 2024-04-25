import { Company } from "./company";
import { Genre } from "./genre";

export interface Movie {
    id: number;
    title: string;
    description: string;
    genre: Genre;
    release_date: Date;
    duration: number;
    director: string;
    cast: string[];
    poster_image_url: string;
    trailer_url: string;
    average_rating: number;
    total_ratings: number;
    company: Company;
  }