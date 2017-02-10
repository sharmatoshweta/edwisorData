 // main document ready function to check if dom is loaded fully or not
  $( document ).ready(function() {
    alert("hii");
    var myFacebookToken = 'EAACEdEose0cBALkyNng37zyVdZBXdS8tc2xIfvG1zZAFDsOxHWN8MdGiXnFa2tKBsaZBA0j4BG9AYV2m22VL0JjkplsQzwQI0XRJeYNB6BBuJZCXE2Pg2PQML8aXZCLixVNMpFydd1vealYUq92QCqCX8KHcpb8I9kMhwPIEP90SCMXNdOmjQCFkPbBbZBGARZA7HuPF3ApZChxaFTy0F3rhqHlxmiiZABqoZD';

    function getFacebookInfo(){

        $.ajax('https://graph.facebook.com/me?access_token='+myFacebookToken,{

                success : function(response){
                    console.log(response);
                    console.log(typeof(response));
                    $("#myEmail").text(response.email);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                    $("#myHomeTown").text(response.hometown.name);

                }
            }//end argument list 



        );// end ajax call 


    }// end get facebook info

    $("#facebookBtn").on('click',getFacebookInfo)



  });