// ============================================================
// SCHOOL COMPARISON CHARTS
// Used in the comparison usability testing -> user-research/comparison-usability
// ============================================================

// ============================================================
// STYLING - CURRENT DATA
// ============================================================

/* COMPARISON - 3 SCHOOLS ADDED */

var comparisonChartOptions = {
  fontSize: 19,
  height: 300,
  bar: {
    groupWidth: "70%",
  },
  chartArea: {
    width: "100%",
    height: "100%",
    left: "30%",
    bottom: "15%",
    right: "10%",
  },
  legend: {
    position: "none",
  },
  hAxis: {
    format: "percent",
    minValue: 0,
    maxValue: 1,
    textStyle: {
      color: "#0B0C0C",
    },
  },
  enableInteractivity: false,
  annotations: {
    highContrast: false,
    textStyle: {
      color: "#0B0C0C",
      auraColor: "none",
      bold: true,
    },
  },
};

/* SCHOOL PROFILE */

var profileChartOptions = {
  fontSize: 19,
  height: 250,
  bar: {
    groupWidth: "70%",
  },
  chartArea: {
    width: "100%",
    height: "100%",
    left: "25%",
    bottom: "15%",
    right: "10%",
  },
  legend: {
    position: "none",
  },
  hAxis: {
    format: "percent",
    minValue: 0,
    maxValue: 1,
    textStyle: {
      color: "#0B0C0C",
    },
  },
  enableInteractivity: false,
  annotations: {
    highContrast: false,
    textStyle: {
      color: "#000000",
      auraColor: "none",
      bold: true,
    },
  },
};

// ============================================================
// CREATING CHARTS -> GRADE 5 AND ABOVE - CURRENT DATA
// ============================================================

/* COMPARISON */

function drawSchoolComparisonG5() {
  var data = google.visualization.arrayToDataTable([
    ["School", "Percentage", { role: "style" }, { role: "annotation" }],
    ["Oak Nest Secondary School", 0.54, "#A285D1", "54%"],
    ["Langley Secondary School", 0.65, "#A285D1", "65%"],
    ["Thomas Lane Secondary School", 0.44, "#A285D1", "44%"],
    ["England average", 0.41, "#28A197", "41%"],
  ]);

  var chart = new google.visualization.BarChart(
    document.getElementById("english-maths-comparison-g5"),
  );

  chart.draw(data, comparisonChartOptions);
}

/* OAK NEST */

function drawOakNestG5() {
  var data = google.visualization.arrayToDataTable([
    ["Area", "Percentage", { role: "style" }, { role: "annotation" }],
    ["School", 0.54, "#A285D1", "54%"],
    ["Local council average", 0.35, "#12436D", "35%"],
    ["England average", 0.41, "#28A197", "41%"],
  ]);

  var chart = new google.visualization.BarChart(
    document.getElementById("english-maths-oak-nest"),
  );
  google.visualization.events.addListener(chart, "ready", function () {
    // Get the chart container and its SVG contents
    var container = chart.getContainer();

    // Limit search to the chart's SVG for reliability
    var texts = container.querySelectorAll("svg text");

    for (var i = 0; i < texts.length; i++) {
      var t = texts[i];
      if (t.textContent.trim() === "35%") {
        // Force annotation text to white
        t.setAttribute("fill", "#ffffff");
      }
    }
  });
  chart.draw(data, profileChartOptions);
}

/* OAK NEST -> BY PUPIL TYPE */

function drawOakNestPupilType() {
  var englishMathsPupilType = google.visualization.arrayToDataTable([
    [
      "Pupil type",
      "School",
      { role: "annotation" },
      "Local council average",
      { role: "annotation" },
      "England average",
      { role: "annotation" },
    ],
    ["Girls", 0.52, "52%", 0.4, "40%", 0.43, "43%"],
    ["Boys", 0.53, "53%", 0.35, "35%", 0.41, "41%"],
  ]);

  var englishMathsPupilTypeChart = new google.visualization.BarChart(
    document.getElementById("english-maths-oak-nest-pupil-type"),
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
        if (t.textContent.trim() === "40%" || t.textContent.trim() === "35%") {
          // Force annotation text to white
          t.setAttribute("fill", "#ffffff");
        }
      }
    },
  );

  englishMathsPupilTypeChart.draw(englishMathsPupilType, overTimeOptions);
}

