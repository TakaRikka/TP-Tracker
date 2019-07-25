$(document).ready(function () {

//World Map handler
$(function(){
    //Ordon
    $('#ordon-map').hover(function(){
        $('#ordon-img').css('filter', 'brightness(120%)');
    }, function(){
        $('#ordon-img').css('filter', 'brightness(100%)');
    });

    //Faron
    $('#faron-map').hover(function(){
        $('#faron-img').css('filter', 'brightness(120%)');
    }, function(){
        $('#faron-img').css('filter', 'brightness(100%)');
    });

    //Eldin
    $('#eldin-map').hover(function(){
        $('#eldin-img').css('filter', 'brightness(120%)');
    }, function(){
        $('#eldin-img').css('filter', 'brightness(100%)');
    });

    //Lanayru
    $('#lanayru-map').hover(function(){
        $('#lanayru-img').css('filter', 'brightness(120%)');
    }, function(){
        $('#lanayru-img').css('filter', 'brightness(100%)');
    });

    //Snowpeak
    $('#snowpeak-map').hover(function(){
        $('#snowpeak-img').css('filter', 'brightness(120%)');
    }, function(){
        $('#snowpeak-img').css('filter', 'brightness(100%)');
    });

    //Desert
    $('#desert-map').hover(function(){
        $('#desert-img').css('filter', 'brightness(120%)');
    }, function(){
        $('#desert-img').css('filter', 'brightness(100%)');
    });

    //Castle
    $('#castle-map').hover(function(){
        $('#HC').css('filter', 'brightness(120%)');
    }, function(){
        $('#HC').css('filter', 'brightness(100%)');
    });


});


//Page Map handler
$(function(){
$('#closeButton').hide();
$('#pagemap').hide();
$('#ordonpage').hide();
$('#eldinpage').hide();
$('#lanayrupage').hide();  
$('#faronpage').hide();  
$('#snowpeakpage').hide();  
$('#desertpage').hide();  
$('#FTpage').hide();
$('#GMpage').hide();
$('#LBpage').hide();
$('#AGpage').hide();
$('#SPRpage').hide();
$('#ToTpage').hide();
$('#Citypage').hide();
$('#PoTpage').hide();
$('#HCpage').hide();
$('#CoOpage').hide();

    $("#ordon-map").mousedown(function(event) {
        $("#mapbg").attr('src',"resources/map_page.png");
        $("#worldmap").hide();
        $('#closeButton').show();
        $("#pagemap").show();
        $("#pageBG").attr('src',"resources/Ordon_page.png");
        $("#pageBG").css({'margin':"206px 0 0 177px", 'transform':'scale(2.0)', 'opacity':'1'});
        $('#ordonpage').show();

        $("#region-title").text("Ordona Province");
    });

    $("#eldin-map").mousedown(function(event) {
        $("#mapbg").attr('src',"resources/map_page.png");
        $("#worldmap").hide();
        $('#closeButton').show();
        $("#pagemap").show();
        $("#pageBG").attr('src',"resources/Eldin_page.png");
        $("#pageBG").css({'margin':"109px 0 0 148px", 'transform':'scale(1.5)', 'opacity':'1'});
        $('#eldinpage').show();

        $("#region-title").text("Eldin Province");
    });

    $("#lanayru-map").mousedown(function(event) {
        $("#mapbg").attr('src',"resources/map_page.png");
        $("#worldmap").hide();
        $('#closeButton').show();
        $("#pagemap").show();
        $("#pageBG").attr('src',"resources/Lanayru_page.png");
        $("#pageBG").css({'margin':"96px 0 0 136px", 'transform':'scale(1.5)', 'opacity':'1'});
        $('#lanayrupage').show();

        $("#region-title").text("Lanayru Province");
    });

    $("#faron-map").mousedown(function(event) {
        $("#mapbg").attr('src',"resources/map_page.png");
        $("#worldmap").hide();
        $('#closeButton').show();
        $("#pagemap").show();
        $("#pageBG").attr('src',"resources/Faron_page.png");
        $("#pageBG").css({'margin':"187px 0 0 134px", 'transform':'scale(2.0)', 'opacity':'1'});
        $('#faronpage').show();

        $("#region-title").text("Faron Province");
    });

    $("#snowpeak-map").mousedown(function(event) {
        $("#mapbg").attr('src',"resources/map_page.png");
        $("#worldmap").hide();
        $('#closeButton').show();
        $("#pagemap").show();
        $("#pageBG").attr('src',"resources/Snowpeak_page.png");
        $("#pageBG").css({'margin':"168px 0 0 151px", 'transform':'scale(2.0)', 'opacity':'1'});
        $('#snowpeakpage').show();

        $("#region-title").text("Snowpeak Province");
    });

    $("#desert-map").mousedown(function(event) {
        $("#mapbg").attr('src',"resources/map_page.png");
        $("#worldmap").hide();
        $('#closeButton').show();
        $("#pagemap").show();
        $("#pageBG").attr('src',"resources/Desert_page.png");
        $("#pageBG").css({'margin':"179px 0 0 179px", 'transform':'scale(2.0)', 'opacity':'1'});
        $('#desertpage').show();

        $("#region-title").text("Desert Province");
    });


    $("#FT").mousedown(function(event) {
        $("#mapbg").attr('src',"resources/map_page.png");
        $("#worldmap").hide();
        $('#closeButton').show();
        $("#pagemap").show();
        $("#pageBG").attr('src',"resources/dungeon/Diababa.png");
        $("#pageBG").css({'margin':"-7px 0 0 -139px", 'transform':'scale(0.6)', 'opacity':'0.3'});
        $('#FTpage').show();

        $("#region-title").text("Forest Temple");
    });

    $("#GM").mousedown(function(event) {
        $("#mapbg").attr('src',"resources/map_page.png");
        $("#worldmap").hide();
        $('#closeButton').show();
        $("#pagemap").show();
        $("#pageBG").attr('src',"resources/dungeon/Fyrus.png");
        $("#pageBG").css({'margin':"-393px 0 0 -341px", 'transform':'scale(0.45)', 'opacity':'0.3'});
        $('#GMpage').show();

        $("#region-title").text("Goron Mines");
    });

    $("#LB").mousedown(function(event) {
        $("#mapbg").attr('src',"resources/map_page.png");
        $("#worldmap").hide();
        $('#closeButton').show();
        $("#pagemap").show();
        $("#pageBG").attr('src',"resources/dungeon/Deku_Toad.png");
        $("#pageBG").css({'margin':"-41px 0 0 -131px", 'transform':'scale(0.45)', 'opacity':'0.3'});
        $('#LBpage').show();

        $("#region-title").text("Lakebed Temple");
    });

    $("#AG").mousedown(function(event) {
        $("#mapbg").attr('src',"resources/map_page.png");
        $("#worldmap").hide();
        $('#closeButton').show();
        $("#pagemap").show();
        $("#pageBG").attr('src',"resources/dungeon/Death_Sword.png");
        $("#pageBG").css({'margin':"-805px 0 0 -627px", 'transform':'scale(0.25)', 'opacity':'0.3'});
        $('#AGpage').show();

        $("#region-title").text("Arbiter's Grounds");
    });

    $("#SPR").mousedown(function(event) {
        $("#mapbg").attr('src',"resources/map_page.png");
        $("#worldmap").hide();
        $('#closeButton').show();
        $("#pagemap").show();
        $("#pageBG").attr('src',"resources/dungeon/Blizzeta.png");
        $("#pageBG").css({'margin':"-43px 0 0 -147px", 'transform':'scale(0.65)', 'opacity':'0.3'});
        $('#SPRpage').show();

        $("#region-title").text("Snowpeak Ruins");
    });

    $("#ToT").mousedown(function(event) {
        $("#mapbg").attr('src',"resources/map_page.png");
        $("#worldmap").hide();
        $('#closeButton').show();
        $("#pagemap").show();
        $("#pageBG").attr('src',"resources/dungeon/Darknut.png");
        $("#pageBG").css({'margin':"-182px 0 0 -130px", 'transform':'scale(0.5)', 'opacity':'0.3'});
        $('#ToTpage').show();

        $("#region-title").text("Temple of Time");
    });

    $("#City").mousedown(function(event) {
        $("#mapbg").attr('src',"resources/map_page.png");
        $("#worldmap").hide();
        $('#closeButton').show();
        $("#pagemap").show();
        $("#pageBG").attr('src',"resources/dungeon/Argorok.png");
        $("#pageBG").css({'margin':"-30px 0 0 -145px", 'transform':'scale(0.6)', 'opacity':'0.3'});
        $('#Citypage').show();

        $("#region-title").text("City in the Sky");
    });

    $("#PoT").mousedown(function(event) {
        $("#mapbg").attr('src',"resources/map_page.png");
        $("#worldmap").hide();
        $('#closeButton').show();
        $("#pagemap").show();
        $("#pageBG").attr('src',"resources/dungeon/Zant 3.png");
        $("#pageBG").css({'margin':"-530px 0 0 -315px", 'transform':'scale(0.3)', 'opacity':'0.3'});
        $('#PoTpage').show();

        $("#region-title").text("Palace of Twilight");
    });

    $("#castle-map").mousedown(function(event) {
        $("#mapbg").attr('src',"resources/map_page.png");
        $("#worldmap").hide();
        $('#closeButton').show();
        $("#pagemap").show();
        $("#pageBG").attr('src',"resources/dungeon/Ganondorf.png");
        $("#pageBG").css({'margin':"37px 0 0 120px", 'transform':'scale(1)', 'opacity':'0.3'});
        $('#HCpage').show();

        $("#region-title").text("Hyrule Castle");
    });

    $("#CoO").mousedown(function(event) {
        $("#mapbg").attr('src',"resources/map_page.png");
        $("#worldmap").hide();
        $('#closeButton').show();
        $("#pagemap").show();
        $("#pageBG").attr('src',"resources/Desert_page.png");
        $("#pageBG").css({'margin':"179px 0 0 179px", 'transform':'scale(2.0)', 'opacity':'1'});
        $('#CoOpage').show();

        $("#region-title").text("Cave of Ordeals");
    });

    //Close Button
    $("#closeButton").mousedown(function(event) {
        $("#mapbg").attr('src',"resources/map.png");
        $("#worldmap").show();
        $('#pagemap').hide();
        $('#closeButton').hide(); 

        $('#ordonpage').hide();
        $('#eldinpage').hide();   
        $('#lanayrupage').hide();  
        $('#faronpage').hide();  
        $('#snowpeakpage').hide();  
        $('#desertpage').hide();   

        $('#FTpage').hide();
        $('#GMpage').hide();
        $('#LBpage').hide();
        $('#AGpage').hide();
        $('#SPRpage').hide();
        $('#ToTpage').hide();
        $('#Citypage').hide();
        $('#PoTpage').hide();
        $('#HCpage').hide();
        $('#CoOpage').hide();
    });
});

//Check handler
$(function(){
   /* $('.itemCheck').mousedown(function(event){
        $(this).css('text-decoration', 'line-through');
        $(this).css('color', 'black');
    });*/

    $('#Lantern_itm').click(function(){
        $('#lanternCheck').prop("checked", true);
        $('#lanternCheck').parent().css('text-decoration', 'line-through');
        $('#lanternCheck').parent().css('color', 'black');
    });

    $('.itemCheck').click(function(){
        if($(this).is(':checked')){
            $(this).parent().css('text-decoration', 'line-through');
            $(this).parent().css('color', 'black');
        }else{
            $(this).parent().css('text-decoration', '');
            $(this).parent().css('color', 'white');


        }
    });


});

});