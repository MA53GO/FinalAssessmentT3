console.log("hello")

//trips array//

const arrTrips = [
{
    name: "Hawaii",
    price: "R1500",
    description: "Depart from San Francisco at 9am. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In consequuntur omnis illo optio sint, voluptates corrupti tempore libero est debitis voluptatem praesentium. Neque eveniet. Lorem ipsum dolor sit amet consectetur!",
    Image: "hawaiiCruise.jpeg"
},

{
    name: "Cabo San Lucas",
    price: "R1700",
    description: "Depart from Los Angeles at 9am. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laborum aperiam accusamus doloremque cum sit veniam, quas sequi ipsam unde id? Suscipit, eligendi quis! Expedita ullam dignissimos iste maxime eum.",
    Image: "caboCruise.jpeg"
},

{
    name: "Mauritius",
    price: "R1400",
    description: "Depart from L’Estuarie ,La Balise Marine at 9am. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolore distinctio quod modi. Perferendis soluta beatae corporis distinctio ad molestiae et ducimus, accusamus asperiores odio vitae reprehenderit.",
    Image: "Lastcruise.jpeg"
},

{
    name: "Jamaica",
    price: "R1900",
    description: "Depart from San Francisco at 9am. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In consequuntur omnis illo optio sint, voluptates corrupti tempore libero est debitis voluptatem praesentium. Neque eveniet,asperiores odio vitae reprehenderit eligendi!",
    Image: "hawaiiCruise.jpeg"
},

{
    name: "Costa Rica",
    price: "R1200",
    description: "Depart from Los Angeles at 9am. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laborum aperiam accusamus doloremque cum sit veniam, quas sequi ipsam unde id? Suscipit, eligendi quis! Expedita ullam dignissimos iste maxime eum.",
    Image: "caboCruise.jpeg"
},

{
    name: "Maldives",
    price: "R2000",
    description: "Depart from L’Estuarie ,La Balise Marine at 9am. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolore distinctio quod modi. Perferendis soluta beatae corporis distinctio ad molestiae et ducimus, accusamus asperiores?",
    Image: "Lastcruise.jpeg"
},

{
    name: "Royal Caribbean",
    price: "R1500",
    description: "Depart from San Francisco at 9am. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In consequuntur omnis illo optio sint, voluptates corrupti tempore libero est debitis voluptatem praesentium. Neque eveniet!",
    Image: "hawaiiCruise.jpeg"
},

{
    name: "Italy",
    price: "R1600",
    description: "Depart from Los Angeles at 9am. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laborum aperiam accusamus doloremque cum sit veniam, quas sequi ipsam unde id? Suscipit, eligendi quis! Expedita.",
    Image: "caboCruise.jpeg"
},

{
    name: "Bahamas",
    price: "R1800",
    description: "Depart from L’Estuarie ,La Balise Marine at 9am. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolore distinctio quod modi. Perferendis soluta beatae corporis distinctio ad molestiae et ducimus.?",
    Image: 'Lastcruise.jpeg'
},



];






$(document).ready(function(){

//browse page//
//description text hide//



loadingTrips();

//loading trips//
function loadingTrips(){

    console.log(arrTrips);

    for (let index = 0; index < arrTrips.length; index++) {
        const trip = arrTrips[index];

        console.log(trip)

        //creating multiple trips on the page//

        $("#tripsBox").append($("#cardTemp").html());

        //editing the trips individually//
        
        $("#tripsBox").children().eq(index+1).find("#heading").text(trip.name);
        $("#tripsBox").children().eq(index+1).find("#priceText").text(trip.price);
        $("#tripsBox").children().eq(index+1).find("#descriptionText").text(trip.description);
        $("tripsBox").children().eq(index+1).find(".card-img-top").attr('src', 'assets/' + trip.Image)

        //onclick event//
        $("#tripsBox").children().eq(index+1).find("#descriptionText").hide();


    }
};



    //clicking card//

   $("#tripsBox").on('click','.card', function(){

     //toggle description//
     $(this).find("#descriptionText").toggle();

   })


})





