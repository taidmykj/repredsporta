let teams = [
  {
    name: "AFC Bournemouth", pos: 1, gp: 0, w: 0,
    d: 0, l: 0, gs: 0, gsa: 0, p: 0
  },  
  {
    name: "Arsenal", pos: 2, gp: 0, w: 0,
    d: 0, l: 0, gs: 0, gsa: 0, p: 0
  },
  {
    name: "Aston Villa", pos: 3, gp: 0, w: 0,
    d: 0, l: 0, gs: 0, gsa: 0, p: 0
  },
  
  {
    name: "Brentford", pos: 4, gp: 0, w: 0,
    d: 0, l: 0, gs: 0, gsa: 0, p: 0
  },
  
  {
    name: "Brighton", pos: 5, gp: 0, w: 0,
    d: 0, l: 0, gs: 0, gsa: 0, p: 0
  },
  
  {
    name: "Burnley", pos: 6, gp: 0, w: 0,
    d: 0, l: 0, gs: 0, gsa: 0, p: 0
  },
  
  {
    name: "Chelsea", pos: 7, gp: 0, w: 0,
    d: 0, l: 0, gs: 0, gsa: 0, p: 0
  },
  
  {
    name: "Crystal Palace", pos: 8, gp: 0, w: 0,
    d: 0, l: 0, gs: 0, gsa: 0, p: 0
  },

  {
    name: "Everton", pos: 9, gp: 0, w: 0,
    d: 0, l: 0, gs: 0, gsa: 0, p: 0
  },
  {
    name: "Fulham", pos: 10, gp: 0, w: 0,
    d: 0, l: 0, gs: 0, gsa: 0, p: 0
  },
  
  {
    name: "Leeds United", pos: 11, gp: 0, w: 0,
    d: 0, l: 0, gs: 0, gsa: 0, p: 0
  },
  
  {
    name: "Liverpool", pos: 12, gp: 0, w: 0,
    d: 0, l: 0, gs: 0, gsa: 0, p: 0
  },
  
  {
    name: "Man. C", pos: 13, gp: 0, w: 0,
    d: 0, l: 0, gs: 0, gsa: 0, p: 0
  },
  
  {
    name: "Man. U", pos: 14, gp: 0, w: 0,
    d: 0, l: 0, gs: 0, gsa: 0, p: 0
  },
  
  {
    name: "Newcastle", pos: 15, gp: 0, w: 0,
    d: 0, l: 0, gs: 0, gsa: 0, p: 0
  },
  {
    name: "Nottingham Forest", pos: 16, gp: 0, w: 0,
    d: 0, l: 0, gs: 0, gsa: 0, p: 0
  },
  
  {
    name: "Sunderland", pos: 17, gp: 0, w: 0,
    d: 0, l: 0, gs: 0, gsa: 0, p: 0
  },
  
  {
    name: "Tottenham Hotspur", pos: 18, gp: 0, w: 0,
    d: 0, l: 0, gs: 0, gsa: 0, p: 0
  },
  
  {
    name: "West Ham United", pos: 19, gp: 0, w: 0,
    d: 0, l: 0, gs: 0, gsa: 0, p: 0
  },
  
  {
    name: "Wolves", pos: 20, gp: 0, w: 0,
    d: 0, l: 0, gs: 0, gsa: 0, p: 0
  }
  ];

function edit() {
  let paste = `
    <div class="choose">
 
      <select class="select-leg">
        <option>English Premier League</option>
      </select>

    
  </div><table>
        <tr>
          <th>Pos.</th>
          <th class="team">Team</th>
          <th>GP</th>
          <th>W</th>
          <th>L</th>
          <th>D</th>
          <th>GS</th>
          <th>GSA</th>
          <th>GD</th>  
          <th>P</th>
        </tr><tr>`  ;
  
  for (let i = 1; i < 21; i++) {
    for (let team of teams) {
      if (team.pos == i) {
        paste += 
        `
        <td>${team.pos}.</td>
        <td>${team.name}</td>
        <td>${team.gp}</td>
        <td>${team.w}</td>
        <td>${team.d}</td>
        <td>${team.l}</td>
        <td>${team.gs}</td>
        <td>${team.gsa}</td>
        <td>${team.gs - team.gsa}</td>        
        <td>${team.p}</td>
        </tr>
        <tr>
        `;
      }
    }
  }
  
  return paste += `</tr></table>
  <div class="key-div">
  <p>Pos. - Position <span class="key-span">GP - Games played</span>  <span class="key-span">D - Draws </span></p><br>
  <p>W - Wins <span class="key-span">L - Loses </span> <span class="key-span">GS - Goals Scored </span></p><br><p>GSA - Goals Scored Against (By opponents)</p> <br>  
  <p>GD - Goal difference <span class="key-span">P - Points </span></p>
  </div>`;
}



