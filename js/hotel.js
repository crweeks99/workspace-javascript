//for hotel registration

var test = {
    hotelname: "marriot", 
    room: 350,
    booked: 120,
    display: function () {
        return this.hotelname;
    }
};

console.log(test.hotelname);
console.log(test.room);
//event
$(function(){
    $('#submit').click(reservation);
    $('#lists').click(displayR);
});

function reservation() {
    var guest = {
        name: $('#name').val(),
        numberofGuest: $('#num').val(),
        checkinTime: $('#checkin').val(),
        roomType: $('#room').val(),
    };
    $("p:first").html("Thank you for your reservation!")
    guestgroup.push(guest);
    console.log(guestgroup);
}

function displayR() {
    $("form").append("<table>");
    for(var i in guestgroup) {
        var theguest = guestgroup[i];
        var row = "<tr><td>" + theguest.name + "</td><td>" + theguest.checkinTime + "</td></tr>";
        $("table").append(row);
    }
}