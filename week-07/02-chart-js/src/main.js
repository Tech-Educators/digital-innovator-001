console.log("We are here!");

// importing everything from ChartJS
import Chart from "chart.js/auto";

// Next we need to select our canvas element
const canvas = document.getElementById("canvasOne");

// Here we're going to make a chart with STATIC data. It's fixed.
// We'll look at how to use dynamic data after
new Chart(canvas, {
  // define the chart type
  type: "bar",
  data: {
    // define the labels of each individual bar
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Lime"],
    // This is an array of objects. Each individual object is a set of data attached to a label
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3, 10],
        borderWidth: 1,
        borderColor: "#30A5EB",
        backgroundColor: "#FFFF00",
      },
      {
        label: "# of Biscuits",
        data: [10, 15, 7, 8, 2, 3, 1],
        borderWidth: 1,
        borderColor: "#FF6384",
        backgroundColor: "aliceblue",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
