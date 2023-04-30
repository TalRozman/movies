export const data:
    {
        genres: string[],
        movies: {
            id: number,
            title: string;
            year: string;
            runtime: string;
            genres: string[];
            director: string;
            actors: string;
            plot: string;
            posterUrl: string;
            imdbID?: string
        }[]
    }
    = {
    "genres": [
        "Comedy",
        "Fantasy",
        "Crime",
        "Drama",
        "Music",
        "Adventure",
        "History",
        "Thriller",
        "Animation",
        "Family",
        "Mystery",
        "Biography",
        "Action",
        "Film-Noir",
        "Romance",
        "Sci-Fi",
        "War",
        "Western",
        "Horror",
        "Musical",
        "Sport",
        "Short",
        "Documentary"
    ],
    "movies": [
        {
            "id": 2,
            "title": "The Cotton Club",
            "year": "1984",
            "runtime": "127",
            "genres": [
                "Crime",
                "Drama",
                "Music"
            ],
            "director": "Francis Ford Coppola",
            "actors": "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
            "plot": "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg"
        },
        {
            "id": 3,
            "title": "The Shawshank Redemption",
            "year": "1994",
            "runtime": "142",
            "genres": [
                "Crime",
                "Drama"
            ],
            "director": "Frank Darabont",
            "actors": "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
            "plot": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg"
        },
        {
            "id": 4,
            "title": "Crocodile Dundee",
            "year": "1986",
            "runtime": "97",
            "genres": [
                "Adventure",
                "Comedy"
            ],
            "director": "Peter Faiman",
            "actors": "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
            "plot": "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg"
        },
        {
            "id": 5,
            "title": "Valkyrie",
            "year": "2008",
            "runtime": "121",
            "genres": [
                "Drama",
                "History",
                "Thriller"
            ],
            "director": "Bryan Singer",
            "actors": "Tom Cruise, Kenneth Branagh, Bill Nighy, Tom Wilkinson",
            "plot": "A dramatization of the 20 July assassination and political coup plot by desperate renegade German Army officers against Hitler during World War II.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMTg3Njc2ODEyN15BMl5BanBnXkFtZTcwNTAwMzc3NA@@._V1_SX300.jpg"
        },
        {
            "id": 6,
            "title": "Ratatouille",
            "year": "2007",
            "runtime": "111",
            "genres": [
                "Animation",
                "Comedy",
                "Family"
            ],
            "director": "Brad Bird, Jan Pinkava",
            "actors": "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
            "plot": "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg"
        },
        {
            "id": 7,
            "title": "City of God",
            "year": "2002",
            "runtime": "130",
            "genres": [
                "Crime",
                "Drama"
            ],
            "director": "Fernando Meirelles, Kátia Lund",
            "actors": "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",
            "plot": "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg"
        },
        {
            "id": 8,
            "title": "Memento",
            "year": "2000",
            "runtime": "113",
            "genres": [
                "Mystery",
                "Thriller"
            ],
            "director": "Christopher Nolan",
            "actors": "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior",
            "plot": "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNThiYjM3MzktMDg3Yy00ZWQ3LTk3YWEtN2M0YmNmNWEwYTE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            "id": 10,
            "title": "Stardust",
            "year": "2007",
            "runtime": "127",
            "genres": [
                "Adventure",
                "Family",
                "Fantasy"
            ],
            "director": "Matthew Vaughn",
            "actors": "Ian McKellen, Bimbo Hart, Alastair MacIntosh, David Kelly",
            "plot": "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg"
        },
        {
            "id": 11,
            "title": "Apocalypto",
            "year": "2006",
            "runtime": "139",
            "genres": [
                "Action",
                "Adventure",
                "Drama"
            ],
            "director": "Mel Gibson",
            "actors": "Rudy Youngblood, Dalia Hernández, Jonathan Brewer, Morris Birdyellowhead",
            "plot": "As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg"
        },
        {
            "id": 12,
            "title": "Taxi Driver",
            "year": "1976",
            "runtime": "113",
            "genres": [
                "Crime",
                "Drama"
            ],
            "director": "Martin Scorsese",
            "actors": "Diahnne Abbott, Frank Adu, Victor Argo, Gino Ardito",
            "plot": "A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNGQxNDgzZWQtZTNjNi00M2RkLWExZmEtNmE1NjEyZDEwMzA5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            "id": 13,
            "title": "No Country for Old Men",
            "year": "2007",
            "runtime": "122",
            "genres": [
                "Crime",
                "Drama",
                "Thriller"
            ],
            "director": "Ethan Coen, Joel Coen",
            "actors": "Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson",
            "plot": "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_SX300.jpg"
        },
        {
            "id": 15,
            "title": "Looper",
            "year": "2012",
            "runtime": "119",
            "genres": [
                "Action",
                "Crime",
                "Drama"
            ],
            "director": "Rian Johnson",
            "actors": "Joseph Gordon-Levitt, Bruce Willis, Emily Blunt, Paul Dano",
            "plot": "In 2074, when the mob wants to get rid of someone, the target is sent into the past, where a hired gun awaits - someone like Joe - who one day learns the mob wants to 'close the loop' by sending back Joe's future self for assassination.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMTY3NTY0MjEwNV5BMl5BanBnXkFtZTcwNTE3NDA1OA@@._V1_SX300.jpg"
        },
        {
            "id": 16,
            "title": "Corpse Bride",
            "year": "2005",
            "runtime": "77",
            "genres": [
                "Animation",
                "Drama",
                "Family"
            ],
            "director": "Tim Burton, Mike Johnson",
            "actors": "Johnny Depp, Helena Bonham Carter, Emily Watson, Tracey Ullman",
            "plot": "When a shy groom practices his wedding vows in the inadvertent presence of a deceased young woman, she rises from the grave assuming he has married her.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMTk1MTY1NjU4MF5BMl5BanBnXkFtZTcwNjIzMTEzMw@@._V1_SX300.jpg"
        },
        {
            "id": 17,
            "title": "The Third Man",
            "year": "1949",
            "runtime": "93",
            "genres": [
                "Film-Noir",
                "Mystery",
                "Thriller"
            ],
            "director": "Carol Reed",
            "actors": "Joseph Cotten, Alida Valli, Orson Welles, Trevor Howard",
            "plot": "Pulp novelist Holly Martins travels to shadowy, postwar Vienna, only to find himself investigating the mysterious death of an old friend, Harry Lime.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTgwNjExMzUwNjE@._V1_SX300.jpg"
        },
        {
            "id": 18,
            "title": "The Beach",
            "year": "2000",
            "runtime": "119",
            "genres": [
                "Adventure",
                "Drama",
                "Romance"
            ],
            "director": "Danny Boyle",
            "actors": "Leonardo DiCaprio, Daniel York, Patcharawan Patarakijjanon, Virginie Ledoyen",
            "plot": "Twenty-something Richard travels to Thailand and finds himself in possession of a strange map. Rumours state that it leads to a solitary beach paradise, a tropical bliss - excited and intrigued, he sets out to find it.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2ViYTFiZmUtOTIxZi00YzIxLWEyMzUtYjQwZGNjMjNhY2IwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
        },
        {
            "id": 19,
            "title": "Scarface",
            "year": "1983",
            "runtime": "170",
            "genres": [
                "Crime",
                "Drama"
            ],
            "director": "Brian De Palma",
            "actors": "Al Pacino, Steven Bauer, Michelle Pfeiffer, Mary Elizabeth Mastrantonio",
            "plot": "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX300.jpg"
        },
        {
            "id": 20,
            "title": "Sid and Nancy",
            "year": "1986",
            "runtime": "112",
            "genres": [
                "Biography",
                "Drama",
                "Music"
            ],
            "director": "Alex Cox",
            "actors": "Gary Oldman, Chloe Webb, David Hayman, Debby Bishop",
            "plot": "Morbid biographical story of Sid Vicious, bassist with British punk group the Sex Pistols, and his girlfriend Nancy Spungen. When the Sex Pistols break up after their fateful US tour, ...",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjA5NzY4M15BMl5BanBnXkFtZTcwNjQ2NzI5NA@@._V1_SX300.jpg"
        },
        {
            "id": 21,
            "title": "Black Swan",
            "year": "2010",
            "runtime": "108",
            "genres": [
                "Drama",
                "Thriller"
            ],
            "director": "Darren Aronofsky",
            "actors": "Natalie Portman, Mila Kunis, Vincent Cassel, Barbara Hershey",
            "plot": "A committed dancer wins the lead role in a production of Tchaikovsky's \"Swan Lake\" only to find herself struggling to maintain her sanity.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_SX300.jpg"
        },
        {
            "id": 22,
            "title": "Inception",
            "year": "2010",
            "runtime": "148",
            "genres": [
                "Action",
                "Adventure",
                "Sci-Fi"
            ],
            "director": "Christopher Nolan",
            "actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
            "plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
        },
        {
            "id": 23,
            "title": "The Deer Hunter",
            "year": "1978",
            "runtime": "183",
            "genres": [
                "Drama",
                "War"
            ],
            "director": "Michael Cimino",
            "actors": "Robert De Niro, John Cazale, John Savage, Christopher Walken",
            "plot": "An in-depth examination of the ways in which the U.S. Vietnam War impacts and disrupts the lives of people in a small industrial town in Pennsylvania.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzYmRmZTQtYjk2NS00MDdlLTkxMDAtMTE2YTM2ZmNlMTBkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        },
        {
            "id": 24,
            "title": "Chasing Amy",
            "year": "1997",
            "runtime": "113",
            "genres": [
                "Comedy",
                "Drama",
                "Romance"
            ],
            "director": "Kevin Smith",
            "actors": "Ethan Suplee, Ben Affleck, Scott Mosier, Jason Lee",
            "plot": "Holden and Banky are comic book artists. Everything's going good for them until they meet Alyssa, also a comic book artist. Holden falls for her, but his hopes are crushed when he finds out she's gay.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZDM3MTg2MGUtZDM0MC00NzMwLWE5NjItOWFjNjA2M2I4YzgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            "id": 25,
            "title": "Django Unchained",
            "year": "2012",
            "runtime": "165",
            "genres": [
                "Drama",
                "Western"
            ],
            "director": "Quentin Tarantino",
            "actors": "Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, Kerry Washington",
            "plot": "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg"
        },
        {
            "id": 26,
            "title": "The Silence of the Lambs",
            "year": "1991",
            "runtime": "118",
            "genres": [
                "Crime",
                "Drama",
                "Thriller"
            ],
            "director": "Jonathan Demme",
            "actors": "Jodie Foster, Lawrence A. Bonney, Kasi Lemmons, Lawrence T. Wrentz",
            "plot": "A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ2NzkzMDI4OF5BMl5BanBnXkFtZTcwMDA0NzE1NA@@._V1_SX300.jpg"
        },
        {
            "id": 29,
            "title": "Midnight Express",
            "year": "1978",
            "runtime": "121",
            "genres": [
                "Crime",
                "Drama",
                "Thriller"
            ],
            "director": "Alan Parker",
            "actors": "Brad Davis, Irene Miracle, Bo Hopkins, Paolo Bonacelli",
            "plot": "Billy Hayes, an American college student, is caught smuggling drugs out of Turkey and thrown into prison.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMDA5MzkyOF5BMl5BanBnXkFtZTgwOTYwNTcxMTE@._V1_SX300.jpg"
        },
        {
            "id": 30,
            "title": "Pulp Fiction",
            "year": "1994",
            "runtime": "154",
            "genres": [
                "Crime",
                "Drama"
            ],
            "director": "Quentin Tarantino",
            "actors": "Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta",
            "plot": "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg"
        },
        {
            "id": 31,
            "title": "Lock, Stock and Two Smoking Barrels",
            "year": "1998",
            "runtime": "107",
            "genres": [
                "Comedy",
                "Crime"
            ],
            "director": "Guy Ritchie",
            "actors": "Jason Flemyng, Dexter Fletcher, Nick Moran, Jason Statham",
            "plot": "A botched card game in London triggers four friends, thugs, weed-growers, hard gangsters, loan sharks and debt collectors to collide with each other in a series of unexpected events, all for the sake of weed, cash and two antique shotguns.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyN2JmZmEtNjAyMy00NzYwLThmY2MtYWQ3OGNhNjExMmM4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
        },
        {
            "id": 32,
            "title": "Lucky Number Slevin",
            "year": "2006",
            "runtime": "110",
            "genres": [
                "Crime",
                "Drama",
                "Mystery"
            ],
            "director": "Paul McGuigan",
            "actors": "Josh Hartnett, Bruce Willis, Lucy Liu, Morgan Freeman",
            "plot": "A case of mistaken identity lands Slevin into the middle of a war being plotted by two of the city's most rival crime bosses: The Rabbi and The Boss. Slevin is under constant surveillance by relentless Detective Brikowski as well as the infamous assassin Goodkat and finds himself having to hatch his own ingenious plot to get them before they get him.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzc1OTEwMTk4OF5BMl5BanBnXkFtZTcwMTEzMDQzMQ@@._V1_SX300.jpg"
        },
        {
            "id": 33,
            "title": "Rear Window",
            "year": "1954",
            "runtime": "112",
            "genres": [
                "Mystery",
                "Thriller"
            ],
            "director": "Alfred Hitchcock",
            "actors": "James Stewart, Grace Kelly, Wendell Corey, Thelma Ritter",
            "plot": "A wheelchair-bound photographer spies on his neighbours from his apartment window and becomes convinced one of them has committed murder.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNGUxYWM3M2MtMGM3Mi00ZmRiLWE0NGQtZjE5ODI2OTJhNTU0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            "id": 34,
            "title": "Pan's Labyrinth",
            "year": "2006",
            "runtime": "118",
            "genres": [
                "Drama",
                "Fantasy",
                "War"
            ],
            "director": "Guillermo del Toro",
            "actors": "Ivana Baquero, Sergi López, Maribel Verdú, Doug Jones",
            "plot": "In the falangist Spain of 1944, the bookish young stepdaughter of a sadistic army officer escapes into an eerie but captivating fantasy world.",
            "posterUrl": ""
        },
        {
            "id": 35,
            "title": "Shutter Island",
            "year": "2010",
            "runtime": "138",
            "genres": [
                "Mystery",
                "Thriller"
            ],
            "director": "Martin Scorsese",
            "actors": "Leonardo DiCaprio, Mark Ruffalo, Ben Kingsley, Max von Sydow",
            "plot": "In 1954, a U.S. marshal investigates the disappearance of a murderess who escaped from a hospital for the criminally insane.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxMTIyNzMxMV5BMl5BanBnXkFtZTcwOTc4OTI3Mg@@._V1_SX300.jpg"
        },
        {
            "id": 36,
            "title": "Reservoir Dogs",
            "year": "1992",
            "runtime": "99",
            "genres": [
                "Crime",
                "Drama",
                "Thriller"
            ],
            "director": "Quentin Tarantino",
            "actors": "Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn",
            "plot": "After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjE5ZDJiZTQtOGE2YS00ZTc5LTk0OGUtOTg2NjdjZmVlYzE2XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
        },
        {
            "id": 37,
            "title": "The Shining",
            "year": "1980",
            "runtime": "146",
            "genres": [
                "Drama",
                "Horror"
            ],
            "director": "Stanley Kubrick",
            "actors": "Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers",
            "plot": "A family heads to an isolated hotel for the winter where an evil and spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from the past and of the future.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BODMxMjE3NTA4Ml5BMl5BanBnXkFtZTgwNDc0NTIxMDE@._V1_SX300.jpg"
        },
        {
            "id": 39,
            "title": "Les Misérables",
            "year": "2012",
            "runtime": "158",
            "genres": [
                "Drama",
                "Musical",
                "Romance"
            ],
            "director": "Tom Hooper",
            "actors": "Hugh Jackman, Russell Crowe, Anne Hathaway, Amanda Seyfried",
            "plot": "In 19th-century France, Jean Valjean, who for decades has been hunted by the ruthless policeman Javert after breaking parole, agrees to care for a factory worker's daughter. The decision changes their lives forever.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMTQ4NDI3NDg4M15BMl5BanBnXkFtZTcwMjY5OTI1OA@@._V1_SX300.jpg"
        },
        {
            "id": 40,
            "title": "L.A. Confidential",
            "year": "1997",
            "runtime": "138",
            "genres": [
                "Crime",
                "Drama",
                "Mystery"
            ],
            "director": "Curtis Hanson",
            "actors": "Kevin Spacey, Russell Crowe, Guy Pearce, James Cromwell",
            "plot": "As corruption grows in 1950s LA, three policemen - one strait-laced, one brutal, and one sleazy - investigate a series of murders with their own brand of justice.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNWEwNDhhNWUtYWMzNi00ZTNhLWFiZDAtMjBjZmJhMTU0ZTY2XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
        },
        {
            "id": 41,
            "title": "Moneyball",
            "year": "2011",
            "runtime": "133",
            "genres": [
                "Biography",
                "Drama",
                "Sport"
            ],
            "director": "Bennett Miller",
            "actors": "Brad Pitt, Jonah Hill, Philip Seymour Hoffman, Robin Wright",
            "plot": "Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_SX300.jpg"
        },
        {
            "id": 42,
            "title": "The Hangover",
            "year": "2009",
            "runtime": "100",
            "genres": [
                "Comedy"
            ],
            "director": "Todd Phillips",
            "actors": "Bradley Cooper, Ed Helms, Zach Galifianakis, Justin Bartha",
            "plot": "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU1MDA1MTYwMF5BMl5BanBnXkFtZTcwMDcxMzA1Mg@@._V1_SX300.jpg"
        },
        {
            "id": 43,
            "title": "The Great Beauty",
            "year": "2013",
            "runtime": "141",
            "genres": [
                "Drama"
            ],
            "director": "Paolo Sorrentino",
            "actors": "Toni Servillo, Carlo Verdone, Sabrina Ferilli, Carlo Buccirosso",
            "plot": "Jep Gambardella has seduced his way through the lavish nightlife of Rome for decades, but after his 65th birthday and a shock from the past, Jep looks past the nightclubs and parties to find a timeless landscape of absurd, exquisite beauty.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ0ODg1OTQ2Nl5BMl5BanBnXkFtZTgwNTc2MDY1MDE@._V1_SX300.jpg"
        },
        {
            "id": 44,
            "title": "Gran Torino",
            "year": "2008",
            "runtime": "116",
            "genres": [
                "Drama"
            ],
            "director": "Clint Eastwood",
            "actors": "Clint Eastwood, Christopher Carley, Bee Vang, Ahney Her",
            "plot": "Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, a Hmong teenager who tried to steal Kowalski's prized possession: a 1972 Gran Torino.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMTQyMTczMTAxMl5BMl5BanBnXkFtZTcwOTc1ODE0Mg@@._V1_SX300.jpg"
        },
        {
            "id": 45,
            "title": "Mary and Max",
            "year": "2009",
            "runtime": "92",
            "genres": [
                "Animation",
                "Comedy",
                "Drama"
            ],
            "director": "Adam Elliot",
            "actors": "Toni Collette, Philip Seymour Hoffman, Barry Humphries, Eric Bana",
            "plot": "A tale of friendship between two unlikely pen pals: Mary, a lonely, eight-year-old girl living in the suburbs of Melbourne, and Max, a forty-four-year old, severely obese man living in New York.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1NDIyNTA1Nl5BMl5BanBnXkFtZTcwMjc2Njk3OA@@._V1_SX300.jpg"
        },
        {
            "id": 46,
            "title": "Flight",
            "year": "2012",
            "runtime": "138",
            "genres": [
                "Drama",
                "Thriller"
            ],
            "director": "Robert Zemeckis",
            "actors": "Nadine Velazquez, Denzel Washington, Carter Cabassa, Adam C. Edwards",
            "plot": "An airline pilot saves almost all his passengers on his malfunctioning airliner which eventually crashed, but an investigation into the accident reveals something troubling.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMjI1OTMxNl5BMl5BanBnXkFtZTcwNjc3NTY1OA@@._V1_SX300.jpg"
        },
        {
            "id": 47,
            "title": "One Flew Over the Cuckoo's Nest",
            "year": "1975",
            "runtime": "133",
            "genres": [
                "Drama"
            ],
            "director": "Milos Forman",
            "actors": "Michael Berryman, Peter Brocco, Dean R. Brooks, Alonzo Brown",
            "plot": "A criminal pleads insanity after getting into trouble again and once in the mental institution rebels against the oppressive nurse and rallies up the scared patients.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmJkODkwOTItZThjZC00MTE0LWIxNzQtYTM3MmQwMGI1OWFiXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
        },
        {
            "id": 48,
            "title": "Requiem for a Dream",
            "year": "2000",
            "runtime": "102",
            "genres": [
                "Drama"
            ],
            "director": "Darren Aronofsky",
            "actors": "Ellen Burstyn, Jared Leto, Jennifer Connelly, Marlon Wayans",
            "plot": "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzODMzODYwOF5BMl5BanBnXkFtZTcwODM2NjA2NQ@@._V1_SX300.jpg"
        },
        {
            "id": 49,
            "title": "The Truman Show",
            "year": "1998",
            "runtime": "103",
            "genres": [
                "Comedy",
                "Drama",
                "Sci-Fi"
            ],
            "director": "Peter Weir",
            "actors": "Jim Carrey, Laura Linney, Noah Emmerich, Natascha McElhone",
            "plot": "An insurance salesman/adjuster discovers his entire life is actually a television show.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
        },
        {
            "id": 50,
            "title": "The Artist",
            "year": "2011",
            "runtime": "100",
            "genres": [
                "Comedy",
                "Drama",
                "Romance"
            ],
            "director": "Michel Hazanavicius",
            "actors": "Jean Dujardin, Bérénice Bejo, John Goodman, James Cromwell",
            "plot": "A silent movie star meets a young dancer, but the arrival of talking pictures sends their careers in opposite directions.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzk0NzQxMTM0OV5BMl5BanBnXkFtZTcwMzU4MDYyNQ@@._V1_SX300.jpg"
        },
        {
            "id": 52,
            "title": "The Hobbit: The Desolation of Smaug",
            "year": "2013",
            "runtime": "161",
            "genres": [
                "Adventure",
                "Fantasy"
            ],
            "director": "Peter Jackson",
            "actors": "Ian McKellen, Martin Freeman, Richard Armitage, Ken Stott",
            "plot": "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_SX300.jpg"
        },
        {
            "id": 53,
            "title": "Vicky Cristina Barcelona",
            "year": "2008",
            "runtime": "96",
            "genres": [
                "Drama",
                "Romance"
            ],
            "director": "Woody Allen",
            "actors": "Rebecca Hall, Scarlett Johansson, Christopher Evan Welch, Chris Messina",
            "plot": "Two girlfriends on a summer holiday in Spain become enamored with the same painter, unaware that his ex-wife, with whom he has a tempestuous relationship, is about to re-enter the picture.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2NDQ4MTg2MV5BMl5BanBnXkFtZTcwNDUzNjU3MQ@@._V1_SX300.jpg"
        },
        {
            "id": 54,
            "title": "Slumdog Millionaire",
            "year": "2008",
            "runtime": "120",
            "genres": [
                "Drama",
                "Romance"
            ],
            "director": "Danny Boyle, Loveleen Tandan",
            "actors": "Dev Patel, Saurabh Shukla, Anil Kapoor, Rajendranath Zutshi",
            "plot": "A Mumbai teen reflects on his upbringing in the slums when he is accused of cheating on the Indian Version of \"Who Wants to be a Millionaire?\"",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMTU2NTA5NzI0N15BMl5BanBnXkFtZTcwMjUxMjYxMg@@._V1_SX300.jpg"
        },
        {
            "id": 55,
            "title": "Lost in Translation",
            "year": "2003",
            "runtime": "101",
            "genres": [
                "Drama"
            ],
            "director": "Sofia Coppola",
            "actors": "Scarlett Johansson, Bill Murray, Akiko Takeshita, Kazuyoshi Minamimagoe",
            "plot": "A faded movie star and a neglected young woman form an unlikely bond after crossing paths in Tokyo.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI2NDI5ODk4N15BMl5BanBnXkFtZTYwMTI3NTE3._V1_SX300.jpg"
        },
        {
            "id": 56,
            "title": "Match Point",
            "year": "2005",
            "runtime": "119",
            "genres": [
                "Drama",
                "Romance",
                "Thriller"
            ],
            "director": "Woody Allen",
            "actors": "Jonathan Rhys Meyers, Alexander Armstrong, Paul Kaye, Matthew Goode",
            "plot": "At a turning point in his life, a former tennis pro falls for an actress who happens to be dating his friend and soon-to-be brother-in-law.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzNzY4MzE5NF5BMl5BanBnXkFtZTcwMzQ1MDMzMQ@@._V1_SX300.jpg"
        },
        {
            "id": 57,
            "title": "Psycho",
            "year": "1960",
            "runtime": "109",
            "genres": [
                "Horror",
                "Mystery",
                "Thriller"
            ],
            "director": "Alfred Hitchcock",
            "actors": "Anthony Perkins, Vera Miles, John Gavin, Janet Leigh",
            "plot": "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDI3OWRmOTEtOWJhYi00N2JkLTgwNGItMjdkN2U0NjFiZTYwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            "id": 58,
            "title": "North by Northwest",
            "year": "1959",
            "runtime": "136",
            "genres": [
                "Action",
                "Adventure",
                "Crime"
            ],
            "director": "Alfred Hitchcock",
            "actors": "Cary Grant, Eva Marie Saint, James Mason, Jessie Royce Landis",
            "plot": "A hapless New York advertising executive is mistaken for a government agent by a group of foreign spies, and is pursued across the country while he looks for a way to survive.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMjQwMTQ0MzgwNl5BMl5BanBnXkFtZTgwNjc4ODE4MzE@._V1_SX300.jpg"
        },
        {
            "id": 59,
            "title": "Madagascar: Escape 2 Africa",
            "year": "2008",
            "runtime": "89",
            "genres": [
                "Animation",
                "Action",
                "Adventure"
            ],
            "director": "Eric Darnell, Tom McGrath",
            "actors": "Ben Stiller, Chris Rock, David Schwimmer, Jada Pinkett Smith",
            "plot": "The animals try to fly back to New York City, but crash-land on an African wildlife refuge, where Alex is reunited with his parents.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExMDA4NDcwMl5BMl5BanBnXkFtZTcwODAxNTQ3MQ@@._V1_SX300.jpg"
        },
        {
            "id": 60,
            "title": "Despicable Me 2",
            "year": "2013",
            "runtime": "98",
            "genres": [
                "Animation",
                "Adventure",
                "Comedy"
            ],
            "director": "Pierre Coffin, Chris Renaud",
            "actors": "Steve Carell, Kristen Wiig, Benjamin Bratt, Miranda Cosgrove",
            "plot": "When Gru, the world's most super-bad turned super-dad has been recruited by a team of officials to stop lethal muscle and a host of Gru's own, He has to fight back with new gadgetry, cars, and more minion madness.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNjAyNTcyMF5BMl5BanBnXkFtZTgwODQzMjQ3MDE@._V1_SX300.jpg"
        },
        {
            "id": 61,
            "title": "Downfall",
            "year": "2004",
            "runtime": "156",
            "genres": [
                "Biography",
                "Drama",
                "History"
            ],
            "director": "Oliver Hirschbiegel",
            "actors": "Bruno Ganz, Alexandra Maria Lara, Corinna Harfouch, Ulrich Matthes",
            "plot": "Traudl Junge, the final secretary for Adolf Hitler, tells of the Nazi dictator's final days in his Berlin bunker at the end of WWII.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM1OTI1MjE2Nl5BMl5BanBnXkFtZTcwMTEwMzc4NA@@._V1_SX300.jpg"
        },
        {
            "id": 62,
            "title": "Madagascar",
            "year": "2005",
            "runtime": "86",
            "genres": [
                "Animation",
                "Adventure",
                "Comedy"
            ],
            "director": "Eric Darnell, Tom McGrath",
            "actors": "Ben Stiller, Chris Rock, David Schwimmer, Jada Pinkett Smith",
            "plot": "Spoiled by their upbringing with no idea what wild life is really like, four animals from New York Central Zoo escape, unwittingly assisted by four absconding penguins, and find themselves in Madagascar, among a bunch of merry lemurs",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY4NDUwMzQxMF5BMl5BanBnXkFtZTcwMDgwNjgyMQ@@._V1_SX300.jpg"
        },
        {
            "id": 63,
            "title": "Madagascar 3: Europe's Most Wanted",
            "year": "2012",
            "runtime": "93",
            "genres": [
                "Animation",
                "Adventure",
                "Comedy"
            ],
            "director": "Eric Darnell, Tom McGrath, Conrad Vernon",
            "actors": "Ben Stiller, Chris Rock, David Schwimmer, Jada Pinkett Smith",
            "plot": "Alex, Marty, Gloria and Melman are still fighting to get home to their beloved Big Apple. Their journey takes them through Europe where they find the perfect cover: a traveling circus, which they reinvent - Madagascar style.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2MTIzNzk2MF5BMl5BanBnXkFtZTcwMDcwMzQxNw@@._V1_SX300.jpg"
        },
        {
            "id": 64,
            "title": "God Bless America",
            "year": "2011",
            "runtime": "105",
            "genres": [
                "Comedy",
                "Crime"
            ],
            "director": "Bobcat Goldthwait",
            "actors": "Joel Murray, Tara Lynne Barr, Melinda Page Hamilton, Mackenzie Brooke Smith",
            "plot": "On a mission to rid society of its most repellent citizens, terminally ill Frank makes an unlikely accomplice in 16-year-old Roxy.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMTc1MzA4NF5BMl5BanBnXkFtZTcwNzQwMTgzNw@@._V1_SX300.jpg"
        },
        {
            "id": 65,
            "title": "The Social Network",
            "year": "2010",
            "runtime": "120",
            "genres": [
                "Biography",
                "Drama"
            ],
            "director": "David Fincher",
            "actors": "Jesse Eisenberg, Rooney Mara, Bryan Barter, Dustin Fitzsimons",
            "plot": "Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, but is later sued by two brothers who claimed he stole their idea, and the co-founder who was later squeezed out of the business.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2ODk0NDAwMF5BMl5BanBnXkFtZTcwNTM1MDc2Mw@@._V1_SX300.jpg"
        },
        {
            "id": 66,
            "title": "The Pianist",
            "year": "2002",
            "runtime": "150",
            "genres": [
                "Biography",
                "Drama",
                "War"
            ],
            "director": "Roman Polanski",
            "actors": "Adrien Brody, Emilia Fox, Michal Zebrowski, Ed Stoppard",
            "plot": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMTc4OTkyOTA3OF5BMl5BanBnXkFtZTYwMDIxNjk5._V1_SX300.jpg"
        },
        {
            "id": 68,
            "title": "Casablanca",
            "year": "1942",
            "runtime": "102",
            "genres": [
                "Drama",
                "Romance",
                "War"
            ],
            "director": "Michael Curtiz",
            "actors": "Humphrey Bogart, Ingrid Bergman, Paul Henreid, Claude Rains",
            "plot": "In Casablanca, Morocco in December 1941, a cynical American expatriate meets a former lover, with unforeseen complications.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjQwNDYyNTk2N15BMl5BanBnXkFtZTgwMjQ0OTMyMjE@._V1_SX300.jpg"
        },
        {
            "id": 69,
            "title": "American Gangster",
            "year": "2007",
            "runtime": "157",
            "genres": [
                "Biography",
                "Crime",
                "Drama"
            ],
            "director": "Ridley Scott",
            "actors": "Denzel Washington, Russell Crowe, Chiwetel Ejiofor, Josh Brolin",
            "plot": "In 1970s America, a detective works to bring down the drug empire of Frank Lucas, a heroin kingpin from Manhattan, who is smuggling the drug into the country from the Far East.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNzY5MDA5MV5BMl5BanBnXkFtZTcwMjg4MzI3MQ@@._V1_SX300.jpg"
        },
        {
            "id": 70,
            "title": "Catch Me If You Can",
            "year": "2002",
            "runtime": "141",
            "genres": [
                "Biography",
                "Crime",
                "Drama"
            ],
            "director": "Steven Spielberg",
            "actors": "Leonardo DiCaprio, Tom Hanks, Christopher Walken, Martin Sheen",
            "plot": "The true story of Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars' worth of checks as a Pan Am pilot, doctor, and legal prosecutor.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg"
        },
        {
            "id": 71,
            "title": "American History X",
            "year": "1998",
            "runtime": "119",
            "genres": [
                "Crime",
                "Drama"
            ],
            "director": "Tony Kaye",
            "actors": "Edward Norton, Edward Furlong, Beverly D'Angelo, Jennifer Lien",
            "plot": "A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BZjA0MTM4MTQtNzY5MC00NzY3LWI1ZTgtYzcxMjkyMzU4MDZiXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg"
        },
        {
            "id": 72,
            "title": "Casino",
            "year": "1995",
            "runtime": "178",
            "genres": [
                "Biography",
                "Crime",
                "Drama"
            ],
            "director": "Martin Scorsese",
            "actors": "Robert De Niro, Sharon Stone, Joe Pesci, James Woods",
            "plot": "Greed, deception, money, power, and murder occur between two best friends, a mafia underboss and a casino owner, for a trophy wife over a gambling empire.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        },
        {
            "id": 73,
            "title": "Pirates of the Caribbean: At World's End",
            "year": "2007",
            "runtime": "169",
            "genres": [
                "Action",
                "Adventure",
                "Fantasy"
            ],
            "director": "Gore Verbinski",
            "actors": "Johnny Depp, Geoffrey Rush, Orlando Bloom, Keira Knightley",
            "plot": "Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg"
        },
        {
            "id": 74,
            "title": "Pirates of the Caribbean: On Stranger Tides",
            "year": "2011",
            "runtime": "136",
            "genres": [
                "Action",
                "Adventure",
                "Fantasy"
            ],
            "director": "Rob Marshall",
            "actors": "Johnny Depp, Penélope Cruz, Geoffrey Rush, Ian McShane",
            "plot": "Jack Sparrow and Barbossa embark on a quest to find the elusive fountain of youth, only to discover that Blackbeard and his daughter are after it too.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_SX300.jpg"
        },
        {
            "id": 75,
            "title": "Crash",
            "year": "2004",
            "runtime": "112",
            "genres": [
                "Crime",
                "Drama",
                "Thriller"
            ],
            "director": "Paul Haggis",
            "actors": "Karina Arroyave, Dato Bakhtadze, Sandra Bullock, Don Cheadle",
            "plot": "Los Angeles citizens with vastly separate lives collide in interweaving stories of race, loss and redemption.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTk1OTA1MjIyNV5BMl5BanBnXkFtZTcwODQxMTkyMQ@@._V1_SX300.jpg"
        },
        {
            "id": 76,
            "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
            "year": "2003",
            "runtime": "143",
            "genres": [
                "Action",
                "Adventure",
                "Fantasy"
            ],
            "director": "Gore Verbinski",
            "actors": "Johnny Depp, Geoffrey Rush, Orlando Bloom, Keira Knightley",
            "plot": "Blacksmith Will Turner teams up with eccentric pirate \"Captain\" Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAyNDM4MTc2N15BMl5BanBnXkFtZTYwNDk0Mjc3._V1_SX300.jpg"
        },
        {
            "id": 77,
            "title": "The Lord of the Rings: The Return of the King",
            "year": "2003",
            "runtime": "201",
            "genres": [
                "Action",
                "Adventure",
                "Drama"
            ],
            "director": "Peter Jackson",
            "actors": "Noel Appleby, Ali Astin, Sean Astin, David Aston",
            "plot": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE4MjA1NTAyMV5BMl5BanBnXkFtZTcwNzM1NDQyMQ@@._V1_SX300.jpg"
        },
        {
            "id": 78,
            "title": "Oldboy",
            "year": "2003",
            "runtime": "120",
            "genres": [
                "Drama",
                "Mystery",
                "Thriller"
            ],
            "director": "Chan-wook Park",
            "actors": "Min-sik Choi, Ji-tae Yu, Hye-jeong Kang, Dae-han Ji",
            "plot": "After being kidnapped and imprisoned for 15 years, Oh Dae-Su is released, only to find that he must find his captor in 5 days.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_SX300.jpg"
        },
        {
            "id": 79,
            "title": "Chocolat",
            "year": "2000",
            "runtime": "121",
            "genres": [
                "Drama",
                "Romance"
            ],
            "director": "Lasse Hallström",
            "actors": "Alfred Molina, Carrie-Anne Moss, Aurelien Parent Koenig, Antonio Gil",
            "plot": "A woman and her daughter open a chocolate shop in a small French village that shakes up the rigid morality of the community.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4MDI3NTQwMV5BMl5BanBnXkFtZTcwNjIzNDcyMQ@@._V1_SX300.jpg"
        },
        {
            "id": 80,
            "title": "Casino Royale",
            "year": "2006",
            "runtime": "144",
            "genres": [
                "Action",
                "Adventure",
                "Thriller"
            ],
            "director": "Martin Campbell",
            "actors": "Daniel Craig, Eva Green, Mads Mikkelsen, Judi Dench",
            "plot": "Armed with a licence to kill, Secret Agent James Bond sets out on his first mission as 007 and must defeat a weapons dealer in a high stakes game of poker at Casino Royale, but things are not what they seem.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM5MjI4NDExNF5BMl5BanBnXkFtZTcwMDM1MjMzMQ@@._V1_SX300.jpg"
        },
        {
            "id": 81,
            "title": "WALL·E",
            "year": "2008",
            "runtime": "98",
            "genres": [
                "Animation",
                "Adventure",
                "Family"
            ],
            "director": "Andrew Stanton",
            "actors": "Ben Burtt, Elissa Knight, Jeff Garlin, Fred Willard",
            "plot": "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczOTA3MzY2N15BMl5BanBnXkFtZTcwOTYwNjE2MQ@@._V1_SX300.jpg"
        },
        {
            "id": 82,
            "title": "The Wolf of Wall Street",
            "year": "2013",
            "runtime": "180",
            "genres": [
                "Biography",
                "Comedy",
                "Crime"
            ],
            "director": "Martin Scorsese",
            "actors": "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
            "plot": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg"
        },
        {
            "id": 83,
            "title": "Hellboy II: The Golden Army",
            "year": "2008",
            "runtime": "120",
            "genres": [
                "Action",
                "Adventure",
                "Fantasy"
            ],
            "director": "Guillermo del Toro",
            "actors": "Ron Perlman, Selma Blair, Doug Jones, John Alexander",
            "plot": "The mythical world starts a rebellion against humanity in order to rule the Earth, so Hellboy and his team must save the world from the rebellious creatures.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5NzgyMjc2Nl5BMl5BanBnXkFtZTcwOTU3MDI3MQ@@._V1_SX300.jpg"
        },
        {
            "id": 84,
            "title": "Sunset Boulevard",
            "year": "1950",
            "runtime": "110",
            "genres": [
                "Drama",
                "Film-Noir",
                "Romance"
            ],
            "director": "Billy Wilder",
            "actors": "William Holden, Gloria Swanson, Erich von Stroheim, Nancy Olson",
            "plot": "A hack screenwriter writes a screenplay for a former silent-film star who has faded into Hollywood obscurity.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMTc3NDYzODAwNV5BMl5BanBnXkFtZTgwODg1MTczMTE@._V1_SX300.jpg"
        },
        {
            "id": 85,
            "title": "I-See-You.Com",
            "year": "2006",
            "runtime": "92",
            "genres": [
                "Comedy"
            ],
            "director": "Eric Steven Stahl",
            "actors": "Beau Bridges, Rosanna Arquette, Mathew Botuchis, Shiri Appleby",
            "plot": "A 17-year-old boy buys mini-cameras and displays the footage online at I-see-you.com. The cash rolls in as the site becomes a major hit. Everyone seems to have fun until it all comes crashing down....",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwMDUzNzA5Nl5BMl5BanBnXkFtZTcwMjQ2Njk3MQ@@._V1_SX300.jpg"
        },
        {
            "id": 86,
            "title": "The Grand Budapest Hotel",
            "year": "2014",
            "runtime": "99",
            "genres": [
                "Adventure",
                "Comedy",
                "Crime"
            ],
            "director": "Wes Anderson",
            "actors": "Ralph Fiennes, F. Murray Abraham, Mathieu Amalric, Adrien Brody",
            "plot": "The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_SX300.jpg"
        },
        {
            "id": 88,
            "title": "Once Upon a Time in America",
            "year": "1984",
            "runtime": "229",
            "genres": [
                "Crime",
                "Drama"
            ],
            "director": "Sergio Leone",
            "actors": "Robert De Niro, James Woods, Elizabeth McGovern, Joe Pesci",
            "plot": "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
        },
        {
            "id": 89,
            "title": "Oblivion",
            "year": "2013",
            "runtime": "124",
            "genres": [
                "Action",
                "Adventure",
                "Mystery"
            ],
            "director": "Joseph Kosinski",
            "actors": "Tom Cruise, Morgan Freeman, Olga Kurylenko, Andrea Riseborough",
            "plot": "A veteran assigned to extract Earth's remaining resources begins to question what he knows about his mission and himself.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDY0MTA4MF5BMl5BanBnXkFtZTcwNzI3MDgxOQ@@._V1_SX300.jpg"
        },
        {
            "id": 90,
            "title": "V for Vendetta",
            "year": "2005",
            "runtime": "132",
            "genres": [
                "Action",
                "Drama",
                "Thriller"
            ],
            "director": "James McTeigue",
            "actors": "Natalie Portman, Hugo Weaving, Stephen Rea, Stephen Fry",
            "plot": "In a future British tyranny, a shadowy freedom fighter, known only by the alias of \"V\", plots to overthrow it with the help of a young woman.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_SX300.jpg"
        },
        {
            "id": 91,
            "title": "Gattaca",
            "year": "1997",
            "runtime": "106",
            "genres": [
                "Drama",
                "Sci-Fi",
                "Thriller"
            ],
            "director": "Andrew Niccol",
            "actors": "Ethan Hawke, Uma Thurman, Gore Vidal, Xander Berkeley",
            "plot": "A genetically inferior man assumes the identity of a superior one in order to pursue his lifelong dream of space travel.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDQxOTc0MzMtZmRlOS00OWQ5LWI2ZDctOTAwNmMwOTYxYzlhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            "id": 92,
            "title": "Silver Linings Playbook",
            "year": "2012",
            "runtime": "122",
            "genres": [
                "Comedy",
                "Drama",
                "Romance"
            ],
            "director": "David O. Russell",
            "actors": "Bradley Cooper, Jennifer Lawrence, Robert De Niro, Jacki Weaver",
            "plot": "After a stint in a mental institution, former teacher Pat Solitano moves back in with his parents and tries to reconcile with his ex-wife. Things get more challenging when Pat meets Tiffany, a mysterious girl with problems of her own.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2MTI5NzA3MF5BMl5BanBnXkFtZTcwODExNTc0OA@@._V1_SX300.jpg"
        },
        {
            "id": 93,
            "title": "Alice in Wonderland",
            "year": "2010",
            "runtime": "108",
            "genres": [
                "Adventure",
                "Family",
                "Fantasy"
            ],
            "director": "Tim Burton",
            "actors": "Johnny Depp, Mia Wasikowska, Helena Bonham Carter, Anne Hathaway",
            "plot": "Nineteen-year-old Alice returns to the magical world from her childhood adventure, where she reunites with her old friends and learns of her true destiny: to end the Red Queen's reign of terror.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNjAxMTc0Nl5BMl5BanBnXkFtZTcwODc3ODk5Mg@@._V1_SX300.jpg"
        },
        {
            "id": 94,
            "title": "Gandhi",
            "year": "1982",
            "runtime": "191",
            "genres": [
                "Biography",
                "Drama"
            ],
            "director": "Richard Attenborough",
            "actors": "Ben Kingsley, Candice Bergen, Edward Fox, John Gielgud",
            "plot": "Gandhi's character is fully explained as a man of nonviolence. Through his patience, he is able to drive the British out of the subcontinent. And the stubborn nature of Jinnah and his commitment towards Pakistan is portrayed.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMzJiZDRmOWUtYjE2MS00Mjc1LTg1ZDYtNTQxYWJkZTg1OTM4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
        },
        {
            "id": 95,
            "title": "Pacific Rim",
            "year": "2013",
            "runtime": "131",
            "genres": [
                "Action",
                "Adventure",
                "Sci-Fi"
            ],
            "director": "Guillermo del Toro",
            "actors": "Charlie Hunnam, Diego Klattenhoff, Idris Elba, Rinko Kikuchi",
            "plot": "As a war between humankind and monstrous sea creatures wages on, a former pilot and a trainee are paired up to drive a seemingly obsolete special weapon in a desperate effort to save the world from the apocalypse.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3MTI5NjQ4Nl5BMl5BanBnXkFtZTcwOTU1OTU0OQ@@._V1_SX300.jpg"
        },
        {
            "id": 97,
            "title": "The Quiet American",
            "year": "2002",
            "runtime": "101",
            "genres": [
                "Drama",
                "Mystery",
                "Romance"
            ],
            "director": "Phillip Noyce",
            "actors": "Michael Caine, Brendan Fraser, Do Thi Hai Yen, Rade Serbedzija",
            "plot": "An older British reporter vies with a young U.S. doctor for the affections of a beautiful Vietnamese woman.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMjE2NTUxNTE3Nl5BMl5BanBnXkFtZTYwNTczMTg5._V1_SX300.jpg"
        },
        {
            "id": 98,
            "title": "Cloud Atlas",
            "year": "2012",
            "runtime": "172",
            "genres": [
                "Drama",
                "Sci-Fi"
            ],
            "director": "Tom Tykwer, Lana Wachowski, Lilly Wachowski",
            "actors": "Tom Hanks, Halle Berry, Jim Broadbent, Hugo Weaving",
            "plot": "An exploration of how the actions of individual lives impact one another in the past, present and future, as one soul is shaped from a killer into a hero, and an act of kindness ripples across centuries to inspire a revolution.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczMTgxMjc4NF5BMl5BanBnXkFtZTcwNjM5MTA2OA@@._V1_SX300.jpg"
        },
        {
            "id": 99,
            "title": "The Impossible",
            "year": "2012",
            "runtime": "114",
            "genres": [
                "Drama",
                "Thriller"
            ],
            "director": "J.A. Bayona",
            "actors": "Naomi Watts, Ewan McGregor, Tom Holland, Samuel Joslin",
            "plot": "The story of a tourist family in Thailand caught in the destruction and chaotic aftermath of the 2004 Indian Ocean tsunami.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5NTA3NzQ5Nl5BMl5BanBnXkFtZTcwOTYxNjY0OA@@._V1_SX300.jpg"
        },
        {
            "id": 100,
            "title": "All Quiet on the Western Front",
            "year": "1930",
            "runtime": "136",
            "genres": [
                "Drama",
                "War"
            ],
            "director": "Lewis Milestone",
            "actors": "Louis Wolheim, Lew Ayres, John Wray, Arnold Lucy",
            "plot": "A young soldier faces profound disillusionment in the soul-destroying horror of World War I.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM5OTg2NDY1NF5BMl5BanBnXkFtZTcwNTQ4MTMwNw@@._V1_SX300.jpg"
        },
        {
            "id": 101,
            "title": "The English Patient",
            "year": "1996",
            "runtime": "162",
            "genres": [
                "Drama",
                "Romance",
                "War"
            ],
            "director": "Anthony Minghella",
            "actors": "Ralph Fiennes, Juliette Binoche, Willem Dafoe, Kristin Scott Thomas",
            "plot": "At the close of WWII, a young nurse tends to a badly-burned plane crash victim. His past is shown in flashbacks, revealing an involvement in a fateful love affair.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDg2OTcxNDE0OF5BMl5BanBnXkFtZTgwOTg2MDM0MDE@._V1_SX300.jpg"
        },
        {
            "id": 102,
            "title": "Dallas Buyers Club",
            "year": "2013",
            "runtime": "117",
            "genres": [
                "Biography",
                "Drama"
            ],
            "director": "Jean-Marc Vallée",
            "actors": "Matthew McConaughey, Jennifer Garner, Jared Leto, Denis O'Hare",
            "plot": "In 1985 Dallas, electrician and hustler Ron Woodroof works around the system to help AIDS patients get the medication they need after he is diagnosed with the disease.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYwMTA4MzgyNF5BMl5BanBnXkFtZTgwMjEyMjE0MDE@._V1_SX300.jpg"
        },
        {
            "id": 103,
            "title": "Frida",
            "year": "2002",
            "runtime": "123",
            "genres": [
                "Biography",
                "Drama",
                "Romance"
            ],
            "director": "Julie Taymor",
            "actors": "Salma Hayek, Mía Maestro, Alfred Molina, Antonio Banderas",
            "plot": "A biography of artist Frida Kahlo, who channeled the pain of a crippling injury and her tempestuous marriage into her work.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMTMyODUyMDY1OV5BMl5BanBnXkFtZTYwMDA2OTU3._V1_SX300.jpg"
        },
        {
            "id": 104,
            "title": "Before Sunrise",
            "year": "1995",
            "runtime": "105",
            "genres": [
                "Drama",
                "Romance"
            ],
            "director": "Richard Linklater",
            "actors": "Ethan Hawke, Julie Delpy, Andrea Eckert, Hanno Pöschl",
            "plot": "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQyMTM3MTQxMl5BMl5BanBnXkFtZTcwMDAzNjQ4Mg@@._V1_SX300.jpg"
        },
        {
            "id": 105,
            "title": "The Rum Diary",
            "year": "2011",
            "runtime": "120",
            "genres": [
                "Comedy",
                "Drama"
            ],
            "director": "Bruce Robinson",
            "actors": "Johnny Depp, Aaron Eckhart, Michael Rispoli, Amber Heard",
            "plot": "American journalist Paul Kemp takes on a freelance job in Puerto Rico for a local newspaper during the 1960s and struggles to find a balance between island culture and the expatriates who live there.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM5ODA4MjYxM15BMl5BanBnXkFtZTcwMTM3NTE5Ng@@._V1_SX300.jpg"
        },
        {
            "id": 106,
            "title": "The Last Samurai",
            "year": "2003",
            "runtime": "154",
            "genres": [
                "Action",
                "Drama",
                "History"
            ],
            "director": "Edward Zwick",
            "actors": "Ken Watanabe, Tom Cruise, William Atherton, Chad Lindberg",
            "plot": "An American military advisor embraces the Samurai culture he was hired to destroy after he is captured in battle.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMzkyNzQ1Mzc0NV5BMl5BanBnXkFtZTcwODg3MzUzMw@@._V1_SX300.jpg"
        },
        {
            "id": 107,
            "title": "Chinatown",
            "year": "1974",
            "runtime": "130",
            "genres": [
                "Drama",
                "Mystery",
                "Thriller"
            ],
            "director": "Roman Polanski",
            "actors": "Jack Nicholson, Faye Dunaway, John Huston, Perry Lopez",
            "plot": "A private detective hired to expose an adulterer finds himself caught up in a web of deceit, corruption and murder.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2YyNDE5NzItMjAwNC00MGQxLTllNjktZGIzMWFkZjA3OWQ0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
        },
        {
            "id": 108,
            "title": "Calvary",
            "year": "2014",
            "runtime": "102",
            "genres": [
                "Comedy",
                "Drama"
            ],
            "director": "John Michael McDonagh",
            "actors": "Brendan Gleeson, Chris O'Dowd, Kelly Reilly, Aidan Gillen",
            "plot": "After he is threatened during a confession, a good-natured priest must battle the dark forces closing in around him.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc3MjQ1MjE2M15BMl5BanBnXkFtZTgwNTMzNjE4MTE@._V1_SX300.jpg"
        },
        {
            "id": 109,
            "title": "Before Sunset",
            "year": "2004",
            "runtime": "80",
            "genres": [
                "Drama",
                "Romance"
            ],
            "director": "Richard Linklater",
            "actors": "Ethan Hawke, Julie Delpy, Vernon Dobtcheff, Louise Lemoine Torrès",
            "plot": "Nine years after Jesse and Celine first met, they encounter each other again on the French leg of Jesse's book tour.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMTQ1MjAwNTM5Ml5BMl5BanBnXkFtZTYwNDM0MTc3._V1_SX300.jpg"
        },
        {
            "id": 110,
            "title": "Spirited Away",
            "year": "2001",
            "runtime": "125",
            "genres": [
                "Animation",
                "Adventure",
                "Family"
            ],
            "director": "Hayao Miyazaki",
            "actors": "Rumi Hiiragi, Miyu Irino, Mari Natsuki, Takashi Naitô",
            "plot": "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjYxMDcyMzIzNl5BMl5BanBnXkFtZTYwNDg2MDU3._V1_SX300.jpg"
        },
        {
            "id": 111,
            "title": "Indochine",
            "year": "1992",
            "runtime": "159",
            "genres": [
                "Drama",
                "Romance"
            ],
            "director": "Régis Wargnier",
            "actors": "Catherine Deneuve, Vincent Perez, Linh Dan Pham, Jean Yanne",
            "plot": "This story is set in 1930, at the time when French colonial rule in Indochina is ending. A widowed French woman who works in the rubber fields, raises a Vietnamese princess as if she was ...",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM1MTkzNzA3NF5BMl5BanBnXkFtZTYwNTI2MzU5._V1_SX300.jpg"
        },
        {
            "id": 112,
            "title": "Birdman or (The Unexpected Virtue of Ignorance)",
            "year": "2014",
            "runtime": "119",
            "genres": [
                "Comedy",
                "Drama",
                "Romance"
            ],
            "director": "Alejandro G. Iñárritu",
            "actors": "Michael Keaton, Emma Stone, Kenny Chin, Jamahl Garrison-Lowe",
            "plot": "Illustrated upon the progress of his latest Broadway play, a former popular actor's struggle to cope with his current life as a wasted actor is shown.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_SX300.jpg"
        },
        {
            "id": 113,
            "title": "Boyhood",
            "year": "2014",
            "runtime": "165",
            "genres": [
                "Drama"
            ],
            "director": "Richard Linklater",
            "actors": "Ellar Coltrane, Patricia Arquette, Elijah Smith, Lorelei Linklater",
            "plot": "The life of Mason, from early childhood to his arrival at college.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzNDc2MDc0N15BMl5BanBnXkFtZTgwOTcwMDQ5MTE@._V1_SX300.jpg"
        },
        {
            "id": 114,
            "title": "12 Angry Men",
            "year": "1957",
            "runtime": "96",
            "genres": [
                "Crime",
                "Drama"
            ],
            "director": "Sidney Lumet",
            "actors": "Martin Balsam, John Fiedler, Lee J. Cobb, E.G. Marshall",
            "plot": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SX300.jpg"
        },
        {
            "id": 115,
            "title": "The Imitation Game",
            "year": "2014",
            "runtime": "114",
            "genres": [
                "Biography",
                "Drama",
                "Thriller"
            ],
            "director": "Morten Tyldum",
            "actors": "Benedict Cumberbatch, Keira Knightley, Matthew Goode, Rory Kinnear",
            "plot": "During World War II, mathematician Alan Turing tries to crack the enigma code with help from fellow mathematicians.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDkwNTEyMzkzNl5BMl5BanBnXkFtZTgwNTAwNzk3MjE@._V1_SX300.jpg"
        },
        {
            "id": 116,
            "title": "Interstellar",
            "year": "2014",
            "runtime": "169",
            "genres": [
                "Adventure",
                "Drama",
                "Sci-Fi"
            ],
            "director": "Christopher Nolan",
            "actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
            "plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg"
        },
        {
            "id": 117,
            "title": "Big Nothing",
            "year": "2006",
            "runtime": "86",
            "genres": [
                "Comedy",
                "Crime",
                "Thriller"
            ],
            "director": "Jean-Baptiste Andrea",
            "actors": "David Schwimmer, Simon Pegg, Alice Eve, Natascha McElhone",
            "plot": "A frustrated, unemployed teacher joining forces with a scammer and his girlfriend in a blackmailing scheme.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY5NTc2NjYwOV5BMl5BanBnXkFtZTcwMzk5OTY0MQ@@._V1_SX300.jpg"
        },
        {
            "id": 118,
            "title": "Das Boot",
            "year": "1981",
            "runtime": "149",
            "genres": [
                "Adventure",
                "Drama",
                "Thriller"
            ],
            "director": "Wolfgang Petersen",
            "actors": "Jürgen Prochnow, Herbert Grönemeyer, Klaus Wennemann, Hubertus Bengsch",
            "plot": "The claustrophobic world of a WWII German U-boat; boredom, filth, and sheer terror.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE5Mzk5OTQ0Nl5BMl5BanBnXkFtZTYwNzUwMTQ5._V1_SX300.jpg"
        },
        {
            "id": 119,
            "title": "Shrek 2",
            "year": "2004",
            "runtime": "93",
            "genres": [
                "Animation",
                "Adventure",
                "Comedy"
            ],
            "director": "Andrew Adamson, Kelly Asbury, Conrad Vernon",
            "actors": "Mike Myers, Eddie Murphy, Cameron Diaz, Julie Andrews",
            "plot": "Princess Fiona's parents invite her and Shrek to dinner to celebrate her marriage. If only they knew the newlyweds were both ogres.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk4MTMwNjI4M15BMl5BanBnXkFtZTcwMjExMzUyMQ@@._V1_SX300.jpg"
        },
        {
            "id": 120,
            "title": "Sin City",
            "year": "2005",
            "runtime": "124",
            "genres": [
                "Crime",
                "Thriller"
            ],
            "director": "Frank Miller, Robert Rodriguez, Quentin Tarantino",
            "actors": "Jessica Alba, Devon Aoki, Alexis Bledel, Powers Boothe",
            "plot": "A film that explores the dark and miserable town, Basin City, and tells the story of three different people, all caught up in violent corruption.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODZmYjMwNzEtNzVhNC00ZTRmLTk2M2UtNzE1MTQ2ZDAxNjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            "id": 121,
            "title": "Nebraska",
            "year": "2013",
            "runtime": "115",
            "genres": [
                "Adventure",
                "Comedy",
                "Drama"
            ],
            "director": "Alexander Payne",
            "actors": "Bruce Dern, Will Forte, June Squibb, Bob Odenkirk",
            "plot": "An aging, booze-addled father makes the trip from Montana to Nebraska with his estranged son in order to claim a million-dollar Mega Sweepstakes Marketing prize.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2Mjk2NDkyMl5BMl5BanBnXkFtZTgwNTk0NzcyMDE@._V1_SX300.jpg"
        },
        {
            "id": 122,
            "title": "Shrek",
            "year": "2001",
            "runtime": "90",
            "genres": [
                "Animation",
                "Adventure",
                "Comedy"
            ],
            "director": "Andrew Adamson, Vicky Jenson",
            "actors": "Mike Myers, Eddie Murphy, Cameron Diaz, John Lithgow",
            "plot": "After his swamp is filled with magical creatures, an ogre agrees to rescue a princess for a villainous lord in order to get his land back.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTE1NTE0M15BMl5BanBnXkFtZTgwNjY4NTYxMTE@._V1_SX300.jpg"
        },
        {
            "id": 123,
            "title": "Mr. & Mrs. Smith",
            "year": "2005",
            "runtime": "120",
            "genres": [
                "Action",
                "Comedy",
                "Crime"
            ],
            "director": "Doug Liman",
            "actors": "Brad Pitt, Angelina Jolie, Vince Vaughn, Adam Brody",
            "plot": "A bored married couple is surprised to learn that they are both assassins hired by competing agencies to kill each other.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMzcxNzQzOF5BMl5BanBnXkFtZTcwMzQxNjUyMw@@._V1_SX300.jpg"
        },
        {
            "id": 124,
            "title": "Original Sin",
            "year": "2001",
            "runtime": "116",
            "genres": [
                "Drama",
                "Mystery",
                "Romance"
            ],
            "director": "Michael Cristofer",
            "actors": "Antonio Banderas, Angelina Jolie, Thomas Jane, Jack Thompson",
            "plot": "A woman along with her lover, plan to con a rich man by marrying him and on earning his trust running away with all his money. Everything goes as planned until she actually begins to fall in love with him.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODg3Mjg0MDY4M15BMl5BanBnXkFtZTcwNjY5MDQ2NA@@._V1_SX300.jpg"
        },
        {
            "id": 126,
            "title": "Before Midnight",
            "year": "2013",
            "runtime": "109",
            "genres": [
                "Drama",
                "Romance"
            ],
            "director": "Richard Linklater",
            "actors": "Ethan Hawke, Julie Delpy, Seamus Davey-Fitzpatrick, Jennifer Prior",
            "plot": "We meet Jesse and Celine nine years on in Greece. Almost two decades have passed since their first meeting on that train bound for Vienna.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMjA5NzgxODE2NF5BMl5BanBnXkFtZTcwNTI1NTI0OQ@@._V1_SX300.jpg"
        },
        {
            "id": 127,
            "title": "Despicable Me",
            "year": "2010",
            "runtime": "95",
            "genres": [
                "Animation",
                "Adventure",
                "Comedy"
            ],
            "director": "Pierre Coffin, Chris Renaud",
            "actors": "Steve Carell, Jason Segel, Russell Brand, Julie Andrews",
            "plot": "When a criminal mastermind uses a trio of orphan girls as pawns for a grand scheme, he finds their love is profoundly changing him for the better.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3NjY0MTQ0Nl5BMl5BanBnXkFtZTcwMzQ2MTc0Mw@@._V1_SX300.jpg"
        },
        {
            "id": 128,
            "title": "Troy",
            "year": "2004",
            "runtime": "163",
            "genres": [
                "Adventure"
            ],
            "director": "Wolfgang Petersen",
            "actors": "Julian Glover, Brian Cox, Nathan Jones, Adoni Maropis",
            "plot": "An adaptation of Homer's great epic, the film follows the assault on Troy by the united Greek forces and chronicles the fates of the men involved.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMTk5MzU1MDMwMF5BMl5BanBnXkFtZTcwNjczODMzMw@@._V1_SX300.jpg"
        },
        {
            "id": 129,
            "title": "The Hobbit: An Unexpected Journey",
            "year": "2012",
            "runtime": "169",
            "genres": [
                "Adventure",
                "Fantasy"
            ],
            "director": "Peter Jackson",
            "actors": "Ian McKellen, Martin Freeman, Richard Armitage, Ken Stott",
            "plot": "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_SX300.jpg"
        },
        {
            "id": 130,
            "title": "The Great Gatsby",
            "year": "2013",
            "runtime": "143",
            "genres": [
                "Drama",
                "Romance"
            ],
            "director": "Baz Luhrmann",
            "actors": "Lisa Adam, Frank Aldridge, Amitabh Bachchan, Steve Bisley",
            "plot": "A writer and wall street trader, Nick, finds himself drawn to the past and lifestyle of his millionaire neighbor, Jay Gatsby.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SX300.jpg"
        },
        {
            "id": 131,
            "title": "Ice Age",
            "year": "2002",
            "runtime": "81",
            "genres": [
                "Animation",
                "Adventure",
                "Comedy"
            ],
            "director": "Chris Wedge, Carlos Saldanha",
            "actors": "Ray Romano, John Leguizamo, Denis Leary, Goran Visnjic",
            "plot": "Set during the Ice Age, a sabertooth tiger, a sloth, and a wooly mammoth find a lost human infant, and they try to return him to his tribe.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyNzI1ODA0MF5BMl5BanBnXkFtZTYwODIxODY3._V1_SX300.jpg"
        },
        {
            "id": 132,
            "title": "The Lord of the Rings: The Fellowship of the Ring",
            "year": "2001",
            "runtime": "178",
            "genres": [
                "Action",
                "Adventure",
                "Drama"
            ],
            "director": "Peter Jackson",
            "actors": "Alan Howard, Noel Appleby, Sean Astin, Sala Baker",
            "plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle Earth from the Dark Lord Sauron.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTEyMjAwMDU1OV5BMl5BanBnXkFtZTcwNDQyNTkxMw@@._V1_SX300.jpg"
        },
        {
            "id": 133,
            "title": "The Lord of the Rings: The Two Towers",
            "year": "2002",
            "runtime": "179",
            "genres": [
                "Action",
                "Adventure",
                "Drama"
            ],
            "director": "Peter Jackson",
            "actors": "Bruce Allpress, Sean Astin, John Bach, Sala Baker",
            "plot": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNDU0NjY4NTheQTJeQWpwZ15BbWU2MDk4MTY2Nw@@._V1_SX300.jpg"
        },
        {
            "id": 134,
            "title": "Ex Machina",
            "year": "2015",
            "runtime": "108",
            "genres": [
                "Drama",
                "Mystery",
                "Sci-Fi"
            ],
            "director": "Alex Garland",
            "actors": "Domhnall Gleeson, Corey Johnson, Oscar Isaac, Alicia Vikander",
            "plot": "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a breath-taking humanoid A.I.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_SX300.jpg"
        },
        {
            "id": 135,
            "title": "The Theory of Everything",
            "year": "2014",
            "runtime": "123",
            "genres": [
                "Biography",
                "Drama",
                "Romance"
            ],
            "director": "James Marsh",
            "actors": "Eddie Redmayne, Felicity Jones, Tom Prior, Sophie Perry",
            "plot": "A look at the relationship between the famous physicist Stephen Hawking and his wife.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMTU4MDA3NDNeQTJeQWpwZ15BbWU4MDk4NTMxNTIx._V1_SX300.jpg"
        },
        {
            "id": 136,
            "title": "Shogun",
            "year": "1980",
            "runtime": "60",
            "genres": [
                "Adventure",
                "Drama",
                "History"
            ],
            "director": "N/A",
            "actors": "Richard Chamberlain, Toshirô Mifune, Yôko Shimada, Furankî Sakai",
            "plot": "A English navigator becomes both a player and pawn in the complex political games in feudal Japan.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY1ODI4NzYxMl5BMl5BanBnXkFtZTcwNDA4MzUxMQ@@._V1_SX300.jpg"
        },
        {
            "id": 137,
            "title": "Spotlight",
            "year": "2015",
            "runtime": "128",
            "genres": [
                "Biography",
                "Crime",
                "Drama"
            ],
            "director": "Tom McCarthy",
            "actors": "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber",
            "plot": "The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_SX300.jpg"
        },
        {
            "id": 138,
            "title": "Vertigo",
            "year": "1958",
            "runtime": "128",
            "genres": [
                "Mystery",
                "Romance",
                "Thriller"
            ],
            "director": "Alfred Hitchcock",
            "actors": "James Stewart, Kim Novak, Barbara Bel Geddes, Tom Helmore",
            "plot": "A San Francisco detective suffering from acrophobia investigates the strange activities of an old friend's wife, all the while becoming dangerously obsessed with her.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BNzY0NzQyNzQzOF5BMl5BanBnXkFtZTcwMTgwNTk4OQ@@._V1_SX300.jpg"
        },
        {
            "id": 139,
            "title": "Whiplash",
            "year": "2014",
            "runtime": "107",
            "genres": [
                "Drama",
                "Music"
            ],
            "director": "Damien Chazelle",
            "actors": "Miles Teller, J.K. Simmons, Paul Reiser, Melissa Benoist",
            "plot": "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4OTQ3MDUyMV5BMl5BanBnXkFtZTgwOTA2MjU0MjE@._V1_SX300.jpg"
        },
        {
            "id": 140,
            "title": "The Lives of Others",
            "year": "2006",
            "runtime": "137",
            "genres": [
                "Drama",
                "Thriller"
            ],
            "director": "Florian Henckel von Donnersmarck",
            "actors": "Martina Gedeck, Ulrich Mühe, Sebastian Koch, Ulrich Tukur",
            "plot": "In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BNDUzNjYwNDYyNl5BMl5BanBnXkFtZTcwNjU3ODQ0MQ@@._V1_SX300.jpg"
        },
        {
            "id": 141,
            "title": "Hotel Rwanda",
            "year": "2004",
            "runtime": "121",
            "genres": [
                "Drama",
                "History",
                "War"
            ],
            "director": "Terry George",
            "actors": "Xolani Mali, Don Cheadle, Desmond Dube, Hakeem Kae-Kazim",
            "plot": "Paul Rusesabagina was a hotel manager who housed over a thousand Tutsi refugees during their struggle against the Hutu militia in Rwanda.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTI2MzQyNTc1M15BMl5BanBnXkFtZTYwMjExNjc3._V1_SX300.jpg"
        },
        {
            "id": 142,
            "title": "The Martian",
            "year": "2015",
            "runtime": "144",
            "genres": [
                "Adventure",
                "Drama",
                "Sci-Fi"
            ],
            "director": "Ridley Scott",
            "actors": "Matt Damon, Jessica Chastain, Kristen Wiig, Jeff Daniels",
            "plot": "An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg"
        },
        {
            "id": 143,
            "title": "To Kill a Mockingbird",
            "year": "1962",
            "runtime": "129",
            "genres": [
                "Crime",
                "Drama"
            ],
            "director": "Robert Mulligan",
            "actors": "Gregory Peck, John Megna, Frank Overton, Rosemary Murphy",
            "plot": "Atticus Finch, a lawyer in the Depression-era South, defends a black man against an undeserved rape charge, and his kids against prejudice.",
            "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMjA4MzI1NDY2Nl5BMl5BanBnXkFtZTcwMTcyODc5Mw@@._V1_SX300.jpg"
        },
        {
            "id": 144,
            "title": "The Hateful Eight",
            "year": "2015",
            "runtime": "187",
            "genres": [
                "Crime",
                "Drama",
                "Mystery"
            ],
            "director": "Quentin Tarantino",
            "actors": "Samuel L. Jackson, Kurt Russell, Jennifer Jason Leigh, Walton Goggins",
            "plot": "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SX300.jpg"
        },
        {
            "id": 146,
            "title": "The Big Short",
            "year": "2015",
            "runtime": "130",
            "genres": [
                "Biography",
                "Comedy",
                "Drama"
            ],
            "director": "Adam McKay",
            "actors": "Ryan Gosling, Rudy Eisenzopf, Casey Groves, Charlie Talbert",
            "plot": "Four denizens in the world of high-finance predict the credit and housing bubble collapse of the mid-2000s, and decide to take on the big banks for their greed and lack of foresight.",
            "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDc4MThhN2EtZjMzNC00ZDJmLThiZTgtNThlY2UxZWMzNjdkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
        },
        {
            "id": 147,
            "imdbID": "tt0315983",
            "title": "House of Sand and Fog",
            "year": "2003",
            "runtime": "126",
            "genres": [
                "Crime",
                "Drama"
            ],
            "director": "Vadim Perelman",
            "actors": "Jennifer Connelly, Ben Kingsley, Ron Eldard",
            "plot": "An abandoned wife is evicted from her house and starts a tragic conflict with her house's new owners.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTIzMjQ5NzM2M15BMl5BanBnXkFtZTYwMzU2NDY3._V1_SX300.jpg"
        },
        {
            "id": 148,
            "imdbID": "tt0093010",
            "title": "Fatal Attraction",
            "year": "1987",
            "runtime": "119",
            "genres": [
                "Drama",
                "Thriller"
            ],
            "director": "Adrian Lyne",
            "actors": "Michael Douglas, Glenn Close, Anne Archer",
            "plot": "A married man's one-night stand comes back to haunt him when that lover begins to stalk him and his family.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BYjBjNzNiNWYtYWU0NC00OTdjLTk3NmYtM2NjZjc2ZGIwOTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            "id": 149,
            "imdbID": "tt0093693",
            "title": "Overboard",
            "year": "1987",
            "runtime": "112",
            "genres": [
                "Comedy",
                "Romance"
            ],
            "director": "Garry Marshall",
            "actors": "Goldie Hawn, Kurt Russell, Edward Herrmann",
            "plot": "A cruel but beautiful heiress mocks and cheats a hired carpenter. When she gets amnesia after an accident, he decides to introduce her to regular life by convincing her that they're husband and wife.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjIzMjMxOTgzM15BMl5BanBnXkFtZTcwMTAwODM2NA@@._V1_SX300.jpg"
        },
        {
            "id": 150,
            "imdbID": "tt2486678",
            "title": "5 to 7",
            "year": "2014",
            "runtime": "95",
            "genres": [
                "Comedy",
                "Drama",
                "Romance"
            ],
            "director": "Victor Levin",
            "actors": "Anton Yelchin, Bérénice Marlohe, Olivia Thirlby",
            "plot": "An aspiring novelist enters into a relationship with a woman, though there's just one catch: She's married and the couple can only meet between the hours of 5 and 7 each evening.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTQ4Mzg3ODQ4M15BMl5BanBnXkFtZTgwMjA3NjE1NDE@._V1_SX300.jpg"
        },
        {
            "id": 151,
            "imdbID": "tt8134186",
            "title": "Devs",
            "year": "2020",
            "runtime": "409",
            "genres": [
                "Drama",
                "Mystery",
                "Sci-Fi"
            ],
            "director": "N/A",
            "actors": "Sonoya Mizuno, Nick Offerman, Jin Ha",
            "plot": "A computer engineer investigates the secretive development division in her company, which she believes is behind the disappearance of her boyfriend.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BODY3ODVjYjUtNTBiMy00ZjlkLTg5MTItNDU5NmVlM2U0YzhmXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg"
        },
        {
            "id": 152,
            "imdbID": "tt10288566",
            "title": "Another Round",
            "year": "2020",
            "runtime": "117",
            "genres": [
                "Comedy",
                "Drama"
            ],
            "director": "Thomas Vinterberg",
            "actors": "Mads Mikkelsen, Thomas Bo Larsen, Magnus Millang",
            "plot": "Four high-school teachers consume alcohol on a daily basis to see how it affects their social and professional lives.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTNjM2Y2ZjgtMDc5NS00MDQ1LTgyNGYtYzYwMTAyNWQwYTMyXkEyXkFqcGdeQXVyMjE4NzUxNDA@._V1_SX300.jpg"
        },
        {
            "id": 153,
            "imdbID": "tt0106856",
            "title": "Falling Down",
            "year": "1993",
            "runtime": "113",
            "genres": [
                "Action",
                "Crime",
                "Drama"
            ],
            "director": "Joel Schumacher",
            "actors": "Michael Douglas, Robert Duvall, Barbara Hershey",
            "plot": "An ordinary man frustrated with the various flaws he sees in society begins to psychotically and violently lash out against them.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BYjcxMzM3OWMtNmM3Yy00YzBkLTkxMmQtMDk4MmM3Y2Y4MDliL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            "id": 154,
            "imdbID": "tt0134119",
            "title": "The Talented Mr. Ripley",
            "year": "1999",
            "runtime": "139",
            "genres": [
                "Crime",
                "Drama",
                "Thriller"
            ],
            "director": "Anthony Minghella",
            "actors": "Matt Damon, Gwyneth Paltrow, Jude Law",
            "plot": "In late 1950s New York, a young underachiever named Tom Ripley is sent to Italy to retrieve Dickie Greenleaf, a rich and spoiled millionaire playboy. But when the errand fails, Ripley takes extreme measures.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BODA3NDhiZjYtYTk2NS00ZWYwLTljYTQtMjU0NzcyMGEzNTU2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            "id": 155,
            "imdbID": "tt1850397",
            "title": "The Loft",
            "year": "2014",
            "runtime": "108",
            "genres": [
                "Mystery",
                "Romance",
                "Thriller"
            ],
            "director": "Erik Van Looy",
            "actors": "Karl Urban, James Marsden, Wentworth Miller",
            "plot": "Five married guys secretly share a penthouse loft in the city where they can carry out hidden affairs. But the fantasy becomes a nightmare, when they discover the dead body of a woman in the loft one of the group must be involved.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjAyNTM4ODM5NV5BMl5BanBnXkFtZTgwNTA4NDE3MzE@._V1_SX300.jpg"
        },
        {
            "id": 156,
            "imdbID": "tt2798920",
            "title": "Annihilation",
            "year": "2018",
            "runtime": "115",
            "genres": [
                "Adventure",
                "Drama",
                "Horror"
            ],
            "director": "Alex Garland",
            "actors": "Natalie Portman, Jennifer Jason Leigh, Tessa Thompson",
            "plot": "A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don't apply.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTk2Mjc2NzYxNl5BMl5BanBnXkFtZTgwMTA2OTA1NDM@._V1_SX300.jpg"
        },
        {
            "id": 157,
            "imdbID": "tt9054904",
            "title": "Why Women Kill",
            "year": "2019",
            "runtime": "N/A",
            "genres": [
                "Comedy",
                "Crime",
                "Drama"
            ],
            "director": "N/A",
            "actors": "Jack Davenport, Lucy Liu, Allison Tolman",
            "plot": "An anthology series that follows three women in different decades all living in the same house, as they deal with infidelity and betrayals in their marriages.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjIwMjc1MmUtMmFkZC00N2ZiLTliZjktZDE3NWY4NmNiZTA2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
        },
        {
            "id": 158,
            "imdbID": "tt7826376",
            "title": "Upload",
            "year": "2020",
            "runtime": "296",
            "genres": [
                "Comedy",
                "Mystery",
                "Sci-Fi"
            ],
            "director": "N/A",
            "actors": "Robbie Amell, Andy Allo, Allegra Edwards",
            "plot": "A man is able to choose his own afterlife after his untimely death, by having his consciousness uploaded into a virtual world. As he gets used to his new life and befriends his angel (real world handler), questions about his death...",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BYjc5OWU5NzktNTU5MS00NzhiLWE5ZGEtOTIyMjJkOGEwMzQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg"
        },
        {
            "id": 159,
            "imdbID": "tt8690918",
            "title": "Resident Alien",
            "year": "2021",
            "runtime": "44",
            "genres": [
                "Comedy",
                "Drama",
                "Mystery"
            ],
            "director": "N/A",
            "actors": "Alan Tudyk, Sara Tomko, Corey Reynolds",
            "plot": "A crash-landed alien takes on the identity of a small-town Colorado doctor and slowly begins to wrestle with the moral dilemma of his secret mission on Earth.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTQzODE1MzYtMTM5Mi00YWM1LTgwZTctNTEzMWI2ZGQ3NWM1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            "id": 160,
            "imdbID": "tt9815454",
            "title": "Unorthodox",
            "year": "2020",
            "runtime": "213",
            "genres": [
                "Drama"
            ],
            "director": "N/A",
            "actors": "Shira Haas, Amit Rahav, Jeff Wilbusch",
            "plot": "Story of a young ultra-Orthodox Jewish woman who flees her arranged marriage and religious community to start a new life abroad.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjYwY2JhODUtOTE3MS00NTMxLThmYTQtMzg2YjAxZGE2Njk4XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
        },
        {
            "id": 161,
            "imdbID": "tt0124298",
            "title": "Blast from the Past",
            "year": "1999",
            "runtime": "112",
            "genres": [
                "Comedy",
                "Drama",
                "Romance"
            ],
            "director": "Hugh Wilson",
            "actors": "Brendan Fraser, Alicia Silverstone, Christopher Walken",
            "plot": "A naive man comes out into the world after spending 35 years in a nuclear fallout shelter.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BZGFiZjRhMTYtZmMzYS00MGEyLWEzN2EtNWMzMjA3OGI0NGZlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        },
        {
            "id": 162,
            "imdbID": "tt6628394",
            "title": "Bad Times at the El Royale",
            "year": "2018",
            "runtime": "141",
            "genres": [
                "Crime",
                "Drama",
                "Mystery"
            ],
            "director": "Drew Goddard",
            "actors": "Jeff Bridges, Cynthia Erivo, Dakota Johnson",
            "plot": "Early 1970s. Four strangers check in at the El Royale Hotel. The hotel is deserted, staffed by a single desk clerk. Some of the new guests' reasons for being there are less than innocent and some are not who they appear to be.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTk1Nzk1MDc1MF5BMl5BanBnXkFtZTgwNjU2NDExNjM@._V1_SX300.jpg"
        },
        {
            "id": 163,
            "imdbID": "tt9561862",
            "title": "Love, Death & Robots",
            "year": "2019",
            "runtime": "15",
            "genres": [
                "Animation",
                "Short",
                "Action"
            ],
            "director": "N/A",
            "actors": "Fred Tatasciore, Scott Whyte, Nolan North",
            "plot": "A collection of animated short stories that span various genres including science fiction, fantasy, horror and comedy.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BYTNiYTNkNTAtYzE3ZS00ZDQ1LWEwZTYtZjI1NzYzMWJjY2U4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
        },
        {
            "id": 164,
            "imdbID": "tt4975722",
            "title": "Moonlight",
            "year": "2016",
            "runtime": "111",
            "genres": [
                "Drama"
            ],
            "director": "Barry Jenkins",
            "actors": "Mahershala Ali, Naomie Harris, Trevante Rhodes",
            "plot": "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_SX300.jpg"
        },
        {
            "id": 165,
            "imdbID": "tt0080339",
            "title": "Airplane!",
            "year": "1980",
            "runtime": "88",
            "genres": [
                "Comedy"
            ],
            "director": "Jim Abrahams, David Zucker, Jerry Zucker",
            "actors": "Robert Hays, Julie Hagerty, Leslie Nielsen",
            "plot": "A man afraid to fly must ensure that a plane lands safely after the pilots become sick.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjA3YjdhMWEtYjc2Ni00YzVlLWI0MTUtMGZmNTJjNmU0Yzk2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
        },
        {
            "id": 166,
            "imdbID": "tt0091042",
            "title": "Ferris Bueller's Day Off",
            "year": "1986",
            "runtime": "103",
            "genres": [
                "Comedy"
            ],
            "director": "John Hughes",
            "actors": "Matthew Broderick, Alan Ruck, Mia Sara",
            "plot": "A high school wise guy is determined to have a day off from school, despite what the Principal thinks of that.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDA0NjZhZWUtNmI2NC00MmFjLTgwZDYtYzVjZmNhMDVmOTBkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
        },
        {
            "id": 167,
            "imdbID": "tt2802154",
            "title": "Leviathan",
            "year": "2014",
            "runtime": "140",
            "genres": [
                "Crime",
                "Drama"
            ],
            "director": "Andrey Zvyagintsev",
            "actors": "Aleksey Serebryakov, Elena Lyadova, Roman Madyanov",
            "plot": "In a Russian coastal town, Kolya is forced to fight the corrupt mayor when he is told that his house will be demolished. He recruits a lawyer friend to help, but the man's arrival brings further misfortune for Kolya and his family.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BNDBhNmQ3MDYtZDFkYS00MWIwLTg4OGQtNTYxNGIwNGNhNjBmL2ltYWdlXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_SX300.jpg"
        },
        {
            "id": 168,
            "imdbID": "tt3155604",
            "title": "The Geographer Drank His Globe Away",
            "year": "2013",
            "runtime": "120",
            "genres": [
                "Adventure",
                "Drama",
                "Romance"
            ],
            "director": "Aleksandr Veledinskiy",
            "actors": "Konstantin Khabenskiy, Elena Lyadova, Aleksandr Robak",
            "plot": "The ordinary troubles of the ordinary teacher in the ordinary class during the ordinary midlife crisis.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTUzZjBhMDQtMTEyYi00ODg3LTg2ZTUtZWJiOTA0OTNiY2FmXkEyXkFqcGdeQXVyMzQzNDc4NTQ@._V1_SX300.jpg"
        },
        {
            "id": 169,
            "imdbID": "tt3170832",
            "title": "Room",
            "year": "2015",
            "runtime": "118",
            "genres": [
                "Drama",
                "Thriller"
            ],
            "director": "Lenny Abrahamson",
            "actors": "Brie Larson, Jacob Tremblay, Sean Bridgers",
            "plot": "Held captive for 7 years in an enclosed space, a woman and her young son finally gain their freedom, allowing the boy to experience the outside world for the first time.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjE4NzgzNzEwMl5BMl5BanBnXkFtZTgwMTMzMDE0NjE@._V1_SX300.jpg"
        },
        {
            "id": 172,
            "imdbID": "tt0050212",
            "title": "The Bridge on the River Kwai",
            "year": "1957",
            "runtime": "161",
            "genres": [
                "Adventure",
                "Drama",
                "War"
            ],
            "director": "David Lean",
            "actors": "William Holden, Alec Guinness, Jack Hawkins",
            "plot": "British POWs are forced to build a railway bridge across the river Kwai for their Japanese captors in occupied Burma, not knowing that the allied forces are planning a daring commando raid through the jungle to destroy it.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BOGY5NmNlMmQtYzRlYy00NGQ5LWFkYjYtNzExZmQyMTg0ZDA0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg"
        },
        {
            "id": 173,
            "imdbID": "tt0078788",
            "title": "Apocalypse Now",
            "year": "1979",
            "runtime": "147",
            "genres": [
                "Drama",
                "Mystery",
                "War"
            ],
            "director": "Francis Ford Coppola",
            "actors": "Martin Sheen, Marlon Brando, Robert Duvall",
            "plot": "A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BYmQyNTA1ZGItNjZjMi00NzFlLWEzMWEtNWMwN2Q2MjJhYzEyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
        },
        {
            "id": 174,
            "imdbID": "tt3416742",
            "title": "What We Do in the Shadows",
            "year": "2014",
            "runtime": "86",
            "genres": [
                "Comedy",
                "Horror"
            ],
            "director": "Jemaine Clement, Taika Waititi",
            "actors": "Jemaine Clement, Taika Waititi, Cori Gonzalez-Macuer",
            "plot": "Viago, Deacon, and Vladislav are vampires who are struggling with the mundane aspects of modern life, like paying rent, keeping up with the chore wheel, trying to get into nightclubs, and overcoming flatmate conflicts.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BYmYyYWY4NjgtNGQ2Yi00NDNiLWJlOTgtYjI1MTI0NjZkNjhhXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg"
        },
        {
            "id": 175,
            "imdbID": "tt2725962",
            "title": "What We Did on Our Holiday",
            "year": "2014",
            "runtime": "95",
            "genres": [
                "Comedy",
                "Drama"
            ],
            "director": "Andy Hamilton, Guy Jenkin",
            "actors": "Rosamund Pike, David Tennant, Billy Connolly",
            "plot": "A family of five heads to Granddad's big 75th-birthday party at an uncle's estate in rural Scotland. The parents are separated and hope their three kids won't mention it. The kids love, can talk with, and would do anything for Gra...",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTQzNzgxMjUwN15BMl5BanBnXkFtZTgwMjgwNDY3NTE@._V1_SX300.jpg"
        },
        {
            "id": 176,
            "imdbID": "tt6751668",
            "title": "Parasite",
            "year": "2019",
            "runtime": "132",
            "genres": [
                "Drama",
                "Thriller"
            ],
            "director": "Bong Joon Ho",
            "actors": "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
            "plot": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
        },
        {
            "id": 177,
            "imdbID": "tt6966692",
            "title": "Green Book",
            "year": "2018",
            "runtime": "130",
            "genres": [
                "Biography",
                "Comedy",
                "Drama"
            ],
            "director": "Peter Farrelly",
            "actors": "Viggo Mortensen, Mahershala Ali, Linda Cardellini",
            "plot": "A working-class Italian-American bouncer becomes the driver for an African-American classical pianist on a tour of venues through the 1960s American South.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_SX300.jpg"
        },
        {
            "id": 178,
            "imdbID": "tt7146812",
            "title": "Onward",
            "year": "2020",
            "runtime": "102",
            "genres": [
                "Animation",
                "Adventure",
                "Comedy"
            ],
            "director": "Dan Scanlon",
            "actors": "Tom Holland, Chris Pratt, Julia Louis-Dreyfus",
            "plot": "Two elven brothers embark on a quest to bring their father back for one day.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTZlYzk3NzQtMmViYS00YWZmLTk5ZTEtNWE0NGVjM2MzYWU1XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg"
        },
        {
            "id": 179,
            "imdbID": "tt5814534",
            "title": "Spies in Disguise",
            "year": "2019",
            "runtime": "102",
            "genres": [
                "Animation",
                "Action",
                "Adventure"
            ],
            "director": "Nick Bruno, Troy Quane",
            "actors": "Rachel Brosnahan, Jarrett Bruno, Claire Crosby",
            "plot": "When the world's best spy is turned into a pigeon, he must rely on his nerdy tech officer to save the world.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzg1MzM3OWUtNjgzZC00NjMzLWE1NzAtOThiMDgyMjhhZDBhXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg"
        },
        {
            "id": 180,
            "imdbID": "tt0115561",
            "title": "The Apartment",
            "year": "1996",
            "runtime": "116",
            "genres": [
                "Drama",
                "Mystery",
                "Romance"
            ],
            "director": "Gilles Mimouni",
            "actors": "Romane Bohringer, Vincent Cassel, Jean-Philippe Écoffey",
            "plot": "A recently engaged man sees a former lover and becomes obsessed with meeting her again.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BODBlMzM2ODktMzQ4OS00ZWY4LWI1YzgtNTk3MWM5ZDk0OGMzXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg"
        },
        {
            "id": 181,
            "imdbID": "tt9541602",
            "title": "Extreme Job",
            "year": "2019",
            "runtime": "111",
            "genres": [
                "Action",
                "Comedy",
                "Crime"
            ],
            "director": "Byeong-heon Lee",
            "actors": "Lee Dong-yong, Kim Eui-sung, Myoung Gong",
            "plot": "A police undercover operation takes a delicious, unexpected turn.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BMWE2ZmI5NjEtMzQ5Zi00Zjk4LWFiODItOTRkNjMwYTY1YWNlXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_SX300.jpg"
        },
        {
            "id": 182,
            "imdbID": "tt3228774",
            "title": "Cruella",
            "year": "2021",
            "runtime": "134",
            "genres": [
                "Adventure",
                "Comedy",
                "Crime"
            ],
            "director": "Craig Gillespie",
            "actors": "Emma Stone, Emma Thompson, Joel Fry",
            "plot": "A live-action prequel feature film following a young Cruella de Vil.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BOWI5YTUxOWEtZmRiZS00ZmQxLWE2NzctYTRiODA2NzE1ZjczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg"
        },
        {
            "id": 183,
            "imdbID": "tt0780536",
            "title": "In Bruges",
            "year": "2008",
            "runtime": "107",
            "genres": [
                "Comedy",
                "Crime",
                "Drama"
            ],
            "director": "Martin McDonagh",
            "actors": "Colin Farrell, Brendan Gleeson, Ciarán Hinds",
            "plot": "Guilt-stricken after a job gone wrong, hitman Ray and his partner await orders from their ruthless boss in Bruges, Belgium, the last place in the world Ray wants to be.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTUwOGFiM2QtOWMxYS00MjU2LThmZDMtZDM2MWMzNzllNjdhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
            "id": 184,
            "imdbID": "tt4761112",
            "title": "The Mauritanian",
            "year": "2021",
            "runtime": "129",
            "genres": [
                "Biography",
                "Drama",
                "Thriller"
            ],
            "director": "Kevin Macdonald",
            "actors": "Tahar Rahim, Nouhe Hamady Bari, Saadna Hamoud",
            "plot": "Mohamedou Ould Slahi fights for freedom after being detained and imprisoned without charge by the U.S. Government for years.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BODJlMzdlYzItMzRkNi00NTE0LTliZjQtMTllNzkxNDVhNjkxXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg"
        },
        {
            "id": 185,
            "imdbID": "tt8946378",
            "title": "Knives Out",
            "year": "2019",
            "runtime": "130",
            "genres": [
                "Comedy",
                "Crime",
                "Drama"
            ],
            "director": "Rian Johnson",
            "actors": "Daniel Craig, Chris Evans, Ana de Armas",
            "plot": "A detective investigates the death of the patriarch of an eccentric, combative family.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BMGUwZjliMTAtNzAxZi00MWNiLWE2NzgtZGUxMGQxZjhhNDRiXkEyXkFqcGdeQXVyNjU1NzU3MzE@._V1_SX300.jpg"
        },
        {
            "id": 186,
            "imdbID": "tt10919420",
            "title": "Squid Game",
            "year": "2021",
            "runtime": "N/A",
            "genres": [
                "Action",
                "Drama",
                "Mystery"
            ],
            "director": "N/A",
            "actors": "Lee Jung-jae, Park Hae-soo, Hoyeon",
            "plot": "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg"
        },
        {
            "id": 187,
            "imdbID": "tt13087796",
            "title": "I'm Your Man",
            "year": "2021",
            "runtime": "108",
            "genres": [
                "Comedy",
                "Drama",
                "Romance"
            ],
            "director": "Maria Schrader",
            "actors": "Maren Eggert, Dan Stevens, Sandra Hüller",
            "plot": "In order to obtain research funds for her studies, a scientist accepts an offer to participate in an extraordinary experiment: for three weeks, she is to live with a humanoid robot, created to make her happy.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BNmEwMWM2ZWUtYTcwMi00Zjc5LWE0N2QtYzVmNTZhMzUzNWMwXkEyXkFqcGdeQXVyMDAyMjM2OQ@@._V1_SX300.jpg"
        },
        {
            "id": 188,
            "imdbID": "tt7638348",
            "title": "Boss Level",
            "year": "2020",
            "runtime": "100",
            "genres": [
                "Action",
                "Adventure",
                "Comedy"
            ],
            "director": "Joe Carnahan",
            "actors": "Frank Grillo, Mel Gibson, Naomi Watts",
            "plot": "Trapped in a time loop that constantly repeats the day of his murder, a former special forces agent must unlock the mystery behind his untimely demise.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTVkODdiMjAtNmQ5Yy00OThhLTg4MDItYTZlYTFmN2E0M2M1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
            "id": 189,
            "imdbID": "tt0103241",
            "title": "What About Bob?",
            "year": "1991",
            "runtime": "99",
            "genres": [
                "Comedy"
            ],
            "director": "Frank Oz",
            "actors": "Bill Murray, Richard Dreyfuss, Julie Hagerty",
            "plot": "A successful psychotherapist loses his mind after one of his most dependent patients, an obsessive-compulsive neurotic, tracks him down during his family vacation.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTQxMjU2ODk4N15BMl5BanBnXkFtZTgwODQzNTcxMTE@._V1_SX300.jpg"
        },
        {
            "id": 190,
            "imdbID": "tt0432283",
            "title": "Fantastic Mr. Fox",
            "year": "2009",
            "runtime": "87",
            "genres": [
                "Animation",
                "Adventure",
                "Comedy"
            ],
            "director": "Wes Anderson",
            "actors": "George Clooney, Meryl Streep, Bill Murray",
            "plot": "An urbane fox cannot resist returning to his farm raiding ways and then must help his community survive the farmers' retaliation.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BOGUwYTU4NGEtNDM4MS00NDRjLTkwNmQtOTkwMWMyMjhmMjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
        },
        {
            "id": 191,
            "imdbID": "tt13320622",
            "title": "The Lost City",
            "year": "2022",
            "runtime": "112",
            "genres": [
                "Action",
                "Adventure",
                "Comedy"
            ],
            "director": "Aaron Nee, Adam Nee",
            "actors": "Sandra Bullock, Channing Tatum, Daniel Radcliffe",
            "plot": "A reclusive romance novelist on a book tour with her cover model gets swept up in a kidnapping attempt that lands them both in a cutthroat jungle adventure.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BMmIwYzFhODAtY2I1YS00ZDdmLTkyYWQtZjI5NDIwMDc2MjEyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
        },
        {
            "id": 192,
            "imdbID": "tt0443536",
            "title": "Hoodwinked",
            "year": "2005",
            "runtime": "80",
            "genres": [
                "Animation",
                "Adventure",
                "Comedy"
            ],
            "director": "Cory Edwards, Todd Edwards, Tony Leech",
            "actors": "Anne Hathaway, Glenn Close, Patrick Warburton",
            "plot": "Little Red Riding Hood, the Wolf, the Woodsman, and Granny all tell the police the events that led up to their encounter.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BY2E5MGI2OTAtZDA1Yy00MTg5LTk3OTMtM2ZkNTQwMDAxMGVkXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg"
        },
        {
            "id": 193,
            "imdbID": "tt0256524",
            "title": "The Curse of the Jade Scorpion",
            "year": "2001",
            "runtime": "103",
            "genres": [
                "Comedy",
                "Crime",
                "Mystery"
            ],
            "director": "Woody Allen",
            "actors": "Greg Stebner, Woody Allen, John Tormey",
            "plot": "An insurance investigator and an efficency expert who hate each other are both hypnotized by a crooked hypnotist with a jade scorpion into stealing jewels.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BMzViMTNjNGUtMTQyNy00NTRhLWIzODEtYzJkM2YyNTg3YjMwXkEyXkFqcGdeQXVyNDQzMDg4Nzk@._V1_SX300.jpg"
        },
        {
            "id": 194,
            "imdbID": "tt2375605",
            "title": "The Act of Killing",
            "year": "2012",
            "runtime": "117",
            "genres": [
                "Documentary",
                "Biography",
                "Crime"
            ],
            "director": "Joshua Oppenheimer, Anonymous, Christine Cynn",
            "actors": "Anwar Congo, Herman Koto, Syamsul Arifin",
            "plot": "A documentary which challenges former Indonesian death-squad leaders to reenact their mass-killings in whichever cinematic genres they wish, including classic Hollywood crime scenarios and lavish musical numbers.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BNmZjMDgyMDgtYWI4OS00YjZkLWEyODktNzE0MmViOTFjMDA4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        },
        {
            "id": 195,
            "imdbID": "tt11286314",
            "title": "Don't Look Up",
            "year": "2021",
            "runtime": "138",
            "genres": [
                "Comedy",
                "Drama",
                "Sci-Fi"
            ],
            "director": "Adam McKay",
            "actors": "Leonardo DiCaprio, Jennifer Lawrence, Meryl Streep",
            "plot": "Two low-level astronomers must go on a giant media tour to warn humankind of an approaching comet that will destroy planet Earth.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjcwZjY3NjAtNzkxZS00NmFjLTg1OGYtODJmMThhY2UwMTc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
            "id": 196,
            "imdbID": "tt8847712",
            "title": "The French Dispatch",
            "year": "2020",
            "runtime": "107",
            "genres": [
                "Comedy",
                "Drama",
                "Romance"
            ],
            "director": "Wes Anderson",
            "actors": "Benicio Del Toro, Adrien Brody, Tilda Swinton",
            "plot": "A love letter to journalists set in an outpost of an American newspaper in a fictional twentieth century French city that brings to life a collection of stories published in \"The French Dispatch Magazine\".",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BNmQxZTNiODYtNzBhYy00MzVlLWJlN2UtNTc4YWZjMDIwMmEzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
            "id": 197,
            "imdbID": "tt6710474",
            "title": "Everything Everywhere All at Once",
            "year": "2022",
            "runtime": "139",
            "genres": [
                "Action",
                "Adventure",
                "Comedy"
            ],
            "director": "Dan Kwan, Daniel Scheinert",
            "actors": "Michelle Yeoh, Stephanie Hsu, Jamie Lee Curtis",
            "plot": "A middle-aged Chinese immigrant is swept up in an insane adventure in which she alone can save existence by exploring other universes connecting with the lives she could have led.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BYTdiOTIyZTQtNmQ1OS00NjZlLWIyMTgtYzk5Y2M3ZDVmMDk1XkEyXkFqcGdeQXVyMTAzMDg4NzU0._V1_SX300.jpg"
        },
        {
            "id": 198,
            "imdbID": "tt1423894",
            "title": "Barney's Version",
            "year": "2010",
            "runtime": "134",
            "genres": [
                "Comedy",
                "Drama"
            ],
            "director": "Richard J. Lewis",
            "actors": "Paul Giamatti, Rosamund Pike, Jake Hoffman",
            "plot": "The picaresque and touching story of the politically incorrect, fully lived life of the impulsive, irascible and fearlessly blunt Barney Panofsky.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTM4MTUwNDg0OF5BMl5BanBnXkFtZTcwMjUyODYxNA@@._V1_SX300.jpg"
        },
        {
            "id": 199,
            "imdbID": "tt6467266",
            "title": "Sing 2",
            "year": "2021",
            "runtime": "110",
            "genres": [
                "Animation",
                "Adventure",
                "Comedy"
            ],
            "director": "Garth Jennings, Christophe Lourdelet",
            "actors": "Matthew McConaughey, Reese Witherspoon, Scarlett Johansson",
            "plot": "Buster Moon and his friends must persuade reclusive rock star Clay Calloway to join them for the opening of a new show.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BMWRiZGQ1NDMtODQ2OS00MDlhLWJkZGYtM2ZmNjlhZThjOWRmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
            "id": 201,
            "imdbID": "tt1677720",
            "title": "Ready Player One",
            "year": "2018",
            "runtime": "140",
            "genres": [
                "Action",
                "Adventure",
                "Sci-Fi"
            ],
            "director": "Steven Spielberg",
            "actors": "Tye Sheridan, Olivia Cooke, Ben Mendelsohn",
            "plot": "When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_SX300.jpg"
        },
        {
            "id": 202,
            "imdbID": "tt12593682",
            "title": "Bullet Train",
            "year": "2022",
            "runtime": "127",
            "genres": [
                "Action",
                "Comedy",
                "Thriller"
            ],
            "director": "David Leitch",
            "actors": "Brad Pitt, Joey King, Aaron Taylor-Johnson",
            "plot": "Five assassins aboard a swiftly-moving bullet train find out that their missions have something in common.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTBhZGJjYjQtODRjOC00MWJhLTk1NTctZDJiM2JkMTY3MGNiXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX300.jpg"
        },
        {
            "id": 203,
            "imdbID": "tt0319061",
            "title": "Big Fish",
            "year": "2003",
            "runtime": "125",
            "genres": [
                "Adventure",
                "Drama",
                "Fantasy"
            ],
            "director": "Tim Burton",
            "actors": "Ewan McGregor, Albert Finney, Billy Crudup",
            "plot": "A frustrated son tries to determine the fact from fiction in his dying father's life.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BZTNlNTQzMGEtYjU4Yi00MzEzLThmMTQtNmM0NzcxZWI1MTk0XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
        },
        {
            "id": 204,
            "imdbID": "tt0449059",
            "title": "Little Miss Sunshine",
            "year": "2006",
            "runtime": "101",
            "genres": [
                "Comedy",
                "Drama"
            ],
            "director": "Jonathan Dayton, Valerie Faris",
            "actors": "Steve Carell, Toni Collette, Greg Kinnear",
            "plot": "A family determined to get their young daughter into the finals of a beauty pageant take a cross-country trip in their VW bus.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTgzNTgzODU0NV5BMl5BanBnXkFtZTcwMjEyMjMzMQ@@._V1_SX300.jpg"
        },
        {
            "id": 206,
            "imdbID": "tt9198364",
            "title": "Three Thousand Years of Longing",
            "year": "2022",
            "runtime": "108",
            "genres": [
                "Drama",
                "Fantasy",
                "Romance"
            ],
            "director": "George Miller",
            "actors": "Tilda Swinton, Idris Elba, Erdil Yasaroglu",
            "plot": "A lonely scholar, on a trip to Istanbul, discovers a Djinn who offers her three wishes in exchange for his freedom.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BODFjMmVmN2YtOTc5Yy00YWM0LTg0N2ItZDJiNTU5MWMyMDVlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
            "id": 207,
            "imdbID": "tt9484998",
            "title": "Palm Springs",
            "year": "2020",
            "runtime": "90",
            "genres": [
                "Comedy",
                "Fantasy",
                "Mystery"
            ],
            "director": "Max Barbakow",
            "actors": "Andy Samberg, Cristin Milioti, J.K. Simmons",
            "plot": "Stuck in a time loop, two wedding guests develop a budding romance while living the same day over and over again.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BYjk0MTgzMmQtZmY2My00NmE5LWExNGUtYjZkNTA3ZDkyMTJiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
        },
        {
            "id": 208,
            "imdbID": "tt0359950",
            "title": "The Secret Life of Walter Mitty",
            "year": "2013",
            "runtime": "114",
            "genres": [
                "Adventure",
                "Comedy",
                "Drama"
            ],
            "director": "Ben Stiller",
            "actors": "Ben Stiller, Kristen Wiig, Jon Daly",
            "plot": "When both he and a colleague are about to lose their job, Walter takes action by embarking on an adventure more extraordinary than anything he ever imagined.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BODYwNDYxNDk1Nl5BMl5BanBnXkFtZTgwOTAwMTk2MDE@._V1_SX300.jpg"
        },
        {
            "id": 209,
            "imdbID": "tt3606888",
            "title": "A Street Cat Named Bob",
            "year": "2016",
            "runtime": "103",
            "genres": [
                "Biography",
                "Drama",
                "Family"
            ],
            "director": "Roger Spottiswoode",
            "actors": "Luke Treadaway, Bob the Cat, Ruta Gedmintas",
            "plot": "The true feel-good story of how James Bowen, a busker and recovering drug addict, has his life transformed when he meets a stray ginger cat. Based on the international best selling book.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzg4YzgwN2UtNjc3MS00Yzc5LTlmODEtYTRhYzZkZDUwZGY5XkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_SX300.jpg"
        },
        {
            "id": 210,
            "imdbID": "tt11271038",
            "title": "Licorice Pizza",
            "year": "2021",
            "runtime": "133",
            "genres": [
                "Comedy",
                "Drama",
                "Romance"
            ],
            "director": "Paul Thomas Anderson",
            "actors": "Alana Haim, Cooper Hoffman, Sean Penn",
            "plot": "The story of Alana Kane and Gary Valentine growing up, running around and going through the treacherous navigation of first love in the San Fernando Valley, 1973.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BYjkwMzIxYzMtOTVkMS00NDQxLThkMjItNzgxN2RiNjdlNTliXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
        },
        {
            "id": 211,
            "imdbID": "tt10231312",
            "title": "Inside Job",
            "year": "2021",
            "runtime": "2",
            "genres": [
                "Animation",
                "Comedy",
                "Fantasy"
            ],
            "director": "N/A",
            "actors": "Lizzy Caplan, Christian Slater, Clark Duke",
            "plot": "For employees of the Deep State, conspiracies aren't just theories, they're fact. And keeping them a secret is a full-time job.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BZTg5YjE1YzktYjRmZC00Y2VjLThiMDItOTcwODRhMjRjZDQ1XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg"
        },
        {
            "id": 212,
            "imdbID": "tt5089786",
            "title": "100 Meters",
            "year": "2016",
            "runtime": "108",
            "genres": [
                "Biography",
                "Comedy",
                "Drama"
            ],
            "director": "Marcel Barrena",
            "actors": "Dani Rovira, Karra Elejalde, Alexandra Jiménez",
            "plot": "Based on true events, a Spanish man with multiple sclerosis who tried to finish an Iron-Man competition despite he was told that he could not make 100 meters.",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BY2JjNTA0OWItMjhlMC00ZTYzLTlhODktODFiNjg3ZTZmNTY4L2ltYWdlXkEyXkFqcGdeQXVyMzkwMTMxNDQ@._V1_SX300.jpg"
        },
        {
            "id": 213,
            "imdbID": "tt0364517",
            "title": "Love Me If You Dare",
            "year": "2003",
            "runtime": "93",
            "genres": [
                "Comedy",
                "Drama",
                "Romance"
            ],
            "director": "Yann Samuell",
            "actors": "Guillaume Canet, Marion Cotillard, Thibault Verhaeghe",
            "plot": "As adults, best friends Julien and Sophie continue the odd game they started as children -- a fearless competition to outdo one another with daring and outrageous stunts. While they often act out to relieve one another's pain, the...",
            "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjZhYmFmZGYtNGQ1MC00YTBlLWJmNjMtYTM4ZjRkMTgxMWIxXkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg"
        }
    ]
}