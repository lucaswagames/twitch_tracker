
fetch("streamers_model.php")

var streamersName;
fetch("streamers.json")
  .then(response => {
    return response.json();
  })
  .then(jsondata => {
    streamersName = jsondata;
    console.log(jsondata);
  });
var streamers;
fetch("streamers_stats.json")
  .then(response => {
    return response.json();
  })
  .then(jsondata_data => {
    streamers = jsondata_data;
    console.log(jsondata_data);

  });

const strName = document.getElementById("result");
const strName2 = document.getElementById("result2");


Array.from(document.getElementsByClassName("sort")).forEach((btnSort) => {
  btnSort.addEventListener("click", () => sortStreamer(btnSort));
});

strName.addEventListener("change", () => {
  dateSelectF();
});

strName2.addEventListener("change", () => {
  dateSelectStats();
});

Array.from(document.getElementsByClassName("date")).forEach((btnDate) => {
  btnDate.addEventListener("click", () => dateSelectF(btnDate));
});

Array.from(document.getElementsByClassName("dateStat")).forEach((btnDateStat) => {
  btnDateStat.addEventListener("click", () => dateSelectStats(btnDateStat));
});



var sortType;
var dateSelect = "2022-05";
var afficheStreamers = document.getElementById("afficheStreamers");

