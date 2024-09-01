//=========================
//Output
//=========================
function outputjson(){
    let smjsonobj = new SMJSON(players,teams,leagues,teamplayerlinks,leagueteamlinks,nations);
    let smjsonstring=JSON.stringify(smjsonobj);
    let filename = "sm23jsonmaker - " + getdatestring(new Date()) + ".json";
    
    downloadjson(smjsonstring, filename);
}

//=========================
//Data Organization
//=========================
function parseresult(result, type){
        let lines = result.split("\n");
        
        for(let i=1;i<lines.length;i++){
            let clm = lines[i].split("\t");
            
            for(let i=0;i<clm.length;i++){
                clm[i]=clm[i].trim();
            }
            
            switch(type){
                
                case "playernames":
                    let playernameentry=new PlayerName(clm[0], clm[1], clm[2]);
                    playernames.push(playernameentry);
                break;
                case "dcplayernames":
                    let dcplayernameentry=new PlayerName(clm[1], 900000, clm[0]);
                    dcplayernames.push(dcplayernameentry);
                break;
                case "editedplayernames":
                let editedplayernamesentry=new EditedPlayerName(clm[0],clm[1],clm[2],clm[3],clm[4]);
                editedplayernames.push(editedplayernamesentry);
                break;
                case "players_ng_db":
                    var playerid=clm[97];
                    var firstnameid=clm[35];
                    var lastnameid=clm[60];
                    var commonnameid=clm[116];
                    var jerseynameid=clm[113];
                    var nameset = getplayername(playerid, firstnameid, lastnameid, commonnameid, jerseynameid);
                    
                    var playerentry=new Player(nameset.firstname, nameset.lastname, nameset.commonname, nameset.jerseyname,clm[0],clm[1],clm[2],clm[3],clm[4],clm[5],clm[6],clm[7],clm[8],clm[9],clm[10],clm[11],clm[12],clm[13],clm[14],clm[15],clm[16],clm[17],clm[18],clm[19],clm[20],clm[21],clm[22],clm[23],clm[24],clm[25],clm[26],clm[27],clm[28],clm[29],clm[30],clm[31],clm[32],clm[33],clm[34],clm[36],clm[37],clm[38],clm[39],clm[40],clm[41],clm[42],clm[43],clm[44],clm[45],clm[46],clm[47],clm[48],clm[49],clm[50],clm[51],clm[52],clm[53],clm[54],clm[55],clm[56],clm[57],clm[58],clm[59],clm[61],clm[62],clm[63],clm[64],clm[65],clm[66],clm[67],clm[68],clm[69],clm[70],clm[71],clm[72],clm[73],clm[74],clm[75],clm[76],clm[77],clm[78],clm[79],clm[80],clm[81],clm[82],clm[83],clm[84],clm[85],clm[86],clm[87],clm[88],clm[89],clm[90],clm[91],clm[92],clm[93],clm[94],clm[95],clm[96],clm[97],clm[98],clm[99],clm[100],clm[101],clm[102],clm[103],clm[104],clm[105],clm[106],clm[107],clm[108],clm[109],clm[110],clm[111],clm[112],clm[114],clm[115],clm[117],clm[118],clm[119],clm[120],clm[121],clm[122],clm[123],clm[124],clm[125],clm[126]);
                    players.push(playerentry);
                break;
                case "players_squad":
                    var playerid=clm[99];
                    var firstnameid=clm[0];
                    var lastnameid=clm[1];
                    var commonnameid=clm[3];
                    var jerseynameid=clm[2];
                    var nameset = getplayername(playerid, firstnameid, lastnameid, commonnameid, jerseynameid);
                    
                    var playerentry=new Player(nameset.firstname, nameset.lastname, nameset.commonname, nameset.jerseyname,clm[6],clm[7],clm[8],clm[9],clm[10],clm[11],clm[12],clm[13],clm[14],clm[15],clm[16],clm[17],clm[18],clm[19],clm[20],clm[21],clm[22],clm[23],clm[24],clm[25],clm[26],clm[27],clm[28],clm[29],clm[30],clm[31],clm[32],clm[33],clm[34],clm[35],clm[36],clm[37],clm[38],clm[39],clm[40],clm[41],clm[42],clm[43],clm[44],clm[45],clm[46],clm[47],clm[48],clm[49],clm[50],clm[51],clm[52],clm[53],clm[54],clm[55],clm[56],clm[57],clm[58],clm[59],clm[60],clm[61],clm[62],clm[63],clm[64],clm[65],clm[66],clm[67],clm[68],clm[69],clm[70],clm[71],clm[72],clm[73],clm[74],clm[75],clm[76],clm[77],clm[78],clm[79],clm[80],clm[81],clm[82],clm[83],clm[84],clm[85],clm[86],clm[87],clm[88],clm[89],clm[90],clm[91],clm[92],clm[93],clm[94],clm[95],clm[96],clm[4],clm[97],clm[98],clm[99],clm[100],clm[101],clm[102],clm[103],clm[104],clm[5],clm[105],clm[106],clm[107],clm[108],clm[109],clm[110],clm[111],clm[112],clm[113],clm[114],clm[115],clm[116],clm[117],clm[118],clm[119],clm[120],clm[121],clm[122],clm[123],clm[124],clm[125],clm[126]);
                    players.push(playerentry);
                break;
                case "teams":
                    let teamentry = new Team(clm[0],clm[1],clm[2],clm[3],clm[4],clm[5],clm[6],clm[7],clm[8],clm[9],clm[10],clm[11],clm[12],clm[13],clm[14],clm[15],clm[16],clm[17],clm[18],clm[19],clm[20],clm[21],clm[22],clm[23],clm[24],clm[25],clm[26],clm[27],clm[28],clm[29],clm[30],clm[31],clm[32],clm[33],clm[34],clm[35],clm[36],clm[37],clm[38],clm[39],clm[40],clm[41],clm[42],clm[43],clm[44],clm[45],clm[46],clm[47],clm[48],clm[49],clm[50],clm[51],clm[52],clm[53],clm[54],clm[55],clm[56],clm[57],clm[58],clm[59],clm[60],clm[61],clm[62],clm[63],clm[64],clm[65],clm[66],clm[67],clm[68],clm[69],clm[70],clm[71],clm[72],clm[73],clm[74],clm[75],clm[76],clm[77],clm[78],clm[79],clm[80],clm[81],clm[82],clm[83],clm[84],clm[85],clm[86],clm[87],clm[88],clm[89],clm[90],clm[91],clm[92],clm[93],clm[94],clm[95],clm[96],clm[97],clm[98],clm[99],clm[100],clm[101],clm[102],clm[103]);
                    teams.push(teamentry);
                break;
                case "teamplayerlinks":
                let teamplayerlinksentry = new TeamPlayerLink(clm[0],clm[1],clm[2],clm[3],clm[4],clm[5],clm[6],clm[7],clm[8],clm[9],clm[10],clm[11],clm[12],clm[13],clm[14],clm[15]);
                teamplayerlinks.push(teamplayerlinksentry);
                break;
                case "leagues":
                let leagueentry=new League(clm[0],clm[1],clm[2],clm[3],clm[4],clm[5],clm[6],clm[7],clm[8],clm[9],clm[10],clm[11]);
                leagues.push(leagueentry);
                break;
                case "leagueteamlinks":
                let leagueteamlinkentry=new LeagueTeamLink(clm[0],clm[1],clm[2],clm[3],clm[4],clm[5],clm[6],clm[7],clm[8],clm[9],clm[10],clm[11],clm[12],clm[13],clm[14],clm[15],clm[16],clm[17],clm[18],clm[19],clm[20],clm[21],clm[22],clm[23],clm[24],clm[25],clm[26],clm[27],clm[28],clm[29],clm[30],clm[31],clm[32],clm[33]);
                leagueteamlinks.push(leagueteamlinkentry);
                break;
                case "nations":
                let nationentry=new Nation(clm[0],clm[1],clm[2],clm[3],clm[4],clm[5],clm[6],clm[7]);
                nations.push(nationentry);
                break;
            }
        }
}

