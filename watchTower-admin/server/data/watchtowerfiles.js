export const dataCitizen = [
    {
        _id: "66cf2271f2a2d369a1e8e79e",
        firstName: "Kobe",
        lastName: "Bayrant",
        username: "kobe",
        password: "pass123",
        email: "kobe@gmail.com",
        mobileNumber: "09060792207",
        address: {
          barangay: "Kangkong",
          street: "Kamias",
          houseNumber: "35",
        },
        profileImage: "to be added",
        reports: [],
        role: "citizen",
      },
      {_id: "66cc2f274aec4c32e965d452",  // Valid 24-character hexadecimal string
        firstName: "Nathaniel",
        lastName: "Talag",
        username: "admin",
        password: "pass123",
        email: "admin@gmail.com",
        mobileNumber: "09060792207",
        address: [
            {
                barangay: "New Delhi",
                street: "New York",
                houseNumber: "143",
            }
        ],
        profileImage: "to be added",
        reports: [],
        role: "admin",}


        
]
//  spare ID
export const dataReports = [ {
        _id: "63701cc1f03239c72c000182",
        reporterId: "66cc2f274aec4c32e965d452",
        location: "Kobe",
        disasterType: "Fire",
        disasterImage:[ "to be added", "to be added"],
        disasterInfo: "May Sunog sa 3rd Floor",
        disasterStatus: "Under Review",
        rescuerId: "no rescuer yet",
        isVerified: false
  }
]

export const dataOverallReportStat = [
  {
      totalCitizens: 192,
      yearlyReportsTotal: 99, // We'll update this dynamically
      year: 2023,
      monthlyData: [
          { month: "January", totalReports: 5, _id: "637000f7a5a686695b5170b1" },
          { month: "February", totalReports: 8, _id: "637000f7a5a686695b5170b2" },
          { month: "March", totalReports: 7, _id: "637000f7a5a686695b5170b3" },
          { month: "April", totalReports: 3, _id: "637000f7a5a686695b5170b4" },
          { month: "May", totalReports: 4, _id: "637000f7a5a686695b5170b5" },
          { month: "June", totalReports: 2, _id: "637000f7a5a686695b5170b6" },
          { month: "July", totalReports: 6, _id: "637000f7a5a686695b5170b7" },
          { month: "August", totalReports: 9, _id: "637000f7a5a686695b5170b8" },
          { month: "September", totalReports: 3, _id: "637000f7a5a686695b5170b9" },
          { month: "October", totalReports: 4, _id: "637000f7a5a686695b5170ba" },
          { month: "November", totalReports: 5, _id: "637000f7a5a686695b5170bb" },
          { month: "December", totalReports: 7, _id: "637000f7a5a686695b5170bc" }
      ],
      dailyData: [
          // January
          { date: "2023-01-05", totalReports: 1 },
          { date: "2023-01-12", totalReports: 1 },
          { date: "2023-01-20", totalReports: 1 },
          { date: "2023-01-22", totalReports: 1 },
          { date: "2023-01-28", totalReports: 1 },

          // February
          { date: "2023-02-03", totalReports: 2 },
          { date: "2023-02-10", totalReports: 2 },
          { date: "2023-02-17", totalReports: 2 },
          { date: "2023-02-24", totalReports: 2 },

          // March
          { date: "2023-03-02", totalReports: 2 },
          { date: "2023-03-10", totalReports: 2 },
          { date: "2023-03-18", totalReports: 2 },
          { date: "2023-03-26", totalReports: 1 },

          // April
          { date: "2023-04-05", totalReports: 1 },
          { date: "2023-04-12", totalReports: 1 },
          { date: "2023-04-19", totalReports: 1 },

          // May
          { date: "2023-05-08", totalReports: 1 },
          { date: "2023-05-16", totalReports: 1 },
          { date: "2023-05-24", totalReports: 1 },
          { date: "2023-05-28", totalReports: 1 },

          // June
          { date: "2023-06-03", totalReports: 1 },
          { date: "2023-06-15", totalReports: 1 },

          // July
          { date: "2023-07-07", totalReports: 1 },
          { date: "2023-07-13", totalReports: 1 },
          { date: "2023-07-21", totalReports: 1 },
          { date: "2023-07-27", totalReports: 1 },
          { date: "2023-07-29", totalReports: 1 },
          { date: "2023-07-31", totalReports: 1 },

          // August
          { date: "2023-08-04", totalReports: 2 },
          { date: "2023-08-09", totalReports: 2 },
          { date: "2023-08-14", totalReports: 1 },
          { date: "2023-08-19", totalReports: 1 },
          { date: "2023-08-25", totalReports: 1 },
          { date: "2023-08-30", totalReports: 1 },

          // September
          { date: "2023-09-05", totalReports: 1 },
          { date: "2023-09-14", totalReports: 1 },
          { date: "2023-09-25", totalReports: 1 },

          // October
          { date: "2023-10-10", totalReports: 1 },
          { date: "2023-10-15", totalReports: 1 },
          { date: "2023-10-22", totalReports: 1 },
          { date: "2023-10-30", totalReports: 1 },

          // November
          { date: "2023-11-03", totalReports: 2 },
          { date: "2023-11-10", totalReports: 1 },
          { date: "2023-11-18", totalReports: 1 },
          { date: "2023-11-26", totalReports: 1 },

          // December
          { date: "2023-12-05", totalReports: 2 },
          { date: "2023-12-10", totalReports: 1 },
          { date: "2023-12-15", totalReports: 2 },
          { date: "2023-12-22", totalReports: 1 },
          { date: "2023-12-29", totalReports: 1 }
      ],
      reportsByCategory: {
          Fire: 5,
          Flood: 10,
          Typhoon: 21,
          Landslide: 0,
          Others: 78,
      },
      _id: "636ffd4fc7195768677097d7",
      createdAt: "2023-01-10T18:53:05.874Z",
      updatedAt: "2024-07-06T05:12:27.736Z",
      __v: 36729,
  }
];


