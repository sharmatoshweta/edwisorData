 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {
    var myFacebookToken = 'EAACEdEose0cBAFvsBKWkeHQy4qAMRLnqxKRdBZCRSthwETZCvCOMYvLLlHPpHhLBPDyfapfpcXU0ZBIoLerlDShKcrr1cPTHVUNhzTzIDCq2ZAk4FElozyNyDZCWwD9ZCykRixvhn9w9qlNOPyBCJJf7XUzI0IZB0OpRyrYWRI0WbZCu1mm5HJZAX942PmevI1rUZD';
    /*function getFacebookInfo(){*/
        /*$.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{*/
            $.ajax('https://graph.facebook.com/me?fields=cover&access_token='+myFacebookToken,{
                success : function(response){
                    $('#cover').html('<img src="'+response.cover.source+'" class="img-responsive" width="100%"/>');
                    $('#profilePhoto').html('<img src="'+response.picture.data+'" class="img-responsive profileHeight"/>');
                }
            }//end argument list 
        );// end ajax call 



        $.ajax('https://graph.facebook.com/me?fields=picture.type(large)&access_token='+myFacebookToken,{
                success : function(response){
                    $('#profilePhoto').html('<img src="'+response.picture.data.url+'" class="img-responsive profileHeight"/>');
                }
            }//end argument list 
        );// end ajax call 



        $.ajax('https://graph.facebook.com/me?fields=picture,posts,name&access_token='+myFacebookToken,{
                success : function(response){
                        console.log(response.posts.data);
                    for(post in response.posts.data){
                        if((response.posts.data[post].story) != undefined){
                            if(response.posts.data[post].story.includes('added a life event')){
                                if(response.posts.data[post].story.includes('Working')){
                                    console.log("in working");
                                    $variable = '<div class="row eachPost"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"><div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"><img src="https://graph.facebook.com/'+response.id+'/picture" class="img-responsive"></div><div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 userNameOnPost">'+response.name+'<br><span id="userNameSpan" class="userNameSpan">'+response.posts.data[post].created_time+'</span></div></div><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 paddingForPost"><center><i class="fa fa-briefcase fa-2x"></i><br><h2>'+(response.posts.data[post].story).substr((response.posts.data[post].story).indexOf(":")+1 )+'</h2><br></center></div></div>';
                                }
                                else if(response.posts.data[post].story.includes('School')){
                                    console.log("in school");
                                    $variable = '<div class="row eachPost"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"><div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"><img src="https://graph.facebook.com/'+response.id+'/picture" class="img-responsive"></div><div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 userNameOnPost">'+response.name+'<br><span id="userNameSpan" class="userNameSpan">'+response.posts.data[post].created_time+'</span></div></div><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 paddingForPost"><center><i class="fa fa-graduation-cap fa-2x"></i><br><h2>'+(response.posts.data[post].story).substr((response.posts.data[post].story).indexOf(":")+1 )+'</h2><br></center></div></div>';
                                }
                                else if(response.posts.data[post].story.includes('Born')){
                                    console.log("in born");
                                    $variable = '<div class="row eachPost"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"><div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"><img src="https://graph.facebook.com/'+response.id+'/picture" class="img-responsive"></div><div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 userNameOnPost">'+response.name+'<br><span id="userNameSpan" class="userNameSpan">'+response.posts.data[post].created_time+'</span></div></div><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 paddingForPost"><center><i class="fa fa-baby fa-2x"></i><br><h2>'+(response.posts.data[post].story).substr((response.posts.data[post].story).indexOf(":")+1 )+'</h2><br></center></div></div>';
                                }
                                else if(response.posts.data[post].story.includes('updated')){
                                    console.log("in updates");
                                    $variable = '<div class="row eachPost"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"><div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"><img src="https://graph.facebook.com/'+response.id+'/picture" class="img-responsive"></div><div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 userNameOnPost">'+response.name+' '+(response.posts.data[post].story).substr((response.posts.data[post].story).indexOf("Shweta Sharma")+1 )+'<br><span id="userNameSpan" class="userNameSpan">'+response.posts.data[post].created_time+'</span></div></div><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 paddingForPost"><center><i class="fa fa-baby fa-2x"></i><br><h2></h2><br></center></div></div>';
                                }
                            }
                        }
                        else if(response.posts.data[post].message != undefined){
                             console.log("in message");
                             $vavava = makeFacebookPhotoURL( response.posts.data[post].id )
                             $variable = '<div class="row eachPost"><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"><div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"><img src="https://graph.facebook.com/'+response.id+'/picture" class="img-responsive"></div><div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 userNameOnPost">'+response.name+' <span>'+response.posts.data[post].message+'</span><br><span id="userNameSpan" class="userNameSpan">'+response.posts.data[post].created_time+'</span></div></div><div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 paddingForPost" id="pipipipi"><img src="'+response.picture.data.url+'" class="img-responsive"></div></div>';                    
                        }
                        $('#profileRepeater').append($variable);
                        $variable = "";
                    }
                }
            }//end argument list 
        );// end ajax call 
function makeFacebookPhotoURL(id) {
        $.ajax('https://graph.facebook.com/'+ id + '?fields=full_picture,picture&access_token='+myFacebookToken,{
            success : function(response){
                console.log(response);
                $('#pipipipi').html('<img src="'+response.full_picture+'"class="img-responsive" width="100%">');
            }
        });
        }


        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{
                success : function(response){
                    $('#userName').html(response.name);
                    $('#about').html(response.bio);
                    console.log(response.bio);
                    $('#favouritrQuote').html(response.quotes);

                    // fill education details
                    for(ed in response.education) {
                       if(response.education[ed].type=='College'){
                        $('#collageDetail').html('Studied At '+response.education[ed].school.name+'<br><sub>Past : '+response.education[--ed].school.name+'</sub>');
                        $('#collageLogo').html('<img src="https://graph.facebook.com/'+response.education[++ed].school.id+'/picture?type=small" width="90%" class="img-responsive">');
                        $('#allUniversityDetails').html('<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"><img src="https://graph.facebook.com/'+response.education[ed].school.id+'/picture?type=small" width="90%" class="img-responsive"></div><div class="col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11">'+response.education[ed].school.name+'</div>');
                       } //end if condition 

                       if(response.education[ed].type=='High School'){
                        $('#allhignSchoolDetails').html('<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"><img src="https://graph.facebook.com/'+response.education[ed].school.id+'/picture?type=small" width="90%" class="img-responsive"></div><div class="col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11">'+response.education[ed].school.name+'</div>');
                       } //end if condition
                    }// end foe-in loop
                   

                    // fill location details
                    $('#locations').html('Lives in '+response.location.name+'<br>From '+response.hometown.name);
                    $('#locationLogo').html('<img src="https://graph.facebook.com/'+response.location.id+'/picture?type=small" class="img-responsive" width="80%">');
                

                    // fill work details
                    for(wr in response.work) {
                        $('#workAt').html('Works At '+response.work[wr].employer.name);
                        $('#workLogo').html('<img src="https://graph.facebook.com/'+response.work[wr].employer.id+'/picture?type=small" class="img-responsive" width="80%">');
                        $('#allWorkDetails').html('<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1" id="workPlaceLogo"><img src="https://graph.facebook.com/'+response.work[wr].employer.id+'/picture?type=small" class="img-responsive" width="80%"></div><div class="col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11" id="workPlace"> Works At '+response.work[wr].employer.name+'</div>');
                    }// end for-in loop


                    // fill contact details
                    $('#emailDetails').html('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">Email</div><div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">'+response.email+'</div>');
                    $('#relationshipStatus').html('<div class="col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1"><i class="fa fa-heart"></i></div><div class="col-xs-11 col-sm-11 col-md-11 col-lg-11 col-xl-11">'+response.relationship_status+'</div>');
                    $('#interestedInDetail').html('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">Interested in</div><div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">'+response.interested_in+'</div>');
                    $('#dateOfBirthDetails').html('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">Date Of Birth</div><div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">'+response.birthday+'</div>');
                    $('#genderDetail').html('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">Gender</div><div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">'+response.gender+'</div>');
                    $('#languageDetail').html('<div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">Languages</div><div class="col-xs-9 col-sm-9 col-md-9 col-lg-9 col-xl-9">'+response.languages[1].name+', '+response.languages[0].name+'</div>');
                    for(fa in response.favorite_athletes) {
                        $('#favouriteAthleteDetails').html('<div class="col-xs-12 col-sm-6 col-md-2 col-lg-2 col-xl-2"><div class=" photoForAlbum"><img src="https://graph.facebook.com/'+response.favorite_athletes[fa].id+'/picture?type=large" class="img-responsive" style="width:100%;height:100%;overflow:hidden;"></div><div class="teamName">'+response.favorite_athletes[fa].name+'</div></div>');
                    }
                    for(fa in response.favorite_teams) {
                        $('#favouriteTeamDetails').html('<div class="col-xs-12 col-sm-6 col-md-2 col-lg-2 col-xl-2"><div class=" photoForAlbum"><img src="https://graph.facebook.com/'+response.favorite_teams[fa].id+'/picture?type=large" class="img-responsive" style="width:100%;height:100%;overflow:hidden;"></div><div class="teamName">'+response.favorite_teams[fa].name+'</div></div>');
                    }

                }
            }//end argument list 
        );// end ajax call 



    /*}// end get facebook info */
  });