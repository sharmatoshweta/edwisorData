var data = [
	{ 
		"productCategory": "Watches",
		"productSubCategory": "Wrist Watches",
		"productBrandName": "Titan Wrist Watches",
		"productName":"Titan NF9743SM01 Analog Watch - For Women",
		"productId": "123456789789",
		"originalPrice":"7995",
		"discountInPercentage":"18",
		"bankOffer":"yes",
		"features":{
			"waterResistance": "yes",
			"displayType": "analog",
			"strap":"Silver, Stainless Steel"
		},
		"services":["2 year International Warranty", "Cash On Delivery available", "30 Days Replacement Policy"],
		"seller" :{
			"id": "454554851884545",
			"name":"Rvine"
		},
		"specifications" : {
			"general":{
					"styleCode":"NF9743SM01",
					"occasion" : "Casual",
					"watchType" : "Wrist Watch",
					"packOf" : "1"
				}
		},
		"bodyFeatures":{
			"strapType":"Bracelet",
			"strapMaterial":"Stainless Steel Strap",
			"caseMaterial":"Stainless Steel Case",
			"noveltyFeature":"Stones Studded on Dial",
			"dateDisplay":"Date and Day Display",
			"claspType":"Jewelry Clasp",
			"boxMaterial":"Rexine",
			"otherFunctions":"12 Hours Format",
			"otherBodyFeature":"Stainless Steel Back Case"
		},
		"dimensions":{
			"thickness":"8 mm",
			"diameter":"33 mm",
			"weight":"92 g"
		},
		"warranty":{
			"warrantySummary":"2 Years International Warranty",
			"coveredInWarranty":"Manufacturing Defects for 2 Years, Plating and Battery for 1 Year",
			"notCoveredInWarranty":"Warranty does not Cover Normal Wear and Tear. Damage Caused by Mishandling Including Damage to the Glass, Strap and Bracelet. Damage Caused by Watch being Opened Anywhere Other than a Titan Service Center. Damage Due to Water Entry in a Non WR Watch. Plating Damage Due to Exposure to Chemical Solvents, Cleaners, Detergents etc. Plating Damage Due to Abuse of the Watch Like Scratches, Dents etc. Plating Wear off on the Underside of the Metal Bracelet. The Special Guarantee on Gold Plating and Battery is Applicable only for Watches Purchased in India After 1.10.1996 and will be Honored only at Titan Customer Service Centres in India.",
			"warrantyServiceType":"You are Responsible for Presenting at your Expense, the Watch together with the Original and Duly Completed Certificate of Guarantee to a Titan Service Centre, TOLL FREE NO: 1800 266 0123 | EMAIL: HELPDESK@TITAN.CO.IN"
		},
		"productDescription":{
			"description" : "Exquisite and refined, the Titan Analog Watch - For Women features a classy design with a stone-studded dial and stainless steel straps for a stunning look.",
			"design" : "The watch comes with a stainless steel case and strap with a jewelry clasp that enhances the appearance of this watch. The device also features a spectacular stone-studded dial.",
			"display" : "The watch has a classy round dial that is designed to display the time in the analog format. It indicates time in hours, minutes as well as seconds.",
			"durability" : "This watch is water resistant up to a depth of 30 meters making it safe from accidental splashes of water.",
			"functions" : "With this watch on your wrist, you needn't refer to the calendar every time. The watch comes with a date display integrated."
		},
		"images":{
			"frontImage":"image.jpg",
			"optionalImage1":"image1.jpg",
			"optionalImage2":"image2.jpg",
			"optionalImage3":"image3.jpg",
			"optionalImage4":"image4.jpg"
		},
		"ratings":{
			"5Star": "150",
			"4Star": "39",
			"3Star": "15",
			"2Star": "1",
			"1Star": "22"
		},
		"review":[
			{
				"reviewHeading" : "Attractive Jewel",
				"reviewRating" : "5Star",
				"reviewDescription" : "The watch was delivered on time by flipkart and was packed so well... It looks so cool and draws attraction. the stones around the dial look brighter than they look in the picture and on the whole worth buying...",
				"postedBy" : {
					"userId" : "AHP585JSH785522",
					"userName" : "Subhamoy Ghosh",
					"certified" : "yes"
				},
				"postDate" : "22-Apr-2015",
				"reviewLikes":"11",
				"reviewDislikes":"3"
			},
			{
				"reviewHeading" : "Classy",
				"reviewRating" : "5Star",
				"reviewDescription" : "This watch is just wonderful! I was looking for a elegant watch to gift my fiance and believe me it was damn hard to find what she would love! And she loved this watch very much! This watch is really nice, shines more than what it looks in the pictures, stylish (i would say it is a good mixture of old and new from Titan). She really loved it and happy with my choice. It looks like a jewel on her wrist! Happy happy!!! As usual, flipkart rocks!!! Delivered within 72 hours with nice packaging....",
				"postedBy" : {
					"userId" : "AHQ585JS885523",
					"userName" : "SJ",
					"certified" : "yes"
				},
				"postDate" : "20-Apr-2015",
				"reviewLikes":"5",
				"reviewDislikes" : "0"
			}
		]		
	},
	{ 
		"productCategory": "Bag, Wallets & Belts",
		"productSubCategory": "Messenger Bags",
		"productBrandName": "Fur Jaden",
		"productName":"Fur Jaden Sling Bag  (Tan)",
		"productId": "875469584512",
		"originalPrice":"1900",
		"discountInPercentage":"36",
		"bankOffer":"yes",
		"color":["brown","Blue"],
		"features":{
			"userType": "Woman",
			"material": "PU",
			"closure":"Zip",
			"type":"Casule Bag",
			"width&height":"6mm by 2mm"
		},
		"services":["Cash On Delivery available", "10 Days Replacement Policy"],
		"seller" :{
			"id": "898694851884545",
			"name":"FurJaden"
		},
		"specifications" : {
			"general":{
					"modelName":"H172",
					"numberOfCompartments" : "1",
					"salesPackage" : "1 Bag",
					"numberOfPockets" : "2",
					"packOf" : "1"
				}
		},
		"warranty":{
			"Domestic Warranty":"6 Month"
		},
		"images":{
			"frontImage":"image.jpg",
			"optionalImage1":"picture1.jpg",
			"optionalImage2":"picture2.jpg",
			"optionalImage3":"picture3.jpg",
			"optionalImage4":"picture4.jpg"
		},
		"ratings":{
			"5Star": "1",
			"4Star": "0",
			"3Star": "0",
			"2Star": "1",
			"1Star": "0"
		}	
	}
]

// function to find particular entry from JSON using id (i am finding full name of user).
function getDataByGivenId(productId){
	data.map(function(item){
      if(item.productId == productId){
        console.log(productName);
  }});

}
getDataByGivenId("123456789789");