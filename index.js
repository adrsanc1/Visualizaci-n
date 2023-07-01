// Import stylesheets
import './style.css';

const data = [
  {
    "order_date": "2020-10",
    "Al_Sharqiya": 0.0,
    "Alexandria": 773225.078,
    "Cairo": 2754935.17941,
    "Giza": 354950.83945,
    "Mansoura": 337552.02935,
    "Tanta": 608850.944
  },
  {
    "order_date": "2020-11",
    "Al_Sharqiya": 28528.4,
    "Alexandria": 2472441.97307,
    "Cairo": 5207191.9957,
    "Giza": 327819.03689,
    "Mansoura": 851631.6932,
    "Tanta": 2503883.61624
  },
  {
    "order_date": "2020-12",
    "Al_Sharqiya": 1741903.19905,
    "Alexandria": 12417891.53593,
    "Cairo": 30542591.75801,
    "Giza": 816484.40155,
    "Mansoura": 5522596.67291,
    "Tanta": 5350089.51035
  },
  {
    "order_date": "2021-01",
    "Al_Sharqiya": 76994.55694,
    "Alexandria": 1401103.56474,
    "Cairo": 4060990.66103,
    "Giza": 77133.393,
    "Mansoura": 774852.83494,
    "Tanta": 713098.93628
  },
  {
    "order_date": "2021-02",
    "Al_Sharqiya": 138045.645,
    "Alexandria": 978043.8692,
    "Cairo": 2326166.0764,
    "Giza": 41772.309,
    "Mansoura": 493416.924,
    "Tanta": 432296.8722
  },
  {
    "order_date": "2021-03",
    "Al_Sharqiya": 680824.006,
    "Alexandria": 5275346.444,
    "Cairo": 13673083.232,
    "Giza": 422729.873,
    "Mansoura": 2569541.5715,
    "Tanta": 2745678.043
  },
  {
    "order_date": "2021-04",
    "Al_Sharqiya": 806106.718,
    "Alexandria": 7562211.31,
    "Cairo": 19111406.3358,
    "Giza": 340828.668,
    "Mansoura": 4032008.313,
    "Tanta": 4417211.8416
  },
  {
    "order_date": "2021-05",
    "Al_Sharqiya": 101932.821,
    "Alexandria": 1813480.639,
    "Cairo": 5520205.867,
    "Giza": 136351.64,
    "Mansoura": 1020807.301,
    "Tanta": 1364182.964
  },
  {
    "order_date": "2021-06",
    "Al_Sharqiya": 536060.3895,
    "Alexandria": 4794383.957,
    "Cairo": 13424963.17325,
    "Giza": 218868.156,
    "Mansoura": 4026948.236,
    "Tanta": 1936196.0645
  },
  {
    "order_date": "2021-07",
    "Al_Sharqiya": 157572.915,
    "Alexandria": 3407142.354,
    "Cairo": 8622081.5415,
    "Giza": 163065.64,
    "Mansoura": 4650960.417,
    "Tanta": 2004957.898
  },
  {
    "order_date": "2021-08",
    "Al_Sharqiya": 169458.275,
    "Alexandria": 3183003.865,
    "Cairo": 10486447.75225,
    "Giza": 18039.373,
    "Mansoura": 4274556.345,
    "Tanta": 2339733.385
  },
  {
    "order_date": "2021-09",
    "Al_Sharqiya": 256736.356,
    "Alexandria": 1616247.7975,
    "Cairo": 7105375.9819,
    "Giza": 143945.87,
    "Mansoura": 1080086.0395,
    "Tanta": 1294651.5035
  }
];


const visualization = d3plus.viz()
.container("#viz")
.data(data)
.type("line")
.x("order_date")
.y(["Al_Sharqiya", "Alexandria", "Cairo", "Giza", "Mansoura", "Tanta"])
.draw();
