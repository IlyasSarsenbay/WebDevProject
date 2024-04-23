// import { Movie } from '../models/movie';

// export const movies: Movie[] = [
//   {
//     id: 1,
//     title: 'Inception',
//     description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
//     genre: { id: 1, name: 'Sci-Fi' },
//     releaseDate: new Date('2010-07-16'),
//     duration: 148,
//     director: 'Christopher Nolan',
//     cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
//     posterImageUrl: 'https://www.example.com/poster_image_1.jpg',
//     trailerUrl: 'https://www.example.com/trailer_1',
//     averageRating: 4.8,
//     totalRatings: 150,
//     company: { id: 1, name: 'Warner Bros. Pictures', description: 'American entertainment company' }
//   },
//   {
//     id: 2,
//     title: 'Interstellar',
//     description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
//     genre: { id: 1, name: 'Sci-Fi' },
//     releaseDate: new Date('2014-11-07'),
//     duration: 169,
//     director: 'Christopher Nolan',
//     cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
//     posterImageUrl: 'https://www.example.com/poster_image_2.jpg',
//     trailerUrl: 'https://www.example.com/trailer_2',
//     averageRating: 4.7,
//     totalRatings: 130,
//     company: { id: 1, name: 'Warner Bros. Pictures', description: 'American entertainment company' }
//   },
//   {
//     id: 3,
//     title: 'The Dark Knight',
//     description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
//     genre: { id: 2, name: 'Action' },
//     releaseDate: new Date('2008-07-18'),
//     duration: 152,
//     director: 'Christopher Nolan',
//     cast:  ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
//     posterImageUrl: 'https://www.example.com/poster_image_3.jpg',
//     trailerUrl: 'https://www.example.com/trailer_3',
//     averageRating: 4.9,
//     totalRatings: 180,
//     company: { id: 1, name: 'Warner Bros. Pictures', description: 'American entertainment company' }
//   },
//   {
//     id: 4,
//     title: 'The Shawshank Redemption',
//     description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
//     genre: { id: 3, name: 'Drama' },
//     releaseDate: new Date('1994-10-14'),
//     duration: 142,
//     director: 'Frank Darabont',
//     cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
//     posterImageUrl: 'https://www.example.com/poster_image_4.jpg',
//     trailerUrl: 'https://www.example.com/trailer_4',
//     averageRating: 4.9,
//     totalRatings: 190,
//     company: { id: 2, name: 'Castle Rock Entertainment', description: 'American entertainment company' }
//   },
//   {
//     id: 5,
//     title: 'The Godfather',
//     description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
//     genre: { id: 4, name: 'Crime' },
//     releaseDate: new Date('1972-03-24'),
//     duration: 175,
//     director: 'Francis Ford Coppola',
//     cast:  ['Marlon Brando', 'Al Pacino', 'James Caan'],
//     posterImageUrl: 'https://www.example.com/poster_image_5.jpg',
//     trailerUrl: 'https://www.example.com/trailer_5',
//     averageRating: 4.8,
//     totalRatings: 160,
//     company: { id: 3, name: 'Paramount Pictures', description: 'American film studio' }
//   },
//   {
//     id: 6,
//     title: 'Pulp Fiction',
//     description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
//     genre: { id: 5, name: 'Thriller' },
//     releaseDate: new Date('1994-10-14'),
//     duration: 154,
//     director: 'Quentin Tarantino',
//     cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
//     posterImageUrl: 'https://www.example.com/poster_image_6.jpg',
//     trailerUrl: 'https://www.example.com/trailer_6',
//     averageRating: 4.7,
//     totalRatings: 170,
//     company: { id: 4, name: 'Miramax Films', description: 'American entertainment company' }
//   },
//   {
//     id: 7,
//     title: 'The Lord of the Rings: The Return of the King',
//     description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
//     genre: { id: 1, name: 'Sci-Fi' },
//     releaseDate: new Date('2003-12-17'),
//     duration: 201,
//     director: 'Peter Jackson',
//     cast: ['Elijah Wood', 'Viggo Mortensen', 'Ian McKellen'],
//     posterImageUrl: 'https://www.example.com/poster_image_7.jpg',
//     trailerUrl: 'https://www.example.com/trailer_7',
//     averageRating: 4.9,
//     totalRatings: 200,
//     company: { id: 5, name: 'New Line Cinema', description: 'American film production studio' }
//   },
//   {
//     id: 8,
//     title: 'Forrest Gump',
//     description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
//     genre: { id: 3, name: 'Drama' },
//     releaseDate: new Date('1994-07-06'),
//     duration: 142,
//     director: 'Robert Zemeckis',
//     cast: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
//     posterImageUrl: 'https://www.example.com/poster_image_8.jpg',
//     trailerUrl: 'https://www.example.com/trailer_8',
//     averageRating: 4.8,
//     totalRatings: 180,
//     company: { id: 6, name: 'Paramount Pictures', description: 'American film studio' }
//   },
//   {
//     id: 9,
//     title: 'The Matrix',
//     description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
//     genre: { id: 1, name: 'Sci-Fi' },
//     releaseDate: new Date('1999-03-31'),
//     duration: 136,
//     director: 'Lana Wachowski, Lilly Wachowski',
//     cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
//     posterImageUrl: 'https://www.example.com/poster_image_9.jpg',
//     trailerUrl: 'https://www.example.com/trailer_9',
//     averageRating: 4.7,
//     totalRatings: 170,
//     company: { id: 7, name: 'Warner Bros. Pictures', description: 'American entertainment company' }
//   },
//   {
//     id: 10,
//     title: 'The Silence of the Lambs',
//     description: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
//     genre: { id: 6, name: 'Horror' },
//     releaseDate: new Date('1991-02-14'),
//     duration: 118,
//     director: 'Jonathan Demme',
//     cast: ['Jodie Foster', 'Anthony Hopkins', 'Lawrence A. Bonney'],
//     posterImageUrl: 'https://www.example.com/poster_image_10.jpg',
//     trailerUrl: 'https://www.example.com/trailer_10',
//     averageRating: 4.8,
//     totalRatings: 190,
//     company: { id: 8, name: 'Orion Pictures', description: 'American film production company' }
//   },
// ];
