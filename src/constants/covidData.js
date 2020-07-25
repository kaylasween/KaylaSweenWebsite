const dataset = [
  {
    date: '2020-03-11',
    totalCases: 1,
    newCases: 1,
    testsRun: 20,
    newDeaths: 0
  },
  {
    date: '2020-03-12',
    totalCases: 6,
    newCases: 5,
    testsRun: 20,
    newDeaths: 0
  },
  {
    date: '2020-03-13',
    totalCases: 6,
    newCases: 0,
    testsRun: 20,
    newDeaths: 0
  },
  {
    date: '2020-03-14',
    totalCases: 10,
    newCases: 4,
    testsRun: 20,
    newDeaths: 0
  },
  {
    date: '2020-03-15',
    totalCases: 12,
    newCases: 2,
    testsRun: 20,
    newDeaths: 0
  },
  {
    date: '2020-03-16',
    totalCases: 21,
    newCases: 9,
    testsRun: 20,
    newDeaths: 0
  },
  {
    date: '2020-03-17',
    totalCases: 34,
    newCases: 13,
    testsRun: 389,
    newDeaths: 0
  },
  {
    date: '2020-03-18',
    totalCases: 50,
    newCases: 16,
    testsRun: 513,
    newDeaths: 0
  },
  {
    date: '2020-03-19',
    totalCases: 80,
    newCases: 30,
    testsRun: 602,
    newDeaths: 1
  },
  {
    date: '2020-03-20',
    totalCases: 140,
    newCases: 60,
    testsRun: 602,
    newDeaths: 0
  },
  {
    date: '2020-03-21',
    totalCases: 207,
    newCases: 67,
    testsRun: 602,
    newDeaths: 0
  },
  {
    date: '2020-03-22',
    totalCases: 249,
    newCases: 42,
    testsRun: 602,
    newDeaths: 0
  },
  {
    date: '2020-03-23',
    totalCases: 320,
    newCases: 71,
    testsRun: 602,
    newDeaths: 0
  },
  {
    date: '2020-03-24',
    totalCases: 320,
    newCases: 0,
    testsRun: 602,
    newDeaths: 0
  },
  {
    date: '2020-03-25',
    totalCases: 485,
    newCases: 165,
    testsRun: 602,
    newDeaths: 5
  },
  {
    date: '2020-03-26',
    totalCases: 579,
    newCases: 94,
    testsRun: 602,
    newDeaths: 2
  },
  {
    date: '2020-03-27',
    totalCases: 663,
    newCases: 84,
    testsRun: 602,
    newDeaths: 5
  },
  {
    date: '2020-03-28',
    totalCases: 758,
    newCases: 95,
    testsRun: 602,
    newDeaths: 1
  },
  {
    date: '2020-03-29',
    totalCases: 847,
    newCases: 89,
    testsRun: 602,
    newDeaths: 2
  },
  {
    date: '2020-03-30',
    totalCases: 937,
    newCases: 90,
    testsRun: 602,
    newDeaths: 4
  },
  {
    date: '2020-03-31',
    totalCases: 1073,
    newCases: 136,
    testsRun: 602,
    newDeaths: 2
  },
  {
    date: '2020-04-01',
    totalCases: 1177,
    newCases: 104,
    testsRun: 602,
    newDeaths: 4
  },
  {
    date: '2020-04-02',
    totalCases: 1358,
    newCases: 181,
    testsRun: 602,
    newDeaths: 3
  },
  {
    date: '2020-04-03', //Shelter in place started at 5:00PM
    totalCases: 1455,
    newCases: 97,
    testsRun: 602,
    newDeaths: 6
  },
  {
    date: '2020-04-04',
    totalCases: 1638,
    newCases: 183,
    testsRun: 602,
    newDeaths: 8
  },
  {
    date: '2020-04-05',
    totalCases: 1738,
    newCases: 100,
    testsRun: 20370,
    newDeaths: 8
  },
  {
    date: '2020-04-06',
    totalCases: 1915,
    newCases: 177,
    testsRun: 20370,
    newDeaths: 8
  },
  {
    date: '2020-04-07',
    totalCases: 2003,
    newCases: 88,
    testsRun: 20370,
    newDeaths: 8
  },
  {
    date: '2020-04-08',
    totalCases: 2260,
    newCases: 257,
    testsRun: 20370,
    newDeaths: 9
  },
  {
    date: '2020-04-09',
    totalCases: 2469,
    newCases: 209,
    testsRun: 20370,
    newDeaths: 6
  },
  {
    date: '2020-04-10',
    totalCases: 2642,
    newCases: 173,
    testsRun: 20370,
    newDeaths: 11
  },
  {
    date: '2020-04-11',
    totalCases: 2781,
    newCases: 139,
    testsRun: 20370,
    newDeaths: 3
  },
  {
    date: '2020-04-12',
    totalCases: 2942,
    newCases: 161,
    testsRun: 37733,
    newDeaths: 2
  },
  {
    date: '2020-04-13',
    totalCases: 3087,
    newCases: 145,
    testsRun: 37733,
    newDeaths: 13
  },
  {
    date: '2020-04-14',
    totalCases: 3360,
    newCases: 273,
    testsRun: 37733,
    newDeaths: 11
  },
  {
    date: '2020-04-15',
    totalCases: 3624,
    newCases: 264,
    testsRun: 37733,
    newDeaths: 7
  },
  {
    date: '2020-04-16',
    totalCases: 3793,
    newCases: 169,
    testsRun: 37733,
    newDeaths: 11
  },
  {
    date: '2020-04-17',
    totalCases: 3974,
    newCases: 181,
    testsRun: 37733,
    newDeaths: 12
  },
  {
    date: '2020-04-18',
    totalCases: 4274,
    newCases: 300,
    testsRun: 37733,
    newDeaths: 7
  },
  {
    date: '2020-04-19',
    totalCases: 4512,
    newCases: 238,
    testsRun: 37733,
    newDeaths: 10
  },
  {
    date: '2020-04-20',
    totalCases: 4716,
    newCases: 204,
    testsRun: 37733,
    newDeaths: 14
  },
  {
    date: '2020-04-21',
    totalCases: 4894,
    newCases: 178,
    testsRun: 37733, // note testing numbers prior to this are not always accurate.,
    newDeaths: 10
  },
  {
    date: '2020-04-22',
    totalCases: 5153,
    newCases: 259,
    testsRun: 55389,
    newDeaths: 8
  },
  {
    date: '2020-04-23',
    totalCases: 5434,
    newCases: 281,
    testsRun: 55389,
    newDeaths: 8
  },
  {
    date: '2020-04-24',
    totalCases: 5718,
    newCases: 284,
    testsRun: 58957,
    newDeaths: 12
  },
  {
    date: '2020-04-25',
    totalCases: 5911,
    newCases: 193,
    testsRun: 60788,
    newDeaths: 6
  },
  {
    date: '2020-04-26',
    totalCases: 6094,
    newCases: 183,
    testsRun: 63462,
    newDeaths: 2
  },
  {
    date: '2020-04-27',
    totalCases: 6342,
    newCases: 248,
    testsRun: 64412,
    newDeaths: 10
  },
  {
    date: '2020-04-28',
    totalCases: 6569,
    newCases: 227,
    testsRun: 66094,
    newDeaths: 11
  },
  {
    date: '2020-04-29',
    totalCases: 6569,
    newCases: 246,
    testsRun: 69000,
    newDeaths: 11
  },
  {
    date: '2020-04-30',
    totalCases: 7212,
    newCases: 397,
    testsRun: 71548,
    newDeaths: 20
  },
  {
    date: '2020-05-01',
    totalCases: 7441,
    newCases: 229,
    testsRun: 74475,
    newDeaths: 10
  },
  {
    date: '2020-05-02',
    totalCases: 7550,
    newCases: 109,
    testsRun: 77593,
    newDeaths: 12
  },
  {
    date: '2020-05-03',
    totalCases: 7877,
    newCases: 327,
    testsRun: 79677,
    newDeaths: 7
  },
  {
    date: '2020-05-04',
    totalCases: 8207,
    newCases: 330,
    testsRun: 80308,
    newDeaths: 32
  },
  {
    date: '2020-05-05',
    totalCases: 8424,
    newCases: 217,
    testsRun: 80308,
    newDeaths: 32
  },
  {
    date: '2020-05-06',
    totalCases: 8686,
    newCases: 262,
    testsRun: 80308,
    newDeaths: 22
  },
  {
    date: '2020-05-07',
    totalCases: 9090,
    newCases: 404,
    testsRun: 80308,
    newDeaths: 13
  },
  {
    date: '2020-05-08',
    totalCases: 9378,
    newCases: 288,
    testsRun: 90472,
    newDeaths: 12
  },
  {
    date: '2020-05-09',
    totalCases: 9501,
    newCases: 123,
    testsRun: 91999,
    newDeaths: 9
  },
  {
    date: '2020-05-10',
    totalCases: 9674,
    newCases: 173,
    testsRun: 95885,
    newDeaths: 5
  },
  {
    date: '2020-05-11',
    totalCases: 9908,
    newCases: 234,
    testsRun: 96426,
    newDeaths: 22
  },
  {
    date: '2020-05-12',
    totalCases: 10090,
    newCases: 182,
    testsRun: 100048,
    newDeaths: 8
  },
  {
    date: '2020-05-13',
    totalCases: 10483,
    newCases: 393,
    testsRun: 105326,
    newDeaths: 15
  },
  {
    date: '2020-05-14',
    totalCases: 10801,
    newCases: 318,
    testsRun: 106823,
    newDeaths: 13
  },
  {
    date: '2020-05-15',
    totalCases: 11123,
    newCases: 322,
    testsRun: 108476,
    newDeaths: 17
  },
  {
    date: '2020-05-16',
    totalCases: 11296,
    newCases: 173,
    testsRun: 113126,
    newDeaths: 11
  },
  {
    date: '2020-05-17',
    totalCases: 11432,
    newCases: 136,
    testsRun: 115767,
    newDeaths: 7
  },
  {
    date: '2020-05-18',
    totalCases: 11704,
    newCases: 272,
    testsRun: 117760,
    newDeaths: 27
  },
  {
    date: '2020-05-19',
    totalCases: 11967,
    newCases: 263,
    testsRun: 120680,
    newDeaths: 16
  },
  {
    date: '2020-05-20',
    totalCases: 12222,
    newCases: 255,
    testsRun: 125970,
    newDeaths: 10
  },
  {
    date: '2020-05-21',
    totalCases: 12624,
    newCases: 402,
    testsRun: 137973,
    newDeaths: 16
  },
  {
    date: '2020-05-22',
    totalCases: 13005,
    newCases: 381,
    testsRun: 134220, // MSDH started separating antibody tests from PCR,
    newDeaths: 20
  },
  {
    date: '2020-05-23',
    totalCases: 13252,
    newCases: 247,
    testsRun: 137902,
    newDeaths: 9
  },
  {
    date: '2020-05-24',
    totalCases: 13458,
    newCases: 206,
    testsRun: 137902,
    newDeaths: 10
  },
  {
    date: '2020-05-25',
    totalCases: 13731,
    newCases: 273,
    testsRun: 147819,
    newDeaths: 17
  },
  {
    date: '2020-05-26',
    totalCases: 14044,
    newCases: 313,
    testsRun: 147819,
    newDeaths: 18
  },
  {
    date: '2020-05-27',
    totalCases: 14372,
    newCases: 328,
    testsRun: 156497,
    newDeaths: 23
  },
  {
    date: '2020-05-28',
    totalCases: 14372,
    newCases: 418,
    testsRun: 158973,
    newDeaths: 17
  },
  {
    date: '2020-05-29',
    totalCases: 15229,
    newCases: 439,
    testsRun: 165932,
    newDeaths: 13
  },
  {
    date: '2020-05-30',
    totalCases: 15501,
    newCases: 272,
    testsRun: 171837,
    newDeaths: 11
  },
  {
    date: '2020-05-31',
    totalCases: 15752,
    newCases: 251,
    testsRun: 176254,
    newDeaths: 5
  },
  {
    date: '2020-06-01',
    totalCases: 16020,
    newCases: 268,
    testsRun: 179388,
    newDeaths: 28
  },
  {
    date: '2020-06-02',
    totalCases: 16322,
    newCases: 302,
    testsRun: 184335,
    newDeaths: 15
  },
  {
    date: '2020-06-03',
    totalCases: 16560,
    newCases: 238,
    testsRun: 184335,
    newDeaths: 12
  },
  {
    date: '2020-06-04',
    totalCases: 16769,
    newCases: 209,
    testsRun: 193008,
    newDeaths: 9
  },
  {
    date: '2020-06-05',
    totalCases: 17034,
    newCases: 265,
    testsRun: 199077,
    newDeaths: 8
  },
  {
    date: '2020-06-06',
    totalCases: 17270,
    newCases: 236,
    testsRun: 193008,
    newDeaths: 6
  },
  {
    date: '2020-06-07',
    totalCases: 17768,
    newCases: 498,
    testsRun: 208089,
    newDeaths: 20
  },
  {
    date: '2020-06-08',
    totalCases: 18109,
    newCases: 341,
    testsRun: 208089,
    newDeaths: 10
  },
  {
    date: '2020-06-09',
    totalCases: 18483,
    newCases: 374,
    testsRun: 213753,
    newDeaths: 21
  },
  {
    date: '2020-06-10',
    totalCases: 18787,
    newCases: 304,
    testsRun: 213753,
    newDeaths: 7
  },
  {
    date: '2020-06-11',
    totalCases: 19091,
    newCases: 304,
    testsRun: 213753,
    newDeaths: 6
  },
  {
    date: '2020-06-12',
    totalCases: 19348,
    newCases: 257,
    testsRun: 213753,
    newDeaths: 8
  },
  {
    date: '2020-06-13',
    totalCases: 19516,
    newCases: 168,
    testsRun: 213753,
    newDeaths: 2
  },
  {
    date: '2020-06-14',
    totalCases: 19799,
    newCases: 283,
    testsRun: 230503,
    newDeaths: 4
  },
  {
    date: '2020-06-15',
    totalCases: 20152,
    newCases: 353,
    testsRun: 230503,
    newDeaths: 20
  },
  {
    date: '2020-06-16',
    totalCases: 20641,
    newCases: 489,
    testsRun: 234036,
    newDeaths: 23
  },
  {
    date: '2020-06-17',
    totalCases: 21022,
    newCases: 381,
    testsRun: 237849,
    newDeaths: 5
  },
  {
    date: '2020-06-18',
    totalCases: 21339,
    newCases: 317,
    testsRun: 241661,
    newDeaths: 10
  },
  {
    date: '2020-06-19',
    totalCases: 21655,
    newCases: 316,
    testsRun: 245473,
    newDeaths: 10
  },
  {
    date: '2020-06-20',
    totalCases: 21971,
    newCases: 316,
    testsRun: 249285,
    newDeaths: 10
  },
  {
    date: '2020-06-21',
    totalCases: 22287,
    newCases: 316,
    testsRun: 253097,
    newDeaths: 10
  },
  {
    date: '2020-06-22',
    totalCases: 22898,
    newCases: 611,
    testsRun: 253098,
    newDeaths: 11
  },
  {
    date: '2020-06-23',
    totalCases: 23424,
    newCases: 526,
    testsRun: 261505,
    newDeaths: 22
  },
  {
    date: '2020-06-24',
    totalCases: 24516,
    newCases: 1092,
    testsRun: 265839,
    newDeaths: 5
  },
  {
    date: '2020-06-25',
    totalCases: 25066,
    newCases: 550,
    testsRun: 271734,
    newDeaths: 6
  },
  {
    date: '2020-06-26',
    totalCases: 25531,
    newCases: 465,
    testsRun: 277158,
    newDeaths: 13
  },
  {
    date: '2020-06-27',
    totalCases: 25892,
    newCases: 361,
    testsRun: 280020,
    newDeaths: 4
  },
  {
    date: '2020-06-28',
    totalCases: 26567,
    newCases: 675,
    testsRun: 283355,
    newDeaths: 20
  },
  {
    date: '2020-06-29',
    totalCases: 27247,
    newCases: 680,
    testsRun: 287546,
    newDeaths: 14
  },
  {
    date: '2020-06-30',
    totalCases: 27900,
    newCases: 653,
    testsRun: 293562,
    newDeaths: 9
  },
  {
    date: '2020-07-01',
    totalCases: 28770,
    newCases: 870,
    testsRun: 298842,
    newDeaths: 10
  },
  {
    date: '2020-07-02',
    totalCases: 29684,
    newCases: 914,
    testsRun: 304620,
    newDeaths: 11
  },
  {
    date: '2020-07-03',
    totalCases: 30674,
    newCases: 990,
    testsRun: 309699,
    newDeaths: 4
  },
  {
    date: '2020-07-04',
    totalCases: 30900,
    newCases: 226,
    testsRun: 309699,
    newDeaths: 5
  },
  {
    date: '2020-07-05',
    totalCases: 31257,
    newCases: 357,
    testsRun: 314459,
    newDeaths: 3
  },
  {
    date: '2020-07-06',
    totalCases: 32214,
    newCases: 957,
    testsRun: 314459,
    newDeaths: 44
  },
  {
    date: '2020-07-07',
    totalCases: 32888,
    newCases: 674,
    testsRun: 314459,
    newDeaths: 30
  },
  {
    date: '2020-07-08',
    totalCases: 33591,
    newCases: 703,
    testsRun: 324522,
    newDeaths: 16
  },
  {
    date: '2020-07-09',
    totalCases: 34622,
    newCases: 1031,
    testsRun: 330011,
    newDeaths: 11
  },
  {
    date: '2020-07-10',
    totalCases: 35419,
    newCases: 797,
    testsRun: 334029,
    newDeaths: 15
  },
  {
    date: '2020-07-11',
    totalCases: 36287,
    newCases: 868,
    testsRun: 334029,
    newDeaths: 19
  },
  {
    date: '2020-07-12',
    totalCases: 36680,
    newCases: 393,
    testsRun: 343299,
    newDeaths: 1
  },
  {
    date: '2020-07-13',
    totalCases: 37542,
    newCases: 862,
    testsRun: 349869,
    newDeaths: 23
  },
  {
    date: '2020-07-14',
    totalCases: 38567,
    newCases: 1025,
    testsRun: 356488,
    newDeaths: 18
  },
  {
    date: '2020-07-15',
    totalCases: 39797,
    newCases: 1230,
    testsRun: 363487,
    newDeaths: 18
  },
  {
    date: '2020-07-16',
    totalCases: 40829,
    newCases: 1032,
    testsRun: 370993,
    newDeaths: 24
  },
  {
    date: '2020-07-17',
    totalCases: 41846,
    newCases: 1017,
    testsRun: 370993, //didn't update testing numbers today
    newDeaths: 14
  },
  {
    date: '2020-07-18',
    totalCases: 42638,
    newCases: 792,
    testsRun: 376793,
    newDeaths: 10
  },
  {
    date: '2020-07-19',
    totalCases: 43889,
    newCases: 1251,
    testsRun: 389466,
    newDeaths: 3
  },
  {
    date: '2020-07-20',
    totalCases: 45524,
    newCases: 1635,
    testsRun: 394673,
    newDeaths: 31
  },
  {
    date: '2020-07-21',
    totalCases: 47071,
    newCases: 1547,
    testsRun: 402474,
    newDeaths: 34
  },
  {
    date: '2020-07-22',
    totalCases: 48053,
    newCases: 982,
    testsRun: 406617, //didn't report tests today.
    newDeaths: 13
  },
  {
    date: '2020-07-23',
    totalCases: 49663,
    newCases: 1610,
    testsRun: 410867,
    newDeaths: 28
  },
  {
    date: '2020-07-24',
    totalCases: 51097,
    newCases: 1434,
    testsRun: 421233,
    newDeaths: 17
  },
]

