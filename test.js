// var JSONItems = [];
// $.getJSON("test.json", function(data) {
//     JSONItems = data;
//     console.log(JSONItems);
// });
// console.log(JSONItems);

// Do some stuff when page hmtl page is launched
$(document).ready(function() {

    $("#headerTitle").hide(300).show(1500);
    // calling show food menu function
    showFoodMenu();

    // If you want to fetch data from the file 
    // call fetch data function instead of showFoodMenu
    // fetchData()
});

// ***************************************************************************************
// this function calls showfoodmenu 3000 milisecond to get new changes                   *
// made on demo.xml                                                                      *
// ***************************************************************************************

// **************************************************************************************
// read data from demo.xml using Jquery | AJAX                                          *
// **************************************************************************************
function showFoodMenu() {

    $.ajax({
        type: "GET",
        url: "./test.xml",
        dataType: "xml",

        error: function(e) {
            alert("An error occurred while processing XML file");
            console.log("XML reading Failed: ", e);
        },

        success: function(response) {

            // make sure the ul is empty
            // before appending data inot it
            $("ul").children().remove();

            $(response).find("book").each(function() {
                var _name = 'Name: ' + $(this).find('title').text();
                console.log(_name);

                var _price = 'Price: ' + $(this).find('author').text();
                var _calories = 'Calories: ' + $(this).find('year').text();


                // add content to the HTML          
                $("ul").append('<li>' + _name + '</li>');
                $("ul").append('<li>' + _price + '</li>');
                $("ul").append('<li>' + _calories + '</li>');

            });
        }
    });
}