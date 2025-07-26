var Teams_EPL = [
  {
    name: "Bournemouth",
    fullname: "AFC Bournemouth",
    id: "afc-01",
    pos: 1, gp: 0, w: 0,d: 0, l: 0, gs: 0, gsa: 0, p: 0,      
    matches_id: []
  },  
  {
    name: "Arsenal", 
    fullname: "Arsenal",
    id: "ars-02",
    pos: 2, gp: 0, w: 0,d: 0, l: 0, gs: 0, gsa: 0, p: 0,
    matches_id: []
  },
  {
    name: "Aston Villa",
    fullname: "Aston Villa",
    id: "aston-03",
    pos: 3, gp: 0, w: 0,d: 0, l: 0, gs: 0, gsa: 0, p: 0,
    matches_id: []
  },
  
  {
    name: "Brentford",
    fullname: "Brentford",
    id: "brent-04",
    pos: 4, gp: 0, w: 0,d: 0, l: 0, gs: 0, gsa: 0, p: 0,
    matches_id: []
  },
  
  {
    name: "Brighton",
    fullname: "Brighton",
    id: "bright-05",
    pos: 5, gp: 0, w: 0,d: 0, l: 0, gs: 0, gsa: 0, p: 0,
    matches_id: []
  },
  
  {
    name: "Burnley",
    fullname: "Burnley",
    id: "burn-06",
    logo: "",
    pos: 6, gp: 0, w: 0,d: 0, l: 0, gs: 0, gsa: 0, p: 0,
    matches_id: []
  },
  
  {
    name: "Chelsea",
    fullname: "Chelsea FC",
    id: "chel-07",
    logo: "",
    pos: 7, gp: 0, w: 0,d: 0, l: 0, gs: 0, gsa: 0, p: 0,
    matches_id: []
  },
  
  {
    name: "Crystal Palace",
    fullname: "Crystal Palace",
    id: "cry-08",
    logo: "",
    pos: 8, gp: 0, w: 0,d: 0, l: 0, gs: 0, gsa: 0, p: 0,
    matches_id: []
  },
  
  {
    name: "Everton",
    fullname: "Everton",
    id: "ever-09",
    logo: "",
    pos: 9, gp: 0, w: 0,d: 0, l: 0, gs: 0, gsa: 0, p: 0,
    matches_id: []
  },
  
  {
    name: "Fulham",
    fullname: "Fulham",
    id: "ful-10",
    logo: "",
    pos: 10, gp: 0, w: 0,d: 0, l: 0, gs: 0, gsa: 0, p: 0,
    matches_id: []
  },
  
  {
    name: "Leeds United",
    fullname: "Leeds United",
    id: "leeds-11",
    logo: "",
    pos: 11, gp: 0, w: 0,d: 0, l: 0, gs: 0, gsa: 0, p: 0,
    matches_id: []
  },
  
  {
    name: "Liverpool",
    fullname: "Liverpool FC",
    id: "liver-12",
    logo: "",
    pos: 12, gp: 0, w: 0,d: 0, l: 0, gs: 0, gsa: 0, p: 0,
    matches_id: []
  },
  
  {
    name: "Man. City",
    fullname: "Manchester City",
    id: "city-13",
    logo: "",
    pos: 13, gp: 0, w: 0,d: 0, l: 0, gs: 0, gsa: 0, p: 0,
    matches_id: []
  },
  
  {
    name: "Man. United",
    fullname: "Manchester United",
    id: "united-14",
    logo: "",
    pos: 14, gp: 0, w: 0,d: 0, l: 0, gs: 0, gsa: 0, p: 0,
    matches_id: []
  },
  
  {
    name: "Newcastle",
    fullname: "Newcastle",
    id: "new-15",
    logo: "",
    pos: 15, gp: 0, w: 0,d: 0, l: 0, gs: 0, gsa: 0, p: 0,
    matches_id: []
  },
  
  {
    name: "Nottingham",
    fullname: "Nottingham Forest",
    id: "forest-16",
    logo: "",
    pos: 16, gp: 0, w: 0,d: 0, l: 0, gs: 0, gsa: 0, p: 0,
    matches_id: []
  },
  
  {
    name: "Sunderland",
    fullname: "Sunderland",
    id: "sun-17",
    logo: "",
    pos: 17, gp: 0, w: 0,d: 0, l: 0, gs: 0, gsa: 0, p: 0,
    matches_id: []
  },
  
  {
    name: "Tottenham",
    fullname: "Tottenham Hotspur",
    id: "totte-18",
    logo: "",
    pos: 18, gp: 0, w: 0,d: 0, l: 0, gs: 0, gsa: 0, p: 0,
    matches_id: []
  },
  
  {
    name: "Westham",
    fullname: "Westham United",
    id: "west-19",
    logo: "",
    pos: 19, gp: 0, w: 0,d: 0, l: 0, gs: 0, gsa: 0, p: 0,
    matches_id: []
  },
  
  {
    name: "Wolves",
    fullname: "Wolverhampton",
    id: "wolf-20",
    logo: "",
    pos: 20, gp: 0, w: 0,d: 0, l: 0, gs: 0, gsa: 0, p: 0,
    matches_id: []
  }
  
  ];
