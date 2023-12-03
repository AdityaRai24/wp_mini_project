// import mongoose from "mongoose";
// import Connection from "./connection/Connection.js";

// const questionSchema = mongoose.Schema({
//   Ques: {
//     type: String,
//     required: true,
//   },
//   Option1: {
//     type: String,
//     required: true,
//   },
//   Option2: {
//     type: String,
//     required: true,
//   },
//   Option3: {
//     type: String,
//     required: true,
//   },
//   Option4: {
//     type: String,
//     required: true,
//   },
//   Category: {
//     type: String,
//     required: true,
//   },
//   CorrectOption: {
//     type: Number,
//     required: true,
//   },
// });

// const Question = mongoose.model("Question", questionSchema);


// const data = [
//   {
//       Ques: "Who holds the record for the most Grand Slam singles titles in tennis (men's category) as of 2022?",
//       Option1: "Roger Federer",
//       Option2: "Novak Djokovic",
//       Option3: "Rafael Nadal",
//       Option4: "Pete Sampras",
//       Category: "sports",
//      CorrectOption: 2,
//   },
//   {
//       Ques: "Which country won the FIFA World Cup in 2018?",
//       Option1: "Germany",
//       Option2: "Argentina",
//       Option3: "France",
//       Option4: "Brazil",
//       Category: "sports",
//       CorrectOption: 3,
//   },
//   {
//       Ques: "Who won the gold medal in men's 100m sprint at the 2016 Rio Olympics?",

//       Option1: "Usain Bolt",
//       Option2: "Justin Gatlin",
//       Option3: "Yohan Blake",
//       Option4: "Andre De Grasse",
//       Category: "sports",
//       CorrectOption: 1
//   },
//   {
//       Ques: "Which tennis player holds the record for the most Grand Slam singles titles in the Open Era?",

//       Option1: "Roger Federer",
//       Option2: "Rafael Nadal",
//       Option3: "Novak Djokovic",
//       Option4: "Serena Williams",
//       Category: "sports",
//       CorrectOption: 3
//   },
//   {
//       Ques: "Who won the 2020 UEFA Champions League?",

//       Option1: "Liverpool",
//       Option2: "Real Madrid",
//       Option3: "Bayern Munich",
//       Option4: "Manchester City",
//       Category: "sports",
//       CorrectOption: 3
//   },
//   {
//       Ques: "Which Formula 1 driver has the most World Championships?",

//       Option1: "Sebastian Vettel",
//       Option2: "Lewis Hamilton",
//       Option3: "Ayrton Senna",
//       Option4: "Michael Schumacher",
//       Category: "sports",
//       CorrectOption: 2
//   },
//   {
//       Ques: "Who holds the record for the most goals scored in a single NHL season?",

//       Option1: "Wayne Gretzky",
//       Option2: "Mario Lemieux",
//       Option3: "Brett Hull",
//       Option4: "Alexander Ovechkin",
//       Category: "sports",
//       CorrectOption: 1
//   },
//   {
//       Ques: "In which year did the first modern Olympic Games take place?",

//       Option1: "1892",
//       Option2: "1900",
//       Option3: "1896",
//       Option4: "1904",
//       Category: "sports",
//       CorrectOption: 3
//   },
//   {
//       Ques: "Which golfer has won the most Masters Tournaments?",

//       Option1: "Tiger Woods",
//       Option2: "Jack Nicklaus",
//       Option3: "Phil Mickelson",
//       Option4: "Arnold Palmer",
//       Category: "sports",
//       CorrectOption: 2
//   },
//   {
//       Ques: "Who won the FIFA Women's World Cup in 2019?",

//       Option1: "Germany",
//       Option2: "USA",
//       Option3: "France",
//       Option4: "England",
//       Category: "sports",
//       CorrectOption: 2
//   },
//   {
//       Ques: "Which country hosted the 2019 Rugby World Cup?",

