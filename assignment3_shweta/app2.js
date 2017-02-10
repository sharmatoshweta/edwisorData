$(document).ready(function(){
	$('#newsfeedWholeSection').hide(); // hide newsfeed section for starting

	$('#yourAlbum').hide();				//hiding one part on album at starting
	$('#sportsAthlete').hide();			//hiding one part on sports at starting

	$('#SideTab_2').hide();				// hide tab at starting
	$('#SideTab_3').hide();				// hide tab at starting
	$('#SideTab_4').hide();				// hide tab at starting
	$('#SideTab_5').hide();				// hide tab at starting

	//about user part functioning start

	$('#tab_1').on("click",function(){
		$('#SideTab_1').show(500);
		$('#SideTab_2').hide(500);
		$('#SideTab_3').hide(500);
		$('#SideTab_4').hide(500);
		$('#SideTab_5').hide(500);
		$("#tab_5").removeClass("tabActive");
		$("#tab_2").removeClass("tabActive");
		$("#tab_3").removeClass("tabActive");
		$("#tab_4").removeClass("tabActive");
		$("#tab_1").addClass("tabActive");
	});
	$('#tab_2').on("click",function(){
		$('#SideTab_1').hide(500);
		$('#SideTab_2').show(500);
		$('#SideTab_3').hide(500);
		$('#SideTab_4').hide(500);
		$('#SideTab_5').hide(500);
		$("#tab_1").removeClass("tabActive");
		$("#tab_2").removeClass("tabActive");
		$("#tab_3").removeClass("tabActive");
		$("#tab_4").removeClass("tabActive");
		$("#tab_2").addClass("tabActive");
	});
	$('#tab_3').on("click",function(){
		$('#SideTab_1').hide(500);
		$('#SideTab_2').hide(500);
		$('#SideTab_3').show(500);
		$('#SideTab_4').hide(500);
		$('#SideTab_5').hide(500);
		$("#tab_1").removeClass("tabActive");
		$("#tab_2").removeClass("tabActive");
		$("#tab_5").removeClass("tabActive");
		$("#tab_4").removeClass("tabActive");
		$("#tab_3").addClass("tabActive");
	});
	$('#tab_4').on("click",function(){
		$('#SideTab_1').hide(500);
		$('#SideTab_2').hide(500);
		$('#SideTab_3').hide(500);
		$('#SideTab_4').show(500);
		$('#SideTab_5').hide(500);
		$("#tab_1").removeClass("tabActive");
		$("#tab_2").removeClass("tabActive");
		$("#tab_3").removeClass("tabActive");
		$("#tab_5").removeClass("tabActive");
		$("#tab_4").addClass("tabActive");
	});
	$('#tab_5').on("click",function(){
		$('#SideTab_1').hide(500);
		$('#SideTab_2').hide(500);
		$('#SideTab_3').hide(500);
		$('#SideTab_4').hide(500);
		$('#SideTab_5').show(500);
		$("#tab_1").removeClass("tabActive");
		$("#tab_2").removeClass("tabActive");
		$("#tab_3").removeClass("tabActive");
		$("#tab_4").removeClass("tabActive");
		$("#tab_5").addClass("tabActive");
	});


	//about user part functioning end
	//user photos part functioning start
	
	$('#yourPhotoHead').on("click",function(){
		$('#yourPhotos').show();
		$('#yourAlbum').hide();
		$("#yourAlbumHead").removeClass("tabPanActive");
		$("#yourPhotoHead").addClass("tabPanActive");
	});
	$('#yourAlbumHead').on("click",function(){
		$('#yourPhotos').hide();
		$('#yourAlbum').show();
		$("#yourAlbumHead").addClass("tabPanActive");
		$("#yourPhotoHead").removeClass("tabPanActive");
	});


	//user photos part functioning end
	//user sports part functioning start
	
	$('#sportsTeamHead').on("click",function(){
		$('#sportsTeam').show();
		$('#sportsAthlete').hide();
		$("#sportsAthleteHead").removeClass("tabPanActive");
		$("#sportsTeamHead").addClass("tabPanActive");
	});
	$('#sportsAthleteHead').on("click",function(){
		$('#sportsTeam').hide();
		$('#sportsAthlete').show();
		$("#sportsAthleteHead").addClass("tabPanActive");
		$("#sportsTeamHead").removeClass("tabPanActive");
	});


	//user sports part functioning end
	//newsfeed part functioning start
	$('#aboutMeHead').on("click",function(){
		$('#aboutMeWholeSection').show();
		$('#newsfeedWholeSection').hide();
		$("#span_2").removeClass("SPAN_1");
		$("#span_1").addClass("SPAN_1");
	});
	$('#newsfeedHead').on("click",function(){
		$('#newsfeedWholeSection').show();
		$('#aboutMeWholeSection').hide();
		$("#span_1").removeClass("SPAN_1");
		$("#span_2").addClass("SPAN_1");
	});
});