export let movingAvg = [{
  id: "movingAvg",
  color: "#ffffff",
  data: []
}]

for (let counter = dataset.length - 30; counter < dataset.length; counter++) {
  let avg = (dataset[counter].newCases + dataset[counter - 1].newCases + dataset[counter - 2].newCases + dataset[counter - 3].newCases + dataset[counter - 4].newCases + dataset[counter - 5].newCases + dataset[counter - 6].newCases) / 7
  movingAvg[0].data.push({ x: dataset[counter].date, y: avg })
}

let totalDeaths = 0

for (let counter = 0; counter < dataset.length; counter++) {
  totalDeaths += dataset[counter].newDeaths
}

let dailyCases = dataset.slice(dataset.length - 30, dataset.length).map(point => {
  point = {
    x: point.date,
    y: point.newCases
  }
  return point
})

// dailyCases = dailyCases.slice[dailyCases.length - 30, dailyCases.length]
console.log(dailyCases)

export let covidCasesPerDay = [{
  id: "covidMsDayToDay",
  color: "#86D6C2",
  data: dailyCases
}]

let filterDatesBeforeApril28 = dataset.slice(dataset.length - 30, dataset.length)

let positivityPercentagePerDay = filterDatesBeforeApril28.map(point => {
  point = {
    x: point.date,
    y: (point.totalCases / point.testsRun) * 100
  }
  return point
})

export let percentPositive = [{
  id: "percentPositive",
  color: "#86D6C2",
  data: positivityPercentagePerDay
}]

console.log(percentPositive)