//       Option1: "Australia",
//       Option2: "South Africa",
//       Option3: "New Zealand",
//       Option4: "Japan",
//       Category: "sports",
//       CorrectOption: 4
//   },
//   {
//       Ques: "Who is the current reigning heavyweight boxing champion?",

//       Option1: "Tyson Fury",
//       Option2: "Deontay Wilder",
//       Option3: "Anthony Joshua",
//       Option4: "Andy Ruiz Jr.",
//       Category: "sports",
//       CorrectOption: 1
//   },
//   {
//       Ques: "Which country won the ICC Cricket World Cup in 2019?",

//       Option1: "India",
//       Option2: "Australia",
//       Option3: "England",
//       Option4: "New Zealand",
//       Category: "sports",
//       CorrectOption: 3
//   },
//   {
//       Ques: "Who is the all-time leading scorer in NBA history?",

//       Option1: "Kobe Bryant",
//       Option2: "LeBron James",
//       Option3: "Michael Jordan",
//       Option4: "Kareem Abdul-Jabbar",
//       Category: "sports",
//       CorrectOption: 4
//   },
//   {
//       Ques: "In which city were the 2016 Summer Olympics held?",

//       Option1: "London",
//       Option2: "Rio de Janeiro",
//       Option3: "Tokyo",
//       Option4: "Beijing",
//       Category: "sports",
//       CorrectOption: 2
//   },
//   {
//       Ques: "Which tennis player holds the record for the most Grand Slam singles titles in the Open Era?",

//       Option1: "Roger Federer",
//       Option2: "Rafael Nadal",
//       Option3: "Novak Djokovic",
//       Option4: "Serena Williams",
//       Category: "sports",
//       CorrectOption: 3
//   },
//   {
//       "Ques": "Who was the first President of the United States?",

//       Option1: "Thomas Jefferson",
//       Option2: "George Washington",
//       Option3: "John Adams",
//       Option4: "James Madison",
//       Category: "History",
//       CorrectOption: 2
//   },
//   {
//       "Ques": "In which year did Christopher Columbus first reach the Americas?",

//       Option1: "1492",
//       Option2: "1510",
//       Option3: "1607",
//       Option4: "1620",
//       Category: "History",
//       CorrectOption: 1
//   },
//   {
//       "Ques": "Who was the Mughal Emperor who built the Taj Mahal?",

//       Option1: "Akbar",
//       Option2: "Jahangir",
//       Option3: "Shah Jahan",
//       Option4: "Aurangzeb",
//       Category: "History",
//       CorrectOption: 3
//   },
//   {
//       "Ques": "Which ancient civilization is known for the creation of the first written language, cuneiform?",

//       Option1: "Greek",
//       Option2: "Egyptian",
//       Option3: "Sumerian",
//       Option4: "Indus Valley",
//       Category: "History",
//       CorrectOption: 3
//   },
//   {
//       "Ques": "Who was the first Emperor of China, known for the Terracotta Army?",

//       Option1: "Confucius",
//       Option2: "Qin Shi Huang",
//       Option3: "Emperor Wu",
//       Option4: "Han Wudi",
//       Category: "History",
//       CorrectOption: 2
//   },
//   {
//       "Ques": "Which famous queen ruled ancient Egypt and is known for her alliance with Mark Antony?",

//       Option1: "Hatshepsut",
//       Option2: "Cleopatra",
//       Option3: "Nefertiti",
//       Option4: "Tiye",
//       Category: "History",
//       CorrectOption: 2
//   },
//   {
//       "Ques": "Who was the leader of the Indian independence movement and the first Prime Minister of India?",

//       Option1: "Mahatma Gandhi",
//       Option2: "Jawaharlal Nehru",
//       Option3: "Sardar Patel",
//       Option4: "Subhas Chandra Bose",
//       Category: "History",
//       CorrectOption: 2
//   },
//   {
//       "Ques": "In which year did the French Revolution begin?",