/* LANGLEY HILL */

function drawLangleyHillG5() {
  var data = google.visualization.arrayToDataTable([
    ["Area", "Percentage", { role: "style" }, { role: "annotation" }],
    ["School", 0.65, "#A285D1", "65%"],
    ["Local council average", 0.35, "#12436D", "35%"],
    ["England average", 0.41, "#28A197", "41%"],
  ]);

  var chart = new google.visualization.BarChart(
    document.getElementById("english-maths-langley"),
  );
  google.visualization.events.addListener(chart, "ready", function () {
    // Get the chart container and its SVG contents
    var container = chart.getContainer();

    // Limit search to the chart's SVG for reliability
    var texts = container.querySelectorAll("svg text");

    for (var i = 0; i < texts.length; i++) {
      var t = texts[i];
      if (t.textContent.trim() === "35%") {
        // Force annotation text to white
        t.setAttribute("fill", "#ffffff");
      }
    }
  });
  chart.draw(data, profileChartOptions);
}

/* LANGLEY HIGH -> BY PUPIL TYPE */

function drawLangleyHighPupilType() {
  var englishMathsPupilType = google.visualization.arrayToDataTable([
    [
      "Pupil type",
      "School",
      { role: "annotation" },
      "Local council average",
      { role: "annotation" },
      "England average",
      { role: "annotation" },
    ],
    ["Girls", 0.66, "66%", 0.4, "40%", 0.43, "43%"],
    ["Boys", 0.64, "64%", 0.35, "35%", 0.41, "41%"],
  ]);

  var englishMathsPupilTypeChart = new google.visualization.BarChart(
    document.getElementById("english-maths-langley-high-pupil-type"),
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
        if (t.textContent.trim() === "40%" || t.textContent.trim() === "35%") {
          // Force annotation text to white
          t.setAttribute("fill", "#ffffff");
        }
      }
    },
  );

  englishMathsPupilTypeChart.draw(englishMathsPupilType, overTimeOptions);
}

/* THOMAS LANE */

function drawThomasLaneG5() {
  var data = google.visualization.arrayToDataTable([
    ["Area", "Percentage", { role: "style" }, { role: "annotation" }],
    ["School", 0.44, "#A285D1", "44%"],
    ["Local council average", 0.35, "#12436D", "35%"],
    ["England average", 0.41, "#28A197", "41%"],
  ]);

  var chart = new google.visualization.BarChart(
    document.getElementById("english-maths-thomas-lane"),
  );
  google.visualization.events.addListener(chart, "ready", function () {
    // Get the chart container and its SVG contents
    var container = chart.getContainer();

    // Limit search to the chart's SVG for reliability
    var texts = container.querySelectorAll("svg text");

    for (var i = 0; i < texts.length; i++) {
      var t = texts[i];
      if (t.textContent.trim() === "35%") {
        // Force annotation text to white
        t.setAttribute("fill", "#ffffff");
      }
    }
  });
  chart.draw(data, profileChartOptions);
}

/* THOMAS LANE -> BY PUPIL TYPE */

function drawThomasLanePupilType() {
  var englishMathsPupilType = google.visualization.arrayToDataTable([
    [
      "Pupil type",
      "School",
      { role: "annotation" },
      "Local council average",
      { role: "annotation" },
      "England average",
      { role: "annotation" },
    ],
    ["Girls", 0.47, "47%", 0.4, "40%", 0.43, "43%"],
    ["Boys", 0.41, "41%", 0.35, "35%", 0.41, "41%"],
  ]);

  var englishMathsPupilTypeChart = new google.visualization.BarChart(
    document.getElementById("english-maths-thomas-lane-pupil-type"),
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
        if (t.textContent.trim() === "40%" || t.textContent.trim() === "35%") {
          // Force annotation text to white
          t.setAttribute("fill", "#ffffff");
        }
      }
    },
  );

  englishMathsPupilTypeChart.draw(englishMathsPupilType, overTimeOptions);
}
// ============================================================
// STYLING - OVER TIME
// ============================================================

