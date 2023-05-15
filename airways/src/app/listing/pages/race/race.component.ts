import { Component, OnInit } from '@angular/core';

interface IResponsiveOption {
  breakpoint: string,
    numVisible: number,
    numScroll: number,
}

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
})


export class RaceComponent implements OnInit {
  jsonData = `{
    "departureAirportCode": "WAW",
    "arrivalAirportCode": "SCL",
    "departureDate": "2023-05-29T00:00:00.000Z",
    "returnDate": "2023-06-10T00:00:00.000Z",
    "roundTrip": 1,
    "routes": [
        {
            "departureDate": "2023-05-29T00:00:00.000Z",
            "departureAirportCode": "WAW",
            "arrivalAirportCode": "SCL",
            "flights": [
                {
                    "departureAirportCode": "WAW",
                    "departureDateTime": "2023-05-29T16:10:00.000Z",
                    "arrivalAirportCode": "YVR",
                    "arrivalDateTime": "2023-05-29T17:30:00.000Z",
                    "numberRace": "UA9578",
                    "seatNumbers": [
                        "37a",
                        "38a",
                        "39a",
                        "40a",
                        "41a"
                    ],
                    "freeSeats": 6,
                    "flightTime": 620
                }
            ],
            "ticketsCost": {
                "adult": {
                    "totalCost": "1325.40",
                    "fare": "861.51",
                    "tax": "463.89"
                },
                "children": {
                    "totalCost": "1033.81",
                    "fare": "568.60",
                    "tax": "465.22"
                },
                "infant": {
                    "totalCost": "424.13",
                    "fare": "373.23",
                    "tax": "50.90"
                }
            }
        },
        {
            "departureDate": "2023-05-30T00:00:00.000Z",
            "departureAirportCode": "SCL",
            "arrivalAirportCode": "WAW",
            "flights": [
                {
                    "departureAirportCode": "WAW",
                    "departureDateTime": "2023-05-30T18:10:00.000Z",
                    "arrivalAirportCode": "YVR",
                    "arrivalDateTime": "2023-05-30T19:30:00.000Z",
                    "numberRace": "BA1491",
                    "seatNumbers": [
                        "23a",
                        "24a",
                        "25a",
                        "26a",
                        "27a"
                    ],
                    "freeSeats": 18,
                    "flightTime": 620
                },
                {
                    "departureAirportCode": "YVR",
                    "departureDateTime": "2023-05-30T21:40:00.000Z",
                    "arrivalAirportCode": "SCL",
                    "arrivalDateTime": "2023-05-31T13:50:00.000Z",
                    "numberRace": "AF4360",
                    "seatNumbers": [
                        "24c",
                        "25c",
                        "26c",
                        "27c",
                        "28c"
                    ],
                    "freeSeats": 18,
                    "flightTime": 790
                }
            ],
            "ticketsCost": {
                "adult": {
                    "totalCost": "1252.93",
                    "fare": "814.40",
                    "tax": "438.53"
                },
                "children": {
                    "totalCost": "977.29",
                    "fare": "537.51",
                    "tax": "439.78"
                },
                "infant": {
                    "totalCost": "400.94",
                    "fare": "352.83",
                    "tax": "48.11"
                }
            }
        },
        {
            "departureDate": "2023-05-31T00:00:00.000Z",
            "departureAirportCode": "WAW",
            "arrivalAirportCode": "SCL",
            "flights": [
                {
                    "departureAirportCode": "WAW",
                    "departureDateTime": "2023-05-31T15:30:00.000Z",
                    "arrivalAirportCode": "YVR",
                    "arrivalDateTime": "2023-05-31T16:50:00.000Z",
                    "numberRace": "NH4540",
                    "seatNumbers": [
                        "15c",
                        "16c",
                        "17c",
                        "18c",
                        "19c"
                    ],
                    "freeSeats": 18,
                    "flightTime": 620
                },
                {
                    "departureAirportCode": "YVR",
                    "departureDateTime": "2023-05-31T19:10:00.000Z",
                    "arrivalAirportCode": "SCL",
                    "arrivalDateTime": "2023-06-01T11:20:00.000Z",
                    "numberRace": "LH9287",
                    "seatNumbers": [
                        "28f",
                        "29f",
                        "30f",
                        "31f",
                        "32f"
                    ],
                    "freeSeats": 18,
                    "flightTime": 790
                }
            ],
            "ticketsCost": {
                "adult": {
                    "totalCost": "1191.64",
                    "fare": "774.57",
                    "tax": "417.07"
                },
                "children": {
                    "totalCost": "929.48",
                    "fare": "511.21",
                    "tax": "418.27"
                },
                "infant": {
                    "totalCost": "381.32",
                    "fare": "335.57",
                    "tax": "45.76"
                }
            }
        },
        {
            "departureDate": "2023-06-01T00:00:00.000Z",
            "departureAirportCode": "WAW",
            "arrivalAirportCode": "SCL",
            "flights": [
                {
                    "departureAirportCode": "WAW",
                    "departureDateTime": "2023-06-01T07:30:00.000Z",
                    "arrivalAirportCode": "YVR",
                    "arrivalDateTime": "2023-06-01T08:50:00.000Z",
                    "numberRace": "NH5429",
                    "seatNumbers": [
                        "6d",
                        "7d",
                        "8d",
                        "9d",
                        "10d"
                    ],
                    "freeSeats": 21,
                    "flightTime": 620
                },
                {
                    "departureAirportCode": "YVR",
                    "departureDateTime": "2023-06-01T10:50:00.000Z",
                    "arrivalAirportCode": "SCL",
                    "arrivalDateTime": "2023-06-02T03:00:00.000Z",
                    "numberRace": "JL9548",
                    "seatNumbers": [
                        "25e",
                        "26e",
                        "27e",
                        "28e",
                        "29e"
                    ],
                    "freeSeats": 21,
                    "flightTime": 790
                }
            ],
            "ticketsCost": {
                "adult": {
                    "totalCost": "1200.83",
                    "fare": "780.54",
                    "tax": "420.29"
                },
                "children": {
                    "totalCost": "936.65",
                    "fare": "515.16",
                    "tax": "421.49"
                },
                "infant": {
                    "totalCost": "384.27",
                    "fare": "338.15",
                    "tax": "46.11"
                }
            }
        },
        {
            "departureDate": "2023-06-02T00:00:00.000Z",
            "departureAirportCode": "WAW",
            "arrivalAirportCode": "SCL",
            "flights": [
                {
                    "departureAirportCode": "WAW",
                    "departureDateTime": "2023-06-02T15:10:00.000Z",
                    "arrivalAirportCode": "YVR",
                    "arrivalDateTime": "2023-06-02T16:30:00.000Z",
                    "numberRace": "AA1031",
                    "seatNumbers": [
                        "20d",
                        "21d",
                        "22d",
                        "23d",
                        "24d"
                    ],
                    "freeSeats": 25,
                    "flightTime": 620
                },
                {
                    "departureAirportCode": "YVR",
                    "departureDateTime": "2023-06-02T18:00:00.000Z",
                    "arrivalAirportCode": "SCL",
                    "arrivalDateTime": "2023-06-03T10:10:00.000Z",
                    "numberRace": "NH7241",
                    "seatNumbers": [
                        "10e",
                        "11e",
                        "12e",
                        "13e",
                        "14e"
                    ],
                    "freeSeats": 30,
                    "flightTime": 790
                }
            ],
            "ticketsCost": {
                "adult": {
                    "totalCost": "1151.65",
                    "fare": "748.57",
                    "tax": "403.08"
                },
                "children": {
                    "totalCost": "898.29",
                    "fare": "494.06",
                    "tax": "404.23"
                },
                "infant": {
                    "totalCost": "368.53",
                    "fare": "324.30",
                    "tax": "44.22"
                }
            }
        },
        {
            "departureDate": "2023-06-03T00:00:00.000Z",
            "departureAirportCode": "WAW",
            "arrivalAirportCode": "SCL",
            "flights": [
                {
                    "departureAirportCode": "WAW",
                    "departureDateTime": "2023-06-03T16:00:00.000Z",
                    "arrivalAirportCode": "YVR",
                    "arrivalDateTime": "2023-06-03T17:20:00.000Z",
                    "numberRace": "AF6463",
                    "seatNumbers": [
                        "4d",
                        "5d",
                        "6d",
                        "7d",
                        "8d"
                    ],
                    "freeSeats": 39,
                    "flightTime": 620
                },
                {
                    "departureAirportCode": "YVR",
                    "departureDateTime": "2023-06-03T19:00:00.000Z",
                    "arrivalAirportCode": "SCL",
                    "arrivalDateTime": "2023-06-04T11:10:00.000Z",
                    "numberRace": "NH7193",
                    "seatNumbers": [
                        "4d",
                        "5d",
                        "6d",
                        "7d",
                        "8d"
                    ],
                    "freeSeats": 38,
                    "flightTime": 790
                }
            ],
            "ticketsCost": {
                "adult": {
                    "totalCost": "1028.36",
                    "fare": "668.43",
                    "tax": "359.93"
                },
                "children": {
                    "totalCost": "802.12",
                    "fare": "441.17",
                    "tax": "360.95"
                },
                "infant": {
                    "totalCost": "329.08",
                    "fare": "289.59",
                    "tax": "39.49"
                }
            }
        },
        {
            "departureDate": "2023-06-04T00:00:00.000Z",
            "departureAirportCode": "WAW",
            "arrivalAirportCode": "SCL",
            "flights": [],
            "ticketsCost": {
                "adult": {
                    "totalCost": "981.78",
                    "fare": "638.16",
                    "tax": "343.62"
                },
                "children": {
                    "totalCost": "765.79",
                    "fare": "421.18",
                    "tax": "344.60"
                },
                "infant": {
                    "totalCost": "314.17",
                    "fare": "276.47",
                    "tax": "37.70"
                }
            }
        },
        {
            "departureDate": "2023-06-05T00:00:00.000Z",
            "departureAirportCode": "WAW",
            "arrivalAirportCode": "SCL",
            "flights": [],
            "ticketsCost": {
                "adult": {
                    "totalCost": "1037.05",
                    "fare": "674.08",
                    "tax": "362.97"
                },
                "children": {
                    "totalCost": "808.90",
                    "fare": "444.89",
                    "tax": "364.00"
                },
                "infant": {
                    "totalCost": "331.86",
                    "fare": "292.03",
                    "tax": "39.82"
                }
            }
        },
        {
            "departureDate": "2023-06-06T00:00:00.000Z",
            "departureAirportCode": "WAW",
            "arrivalAirportCode": "SCL",
            "flights": [
                {
                    "departureAirportCode": "WAW",
                    "departureDateTime": "2023-06-06T09:30:00.000Z",
                    "arrivalAirportCode": "YVR",
                    "arrivalDateTime": "2023-06-06T10:50:00.000Z",
                    "numberRace": "NH5678",
                    "seatNumbers": [
                        "9b",
                        "10b",
                        "11b",
                        "12b",
                        "13b"
                    ],
                    "freeSeats": 53,
                    "flightTime": 620
                },
                {
                    "departureAirportCode": "YVR",
                    "departureDateTime": "2023-06-06T13:10:00.000Z",
                    "arrivalAirportCode": "SCL",
                    "arrivalDateTime": "2023-06-07T05:20:00.000Z",
                    "numberRace": "AF276",
                    "seatNumbers": [
                        "23e",
                        "24e",
                        "25e",
                        "26e",
                        "27e"
                    ],
                    "freeSeats": 52,
                    "flightTime": 790
                }
            ],
            "ticketsCost": {
                "adult": {
                    "totalCost": "983.80",
                    "fare": "639.47",
                    "tax": "344.33"
                },
                "children": {
                    "totalCost": "767.36",
                    "fare": "422.05",
                    "tax": "345.31"
                },
                "infant": {
                    "totalCost": "314.82",
                    "fare": "277.04",
                    "tax": "37.78"
                }
            }
        },
        {
            "departureDate": "2023-06-07T00:00:00.000Z",
            "departureAirportCode": "WAW",
            "arrivalAirportCode": "SCL",
            "flights": [
                {
                    "departureAirportCode": "WAW",
                    "departureDateTime": "2023-06-07T12:50:00.000Z",
                    "arrivalAirportCode": "YVR",
                    "arrivalDateTime": "2023-06-07T14:10:00.000Z",
                    "numberRace": "DL6003",
                    "seatNumbers": [
                        "36f",
                        "37f",
                        "38f",
                        "39f",
                        "40f"
                    ],
                    "freeSeats": 51,
                    "flightTime": 620
                },
                {
                    "departureAirportCode": "YVR",
                    "departureDateTime": "2023-06-07T15:20:00.000Z",
                    "arrivalAirportCode": "SCL",
                    "arrivalDateTime": "2023-06-08T07:30:00.000Z",
                    "numberRace": "AA10",
                    "seatNumbers": [
                        "23b",
                        "24b",
                        "25b",
                        "26b",
                        "27b"
                    ],
                    "freeSeats": 57,
                    "flightTime": 790
                }
            ],
            "ticketsCost": {
                "adult": {
                    "totalCost": "1040.80",
                    "fare": "676.52",
                    "tax": "364.28"
                },
                "children": {
                    "totalCost": "811.82",
                    "fare": "446.50",
                    "tax": "365.32"
                },
                "infant": {
                    "totalCost": "333.06",
                    "fare": "293.09",
                    "tax": "39.97"
                }
            }
        },
        {
            "departureDate": "2023-06-10T00:00:00.000Z",
            "departureAirportCode": "SCL",
            "arrivalAirportCode": "WAW",
            "flights": [
                {
                    "departureAirportCode": "SCL",
                    "departureDateTime": "2023-06-10T13:00:00.000Z",
                    "arrivalAirportCode": "YVR",
                    "arrivalDateTime": "2023-06-10T20:20:00.000Z",
                    "numberRace": "LH3427",
                    "seatNumbers": [
                        "29b",
                        "30b",
                        "31b",
                        "32b",
                        "33b"
                    ],
                    "freeSeats": 12,
                    "flightTime": 620
                },
                {
                    "departureAirportCode": "YVR",
                    "departureDateTime": "2023-06-10T21:50:00.000Z",
                    "arrivalAirportCode": "WAW",
                    "arrivalDateTime": "2023-06-11T20:00:00.000Z",
                    "numberRace": "UA6795",
                    "seatNumbers": [
                        "19c",
                        "20c",
                        "21c",
                        "22c",
                        "23c"
                    ],
                    "freeSeats": 7,
                    "flightTime": 790
                }
            ],
            "ticketsCost": {
                "adult": {
                    "totalCost": "1279.27",
                    "fare": "831.53",
                    "tax": "447.74"
                },
                "children": {
                    "totalCost": "997.83",
                    "fare": "548.81",
                    "tax": "449.02"
                },
                "infant": {
                    "totalCost": "409.37",
                    "fare": "360.24",
                    "tax": "49.12"
                }
            }
        },
        {
            "departureDate": "2023-06-11T00:00:00.000Z",
            "departureAirportCode": "SCL",
            "arrivalAirportCode": "WAW",
            "flights": [
                {
                    "departureAirportCode": "SCL",
                    "departureDateTime": "2023-06-11T16:20:00.000Z",
                    "arrivalAirportCode": "YVR",
                    "arrivalDateTime": "2023-06-11T23:40:00.000Z",
                    "numberRace": "JL6757",
                    "seatNumbers": [
                        "29a",
                        "30a",
                        "31a",
                        "32a",
                        "33a"
                    ],
                    "freeSeats": 16,
                    "flightTime": 620
                },
                {
                    "departureAirportCode": "YVR",
                    "departureDateTime": "2023-06-12T01:50:00.000Z",
                    "arrivalAirportCode": "WAW",
                    "arrivalDateTime": "2023-06-13T00:00:00.000Z",
                    "numberRace": "BA8528",
                    "seatNumbers": [
                        "17f",
                        "18f",
                        "19f",
                        "20f",
                        "21f"
                    ],
                    "freeSeats": 19,
                    "flightTime": 790
                }
            ],
            "ticketsCost": {
                "adult": {
                    "totalCost": "1245.68",
                    "fare": "809.69",
                    "tax": "435.99"
                },
                "children": {
                    "totalCost": "971.63",
                    "fare": "534.40",
                    "tax": "437.23"
                },
                "infant": {
                    "totalCost": "398.62",
                    "fare": "350.78",
                    "tax": "47.83"
                }
            }
        },
        {
            "departureDate": "2023-06-12T00:00:00.000Z",
            "departureAirportCode": "SCL",
            "arrivalAirportCode": "WAW",
            "flights": [
                {
                    "departureAirportCode": "SCL",
                    "departureDateTime": "2023-06-12T08:40:00.000Z",
                    "arrivalAirportCode": "YVR",
                    "arrivalDateTime": "2023-06-12T16:00:00.000Z",
                    "numberRace": "SQ7451",
                    "seatNumbers": [
                        "20a",
                        "21a",
                        "22a",
                        "23a",
                        "24a"
                    ],
                    "freeSeats": 24,
                    "flightTime": 620
                },
                {
                    "departureAirportCode": "YVR",
                    "departureDateTime": "2023-06-12T17:50:00.000Z",
                    "arrivalAirportCode": "WAW",
                    "arrivalDateTime": "2023-06-13T16:00:00.000Z",
                    "numberRace": "DL1302",
                    "seatNumbers": [
                        "33c",
                        "34c",
                        "35c",
                        "36c",
                        "37c"
                    ],
                    "freeSeats": 24,
                    "flightTime": 790
                }
            ],
            "ticketsCost": {
                "adult": {
                    "totalCost": "1180.41",
                    "fare": "767.27",
                    "tax": "413.14"
                },
                "children": {
                    "totalCost": "920.72",
                    "fare": "506.40",
                    "tax": "414.32"
                },
                "infant": {
                    "totalCost": "377.73",
                    "fare": "332.40",
                    "tax": "45.33"
                }
            }
        },
        {
            "departureDate": "2023-06-13T00:00:00.000Z",
            "departureAirportCode": "SCL",
            "arrivalAirportCode": "WAW",
            "flights": [
                {
                    "departureAirportCode": "SCL",
                    "departureDateTime": "2023-06-13T15:40:00.000Z",
                    "arrivalAirportCode": "YVR",
                    "arrivalDateTime": "2023-06-13T23:00:00.000Z",
                    "numberRace": "AF3204",
                    "seatNumbers": [
                        "16e",
                        "17e",
                        "18e",
                        "19e",
                        "20e"
                    ],
                    "freeSeats": 21,
                    "flightTime": 620
                },
                {
                    "departureAirportCode": "YVR",
                    "departureDateTime": "2023-06-14T00:50:00.000Z",
                    "arrivalAirportCode": "WAW",
                    "arrivalDateTime": "2023-06-14T23:00:00.000Z",
                    "numberRace": "AF7712",
                    "seatNumbers": [
                        "30e",
                        "31e",
                        "32e",
                        "33e",
                        "34e"
                    ],
                    "freeSeats": 24,
                    "flightTime": 790
                }
            ],
            "ticketsCost": {
                "adult": {
                    "totalCost": "1191.94",
                    "fare": "774.76",
                    "tax": "417.18"
                },
                "children": {
                    "totalCost": "929.71",
                    "fare": "511.34",
                    "tax": "418.37"
                },
                "infant": {
                    "totalCost": "381.42",
                    "fare": "335.65",
                    "tax": "45.77"
                }
            }
        },
        {
            "departureDate": "2023-06-14T00:00:00.000Z",
            "departureAirportCode": "SCL",
            "arrivalAirportCode": "WAW",
            "flights": [
                {
                    "departureAirportCode": "SCL",
                    "departureDateTime": "2023-06-14T09:00:00.000Z",
                    "arrivalAirportCode": "YVR",
                    "arrivalDateTime": "2023-06-14T16:20:00.000Z",
                    "numberRace": "SQ7699",
                    "seatNumbers": [
                        "32b",
                        "33b",
                        "34b",
                        "35b",
                        "36b"
                    ],
                    "freeSeats": 29,
                    "flightTime": 620
                },
                {
                    "departureAirportCode": "YVR",
                    "departureDateTime": "2023-06-14T17:40:00.000Z",
                    "arrivalAirportCode": "WAW",
                    "arrivalDateTime": "2023-06-15T15:50:00.000Z",
                    "numberRace": "JL7299",
                    "seatNumbers": [
                        "14f",
                        "15f",
                        "16f",
                        "17f",
                        "18f"
                    ],
                    "freeSeats": 28,
                    "flightTime": 790
                }
            ],
            "ticketsCost": {
                "adult": {
                    "totalCost": "1126.16",
                    "fare": "732.00",
                    "tax": "394.16"
                },
                "children": {
                    "totalCost": "878.40",
                    "fare": "483.12",
                    "tax": "395.28"
                },
                "infant": {
                    "totalCost": "360.37",
                    "fare": "317.13",
                    "tax": "43.24"
                }
            }
        },
        {
            "departureDate": "2023-06-15T00:00:00.000Z",
            "departureAirportCode": "SCL",
            "arrivalAirportCode": "WAW",
            "flights": [
                {
                    "departureAirportCode": "SCL",
                    "departureDateTime": "2023-06-15T16:40:00.000Z",
                    "arrivalAirportCode": "YVR",
                    "arrivalDateTime": "2023-06-16T00:00:00.000Z",
                    "numberRace": "LH4865",
                    "seatNumbers": [
                        "3b",
                        "4b",
                        "5b",
                        "6b",
                        "7b"
                    ],
                    "freeSeats": 34,
                    "flightTime": 620
                },
                {
                    "departureAirportCode": "YVR",
                    "departureDateTime": "2023-06-16T01:50:00.000Z",
                    "arrivalAirportCode": "WAW",
                    "arrivalDateTime": "2023-06-17T00:00:00.000Z",
                    "numberRace": "DL5670",
                    "seatNumbers": [
                        "11b",
                        "12b",
                        "13b",
                        "14b",
                        "15b"
                    ],
                    "freeSeats": 34,
                    "flightTime": 790
                }
            ],
            "ticketsCost": {
                "adult": {
                    "totalCost": "1003.57",
                    "fare": "652.32",
                    "tax": "351.25"
                },
                "children": {
                    "totalCost": "782.78",
                    "fare": "430.53",
                    "tax": "352.25"
                },
                "infant": {
                    "totalCost": "321.14",
                    "fare": "282.61",
                    "tax": "38.54"
                }
            }
        },
        {
            "departureDate": "2023-06-16T00:00:00.000Z",
            "departureAirportCode": "SCL",
            "arrivalAirportCode": "WAW",
            "flights": [
                {
                    "departureAirportCode": "SCL",
                    "departureDateTime": "2023-06-16T09:40:00.000Z",
                    "arrivalAirportCode": "YVR",
                    "arrivalDateTime": "2023-06-16T17:00:00.000Z",
                    "numberRace": "AF4185",
                    "seatNumbers": [
                        "26a",
                        "27a",
                        "28a",
                        "29a",
                        "30a"
                    ],
                    "freeSeats": 38,
                    "flightTime": 620
                },
                {
                    "departureAirportCode": "YVR",
                    "departureDateTime": "2023-06-16T19:30:00.000Z",
                    "arrivalAirportCode": "WAW",
                    "arrivalDateTime": "2023-06-17T17:40:00.000Z",
                    "numberRace": "LH8637",
                    "seatNumbers": [
                        "31f",
                        "32f",
                        "33f",
                        "34f",
                        "35f"
                    ],
                    "freeSeats": 40,
                    "flightTime": 790
                }
            ],
            "ticketsCost": {
                "adult": {
                    "totalCost": "1022.92",
                    "fare": "664.90",
                    "tax": "358.02"
                },
                "children": {
                    "totalCost": "797.88",
                    "fare": "438.83",
                    "tax": "359.04"
                },
                "infant": {
                    "totalCost": "327.33",
                    "fare": "288.05",
                    "tax": "39.28"
                }
            }
        },
        {
            "departureDate": "2023-06-17T00:00:00.000Z",
            "departureAirportCode": "SCL",
            "arrivalAirportCode": "WAW",
            "flights": [
                {
                    "departureAirportCode": "SCL",
                    "departureDateTime": "2023-06-17T09:20:00.000Z",
                    "arrivalAirportCode": "YVR",
                    "arrivalDateTime": "2023-06-17T16:40:00.000Z",
                    "numberRace": "BA6533",
                    "seatNumbers": [
                        "9f",
                        "10f",
                        "11f",
                        "12f",
                        "13f"
                    ],
                    "freeSeats": 40,
                    "flightTime": 620
                },
                {
                    "departureAirportCode": "YVR",
                    "departureDateTime": "2023-06-17T19:00:00.000Z",
                    "arrivalAirportCode": "WAW",
                    "arrivalDateTime": "2023-06-18T17:10:00.000Z",
                    "numberRace": "AF4903",
                    "seatNumbers": [
                        "6b",
                        "7b",
                        "8b",
                        "9b",
                        "10b"
                    ],
                    "freeSeats": 41,
                    "flightTime": 790
                }
            ],
            "ticketsCost": {
                "adult": {
                    "totalCost": "989.39",
                    "fare": "643.10",
                    "tax": "346.29"
                },
                "children": {
                    "totalCost": "771.72",
                    "fare": "424.45",
                    "tax": "347.28"
                },
                "infant": {
                    "totalCost": "316.60",
                    "fare": "278.61",
                    "tax": "37.99"
                }
            }
        },
        {
            "departureDate": "2023-06-18T00:00:00.000Z",
            "departureAirportCode": "SCL",
            "arrivalAirportCode": "WAW",
            "flights": [
                {
                    "departureAirportCode": "SCL",
                    "departureDateTime": "2023-06-18T17:00:00.000Z",
                    "arrivalAirportCode": "YVR",
                    "arrivalDateTime": "2023-06-19T00:20:00.000Z",
                    "numberRace": "AF7018",
                    "seatNumbers": [
                        "25a",
                        "26a",
                        "27a",
                        "28a",
                        "29a"
                    ],
                    "freeSeats": 46,
                    "flightTime": 620
                },
                {
                    "departureAirportCode": "YVR",
                    "departureDateTime": "2023-06-19T01:50:00.000Z",
                    "arrivalAirportCode": "WAW",
                    "arrivalDateTime": "2023-06-20T00:00:00.000Z",
                    "numberRace": "SQ8923",
                    "seatNumbers": [
                        "29a",
                        "30a",
                        "31a",
                        "32a",
                        "33a"
                    ],
                    "freeSeats": 50,
                    "flightTime": 790
                }
            ],
            "ticketsCost": {
                "adult": {
                    "totalCost": "1018.75",
                    "fare": "662.19",
                    "tax": "356.56"
                },
                "children": {
                    "totalCost": "794.63",
                    "fare": "437.04",
                    "tax": "357.58"
                },
                "infant": {
                    "totalCost": "326.00",
                    "fare": "286.88",
                    "tax": "39.12"
                }
            }
        },
        {
            "departureDate": "2023-06-19T00:00:00.000Z",
            "departureAirportCode": "SCL",
            "arrivalAirportCode": "WAW",
            "flights": [
                {
                    "departureAirportCode": "SCL",
                    "departureDateTime": "2023-06-19T05:30:00.000Z",
                    "arrivalAirportCode": "YVR",
                    "arrivalDateTime": "2023-06-19T12:50:00.000Z",
                    "numberRace": "SQ9291",
                    "seatNumbers": [
                        "34c",
                        "35c",
                        "36c",
                        "37c",
                        "38c"
                    ],
                    "freeSeats": 59,
                    "flightTime": 620
                },
                {
                    "departureAirportCode": "YVR",
                    "departureDateTime": "2023-06-19T14:40:00.000Z",
                    "arrivalAirportCode": "WAW",
                    "arrivalDateTime": "2023-06-20T12:50:00.000Z",
                    "numberRace": "AA5658",
                    "seatNumbers": [
                        "38b",
                        "39b",
                        "40b",
                        "41b",
                        "42b"
                    ],
                    "freeSeats": 53,
                    "flightTime": 790
                }
            ],
            "ticketsCost": {
                "adult": {
                    "totalCost": "1051.67",
                    "fare": "683.59",
                    "tax": "368.08"
                },
                "children": {
                    "totalCost": "820.30",
                    "fare": "451.17",
                    "tax": "369.14"
                },
                "infant": {
                    "totalCost": "336.53",
                    "fare": "296.15",
                    "tax": "40.38"
                }
            }
        }
    ]
}`;