//       Option1: "1776",
//       Option2: "1789",
//       Option3: "1799",
//       Option4: "1804",
//       Category: "History",
//       CorrectOption: 2
//   },
//   {
//       "Ques": "Who was the first woman to win a Nobel Prize, and the only person to win Nobel Prizes in two different scientific fields?",

//       Option1: "Marie Curie",
//       Option2: "Rosalind Franklin",
//       Option3: "Dorothy Crowfoot Hodgkin",
//       Option4: "Barbara McClintock",
//       Category: "History",
//       CorrectOption: 1
//   },
//   {
//       "Ques": "Which ancient civilization is known for the Hanging Gardens of Babylon?",

//       Option1: "Persian",
//       Option2: "Babylonian",
//       Option3: "Assyrian",
//       Option4: "Phoenician",
//       Category: "History",
//       CorrectOption: 2
//   },
//   {
//       "Ques": "Who was the leader of the American Civil Rights Movement and gave the famous 'I Have a Dream' speech?",

//       Option1: "Malcolm X",
//       Option2: "Rosa Parks",
//       Option3: "Martin Luther King Jr.",
//       Option4: "Harriet Tubman",
//       Category: "History",
//       CorrectOption: 3
//   },
//   {
//       "Ques": "Which ancient civilization is credited with the invention of the wheel?",

//       Option1: "Sumerian",
//       Option2: "Indus Valley",
//       Option3: "Chinese",
//       Option4: "Mayan",
//       Category: "History",
//       CorrectOption: 1
//   },
//   {
//       "Ques": "Who was the first emperor of Rome?",

//       Option1: "Julius Caesar",
//       Option2: "Augustus",
//       Option3: "Tiberius",
//       Option4: "Nero",
//       Category: "History",
//       CorrectOption: 2
//   },
//   {
//       "Ques": "Which ancient Greek philosopher is known for his contributions to Western philosophy and his student, Alexander the Great?",

//       Option1: "Socrates",
//       Option2: "Aristotle",
//       Option3: "Plato",
//       Option4: "Homer",
//       Category: "History",
//       CorrectOption: 3
//   },
//   {
//       "Ques": "Who was the first woman to be elected as the Prime Minister of a country and served as the Prime Minister of India?",

//       Option1: "Golda Meir",
//       Option2: "Margaret Thatcher",
//       Option3: "Benazir Bhutto",
//       Option4: "Indira Gandhi",
//       Category: "History",
//       CorrectOption: 4
//   },
//   {
//       "Ques": "Who won the Academy Award for Best Actor for his role in the movie 'The Revenant'?",

//       Option1: "Leonardo DiCaprio",
//       Option2: "Johnny Depp",
//       Option3: "Brad Pitt",
//       Option4: "Tom Hanks",
//       Category: "Entertainment",
//       CorrectOption: 1
//   },
//   {
//       "Ques": "Which Bollywood actor is often referred to as the 'King of Bollywood'?",

//       Option1: "Shah Rukh Khan",
//       Option2: "Aamir Khan",
//       Option3: "Salman Khan",
//       Option4: "Akshay Kumar",
//       Category: "Entertainment",
//       CorrectOption: 1
//   },
//   {
//       "Ques": "In the movie 'Titanic,' who played the role of Jack Dawson?",

//       Option1: "Brad Pitt",
//       Option2: "Leonardo DiCaprio",
//       Option3: "Johnny Depp",
//       Option4: "Matthew McConaughey",
//       Category: "Entertainment",
//       CorrectOption: 2
//   },
//   {
//       "Ques": "Which Bollywood actress is known as the 'Queen of Bollywood'?",

//       Option1: "Deepika Padukone",
//       Option2: "Priyanka Chopra",
//       Option3: "Kangana Ranaut",
//       Option4: "Alia Bhatt",
//       Category: "Entertainment",
//       CorrectOption: 3
//   },
//   {
//       "Ques": "Who directed the film 'Inception'?",

//       Option1: "Christopher Nolan",
//       Option2: "Steven Spielberg",
//       Option3: "Quentin Tarantino",
//       Option4: "Martin Scorsese",
//       Category: "Entertainment",
//       CorrectOption: 1
//   },
//   {
//       "Ques": "In the Harry Potter film series, who played the role of Hermione Granger?",