function getplayername(playerid, firstnameid, lastnameid, commonnameid, jerseynameid){
    
    let firstname="";
    let lastname="";
    let commonname="";
    let jerseyname="";
    
    for(let i=0;i<playernames.length; i++){
        if(playernames[i].id==firstnameid){firstname=playernames[i].name;}
        if(playernames[i].id==lastnameid){lastname=playernames[i].name;}
        if(playernames[i].id==commonnameid){commonname=playernames[i].name;}
        if(playernames[i].id==jerseynameid){jerseyname=playernames[i].name;}
    }
    
    for(let i=0;i<dcplayernames.length; i++){
        if(dcplayernames[i].id==firstnameid){firstname=dcplayernames[i].name;}
        if(dcplayernames[i].id==lastnameid){lastname=dcplayernames[i].name;}
        if(dcplayernames[i].id==commonnameid){commonname=dcplayernames[i].name;}
        if(dcplayernames[i].id==jerseynameid){jerseyname=dcplayernames[i].name;}
    }
    
    for(let i=0;i<editedplayernames.length; i++){
        if(editedplayernames[i].playerid==playerid){
            firstname=editedplayernames[i].firstname;
            lastname=editedplayernames[i].lastname;
            commonname=editedplayernames[i].commonname;
            jerseyname=editedplayernames[i].jerseyname;
        }
    }
    
    return {
        firstname: firstname,
        lastname: lastname,
        commonname: commonname,
        jerseyname: jerseyname
    }
    
}

const getbasefile = (url, type) =>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = () =>{
        parseresult(xhr.response, type);
    }
    xhr.send();
}

function fileuploaded(type){

    let file=null;
    switch(type){
    case "playernames":
    file=document.getElementById("playernamesfile").files[0];
    break;
    case "dcplayernames":
    file=document.getElementById("dcplayernamesfile").files[0];
    break;
    case "players":
    file=document.getElementById("playersfile").files[0];
    if(playersdesignationcheckbox.checked){type="players_squad";}else{type="players_ng_db";}
    break;
    case "editedplayernames":
    file=document.getElementById("editedplayernamesfile").files[0];
    break;
    case "teams":
    file=document.getElementById("teamsfile").files[0];
    break;
    case "teamplayerlinks":
    file=document.getElementById("teamplayerlinksfile").files[0];
    break;
    case "leagueteamlinks":
    file=document.getElementById("leagueteamlinksfile").files[0];
    break;
    case "nations":
    file=document.getElementById("nationsfile").files[0];
    break;
    
    }
    
    loadtxt(type, file);
}

