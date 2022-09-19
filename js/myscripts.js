//for menu-background change
$(window).on('scroll', function (){
    if ($(window).scrollTop() > 550){
      $('#menu').addClass('menu-bg');
    } else {
      $('#menu').removeClass('menu-bg');
    }
});

//for scrolltop
    //icon hide/show in the top
$(window).scroll(function() {
    if ($(this).scrollTop()>150) {
        $('.scrollup').fadeIn();
    } else {
        $('.scrollup').fadeOut();
    }
});
    //click active
$('.scrollup').click(function() {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});

// for counter-Up
$('.counter').counterUp({
delay: 10,
time: 1000
});

// for google-maps
var map;
map = new GMaps({
    el: '#map',
    zoom: 16,
    lat: 40.6976701,
    lng: -74.2598737,
    scrollwheel:false
});
map.addControl({
    position: 'top_right',
    content: 'Geolocate',
    style: {
    margin: '5px',
    padding: '1px 6px',
    border: 'solid 1px #717B87',
    background: '#fff'
    },
    events: {
    click: function(){
        GMaps.geolocate({
        success: function(position){
            map.setCenter(position.coords.latitude, position.coords.longitude);
        },
        error: function(error){
            alert('Geolocation failed: ' + error.message);
        },
        not_supported: function(){
            alert("Your browser does not support geolocation");
        }
        });
    }
    }
});