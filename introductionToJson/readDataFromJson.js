var data = [
	{ 
		
		"id": "123456789789",
		"name":{
			"firstName": "Shweta",
			"lastName": "Sharma"
		},
		"action":{
			"actionMovie": "Dangal",
			"actionPlace": {
				"actionPlaceName" : "CP Mall",
				"actionPlaceCity" : "Alwar",
				"actionPlaceState" : "Rajasthan"
			},
			"actionTimeStamp":{
				"actionDate" : "25/12/2016",
				"actionTime" : "20:01"
			},
			"actionImage" :{
				"imageLink" : "http://abc.ef"
			}
		},
		"shareWith" : [
			{
				"id": "454554851884545",
				"name":{
					"firstName": "Shikha",
					"lastName": "Sharda"
				}
			}
		],
		"like" : {
			"countLike" : 25,
			"userWhoLike": [
				{
					"name":{
						"firstName": "Shweta",
						"lastName": "Sharma"
					},
					"bioLink" : "12458574695"
				}
			]
		},
		"comments" :{
			"countComments" : 5,
			"userWhoComment": [
				{
					"name":{
						"firstName": "Shweta",
						"lastName": "Sharma"
					},
					"bioLink" : "12458574695",
					"comment" : {
						"originalComment" : "XYZ",
						"editedComment" : "PQR",
						"replyOnComment" : {
							"id": "123456789789",
							"name":{
								"firstName": "Shweta",
								"lastName": "Sharma"
							},
							"bioLink" : "12458574695",
							"reply" : "ABC"
						}
					}
				}
			]
		},
		"share" :{
			"countShares" : 5,
			"userWhoShare": [
				{
					"name":{
						"firstName": "Shweta",
						"lastName": "Sharma"
					},
					"bioLink" : "as12458574695"
				}
			]
		}
	  }
	]
// function to read data from the json file and display it in console.
var userId;
for(x in data){
	userId = data[x].id;
	console.log(userId);
}