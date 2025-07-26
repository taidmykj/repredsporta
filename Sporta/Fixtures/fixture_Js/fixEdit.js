function edit(value) {
    if (value == "epl") {
        document.getElementById('year').innerHTML = 
        `<input class="year" value="2025-26" disabled/>
         <input class="date" value="Next game" disabled/>`;
        createFix();
    }
}


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
let matchIds = ["liver-12.afc-01.0.w1.150825.2200",  "aston-03.new-15.0.w1.160825.1430",   "bright-05.ful-10.0.w1.160825.1700",  "sun-17.west-19.0.w1.160825.1700","totte-18.burn-06.0.w1.160825.1700","wolf-20.city-13.0.w1.160825.1930","chel-07.cry-08.0.w1.170825.1600","forest-16.brent-04.0.w1.170825.1600","united-14.ars-02.0.w1.170825.1830","leeds-11.ever-09.0.w1.180825.2200"]

function getFixs(value, ofweek) {
  let weeks = [];
  for (let i = 0; i < 39; i++) {
    weeks.push([]);
  }
  for (let i = 1; i <= value.length; i++) {
    for (id of value) {
      if (id.includes(`w${i}`)) {
        weeks[i].push(id);
      }
    }
  }
  
  return weeks[ofweek];
}

function addFixs(id, teams) {
  let [id1, id2, place, week, date, time] = id.split('.');          
  let home = teams.find(team => team.id == id1 ).name;
  let away = teams.find(team => team.id == id2).name;
  let crtdate = `${date.slice(0, 2)} - ${date.slice(2, 4)} - 20${date.slice(4)}`;
  let team = {
    "name": home,
    "with": away, "date": crtdate, "time": time
  }
  
  return team;
}

let editor = `
    <div class="inner-fix" >
      <div class="display-match">
        <h4>English Premier League Fixtures -</h4><p style="color: #662;">Week 1</p>
      </div>
      <hr>`;

function createFix() {
  for (let i = 1; i < 39; i++) {
    for (let team of getFixs(matchIds, i)) {
      editor += 
      `
      <div class="display-match">
      <div class="match">${addFixs(team, Teams_EPL).name} vs ${addFixs(team, Teams_EPL).with}</div>
      <div class="time">${addFixs(team, Teams_EPL).date}</div><div class="hrs">${addFixs(team, Teams_EPL).time}hrs</div>
        </div>`;
    }
  }
  
  document.getElementById('edit').innerHTML = editor + `      
      <hr>
    </div>`;
}
