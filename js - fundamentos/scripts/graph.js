var chart = document.getElementById("chart");

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Element", "Quantidade", { role: "style" }],
    ["Agentes", idAgent - 1, " #bde8c4"], 
    ["Assuntos", idSubject - 1, " #bddfe8"], 
    ["Regionais", idRegional - 1, " #fcefcf"],
    ["Relatórios", idReport - 1, " #f8d2e8"], 
  ]);
  var options = {
    legend: { position: "none" } 
  };
  var chart = new google.visualization.ColumnChart(
    document.getElementById("chart")
  );
  chart.draw(data, options);
}