/* COMPARISON AND SCHOOL PROFILES */

var overTimeOptions = {
  fontSize: 19,
  colors: ["#A285D1", "#12436D", "#28A197"],
  height: "100%",
  width: "100%",
  bar: {
    groupWidth: "70%",
  },
  chartArea: {
    height: "100%",
    left: "20%",
    right: "10%",
    bottom: "10%",
    width: "60%",
  },
  legend: {
    position: "none",
  },
  hAxis: {
    format: "percent",
    minValue: 0,
    maxValue: 1,
    textStyle: {
      color: "#0B0C0C",
    },
  },
  vAxis: {
    textStyle: {
      color: "#0B0C0C",
      fontSize: 19,
    },
  },
  enableInteractivity: false,
  annotations: {
    highContrast: false,
    textStyle: {
      color: "#0B0C0C",
      fontSize: 19,
      auraColor: "none",
      bold: true,
    },
  },
};

// ============================================================
// CREATING CHARTS -> GRADE 5 AND ABOVE - DATA OVER TIME
// ============================================================

/* COMPARISON - 3 SCHOOLS ADDED */

function drawSchoolComparisonOverTimeG5() {
  var data = google.visualization.arrayToDataTable([
    [
      "School",
      "2022 to 2023",
      { role: "annotation" },
      "2023 to 2024",
      { role: "annotation" },
      "2024 to 2025",
      { role: "annotation" },
    ],

    ["Oak Nest Secondary School", 0.52, "52%", 0.51, "51%", 0.54, "54%"],
    ["Langley Secondary School", 0.7, "70%", 0.67, "67%", 0.65, "65%"],
    ["Thomas Lane Secondary School", 0.37, "37%", 0.4, "40%", 0.44, "44%"],
    ["England average", 0.41, "41%", 0.42, "42%", 0.41, "41%"],
  ]);

  var chart = new google.visualization.BarChart(
    document.getElementById("english-maths-overtime-comparison-g5"),
  );
  google.visualization.events.addListener(chart, "ready", function () {
    // Get the chart container and its SVG contents
    var container = chart.getContainer();

    // Limit search to the chart's SVG for reliability
    var texts = container.querySelectorAll("svg text");

    for (var i = 0; i < texts.length; i++) {
      var t = texts[i];
      if (
        t.textContent.trim() === "51%" ||
        t.textContent.trim() === "67%" ||
        t.textContent.trim() === "40%" ||
        t.textContent.trim() === "42%"
      ) {
        // Force annotation text to white
        t.setAttribute("fill", "#ffffff");
      }
    }
  });
  chart.draw(data, overTimeOptions);
}

/* OAK NEST */

function drawOakNestOverTime() {
  var data = google.visualization.arrayToDataTable([
    [
      "School",
      "2022 to 2023",
      { role: "annotation" },
      "2023 to 2024",
      { role: "annotation" },
      "2024 to 2025",
      { role: "annotation" },
    ],

    ["Oak Nest Secondary School", 0.52, "52%", 0.51, "51%", 0.54, "54%"],
    ["Local council average", 0.39, "39%", 0.4, "40%", 0.39, "39%"],
    ["England average", 0.41, "41%", 0.42, "42%", 0.41, "41%"],
  ]);

  var chart = new google.visualization.BarChart(
    document.getElementById("english-maths-oak-nest-overtime"),
  );
  google.visualization.events.addListener(chart, "ready", function () {
    // Get the chart container and its SVG contents
    var container = chart.getContainer();

    // Limit search to the chart's SVG for reliability
    var texts = container.querySelectorAll("svg text");

    for (var i = 0; i < texts.length; i++) {
      var t = texts[i];
      if (
        t.textContent.trim() === "51%" ||
        t.textContent.trim() === "40%" ||
        t.textContent.trim() === "42%"
      ) {
        // Force annotation text to white
        t.setAttribute("fill", "#ffffff");
      }
    }
  });
  chart.draw(data, overTimeOptions);
}

/* LANGLEY HILL */

