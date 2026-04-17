// Expose a global init function for the Google loader to call

// Load the Visualization API and the piechart package.
google.charts.load("current", { packages: ["corechart"] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawEnglishMaths);
google.charts.setOnLoadCallback(drawEnglishMathsPupilType);
google.charts.setOnLoadCallback(drawDestinations);
google.charts.setOnLoadCallback(drawDestinationsBreakdown);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

var optionsBarChart = {
  fontSize: 19,
  height: 250,
  bar: { groupWidth: "70%" },
  chartArea: {
    width: "100%",
    height: "100%",
    left: "25%",
    bottom: "15%",
    right: "10%",
  },
  legend: { position: "none" },
  hAxis: {
    format: "percent",
    minValue: 0,
  },
  enableInteractivity: false,
  annotations: {
    highContrast: false,
    textStyle: {
      color: "black",
      fontSize: 19,
      auraColor: "none",
    },
  },
};

var optionsCluster = {
  fontSize: 19,
  colors: ["#f39431", "#27a0cc", "#003c57"],
  height: 450,
  width: "100%",
  bar: { groupWidth: "70%" },
  chartArea: {
    height: "100%",
    bottom: "15%",
    right: "10%",
    top: "20%",
  },
  legend: {
    position: "top",
    alignment: "left",
    maxLines: 4,
  },
  hAxis: {
    format: "percent",
    minValue: 0,
  },
  vAxis: {
    textStyle: {},
  },
  enableInteractivity: false,
  annotations: {
    highContrast: false,
    textStyle: {
      color: "black",
      auraColor: "none",
    },
  },
};

function drawEnglishMaths() {
  // Create the data table.

  var englishMaths = google.visualization.arrayToDataTable([
    ["Area", "Percentage", { role: "style" }, { role: "annotation" }],
    ["School", 0.63, "#f39431", "63%"],
    ["Sheffield average", 0.5, "#27a0cc", "50%"],
    ["England average", 0.54, "#003c57", "54%"],
  ]);

  var englishMathsChart = new google.visualization.BarChart(
    document.getElementById("english-maths"),
  );

  google.visualization.events.addListener(
    englishMathsChart,
    "ready",
    function () {
      // Get the chart container and its SVG contents
      var container = englishMathsChart.getContainer();

      // Limit search to the chart's SVG for reliability
      var texts = container.querySelectorAll("svg text");

      for (var i = 0; i < texts.length; i++) {
        var t = texts[i];
        if (t.textContent.trim() === "54%") {
          // Force annotation text to white
          t.setAttribute("fill", "#ffffff");
          break;
        }
      }
    },
  );
  englishMathsChart.draw(englishMaths, optionsBarChart);
}

function drawEnglishMathsPupilType() {
  var englishMathsPupilType = google.visualization.arrayToDataTable([
    [
      "Pupil type",
      "School",
      { role: "annotation" },
      "Sheffield average",
      { role: "annotation" },
      "England average",
      { role: "annotation" },
    ],
    ["Girls", 0.66, "66%", 0.52, "52%", 0.55, "55%"],
    ["Boys", 0.58, "58%", 0.47, "47%", 0.5, "50%"],
  ]);

  var englishMathsPupilTypeChart = new google.visualization.BarChart(
    document.getElementById("english-maths-pupil-type"),
  );
  google.visualization.events.addListener(
    englishMathsPupilTypeChart,
    "ready",
    function () {
      // Get the chart container and its SVG contents
      var container = englishMathsPupilTypeChart.getContainer();

      // Limit search to the chart's SVG for reliability
      var texts = container.querySelectorAll("svg text");

      for (var i = 0; i < texts.length; i++) {
        var t = texts[i];
        if (t.textContent.trim() === "55%" || t.textContent.trim() === "50%") {
          // Force annotation text to white
          t.setAttribute("fill", "#ffffff");
        }
      }
    },
  );
  englishMathsPupilTypeChart.draw(englishMathsPupilType, optionsCluster);
}

function drawDestinations() {
  var destinations = google.visualization.arrayToDataTable([
    ["Area", "Percentage", { role: "style" }, { role: "annotation" }],
    ["School", 0.95, "#f39431", "95%"],
    ["Sheffield average", 0.92, "#27a0cc", "92%"],
    ["England average", 0.87, "#003c57", "87%"],
  ]);

  var destinationsChart = new google.visualization.BarChart(
    document.getElementById("destinations"),
  );
  google.visualization.events.addListener(
    destinationsChart,
    "ready",
    function () {
      // Get the chart container and its SVG contents
      var container = destinationsChart.getContainer();

      // Limit search to the chart's SVG for reliability
      var texts = container.querySelectorAll("svg text");

      for (var i = 0; i < texts.length; i++) {
        var t = texts[i];
        if (t.textContent.trim() === "87%") {
          // Force annotation text to white
          t.setAttribute("fill", "#ffffff");
          break;
        }
      }
    },
  );
  destinationsChart.draw(destinations, optionsBarChart);
}

function drawDestinationsBreakdown() {
  var destinationsBreakdown = google.visualization.arrayToDataTable([
    [
      "Pupil type",
      "School",
      { role: "annotation" },
      "Sheffield average",
      { role: "annotation" },
      "England average",
      { role: "annotation" },
    ],
    ["Staying in education", 0.89, "89%", 0.86, "86%", 0.84, "84%"],
    [
      "Entering employment and apprenticeships",
      0.06,
      "6%",
      0.06,
      "6%",
      0.13,
      "13%",
    ],
  ]);

  var destinationsBreakdownChart = new google.visualization.BarChart(
    document.getElementById("destinations-breakdown"),
  );
  google.visualization.events.addListener(
    destinationsBreakdownChart,
    "ready",
    function () {
      // Get the chart container and its SVG contents
      var container = destinationsBreakdownChart.getContainer();

      // Limit search to the chart's SVG for reliability
      var texts = container.querySelectorAll("svg text");

      for (var i = 0; i < texts.length; i++) {
        var t = texts[i];
        if (t.textContent.trim() === "13%" || t.textContent.trim() === "84%") {
          // Force annotation text to white
          t.setAttribute("fill", "#ffffff");
        }
      }
    },
  );
  destinationsBreakdownChart.draw(destinationsBreakdown, optionsCluster);
}