function loadtxt(type, file){

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload=function(){
    let results = reader.result;
    let lines = results.split('\n');
    
    let cleanlines=[];
    for (let i=0;i<lines.length;i++){
        cleanlines.push(cleanline(lines[i]));
    }
    
    processlinesfromupload(type, cleanlines);
    }
}

function cleanline(line){
    for(let i=0;i<line.length;i++){
        line[i]=line[i].trim();
    }
}

function processlinesfromupload(type, lines){

    switch(type){
        case "playernames":
            playernames=[];
            for(let i=1;i<lines.length;i++){
        let thisline = lines[i].split('\t');
                
          if(thisline[2]===undefined){}else{
          let newname = new PlayerName(thisline[0], thisline[1], thisline[2].trim());
          if(newname.id!="nameid"&&newname.id!=""&&(!(Number.isNaN(newname.id)))){
          playernames.push(newname);
          }
                }
            }
        break;
        case "players_ng_db":
        players=[];
        for(let i=1;i<lines.length;i++){
        let thisline = lines[i].split('\t');
        var playerid=thisline[97];
        var firstnameid=thisline[35];
        var lastnameid=thisline[60];
        var commonnameid=thisline[116];
        var jerseynameid=thisline[113];
        var nameset = getplayername(playerid, firstnameid, lastnameid, commonnameid, jerseynameid);
                
        let newplayer=new Player(nameset.firstname, nameset.lastname, nameset.commonname, nameset.jerseyname,thisline[0],thisline[1],thisline[2],thisline[3],thisline[4],thisline[5],thisline[6],thisline[7],thisline[8],thisline[9],thisline[10],thisline[11],thisline[12],thisline[13],thisline[14],thisline[15],thisline[16],thisline[17],thisline[18],thisline[19],thisline[20],thisline[21],thisline[22],thisline[23],thisline[24],thisline[25],thisline[26],thisline[27],thisline[28],thisline[29],thisline[30],thisline[31],thisline[32],thisline[33],thisline[34],thisline[36],thisline[37],thisline[38],thisline[39],thisline[40],thisline[41],thisline[42],thisline[43],thisline[44],thisline[45],thisline[46],thisline[47],thisline[48],thisline[49],thisline[50],thisline[51],thisline[52],thisline[53],thisline[54],thisline[55],thisline[56],thisline[57],thisline[58],thisline[59],thisline[61],thisline[62],thisline[63],thisline[64],thisline[65],thisline[66],thisline[67],thisline[68],thisline[69],thisline[70],thisline[71],thisline[72],thisline[73],thisline[74],thisline[75],thisline[76],thisline[77],thisline[78],thisline[79],thisline[80],thisline[81],thisline[82],thisline[83],thisline[84],thisline[85],thisline[86],thisline[87],thisline[88],thisline[89],thisline[90],thisline[91],thisline[92],thisline[93],thisline[94],thisline[95],thisline[96],thisline[97],thisline[98],thisline[99],thisline[100],thisline[101],thisline[102],thisline[103],thisline[104],thisline[105],thisline[106],thisline[107],thisline[108],thisline[109],thisline[110],thisline[111],thisline[112],thisline[114],thisline[115],thisline[117],thisline[118],thisline[119],thisline[120],thisline[121],thisline[122],thisline[123],thisline[124],thisline[125],thisline[126]);
        players.push(newplayer);
        }
        break;
        case "players_squad":
        players=[];
        for(let i=1;i<lines.length;i++){
        let thisline = lines[i].split('\t');
        var playerid=thisline[99];
        var firstnameid=thisline[0];
        var lastnameid=thisline[1];
        var commonnameid=thisline[3];
        var jerseynameid=thisline[2];
        var nameset = getplayername(playerid, firstnameid, lastnameid, commonnameid, jerseynameid);
                
        let newplayer=new Player(nameset.firstname, nameset.lastname, nameset.commonname, nameset.jerseyname,thisline[6],thisline[7],thisline[8],thisline[9],thisline[10],thisline[11],thisline[12],thisline[13],thisline[14],thisline[15],thisline[16],thisline[17],thisline[18],thisline[19],thisline[20],thisline[21],thisline[22],thisline[23],thisline[24],thisline[25],thisline[26],thisline[27],thisline[28],thisline[29],thisline[30],thisline[31],thisline[32],thisline[33],thisline[34],thisline[35],thisline[36],thisline[37],thisline[38],thisline[39],thisline[40],thisline[41],thisline[42],thisline[43],thisline[44],thisline[45],thisline[46],thisline[47],thisline[48],thisline[49],thisline[50],thisline[51],thisline[52],thisline[53],thisline[54],thisline[55],thisline[56],thisline[57],thisline[58],thisline[59],thisline[60],thisline[61],thisline[62],thisline[63],thisline[64],thisline[65],thisline[66],thisline[67],thisline[68],thisline[69],thisline[70],thisline[71],thisline[72],thisline[73],thisline[74],thisline[75],thisline[76],thisline[77],thisline[78],thisline[79],thisline[80],thisline[81],thisline[82],thisline[83],thisline[84],thisline[85],thisline[86],thisline[87],thisline[88],thisline[89],thisline[90],thisline[91],thisline[92],thisline[93],thisline[94],thisline[95],thisline[96],thisline[4],thisline[97],thisline[98],thisline[99],thisline[100],thisline[101],thisline[102],thisline[103],thisline[104],thisline[5],thisline[105],thisline[106],thisline[107],thisline[108],thisline[109],thisline[110],thisline[111],thisline[112],thisline[113],thisline[114],thisline[115],thisline[116],thisline[117],thisline[118],thisline[119],thisline[120],thisline[121],thisline[122],thisline[123],thisline[124],thisline[125],thisline[126]);
        players.push(newplayer);
        }
        break;
        case "dcplayernames":
            dcplayernames=[];
            for(let i=1;i<lines.length;i++){
        let thisline = lines[i].split('\t');
          if(thisline[1]===undefined||thisline[0]=="name"){}else{
          let id = thisline[1].replace(/(\r\n|\n|\r)/gm, "").trim();      		
                let newname = new PlayerName(thisline[1].trim(), 900000, thisline[0]);
          dcplayernames.push(newname);
                }
            }
        break;
        case "editedplayernames":
        editedplayernames=[];
        for(let i=1;i<lines.length;i++){
        let thisline = lines[i].split('\t');
            let neweditedplayername = new EditedPlayerName(thisline[0],thisline[1],thisline[2],thisline[3],thisline[4]);	
            editedplayernames.push(neweditedplayername);
        }
        break;
        case "teams":
        teams=[];
        for(let i=1;i<lines.length;i++){
        let thisline = lines[i].split('\t');
            let newteam = new Team(thisline[0],thisline[1],thisline[2],thisline[3],thisline[4],thisline[5],thisline[6],thisline[7],thisline[8],thisline[9],thisline[10],thisline[11],thisline[12],thisline[13],thisline[14],thisline[15],thisline[16],thisline[17],thisline[18],thisline[19],thisline[20],thisline[21],thisline[22],thisline[23],thisline[24],thisline[25],thisline[26],thisline[27],thisline[28],thisline[29],thisline[30],thisline[31],thisline[32],thisline[33],thisline[34],thisline[35],thisline[36],thisline[37],thisline[38],thisline[39],thisline[40],thisline[41],thisline[42],thisline[43],thisline[44],thisline[45],thisline[46],thisline[47],thisline[48],thisline[49],thisline[50],thisline[51],thisline[52],thisline[53],thisline[54],thisline[55],thisline[56],thisline[57],thisline[58],thisline[59],thisline[60],thisline[61],thisline[62],thisline[63],thisline[64],thisline[65],thisline[66],thisline[67],thisline[68],thisline[69],thisline[70],thisline[71],thisline[72],thisline[73],thisline[74],thisline[75],thisline[76],thisline[77],thisline[78],thisline[79],thisline[80],thisline[81],thisline[82],thisline[83],thisline[84],thisline[85],thisline[86],thisline[87],thisline[88],thisline[89],thisline[90],thisline[91],thisline[92],thisline[93],thisline[94],thisline[95],thisline[96],thisline[97],thisline[98],thisline[99],thisline[100],thisline[101],thisline[102],thisline[103]);	
            if(thisline[0]!="assetid"){
                teams.push(newteam);
            }
        }
        break;
        case "teamplayerlinks":
        teamplayerlinks=[];
        for(let i=1;i<lines.length;i++){
        let thisline = lines[i].split('\t');
            if(thisline[15]===undefined){}else{
            let reds=thisline[15].trim();
            let newtplink = new TeamPlayerLink(thisline[0],thisline[1],thisline[2],thisline[3],thisline[4],thisline[5],thisline[6],thisline[7],thisline[8],thisline[9],thisline[10],thisline[11],thisline[12],thisline[13],thisline[14],reds);	
            if(thisline[0]!="leaguegoals"){
                teamplayerlinks.push(newtplink);
            }
            }
        }
        break;
        case "leagueteamlinks":
        leagueteamlinks=[];
        for(let i=1;i<lines.length;i++){
        let thisline = lines[i].split('\t');
            if(thisline[33]===undefined){}else{
            let lastcolumn=thisline[33].trim();
            let newltlink = new LeagueTeamLink(thisline[0],thisline[1],thisline[2],thisline[3],thisline[4],thisline[5],thisline[6],thisline[7],thisline[8],thisline[9],thisline[10],thisline[11],thisline[12],thisline[13],thisline[14],thisline[15],thisline[16],thisline[17],thisline[18],thisline[19],thisline[20],thisline[21],thisline[22],thisline[23],thisline[24],thisline[25],thisline[26],thisline[27],thisline[28],thisline[29],thisline[30],thisline[31],thisline[32],lastcolumn);
            
                leagueteamlinks.push(newltlink);
            }
        }
        break;
        case "nations":
        nations=[];
        for(let i=1;i<lines.length;i++){
        let thisline = lines[i].split('\t');
            if(thisline[7]===undefined){}else{
            let lastcolumn=thisline[7].trim();
            let newnation = new Nation(thisline[0],thisline[1],thisline[2],thisline[3],thisline[4],thisline[5],thisline[6],lastcolumn);
            nations.push(newnation);
            }
        }
        break;
}
}

