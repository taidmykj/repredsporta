let epl = [
  ['afc-01','Afc Bournemouth','',null],
  ['ars-02','Arsenal','','Mikel Arteta'],
  ['aston-03','Aston Villa','',null],
  ['brent-04','Brentford','',null],
  ['bright-05','Brighton','',null],
  ["burn-06",'Burnley', '',null],
  ['chel-07','Chelsea','',null],
  ['cry-08','Crystal Palace','',null],
  ['ever-09','Everton','',null],
  ['ful-10','Fulham','',null],
  ['leeds-11','Leeds United', '',null],
  ['liver-12','Liverpool','','Jorgen Klopp'],
  ['city-13','Manchester City',true,'Pep Gurdiola'],
  ['united-14','Manchester United',true,'Reuben Amorim'],
  ['new-15','Newcastle', '',null],
  ['forest-16','Nottingham Forest', '',null],
  ['sun-17','Sunderland', '',null],
  ['totte-18','Tottenham Hotspur', '',null],
  ['west-19','Westham', '',null],
  ['wolf-20','Wolverhampton', '',null]];

function getTeam(id, value) {
  let Team = {};
  for (let team of epl) {
    if (team.includes(id)) {
      Team.name = team[1];
      Team.logo = (team[2] == '' || team[2] == null) ? 'sporta.svg' : `${id}.svg`;
      Team.coach = (team[3] == '' || team[3] == null)? 'To be discussed' : team[3];             
    }
  }
  
  return Team[value];
}

function collect() {
  let edit = `<div class="display-match"><h4><u>Clubs playing English Premier League</u> <sup>20</sup></p></div>`
  for (let team of epl) {
    edit += `<div class="team-det" id="${team[0]}" onclick="blink('${team[0]}')">
        <img class="team-logo" alt="" src="../IMGs/svgs/ft/${getTeam(team[0], 'logo')}"/>
        <p class="club-name">${getTeam(team[0], 'name')}</p>
        <p class="coach-p">Coach: <span class="coach-name">${getTeam(team[0], 'coach')}</span></p>
      </div>
`;
  }
  
  document.getElementById('teams').innerHTML = edit;
}
collect();

function blink(id) {
  document.getElementById(`${id}`).style.backgroundColor = 'gray';
    setTimeout(function () {
      document.getElementById(`${id}`).style.backgroundColor = '#ccc';
    }, 100);
}


