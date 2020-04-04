let viz;
$(".tableauGraph").on("click", function() {
  const vizList = [
    "https://public.tableau.com/views/RegionalSampleWorkbook/Flights",
    "https://public.tableau.com/views/RegionalSampleWorkbook/Obesity",
    "https://public.tableau.com/views/RegionalSampleWorkbook/College"
  ];
  const containerDiv = document.getElementById("vizContainer");
  const graphId = $(this).attr("id");
  let url;

  switch (graphId) {
    case "btn1":
      url = vizList[0];
      break;
    case "btn2":
      url = vizList[1];
      break;
    case "btn3":
      url = vizList[2];
      break;
    default:
      url = vizList[0];
      break;
  }

  if (viz) {
    // If a viz object exists, delete it.
    viz.dispose();
  }

  viz = new tableau.Viz(containerDiv, url);
});