function getCrtDate(value) {
let [date, month, year] = value.split('-');
/*var datenow = new Date();
var day = datenow.getDay();
var date = datenow.getDate();
var month = datenow.getMonth();
var year = datenow.getYear() + 1900;*/
let dateT = new Date(`${year}-${month}-${date}`);
let day = dateT.getDay();
var def_Month = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
}

var def_Day = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
}

var emas = {
  7: 0,
  8: 1,
  9: 2,
  10: 3,
  11: 4,
  12: 5,
  13: 6,
  14: 7
}
var defD = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  return `${date}, ${def_Month[month - 1]} ${year} - ${def_Day[day]}`

}
function fixtureOf(id, value) {
  let array = id.split('.');
  let [team_ID, Oppteam_ID, place, week, date, time] = array;
  let taking = { 
    0: "home", 1: "away"
  }
  
  let team = {};
  
  team.name = Teams_EPL.find(team => team.id == team_ID).name;
  team.with = Teams_EPL.find(team => team.id == Oppteam_ID).name;
  team.at = taking[place];
  team.on = `Week ${week.slice(1)}`;
  team.date = `${date.slice(0,2)}-${date.slice(2, 4)}-20${date.slice(4)}`;
  team.time = `${time.slice(0,2)} : ${time.slice(2,4)}Hrs`;
  
  return team[value];

}

let matchIds = ["liver-12.afc-01.0.w1.150825.2200",  "aston-03.new-15.0.w1.160825.1430",   "bright-05.ful-10.0.w1.160825.1700",  "sun-17.west-19.0.w1.160825.1700","totte-18.burn-06.0.w1.160825.1700","wolf-20.city-13.0.w1.160825.1930","chel-07.cry-08.0.w1.170825.1600","forest-16.brent-04.0.w1.170825.1600","united-14.ars-02.0.w1.170825.1830","leeds-11.ever-09.0.w1.180825.2200"];
let weeks = [];
for (let i = 0; i < matchIds.length; i++) {
  weeks.push([]);
}
 
for (let values of matchIds) {
  for (let i = 1; i < weeks.length; i++) {
    if (values.includes(`w${i}`)) {
      weeks[i-1].push(values);
    }
  }
}


for(let week of weeks) {
  for (let id of week) {
    let gameDate = getCrtDate(fixtureOf(id, "date"));
    let homeT = fixtureOf(id, "name");
    let awayT = fixtureOf(id, "with");
    match(gameDate, homeT, awayT, weeks.indexOf(week) + 1);
  }
}

let editFixture = '<div class="inner-fix">';
window.onload = function match(dt,h,a, num) {
  editFixture += `
      <div class="display-match">
        <h4>English Premier League Fixtures -</h4><p style="color: #662;">Week ${num}</p>
      </div>
      <hr>
      <div class="display-match">
      <div class="match">${h} vs ${a}</div>
      <div class="time">${dt}</div>        
      </div>
      <hr>
    `;
  editFixture += '</div>'
  document.getElementById('edit').innerHTML = editFixture;
}