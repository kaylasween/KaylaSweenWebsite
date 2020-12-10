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
  {
    date: '2020-07-25',
    totalCases: 52304,
    newCases: 1207,
    testsRun: 424079, //did not update today.
    newDeaths: 15
  },
  {
    date: '2020-07-26',
    totalCases: 52957,
    newCases: 653,
    testsRun: 426926,
    newDeaths: 6
  },
  {
    date: '2020-07-27',
    totalCases: 54299,
    newCases: 1342,
    testsRun: 432422,
    newDeaths: 42
  },
  {
    date: '2020-07-28',
    totalCases: 55804,
    newCases: 1505,
    testsRun: 442546,
    newDeaths: 20
  },
  {
    date: '2020-07-29',
    totalCases: 57579,
    newCases: 1775,
    testsRun: 449072,
    newDeaths: 48
  },
  {
    date: '2020-07-30',
    totalCases: 58747,
    newCases: 1168,
    testsRun: 453670,
    newDeaths: 52
  },
  {
    date: '2020-07-31',
    totalCases: 59881,
    newCases: 1134,
    testsRun: 460594,
    newDeaths: 30
  },
  {
    date: '2020-08-01',
    totalCases: 60553,
    newCases: 672,
    testsRun: 464764, //none today averaging out on 8/6
    newDeaths: 10
  },
  {
    date: '2020-08-02',
    totalCases: 61125,
    newCases: 572,
    testsRun: 468934, //none today averaging on 8/6
    newDeaths: 8
  },
  {
    date: '2020-08-03',
    totalCases: 62199,
    newCases: 1074,
    testsRun: 473104, //none today averaging on 8/6
    newDeaths: 42
  },
  {
    date: '2020-08-04',
    totalCases: 63444,
    newCases: 1245,
    testsRun: 477274, // none today averaging on 8/6
    newDeaths: 51
  },
  {
    date: '2020-08-05',
    totalCases: 64400,
    newCases: 956,
    testsRun: 481443,
    newDeaths: 21
  },
  {
    date: '2020-08-06',
    totalCases: 65436,
    newCases: 1036,
    testsRun: 486071,
    newDeaths: 23
  },
  {
    date: '2020-08-07',
    totalCases: 66646,
    newCases: 1210,
    testsRun: 492386,
    newDeaths: 26
  },
  {
    date: '2020-08-08',
    totalCases: 67173,
    newCases: 527,
    testsRun: 492386, // none today
    newDeaths: 22
  },
  {
    date: '2020-08-09',
    totalCases: 67649,
    newCases: 476,
    testsRun: 492386, // none today
    newDeaths: 16
  },
  {
    date: '2020-08-10',
    totalCases: 68293,
    newCases: 644,
    testsRun: 492386, // stopped checking daily here
    newDeaths: 33
  },
  {
    date: '2020-08-11',
    totalCases: 69374,
    newCases: 1081,
    testsRun: 492386, // none today
    newDeaths: 45
  },
  {
    date: '2020-08-12',
    totalCases: 69986,
    newCases: 612,
    testsRun: 492386, // none today
    newDeaths: 22
  },
  {
    date: '2020-08-13',
    totalCases: 70930,
    newCases: 825,
    testsRun: 492386, // none today
    newDeaths: 32
  },
  {
    date: '2020-08-14',
    totalCases: 71755,
    newCases: 644,
    testsRun: 492386, // none today
    newDeaths: 37
  },
  {
    date: '2020-08-15',
    totalCases: 72136,
    newCases: 381,
    testsRun: 492386, // none today
    newDeaths: 4
  },
  {
    date: '2020-08-16',
    totalCases: 72412,
    newCases: 276,
    testsRun: 492386, // none today
    newDeaths: 11
  },
  {
    date: '2020-08-17',
    totalCases: 73207,
    newCases: 795,
    testsRun: 492386, // none today
    newDeaths: 34
  },
  {
    date: '2020-08-18',
    totalCases: 74555,
    newCases: 1348,
    testsRun: 492386, // none today
    newDeaths: 34
  },
  {
    date: '2020-08-19',
    totalCases: 75499,
    newCases: 894,
    testsRun: 492386, // none today
    newDeaths: 27
  },
  {
    date: '2020-08-20',
    totalCases: 76323,
    newCases: 874,
    testsRun: 492386, // none today
    newDeaths: 24
  },
  {
    date: '2020-08-21',
    totalCases: 77268,
    newCases: 945,
    testsRun: 492386, // none today
    newDeaths: 23
  },
  {
    date: '2020-08-22',
    totalCases: 77894,
    newCases: 626,
    testsRun: 492386, // none today
    newDeaths: 3
  },
  {
    date: '2020-08-23',
    totalCases: 78405,
    newCases: 511,
    testsRun: 492386, // none today
    newDeaths: 8
  },
  {
    date: '2020-08-24',
    totalCases: 79206,
    newCases: 801,
    testsRun: 492386, // none today
    newDeaths: 67
  },
  {
    date: '2020-08-25',
    totalCases: 80110,
    newCases: 904,
    testsRun: 492386, // none today
    newDeaths: 58
  },
  {
    date: '2020-08-26',
    totalCases: 80695,
    newCases: 585,
    testsRun: 492386, // none today
    newDeaths: 26
  },
  {
    date: '2020-08-27',
    totalCases: 81294,
    newCases: 599,
    testsRun: 492386, // none today
    newDeaths: 14
  },
  {
    date: '2020-08-28',
    totalCases: 82029,
    newCases: 735,
    testsRun: 492386, // none today
    newDeaths: 14
  },
  {
    date: '2020-08-29',
    totalCases: 82676,
    newCases: 647,
    testsRun: 492386, // none today
    newDeaths: 14
  },
  {
    date: '2020-08-30',
    totalCases: 82950,
    newCases: 274,
    testsRun: 492386, // none today
    newDeaths: 32
  },
  {
    date: '2020-08-31',
    totalCases: 83584,
    newCases: 634,
    testsRun: 492386, // none today
    newDeaths: 0
  },
  {
    date: '2020-09-01',
    totalCases: 84365,
    newCases: 781,
    testsRun: 492386, // none today
    newDeaths: 33
  },
  {
    date: '2020-09-02',
    totalCases: 85116,
    newCases: 751,
    testsRun: 492386, // none today
    newDeaths: 10
  },
  {
    date: '2020-09-03',
    totalCases: 85939,
    newCases: 823,
    testsRun: 492386, // none today
    newDeaths: 23
  },
  {
    date: '2020-09-04',
    totalCases: 86478,
    newCases: 539,
    testsRun: 492386, // none today
    newDeaths: 11
  },
  {
    date: '2020-09-05',
    totalCases: 86888,
    newCases: 410,
    testsRun: 492386, // none today
    newDeaths: 16
  },
  {
    date: '2020-09-06',
    totalCases: 87130,
    newCases: 242,
    testsRun: 492386, // none today
    newDeaths: 1
  },
  {
    date: '2020-09-07',
    totalCases: 87379,
    newCases: 249,
    testsRun: 492386, // none today
    newDeaths: 0
  },
  {
    date: '2020-09-08',
    totalCases: 87805,
    newCases: 426,
    testsRun: 492386, // none today
    newDeaths: 39
  },
  {
    date: '2020-09-09',
    totalCases: 88322,
    newCases: 517,
    testsRun: 492386, // none today
    newDeaths: 33
  },
  {
    date: '2020-09-10',
    totalCases: 89175,
    newCases: 853,
    testsRun: 613122,
    newDeaths: 15
  },
  {
    date: '2020-09-11',
    totalCases: 89620,
    newCases: 445,
    testsRun: 613122,
    newDeaths: 15
  },
  {
    date: '2020-09-12',
    totalCases: 89874,
    newCases: 254,
    testsRun: 613122,
    newDeaths: 12
  },
  {
    date: '2020-09-13',
    totalCases: 90018,
    newCases: 145,
    testsRun: 613122,
    newDeaths: 9
  },
  {
    date: '2020-09-14',
    totalCases: 90523,
    newCases: 505,
    testsRun: 613122,
    newDeaths: 28
  },
  {
    date: '2020-09-15',
    totalCases: 91234,
    newCases: 711,
    testsRun: 613122,
    newDeaths: 22
  },
  {
    date: '2020-09-16',
    totalCases: 91935,
    newCases: 701,
    testsRun: 613122,
    newDeaths: 24
  },
  {
    date: '2020-09-17',
    totalCases: 92432,
    newCases: 497,
    testsRun: 613122,
    newDeaths: 12
  },
  {
    date: '2020-09-18',
    totalCases: 93087,
    newCases: 655,
    testsRun: 613122,
    newDeaths: 17
  },
  {
    date: '2020-09-19',
    totalCases: 93364,
    newCases: 277,
    testsRun: 613122,
    newDeaths: 1
  },
  {
    date: '2020-09-20',
    totalCases: 93556,
    newCases: 192,
    testsRun: 613122,
    newDeaths: 0
  },
  {
    date: '2020-09-21',
    totalCases: 94021,
    newCases: 465,
    testsRun: 613122,
    newDeaths: 36
  },
  {
    date: '2020-09-22',
    totalCases: 94573,
    newCases: 552,
    testsRun: 613122,
    newDeaths: 24
  },
  {
    date: '2020-09-23',
    totalCases: 95310,
    newCases: 737,
    testsRun: 613122,
    newDeaths: 4
  },
  {
    date: '2020-09-24',
    totalCases: 96032,
    newCases: 722,
    testsRun: 613122,
    newDeaths: 20
  },
  {
    date: '2020-09-25',
    totalCases: 96677,
    newCases: 645,
    testsRun: 613122,
    newDeaths: 17
  },
  {
    date: '2020-09-26',
    totalCases: 96859,
    newCases: 182,
    testsRun: 613122,
    newDeaths: 8
  },
  {
    date: '2020-09-27',
    totalCases: 97049,
    newCases: 190,
    testsRun: 613122,
    newDeaths: 2
  },
  {
    date: '2020-09-28',
    totalCases: 97638,
    newCases: 589,
    testsRun: 613122,
    newDeaths: 36
  },
  {
    date: '2020-09-29',
    totalCases: 98190,
    newCases: 552,
    testsRun: 613122,
    newDeaths: 12
  },
  {
    date: '2020-09-30',
    totalCases: 98886,
    newCases: 696,
    testsRun: 613122,
    newDeaths: 10
  },
  {
    date: '2020-10-01',
    totalCases: 99558,
    newCases: 672,
    testsRun: 613122,
    newDeaths: 20
  },
  {
    date: '2020-10-02',
    totalCases: 100167,
    newCases: 609,
    testsRun: 613122,
    newDeaths: 16
  },
  {
    date: '2020-10-03',
    totalCases: 100488,
    newCases: 321,
    testsRun: 613122,
    newDeaths: 2
  },
  {
    date: '2020-10-04',
    totalCases: 100703,
    newCases: 215,
    testsRun: 613122,
    newDeaths: 0
  },
  {
    date: '2020-10-05',
    totalCases: 101678,
    newCases: 975,
    testsRun: 613122,
    newDeaths: 14
  },
  {
    date: '2020-10-06',
    totalCases: 102241,
    newCases: 563,
    testsRun: 613122,
    newDeaths: 24
  },
  {
    date: '2020-10-07',
    totalCases: 102819,
    newCases: 578,
    testsRun: 613122,
    newDeaths: 23
  },
  {
    date: '2020-10-08',
    totalCases: 103681,
    newCases: 862,
    testsRun: 613122,
    newDeaths: 6
  },
  {
    date: '2020-10-09',
    totalCases: 104638,
    newCases: 957,
    testsRun: 613122,
    newDeaths: 16
  },
  {
    date: '2020-10-10',
    totalCases: 104932,
    newCases: 294,
    testsRun: 613122,
    newDeaths: 5
  },
  {
    date: '2020-10-11',
    totalCases: 105228,
    newCases: 296,
    testsRun: 613122,
    newDeaths: 0
  },
  {
    date: '2020-10-12',
    totalCases: 105941,
    newCases: 713,
    testsRun: 613122,
    newDeaths: 14
  },
  {
    date: '2020-10-13',
    totalCases: 106817,
    newCases: 876,
    testsRun: 613122,
    newDeaths: 25
  },
  {
    date: '2020-10-14',
    totalCases: 108139,
    newCases: 1322,
    testsRun: 613122,
    newDeaths: 12
  },
  {
    date: '2020-10-15',
    totalCases: 109255,
    newCases: 1116,
    testsRun: 613122,
    newDeaths: 9
  },
  {
    date: '2020-10-16',
    totalCases: 110006,
    newCases: 751,
    testsRun: 613122,
    newDeaths: 10
  },
  {
    date: '2020-10-17',
    totalCases: 110006,
    newCases: 0,
    testsRun: 613122,
    newDeaths: 0
  },
  {
    date: '2020-10-18',
    totalCases: 110592,
    newCases: 586,
    testsRun: 613122,
    newDeaths: 0
  },
  {
    date: '2020-10-19',
    totalCases: 111322,
    newCases: 730,
    testsRun: 613122,
    newDeaths: 31
  },
  {
    date: '2020-10-20',
    totalCases: 112123,
    newCases: 801,
    testsRun: 613122,
    newDeaths: 21
  },
  {
    date: '2020-10-21',
    totalCases: 113081,
    newCases: 958,
    testsRun: 613122,
    newDeaths: 8
  },
  {
    date: '2020-10-22',
    totalCases: 113876,
    newCases: 795,
    testsRun: 613122,
    newDeaths: 7
  },
  {
    date: '2020-10-23',
    totalCases: 115088,
    newCases: 1212,
    testsRun: 613122,
    newDeaths: 17
  },
  {
    date: '2020-10-24',
    totalCases: 115088,
    newCases: 0,
    testsRun: 613122,
    newDeaths: 0
  },
  {
    date: '2020-10-25',
    totalCases: 115763,
    newCases: 675,
    testsRun: 613122,
    newDeaths: 8
  },
  {
    date: '2020-10-26',
    totalCases: 116617,
    newCases: 854,
    testsRun: 613122,
    newDeaths: 20
  },
  {
    date: '2020-10-27',
    totalCases: 117617,
    newCases: 1000,
    testsRun: 613122,
    newDeaths: 19
  },
  {
    date: '2020-10-28',
    totalCases: 118587,
    newCases: 970,
    testsRun: 613122,
    newDeaths: 8
  },
  {
    date: '2020-10-29',
    totalCases: 119336,
    newCases: 749,
    testsRun: 613122,
    newDeaths: 18
  },
  {
    date: '2020-10-30',
    totalCases: 120160,
    newCases: 824,
    testsRun: 613122,
    newDeaths: 6
  },
  {
    date: '2020-10-31',
    totalCases: 120500,
    newCases: 340,
    testsRun: 613122,
    newDeaths: 14
  },
  {
    date: '2020-11-01',
    totalCases: 120865,
    newCases: 365,
    testsRun: 613122,
    newDeaths: 0
  },
  {
    date: '2020-11-02',
    totalCases: 121509,
    newCases: 644,
    testsRun: 613122,
    newDeaths: 36
  },
  {
    date: '2020-11-03',
    totalCases: 122275,
    newCases: 766,
    testsRun: 613122,
    newDeaths: 13
  },
  {
    date: '2020-11-04',
    totalCases: 123887,
    newCases: 1612,
    testsRun: 613122,
    newDeaths: 8
  },
  {
    date: '2020-11-05',
    totalCases: 124854,
    newCases: 967,
    testsRun: 613122,
    newDeaths: 14
  },
  {
    date: '2020-11-06',
    totalCases: 125885,
    newCases: 1031,
    testsRun: 613122,
    newDeaths: 15
  },
  {
    date: '2020-11-07',
    totalCases: 126689,
    newCases: 804,
    testsRun: 613122,
    newDeaths: 10
  },
  {
    date: '2020-11-08',
    totalCases: 127205,
    newCases: 516,
    testsRun: 613122,
    newDeaths: 0
  },
  {
    date: '2020-11-09',
    totalCases: 128138,
    newCases: 933,
    testsRun: 613122,
    newDeaths: 37
  },
  {
    date: '2020-11-10',
    totalCases: 129394,
    newCases: 1256,
    testsRun: 613122,
    newDeaths: 17
  },
  {
    date: '2020-11-11',
    totalCases: 130665,
    newCases: 1271,
    testsRun: 613122,
    newDeaths: 17
  },
  {
    date: '2020-11-12',
    totalCases: 131970,
    newCases: 1305,
    testsRun: 613122,
    newDeaths: 5
  },
  {
    date: '2020-11-13',
    totalCases: 133340,
    newCases: 1370,
    testsRun: 613122,
    newDeaths: 21
  },
  {
    date: '2020-11-14',
    totalCases: 134309,
    newCases: 969,
    testsRun: 613122,
    newDeaths: 3
  },
  {
    date: '2020-11-15',
    totalCases: 134898,
    newCases: 589,
    testsRun: 613122,
    newDeaths: 2
  },
  {
    date: '2020-11-16',
    totalCases: 135803,
    newCases: 905,
    testsRun: 613122,
    newDeaths: 36
  },
  {
    date: '2020-11-17',
    totalCases: 137396,
    newCases: 1593,
    testsRun: 613122,
    newDeaths: 20
  },
  {
    date: '2020-11-18',
    totalCases: 138791,
    newCases: 1395,
    testsRun: 613122,
    newDeaths: 19
  },
  {
    date: '2020-11-19',
    totalCases: 140429,
    newCases: 1638,
    testsRun: 613122,
    newDeaths: 23
  },
  {
    date: '2020-11-20',
    totalCases: 142401,
    newCases: 1972,
    testsRun: 613122,
    newDeaths: 15
  },
  {
    date: '2020-11-21',
    totalCases: 143180,
    newCases: 779,
    testsRun: 613122,
    newDeaths: 19
  },
  {
    date: '2020-11-22',
    totalCases: 143879,
    newCases: 699,
    testsRun: 613122,
    newDeaths: 0
  },
  {
    date: '2020-11-23',
    totalCases: 144544,
    newCases: 665,
    testsRun: 613122,
    newDeaths: 53
  },
  {
    date: '2020-11-24',
    totalCases: 145636,
    newCases: 1092,
    testsRun: 613122,
    newDeaths: 16
  },
  {
    date: '2020-11-25',
    totalCases: 147382,
    newCases: 1746,
    testsRun: 613122,
    newDeaths: 18
  },
  {
    date: '2020-11-26',
    totalCases: 148387,
    newCases: 1005,
    testsRun: 613122,
    newDeaths: 6
  },
  {
    date: '2020-11-27',
    totalCases: 149940,
    newCases: 1553,
    testsRun: 613122,
    newDeaths: 10
  },
  {
    date: '2020-11-28',
    totalCases: 151785,
    newCases: 1845,
    testsRun: 613122,
    newDeaths: 27
  },
  {
    date: '2020-11-29',
    totalCases: 153270,
    newCases: 1485,
    testsRun: 613122,
    newDeaths: 1
  },
  {
    date: '2020-11-30',
    totalCases: 154411,
    newCases: 1141,
    testsRun: 613122,
    newDeaths: 29
  },
  {
    date: '2020-12-01',
    totalCases: 156868,
    newCases: 2457,
    testsRun: 613122,
    newDeaths: 15
  },
  {
    date: '2020-12-02',
    totalCases: 159036,
    newCases: 2168,
    testsRun: 613122,
    newDeaths: 28
  },
  {
    date: '2020-12-03',
    totalCases: 161516,
    newCases: 2480,
    testsRun: 613122,
    newDeaths: 37
  },
  {
    date: '2020-12-04',
    totalCases: 163458,
    newCases: 1942,
    testsRun: 613122,
    newDeaths: 33
  },
  {
    date: '2020-12-05',
    totalCases: 164931,
    newCases: 1473,
    testsRun: 1154216,
    newDeaths: 12
  },
  {
    date: '2020-12-06',
    totalCases: 166194,
    newCases: 1263,
    testsRun: 1154216,
    newDeaths: 0
  },
  {
    date: '2020-12-07',
    totalCases: 167926,
    newCases: 1732,
    testsRun: 1154216,
    newDeaths: 56
  },
  {
    date: '2020-12-08',
    totalCases: 170672,
    newCases: 2746,
    testsRun: 1154216,
    newDeaths: 24
  },
  {
    date: '2020-12-09',
    totalCases: 172955,
    newCases: 2283,
    testsRun: 1154216,
    newDeaths: 42
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