  airports = [
    {
      code: 'DUB',
      name: 'Dublin Airport',
      city: 'Dublin',
      country: 'Ireland',
      timezone: 1,
    },
    {
      code: 'WAW',
      name: 'Warsaw Chopin Airport',
      city: 'Warsaw',
      country: 'Poland',
      timezone: 2,
    },
    {
      code: 'SCL',
      name: 'Comodoro Arturo Merino Benítez International Airport',
      city: 'Santiago',
      country: 'Chile',
      timezone: -4,
    },
    {
      code: 'YVR',
      name: 'Vancouver International Airport',
      city: 'Vancouver',
      country: 'Canada',
      timezone: -7,
    },

  ];

  db = JSON.parse(this.jsonData);
  data: any = { ...this.db };

  hideCalendar: boolean = false;
  buttonText: string = 'Select';
  activeRoute: number = 2;


  responsiveOptions: IResponsiveOption[] = [
    {
      breakpoint: '768px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '440px',
      numVisible: 1,
      numScroll: 1,
    },
  ];

  ngOnInit() {
    const windowWidth = window.innerWidth;
    this.setActiveRoute(windowWidth);
    this.setInitialActive();
  }

  setInitialActive(): void {
    this.data.routes[this.activeRoute].isActive = true;
  }

  setActiveRoute(windowWidth: number): void {
    if (windowWidth < 440) {
      this.activeRoute = 0;
    } else if (windowWidth < 768) {
      this.activeRoute = 1;
    } else {
      this.activeRoute = 2;
    }
  }

