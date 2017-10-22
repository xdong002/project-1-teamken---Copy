var myTeam = [{ name:'Lebron',
                atk:98,
                threept:89,
                def:98,
                percent:.50
            },
              {name:'Kevin',
              atk:99,
              threept:95,
              def:92,
              percent:.46
            },
              {name:'Harden',
              atk:95,
              threept:94,
              def:80,
              percent:.43
            },
              {name:'Westbrook',
              atk:94,
              threept:85,
              def:90,
              percent:.40
            },
              {name:'Curry',
              atk:98,
              threept:99,
              def:88,
              percent:.45
            }
          ];

var myTeamStats1 = [myTeam[0].name,0, 0, 0, 0, 0, 0];
var myTeamStats2 = [myTeam[1].name,0, 0, 0, 0, 0, 0];
var myTeamStats3 = [myTeam[2].name,0, 0, 0, 0, 0, 0];
var myTeamStats4 = [myTeam[3].name,0, 0, 0, 0, 0, 0];
var myTeamStats5 = [myTeam[4].name,0, 0, 0, 0, 0, 0];

var oppoTeam = [{ name:'Lebron',
                  atk:98,
                  threept:89,
                  def:98,
                  percent:.50
              },
                {name:'Kevin',
                atk:99,
                threept:95,
                def:92,
                percent:.46
              },
                {name:'Harden',
                atk:95,
                threept:94,
                def:80,
                percent:.43
              },
                {name:'Westbrook',
                atk:94,
                threept:85,
                def:90,
                percent:.40
              },
                {name:'Curry',
                atk:98,
                threept:99,
                def:88,
                percent:.45
              }
            ];

var oppoTeamStats1 = [oppoTeam[0].name,0, 0, 0, 0, 0];
var oppoTeamStats2 = [oppoTeam[1].name,0, 0, 0, 0, 0];
var oppoTeamStats3 = [oppoTeam[2].name,0, 0, 0, 0, 0];
var oppoTeamStats4 = [oppoTeam[3].name,0, 0, 0, 0, 0];
var oppoTeamStats5 = [oppoTeam[4].name,0, 0, 0, 0, 0];

var atkv1 = (myTeam[0].atk * myTeam[0].percent)/100
var atkv2 = (myTeam[1].atk * myTeam[1].percent)/100
var atkv3 = (myTeam[2].atk * myTeam[2].percent)/100
var atkv4 = (myTeam[3].atk * myTeam[3].percent)/100
var atkv5 = (myTeam[4].atk * myTeam[4].percent)/100

var thv1 = (myTeam[0].threept * myTeam[0].percent)/100
var thv2 = (myTeam[1].threept * myTeam[1].percent)/100
var thv3 = (myTeam[2].threept * myTeam[2].percent)/100
var thv4 = (myTeam[3].threept * myTeam[3].percent)/100
var thv5 = (myTeam[4].threept * myTeam[4].percent)/100

var atkv6 = (oppoTeam[0].atk * oppoTeam[0].percent)/100
var atkv7 = (oppoTeam[1].atk * oppoTeam[1].percent)/100
var atkv8 = (oppoTeam[2].atk * oppoTeam[2].percent)/100
var atkv9 = (oppoTeam[3].atk * oppoTeam[3].percent)/100
var atkv10 = (oppoTeam[4].atk * oppoTeam[4].percent)/100

var thv6 = (oppoTeam[0].threept * oppoTeam[0].percent)/100
var thv7 = (oppoTeam[1].threept * oppoTeam[1].percent)/100
var thv8 = (oppoTeam[2].threept * oppoTeam[2].percent)/100
var thv9 = (oppoTeam[3].threept * oppoTeam[3].percent)/100
var thv10 = (oppoTeam[4].threept * oppoTeam[4].percent)/100



$(document).ready(function() {

  countdown(1);

  $('.mtButton').on('click', function(){
    $('.oppoteambox').css('visibility','hidden')
    $('.myteambox').css('visibility','visible')
  });

  $('.otButton').on('click', function(){
    $('.myteambox').css('visibility','hidden')
    $('.oppoteambox').css('visibility','visible')
  });
});

function nan(a,b) {
	if (b == 0){
	return 0}
	else {
	return Math.round(a/b * 100)}
}


