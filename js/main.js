console.log("hello")

//trips array//

const arrTrips = [
{
    name: "Hawaii",
    price: "R1500",
    description: "Depart from San Francisco at 9am. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In consequuntur omnis illo optio sint, voluptates corrupti tempore libero est debitis voluptatem praesentium. Neque eveniet. Lorem ipsum dolor sit amet consectetur!",
    Image: "hawaiiCruise.jpeg",
    journey:"allRound",
    duration: "shortAndLong"
},

{
    name: "Cabo San Lucas",
    price: "R1100",
    description: "Depart from Los Angeles at 9am. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laborum aperiam accusamus doloremque cum sit veniam, quas sequi ipsam unde id? Suscipit, eligendi quis! Expedita ullam dignissimos iste maxime eum.",
    Image: "caboCruise.jpeg",
    journey:"multi",
    duration: "shortAndLong"
},

{
    name: "Mauritius",
    price: "R1400",
    description: "Depart from L’Estuarie ,La Balise Marine at 9am. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolore distinctio quod modi. Perferendis soluta beatae corporis distinctio ad molestiae et ducimus, accusamus asperiores odio vitae reprehenderit.",
    Image: "Lastcruise.jpeg",
    journey:"allRound",
    duration: "shortAndLong"
},

{
    name: "Jamaica",
    price: "R1900",
    description: "Depart from San Francisco at 9am. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In consequuntur omnis illo optio sint, voluptates corrupti tempore libero est debitis voluptatem praesentium. Neque eveniet,asperiores odio vitae reprehenderit eligendi!",
    Image: "hawaiiCruise.jpeg",
    journey:"single",
    duration: "shortAndLong"
},

{
    name: "Costa Rica",
    price: "R1200",
    description: "Depart from Los Angeles at 9am. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laborum aperiam accusamus doloremque cum sit veniam, quas sequi ipsam unde id? Suscipit, eligendi quis! Expedita ullam dignissimos iste maxime eum.",
    Image: "caboCruise.jpeg",
    journey:"single",
    duration: "shortAndLong"
},

{
    name: "Maldives",
    price: "R2000",
    description: "Depart from L’Estuarie ,La Balise Marine at 9am. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolore distinctio quod modi. Perferendis soluta beatae corporis distinctio ad molestiae et ducimus, accusamus asperiores?",
    Image: "Lastcruise.jpeg",
    journey:"allRound",
    duration: "shortAndLong"
},

{
    name: "Royal Caribbean",
    price: "R1500",
    description: "Depart from San Francisco at 9am. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In consequuntur omnis illo optio sint, voluptates corrupti tempore libero est debitis voluptatem praesentium. Neque eveniet!",
    Image: "hawaiiCruise.jpeg",
    journey:"multi",
    duration: "shortAndLong"
},

{
    name: "Italy",
    price: "R1600",
    description: "Depart from Los Angeles at 9am. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laborum aperiam accusamus doloremque cum sit veniam, quas sequi ipsam unde id? Suscipit, eligendi quis! Expedita.",
    Image: "caboCruise.jpeg",
    journey:"single",
    duration: "shortAndLong"
},

{
    name: "Bahamas",
    price: "R1800",
    description: "Depart from L’Estuarie ,La Balise Marine at 9am. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolore distinctio quod modi. Perferendis soluta beatae corporis distinctio ad molestiae et ducimus.?",
    Image: 'Lastcruise.jpeg',
    journey:"multi",
    duration: "shortAndLong"
},
];

let addedFilter = "";
let addedSort = "";




$(document).ready(function(){

//browse page//
//description text hide//



filterSortUnited();

//loading trips//
function loadingTrips(tripsToShow){

    console.log(tripsToShow);

    //to clear when filtering
    $("#tripsBox").empty();

    //trips loop for name price and description//

    for (let index = 0; index < tripsToShow.length; index++) {
        const trip = tripsToShow[index];

        console.log(trip)

        //creating multiple trips on the page//

        $("#tripsBox").append($("#cardTemp").html());

        //editing the trips individually//
        
        $("#tripsBox").children().eq(index).find("#heading").text(trip.name);
        $("#tripsBox").children().eq(index).find("#priceText").text(trip.price);
        $("#tripsBox").children().eq(index).find("#descriptionText").text(trip.description);
        $("tripsBox").children().eq(index).find(".card-img-top").attr('src', 'assets/' + trip.Image)

        //onclick event//
        $("#tripsBox").children().eq(index+1).find("#descriptionText").hide();


    }
};

    //clicking sort or filter//

    //filter//

    $("input[name='filterRadio']").click(function() {
        addedFilter = $(this).attr('value');

        console.log(addedFilter);
        filterSortUnited();
    })

    //sort//

    $("input[name='SortRadio']").click(function() {
        addedSort = $(this).attr('value');

        console.log(addedSort);
        filterSortUnited();
    })

    function filterSortUnited(){

        let unitedArrTrips = [];

        //filter first//

        if (addedFilter) {
            unitedArrTrips = arrTrips.filter(trip => trip.journey == addedFilter )
        } else {
            unitedArrTrips = arrTrips;
        }

        //sort now//

        if(addedSort == "low to high"){
            unitedArrTrips = unitedArrTrips.sort((a, b) => {
                return a.price - b.price;
            });
        } else if (addedSort == "duration" ){ 
            unitedArrTrips = unitedArrTrips;
        }

        loadingTrips(unitedArrTrips);
    }


    //clicking card//

   $("#tripsBox").on('click','.card', function(){

     //toggle description//
     $(this).find("#descriptionText").toggle();
   })


})

$(document).ready(function(){
    $.ajax({
        type:"GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=Honolulu&appid=6a6b0fa21f9a19266984f86146fed48f",
        success:function(data){
            temp = data;
           console.log(data);
        }
    }).done(function(){
        
    })
})

$(document).ready(function(){
    $.ajax({
        type:"GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=Manila&appid=6a6b0fa21f9a19266984f86146fed48f",
        success:function(data){
            temp = data;
           console.log(data);
        }
    }).done(function(){
        
    })
})

$(document).ready(function(){
    $.ajax({
        type:"GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=Rio de Janeiro&appid=6a6b0fa21f9a19266984f86146fed48f",
        success:function(data){
            temp = data;
           console.log(data);
        }
    }).done(function(){
        
    })
})



$(document).ready(function(){
    $.ajax({
        type:"GET",
        url: "https://api.openweathermap.org/data/2.5/weather?q=Tahiti&appid=6a6b0fa21f9a19266984f86146fed48f",
        success:function(data){
            temp = data;
           console.log(data);
        }
    }).done(function(){
        
    })
})






