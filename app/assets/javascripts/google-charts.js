// Expose a global init function for the Google loader to call

// Load the Visualization API and the piechart package.
google.charts.load("current", { packages: ["corechart"] });

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawEnglishMaths);
google.charts.setOnLoadCallback(drawEnglishMathsPupilType);
google.charts.setOnLoadCallback(drawDestinations);
google.charts.setOnLoadCallback(drawDestinationsBreakdown);
google.charts.setOnLoadCallback(drawTopLanguages1);
google.charts.setOnLoadCallback(drawTopLanguages2);
google.charts.setOnLoadCallback(drawTopLanguages3);
google.charts.setOnLoadCallback(drawTopVocational1);
google.charts.setOnLoadCallback(drawTopVocational2);
google.charts.setOnLoadCallback(drawTopVocational3);
google.charts.setOnLoadCallback(drawEnglishMathsComparisonG5);
google.charts.setOnLoadCallback(drawEnglishMathsComparisonG4);
google.charts.setOnLoadCallback(drawDestinationsComparison);
google.charts.setOnLoadCallback(drawEnglishMathsComparisonOverTimeG5);
google.charts.setOnLoadCallback(drawEnglishMathsComparisonOverTimeG4);
google.charts.setOnLoadCallback(drawDestinationsComparisonOvertime);

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