function drawLangleyHillOverTime() {
  var data = google.visualization.arrayToDataTable([
    [
      "School",
      "2022 to 2023",
      { role: "annotation" },
      "2023 to 2024",
      { role: "annotation" },
      "2024 to 2025",
      { role: "annotation" },
    ],

    ["Langley Secondary School", 0.7, "70%", 0.67, "67%", 0.65, "65%"],
    ["Local council average", 0.39, "39%", 0.4, "40%", 0.39, "39%"],
    ["England average", 0.41, "41%", 0.42, "42%", 0.41, "41%"],
  ]);

  var chart = new google.visualization.BarChart(
    document.getElementById("english-maths-langley-overtime"),
  );
  google.visualization.events.addListener(chart, "ready", function () {
    // Get the chart container and its SVG contents
    var container = chart.getContainer();

    // Limit search to the chart's SVG for reliability
    var texts = container.querySelectorAll("svg text");

    for (var i = 0; i < texts.length; i++) {
      var t = texts[i];
      if (
        t.textContent.trim() === "67%" ||
        t.textContent.trim() === "40%" ||
        t.textContent.trim() === "42%"
      ) {
        // Force annotation text to white
        t.setAttribute("fill", "#ffffff");
      }
    }
  });
  chart.draw(data, overTimeOptions);
}

/* THOMAS LANE */

function drawThomasLaneOverTime() {
  var data = google.visualization.arrayToDataTable([
    [
      "School",
      "2022 to 2023",
      { role: "annotation" },
      "2023 to 2024",
      { role: "annotation" },
      "2024 to 2025",
      { role: "annotation" },
    ],

    ["Thomas Lane Secondary School", 0.37, "37%", 0.4, "40%", 0.44, "44%"],
    ["Local council average", 0.39, "39%", 0.4, "40%", 0.39, "39%"],
    ["England average", 0.41, "41%", 0.42, "42%", 0.41, "41%"],
  ]);

  var chart = new google.visualization.BarChart(
    document.getElementById("english-maths-thomas-lane-overtime"),
  );
  google.visualization.events.addListener(chart, "ready", function () {
    // Get the chart container and its SVG contents
    var container = chart.getContainer();

    // Limit search to the chart's SVG for reliability
    var texts = container.querySelectorAll("svg text");

    for (var i = 0; i < texts.length; i++) {
      var t = texts[i];
      if (t.textContent.trim() === "67%" || t.textContent.trim() === "40%") {
        // Force annotation text to white
        t.setAttribute("fill", "#ffffff");
      }
    }
  });
  chart.draw(data, overTimeOptions);
}

// ============================================================
// GRADE 4 - CURRENT
// ============================================================

function drawSchoolComparisonG4() {
  var data = google.visualization.arrayToDataTable([
    ["School", "Percentage", { role: "style" }, { role: "annotation" }],

    ["Oak Nest Secondary School", 0.65, "#A285D1", "65%"],

    ["Langley Secondary School", 0.7, "#A285D1", "70%"],

    ["Thomas Lane Secondary School", 0.7, "#A285D1", "70%"],

    ["England average", 0.45, "#bcbcbd", "45%"],
  ]);

  var chart = new google.visualization.BarChart(
    document.getElementById("english-maths-comparison-g4"),
  );

  chart.draw(data, comparisonChartOptions);
}

// ============================================================
// GRADE 4 - OVER TIME
// ============================================================

function drawSchoolComparisonOverTimeG4() {
  var data = google.visualization.arrayToDataTable([
    [
      "School",
      "2024 to 2025",
      { role: "annotation" },
      "2023 to 2024",
      { role: "annotation" },
      "2022 to 2023",
      { role: "annotation" },
    ],

    ["Oak Nest Secondary School", 0.65, "65%", 0.62, "62%", 0.63, "63%"],

    ["Langley Secondary School", 0.7, "70%", 0.67, "67%", 0.68, "68%"],

    ["Thomas Lane Secondary School", 0.7, "70%", 0.47, "47%", 0.46, "46%"],

    ["England average", 0.45, "45%", 0.42, "42%", 0.41, "41%"],
  ]);

  var options = {
    fontSize: 19,

    colors: ["#A285D1", "#12436D", "#28A197"],

    height: 500,
    width: "100%",

    bar: {
      groupWidth: "70%",
    },

    chartArea: {
      left: "30%",
      right: "10%",
      top: "20%",
      bottom: "10%",
      width: "60%",
      height: "70%",
    },

    legend: {
      position: "top",
      alignment: "left",
      maxLines: 4,

      textStyle: {
        color: "#0B0C0C",
        fontSize: 19,
      },
    },

    hAxis: {
      format: "percent",
      minValue: 0,
      maxValue: 1,

      textStyle: {
        color: "#0B0C0C",
      },
    },

    vAxis: {
      textStyle: {
        color: "#0B0C0C",
        fontSize: 19,
      },
    },

    enableInteractivity: false,

    annotations: {
      highContrast: false,

      textStyle: {
        color: "#0B0C0C",
        fontSize: 19,
        auraColor: "none",
      },
    },
  };

  var chart = new google.visualization.BarChart(
    document.getElementById("english-maths-overtime-comparison-g4"),
  );

  chart.draw(data, options);
}