//       Option1: "Emma Watson",
//       Option2: "Emma Stone",
//       Option3: "Jennifer Lawrence",
//       Option4: "Keira Knightley",
//       Category: "Entertainment",
//       CorrectOption: 1
//   },
//   {
//       "Ques": "Which Hollywood actor starred in both 'The Godfather' and 'Scarface'?",

//       Option1: "Robert De Niro",
//       Option2: "Al Pacino",
//       Option3: "Marlon Brando",
//       Option4: "Jack Nicholson",
//       Category: "Entertainment",
//       CorrectOption: 2
//   },
//   {
//       "Ques": "Who composed the music for the film 'Schindler's List'?",

//       Option1: "John Williams",
//       Option2: "Hans Zimmer",
//       Option3: "Ennio Morricone",
//       Option4: "Alan Silvestri",
//       Category: "Entertainment",
//       CorrectOption: 1
//   },
//   {
//       "Ques": "Which Bollywood film is the highest-grossing Indian film worldwide?",

//       Option1: "Dangal",
//       Option2: "PK",
//       Option3: "Baahubali 2: The Conclusion",
//       Option4: "Sultan",
//       Category: "Entertainment",
//       CorrectOption: 3
//   },
//   {
//       "Ques": "Who played the character of Tony Stark/Iron Man in the Marvel Cinematic Universe?",

//       Option1: "Chris Evans",
//       Option2: "Chris Hemsworth",
//       Option3: "Robert Downey Jr.",
//       Option4: "Mark Ruffalo",
//       Category: "Entertainment",
//       CorrectOption: 3
//   },
//   {
//       "Ques": "Which Bollywood actor is known for his roles in movies like '3 Idiots' and 'Dangal'?",

//       Option1: "Aamir Khan",
//       Option2: "Salman Khan",
//       Option3: "Shah Rukh Khan",
//       Option4: "Akshay Kumar",
//       Category: "Entertainment",
//       CorrectOption: 1
//   },
//   {
//       "Ques": "Who directed the film 'Jurassic Park'?",

//       Option1: "James Cameron",
//       Option2: "Steven Spielberg",
//       Option3: "Christopher Nolan",
//       Option4: "George Lucas",
//       Category: "Entertainment",
//       CorrectOption: 2
//   },
//   {
//       "Ques": "In the movie 'Gone with the Wind,' who played the role of Scarlett O'Hara?",

//       Option1: "Vivien Leigh",
//       Option2: "Katharine Hepburn",
//       Option3: "Grace Kelly",
//       Option4: "Audrey Hepburn",
//       Category: "Entertainment",
//       CorrectOption: 1
//   },
//   {
//       "Ques": "Which Indian film director is known for the movie 'Lagaan'?",

//       Option1: "Karan Johar",
//       Option2: "Rajkumar Hirani",
//       Option3: "Ashutosh Gowariker",
//       Option4: "Sanjay Leela Bhansali",
//       Category: "Entertainment",
//       CorrectOption: 3
//   },
//   {
//       "Ques": "Who won the Academy Award for Best Actress for her role in the movie 'La La Land'?",

//       Option1: "Emma Stone",
//       Option2: "Natalie Portman",
//       Option3: "Cate Blanchett",
//       Option4: "Jennifer Lawrence",
//       Category: "Entertainment",
//       CorrectOption: 1
//   },
// ];



// const insertData = async () => {
//   try {
//     const result = await Question.insertMany(data);
//     console.log("Data inserted successfully:", result);
//   } catch (error) {
//     console.error("Error inserting data:", error);
//   } finally {
//     // Close the Mongoose connection
//     mongoose.connection.close();
//   }
// };

// // Ensure you are connected to MongoDB before attempting to insert data
// Connection()
//   .then(() => insertData())
//   .catch((error) => console.error("Error connecting to MongoDB:", error));