var optionsBarChartComparison = {
  fontSize: 19,
  height: 180,
  bar: { groupWidth: "70%" },
  chartArea: {
    width: "100%",
    height: "100%",
    left: "35%",
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

var optionsBarChartComparisonOne = {
  fontSize: 19,
  height: 80,
  bar: { groupWidth: "70%" },
  chartArea: {
    width: "100%",
    height: "100%",
    left: "35%",
    bottom: "30%",
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
function drawTopLanguages1() {
  // Create the data table.

  var topLanguages = google.visualization.arrayToDataTable([
    ["Area", "Percentage", { role: "style" }, { role: "annotation" }],
    ["French", 0.22, "#28A197", "22%"],
    ["Spanish", 0.42, "#28A197", "42%"],
    ["German", 0.09, "#28A197", "9%"],
  ]);

  var languagesChart = new google.visualization.BarChart(
    document.getElementById("top-languages-1"),
  );

  languagesChart.draw(topLanguages, optionsBarChartComparison);
}
function drawTopLanguages2() {
  // Create the data table.

  var topLanguages = google.visualization.arrayToDataTable([
    ["Area", "Percentage", { role: "style" }, { role: "annotation" }],
    ["French", 0.77, "#28A197", "77%"],
  ]);

  var languagesChart = new google.visualization.BarChart(
    document.getElementById("top-languages-2"),
  );

  languagesChart.draw(topLanguages, optionsBarChartComparisonOne);
}
function drawTopLanguages3() {
  // Create the data table.

  var topLanguages = google.visualization.arrayToDataTable([
    ["Area", "Percentage", { role: "style" }, { role: "annotation" }],
    ["Modern Greek", 0.05, "#28A197", "5%"],
    ["Polish", 0.02, "#28A197", "2%"],
    ["Spanish", 0.55, "#28A197", "55%"],
  ]);

  var languagesChart = new google.visualization.BarChart(
    document.getElementById("top-languages-3"),
  );

  languagesChart.draw(topLanguages, optionsBarChartComparison);
}

var optionsBarChartComparisonVocational = {
  fontSize: 19,
  height: 200,
  bar: { groupWidth: "70%" },
  chartArea: {
    width: "100%",
    height: "100%",
    left: "40%",
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

function drawTopVocational1() {
  // Create the data table.

  var topVocational = google.visualization.arrayToDataTable([
    ["Area", "Percentage", { role: "style" }, { role: "annotation" }],
    ["Computer science", 0.82, "#28A197", "82%"],
    ["Engineering", 0.61, "#28A197", "61%"],
    ["Music", 0.4, "#28A197", "55%"],
  ]);

  var vocationalChart = new google.visualization.BarChart(
    document.getElementById("top-vocational-1"),
  );

  vocationalChart.draw(topVocational, optionsBarChartComparisonVocational);
}

function drawTopVocational2() {
  // Create the data table.

  var topVocational = google.visualization.arrayToDataTable([
    ["Area", "Percentage", { role: "style" }, { role: "annotation" }],
    ["ICT", 0.75, "#28A197", "75%"],
    ["Music", 0.5, "#28A197", "50%"],
    ["Physical education", 0.45, "#28A197", "45%"],
  ]);

  var vocationalChart = new google.visualization.BarChart(
    document.getElementById("top-vocational-2"),
  );

  vocationalChart.draw(topVocational, optionsBarChartComparisonVocational);
}

function drawTopVocational3() {
  // Create the data table.

  var topVocational = google.visualization.arrayToDataTable([
    ["Area", "Percentage", { role: "style" }, { role: "annotation" }],
    ["Business studies", 0.63, "#28A197", "63%"],
    ["Media studies", 0.61, "#28A197", "61%"],
    ["ICT", 0.6, "#28A197", "60%"],
  ]);

  var vocationalChart = new google.visualization.BarChart(
    document.getElementById("top-vocational-3"),
  );

  vocationalChart.draw(topVocational, optionsBarChartComparisonVocational);
}

var optionsBarChartFour = {
  fontSize: 19,
  height: 300,
  bar: { groupWidth: "70%" },
  chartArea: {
    width: "100%",
    height: "100%",
    left: "30%",
    bottom: "15%",
    right: "10%",
  },
  legend: { position: "none" },
  hAxis: {
    format: "percent",
    minValue: 0,
    maxValue: 1,
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

function drawEnglishMathsComparisonG5() {
  // Create the data table.

  var englishMaths = google.visualization.arrayToDataTable([
    ["Area", "Percentage", { role: "style" }, { role: "annotation" }],
    ["Bracken Cove Academy", 0.54, "#A285D1", "54%"],
    ["Oak Nest Secondary School", 0.63, "#A285D1", "63%"],
    ["Thomas Lane Secondary School", 0.44, "#A285D1", "44%"],
    ["Sheffield average", 0.41, "#bcbcbd", "41%"],
  ]);

  var englishMathsChart = new google.visualization.BarChart(
    document.getElementById("english-maths-comparison-g5"),
  );

  englishMathsChart.draw(englishMaths, optionsBarChartFour);
}

function drawEnglishMathsComparisonG4() {
  // Create the data table.

  var englishMaths = google.visualization.arrayToDataTable([
    ["Area", "Percentage", { role: "style" }, { role: "annotation" }],
    ["Bracken Cove Academy", 0.57, "#A285D1", "57%"],
    ["Oak Nest Secondary School", 0.65, "#A285D1", "65%"],
    ["Thomas Lane Secondary School", 0.7, "#A285D1", "70%"],
    ["Sheffield average", 0.45, "#bcbcbd", "45%"],
  ]);

  var englishMathsChart = new google.visualization.BarChart(
    document.getElementById("english-maths-comparison-g4"),
  );

  englishMathsChart.draw(englishMaths, optionsBarChartFour);
}

function drawDestinationsComparison() {
  // Create the data table.

  var destinations = google.visualization.arrayToDataTable([
    ["Area", "Percentage", { role: "style" }, { role: "annotation" }],
    ["Bracken Cove Academy", 0.85, "#A285D1", "85%"],
    ["Oak Nest Secondary School", 0.9, "#A285D1", "90%"],
    ["Thomas Lane Secondary School", 0.94, "#A285D1", "94%"],
    ["Sheffield average", 0.89, "#bcbcbd", "89%"],
  ]);

  var destinationsChart = new google.visualization.BarChart(
    document.getElementById("destinations-comparison"),
  );

  destinationsChart.draw(destinations, optionsBarChartFour);
}

var optionsClusterComparison = {
  fontSize: 19,
  colors: ["#A285D1", "#12436D", "#28A197"],
  height: 500,
  width: "100%",
  bar: { groupWidth: "70%" },
  chartArea: {
    bottom: "10%",
    left: "30%",
    height: "100%",
  },
  legend: {
    position: "none",
  },
  hAxis: {
    format: "percent",
    minValue: 0,
    maxValue: 1,
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

function drawEnglishMathsComparisonOverTimeG5() {
  var destinationsBreakdown = google.visualization.arrayToDataTable([
    [
      "Pupil type",
      "2024 to 2025",
      { role: "annotation" },
      "2023 to 2024",
      { role: "annotation" },
      "2022 to 2023",
      { role: "annotation" },
    ],
    ["Bracken Cove Academy", 0.54, "54%", 0.53, "53%", 0.57, "57%"],
    ["Oak Nest Secondary School", 0.63, "63%", 0.66, "66%", 0.67, "67%"],
    ["Thomas Lane Secondary School", 0.44, "44%", 0.43, "43%", 0.39, "39%"],
    ["Sheffield average", 0.41, "41%", 0.42, "42%", 0.49, "40%"],
  ]);

  var destinationsBreakdownChart = new google.visualization.BarChart(
    document.getElementById("english-maths-overtime-comparison-g5"),
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
        if (
          t.textContent.trim() === "53%" ||
          t.textContent.trim() === "66%" ||
          t.textContent.trim() === "43%" ||
          t.textContent.trim() === "42%"
        ) {
          // Force annotation text to white
          t.setAttribute("fill", "#ffffff");
        }
      }
    },
  );
  destinationsBreakdownChart.draw(
    destinationsBreakdown,
    optionsClusterComparison,
  );
}

function drawEnglishMathsComparisonOverTimeG4() {
  var destinationsBreakdown = google.visualization.arrayToDataTable([
    [
      "Pupil type",
      "2024 to 2025",
      { role: "annotation" },
      "2023 to 2024",
      { role: "annotation" },
      "2022 to 2023",
      { role: "annotation" },
    ],
    ["Bracken Cove Academy", 0.57, "57%", 0.53, "53%", 0.49, "49%"],
    ["Oak Nest Secondary School", 0.65, "65%", 0.62, "62%", 0.63, "63%"],
    ["Thomas Lane Secondary School", 0.7, "70%", 0.47, "47%", 0.46, "46%"],
    ["Sheffield average", 0.45, "45%", 0.42, "42%", 0.41, "41%"],
  ]);

  var destinationsBreakdownChart = new google.visualization.BarChart(
    document.getElementById("english-maths-overtime-comparison-g4"),
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
        if (
          t.textContent.trim() === "53%" ||
          t.textContent.trim() === "62%" ||
          t.textContent.trim() === "47%" ||
          t.textContent.trim() === "42%"
        ) {
          // Force annotation text to white
          t.setAttribute("fill", "#ffffff");
        }
      }
    },
  );
  destinationsBreakdownChart.draw(
    destinationsBreakdown,
    optionsClusterComparison,
  );
}

function drawDestinationsComparisonOvertime() {
  var destinationsBreakdown = google.visualization.arrayToDataTable([
    [
      "Pupil type",
      "2024 to 2025",
      { role: "annotation" },
      "2023 to 2024",
      { role: "annotation" },
      "2022 to 2023",
      { role: "annotation" },
    ],
    ["Bracken Cove Academy", 0.85, "85%", 0.86, "86%", 0.8, "80%"],
    ["Oak Nest Secondary School", 0.9, "90%", 0.88, "88%", 0.85, "85%"],
    ["Thomas Lane Secondary School", 0.94, "94%", 0.95, "95%", 0.94, "94%"],
    ["Sheffield average", 0.89, "89%", 0.88, "88%", 0.87, "87%"],
  ]);

  var destinationsBreakdownChart = new google.visualization.BarChart(
    document.getElementById("destinations-comparison-overtime"),
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
        if (
          t.textContent.trim() === "86%" ||
          t.textContent.trim() === "88%" ||
          t.textContent.trim() === "95%"
        ) {
          // Force annotation text to white
          t.setAttribute("fill", "#ffffff");
        }
      }
    },
  );
  destinationsBreakdownChart.draw(
    destinationsBreakdown,
    optionsClusterComparison,
  );
}