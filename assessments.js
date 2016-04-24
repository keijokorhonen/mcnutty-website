$(document).ready(function () {

  var data = [
    { label: "Paper 1",  data: 20, color: "#4572A7"},
    { label: "Paper 2",  data: 36, color: "#80699B"},
    { label: "Paper 3",  data: 24, color: "#AA4643"},
    { label: "Internal Assessment",  data: 20, color: "#3D96AE"}
];

$.plot($("#assessment-chart"), data, {
  series: {
      pie: {
          show: true,
          radius: 1,
          label: {
              show: true,
              radius: 7/12,
              formatter: function(label, series) {
                  return '<div style="font-size:15px; text-align:center; padding:2px; color:white;">'+label+'<br/>'+Math.round(series.percent)+'%</div>';
              },

          }
      }
  },
  legend: {
      show: false
  }
});

});
