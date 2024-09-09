"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hourFitsInterval(_a) {
    var startHour = _a.startHour, endHour = _a.endHour, targetHour = _a.targetHour;
    var check = false;
    if (endHour < startHour) {
        check = startHour <= targetHour + 24 && endHour + 24 >= targetHour + 24;
    }
    else {
        check = startHour <= targetHour && endHour >= targetHour;
    }
    return check ? "Yes" : "No";
}
var testlist = [["0", "23", "5"], ["23", "4", "5"], ["23", "5", "4"]];
for (var i = 0; i < testlist.length; i++) {
    var inputlist = testlist[i];
    console.log(hourFitsInterval({ startHour: Number(inputlist[0]), endHour: Number(inputlist[1]), targetHour: Number(inputlist[2]) }));
}
