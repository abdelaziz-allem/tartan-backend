const POSTER = {
  titanic: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
  lionKing: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
  avatar: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
  jurassicPark: "https://image.tmdb.org/t/p/w500/fjTU1Bgh3KJu4aatZil3sofR2zC.jpg",
  homeAlone: "https://image.tmdb.org/t/p/w500/onTSipZ8R3bliBdKfPtsDuHTdlL.jpg",
  matrix: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  gladiator: "https://image.tmdb.org/t/p/w500/wN2xWp1eIwCKOD0BHTcErTBv1Uq.jpg",
  darkKnight: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  interstellar: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  spiderMan: "https://image.tmdb.org/t/p/w500/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg",
};

// fileUrl = show poster alongside question (only when poster doesn't spoil the answer)
// fileUrl = null when the question asks "which movie" or the poster text/title gives it away

export const hollywoodQuestions = [
  // ═══════════════════════════════════════════════════════════════════════════
  // ─── 200 Points (Easy) ────────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════════════════

  // --- Titanic ---
  { text: "Who directed Titanic?", answer: "James Cameron", points: 200, fileUrl: POSTER.titanic, fileType: "image", answerFileUrl: POSTER.titanic, answerFileType: "image" },
  { text: "Leonardo DiCaprio's character in Titanic is named what?", answer: "Jack Dawson", points: 200, fileUrl: POSTER.titanic, fileType: "image", answerFileUrl: POSTER.titanic, answerFileType: "image" },
  { text: "What is the name of the ship that sinks in Titanic?", answer: "RMS Titanic", points: 200, fileUrl: POSTER.titanic, fileType: "image", answerFileUrl: POSTER.titanic, answerFileType: "image" },
  { text: "Kate Winslet plays which character in Titanic?", answer: "Rose DeWitt Bukater", points: 200, fileUrl: POSTER.titanic, fileType: "image", answerFileUrl: POSTER.titanic, answerFileType: "image" },
  { text: "Titanic is set during which historic disaster?", answer: "The sinking of the Titanic", points: 200, fileUrl: POSTER.titanic, fileType: "image", answerFileUrl: POSTER.titanic, answerFileType: "image" },

  // --- The Lion King ---
  { text: "What color is Simba's father Mufasa?", answer: "Golden", points: 200, fileUrl: POSTER.lionKing, fileType: "image", answerFileUrl: POSTER.lionKing, answerFileType: "image" },
  { text: "Who is the main villain in The Lion King?", answer: "Scar", points: 200, fileUrl: POSTER.lionKing, fileType: "image", answerFileUrl: POSTER.lionKing, answerFileType: "image" },
  { text: "\"Hakuna Matata\" is a famous song from which Disney movie?", answer: "The Lion King", points: 200, fileUrl: null, fileType: null, answerFileUrl: POSTER.lionKing, answerFileType: "image" },
  { text: "What type of animal is Simba?", answer: "Lion", points: 200, fileUrl: POSTER.lionKing, fileType: "image", answerFileUrl: POSTER.lionKing, answerFileType: "image" },
  { text: "Timon and Pumbaa are what types of animals in The Lion King?", answer: "Meerkat and warthog", points: 200, fileUrl: POSTER.lionKing, fileType: "image", answerFileUrl: POSTER.lionKing, answerFileType: "image" },

  // --- Avatar ---
  { text: "The blue aliens in Avatar live on which moon?", answer: "Pandora", points: 200, fileUrl: POSTER.avatar, fileType: "image", answerFileUrl: POSTER.avatar, answerFileType: "image" },
  { text: "The native species in Avatar are called what?", answer: "Na'vi", points: 200, fileUrl: POSTER.avatar, fileType: "image", answerFileUrl: POSTER.avatar, answerFileType: "image" },
  { text: "What color are the Na'vi in Avatar?", answer: "Blue", points: 200, fileUrl: POSTER.avatar, fileType: "image", answerFileUrl: POSTER.avatar, answerFileType: "image" },
  { text: "Who directed Avatar?", answer: "James Cameron", points: 200, fileUrl: POSTER.avatar, fileType: "image", answerFileUrl: POSTER.avatar, answerFileType: "image" },
  { text: "Sam Worthington plays which character in Avatar?", answer: "Jake Sully", points: 200, fileUrl: POSTER.avatar, fileType: "image", answerFileUrl: POSTER.avatar, answerFileType: "image" },

  // --- Jurassic Park ---
  { text: "What type of dinosaur is the main predator in Jurassic Park?", answer: "Tyrannosaurus Rex", points: 200, fileUrl: POSTER.jurassicPark, fileType: "image", answerFileUrl: POSTER.jurassicPark, answerFileType: "image" },
  { text: "What fictional island is the setting of Jurassic Park?", answer: "Isla Nublar", points: 200, fileUrl: POSTER.jurassicPark, fileType: "image", answerFileUrl: POSTER.jurassicPark, answerFileType: "image" },
  { text: "Who directed Jurassic Park?", answer: "Steven Spielberg", points: 200, fileUrl: POSTER.jurassicPark, fileType: "image", answerFileUrl: POSTER.jurassicPark, answerFileType: "image" },
  { text: "Jurassic Park's dinosaurs are brought back to life using DNA found in what?", answer: "Mosquitoes trapped in amber", points: 200, fileUrl: POSTER.jurassicPark, fileType: "image", answerFileUrl: POSTER.jurassicPark, answerFileType: "image" },
  { text: "Sam Neill plays which paleontologist in Jurassic Park?", answer: "Dr. Alan Grant", points: 200, fileUrl: POSTER.jurassicPark, fileType: "image", answerFileUrl: POSTER.jurassicPark, answerFileType: "image" },

  // --- Home Alone ---
  { text: "Kevin McCallister is the main character of which Christmas movie?", answer: "Home Alone", points: 200, fileUrl: null, fileType: null, answerFileUrl: POSTER.homeAlone, answerFileType: "image" },
  { text: "Who plays the burglar duo that Kevin outsmarts in Home Alone?", answer: "Joe Pesci and Daniel Stern", points: 200, fileUrl: POSTER.homeAlone, fileType: "image", answerFileUrl: POSTER.homeAlone, answerFileType: "image" },
  { text: "What actor plays Kevin McCallister in Home Alone?", answer: "Macaulay Culkin", points: 200, fileUrl: POSTER.homeAlone, fileType: "image", answerFileUrl: POSTER.homeAlone, answerFileType: "image" },
  { text: "What holiday is Home Alone set during?", answer: "Christmas", points: 200, fileUrl: POSTER.homeAlone, fileType: "image", answerFileUrl: POSTER.homeAlone, answerFileType: "image" },
  { text: "The burglars in Home Alone call themselves what?", answer: "The Wet Bandits", points: 200, fileUrl: POSTER.homeAlone, fileType: "image", answerFileUrl: POSTER.homeAlone, answerFileType: "image" },

  // --- The Matrix ---
  { text: "Neo must choose between a red pill and what other color pill in The Matrix?", answer: "Blue", points: 200, fileUrl: POSTER.matrix, fileType: "image", answerFileUrl: POSTER.matrix, answerFileType: "image" },
  { text: "Keanu Reeves plays which character in The Matrix?", answer: "Neo", points: 200, fileUrl: POSTER.matrix, fileType: "image", answerFileUrl: POSTER.matrix, answerFileType: "image" },
  { text: "What year was The Matrix released?", answer: "1999", points: 200, fileUrl: POSTER.matrix, fileType: "image", answerFileUrl: POSTER.matrix, answerFileType: "image" },
  { text: "Laurence Fishburne plays which mentor character in The Matrix?", answer: "Morpheus", points: 200, fileUrl: POSTER.matrix, fileType: "image", answerFileUrl: POSTER.matrix, answerFileType: "image" },
  { text: "In The Matrix, the real world is controlled by what?", answer: "Machines", points: 200, fileUrl: POSTER.matrix, fileType: "image", answerFileUrl: POSTER.matrix, answerFileType: "image" },

  // --- Gladiator ---
  { text: "Russell Crowe plays a Roman general in which 2000 film?", answer: "Gladiator", points: 200, fileUrl: null, fileType: null, answerFileUrl: POSTER.gladiator, answerFileType: "image" },
  { text: "What is the name of Russell Crowe's character in Gladiator?", answer: "Maximus", points: 200, fileUrl: POSTER.gladiator, fileType: "image", answerFileUrl: POSTER.gladiator, answerFileType: "image" },
  { text: "Gladiator is set in which ancient empire?", answer: "Roman Empire", points: 200, fileUrl: POSTER.gladiator, fileType: "image", answerFileUrl: POSTER.gladiator, answerFileType: "image" },
  { text: "Who directed Gladiator?", answer: "Ridley Scott", points: 200, fileUrl: POSTER.gladiator, fileType: "image", answerFileUrl: POSTER.gladiator, answerFileType: "image" },

  // --- The Dark Knight ---
  { text: "Which actor played the Joker in The Dark Knight?", answer: "Heath Ledger", points: 200, fileUrl: POSTER.darkKnight, fileType: "image", answerFileUrl: POSTER.darkKnight, answerFileType: "image" },
  { text: "Which billionaire superhero does Batman face off as in The Dark Knight?", answer: "Bruce Wayne", points: 200, fileUrl: POSTER.darkKnight, fileType: "image", answerFileUrl: POSTER.darkKnight, answerFileType: "image" },
  { text: "What city does Batman protect in The Dark Knight?", answer: "Gotham City", points: 200, fileUrl: POSTER.darkKnight, fileType: "image", answerFileUrl: POSTER.darkKnight, answerFileType: "image" },
  { text: "Who directed The Dark Knight?", answer: "Christopher Nolan", points: 200, fileUrl: POSTER.darkKnight, fileType: "image", answerFileUrl: POSTER.darkKnight, answerFileType: "image" },

  // --- Interstellar ---
  { text: "Matthew McConaughey travels through a wormhole in which Christopher Nolan film?", answer: "Interstellar", points: 200, fileUrl: null, fileType: null, answerFileUrl: POSTER.interstellar, answerFileType: "image" },
  { text: "What planet does Cooper leave his family on in Interstellar?", answer: "Earth", points: 200, fileUrl: POSTER.interstellar, fileType: "image", answerFileUrl: POSTER.interstellar, answerFileType: "image" },
  { text: "Cooper's daughter in Interstellar is named what?", answer: "Murph", points: 200, fileUrl: POSTER.interstellar, fileType: "image", answerFileUrl: POSTER.interstellar, answerFileType: "image" },
  { text: "Interstellar is primarily about saving humanity by finding a new what?", answer: "Planet", points: 200, fileUrl: POSTER.interstellar, fileType: "image", answerFileUrl: POSTER.interstellar, answerFileType: "image" },

  // --- Spider-Man (2002) ---
  { text: "Who played Peter Parker in the 2002 Spider-Man?", answer: "Tobey Maguire", points: 200, fileUrl: POSTER.spiderMan, fileType: "image", answerFileUrl: POSTER.spiderMan, answerFileType: "image" },
  { text: "Spider-Man's love interest in the 2002 film is played by which actress?", answer: "Kirsten Dunst", points: 200, fileUrl: POSTER.spiderMan, fileType: "image", answerFileUrl: POSTER.spiderMan, answerFileType: "image" },
  { text: "Peter Parker gets bitten by what type of creature to become Spider-Man?", answer: "A genetically modified spider", points: 200, fileUrl: POSTER.spiderMan, fileType: "image", answerFileUrl: POSTER.spiderMan, answerFileType: "image" },
  { text: "Who directed Spider-Man (2002)?", answer: "Sam Raimi", points: 200, fileUrl: POSTER.spiderMan, fileType: "image", answerFileUrl: POSTER.spiderMan, answerFileType: "image" },
  { text: "Peter Parker's uncle in Spider-Man is named what?", answer: "Uncle Ben", points: 200, fileUrl: POSTER.spiderMan, fileType: "image", answerFileUrl: POSTER.spiderMan, answerFileType: "image" },

  // ═══════════════════════════════════════════════════════════════════════════
  // ─── 400 Points (Medium) ──────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════════════════

  // --- Titanic ---
  { text: "What year was Titanic released in theaters?", answer: "1997", points: 400, fileUrl: POSTER.titanic, fileType: "image", answerFileUrl: POSTER.titanic, answerFileType: "image" },
  { text: "Complete the Titanic quote: \"I'm the king of the ___!\"", answer: "World", points: 400, fileUrl: POSTER.titanic, fileType: "image", answerFileUrl: POSTER.titanic, answerFileType: "image" },
  { text: "What class ticket did Jack win in a poker game in Titanic?", answer: "Third class", points: 400, fileUrl: POSTER.titanic, fileType: "image", answerFileUrl: POSTER.titanic, answerFileType: "image" },
  { text: "What necklace does Rose wear in Titanic?", answer: "The Heart of the Ocean", points: 400, fileUrl: POSTER.titanic, fileType: "image", answerFileUrl: POSTER.titanic, answerFileType: "image" },
  { text: "Billy Zane plays which antagonist in Titanic?", answer: "Cal Hockley", points: 400, fileUrl: POSTER.titanic, fileType: "image", answerFileUrl: POSTER.titanic, answerFileType: "image" },
  { text: "Who composed the famous Titanic soundtrack including 'My Heart Will Go On'?", answer: "James Horner", points: 400, fileUrl: POSTER.titanic, fileType: "image", answerFileUrl: POSTER.titanic, answerFileType: "image" },

  // --- The Lion King ---
  { text: "Who voices adult Simba in the original 1994 Lion King?", answer: "Matthew Broderick", points: 400, fileUrl: POSTER.lionKing, fileType: "image", answerFileUrl: POSTER.lionKing, answerFileType: "image" },
  { text: "What phrase does Scar use to lure Simba to the gorge?", answer: "He has a surprise", points: 400, fileUrl: POSTER.lionKing, fileType: "image", answerFileUrl: POSTER.lionKing, answerFileType: "image" },
  { text: "What is the name of the elephant graveyard's inhabitants in The Lion King?", answer: "Hyenas", points: 400, fileUrl: POSTER.lionKing, fileType: "image", answerFileUrl: POSTER.lionKing, answerFileType: "image" },
  { text: "Who voices Mufasa in the original Lion King?", answer: "James Earl Jones", points: 400, fileUrl: POSTER.lionKing, fileType: "image", answerFileUrl: POSTER.lionKing, answerFileType: "image" },
  { text: "What song does Scar sing while plotting against Mufasa?", answer: "Be Prepared", points: 400, fileUrl: POSTER.lionKing, fileType: "image", answerFileUrl: POSTER.lionKing, answerFileType: "image" },
  { text: "Nala is Simba's childhood friend and eventually becomes his what?", answer: "Queen / mate", points: 400, fileUrl: POSTER.lionKing, fileType: "image", answerFileUrl: POSTER.lionKing, answerFileType: "image" },

  // --- Avatar ---
  { text: "What mineral are the humans mining on Pandora in Avatar?", answer: "Unobtanium", points: 400, fileUrl: POSTER.avatar, fileType: "image", answerFileUrl: POSTER.avatar, answerFileType: "image" },
  { text: "What is the name of Jake Sully's Na'vi avatar mate in Avatar?", answer: "Neytiri", points: 400, fileUrl: POSTER.avatar, fileType: "image", answerFileUrl: POSTER.avatar, answerFileType: "image" },
  { text: "What is the name of the giant tree the Na'vi worship in Avatar?", answer: "The Tree of Souls", points: 400, fileUrl: POSTER.avatar, fileType: "image", answerFileUrl: POSTER.avatar, answerFileType: "image" },
  { text: "Jake Sully is a former what before joining the Avatar program?", answer: "Marine", points: 400, fileUrl: POSTER.avatar, fileType: "image", answerFileUrl: POSTER.avatar, answerFileType: "image" },
  { text: "The Na'vi connect with animals and trees using what body part?", answer: "Their queue / neural braid", points: 400, fileUrl: POSTER.avatar, fileType: "image", answerFileUrl: POSTER.avatar, answerFileType: "image" },
  { text: "Stephen Lang plays which military antagonist in Avatar?", answer: "Colonel Miles Quaritch", points: 400, fileUrl: POSTER.avatar, fileType: "image", answerFileUrl: POSTER.avatar, answerFileType: "image" },

  // --- Jurassic Park ---
  { text: "Who wrote the novel that Jurassic Park is based on?", answer: "Michael Crichton", points: 400, fileUrl: POSTER.jurassicPark, fileType: "image", answerFileUrl: POSTER.jurassicPark, answerFileType: "image" },
  { text: "Jeff Goldblum plays which mathematician in Jurassic Park?", answer: "Ian Malcolm", points: 400, fileUrl: POSTER.jurassicPark, fileType: "image", answerFileUrl: POSTER.jurassicPark, answerFileType: "image" },
  { text: "Richard Attenborough plays which park founder in Jurassic Park?", answer: "John Hammond", points: 400, fileUrl: POSTER.jurassicPark, fileType: "image", answerFileUrl: POSTER.jurassicPark, answerFileType: "image" },
  { text: "The raptors in Jurassic Park are known for being extremely what?", answer: "Intelligent", points: 400, fileUrl: POSTER.jurassicPark, fileType: "image", answerFileUrl: POSTER.jurassicPark, answerFileType: "image" },
  { text: "What company created the dinosaurs in Jurassic Park?", answer: "InGen", points: 400, fileUrl: POSTER.jurassicPark, fileType: "image", answerFileUrl: POSTER.jurassicPark, answerFileType: "image" },
  { text: "Who sabotages the park's security system in Jurassic Park?", answer: "Dennis Nedry", points: 400, fileUrl: POSTER.jurassicPark, fileType: "image", answerFileUrl: POSTER.jurassicPark, answerFileType: "image" },

  // --- Home Alone ---
  { text: "What city is Kevin McCallister's family flying to when they leave him behind?", answer: "Paris", points: 400, fileUrl: POSTER.homeAlone, fileType: "image", answerFileUrl: POSTER.homeAlone, answerFileType: "image" },
  { text: "What famous aftershave does Kevin apply in Home Alone's iconic scream scene?", answer: "Old Spice", points: 400, fileUrl: POSTER.homeAlone, fileType: "image", answerFileUrl: POSTER.homeAlone, answerFileType: "image" },
  { text: "What fake gangster movie does Kevin use to scare the pizza delivery boy?", answer: "Angels with Filthy Souls", points: 400, fileUrl: POSTER.homeAlone, fileType: "image", answerFileUrl: POSTER.homeAlone, answerFileType: "image" },
  { text: "Kevin's neighbor who he's initially afraid of in Home Alone is known as what?", answer: "Old Man Marley", points: 400, fileUrl: POSTER.homeAlone, fileType: "image", answerFileUrl: POSTER.homeAlone, answerFileType: "image" },
  { text: "What does Kevin order for himself when left home alone?", answer: "A cheese pizza", points: 400, fileUrl: POSTER.homeAlone, fileType: "image", answerFileUrl: POSTER.homeAlone, answerFileType: "image" },
  { text: "Home Alone was directed by which filmmaker?", answer: "Chris Columbus", points: 400, fileUrl: POSTER.homeAlone, fileType: "image", answerFileUrl: POSTER.homeAlone, answerFileType: "image" },

  // --- The Matrix ---
  { text: "The Matrix was directed by which filmmaking duo?", answer: "The Wachowskis", points: 400, fileUrl: POSTER.matrix, fileType: "image", answerFileUrl: POSTER.matrix, answerFileType: "image" },
  { text: "What is Neo's real-world name in The Matrix?", answer: "Thomas Anderson", points: 400, fileUrl: POSTER.matrix, fileType: "image", answerFileUrl: POSTER.matrix, answerFileType: "image" },
  { text: "Hugo Weaving plays which antagonist in The Matrix?", answer: "Agent Smith", points: 400, fileUrl: POSTER.matrix, fileType: "image", answerFileUrl: POSTER.matrix, answerFileType: "image" },
  { text: "Carrie-Anne Moss plays which character in The Matrix?", answer: "Trinity", points: 400, fileUrl: POSTER.matrix, fileType: "image", answerFileUrl: POSTER.matrix, answerFileType: "image" },
  { text: "The humans in The Matrix are used by machines as a source of what?", answer: "Energy / batteries", points: 400, fileUrl: POSTER.matrix, fileType: "image", answerFileUrl: POSTER.matrix, answerFileType: "image" },
  { text: "What martial art style did the cast train in for The Matrix?", answer: "Kung fu", points: 400, fileUrl: POSTER.matrix, fileType: "image", answerFileUrl: POSTER.matrix, answerFileType: "image" },

  // --- Gladiator ---
  { text: "Maximus seeks revenge against which emperor in Gladiator?", answer: "Commodus", points: 400, fileUrl: POSTER.gladiator, fileType: "image", answerFileUrl: POSTER.gladiator, answerFileType: "image" },
  { text: "How many Academy Awards did Gladiator win?", answer: "Five", points: 400, fileUrl: POSTER.gladiator, fileType: "image", answerFileUrl: POSTER.gladiator, answerFileType: "image" },
  { text: "What is Maximus's home province in Gladiator?", answer: "Spain", points: 400, fileUrl: POSTER.gladiator, fileType: "image", answerFileUrl: POSTER.gladiator, answerFileType: "image" },
  { text: "Joaquin Phoenix plays which villain in Gladiator?", answer: "Commodus", points: 400, fileUrl: POSTER.gladiator, fileType: "image", answerFileUrl: POSTER.gladiator, answerFileType: "image" },
  { text: "What does Maximus whisper to the crowd: 'Are you not ___?'", answer: "Entertained", points: 400, fileUrl: POSTER.gladiator, fileType: "image", answerFileUrl: POSTER.gladiator, answerFileType: "image" },
  { text: "Maximus fights as a gladiator in which famous arena?", answer: "The Colosseum", points: 400, fileUrl: POSTER.gladiator, fileType: "image", answerFileUrl: POSTER.gladiator, answerFileType: "image" },

  // --- The Dark Knight ---
  { text: "Harvey Dent transforms into which villain in The Dark Knight?", answer: "Two-Face", points: 400, fileUrl: POSTER.darkKnight, fileType: "image", answerFileUrl: POSTER.darkKnight, answerFileType: "image" },
  { text: "Who composed the score for The Dark Knight?", answer: "Hans Zimmer", points: 400, fileUrl: POSTER.darkKnight, fileType: "image", answerFileUrl: POSTER.darkKnight, answerFileType: "image" },
  { text: "Aaron Eckhart plays which district attorney in The Dark Knight?", answer: "Harvey Dent", points: 400, fileUrl: POSTER.darkKnight, fileType: "image", answerFileUrl: POSTER.darkKnight, answerFileType: "image" },
  { text: "The Joker's famous line: 'Why so ___?'", answer: "Serious", points: 400, fileUrl: POSTER.darkKnight, fileType: "image", answerFileUrl: POSTER.darkKnight, answerFileType: "image" },
  { text: "What does the Joker use as his calling card in The Dark Knight?", answer: "A playing card (Joker card)", points: 400, fileUrl: POSTER.darkKnight, fileType: "image", answerFileUrl: POSTER.darkKnight, answerFileType: "image" },
  { text: "Gary Oldman plays which police commissioner in The Dark Knight?", answer: "James Gordon", points: 400, fileUrl: POSTER.darkKnight, fileType: "image", answerFileUrl: POSTER.darkKnight, answerFileType: "image" },

  // --- Interstellar ---
  { text: "What is the name of the black hole the crew orbits in Interstellar?", answer: "Gargantua", points: 400, fileUrl: POSTER.interstellar, fileType: "image", answerFileUrl: POSTER.interstellar, answerFileType: "image" },
  { text: "On which water planet does one hour equal seven years on Earth in Interstellar?", answer: "Miller's Planet", points: 400, fileUrl: POSTER.interstellar, fileType: "image", answerFileUrl: POSTER.interstellar, answerFileType: "image" },
  { text: "What is the name of the AI robot companion in Interstellar?", answer: "TARS", points: 400, fileUrl: POSTER.interstellar, fileType: "image", answerFileUrl: POSTER.interstellar, answerFileType: "image" },
  { text: "Anne Hathaway plays which scientist in Interstellar?", answer: "Dr. Amelia Brand", points: 400, fileUrl: POSTER.interstellar, fileType: "image", answerFileUrl: POSTER.interstellar, answerFileType: "image" },
  { text: "What force transcends dimensions of space and time in Interstellar?", answer: "Love", points: 400, fileUrl: POSTER.interstellar, fileType: "image", answerFileUrl: POSTER.interstellar, answerFileType: "image" },
  { text: "Michael Caine plays which professor in Interstellar?", answer: "Professor Brand", points: 400, fileUrl: POSTER.interstellar, fileType: "image", answerFileUrl: POSTER.interstellar, answerFileType: "image" },

  // --- Spider-Man (2002) ---
  { text: "Who plays the Green Goblin in Spider-Man (2002)?", answer: "Willem Dafoe", points: 400, fileUrl: POSTER.spiderMan, fileType: "image", answerFileUrl: POSTER.spiderMan, answerFileType: "image" },
  { text: "What newspaper does Peter Parker work for in Spider-Man (2002)?", answer: "The Daily Bugle", points: 400, fileUrl: POSTER.spiderMan, fileType: "image", answerFileUrl: POSTER.spiderMan, answerFileType: "image" },
  { text: "J.K. Simmons plays which newspaper editor in Spider-Man (2002)?", answer: "J. Jonah Jameson", points: 400, fileUrl: POSTER.spiderMan, fileType: "image", answerFileUrl: POSTER.spiderMan, answerFileType: "image" },
  { text: "Peter Parker's best friend in Spider-Man (2002) is named what?", answer: "Harry Osborn", points: 400, fileUrl: POSTER.spiderMan, fileType: "image", answerFileUrl: POSTER.spiderMan, answerFileType: "image" },
  { text: "Uncle Ben's famous quote: 'With great power comes great ___'", answer: "Responsibility", points: 400, fileUrl: POSTER.spiderMan, fileType: "image", answerFileUrl: POSTER.spiderMan, answerFileType: "image" },
  { text: "The Green Goblin's civilian identity in Spider-Man (2002) is who?", answer: "Norman Osborn", points: 400, fileUrl: POSTER.spiderMan, fileType: "image", answerFileUrl: POSTER.spiderMan, answerFileType: "image" },

  // ═══════════════════════════════════════════════════════════════════════════
  // ─── 600 Points (Hard) ────────────────────────────────────────────────────
  // ═══════════════════════════════════════════════════════════════════════════

  // --- Titanic ---
  { text: "The drawing scene in Titanic used whose actual hands sketching, not Leonardo DiCaprio's?", answer: "James Cameron's", points: 600, fileUrl: POSTER.titanic, fileType: "image", answerFileUrl: POSTER.titanic, answerFileType: "image" },
  { text: "James Cameron built a real submersible to film the Titanic wreckage. How many dives did he make?", answer: "12", points: 600, fileUrl: POSTER.titanic, fileType: "image", answerFileUrl: POSTER.titanic, answerFileType: "image" },
  { text: "How many Oscars did Titanic win, tying the record set by Ben-Hur?", answer: "11", points: 600, fileUrl: POSTER.titanic, fileType: "image", answerFileUrl: POSTER.titanic, answerFileType: "image" },
  { text: "The Titanic set was built in a newly constructed studio in which Mexican city?", answer: "Rosarito", points: 600, fileUrl: POSTER.titanic, fileType: "image", answerFileUrl: POSTER.titanic, answerFileType: "image" },
  { text: "Titanic's production budget was around how many million dollars, making it the most expensive film at the time?", answer: "200 million", points: 600, fileUrl: POSTER.titanic, fileType: "image", answerFileUrl: POSTER.titanic, answerFileType: "image" },
  { text: "The elderly Rose in Titanic is played by which actress?", answer: "Gloria Stuart", points: 600, fileUrl: POSTER.titanic, fileType: "image", answerFileUrl: POSTER.titanic, answerFileType: "image" },
  { text: "What real historical ship officer goes down with the Titanic in the film and salutes as the ship sinks?", answer: "Captain Smith", points: 600, fileUrl: POSTER.titanic, fileType: "image", answerFileUrl: POSTER.titanic, answerFileType: "image" },

  // --- The Lion King ---
  { text: "Which actor was originally cast as Scar in The Lion King before Jeremy Irons took the role?", answer: "Tim Curry", points: 600, fileUrl: POSTER.lionKing, fileType: "image", answerFileUrl: POSTER.lionKing, answerFileType: "image" },
  { text: "The Lion King's story draws heavy inspiration from which Shakespeare play?", answer: "Hamlet", points: 600, fileUrl: POSTER.lionKing, fileType: "image", answerFileUrl: POSTER.lionKing, answerFileType: "image" },
  { text: "Elton John co-wrote the songs for The Lion King with which lyricist?", answer: "Tim Rice", points: 600, fileUrl: POSTER.lionKing, fileType: "image", answerFileUrl: POSTER.lionKing, answerFileType: "image" },
  { text: "The Lion King was the highest-grossing animated film until which 2003 Pixar movie overtook it?", answer: "Finding Nemo", points: 600, fileUrl: POSTER.lionKing, fileType: "image", answerFileUrl: POSTER.lionKing, answerFileType: "image" },
  { text: "The wildebeest stampede in The Lion King took how many years to animate?", answer: "Three years", points: 600, fileUrl: POSTER.lionKing, fileType: "image", answerFileUrl: POSTER.lionKing, answerFileType: "image" },
  { text: "Jeremy Irons injured his voice recording which villain song, requiring Jim Cummings to finish it?", answer: "Be Prepared", points: 600, fileUrl: POSTER.lionKing, fileType: "image", answerFileUrl: POSTER.lionKing, answerFileType: "image" },

  // --- Avatar ---
  { text: "What revolutionary CGI technique did Avatar pioneer for facial performance capture?", answer: "Facial performance capture with head-rig cameras", points: 600, fileUrl: POSTER.avatar, fileType: "image", answerFileUrl: POSTER.avatar, answerFileType: "image" },
  { text: "Avatar held the worldwide box office record from 2009 until which film briefly overtook it in 2019?", answer: "Avengers: Endgame", points: 600, fileUrl: POSTER.avatar, fileType: "image", answerFileUrl: POSTER.avatar, answerFileType: "image" },
  { text: "James Cameron first wrote the Avatar screenplay in which year, over a decade before the film was made?", answer: "1994", points: 600, fileUrl: POSTER.avatar, fileType: "image", answerFileUrl: POSTER.avatar, answerFileType: "image" },
  { text: "The Na'vi language in Avatar was created by which linguistics professor?", answer: "Paul Frommer", points: 600, fileUrl: POSTER.avatar, fileType: "image", answerFileUrl: POSTER.avatar, answerFileType: "image" },
  { text: "Avatar's worldwide box office gross exceeded how many billion dollars?", answer: "2.9 billion", points: 600, fileUrl: POSTER.avatar, fileType: "image", answerFileUrl: POSTER.avatar, answerFileType: "image" },
  { text: "The floating Hallelujah Mountains in Avatar were inspired by real mountains in which Chinese province?", answer: "Hunan (Zhangjiajie)", points: 600, fileUrl: POSTER.avatar, fileType: "image", answerFileUrl: POSTER.avatar, answerFileType: "image" },

  // --- Jurassic Park ---
  { text: "The sick Triceratops scene in Jurassic Park was originally supposed to explain what mystery?", answer: "How the dinosaurs were breeding", points: 600, fileUrl: POSTER.jurassicPark, fileType: "image", answerFileUrl: POSTER.jurassicPark, answerFileType: "image" },
  { text: "The velociraptor kitchen scene in Jurassic Park took how many months to complete?", answer: "Nine months", points: 600, fileUrl: POSTER.jurassicPark, fileType: "image", answerFileUrl: POSTER.jurassicPark, answerFileType: "image" },
  { text: "The T-Rex roar in Jurassic Park was created by combining sounds of which animals?", answer: "Baby elephant, tiger, and alligator", points: 600, fileUrl: POSTER.jurassicPark, fileType: "image", answerFileUrl: POSTER.jurassicPark, answerFileType: "image" },
  { text: "Jurassic Park was the highest-grossing film ever until which 1997 film surpassed it?", answer: "Titanic", points: 600, fileUrl: POSTER.jurassicPark, fileType: "image", answerFileUrl: POSTER.jurassicPark, answerFileType: "image" },
  { text: "The water ripple effect in the T-Rex approach scene was achieved using what instrument placed under the dashboard?", answer: "A guitar string", points: 600, fileUrl: POSTER.jurassicPark, fileType: "image", answerFileUrl: POSTER.jurassicPark, answerFileType: "image" },
  { text: "Spielberg was editing Jurassic Park while simultaneously directing which other 1993 film?", answer: "Schindler's List", points: 600, fileUrl: POSTER.jurassicPark, fileType: "image", answerFileUrl: POSTER.jurassicPark, answerFileType: "image" },

  // --- Home Alone ---
  { text: "The tarantula placed on Daniel Stern's face in Home Alone was real. How many takes did it require?", answer: "One", points: 600, fileUrl: POSTER.homeAlone, fileType: "image", answerFileUrl: POSTER.homeAlone, answerFileType: "image" },
  { text: "Home Alone's production budget was $18 million. How much did it gross worldwide?", answer: "$476 million", points: 600, fileUrl: POSTER.homeAlone, fileType: "image", answerFileUrl: POSTER.homeAlone, answerFileType: "image" },
  { text: "Home Alone was written by which famous filmmaker also known for Ferris Bueller's Day Off?", answer: "John Hughes", points: 600, fileUrl: POSTER.homeAlone, fileType: "image", answerFileUrl: POSTER.homeAlone, answerFileType: "image" },
  { text: "How many McCallister family members are there in total in Home Alone?", answer: "15", points: 600, fileUrl: POSTER.homeAlone, fileType: "image", answerFileUrl: POSTER.homeAlone, answerFileType: "image" },
  { text: "The McCallister house in Home Alone is located in which Chicago suburb?", answer: "Winnetka", points: 600, fileUrl: POSTER.homeAlone, fileType: "image", answerFileUrl: POSTER.homeAlone, answerFileType: "image" },
  { text: "Daniel Stern's scream when the tarantula was on his face was actually added in what?", answer: "Post-production (he mimed it silently to avoid scaring the spider)", points: 600, fileUrl: POSTER.homeAlone, fileType: "image", answerFileUrl: POSTER.homeAlone, answerFileType: "image" },

  // --- The Matrix ---
  { text: "The code raining down screens in The Matrix was made from what type of characters?", answer: "Reversed Japanese katakana", points: 600, fileUrl: POSTER.matrix, fileType: "image", answerFileUrl: POSTER.matrix, answerFileType: "image" },
  { text: "The Wachowskis required all main cast members in The Matrix to read which philosopher's work before filming?", answer: "Jean Baudrillard's Simulacra and Simulation", points: 600, fileUrl: POSTER.matrix, fileType: "image", answerFileUrl: POSTER.matrix, answerFileType: "image" },
  { text: "Will Smith turned down the role of Neo. Which movie did he choose to star in instead?", answer: "Wild Wild West", points: 600, fileUrl: POSTER.matrix, fileType: "image", answerFileUrl: POSTER.matrix, answerFileType: "image" },
  { text: "The Matrix introduced which camera technique that uses dozens of still cameras fired in sequence?", answer: "Bullet time", points: 600, fileUrl: POSTER.matrix, fileType: "image", answerFileUrl: POSTER.matrix, answerFileType: "image" },
  { text: "The green tint used throughout scenes inside the Matrix was chosen to evoke what feeling?", answer: "A computer monitor glow", points: 600, fileUrl: POSTER.matrix, fileType: "image", answerFileUrl: POSTER.matrix, answerFileType: "image" },
  { text: "Keanu Reeves donated a large portion of his Matrix salary to which department's crew members?", answer: "Special effects and costume design teams", points: 600, fileUrl: POSTER.matrix, fileType: "image", answerFileUrl: POSTER.matrix, answerFileType: "image" },

  // --- Gladiator ---
  { text: "Joaquin Phoenix improvised the scene where Commodus does what unexpected action to a senator in Gladiator?", answer: "Thumbs down gesture", points: 600, fileUrl: POSTER.gladiator, fileType: "image", answerFileUrl: POSTER.gladiator, answerFileType: "image" },
  { text: "Oliver Reed died during the production of Gladiator. How did Ridley Scott complete his remaining scenes?", answer: "CGI face replacement using a body double", points: 600, fileUrl: POSTER.gladiator, fileType: "image", answerFileUrl: POSTER.gladiator, answerFileType: "image" },
  { text: "The CGI recreation of ancient Rome's Colosseum in Gladiator was based on which real-world location used for ground-level shots?", answer: "Fort Ricasoli in Malta", points: 600, fileUrl: POSTER.gladiator, fileType: "image", answerFileUrl: POSTER.gladiator, answerFileType: "image" },
  { text: "Russell Crowe kept which prop from the Gladiator set as a personal memento?", answer: "His breastplate armor", points: 600, fileUrl: POSTER.gladiator, fileType: "image", answerFileUrl: POSTER.gladiator, answerFileType: "image" },
  { text: "The battle at the start of Gladiator is set in which real historical region?", answer: "Germania", points: 600, fileUrl: POSTER.gladiator, fileType: "image", answerFileUrl: POSTER.gladiator, answerFileType: "image" },
  { text: "Maximus's full name spoken in the Colosseum scene is 'Maximus Decimus Meridius, Commander of the Armies of the ___'", answer: "North", points: 600, fileUrl: POSTER.gladiator, fileType: "image", answerFileUrl: POSTER.gladiator, answerFileType: "image" },

  // --- The Dark Knight ---
  { text: "The Dark Knight's hospital explosion scene was real. What happened when the detonator initially failed?", answer: "Heath Ledger improvised by fiddling with it in character", points: 600, fileUrl: POSTER.darkKnight, fileType: "image", answerFileUrl: POSTER.darkKnight, answerFileType: "image" },
  { text: "Heath Ledger locked himself in a hotel room for how many weeks to develop the Joker character?", answer: "Six weeks", points: 600, fileUrl: POSTER.darkKnight, fileType: "image", answerFileUrl: POSTER.darkKnight, answerFileType: "image" },
  { text: "The Dark Knight was the first major feature film to use IMAX cameras for how much of its footage?", answer: "About 28 minutes (roughly a quarter)", points: 600, fileUrl: POSTER.darkKnight, fileType: "image", answerFileUrl: POSTER.darkKnight, answerFileType: "image" },
  { text: "The truck flip scene on Lower Wacker Drive in The Dark Knight used a real truck and what mechanism?", answer: "A steam cannon piston", points: 600, fileUrl: POSTER.darkKnight, fileType: "image", answerFileUrl: POSTER.darkKnight, answerFileType: "image" },
  { text: "Heath Ledger tragically passed away before The Dark Knight's release. He posthumously won which Oscar?", answer: "Best Supporting Actor", points: 600, fileUrl: POSTER.darkKnight, fileType: "image", answerFileUrl: POSTER.darkKnight, answerFileType: "image" },
  { text: "The Dark Knight was primarily filmed in which real American city standing in for Gotham?", answer: "Chicago", points: 600, fileUrl: POSTER.darkKnight, fileType: "image", answerFileUrl: POSTER.darkKnight, answerFileType: "image" },

  // --- Interstellar ---
  { text: "Theoretical physicist Kip Thorne served as what role on Interstellar?", answer: "Executive producer and scientific consultant", points: 600, fileUrl: POSTER.interstellar, fileType: "image", answerFileUrl: POSTER.interstellar, answerFileType: "image" },
  { text: "Christopher Nolan planted 500 acres of what crop for Interstellar and later sold it for a profit?", answer: "Corn", points: 600, fileUrl: POSTER.interstellar, fileType: "image", answerFileUrl: POSTER.interstellar, answerFileType: "image" },
  { text: "The black hole visualization in Interstellar was so accurate it led to a published scientific paper. In which journal?", answer: "Classical and Quantum Gravity", points: 600, fileUrl: POSTER.interstellar, fileType: "image", answerFileUrl: POSTER.interstellar, answerFileType: "image" },
  { text: "Matt Damon plays which stranded astronaut in Interstellar?", answer: "Dr. Mann", points: 600, fileUrl: POSTER.interstellar, fileType: "image", answerFileUrl: POSTER.interstellar, answerFileType: "image" },
  { text: "The tesseract scene at the end of Interstellar takes place behind what object in Murph's room?", answer: "Her bookshelf", points: 600, fileUrl: POSTER.interstellar, fileType: "image", answerFileUrl: POSTER.interstellar, answerFileType: "image" },
  { text: "Interstellar's organ-heavy score by Hans Zimmer was inspired by Nolan giving Zimmer one page about what theme?", answer: "A father's relationship with his child", points: 600, fileUrl: POSTER.interstellar, fileType: "image", answerFileUrl: POSTER.interstellar, answerFileType: "image" },

  // --- Spider-Man (2002) ---
  { text: "Sam Raimi's Spider-Man (2002) originally had a teaser trailer featuring the Twin Towers. Why was it pulled?", answer: "The September 11 attacks", points: 600, fileUrl: POSTER.spiderMan, fileType: "image", answerFileUrl: POSTER.spiderMan, answerFileType: "image" },
  { text: "Tobey Maguire's upside-down kiss in Spider-Man was difficult because water kept flowing where?", answer: "Into his nostrils", points: 600, fileUrl: POSTER.spiderMan, fileType: "image", answerFileUrl: POSTER.spiderMan, answerFileType: "image" },
  { text: "Spider-Man (2002) was the first film to earn how much in its opening weekend?", answer: "$100 million", points: 600, fileUrl: POSTER.spiderMan, fileType: "image", answerFileUrl: POSTER.spiderMan, answerFileType: "image" },
  { text: "The scene where Peter catches Mary Jane's lunch tray was done without CGI — how many takes did it require?", answer: "156 takes", points: 600, fileUrl: POSTER.spiderMan, fileType: "image", answerFileUrl: POSTER.spiderMan, answerFileType: "image" },
  { text: "Which real-life wrestler appeared as Bone Saw McGraw in Spider-Man (2002)?", answer: "Randy Savage", points: 600, fileUrl: POSTER.spiderMan, fileType: "image", answerFileUrl: POSTER.spiderMan, answerFileType: "image" },
  { text: "Willem Dafoe performed most of his Green Goblin stunts himself, but the costume mask prevented what?", answer: "Showing his facial expressions", points: 600, fileUrl: POSTER.spiderMan, fileType: "image", answerFileUrl: POSTER.spiderMan, answerFileType: "image" },
];