function countdown(minutes) {
    var seconds = 60;
    var mins = minutes;
    var myScore = 0;
    var oppoScore =0;
    var ball = 0;

    function tick() {
        var counter = $(".timer");
        var current_minutes = mins-1
        seconds--;
        counter.html('');
        counter.prepend('<h1>'+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+'</h1>');
        if( seconds > 0 ) {
          setTimeout(tick, 1000);
          $('.score').html('');
          var ran = Math.round(Math.random() *10);


          if (ball == 0) {
            if (ran == 0 || ran == 1) {
              if (Math.round(Math.random() *10) > 10) {
                if ((Math.round(Math.random() *10) * thv1) >=2.5) {
                  myTeamStats1[1]+=3;
                  myTeamStats1[4]+=1;
                  myTeamStats1[5]+=1;
                  myTeamStats1[2]+=1;
                  myTeamStats1[3]+=1;
                  $('.lineup1 .adding').append('<h1>+3</h1>');
                  setTimeout(function(){
                    $('lineup1 .adding').html('');
                  },1900);
                  myScore+=3;
                  $('.plays').prepend('<h6 class ="myteamline">'+myTeam[0].name+' made the three point shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    myTeamStats1[5]+=1;
                    myTeamStats1[3]+=1;
                    $('.plays').prepend('<h6 class ="myteamline">'+myTeam[0].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
              else {
                if ((Math.round(Math.random() *10) * atkv1) >= 2.5) {
                myTeamStats1[1]+=2;
                myTeamStats1[2]+=1;
                myTeamStats1[3]+=1;
                $('.lineup1 .adding').append('<h1>+2</h1>');
                setTimeout(function(){
                  $('.lineup1 .adding').html('');
                },1900);
                myScore+=2;
                $('.plays').prepend('<h6 class ="myteamline">'+myTeam[0].name+' made the shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    myTeamStats1[3]+=1;
                    $('.plays').prepend('<h6 class ="myteamline">'+myTeam[0].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
            }
            else if (ran == 2 || ran == 3) {
              if (Math.round(Math.random() *10) > 9) {
                if ((Math.round(Math.random() *10) * thv2) >=2.5) {
                  myTeamStats2[1]+=3;
                  myTeamStats2[4]+=1;
                  myTeamStats2[5]+=1;
                  myTeamStats2[2]+=1;
                  myTeamStats2[3]+=1;
                  $('.lineup2 .adding').append('<h1>+3</h1>');
                  setTimeout(function(){
                    $('.lineup2 .adding').html('');
                  },1900);
                  myScore+=3;
                  $('.plays').prepend('<h6 class ="myteamline">'+myTeam[1].name+' made the three point shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    myTeamStats2[5]+=1;
                    myTeamStats2[3]+=1;
                    $('.plays').prepend('<h6 class ="myteamline">'+myTeam[1].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
              else {
                if ((Math.round(Math.random() *10) * atkv2) >= 2.5) {
                myTeamStats2[1]+=2;
                myTeamStats2[2]+=1;
                myTeamStats2[3]+=1;
                $('.lineup2 .adding').append('<h1>+2</h1>');
                setTimeout(function(){
                  $('.lineup2 .adding').html('');
                },1900);
                myScore+=2;
                $('.plays').prepend('<h6 class ="myteamline">'+myTeam[1].name+' made the shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                  myTeamStats2[3]+=1;
                    $('.plays').prepend('<h6 class ="myteamline">'+myTeam[1].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
            }

            else if (ran == 4 || ran == 5) {
              if (Math.round(Math.random() *10) > 5) {
                if ((Math.round(Math.random() *10) * thv3) >=2.5) {
                  myTeamStats3[1]+=3;
                  myTeamStats3[4]+=1;
                  myTeamStats3[5]+=1;
                  myTeamStats3[2]+=1;
                  myTeamStats3[3]+=1;
                  $('.lineup3 .adding').append('<h1>+3</h1>');
                  setTimeout(function(){
                    $('.lineup3 .adding').html('');
                  },1900);
                  myScore+=3;
                  $('.plays').prepend('<h6 class ="myteamline">'+myTeam[2].name+' made the three point shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    myTeamStats3[5]+=1;
                    myTeamStats3[3]+=1;
                    $('.plays').prepend('<h6 class ="myteamline">'+myTeam[2].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
              else {
                if ((Math.round(Math.random() *10) * atkv3) >= 2.5) {
                myTeamStats3[1]+=2;
                myTeamStats3[2]+=1;
                myTeamStats3[3]+=1;
                $('.lineup3 .adding').append('<h1>+2</h1>');
                setTimeout(function(){
                  $('.lineup3 .adding').html('');
                },1900);
                myScore+=2;
                $('.plays').prepend('<h6 class ="myteamline">'+myTeam[2].name+' made the shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    myTeamStats3[3]+=1;
                    $('.plays').prepend('<h6 class ="myteamline">'+myTeam[2].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
            }

            else if (ran == 6 || ran == 7) {
              if (Math.round(Math.random() *10) > 5) {
                if ((Math.round(Math.random() *10) * thv4) >=2.5) {
                  myTeamStats4[1]+=3;
                  myTeamStats4[4]+=1;
                  myTeamStats4[5]+=1;
                  myTeamStats4[2]+=1;
                  myTeamStats4[3]+=1;
                  $('.lineup4 .adding').append('<h1>+3</h1>');
                  setTimeout(function(){
                    $('.lineup4 .adding').html('');
                  },1900);
                  myScore+=3;
                  $('.plays').prepend('<h6 class ="myteamline">'+myTeam[3].name+' made the three point shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    myTeamStats4[5]+=1;
                    myTeamStats4[3]+=1;
                    $('.plays').prepend('<h6 class ="myteamline">'+myTeam[3].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
              else {
                if ((Math.round(Math.random() *10) * atkv4) >= 2.5) {
                myTeamStats4[1]+=2;
                myTeamStats4[2]+=1;
                myTeamStats4[3]+=1;
                $('.lineup4 .adding').append('<h1>+2</h1>');
                setTimeout(function(){
                  $('.lineup4 .adding').html('');
                },1900);
                myScore+=2;
                $('.plays').prepend('<h6 class ="myteamline">'+myTeam[3].name+' made the shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    myTeamStats4[3]+=1;
                    $('.plays').prepend('<h6 class ="myteamline">'+myTeam[3].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
            }

            else if (ran == 8 || ran == 9) {
              if (Math.round(Math.random() *10) > 5) {
                if ((Math.round(Math.random() *10) * thv5) >=2.5) {
                  myTeamStats5[1]+=3;
                  myTeamStats5[4]+=1;
                  myTeamStats5[5]+=1;
                  myTeamStats5[2]+=1;
                  myTeamStats5[3]+=1;
                  $('.lineup5 .adding').append('<h1>+3</h1>');
                  setTimeout(function(){
                    $('.lineup5 .adding').html('');
                  },1900);
                  myScore+=3;
                  $('.plays').prepend('<h6 class ="myteamline">'+myTeam[4].name+' made the three point shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    myTeamStats5[5]+=1;
                    myTeamStats5[3]+=1;
                    $('.plays').prepend('<h6 class ="myteamline">'+myTeam[4].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
              else {
                if ((Math.round(Math.random() *10) * atkv5) >= 2.5) {
                myTeamStats5[1]+=2;
                myTeamStats5[2]+=1;
                myTeamStats5[3]+=1;
                $('.lineup5 .adding').append('<h1>+2</h1>');
                setTimeout(function(){
                  $('.lineup5 .adding').html('');
                },1900);
                myScore+=2;
                $('.plays').prepend('<h6 class ="myteamline">'+myTeam[4].name+' made the shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    myTeamStats5[3]+=1;
                    $('.plays').prepend('<h6 class ="myteamline">'+myTeam[4].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
            }

            else {
              $('.plays').prepend('<h6 class ="myteamline"> myteam turnover! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
            }
            $('.stats1').html('');
            $('.stats1').prepend('<h3>'+ myTeamStats5[0] + ' : <span class = "statlist"> '+ myTeamStats5[1] +'Pts || '+ myTeamStats5[2] +'/'+ myTeamStats5[3] +' FGM || '+ nan(myTeamStats5[2],myTeamStats5[3]) + '%</h3>');
            $('.stats1').prepend('<h3>'+ myTeamStats4[0] + ' : <span class = "statlist"> '+ myTeamStats4[1] +'Pts || '+ myTeamStats4[2] +'/'+ myTeamStats4[3] +' FGM || '+ nan(myTeamStats4[2],myTeamStats4[3]) + '%</h3>');
            $('.stats1').prepend('<h3>'+ myTeamStats3[0] + ' : <span class = "statlist"> '+ myTeamStats3[1] +'Pts || '+ myTeamStats3[2] +'/'+ myTeamStats3[3] +' FGM || '+ nan(myTeamStats3[2],myTeamStats3[3]) + '%</h3>');
            $('.stats1').prepend('<h3>'+ myTeamStats2[0] + ' : <span class = "statlist"> '+ myTeamStats2[1] +'Pts || '+ myTeamStats2[2] +'/'+ myTeamStats2[3] +' FGM || '+ nan(myTeamStats2[2],myTeamStats2[3]) + '%</h3>');
            $('.stats1').prepend('<h3>'+ myTeamStats1[0] + ' : <span class = "statlist"> '+ myTeamStats1[1] +'Pts || '+ myTeamStats1[2] +'/'+ myTeamStats1[3] +' FGM || '+ nan(myTeamStats1[2],myTeamStats1[3]) + '%</h3>');
            $('.score').prepend("<span class = 'boxScore'>"+myScore+'</span>' + ' : ' + "<span class = 'boxScore'>"+oppoScore+'</span>');
4
            ball = 1;
          }
          else {
            if (ran == 0 || ran == 1) {
              if (Math.round(Math.random() *10) > 10) {
                if ((Math.round(Math.random() *10) * thv6) >=2.5) {
                  oppoTeamStats1[1]+=3;
                  oppoTeamStats1[4]+=1;
                  oppoTeamStats1[5]+=1;
                  oppoTeamStats1[2]+=1;
                  oppoTeamStats1[3]+=1;
                  $('.lineup6 .adding').append('<h1>+3</h1>');
                  setTimeout(function(){
                    $('.lineup6 .adding').html('');
                  },1900);
                  oppoScore+=3;
                  $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[0].name+' made the three point shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    oppoTeamStats1[5]+=1;
                    oppoTeamStats1[3]+=1;
                    $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[0].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
              else {
                if ((Math.round(Math.random() *10) * atkv6) >= 2.5) {
                oppoTeamStats1[1]+=2;
                oppoTeamStats1[2]+=1;
                oppoTeamStats1[3]+=1;
                $('.lineup6 .adding').append('<h1>+2</h1>');
                setTimeout(function(){
                  $('.lineup6 .adding').html('');
                },1900);
                oppoScore+=2;
                $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[0].name+' made the shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    oppoTeamStats1[3]+=1;
                    $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[0].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
            }
            else if (ran == 2 || ran == 3) {
              if (Math.round(Math.random() *10) > 9) {
                if ((Math.round(Math.random() *10) * thv7) >=2.5) {
                  oppoTeamStats2[1]+=3;
                  oppoTeamStats2[4]+=1;
                  oppoTeamStats2[5]+=1;
                  oppoTeamStats2[2]+=1;
                  oppoTeamStats2[3]+=1;
                  $('.lineup7 .adding').append('<h1>+3</h1>');
                  setTimeout(function(){
                    $('.lineup7 .adding').html('');
                  },1900);
                  oppoScore+=3;
                  $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[1].name+' made the three point shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                  oppoTeamStats2[5]+=1;
                  oppoTeamStats2[3]+=1;
                    $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[1].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
              else {
                if ((Math.round(Math.random() *10) * atkv7) >= 2.5) {
                oppoTeamStats2[1]+=2;
                oppoTeamStats2[2]+=1;
                oppoTeamStats2[3]+=1;
                $('.lineup7 .adding').append('<h1>+2</h1>');
                setTimeout(function(){
                  $('.lineup7 .adding').html('');
                },1900);
                oppoScore+=2;
                $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[1].name+' made the shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    oppoTeamStats2[3]+=1;
                    $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[1].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
            }
            else if (ran == 4 || ran == 5) {
              if (Math.round(Math.random() *10) > 5) {
                if ((Math.round(Math.random() *10) * thv8) >=2.5) {
                  oppoTeamStats3[1]+=3;
                  oppoTeamStats3[4]+=1;
                  oppoTeamStats3[5]+=1;
                  oppoTeamStats3[2]+=1;
                  oppoTeamStats3[3]+=1;
                  $('.lineup8 .adding').append('<h1>+3</h1>');
                  setTimeout(function(){
                    $('.lineup8 .adding').html('');
                  },1900);
                  oppoScore+=3;
                  $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[2].name+' made the three point shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    oppoTeamStats3[5]+=1;
                    oppoTeamStats3[3]+=1;
                    $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[2].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
              else {
                if ((Math.round(Math.random() *10) * atkv8) >= 2.5) {
                oppoTeamStats3[1]+=2;
                oppoTeamStats3[2]+=1;
                oppoTeamStats3[3]+=1;
                $('.lineup8 .adding').append('<h1>+2</h1>');
                setTimeout(function(){
                  $('.lineup8 .adding').html('');
                },1900);
                oppoScore+=2;
                $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[2].name+' made the shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    oppoTeamStats3[3]+=1;
                    $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[2].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
            }
            else if (ran == 6 || ran == 7) {
              if (Math.round(Math.random() *10) > 5) {
                if ((Math.round(Math.random() *10) * thv9) >=2.5) {
                  oppoTeamStats4[1]+=3;
                  oppoTeamStats4[4]+=1;
                  oppoTeamStats4[5]+=1;
                  oppoTeamStats4[2]+=1;
                  oppoTeamStats4[3]+=1;
                  $('.lineup9 .adding').append('<h1>+3</h1>');
                  setTimeout(function(){
                    $('.lineup9 .adding').html('');
                  },1900);
                  oppoScore+=3;
                  $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[3].name+' made the three point shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    oppoTeamStats4[5]+=1;
                    oppoTeamStats4[3]+=1;
                    $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[3].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
              else {
                if ((Math.round(Math.random() *10) * atkv9) >= 2.5) {
                oppoTeamStats4[1]+=2;
                oppoTeamStats4[2]+=1;
                oppoTeamStats4[3]+=1;
                $('.lineup9 .adding').append('<h1>+2</h1>');
                setTimeout(function(){
                  $('.lineup9 .adding').html('');
                },1900);
                oppoScore+=2;
                $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[3].name+' made the shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    oppoTeamStats4[3]+=1;
                    $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[3].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
            }
            else if (ran == 8 || ran == 9) {
              if (Math.round(Math.random() *10) > 5) {
                if ((Math.round(Math.random() *10) * thv10) >=2.5) {
                  oppoTeamStats5[1]+=3;
                  oppoTeamStats5[4]+=1;
                  oppoTeamStats5[5]+=1;
                  oppoTeamStats5[2]+=1;
                  oppoTeamStats5[3]+=1;
                  $('.lineup10 .adding').append('<h1>+3</h1>');
                  setTimeout(function(){
                    $('.lineup10 .adding').html('');
                  },1900);
                  oppoScore+=3;
                  $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[4].name+' made the three point shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    oppoTeamStats5[5]+=1;
                    oppoTeamStats5[3]+=1;
                    $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[4].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
              else {
                if ((Math.round(Math.random() *10) * atkv10) >= 2.5) {
                oppoTeamStats5[1]+=2;
                oppoTeamStats5[2]+=1;
                oppoTeamStats5[3]+=1;
                $('.lineup10 .adding').append('<h1>+2</h1>');
                setTimeout(function(){
                  $('.lineup10 .adding').html('');
                },1900);
                oppoScore+=2;
                $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[4].name+' made the shot! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
                else {
                    oppoTeamStats5[3]+=1;
                    $('.plays').prepend('<h6 class ="oppoteamline">'+oppoTeam[4].name+' missed! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
                }
              }
            }
            else {
              $('.plays').prepend('<h6 class ="oppoteamline"> oppoteam turnover! ['+current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds)+']</h6>');
            }
            $('.stats2').html('');
            $('.stats2').prepend('<h3>'+ oppoTeamStats5[0] + ' : <span class = "oppostatlist"> '+ oppoTeamStats5[1] +'Pts || '+ oppoTeamStats5[2] +'/'+ oppoTeamStats5[3] +' FGM || '+ nan(oppoTeamStats5[2],oppoTeamStats5[3]) + '%</h3>');
            $('.stats2').prepend('<h3>'+ oppoTeamStats4[0] + ' : <span class = "oppostatlist"> '+ oppoTeamStats4[1] +'Pts || '+ oppoTeamStats4[2] +'/'+ oppoTeamStats4[3] +' FGM || '+ nan(oppoTeamStats4[2],oppoTeamStats4[3]) + '%</h3>');
            $('.stats2').prepend('<h3>'+ oppoTeamStats3[0] + ' : <span class = "oppostatlist"> '+ oppoTeamStats3[1] +'Pts || '+ oppoTeamStats3[2] +'/'+ oppoTeamStats3[3] +' FGM || '+ nan(oppoTeamStats3[2],oppoTeamStats3[3]) + '%</h3>');
            $('.stats2').prepend('<h3>'+ oppoTeamStats2[0] + ' : <span class = "oppostatlist"> '+ oppoTeamStats2[1] +'Pts || '+ oppoTeamStats2[2] +'/'+ oppoTeamStats2[3] +' FGM || '+ nan(oppoTeamStats2[2],oppoTeamStats2[3]) + '%</h3>');
            $('.stats2').prepend('<h3>'+ oppoTeamStats1[0] + ' : <span class = "oppostatlist"> '+ oppoTeamStats1[1] +'Pts || '+ oppoTeamStats1[2] +'/'+ oppoTeamStats1[3] +' FGM || '+ nan(oppoTeamStats1[2],oppoTeamStats1[3]) + '%</h3>');
            $('.score').prepend("<span class = 'boxScore'>"+myScore+'</span>' + ' : ' + "<span class = 'boxScore'>"+oppoScore+'</span>');
            ball =0;
          }
        }


        else {
            if(mins > 1){
                countdown(mins-1);
            }
        }
    }
    tick();
}
