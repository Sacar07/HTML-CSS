let users = [
  {
    name: "ram",
    address: {
      permanent: {
        address: "Kdb",
        ward: 1,
        streetName: "Hatt bazar rd",
      },
      temporary: {
        address: "Ktm",
        ward: 32,
        streetName: "Birendra sadak",
      },
    },
  },
  {
    name: "Sita",
    address: {
      permanent: "brt",
      temporary: "ktm",
    },
  },
];

console.log(users);

let courses = [
  {
    title: "mern",
    courseDetails: {
      duration: "3 months",
      timing: "3-4",
    },
    student1: {
      name: "sacar",
      address: "mtd",
      phoneNtc: 984314434,
      phoneNcell: 98083232,
      education: [
        {
          level: "SEE",
          grade: "A+",
          passedYear: 2019,
        },
        {
          level: "bachelor",
          grade: "B+",
          passedYear: 2024,
        },
      ],
    },
    student2: {
      name: "ram",
      address: "bth",
      phoneNtc: 984312424,
      phoneNcell: 980824242,
      education: [
        {
          level: "bachelors in CSIT",
          grade: 3.65,
        },
        {
          level: "SEE",
          grade: "A+",
        },
      ],
    },
  },
  {
    title: "QA",
    courseDetails: {
      duration: "2 months",
      timing: "4-5",
    },
    students: {
      student1: {
        name: "ramster",
        student1Details: {
          phoneNtc: 983232323,
          phoneNcell: 980832323,
          education: [
            {
              SEE: {
                grade: "A+",
                passedYear: 2019,
              },
              bachelor: {
                grade: "B+",
                passedYear: 2024,
              },
            },
          ],
        },
      },
      student2: {
        name: "strew",
        student2Details: {
          phoneNtc: 9833113,
          phoneNcell: 98032323,
          education: [
            {
              SEE: {
                grade: "A+",
                passedYear: 2019,
              },
              bachelor: {
                grade: "B+",
                passedYear: 2024,
              },
            },
          ],
        },
      },
    },
  },
];

console.log(courses);
