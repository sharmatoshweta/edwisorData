var people = function(pplArray, ppl){
	pplArray.map(function(item){
      if(item.userName == ppl){
        return item.firstName+' '+item.lastName;
  }});

}





pplArray = [
  {
    "prefferedIndustry": "IT",
    "prefferedCareer": "Frontend Developer",
    "mobileNumber": 8527169942,
    "email": "newmail.adi@gmail.com",
    "lastName": "Kumar",
    "firstName": "Aditya",
    "userName": "AdityaKumar1"
  },
  {
    "prefferedIndustry": "IT",
    "prefferedCareer": "Frontend Developer",
    "mobileNumber": 9953633355,
    "email": "raman@edwisor.com",
    "lastName": "S Arora",
    "firstName": "Raman Deep",
    "userName": "RamanDeepSArora1"
  },

  {
    "prefferedIndustry": "IT",
    "prefferedCareer": "Frontend Developer",
    "mobileNumber":  9953633355,
    "email": "ramneet@edwisor.com",
    "lastName": "Singh",
    "firstName": "Ramneet",
    "userName": "RamneetSingh1"
  },
  {
    "prefferedIndustry": "IT",
    "prefferedCareer": "Data Scientist",
    "mobileNumber": 8527169942,
    "email": "tahseen29@gmail.com",
    "lastName": "Ahmad",
    "firstName": "Tahseen",
    "userName": "TahseenAhmad1"
  },
  {
   
    "prefferedIndustry": "IT",
    "prefferedCareer": "Frontend Developer",
    "mobileNumber":  9953633355,
    "email": "shikharkamal@edwisor.com",
    "lastName": "Kamal",
    "firstName": "Shikhar",
    "userName": "ShikharKamal1"
  },
  {
    
    "prefferedIndustry": "IT",
    "prefferedCareer": "Frontend Developer",
    "mobileNumber": 8527169942,
    "email": "mehersurya@edwisor.com",
    "lastName": "Surya",
    "firstName": "ChiluveruMeher",
    "userName": "ChiluveruMeherSurya1"
  },
  {
    
    "prefferedIndustry": "IT",
    "prefferedCareer": "Frontend Developer",
    "mobileNumber":  9953633355,
    "created": "2016-01-12T15:47:57.652Z",
    "email": "jprathore@edwisor.com",
    "lastName": "Prakash",
    "firstName": "Jay",
    "userName": "JayPrakash1"
  },
  {
    
    "prefferedIndustry": "IT",
    "prefferedCareer": "Frontend Developer",
    "mobileNumber": 8527169942,
    "email": "suchismith@edwisor.com",
    "lastName": "roy",
    "firstName": "suchismith",
    "userName": "suchismithroy1"
  },
  {
    "_id": "571fa2f7d916f0ed25ea50fa",
    "prefferedIndustry": "IT",
    "prefferedCareer": "Android Developer",
    "mobileNumber": 9953633355,
    "email": "pragati@edwisor.com",
    "lastName": "Srivastava",
    "firstName": "Pragati",
    "userName": "PragatiSrivastava1"
  },
  {
    
    "prefferedIndustry": "IT",
    "prefferedCareer": "Frontend Developer",
    "mobileNumber": 8527169942,
    "email": "chhaya@edwisor.com",
    "lastName": "KASHYAP",
    "firstName": "CHHAYA",
    "userName": "CHHAYAKASHYAP1"
  },
  {
    
    "prefferedIndustry": "IT",
    "prefferedCareer": "Frontend Developer",
    "mobileNumber":  9953633355,
    "email": "shalini@edwisor.com",
    "lastName": "chauhan",
    "firstName": "shalini",
    "userName": "shalinichauhan1"
  },
  {
    
    "prefferedIndustry": "IT",
    "prefferedCareer": "Frontend Developer",
    "mobileNumber": 8527169942,
    "email": "diksha@edwisor.com",
    "lastName": "chaudhary",
    "firstName": "diksha",
    "userName": "dikshachaudhary1"
  }
]



console.log(people(pplArray,"dikshachaudhary1"));