
$( document ).ready(function() {


var ctx = document.getElementById("myChart").getContext("2d");
ctx.canvas.width = 900;
ctx.canvas.height = 180;

    new Chart(ctx).Line(data,options);

});
var options = {
    scaleFontColor: "#E00",
    scaleFontSize:25,
    datasetStrokeWidth: 5,
    scaleGridLineColor:"rgba(0,0,0,5)"
};

var data = {
  labels : ["2014/3/31","2014/4/02","2014/4/04","2014/4/06","2014/4/08","2014/4/10"],
  datasets : [
    {
      fillColor : "rgba(151,187,205,0.5)",
      strokeColor : "rgba(0,187,205,1)",
      pointColor : "rgba(151,187,205,1)",
      pointStrokeColor : "#fff",
      data : [28,48,40,19,96,27 ]
    }
  ]
}