// ============================================================
// DESTINATIONS AFTER YEAR 11
// ============================================================

function drawDestinationsComparison() {
  var data = google.visualization.arrayToDataTable([
    ["Destination", "Percentage", { role: "style" }, { role: "annotation" }],

    ["Oak Nest Secondary School", 0.9, "#A285D1", "90%"],
    ["Langley Secondary School", 0.92, "#A285D1", "92%"],
    ["Thomas Lane Secondary School", 0.94, "#A285D1", "94%"],
    ["England average", 0.89, "#bcbcbd", "89%"],
  ]);

  var options = {
    fontSize: 19,

    height: 300,

    bar: {
      groupWidth: "70%",
    },

    chartArea: {
      width: "100%",
      height: "100%",
      left: "30%",
      bottom: "15%",
      right: "10%",
    },

    legend: {
      position: "none",
    },

    hAxis: {
      format: "percent",
      minValue: 0,
      maxValue: 1,

      textStyle: {
        color: "#0B0C0C",
      },
    },

    vAxis: {
      textStyle: {
        color: "#0B0C0C",
      },
    },

    enableInteractivity: false,

    annotations: {
      highContrast: false,

      textStyle: {
        color: "#0B0C0C",
        fontSize: 19,
        auraColor: "none",
      },
    },
  };

  var chart = new google.visualization.BarChart(
    document.getElementById("destinations-comparison"),
  );

  chart.draw(data, options);
}

function drawDestinationsComparisonOvertime() {
  var data = google.visualization.arrayToDataTable([
    [
      "School",
      "2024 to 2025",
      { role: "annotation" },
      "2023 to 2024",
      { role: "annotation" },
      "2022 to 2023",
      { role: "annotation" },
    ],

    ["Oak Nest Secondary School", 0.9, "90%", 0.88, "88%", 0.85, "85%"],

    ["Langley Secondary School", 0.92, "92%", 0.9, "90%", 0.89, "89%"],

    ["Thomas Lane Secondary School", 0.94, "94%", 0.95, "95%", 0.94, "94%"],

    ["England average", 0.89, "89%", 0.88, "88%", 0.87, "87%"],
  ]);

  var options = {
    fontSize: 19,

    colors: ["#A285D1", "#12436D", "#28A197"],

    height: 500,
    width: "100%",

    bar: {
      groupWidth: "70%",
    },

    chartArea: {
      left: "30%",
      right: "10%",
      top: "10%",
      bottom: "10%",
      width: "60%",
    },

    legend: {
      position: "top",
      alignment: "left",
      maxLines: 4,

      textStyle: {
        color: "#0B0C0C",
        fontSize: 19,
      },
    },

    hAxis: {
      format: "percent",
      minValue: 0,
      maxValue: 1,

      textStyle: {
        color: "#0B0C0C",
      },
    },

    vAxis: {
      textStyle: {
        color: "#0B0C0C",
        fontSize: 19,
      },
    },

    enableInteractivity: false,

    annotations: {
      highContrast: false,

      textStyle: {
        color: "#0B0C0C",
        fontSize: 19,
        auraColor: "none",
      },
    },
  };

  var chart = new google.visualization.BarChart(
    document.getElementById("destinations-comparison-overtime"),
  );

  chart.draw(data, options);
}