function sortStreamer(btn) {
  if (btn != null) {
    sortType = btn.value;
  }
  var datas_streamers = [];
  var label_streamers = [];

  var i = 0;
  streamers.sort(sortComparaison);
  console.log(streamers);
  afficheStreamers.innerHTML = "";
  streamers.forEach((element) => {
    if (element.date.includes(dateSelect)) {
      streamersName.forEach((streamName) => {
        if (streamName.id === element.streamer) {
          i++;
          label_streamers.push(streamName.name)
          switch (sortType) {
            case "minutes streamed":

              datas_streamers.push(element.minutes_streamed);
              break;

            case "rank":

                datas_streamers.push(element.rank);
              break;

            case "average viewers":

                datas_streamers.push(element.avg_viewers);
              break;

            case "max viewers":

                datas_streamers.push(element.max_viewers);
              break;

            case "hours watched":

                datas_streamers.push(element.hours_watched);
              break;

            case "followers":

                datas_streamers.push(element.followers);
              break;

            case "viewers":

                datas_streamers.push(element.views);
              break;

            case "followers total":
   
                datas_streamers.push(element.followers_total);
              break;

            case "views total":

                datas_streamers.push(element.views_total);
              break;

            default:
              break;
          }
        }
      });
    }
  });


  afficheStreamers.innerHTML += "<br><canvas class='jspautre' id='Chart_classement' width='400' height='400'></canvas>";

  var charttruc = new Chart(document.getElementById("Chart_classement").getContext("2d"), {
    type: "bar",
    data: {
      labels:label_streamers,
      datasets: [
        {
          label: "# of stats",
          data: datas_streamers,
          backgroundColor: [
            "rgba(234, 192, 21, 0.2)",
            "rgba(60, 177, 15, 0.2)",
            "rgba(234, 100, 21, 0.2)",
            "rgba(95, 82, 249, 0.2)",
            "rgba(225, 35, 228, 0.2)",
            "rgba(0, 245, 255, 0.2)",
            "rgba(255, 0, 0, 0.2)",
            "rgba(98, 55, 55, 0.2)",
            "rgba(3, 53, 129, 0.2)",
            "rgba(230, 255, 0, 0.2)",
            "rgba(234, 21, 21, 0.2)",
            "rgba(0, 255, 185,0.2)"
          ],
          borderColor: [
            "rgba(100, 192, 21, 1)",
            "rgba(60, 177, 15, 1)",
            "rgba(234, 100, 21, 1)",
            "rgba(95, 82, 249, 1)",
            "rgba(225, 35, 228, 1)",
            "rgba(0, 245, 255, 1)",
            "rgba(255, 0, 0, 1)",
            "rgba(98, 55, 55, 1)",
            "rgba(3, 53, 129, 1)",
            "rgba(230, 255, 0, 1)",
            "rgba(234, 21, 21, 1)",
            "rgba(0, 255, 185, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  console.log(datas_streamers)
  //addData(chart, datas);

}

function sortComparaison(a, b) {
  let compar = null;

  switch (sortType) {
    case "minutes streamed":
      compar = b.minutes_streamed - a.minutes_streamed;
      break;

    case "rank":
      compar = a.rank - b.rank;
      break;

    case "average viewers":
      compar = b.avg_viewers - a.avg_viewers;
      break;

    case "max viewers":
      compar = b.max_viewers - a.max_viewers;
      break;

    case "hours watched":
      compar = b.hours_watched - a.hours_watched;
      break;

    case "followers":
      compar = b.followers - a.followers;
      break;

    case "viewers":
      compar = b.views - a.views;
      break;

    case "followers total":
      compar = b.followers_total - a.followers_total;
      break;

    case "views total":
      compar = b.views_total - a.views_total;
      break;

    default:
      break;
  }

  return compar;
}

function dateSelectF() {
  dateSelect = strName.value.substr(0,7);
  sortStreamer();
}

function HideElement(e) {
  if (getComputedStyle(e).display != "none") {
    e.style.display = "none";
  } else {
    e.style.display = "block";
  }
}

function dateSelectStats() {

  var minutes_streamed;
  var rank;
  var avg_viewers;
  var max_viewers;
  var hours_watched;
  var followers;
  var views;
  var followers_total;
  var views_total;

  var datas = [];

  dateSelect = strName2.value;
  document.getElementById("streamer_name").innerHTML = "";
  var i = 0;
  streamers.forEach((element) => {
    if (element.date.includes(dateSelect)) {
      streamersName.forEach((streamName) => {
        if (streamName.id === element.streamer) {
          i++;
          document.getElementById("streamer_name").innerHTML += "<div class='streamer_name'><input type='checkbox' id='toggle" + i + "' class='checkbox' checked> <label for='toggle" + i + "' class='label' > </label> <h2 class=streamer_pos><b>" + streamName.name +
            "</b> </h2></div><br>" + "<div class='dall'  id='d" + i + "'>" + "<p> Minute streamer : <b>" + element.minutes_streamed + "</b> </p>" +
            " </p>" + "<p> Rank : <b>" + element.rank + "</b> </p>" +
            " </p>" + "<p> Nombre moyen de viewers : <b>" + element.avg_viewers + "</b> </p>" +
            " </p>" + "<p> Nombre maximum de viewers : <b>" + element.max_viewers + "</b> </p>" +
            " </p>" + "<p> Heures de visionnage : <b>" + element.hours_watched + "</b> </p>" +
            " </p>" + "<p> Nombre de followers : <b>" + element.followers + "</b> </p>" +
            " </p>" + "<p> Nombre de vues : <b>" + element.views + "</b> </p>" +
            " </p>" + "<p> Nombre de followers total : <b>" + element.followers_total + "</b> </p>" +
            " </p>" + "<p> Nombre de vues total : <b>" + element.views_total + " </b></p>" +
            "<canvas class='jsp' id='myChart" + i + "' width='400' height='400'></canvas>" +
            "</div><br>";

          minutes_streamed = element.minutes_streamed;
          rank = element.rank;
          avg_viewers = element.avg_viewers;
          max_viewers = element.max_viewers;
          hours_watched = element.hours_watched;
          followers = element.followers;
          views = element.views;
          followers_total = element.followers_total;
          views_total = element.views_total;


          var data = [minutes_streamed, avg_viewers, max_viewers, hours_watched, followers, views, followers_total, views_total];


          var j = i;


          datas.push(data);



        }
      });
    }
  });

  i = 0

  Array.from(document.getElementsByClassName("jsp")).forEach((chart_thing) => {
    ++i;
    var j = i;

    var chart = new Chart(chart_thing.getContext("2d"), {
      type: "radar",
      data: {
        labels: [
          "minutes_streamed",
          "rank",
          "avg_viewers",
          "max_viewers",
          "hours_watched",
          "followers",
          "views",
          "followers_total",
          "views_total",
        ],
        datasets: [
          {
            label: "# of stats",
            data: [minutes_streamed, rank, avg_viewers, max_viewers, hours_watched, followers, views, followers_total, views_total],
            backgroundColor: [
              "rgba(234, 192, 21, 0.2)",
              "rgba(60, 177, 15, 0.2)",
              "rgba(234, 100, 21, 0.2)",
              "rgba(95, 82, 249, 0.2)",
              "rgba(225, 35, 228, 0.2)",
              "rgba(0, 245, 255, 0.2)",
              "rgba(255, 0, 0, 0.2)",
              "rgba(98, 55, 55, 0.2)",
              "rgba(3, 53, 129, 0.2)",
              "rgba(230, 255, 0, 0.2)",
              "rgba(234, 21, 21, 0.2)",
              "rgba(0, 255, 185,0.2)"
            ],
            borderColor: [
              "rgba(234, 192, 21, 1)",
              "rgba(60, 177, 15, 1)",
              "rgba(234, 100, 21, 1)",
              "rgba(95, 82, 249, 1)",
              "rgba(225, 35, 228, 1)",
              "rgba(0, 245, 255, 1)",
              "rgba(255, 0, 0, 1)",
              "rgba(98, 55, 55, 1)",
              "rgba(3, 53, 129, 1)",
              "rgba(230, 255, 0, 1)",
              "rgba(234, 21, 21, 1)",
              "rgba(0, 255, 185, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    console.log(datas[j - 1])
    addData(chart, datas[j - 1]);
  });

  i = 0

  Array.from(document.getElementsByClassName("checkbox")).forEach((btnhide) => {
    ++i;
    console.log(i);
    var j = i;
    btnhide.addEventListener("click", () => HideElement(document.getElementById("d" + j)));
    HideElement(document.getElementById("d" + j));
  });
}



//Animation titre
const title = document.querySelector("h1")
const letters = [...document.querySelectorAll('h1 span')]


title.addEventListener("mouseenter", handleLetters);
title.addEventListener("mouseleave", handleLetters);

let isAnimatingIn = false;
let calledOut = false;
let animOpened = false;

function handleLetters() {

  if (animOpened) {
    animOut();
    animOpened = false;
    return;
  }

  if (isAnimatingIn) {
    calledOut = true;
    return;
  }

  isAnimatingIn = true;

  const animPromise = new Promise((resolve) => {
    animIn()
    setTimeout(() => {
      resolve()
    }, 750)
  })
  animPromise.then(() => {
    isAnimatingIn = false;

    if (calledOut) {
      animOut()
      calledOut = false;
    } else if (!calledOut) {
      animOpened = true;
    }
  })

}

function animIn() {
  anime({
    targets: "h1 span",
    translateX: function () {
      return anime.random(-250, 250)
    },
    translateY: function () {
      return anime.random(-250, 250)
    },
    translateZ: function () {
      return anime.random(-2000, 750)
    },
    rotate: function () {
      return anime.random(-250, 250)
    },
    easing: "easeOutCirc",
    duration: 750
  })
}

function animOut() {
  anime({
    targets: "h1 span",
    translateX: 0,
    translateY: 0,
    translateZ: 0,
    rotate: 0,
    easing: "easeInQuad",
    duration: 750
  })
}

//Graph streamer

function addData(chart, data) {
  for (let pas = 0; pas < data.length; pas++) {
    chart.data.datasets[0].data[pas] = data[pas];
  }
  chart.update();
}

