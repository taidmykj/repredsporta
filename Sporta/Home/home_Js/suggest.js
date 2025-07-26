
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
  
function search(valued) {
 // if (valued == " ") {remove()};
  document.getElementById('sugg').innerHTML = `<div class="suggest" id="sgs"></div>`;
  let same = []; let value = valued.toLowerCase();
  for (let team of Teams_EPL) {
    if (team.name.toLowerCase().includes(`${value}`) ||
    team.fullname.toLowerCase().includes(`${value}`) ||
    team.id.includes(`${value}`) || 
    team.pos == value) {
      same.push([team.fullname, team.id]);
    }
  }
  
 let edit = `<div class="value"> <span style="color: tomato;">${valued}</span> </div>`;
  for (let team of same) {
    edit += `<div class="value" onclick="window.location.href = '#${team[1]}';">→ ${team[0]}</div>`;
  }
  
  edit += '<!--button class="exit" onclick="remove()">Exit</button-->';
  
  if (same.length > 0) {
   document.getElementById('sgs').innerHTML = edit;
  }
  else {
    document.getElementById('sgs').innerHTML = 
       `<div class="no-result">Sorry~The club you
   are searching for is not yet registered in 
   our website <br>If you are the owner(s) or
   captain of this club, please find us on our <a href="">support</a>
   page to register it.</div>
    <!--button class="exit" onclick="remove()">Exit</button--->`;
  }

}

function remove() {
  document.getElementById('sugg').innerHTML = '';
}