  setActive(route: any): void {
    this.activeRoute = this.data.routes.findIndex((r: any) => r === route);
    this.data.routes.forEach((r: any) => r.isActive = false);
    route.isActive = true;
  }

  getColor(freeSeats: number, opacity = 1): string {
    if (freeSeats < 10) {
      return `rgba(179, 38, 30, ${opacity})`;
    } if (freeSeats < 50) {
      return `rgba(241, 201, 51, ${opacity})`;
    }
    return `rgba(46, 125, 50, ${opacity})`;
  }

  getAirportName(code: string): string {
    const airport = this.airports.find((a) => a.code === code);
    if (!airport) {
      return code;
    }
    const airportName = airport.name.replace(/International/g, '').replace(/Airport/g, '').trim();
    return airportName;
  }

  getAirportTimezone(code: string): string {
    const airport = this.airports.find((a) => a.code === code);
    if (!airport) {
      return '';
    }
    const airportZone = airport.timezone;
    const timeZoneSign = airportZone >= 0 ? '+' : '-';
    const timeZoneValue = Math.abs(airportZone);
    return timeZoneSign + timeZoneValue;
  }

  buttonClick(): void {
    this.hideCalendar = !this.hideCalendar;
    this.buttonText = this.hideCalendar ? 'Edit' : 'Select';
  }
}