function downloadjson(json,filename){

    var link = window.document.createElement("a");
    link.setAttribute("href", "data:text/json;charset=utf-8,%EF%BB%BF" + encodeURI(json));
    link.setAttribute("download", filename);
    link.click();
}

function getdatestring(date) {
  var year = date.getFullYear();
  var month = getmonthtxt(date.getMonth()+1);
    var day = date.getDate();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    
    if(hours<10){hours="0" + hours;}
    if(minutes<10){minutes="0" + minutes;}
    
  return String(day + " " + month + " " + year + " " + hours + "" + minutes); // Leading zeros for mm and dd
}

function getmonthtxt(monthval){
    switch(monthval){
        case 1: return "January";
        case 2: return "February";
        case 3: return "March";
        case 4: return "April";
        case 5: return "May";
        case 6: return "June";
        case 7: return "July";
        case 8: return "August";
        case 9: return "September";
        case 10: return "October";
        case 11: return "November";
        case 12: return "December";
    }
}

//=========================
//User Defined Classes
//=========================
class SMJSON{
constructor(players,teams,leagues, teamplayerlinks,leagueteamlinks,nations){
this.players=players;
this.teams=teams;
this.leagues=leagues;
this.teamplayerlinks=teamplayerlinks;
this.leagueteamlinks=leagueteamlinks;
this.nations=nations;
}
}
class PlayerName{
    constructor(id, commentaryid, name){
        this.id=id;
        this.commentaryid=commentaryid;
        this.name=name;
    }
}
class EditedPlayerName{
constructor(firstname, commonname, playerjerseyname, surname, playerid){
this.firstnameid=firstname;
this.commonname=commonname;
this.playerjerseyname=playerjerseyname;
this.surname=surname;
this.playerid=playerid;
}
}
class Team{
constructor(assetid,teamcolor1g,teamcolor1r,clubworth,teamcolor2b,goalnetstanchioncolor2g,teamcolor2r,foundationyear,goalnetstanchioncolor2r,teamcolor3r,goalnetstanchioncolor1b,teamcolor1b,opponentweakthreshold,latitude,teamcolor3g,opponentstrongthreshold,goalnetstanchioncolor2b,goalnetstanchioncolor1r,teamcolor2g,goalnetstanchioncolor1g,teamname,teamcolor3b,presassetone,powid,defensivestyle,hassubstitutionboard,rightfreekicktakerid,flamethrowercannon,domesticprestige,genericint2,defensivedepth,hasvikingclap,jerseytype,chancecreation,pitchcolor,pitchwear,popularity,hastifo,presassettwo,teamstadiumcapacity,stadiumgoalnetstyle,iscompetitionscarfenabled,cityid,defensivewidth,rivalteam,playsurfacetype,isbannerenabled,midfieldrating,stadiummowpattern_code,matchdayoverallrating,matchdaymidfieldrating,attackrating,playersinboxcorner,longitude,buildupplay,matchdaydefenserating,hasstandingcrowd,favoriteteamsheetid,defenserating,iscompetitionpoleflagenabled,skinnyflags,uefa_consecutive_wins,longkicktakerid,trait1vweak,iscompetitioncrowdcardsenabled,rightcornerkicktakerid,uefa_cl_wins,domesticcups,ethnicity,leftcornerkicktakerid,youthdevelopment,teamid,uefa_el_wins,trait1vequal,numtransfersin,playersinboxfk,stanchionflamethrower,stadiumgoalnetpattern,captainid,offensivestyle,personalityid,playersinboxcross,prev_el_champ,leftfreekicktakerid,leaguetitles,genericbanner,crowdregion,uefa_uecl_wins,overallrating,ballid,offensivewidth,profitability,utcoffset,penaltytakerid,pitchlinecolor,freekicktakerid,crowdskintonecode,internationalprestige,haslargeflag,trainingstadium,form,genericint1,trait1vstrong,matchdayattackrating)
{this.teamcolor1b=teamcolor1b;this.teamcolor1g=teamcolor1g;this.teamcolor1r=teamcolor1r;this.teamcolor2b=teamcolor2b;this.teamcolor2g=teamcolor2g;this.teamcolor2r=teamcolor2r;this.teamcolor3b=teamcolor3b;this.teamcolor3g=teamcolor3g;this.teamcolor3r=teamcolor3r;this.assetid=assetid;this.cityid=cityid;this.clubworth=clubworth;this.crowdregion=crowdregion;this.foundationyear=foundationyear;this.latitude=latitude;this.profitability=profitability;this.teamid=teamid;this.teamname=teamname;this.utcoffset=utcoffset;this.crowdskintonecode=crowdskintonecode;this.ethnicity=ethnicity;this.genericbanner=genericbanner;this.haslargeflag=haslargeflag;this.hasstandingcrowd=hasstandingcrowd;this.hasvikingclap=hasvikingclap;this.isbannerenabled=isbannerenabled;this.iscompetitioncrowdcardsenabled=iscompetitioncrowdcardsenabled;this.iscompetitionpoleflagenabled=iscompetitionpoleflagenabled;this.iscompetitionscarfenabled=iscompetitionscarfenabled;this.skinnyflags=skinnyflags;this.goalnetstanchioncolor1b=goalnetstanchioncolor1b;this.goalnetstanchioncolor1g=goalnetstanchioncolor1g;this.goalnetstanchioncolor1r=goalnetstanchioncolor1r;this.goalnetstanchioncolor2b=goalnetstanchioncolor2b;this.goalnetstanchioncolor2g=goalnetstanchioncolor2g;this.goalnetstanchioncolor2r=goalnetstanchioncolor2r;this.stadiumgoalnetpattern=stadiumgoalnetpattern;this.ballid=ballid;this.flamethrowercannon=flamethrowercannon;this.hassubstitutionboard=hassubstitutionboard;this.stanchionflamethrower=stanchionflamethrower;this.opponentstrongthreshold=opponentstrongthreshold;this.opponentweakthreshold=opponentweakthreshold;this.rivalteam=rivalteam;this.genericint1=genericint1;this.genericint2=genericint2;this.hastifo=hastifo;this.powid=powid;this.presassetone=presassetone;this.presassettwo=presassettwo;this.personalityid=personalityid;this.trait1vequal=trait1vequal;this.trait1vstrong=trait1vstrong;this.trait1vweak=trait1vweak;this.youthdevelopment=youthdevelopment;this.longitude=longitude;this.pitchcolor=pitchcolor;this.pitchlinecolor=pitchlinecolor;this.pitchwear=pitchwear;this.playsurfacetype=playsurfacetype;this.stadiummowpattern_code=stadiummowpattern_code;this.captainid=captainid;this.freekicktakerid=freekicktakerid;this.jerseytype=jerseytype;this.leftcornerkicktakerid=leftcornerkicktakerid;this.leftfreekicktakerid=leftfreekicktakerid;this.longkicktakerid=longkicktakerid;this.penaltytakerid=penaltytakerid;this.rightcornerkicktakerid=rightcornerkicktakerid;this.rightfreekicktakerid=rightfreekicktakerid;this.buildupplay=buildupplay;this.chancecreation=chancecreation;this.defensivedepth=defensivedepth;this.defensivestyle=defensivestyle;this.defensivewidth=defensivewidth;this.favoriteteamsheetid=favoriteteamsheetid;this.offensivestyle=offensivestyle;this.offensivewidth=offensivewidth;this.playersinboxcorner=playersinboxcorner;this.playersinboxcross=playersinboxcross;this.playersinboxfk=playersinboxfk;this.attackrating=attackrating;this.defenserating=defenserating;this.form=form;this.matchdayattackrating=matchdayattackrating;this.matchdaydefenserating=matchdaydefenserating;this.matchdaymidfieldrating=matchdaymidfieldrating;this.matchdayoverallrating=matchdayoverallrating;this.midfieldrating=midfieldrating;this.overallrating=overallrating;this.domesticcups=domesticcups;this.leaguetitles=leaguetitles;this.numtransfersin=numtransfersin;this.prev_el_champ=prev_el_champ;this.uefa_cl_wins=uefa_cl_wins;this.uefa_consecutive_wins=uefa_consecutive_wins;this.uefa_el_wins=uefa_el_wins;this.uefa_uecl_wins=uefa_uecl_wins;this.domesticprestige=domesticprestige;this.internationalprestige=internationalprestige;this.popularity=popularity;this.stadiumgoalnetstyle=stadiumgoalnetstyle;this.teamstadiumcapacity=teamstadiumcapacity;this.trainingstadium=trainingstadium}
}
class Player{
        constructor(firstname, lastname, commonname, jerseyname, haircolorcode,facialhairtypecode,curve,jerseystylecode,agility,tattooback,accessorycode4,gksavetype,positioning,tattooleftarm,hairtypecode,standingtackle,preferredposition3,longpassing,penalties,animfreekickstartposcode,isretiring,longshots,gkdiving,interceptions,shoecolorcode2,crossing,potential,gkreflexes,finishingcode1,reactions,composure,vision,contractvaliduntil,finishing,dribbling,slidingtackle,accessorycode3,accessorycolourcode1,headtypecode,driref,sprintspeed,height,hasseasonaljersey,tattoohead,preferredposition2,strength,shoetypecode,birthdate,preferredposition1,tattooleftleg,ballcontrol,phypos,shotpower,trait1,socklengthcode,weight,hashighqualityhead,gkglovetypecode,tattoorightarm,balance,gender,headassetid,gkkicking,defspe,internationalrep,shortpassing,freekickaccuracy,skillmoves,faceposerpreset,usercaneditname,avatarpomid,attackingworkrate,finishingcode2,aggression,acceleration,paskic,headingaccuracy,iscustomized,eyebrowcode,runningcode2,modifier,gkhandling,eyecolorcode,jerseysleevelengthcode,accessorycolourcode3,accessorycode1,playerjointeamdate,headclasscode,defensiveworkrate,tattoofront,nationality,preferredfoot,sideburnscode,weakfootabilitytypecode,jumping,skintypecode,personality,gkkickstyle,stamina,playerid,accessorycolourcode4,gkpositioning,headvariation,skillmoveslikelihood,trait2,shohan,skintonecode,shortstyle,overallrating,smallsidedshoetypecode,emotion,runstylecode,jerseyfit,accessorycode2,shoedesigncode,shoecolorcode1,hairstylecode,bodytypecode,animpenaltiesstartposcode,pacdiv,defensiveawareness,runningcode1,preferredposition4,volleys,accessorycolourcode2,tattoorightleg,facialhaircolorcode)
{this.firstname=firstname;this.lastname=lastname;this.commonname=commonname;this.jerseyname=jerseyname;this.haircolorcode=haircolorcode;this.facialhairtypecode=facialhairtypecode;this.curve=curve;this.jerseystylecode=jerseystylecode;this.agility=agility;this.tattooback=tattooback;this.accessorycode4=accessorycode4;this.gksavetype=gksavetype;this.positioning=positioning;this.tattooleftarm=tattooleftarm;this.hairtypecode=hairtypecode;this.standingtackle=standingtackle;this.preferredposition3=preferredposition3;this.longpassing=longpassing;this.penalties=penalties;this.animfreekickstartposcode=animfreekickstartposcode;this.isretiring=isretiring;this.longshots=longshots;this.gkdiving=gkdiving;this.interceptions=interceptions;this.shoecolorcode2=shoecolorcode2;this.crossing=crossing;this.potential=potential;this.gkreflexes=gkreflexes;this.finishingcode1=finishingcode1;this.reactions=reactions;this.composure=composure;this.vision=vision;this.contractvaliduntil=contractvaliduntil;this.finishing=finishing;this.dribbling=dribbling;this.slidingtackle=slidingtackle;this.accessorycode3=accessorycode3;this.accessorycolourcode1=accessorycolourcode1;this.headtypecode=headtypecode;this.driref=driref;this.sprintspeed=sprintspeed;this.height=height;this.hasseasonaljersey=hasseasonaljersey;this.tattoohead=tattoohead;this.preferredposition2=preferredposition2;this.strength=strength;this.shoetypecode=shoetypecode;this.birthdate=birthdate;this.preferredposition1=preferredposition1;this.tattooleftleg=tattooleftleg;this.ballcontrol=ballcontrol;this.phypos=phypos;this.shotpower=shotpower;this.trait1=trait1;this.socklengthcode=socklengthcode;this.weight=weight;this.hashighqualityhead=hashighqualityhead;this.gkglovetypecode=gkglovetypecode;this.tattoorightarm=tattoorightarm;this.balance=balance;this.gender=gender;this.headassetid=headassetid;this.gkkicking=gkkicking;this.defspe=defspe;this.internationalrep=internationalrep;this.shortpassing=shortpassing;this.freekickaccuracy=freekickaccuracy;this.skillmoves=skillmoves;this.faceposerpreset=faceposerpreset;this.usercaneditname=usercaneditname;this.avatarpomid=avatarpomid;this.attackingworkrate=attackingworkrate;this.finishingcode2=finishingcode2;this.aggression=aggression;this.acceleration=acceleration;this.paskic=paskic;this.headingaccuracy=headingaccuracy;this.iscustomized=iscustomized;this.eyebrowcode=eyebrowcode;this.runningcode2=runningcode2;this.modifier=modifier;this.gkhandling=gkhandling;this.eyecolorcode=eyecolorcode;this.jerseysleevelengthcode=jerseysleevelengthcode;this.accessorycolourcode3=accessorycolourcode3;this.accessorycode1=accessorycode1;this.playerjointeamdate=playerjointeamdate;this.headclasscode=headclasscode;this.defensiveworkrate=defensiveworkrate;this.tattoofront=tattoofront;this.nationality=nationality;this.preferredfoot=preferredfoot;this.sideburnscode=sideburnscode;this.weakfootabilitytypecode=weakfootabilitytypecode;this.jumping=jumping;this.skintypecode=skintypecode;this.personality=personality;this.gkkickstyle=gkkickstyle;this.stamina=stamina;this.playerid=playerid;this.accessorycolourcode4=accessorycolourcode4;this.gkpositioning=gkpositioning;this.headvariation=headvariation;this.skillmoveslikelihood=skillmoveslikelihood;this.trait2=trait2;this.shohan=shohan;this.skintonecode=skintonecode;this.shortstyle=shortstyle;this.overallrating=overallrating;this.smallsidedshoetypecode=smallsidedshoetypecode;this.emotion=emotion;this.runstylecode=runstylecode;this.jerseyfit=jerseyfit;this.accessorycode2=accessorycode2;this.shoedesigncode=shoedesigncode;this.shoecolorcode1=shoecolorcode1;this.hairstylecode=hairstylecode;this.bodytypecode=bodytypecode;this.animpenaltiesstartposcode=animpenaltiesstartposcode;this.pacdiv=pacdiv;this.defensiveawareness=defensiveawareness;this.runningcode1=runningcode1;this.preferredposition4=preferredposition4;this.volleys=volleys;this.accessorycolourcode2=accessorycolourcode2;this.tattoorightleg=tattoorightleg;this.facialhaircolorcode=facialhaircolorcode}
}
class TeamPlayerLink{
constructor(leaguegoals,isamongtopscorers,yellows,isamongtopscorersinteam,jerseynumber,position,artificialkey,teamid,leaguegoalsprevmatch,injury,leagueappearances,istopscorer,leaguegoalsprevthreematches,playerid,form,reds)
{this.leaguegoals=leaguegoals;this.isamongtopscorers=isamongtopscorers;this.yellows=yellows;this.isamongtopscorersinteam=isamongtopscorersinteam;this.jerseynumber=jerseynumber;this.position=position;this.artificialkey=artificialkey;this.teamid=teamid;this.leaguegoalsprevmatch=leaguegoalsprevmatch;this.injury=injury;this.leagueappearances=leagueappearances;this.istopscorer=istopscorer;this.leaguegoalsprevthreematches=leaguegoalsprevthreematches;this.playerid=playerid;this.form=form;this.reds=reds}
}
class League{
constructor(countryid,leaguename,leaguetype,level,iscompetitionscarfenabled,isbannerenabled,leagueid,iscompetitionpoleflagenabled,iscompetitioncrowdcardsenabled,leaguetimeslice,iswomencompetition,iswithintransferwindow)
{this.countryid=countryid;this.leaguename=leaguename;this.leaguetype=leaguetype;this.level=level;this.iscompetitionscarfenabled=iscompetitionscarfenabled;this.isbannerenabled=isbannerenabled;this.leagueid=leagueid;this.iscompetitionpoleflagenabled=iscompetitionpoleflagenabled;this.iscompetitioncrowdcardsenabled=iscompetitioncrowdcardsenabled;this.leaguetimeslice=leaguetimeslice;this.iswomencompetition=iswomencompetition;this.iswithintransferwindow=iswithintransferwindow}
}
class LeagueTeamLink{
constructor(homega,previousyeartableposition,homegf,currenttableposition,awaygf,awayga,teamshortform,hasachievedobjective,yettowin,unbeatenallcomps,unbeatenleague,champion,leagueid,prevleagueid,highestpossible,teamform,highestprobable,homewins,artificialkey,nummatchesplayed,teamid,grouping,awaywins,objective,points,actualvsexpectations,homelosses,unbeatenhome,lastgameresult,unbeatenaway,awaylosses,awaydraws,homedraws,teamlongform)
{this.homega=homega;this.previousyeartableposition=previousyeartableposition;this.homegf=homegf;this.currenttableposition=currenttableposition;this.awaygf=awaygf;this.awayga=awayga;this.teamshortform=teamshortform;this.hasachievedobjective=hasachievedobjective;this.yettowin=yettowin;this.unbeatenallcomps=unbeatenallcomps;this.unbeatenleague=unbeatenleague;this.champion=champion;this.leagueid=leagueid;this.prevleagueid=prevleagueid;this.highestpossible=highestpossible;this.teamform=teamform;this.highestprobable=highestprobable;this.homewins=homewins;this.artificialkey=artificialkey;this.nummatchesplayed=nummatchesplayed;this.teamid=teamid;this.grouping=grouping;this.awaywins=awaywins;this.objective=objective;this.points=points;this.actualvsexpectations=actualvsexpectations;this.homelosses=homelosses;this.unbeatenhome=unbeatenhome;this.lastgameresult=lastgameresult;this.unbeatenaway=unbeatenaway;this.awaylosses=awaylosses;this.awaydraws=awaydraws;this.homedraws=homedraws;this.teamlongform=teamlongform}
}
class Nation{
    constructor(confederation, streetdressing, nationname, top_tier, nationstartingfirstletter, groupid, isocountrycode, nationid
){
    this.confederation=confederation;
    this.streetdressing=streetdressing;
    this.nationname=nationname;
    this.top_tier=top_tier;
    this.nationstartingfirstletter=nationstartingfirstletter;
    this.groupid=groupid;
    this.isocountrycode=isocountrycode;
    this.nationid=nationid;
    }
}


