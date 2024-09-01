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