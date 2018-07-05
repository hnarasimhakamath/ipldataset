function getTotalMatchWinnersPerYear() {
    var fs = require("fs");
    var csv = require("fast-csv");

    var matches = [];
    var totalMatchesPerYear = [];
    var winner = [];

    fs.createReadStream("matches.csv").pipe(csv()).on("data", function (data) {
        if (Number(data[1])) {
            totalMatchesPerYear.push(data[1]);
        }

        if (data[10]) {
            winner.push(data[10]);
        }


    }).on("end", function () {
        // getTotalMatchesYearwise(totalMatchesPerYear);
        // getMatchWinnerPerYear(totalMatchesPerYear, winner);
        var countMatches = {};
        for (var i = 0; i < totalMatchesPerYear.length; i++) {
            countMatches[totalMatchesPerYear[i]] = 1 + (countMatches[totalMatchesPerYear[i]] || 0);
        }
        console.log(JSON.stringify(countMatches));
    });
}

getTotalMatchWinnersPerYear();