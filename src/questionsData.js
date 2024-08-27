const gkQuestions = [
    // Geography Questions
    {
        category: 'Geography',
        question: "1. What is the capital of France?",
        options: ["A) Berlin", "B) Madrid", "C) Paris", "D) Rome"],
        correctAnswer: "C) Paris"
    },
    {
        category: 'Geography',
        question: "2. Which is the largest continent?",
        options: ["A) Africa", "B) Asia", "C) Europe", "D) Antarctica"],
        correctAnswer: "B) Asia"
    },
    {
        category: 'Geography',
        question: "3. Which country has the most population?",
        options: ["A) India", "B) USA", "C) China", "D) Indonesia"],
        correctAnswer: "C) China"
    },
    {
        category: 'Geography',
        question: "4. Which river is the longest in the world?",
        options: ["A) Amazon", "B) Nile", "C) Mississippi", "D) Yangtze"],
        correctAnswer: "B) Nile"
    },
    {
        category: 'Geography',
        question: "5. Which is the smallest continent by land area?",
        options: ["A) Europe", "B) Australia", "C) South America", "D) Antarctica"],
        correctAnswer: "B) Australia"
    },
    {
        category: 'Geography',
        question: "6. What is the capital of Australia?",
        options: ["A) Sydney", "B) Melbourne", "C) Canberra", "D) Brisbane"],
        correctAnswer: "C) Canberra"
    },
    {
        category: 'Geography',
        question: "7. Mount Everest is located in which mountain range?",
        options: ["A) Andes", "B) Rockies", "C) Alps", "D) Himalayas"],
        correctAnswer: "D) Himalayas"
    },
    {
        category: 'Geography',
        question: "8. Which desert is the largest in the world?",
        options: ["A) Sahara", "B) Gobi", "C) Kalahari", "D) Arabian"],
        correctAnswer: "A) Sahara"
    },
    {
        category: 'Geography',
        question: "9. Which ocean is the deepest?",
        options: ["A) Atlantic", "B) Indian", "C) Pacific", "D) Southern"],
        correctAnswer: "C) Pacific"
    },
    {
        category: 'Geography',
        question: "10. Which country is known as the Land of the Rising Sun?",
        options: ["A) China", "B) Japan", "C) South Korea", "D) Thailand"],
        correctAnswer: "B) Japan"
    },

    // History Questions
    {
        category: 'History',
        question: "1. Who was the first President of the United States?",
        options: ["A) Abraham Lincoln", "B) George Washington", "C) Thomas Jefferson", "D) John Adams"],
        correctAnswer: "B) George Washington"
    },
    {
        category: 'History',
        question: "2. In which year did World War II end?",
        options: ["A) 1945", "B) 1944", "C) 1946", "D) 1947"],
        correctAnswer: "A) 1945"
    },
    {
        category: 'History',
        question: "3. Who discovered America?",
        options: ["A) Ferdinand Magellan", "B) Christopher Columbus", "C) Marco Polo", "D) Vasco da Gama"],
        correctAnswer: "B) Christopher Columbus"
    },
    {
        category: 'History',
        question: "4. What was the name of the ship on which the Pilgrims traveled to America?",
        options: ["A) Mayflower", "B) Santa Maria", "C) Titanic", "D) HMS Beagle"],
        correctAnswer: "A) Mayflower"
    },
    {
        category: 'History',
        question: "5. Who was the first man to step on the moon?",
        options: ["A) Neil Armstrong", "B) Buzz Aldrin", "C) Yuri Gagarin", "D) John Glenn"],
        correctAnswer: "A) Neil Armstrong"
    },
    {
        category: 'History',
        question: "6. Which ancient civilization built the pyramids?",
        options: ["A) Mesopotamians", "B) Romans", "C) Egyptians", "D) Incas"],
        correctAnswer: "C) Egyptians"
    },
    {
        category: 'History',
        question: "7. Who was the last Tsar of Russia?",
        options: ["A) Nicholas I", "B) Alexander III", "C) Nicholas II", "D) Peter the Great"],
        correctAnswer: "C) Nicholas II"
    },
    {
        category: 'History',
        question: "8. In which year did the Titanic sink?",
        options: ["A) 1910", "B) 1912", "C) 1914", "D) 1916"],
        correctAnswer: "B) 1912"
    },
    {
        category: 'History',
        question: "9. Who was the Prime Minister of the UK during World War II?",
        options: ["A) Neville Chamberlain", "B) Winston Churchill", "C) Clement Attlee", "D) Anthony Eden"],
        correctAnswer: "B) Winston Churchill"
    },
    {
        category: 'History',
        question: "10. Who was the first Emperor of Rome?",
        options: ["A) Julius Caesar", "B) Augustus", "C) Nero", "D) Caligula"],
        correctAnswer: "B) Augustus"
    },

    // Science Questions
    {
        category: 'Science',
        question: "1. What is the chemical symbol for water?",
        options: ["A) O2", "B) H2O", "C) CO2", "D) NaCl"],
        correctAnswer: "B) H2O"
    },
    {
        category: 'Science',
        question: "2. What planet is known as the Red Planet?",
        options: ["A) Earth", "B) Mars", "C) Jupiter", "D) Venus"],
        correctAnswer: "B) Mars"
    },
    {
        category: 'Science',
        question: "3. Who developed the theory of relativity?",
        options: ["A) Isaac Newton", "B) Galileo Galilei", "C) Albert Einstein", "D) Marie Curie"],
        correctAnswer: "C) Albert Einstein"
    },
    {
        category: 'Science',
        question: "4. What is the powerhouse of the cell?",
        options: ["A) Nucleus", "B) Ribosome", "C) Mitochondria", "D) Golgi apparatus"],
        correctAnswer: "C) Mitochondria"
    },
    {
        category: 'Science',
        question: "5. What is the speed of light?",
        options: ["A) 300,000 km/s", "B) 150,000 km/s", "C) 400,000 km/s", "D) 250,000 km/s"],
        correctAnswer: "A) 300,000 km/s"
    },
    {
        category: 'Science',
        question: "6. What gas do plants absorb from the atmosphere?",
        options: ["A) Oxygen", "B) Nitrogen", "C) Carbon Dioxide", "D) Methane"],
        correctAnswer: "C) Carbon Dioxide"
    },
    {
        category: 'Science',
        question: "7. What is the most abundant gas in the Earth's atmosphere?",
        options: ["A) Oxygen", "B) Nitrogen", "C) Carbon Dioxide", "D) Hydrogen"],
        correctAnswer: "B) Nitrogen"
    },
    {
        category: 'Science',
        question: "8. What is the largest organ in the human body?",
        options: ["A) Brain", "B) Heart", "C) Liver", "D) Skin"],
        correctAnswer: "D) Skin"
    },
    {
        category: 'Science',
        question: "9. What is the center of an atom called?",
        options: ["A) Electron", "B) Proton", "C) Nucleus", "D) Neutron"],
        correctAnswer: "C) Nucleus"
    },
    {
        category: 'Science',
        question: "10. What is the boiling point of water?",
        options: ["A) 50°C", "B) 100°C", "C) 150°C", "D) 200°C"],
        correctAnswer: "B) 100°C"
    },

    // Literature Questions
    {
        category: 'Literature',
        question: "1. Who wrote 'Hamlet'?",
        options: ["A) Leo Tolstoy", "B) William Shakespeare", "C) Charles Dickens", "D) Mark Twain"],
        correctAnswer: "B) William Shakespeare"
    },
    {
        category: 'Literature',
        question: "2. What is the name of the book that contains the stories of 'Sherlock Holmes'?",
        options: ["A) The Hound of the Baskervilles", "B) A Study in Scarlet", "C) The Adventures of Sherlock Holmes", "D) The Sign of the Four"],
        correctAnswer: "C) The Adventures of Sherlock Holmes"
    },
    {
        category: 'Literature',
        question: "3. Who wrote 'Pride and Prejudice'?",
        options: ["A) Emily Brontë", "B) Jane Austen", "C) Charlotte Brontë", "D) George Eliot"],
        correctAnswer: "B) Jane Austen"
    },
    {
        category: 'Literature',
        question: "4. Who is the author of '1984'?",
        options: ["A) Aldous Huxley", "B) George Orwell", "C) Ray Bradbury", "D) J.R.R. Tolkien"],
        correctAnswer: "B) George Orwell"
    },
    {
        category: 'Literature',
        question: "5. Who wrote 'The Great Gatsby'?",
        options: ["A) Ernest Hemingway", "B) F. Scott Fitzgerald", "C) John Steinbeck", "D) J.D. Salinger"],
        correctAnswer: "B) F. Scott Fitzgerald"
    },
    {
        category: 'Literature',
        question: "6. Who is the protagonist of 'Moby Dick'?",
        options: ["A) Captain Ahab", "B) Ishmael", "C) Queequeg", "D) Starbuck"],
        correctAnswer: "A) Captain Ahab"
    },
    {
        category: 'Literature',
        question: "7. Who wrote 'The Odyssey'?",
        options: ["A) Homer", "B) Virgil", "C) Sophocles", "D) Aristophanes"],
        correctAnswer: "A) Homer"
    },
    {
        category: 'Literature',
        question: "8. What is the name of the wizard in 'The Lord of the Rings'?",
        options: ["A) Saruman", "B) Gandalf", "C) Sauron", "D) Radagast"],
        correctAnswer: "B) Gandalf"
    },
    {
        category: 'Literature',
        question: "9. Who wrote 'The Catcher in the Rye'?",
        options: ["A) J.D. Salinger", "B) Harper Lee", "C) Truman Capote", "D) John Updike"],
        correctAnswer: "A) J.D. Salinger"
    },
    {
        category: 'Literature',
        question: "10. Who is the author of 'Don Quixote'?",
        options: ["A) Miguel de Cervantes", "B) Gabriel García Márquez", "C) Pablo Neruda", "D) Jorge Luis Borges"],
        correctAnswer: "A) Miguel de Cervantes"
    },

    // Sports Questions
    {
        category: 'Sports',
        question: "1. Which country won the FIFA World Cup in 2018?",
        options: ["A) Germany", "B) Argentina", "C) Brazil", "D) France"],
        correctAnswer: "D) France"
    },
    {
        category: 'Sports',
        question: "2. Who has won the most Grand Slam titles in tennis?",
        options: ["A) Roger Federer", "B) Rafael Nadal", "C) Novak Djokovic", "D) Pete Sampras"],
        correctAnswer: "C) Novak Djokovic"
    },
    {
        category: 'Sports',
        question: "3. In which sport is the term 'home run' used?",
        options: ["A) Cricket", "B) Baseball", "C) Basketball", "D) Soccer"],
        correctAnswer: "B) Baseball"
    },
    {
        category: 'Sports',
        question: "4. Which country is the origin of the Olympic Games?",
        options: ["A) Italy", "B) Egypt", "C) Greece", "D) China"],
        correctAnswer: "C) Greece"
    },
    {
        category: 'Sports',
        question: "5. Who is known as the 'Lightning Bolt' in athletics?",
        options: ["A) Michael Johnson", "B) Carl Lewis", "C) Usain Bolt", "D) Maurice Greene"],
        correctAnswer: "C) Usain Bolt"
    },
    {
        category: 'Sports',
        question: "6. What is the highest possible break in snooker?",
        options: ["A) 155", "B) 147", "C) 150", "D) 140"],
        correctAnswer: "B) 147"
    },
    {
        category: 'Sports',
        question: "7. Which sport is associated with the 'All Blacks' team?",
        options: ["A) Football", "B) Basketball", "C) Rugby", "D) Cricket"],
        correctAnswer: "C) Rugby"
    },
    {
        category: 'Sports',
        question: "8. In which sport would you perform a slam dunk?",
        options: ["A) Baseball", "B) Basketball", "C) Volleyball", "D) Tennis"],
        correctAnswer: "B) Basketball"
    },
    {
        category: 'Sports',
        question: "9. Who is considered the greatest swimmer of all time?",
        options: ["A) Michael Phelps", "B) Mark Spitz", "C) Ian Thorpe", "D) Ryan Lochte"],
        correctAnswer: "A) Michael Phelps"
    },
    {
        category: 'Sports',
        question: "10. Which country hosted the 2008 Summer Olympics?",
        options: ["A) China", "B) Brazil", "C) Russia", "D) Greece"],
        correctAnswer: "A) China"
    },
];

module.exports = gkQuestions;