//=========================
//Global Variables
//=========================

let playersdesignationcheckbox = document.getElementById("chx");

let playernamesurl="https://scyppan.com/wp-content/uploads/formidable/30/playernames-2.txt";
let dcplayernamesurl="https://scyppan.com/wp-content/uploads/formidable/30/dcplayernames.txt";
let editedplayernamesurl="https://scyppan.com/wp-content/uploads/formidable/30/editedplayernames-2.txt";
let playersurl="https://scyppan.com/wp-content/uploads/formidable/30/origplayers-fifa_ng_db-1.txt";
let teamsurl="https://scyppan.com/wp-content/uploads/formidable/30/origteams.txt";
let teamplayerlinksurl="https://scyppan.com/wp-content/uploads/formidable/30/teamplayerlinks.txt";
let leaguesurl="https://scyppan.com/wp-content/uploads/formidable/30/leagues.txt";
let leagueteamlinksurl="https://scyppan.com/wp-content/uploads/formidable/30/leagueteamlinks.txt";
let nationsurl="https://scyppan.com/wp-content/uploads/formidable/30/nations.txt"

let playernames = [];
let dcplayernames = [];
let editedplayernames=[];
let players=[];
let teams=[];
let teamplayerlinks=[];
let leagues=[];
let leagueteamlinks=[];
let nations=[];

//=========================
//Initial Functions
//=========================

getbasefile(playernamesurl, "playernames");
getbasefile(dcplayernamesurl, "dcplayernames");
getbasefile(editedplayernamesurl, "editedplayernames");
getbasefile(playersurl, "players_ng_db");
getbasefile(teamsurl, "teams");
getbasefile(teamplayerlinksurl, "teamplayerlinks");
getbasefile(leaguesurl, "leagues");
getbasefile(leagueteamlinksurl, "leagueteamlinks");
getbasefile(nationsurl, "nations");