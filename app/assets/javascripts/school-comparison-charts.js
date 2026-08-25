// ============================================================
// SCHOOL COMPARISON CHARTS
// ============================================================

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

// ============================================================
// GRADE 5 - CURRENT
// ============================================================

function drawSchoolComparisonG5() {
  var data = google.visualization.arrayToDataTable([
    ["School", "Percentage", { role: "style" }, { role: "annotation" }],

    ["Oak Nest Secondary School", 0.63, "#A285D1", "63%"],

    ["Langley Secondary School", 0.65, "#A285D1", "65%"],

    ["Thomas Lane Secondary School", 0.44, "#A285D1", "44%"],

    ["England average", 0.41, "#bcbcbd", "41%"],
  ]);

  var chart = new google.visualization.BarChart(
    document.getElementById("english-maths-comparison-g5"),
  );

  chart.draw(data, comparisonChartOptions);
}

// ============================================================
// GRADE 5 - OVER TIME
// ============================================================

function drawSchoolComparisonOverTimeG5() {
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

    ["Oak Nest Secondary School", 0.63, "63%", 0.66, "66%", 0.67, "67%"],

    ["Langley Secondary School", 0.65, "65%", 0.62, "62%", 0.63, "63%"],

    ["Thomas Lane Secondary School", 0.44, "44%", 0.43, "43%", 0.39, "39%"],

    ["England average", 0.41, "41%", 0.42, "42%", 0.4, "40%"],
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
    document.getElementById("english-maths-overtime-comparison-g5"),
  );

  chart.draw(data, options);
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
    document.getElementById("destinations-comparison-overtime"),
  );

  chart.draw(data, options);
}
