
const programmingLanguages = [
    {
      name: "JavaScript",
      yearCreated: 1995,
      paradigms: ["Imperative", "Functional"],
      popular: true,
      creator: "Brendan Eich",
    },
    {
      name: "Python",
      yearCreated: 1991,
      paradigms: ["Imperative", "Object-oriented", "Functional"],
      popular: true,
      creator: "Guido van Rossum",
    },
    {
      name: "Java",
      yearCreated: 1995,
      paradigms: ["Object-oriented", "Imperative"],
      popular: true,
      creator: "James Gosling",
    },
    {
      name: "C++",
      yearCreated: 1983,
      paradigms: ["Object-oriented", "Procedural"],
      popular: true,
      creator: "Bjarne Stroustrup",
    },
    {
      name: "Ruby",
      yearCreated: 1995,
      paradigms: ["Object-oriented", "Imperative"],
      popular: true,
      creator: "Yukihiro Matsumoto",
    },
  ];

  // Question 1: Print the names of all programming languages in the array.
  console.log(
    programmingLanguages.map(lang => lang.name)
);

  // Question 2: Print the total number of programming languages in the array.
  console.log(
    programmingLanguages.length
);

  // Question 3: Print the languages that are popular.
  console.log(
    programmingLanguages.filter(lang => lang.popular)
);

  // Question 4: Print the names of the languages created after the year 2000.
  console.log(
    programmingLanguages
        .filter(lang => lang.yearCreated > 2000)
        .map(lang => lang.name)
);

  // Question 5: Print the languages that are both functional and object-oriented.
  console.log(
    programmingLanguages.filter(lang =>
        lang.paradigms.includes("Functional") &&
        lang.paradigms.includes("Object-oriented")
    )
);

  // Question 6: Print the names of the creators of the languages.
  console.log(
    programmingLanguages.map(lang => lang.creator)
);

  // Question 7: Print the names of languages that have "Script" in their name.
  console.log(
    programmingLanguages
        .filter(lang => lang.name.includes("Script"))
        .map(lang => lang.name)
);
