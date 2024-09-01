
//-------------------
//Frontend Editing
//-------------------
function fieldupdate(field, val){
    
    switch(field){
        case "league_leagueid": validateintinput(field, val, 1, 4000); break;
        case "league_leaguename": validatestringinput(field, val, 23); break;
        case "league_countryid": validateintinput(field, val, 0, 255); break;
    case "league_level": validateintinput(field, val, 1, 7); break;
        case "league_womens": checkboxinput(field); break;
    case "league_timeslice": validateintinput(field, val, 0, 35); break;
    case "league_scarfenabled": validateintinput(field, val, 0, 2); break;
    case "league_bannerenabled": validateintinput(field, val, 0, 2); break;
    case "league_poleflagenabled": validateintinput(field, val, 0, 2); break; 
    case "league_crowdcardsenabled": validateintinput(field, val, 0, 2); break;
    case "team_teamname": validatestringinput(field, val, 23); break;
    case "team_foundationyear": validateintinput(field, val, 1800, 2050); break;
    case "team_clubworth": validateintinput(field, val, 1800, 2050); break;
    case "team_profitability": validateintinput(field, val, 0, 10); break;
    case "team_domesticprestige": validateintinput(field, val, 0, 20); break;
    case "team_internationalprestige": validateintinput(field, val, 0, 20); break; 
    case "team_popularity": validateintinput(field, val, 0, 10); break;
    case "team_youthdevelopment": validateintinput(field, val, 0, 10); break;
    case "team_rivalteam": validateintinput(field, val, 1, 200000); break;
    case "team_ballid": validateintinput(field, val, 0, 300); break;
    case "team_ethnicity": validateintinput(field, val, 1, 11); break;
    case "team_crowdregion": validateintinput(field, val, 0, 31); break;
    case "team_crowdskintonecode": validateintinput(field, val, 0, 15); break;
    case "team_stadiumcapacity": validateintinput(field, val, 0, 999999); break;
        case "team_maincolor": 
            let rgb1 = hextorgb(val);
            validatecolorinput(field, "red", rgb1.r);
            validatecolorinput(field, "green", rgb1.g);
            validatecolorinput(field, "blue", rgb1.b);
        break;
        case "team_secondarycolor":
            let rgb2 = hextorgb(val);
            validatecolorinput(field, "red", rgb2.r);
            validatecolorinput(field, "green", rgb2.g);
            validatecolorinput(field, "blue", rgb2.b);
        break;
        case "team_tertiarycolor":
            let rgb3 = hextorgb(val);
            validatecolorinput(field, "red", rgb3.r);
            validatecolorinput(field, "green", rgb3.g);
            validatecolorinput(field, "blue", rgb3.b);
        break;
        case "player_playerid": validateintinput(field, val, 1, 500000); break;
        case "player_firstname": validatestringinput(field, val, 19); break;
        case "player_lastname": validatestringinput(field, val, 19); break;
        case "player_commonname": validatestringinput(field, val, 19); break;
        case "player_jerseyname": validatestringinput(field, val, 19); break;
        case "player_birthdate": validateintinput(field, val, 0, 1048575); break;
        case "player_nationality": validateintinput(field, val, 0, 225); break;
        case "player_gender": validateintinput(field, val, 0, 1); break;
        case "player_foot": validateintinput(field, val,1,2); break; 
        case "player_weakfoot": validateintinput(field, val, 1,5); break;
        case "player_position1": validateintinput(field, val, -1, 27); break;
        case "player_position2": validateintinput(field, val, -1, 27); break;
        case "player_position3": validateintinput(field, val, -1, 27); break;
        case "player_position4": validateintinput(field, val, -1, 27); break;
        case "player_defworkrate": validateintinput(field, val, 0,2); break;
        case "player_attworkrate": validateintinput(field, val, 0,2); break;
        case "player_gkdiving": validateintinput(field,val,1,99); break;
        case "player_gkreflexes": validateintinput(field, val, 1, 99); break;
        case "player_gkhandling": validateintinput(field, val, 1, 99); break;
        case "player_gkkicking": validateintinput(field, val, 1, 99); break;
        case "player_gkpositioning": validateintinput(field, val, 1, 99); break;
        case "player_sprintspeed": validateintinput(field, val, 1, 99); break;
        case "player_acceleration": validateintinput(field, val, 1, 99); break;
        case "player_stamina": validateintinput(field, val, 1, 99); break;
        case "player_agility": validateintinput(field, val, 1, 99); break;
        case "player_balance": validateintinput(field, val, 1, 99); break;
        case "player_strength": validateintinput(field, val, 1, 99); break;
        case "player_jumping": validateintinput(field, val, 1, 99); break;
        case "player_aggression": validateintinput(field, val, 1, 99); break;
        case "player_composure": validateintinput(field, val, 1, 99); break;
        case "player_defawareness": validateintinput(field, val, 1, 99); break;
        case "player_positioning": validateintinput(field, val, 1, 99); break;
        case "player_reactions": validateintinput(field, val, 1, 99); break;
        case "player_vision": validateintinput(field, val, 1, 99); break;
        case "player_interceptions": validateintinput(field, val, 1, 99); break;
        case "player_slidingtackle": validateintinput(field, val, 1, 99); break;
        case "player_standingtackle": validateintinput(field, val, 1, 99); break;
        case "player_heading": validateintinput(field, val, 1, 99); break;
        case "player_ballcontrol": validateintinput(field, val, 1, 99); break;
        case "player_dribbling": validateintinput(field, val, 1, 99); break;
        case "player_curve": validateintinput(field, val, 1, 99); break;
        case "player_volleys": validateintinput(field, val, 1, 99); break;
        case "player_crossing": validateintinput(field, val, 1, 99); break;
        case "player_shortpassing": validateintinput(field, val, 1, 99); break;
        case "player_longpassing": validateintinput(field, val, 1, 99); break;
        case "player_finishing": validateintinput(field, val, 1, 99); break;
        case "player_longshots": validateintinput(field, val, 1, 99); break;
        case "player_shotpower": validateintinput(field, val, 1, 99); break;
        case "player_freekicks": validateintinput(field, val, 1, 99); break;
        case "player_penalties": validateintinput(field, val, 1, 99); break;
        case "player_birthdate-day": dateinput(val, "day"); break;
        case "player_birthdate-month": dateinput(val, "month"); break;
        case "player_birthdate-year": dateinput(val, "year"); break;
        case "player_height": 
            validateintinput(field, val, 130, 220); 
            document.getElementById("player_heightimpirialdisplay").innerHTML='&nbsp' + convertmetrictoimperialheight(val); 
        break;
        case "player_weight": 
            validateintinput(field, val, 30, 150);
            document.getElementById("player_weightimpirialdisplay").innerHTML='&nbsp' + convertmetrictoimperialweight(val); 
        break;
        case "player_haircolor": validateintinput(field, val, 0, 27); break;
        case "player_skintone": validateintinput(field, val, 0, 10); break;
    }
}

function convertmetrictoimperialheight(cm){

    if(cm<130){cm=130;}
    if(cm>220){cm=220;}
    
    const feetInOneMeter = 3.28084; // 1 meter = 3.28084 feet
  const inchesInOneFoot = 12; // 1 foot = 12 inches

  // Convert height in centimeters to feet and inches
  const totalInches = cm / 2.54; // 1 inch = 2.54 cm
  const feet = Math.floor(totalInches / inchesInOneFoot);
  const inches = Math.round(totalInches % inchesInOneFoot);

  return `${feet}ft ${inches}in`;
}

function convertmetrictoimperialweight(kg){
    if(kg<30){kg=30}
    if(kg>150){kg=150}

    const poundsInOneKg = 2.20462; // 1 kg = 2.20462 pounds

  // Convert weight in kilograms to pounds (rounded to 2 decimal places)
  const pounds = (kg * poundsInOneKg).toFixed(2);

  return `${pounds}lbs`;
}

function dateinput(val, type){
    
    let date ={
        day: 1,
        month: 1,
        year: 1582
    }
    
    switch(type){
        case "day": 
            date.day=parseInt(val);
            date.month=parseInt(document.getElementById("player_birthdate-month").selectedIndex+1);
            date.year=parseInt(document.getElementById("player_birthdate-year").value);
        break;
        case "month":
            date.day=parseInt(document.getElementById("player_birthdate-day").value);
            date.month=parseInt(val);
            date.year=parseInt(document.getElementById("player_birthdate-year").value);
            fixmaxdaysinmonth(date.month, date.year);
        break
        case "year":
            date.day=parseInt(document.getElementById("player_birthdate-day").value);
            date.month=parseInt(document.getElementById("player_birthdate-month").selectedIndex+1);
            date.year=parseInt(val);
            fixmaxdaysinmonth(date.month, date.year);
        break;
    }
    
    let fifadate = calcfifadate(date);
    savefieldinput("birthdate", fifadate);
}

function calcfifadate(date){
    
    let days=0;
    let pastyears = addallpastyears(date);
    let pastmonths = addpastmonths(date)
    let thisyeardays = date.day;
    days=pastyears+pastmonths+thisyeardays;
    
    return days;
    
}

function addallpastyears(date){
    
    if(date.year<=1582){return 0;}

    let days=0;
    
    for(let i=1582; i<date.year; i++){
        let daystoadd=0;
        if(i==1582){days+=82; continue;}
        if(checkleapyear(i).isleap){days+=366; continue;}
        days+=365; 
        }
        return days;
}

function addpastmonths(date){
    let days=0;
    let checkleap=checkleapyear(date.year);
    
    for(let i=1; i<date.month;i++){
        days+=checkleap.monthlengths[i-1];
    }
    return days;
}

function panel1selectionmade(type, val){
    let slct = document.getElementById("panel1select");
    
    switch(type){
    case "league": 
        focus.type="league"; focus.value=slct.selectedIndex;
        showleague(val);
    break;
    case "team": 
        focus.type="team";
        focus.value=slct.value;
        showteam(val);
    break;
    case "player": 
        focus.type="player";
        focus.value=slct.value;
        showplayer();
    break;
    }
}

function showleague(){
    document.getElementById("leaguespanel").style.display="block";
    
    let league=db.leagues[focus.value];
    document.getElementById("league_leagueid").value=league.leagueid;
    document.getElementById("league_leaguename").value=league.leaguename;
    document.getElementById("league_countryid").value=league.countryid;
    document.getElementById("league_country").value=getcountryfromid(league.countryid);
    document.getElementById("league_level").value=league.level;
    document.getElementById("league_timeslice").value=league.leaguetimeslice;
    document.getElementById("league_scarfenabled").value=league.iscompetitionscarfenabled;
    document.getElementById("league_bannerenabled").value=league.isbannerenabled;
    document.getElementById("league_poleflagenabled").value=league.iscompetitionpoleflagenabled;
    document.getElementById("league_crowdcardsenabled").value=league.iscompetitioncrowdcardsenabled;
    
    if(league.iswomencompetition=="1"){document.getElementById("league_womens").checked=true;}else{
    document.getElementById("league_womens").checked=false;
    }
    
    showleagueteamlinks(league.leagueid);
    
}

function showteam(){
    let team=getteamfromteamid(focus.value);
    document.getElementById("team_teamid").value=team.teamid;
    document.getElementById("team_teamname").value=team.teamname;
    document.getElementById("team_foundationyear").value=team.foundationyear;
    document.getElementById("team_clubworth").value=team.clubworth;
    document.getElementById("team_profitability").value=team.profitability;
    document.getElementById("team_domesticprestige").value=team.domesticprestige;
    document.getElementById("team_internationalprestige").value=team.internationalprestige;
    document.getElementById("team_popularity").value=team.popularity;
    document.getElementById("team_youthdevelopment").value=team.youthdevelopment;
    
    //to get the rival options and current rival
    let league=getleaguefromteamid(team.teamid);
    getrivaloptions(league.leagueid);
    
    document.getElementById("team_maincolor").value=rgbtohex(team.teamcolor1r,team.teamcolor1g, team.teamcolor1b);
    document.getElementById("team_secondarycolor").value=rgbtohex(team.teamcolor2r,team.teamcolor2g, team.teamcolor2b);
    document.getElementById("team_tertiarycolor").value=rgbtohex(team.teamcolor3r,team.teamcolor3g, team.teamcolor3b);
    
    selectrivalselection(team.rivalteam);
    
    document.getElementById("team_ballid").value=team.ballid;
    document.getElementById("team_ethnicity").value=team.ethnicity;
    document.getElementById("team_crowdregion").value=team.crowdregion;
    document.getElementById("team_crowdskintonecode").value=team.crowdskintonecode;
    document.getElementById("team_stadiumcapacity").value=team.teamstadiumcapacity;
    
    showteamplayerlinks(team.teamid, "teamplayerlinks");
    loadallleagues("teamplayerlinks");
    loadonlyteamsinleague(document.getElementById("teamplayerlinks_leagueopts").value, "teamplayerlinks")
    showteamplayerlinks(teamplayerlinks_otherteamopts.value, "otherteamplayerlinks");

}

function showplayer(){

    let player = getplayerfromid(panel1slct.value);
    document.getElementById("player_playerid").value=player.playerid;
    document.getElementById("player_firstname").value=player.firstname;
    document.getElementById("player_lastname").value=player.lastname;
    document.getElementById("player_commonname").value=player.commonname;
    document.getElementById("player_jerseyname").value=player.jerseyname
    document.getElementById("player_nationality").value=player.nationality;
    document.getElementById("player_height").value=player.height;
    document.getElementById("player_weight").value=player.weight;
    document.getElementById("player_gender").selectedIndex=player.gender;
    document.getElementById("player_foot").selectedIndex=player.preferredfoot-1;
    document.getElementById("player_weakfoot").selectedIndex=player.weakfootabilitytypecode-1;
    document.getElementById("player_skintone").value=player.skintonecode;
    document.getElementById("player_haircolor").value=player.haircolorcode;
    document.getElementById("player_position1").value=player.preferredposition1;
    document.getElementById("player_position2").value=player.preferredposition2;
    document.getElementById("player_position3").value=player.preferredposition3;
    document.getElementById("player_position4").value=player.preferredposition4;
    document.getElementById("player_defworkrate").value=player.defensiveworkrate;
    document.getElementById("player_attworkrate").value=player.attackingworkrate;
    document.getElementById("player_gkdiving").value=player.gkdiving;
    document.getElementById("player_gkreflexes").value=player.gkreflexes;
    document.getElementById("player_gkhandling").value=player.gkhandling;
    document.getElementById("player_gkkicking").value=player.gkkicking;
    document.getElementById("player_gkpositioning").value=player.gkpositioning;
    document.getElementById("player_sprintspeed").value=player.sprintspeed;
    document.getElementById("player_acceleration").value=player.acceleration;
    document.getElementById("player_stamina").value=player.stamina;
    document.getElementById("player_agility").value=player.agility;
    document.getElementById("player_balance").value=player.balance;
    document.getElementById("player_strength").value=player.strength;
    document.getElementById("player_jumping").value=player.jumping;
    document.getElementById("player_aggression").value=player.aggression;
    document.getElementById("player_composure").value=player.composure;
    document.getElementById("player_defawareness").value=player.defensiveawareness;
    document.getElementById("player_positioning").value=player.positioning;
    document.getElementById("player_reactions").value=player.reactions;
    document.getElementById("player_vision").value=player.vision;
    document.getElementById("player_interceptions").value=player.interceptions;
    document.getElementById("player_slidingtackle").value=player.slidingtackle;
    document.getElementById("player_standingtackle").value=player.standingtackle;
    document.getElementById("player_heading").value=player.headingaccuracy;
    document.getElementById("player_ballcontrol").value=player.ballcontrol;
    document.getElementById("player_dribbling").value=player.dribbling;
    document.getElementById("player_curve").value=player.curve;
    document.getElementById("player_volleys").value=player.volleys;
    document.getElementById("player_crossing").value=player.crossing;
    document.getElementById("player_shortpassing").value=player.shortpassing;
    document.getElementById("player_longpassing").value=player.longpassing;
    document.getElementById("player_finishing").value=player.finishing;
    document.getElementById("player_longshots").value=player.longshots;
    document.getElementById("player_shotpower").value=player.shotpower;
    document.getElementById("player_freekicks").value=player.freekickaccuracy;
    document.getElementById("player_penalties").value=player.penalties;
    document.getElementById("player_haircolor").value=player.haircolorcode;
    
    let birthdate=getdatefromfifadate(player.birthdate);
    document.getElementById("player_birthdate-day").value=birthdate.day;
    document.getElementById("player_birthdate-month").selectedIndex=birthdate.month-1;
    document.getElementById("player_birthdate-year").value=birthdate.year;
    fixmaxdaysinmonth(birthdate.month, birthdate.year);
    
    document.getElementById("player_heightimpirialdisplay").innerHTML='&nbsp' + convertmetrictoimperialheight(player.height);
    document.getElementById("player_weightimpirialdisplay").innerHTML='&nbsp' + convertmetrictoimperialweight(player.weight);
    
}

function getnamefromid(playerid, nameid, type){
    
    for(let i=0;i<db.editedplayernames.length; i++){
        if(playerid==db.editedplayernames[i].playerid)	{
            if(type=="firstname"){return db.editedplayernames[i].firstname;}
            if(type=="lastnamename"){return db.editedplayernames[i].firstname;}
            if(type=="commonname"){return db.editedplayernames[i].firstname;}
            if(type=="jerseyname"){return db.editedplayernames[i].playerjerseyname;}
        }
    }
    
    for(let i=0;i<db.playernames.length; i++){
        if(db.playernames[i].id==nameid){
            return db.playernames[i].name;
        }
    }
    
    for(let i=0;i<db.dcplayernames.length; i++){
        if(db.dcplayernames[i].id==nameid){
            return db.dcplayernames[i].name;
        }
    }
    
    return "";
}

function getnamefromtable(id, table, type){

    id=parseInt(id);
        
    switch(table){
        case "playernames": 
            if(id==0){return "{none}";}
            for (let j=0;j<db.playernames.length;j++){
                if(id==db.playernames[j].id){return db.playernames[j].name;}
            }
        break;
        case "dcplayernames":
            if(id==0){return "{none}";}
            for (let j=0;j<db.dcplayernames.length;j++){
                
                if(id==db.dcplayernames[j].id){return db.dcplayernames[j].name;}
            }
        break;
        case "editedplayernames":
            switch(type){
                case "firstname":
                    for(let j=0;j<db.editedplayernames.length;j++){
                        if(id==db.editedplayernames[j].playerid){return db.editedplayernames[j].firstname;}
                    }
                break;

                case "surname":
                    for(let j=0;j<db.editedplayernames.length;j++){
                        if(id==db.editedplayernames[j].playerid){return db.editedplayernames[j].surname;}
                    }
                break;

                case "commonname":
                    for(let j=0;j<db.editedplayernames.length;j++){
                        if(id==db.editedplayernames[j].playerid){return db.editedplayernames[j].commonname;}
                    }
                break;

                case "jerseyname":
                    for(let j=0;j<db.editedplayernames.length;j++){
                        if(id==db.editedplayernames[j].playerid){return db.editedplayernames[j].jerseyname;}
                    }
                break;
    }
        break;
    }
    
    return "{none}";
}

function getplayerfromid(id){
    for (let i=0;i<db.players.length; i++){
        if(id==db.players[i].playerid){
        return db.players[i];
        }
    }
}

function showteamplayerlinks(teamid, display){
    
    let slct=teamplayerlinksslct;
    switch(display){
    case "teamplayerlinks":	break;
    case "otherteamplayerlinks": slct=otherteamplayerlinksslct; break;
    }
    
    slct.length=0;
    slct.size=0;
    
    let players=getplayersinteam(teamid);
    
    for(let i=0;i<players.length; i++){
        let playername = players[i].firstname + " " + players[i].lastname;
        let opt=new Option(playername, players[i].playerid);
        opt.className="selectoption";
        slct.options.add(opt);
        slct.size++;
    }
}

function showleagueteamlinks(id){
    
    leagueteamlinksslct.length=0;
    leagueteamlinksslct.size=0;
    
    let othrlgslct = document.getElementById("leagueopts");
    
    for(let i=0;i<db.leagueteamlinks.length;i++){
        if(db.leagueteamlinks[i].leagueid==id){
            let team=getteamfromteamid(db.leagueteamlinks[i].teamid);
            let blankrow=(db.leagueteamlinks[i].artificialkey==0&&db.leagueteamlinks[i].teamid==1&&db.leagueteamlinks[i].leagueid==1);
            
            if(!blankrow){
            let opt=new Option(team.teamname,team.teamid);
            opt.className="selectoption";
            leagueteamlinksslct.options.add(opt);
            leagueteamlinksslct.size++;
            }
        }
    }
    
    showmoveteamleagueoptions(id);
    
}

function showmoveteamleagueoptions(leagueid){
    
    let leagueopts=document.getElementById("leagueopts");
    let currentselection=leagueopts.selectedIndex;
    if(currentselection==-1){currentselection=0;}
    leagueopts.length=0;
    leagueopts.size=0;
    
    for(let i=0;i<db.leagues.length; i++){
        if(db.leagues[i].leagueid!=leagueid){
            let opt=new Option(db.leagues[i].leaguename, db.leagues[i].leagueid);
            opt.className="selectoption";
            leagueopts.options.add(opt);
        }
    }
    leagueopts.selectedIndex=currentselection;
    showotherleagueteamlist(leagueopts.value);
    
}

function findleagueteamlink(leagueid, teamid){
    for(let i=0;i<db.leagueteamlinks.length;i++){
            if(db.leagueteamlinks[i].leagueid==leagueid&&db.leagueteamlinks[i].teamid==teamid){
            return db.leagueteamlinks[i];
            }
    }
}

function showotherleagueteamlist(leagueid){
    let otherleagueteamlinks=document.getElementById("otherleagueteamlinks");
    
    otherleagueteamlinks.length=0;
    otherleagueteamlinks.size=0;
    
    for(let i=0;i<db.leagueteamlinks.length;i++){
        if(db.leagueteamlinks[i].leagueid==leagueid){
            let team=getteamfromteamid(db.leagueteamlinks[i].teamid);
            
            let blankrow=(db.leagueteamlinks[i].artificialkey==0&&db.leagueteamlinks[i].teamid==1&&db.leagueteamlinks[i].leagueid==1);
            
            if(!blankrow){
            
            let opt=new Option(team.teamname,team.teamid);
            opt.className="selectoption";
            otherleagueteamlinks.options.add(opt);
            otherleagueteamlinks.size++;
            }
        }
    }
}

function moveteamtoleague(direction){
    let origleagueid=document.getElementById("league_leagueid").value;
    let newleagueid=leagueteamlinks_leagueopts.value;
    let teamid=leagueteamlinksslct.value;
    
    if(direction=="from"){
        origleagueid=newleagueid; //swap the originating league;
        newleagueid=document.getElementById("league_leagueid").value; //complete the swap;
        teamid=otherleagueteamlinksslct.value;
    }
    
    for(let i=0;i<db.leagueteamlinks.length; i++){
        if(db.leagueteamlinks[i].leagueid==origleagueid&&db.leagueteamlinks[i].teamid==teamid){
            db.leagueteamlinks[i].leagueid=newleagueid;
            break;
        }
    }
    
    showleagueteamlinks(document.getElementById("league_leagueid").value);
    showotherleagueteamlist(leagueteamlinks_leagueopts.value);
    
}

function moveplayertoteam(direction){
    
    let origteamid=document.getElementById("team_teamid").value;
    let newteamid=teamplayerlinks_otherteamopts.value;
    let playerid=teamplayerlinksslct.value;
    
    if(direction=="from"){
        origteamid=newteamid; //swap which is the originating team
        newteamid=document.getElementById("team_teamid").value; //complete the swap
        playerid=otherteamplayerlinksslct.value; //get the other player's id
    }
    
    for(let i=0;i<db.teamplayerlinks.length; i++){
        if(origteamid==db.teamplayerlinks[i].teamid&&playerid==db.teamplayerlinks[i].playerid){
            db.teamplayerlinks[i].teamid=newteamid;
            break;
        }
    }
    
    showteamplayerlinks(focus.value, "teamplayerlinks");
    showteamplayerlinks(teamplayerlinks_otherteamopts.value, "otherteamplayerlinks");
}

function getdatefromfifadate(fifadate){
    let date={
        year: 1582,
        day: 10,
        month: 10
    }

    for(let i=0;i<fifadate; i++){
        
        //increment year
        if(date.month==12&&date.day==31){
            date.year++;
            date.month=1;
            date.day=1;
            continue;
        }
        
        //increment month
        let checkleap=checkleapyear(date.year);
        let thismonthlength = checkleap.monthlengths[date.month-1];
        
        if(date.day==thismonthlength){
            date.month++;
            date.day=1;
            continue;
        }
        
        date.day++;
        continue;
    }
    
    return date;
}

function getnumdaysinmonth(month, year){
    switch(month){
        case 1: return 31;
        case 2: if(checkleapyear(year).isleap){return 29;} return 28;
        case 3: return 31;
        case 4: return 30;
        case 5: return 31;
        case 6: return 30;
        case 7: return 31;
        case 8: return 31;
        case 9: return 30;
        case 10: return 31;
        case 11: return 30;
        case 12: return 31;
    }
}

function fixmaxdaysinmonth(month, year){
    let dayinput = document.getElementById("player_birthdate-day");
    dayinput.max=getnumdaysinmonth(month, year);
    
    if(parseInt(dayinput.value)>parseInt(dayinput.max)){dayinput.value=dayinput.max;}
}

function checkleapyear(year){

    let leapyears = [1600,1604,1608,1612,1616,1620,1624,1628,1632,1636,1640,1644,1648,1652,1656,1660,1664,1668,1672,1676,1680,1684,1688,1692,1696,1704,1708,1712,1716,1720,1724,1728,1732,1736,1740,1744,1748,1752,1756,1760,1764,1768,1772,1776,1780,1784,1788,1792,1796,1804,1808,1812,1816,1820,1824,1828,1832,1836,1840,1844,1848,1852,1856,1860,1864,1868,1872,1876,1880,1884,1888,1892,1896,1904,1908,1912,1916,1920,1924,1928,1932,1936,1940,1944,1948,1952,1956,1960,1964,1968,1972,1976,1980,1984,1988,1992,1996,2000,2004,2008,2012,2016,2020,2024,2028,2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064, 2068, 2072, 2076, 2080, 2084, 2088, 2092, 2096];
    
    for(let i=0; i<leapyears.length; i++){
        if(year==leapyears[i]){
            return {
                monthlengths: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                isleap: true
            }
        }
    }
    
    return {
                monthlengths: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                isleap: false
            }
    
}

//-------------------
//UI Controls
//-------------------

function setlastsavetxt(type){

    switch(type){
        case "initial":
            lastsavetxt.innerHTML="Initial File Loaded at " + getdatestring(new Date()) + '<br>' + "No changes have been downloaded";
        break;
        case "download":
            lastsavetxt.innerHTML="Last Download " + getdatestring(new Date()) + '<br>' + "Remember to backup often!";
        break;
    }
}

function topmenubtnpressed(selection){

    clearui();

    switch(selection){
    case "leagues":
        leaguebtn.className="selectedbtn";
        focus.type="league";
        updateUIbasedonfocus();
        loadallleagues("panel1");
    break;
    case "teams":
        teambtn.className="selectedbtn";
        focus.type="team";focus.value="1";
        updateUIbasedonfocus();
        loadallteams("panel1");
        showteam();
    break;
    case "players":
        playerbtn.className="selectedbtn";
        focus.type="player";
        updateUIbasedonfocus();
        loadallplayers("panel1");
        loadallleagues("secondmenu");
        loadonlyteamsinleague(secondmenuleagueslct.options[0].value,"secondmenu");
        panel1slct.selectedIndex=0;
        showplayer();
    break;
    }
    
    updateUIbasedonfocus();
}

function setupUIafterload(){
    loadbtn.style.display="none";
    savebtn.style.display="inline";
    leaguesbtn.style.display="inline";
    teamsbtn.style.display="inline";
    playersbtn.style.display="inline";
    
    setlastsavetxt("initial");
}

function clearui(){
    leaguebtn.className="deselectedbtn";
    teambtn.className="deselectedbtn";
    playerbtn.className="deselectedbtn";
    
    secondmenuleagueslct.style.display="none";
    secondmenuleagueslctlabel.style.display="none";
    secondmenuleagueslct.length=0;
    panel1select.length=0;
    rivalslct.length=0;
}

function updateUIbasedonfocus(){
    switch(focus.type){
    case "league":
        leaguespanel.style.display="block";
        teamspanel.style.display="none";
        playerspanel.style.display="none";
        secondmenuleagueslctlabel.style.display="none";
        secondmenuleagueslct.style.display="none";
        secondmenuteamslctlabel.style.display="none";
        secondmenuteamslct.style.display="none";
    break;
    case "team":
        leaguespanel.style.display="none";
        teamspanel.style.display="block";
        playerspanel.style.display="none";
        secondmenuleagueslctlabel.style.display="inline-block";
        secondmenuleagueslct.style.display="inline-block";
        secondmenuteamslctlabel.style.display="none";
        secondmenuteamslct.style.display="none";
    break;
    case "player":
        leaguespanel.style.display="none";
        teamspanel.style.display="none";
        playerspanel.style.display="block";
        secondmenuleagueslctlabel.style.display="inline-block";
        secondmenuleagueslct.style.display="inline-block";
        secondmenuteamslctlabel.style.display="inline-block";
        secondmenuteamslct.style.display="inline-block";
    break;
    
    }
}

//-------------------
//Data IO Files
//-------------------

function loadjson(){
    let file=loadbtn.files[0];
    
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload=function(){
    let results = reader.result;
    db=JSON.parse(results);
        
    setupUIafterload();
    
    loadallleagues("panel1");
    panel1slct.selectedIndex=0;
    panel1slct.focus();
    panel1selectionmade('league', panel1slct.options[0].value);
    setnations();
    }
}

function setnations(){
    
    for(let i=0;i<db.nations.length; i++){
        let opt=new Option(db.nations[i].nationname,db.nations[i].nationid);
        opt.className="selectoption";
        player_nationality.options.add(opt);
    }
}

function downloadsmjson(){
    let smjsonstring=JSON.stringify(db);
    let filename = "sm23dataviewer - " + getdatestring(new Date()) + ".json";
    
    let a = window.document.createElement("a");
    a.setAttribute("href", "data:text/json;charset=utf-8,%EF%BB%BF" + encodeURI(JSON.stringify(db)));
    a.setAttribute("download", filename);
    a.click();
    
    setlastsavetxt("download");
    
}

function loadallleagues(display){
    
    switch(display){
    case "panel1":
        panel1select.size=db.leagues.length;
        panel1select.style="display:flex";

    for(let i=0;i<db.leagues.length; i++){
        let opt=new Option(db.leagues[i].leaguename,db.leagues[i].leagueid);
        panel1select.setAttribute("onchange","panel1selectionmade('league',this.value)");
        opt.className="selectoption";
        panel1select.options.add(opt);
    }
    break;
    case "secondmenu":
        secondmenuleagueslct.style="display:inline";

    for(let i=0;i<db.leagues.length; i++){
        let opt=new Option(db.leagues[i].leaguename,db.leagues[i].leagueid);
        opt.className="selectoption";
        secondmenuleagueslct.options.add(opt);
    }
    break;
    case "teamplayerlinks":
        let slct=document.getElementById("teamplayerlinks_leagueopts");
        for(let i=0;i<db.leagues.length; i++){
        let opt=new Option(db.leagues[i].leaguename,db.leagues[i].leagueid);
        opt.className="selectoption";
        slct.options.add(opt);
    }
    break;
    }
}

function loadallteams(){

    loadallleagues("secondmenu");
    
    panel1select.size=db.teams.length;
    panel1select.style="display:flex";

    for(let i=0;i<db.teams.length; i++){
        
        let opt=new Option(db.teams[i].teamname,db.teams[i].teamid);
        opt.className="selectoption";
        panel1select.setAttribute("onchange","panel1selectionmade('team',this.value)");
        panel1select.options.add(opt);
    }
}

function loadallplayers(){

    panel1select.size=db.players.length;
    panel1select.style="display:flex";

    for(let i=0;i<db.players.length; i++){
        
        let opt=new Option(db.players[i].firstname + " " + db.players[i].lastname,db.players[i].playerid);
        panel1select.setAttribute("onchange","panel1selectionmade('player',this.value)");
        opt.className="selectoption";
        panel1select.options.add(opt);
    }
}

function secondmenuteamupdated(){
    let selectedteam=secondmenuteamslct.value;
    panel1slct.length=0;
    
    let players = getplayersinteam(selectedteam);
    
    if(players.length==0){
        let selectedleague = secondmenuleagueslct.value;
        loadonlyplayersinleague(selectedleague);
    }else{
    
    for(let i=0;i<players.length; i++){
    
        let name=players[i].firstname + " " + players[i].lastname;
        let opt=new Option(name,players[i].playerid);
        
        panel1select.setAttribute("onchange","panel1selectionmade('player',this.value)");
        opt.className="selectoption";
        panel1select.options.add(opt);
    }
    }
}

function secondmenuleaguesupdated(){
    let selectedleague = secondmenuleagueslct.value;
    panel1slct.length=0;
    secondmenuteamslct.length=0;
    
    if(focus.type=="team"){
        loadonlyteamsinleague(selectedleague,"panel1");
    }else{
        loadonlyplayersinleague(selectedleague);
        loadonlyteamsinleague(selectedleague,"secondmenu")
        secondmenuteamslct.style.display="inline";
        secondmenuteamslctlabel.style.display="inline";
    }
    
}

function loadonlyplayersinleague(leagueid){
    let teams=getteamsinleague(leagueid);
    
    let players=[];
    for(let i=0; i<teams.length; i++){
        let playersonthisteam = getplayersinteam(teams[i].teamid);
        
        for(let j=0;j<playersonthisteam.length; j++){
            players.push(playersonthisteam[j]);
        }
    }
        
    for(let i=0;i<players.length; i++){
    
        let name=players[i].firstname + " " + players[i].lastname;
        let opt=new Option(name,players[i].playerid);
        
        panel1select.setAttribute("onchange","panel1selectionmade('player',this.value)");
        opt.className="selectoption";
        panel1select.options.add(opt);
    }
}

function loadonlyteamsinleague(leagueid, display){
    
    let teams=getteamsinleague(leagueid);
    let slct = panel1slct;
    let blankopt =new Option("",-1);
    blankopt.className="selectoption";
    let size=true;
    
    switch(display){
        case "secondmenu":
            slct=secondmenuteamslct;
            slct.options.add(blankopt);
            size=false;
        break;
        case "rivals":
            slct=rivalslct;
            size=false;
        break;
        case "teamplayerlinks":
            slct=document.getElementById("teamplayerlinks_teamopts");
            size=false;
        break;
    }
    
    slct.length=0;
    slct.size=0;
    
    for(let k=0;k<teams.length; k++){
            let opt=new Option(teams[k].teamname,teams[k].teamid);
            opt.className="selectoption";
            slct.options.add(opt);
            if(size){slct.size++}
            }
        
}

function getleaguefromteamid(teamid){
    for(let i=0;i<db.leagueteamlinks.length; i++){
        if(db.leagueteamlinks[i].teamid==teamid){
            return db.leagueteamlinks[i];
        }
    }
}

function getteamsinleague(leagueid){
    let teamids=[];
    for(let i=0;i<db.leagueteamlinks.length; i++){
        if(db.leagueteamlinks[i].leagueid == leagueid){
            let thisleagueteamlink=db.leagueteamlinks[i];
            if(thisleagueteamlink.artificialkey!="0"){
                teamids.push(db.leagueteamlinks[i].teamid);
            }
        }
    }
    
    let teams=[];
    for(let j=0;j<teamids.length; j++){
        teams.push(getteamfromteamid(teamids[j]));
    }
    
    return teams;
}

function getteamfromteamid(teamid){
    for (let l=0;l<db.teams.length; l++){
        if(teamid==db.teams[l].teamid){
            return db.teams[l];
        }
    }
}

function getleaguefromid(leagueid){
    for (let i=0;i<db.leagues.length; i++){
        if(leagueid==db.leagues[i].leagueid){
        return db.leagues[i];
        }
    }
}

function getplayersinteam(teamid){
    let players=[];
    
    for (let j=0; j<db.teamplayerlinks.length;j++){
        if(db.teamplayerlinks[j].teamid==teamid){
            let playerid=db.teamplayerlinks[j].playerid;
            let playerrow = getplayerfromplayerid(playerid);
            
            if(playerid!="0"){
                players.push(playerrow);
            }
        }
    }
    
    return players;
}

function getplayerfromplayerid(playerid){
    for(let i=0;i<db.players.length; i++){
        if(db.players[i].playerid==playerid){
            return db.players[i];
        }
    }
}

function getrivaloptions(leagueid){
    rivalslct.length=0;
    
    let countryid="14";
    
    for(let i=0;i<db.leagues.length; i++){
        if(db.leagues[i].leagueid==leagueid){
            countryid=db.leagues[i].countryid;break;
        }
    }
    
    let leagueids=getallleagueidsfromcountryid(countryid, checkifwomens(leagueid));
    let teamids = getallteamsfromleagueidarray(leagueids);
    
    for(let i=0;i<teamids.length; i++){
        let opt=new Option(getteamfromteamid(teamids[i]).teamname, teamids[i]);
        opt.className="selectoption";
        rivalslct.options.add(opt);	
    }
}

function selectrivalselection(teamid){
    for(let i=0;i<rivalslct.options.length; i++){
        if(rivalslct.options[i].value==teamid){
            rivalslct.selectedIndex=i;
            break;
        }
    }
    
    //if rivals are not being displayed and saved properly, look at this subfunction. It's dubious
    if(rivalslct.selectedIndex==-1){
        for(let i=0;i<db.teams.length; i++){
            if(db.teams[i].teamid==teamid){
                let opt=new Option(db.teams[i].teamname, teamid);
                opt.className="selectoption";
                rivalslct.options.add(opt);
                rivalslct.selectedIndex=rivalslct.length-1;
            }
        }
    }
}

function getallleagueidsfromcountryid(countryid, iswomen){
    let leagueids=[];
    
    for(let i=0;i<db.leagues.length; i++){
        if(db.leagues[i].countryid==countryid&&db.leagues[i].iswomencompetition==iswomen){
            leagueids.push(db.leagues[i].leagueid);
        }
    }
    
    return leagueids;
}

function checkifwomens(leagueid){
    for(let i=0;i<db.leagues.length; i++){
        if(db.leagues[i].leagueid==leagueid){
            return db.leagues[i].iswomencompetition;
        }
    }
}

function getallteamsfromleagueidarray(leagueidarray){
    let teamids=[];
    
    for(let i=0;i<leagueidarray.length; i++){
            let thisleague_teams=getteamsinleague(leagueidarray[i]);
                
        for(let j=0;j<thisleague_teams.length;j++){
            teamids.push(thisleague_teams[j].teamid);
        }
    }
    
    return teamids;
}

function updateteamnameinpanel1(teamid, input){
    let selectedindex=-1;
    
    for(let i=0;i<panel1slct.length;i++){
        if(teamid==panel1slct[i].value){
            selectedindex=i;
        }
    }
    
    if(selectedindex!=-1){panel1slct[selectedindex].text=input}
    
}

function getcountryfromid(id){
    //these are the vanilla nation values and they aren't presently editable
    let kvp=[];
    
    kvp.push({id: "1", name: "Albania"},{id: "2", name: "Andorra"},{id: "3", name: "Armenia"},{id: "4", name: "Austria"},{id: "5", name: "Azerbaijan"},{id: "6", name: "Belarus"},{id: "7", name: "Belgium"},{id: "8", name: "Bosnia and Herzegovina"},{id: "9", name: "Bulgaria"},{id: "10", name: "Croatia"},{id: "11", name: "Cyprus"},{id: "12", name: "Czech Republic"},{id: "13", name: "Denmark"},{id: "14", name: "England"},{id: "15", name: "Montenegro"},{id: "16", name: "Faroe Islands"},{id: "17", name: "Finland"},{id: "18", name: "France"},{id: "19", name: "North Macedonia"},{id: "20", name: "Georgia"},{id: "21", name: "Germany"},{id: "22", name: "Greece"},{id: "23", name: "Hungary"},{id: "24", name: "Iceland"},{id: "25", name: "Republic of Ireland"},{id: "26", name: "Israel"},{id: "27", name: "Italy"},{id: "28", name: "Latvia"},{id: "29", name: "Liechtenstein"},{id: "30", name: "Lithuania"},{id: "31", name: "Luxembourg"},{id: "32", name: "Malta"},{id: "33", name: "Moldova"},{id: "34", name: "Holland"},{id: "35", name: "Northern Ireland"},{id: "36", name: "Norway"},{id: "37", name: "Poland"},{id: "38", name: "Portugal"},{id: "39", name: "Romania"},{id: "40", name: "Russia"},{id: "41", name: "San Marino"},{id: "42", name: "Scotland"},{id: "43", name: "Slovakia"},{id: "44", name: "Slovenia"},{id: "45", name: "Spain"},{id: "46", name: "Sweden"},{id: "47", name: "Switzerland"},{id: "48", name: "Turkey"},{id: "49", name: "Ukraine"},{id: "50", name: "Wales"},{id: "51", name: "Serbia"},{id: "52", name: "Argentina"},{id: "53", name: "Bolivia"},{id: "54", name: "Brazil"},{id: "55", name: "Chile"},{id: "56", name: "Colombia"},{id: "57", name: "Ecuador"},{id: "58", name: "Paraguay"},{id: "59", name: "Peru"},{id: "60", name: "Uruguay"},{id: "61", name: "Venezuela"},{id: "62", name: "Anguilla"},{id: "63", name: "Antigua and Barbuda"},{id: "64", name: "Aruba"},{id: "65", name: "Bahamas"},{id: "66", name: "Barbados"},{id: "67", name: "Belize"},{id: "68", name: "Bermuda"},{id: "69", name: "British Virgin Islands"},{id: "70", name: "Canada"},{id: "71", name: "Cayman Islands"},{id: "72", name: "Costa Rica"},{id: "73", name: "Cuba"},{id: "74", name: "Dominica"},{id: "75", name: "International"},{id: "76", name: "El Salvador"},{id: "77", name: "Grenada"},{id: "78", name: "Guatemala"},{id: "79", name: "Guyana"},{id: "80", name: "Haiti"},{id: "81", name: "Honduras"},{id: "82", name: "Jamaica"},{id: "83", name: "Mexico"},{id: "84", name: "Montserrat"},{id: "85", name: "Curaçao"},{id: "86", name: "Nicaragua"},{id: "87", name: "Panama"},{id: "88", name: "Puerto Rico"},{id: "89", name: "St. Kitts and Nevis"},{id: "90", name: "St. Lucia"},{id: "91", name: "St. Vincent and the Grenadines"},{id: "92", name: "Suriname"},{id: "93", name: "Trinidad and Tobago"},{id: "94", name: "Turks and Caicos Islands"},{id: "95", name: "United States"},{id: "96", name: "US Virgin Islands"},{id: "97", name: "Algeria"},{id: "98", name: "Angola"},{id: "99", name: "Benin"},{id: "100", name: "Botswana"},{id: "101", name: "Burkina Faso"},{id: "102", name: "Burundi"},{id: "103", name: "Cameroon"},{id: "104", name: "Cape Verde Islands"},{id: "105", name: "Central African Republic"},{id: "106", name: "Chad"},{id: "107", name: "Congo"},{id: "108", name: "Côte d'Ivoire"},{id: "109", name: "Djibouti"},{id: "110", name: "Congo DR"},{id: "111", name: "Egypt"},{id: "112", name: "Equatorial Guinea"},{id: "113", name: "Eritrea"},{id: "114", name: "Ethiopia"},{id: "115", name: "Gabon"},{id: "116", name: "Gambia"},{id: "117", name: "Ghana"},{id: "118", name: "Guinea"},{id: "119", name: "Guinea-Bissau"},{id: "120", name: "Kenya"},{id: "121", name: "Lesotho"},{id: "122", name: "Liberia"},{id: "123", name: "Libya"},{id: "124", name: "Madagascar"},{id: "125", name: "Malawi"},{id: "126", name: "Mali"},{id: "127", name: "Mauritania"},{id: "128", name: "Mauritius"},{id: "129", name: "Morocco"},{id: "130", name: "Mozambique"},{id: "131", name: "Namibia"},{id: "132", name: "Niger"},{id: "133", name: "Nigeria"},{id: "134", name: "Rwanda"},{id: "135", name: "São Tomé e Príncipe"},{id: "136", name: "Senegal"},{id: "137", name: "Seychelles"},{id: "138", name: "Sierra Leone"},{id: "139", name: "Somalia"},{id: "140", name: "South Africa"},{id: "141", name: "Sudan"},{id: "142", name: "Eswatini"},{id: "143", name: "Tanzania"},{id: "144", name: "Togo"},{id: "145", name: "Tunisia"},{id: "146", name: "Uganda"},{id: "147", name: "Zambia"},{id: "148", name: "Zimbabwe"},{id: "149", name: "Afghanistan"},{id: "150", name: "Bahrain"},{id: "151", name: "Bangladesh"},{id: "152", name: "Bhutan"},{id: "153", name: "Brunei Darussalam"},{id: "154", name: "Cambodia"},{id: "155", name: "China PR"},{id: "157", name: "Guam"},{id: "158", name: "Hong Kong"},{id: "159", name: "India"},{id: "160", name: "Indonesia"},{id: "161", name: "Iran"},{id: "162", name: "Iraq"},{id: "163", name: "Japan"},{id: "164", name: "Jordan"},{id: "165", name: "Kazakhstan"},{id: "166", name: "Korea DPR"},{id: "167", name: "Korea Republic"},{id: "168", name: "Kuwait"},{id: "169", name: "Kyrgyzstan"},{id: "170", name: "Laos"},{id: "171", name: "Lebanon"},{id: "172", name: "Macau"},{id: "173", name: "Malaysia"},{id: "174", name: "Maldives"},{id: "175", name: "Mongolia"},{id: "176", name: "Myanmar"},{id: "177", name: "Nepal"},{id: "178", name: "Oman"},{id: "179", name: "Pakistan"},{id: "180", name: "Palestine"},{id: "181", name: "Philippines"},{id: "182", name: "Qatar"},{id: "183", name: "Saudi Arabia"},{id: "184", name: "Singapore"},{id: "185", name: "Sri Lanka"},{id: "186", name: "Syria"},{id: "187", name: "Tajikistan"},{id: "188", name: "Thailand"},{id: "189", name: "Turkmenistan"},{id: "190", name: "United Arab Emirates"},{id: "191", name: "Uzbekistan"},{id: "192", name: "Vietnam"},{id: "193", name: "Yemen"},{id: "194", name: "American Samoa"},{id: "195", name: "Australia"},{id: "196", name: "Cook Islands"},{id: "197", name: "Fiji"},{id: "198", name: "New Zealand"},{id: "199", name: "Papua New Guinea"},{id: "200", name: "Samoa"},{id: "201", name: "Solomon Islands"},{id: "202", name: "Tahiti"},{id: "203", name: "Tonga"},{id: "204", name: "Vanuatu"},{id: "205", name: "Gibraltar"},{id: "206", name: "Greenland"},{id: "207", name: "Dominican Republic"},{id: "208", name: "Estonia"},{id: "209", name: "Created Players Country"},{id: "210", name: "Free Agents Country"},{id: "211", name: "Rest of World"},{id: "212", name: "Timor-Leste"},{id: "213", name: "Chinese Taipei"},{id: "214", name: "Comoros"},{id: "215", name: "New Caledonia"},{id: "218", name: "South Sudan"},{id: "219", name: "Kosovo"},{id: "222", name: "International Women"},{id: "225", name: "CONMEBOL"});
    
    for(let i=0;i<kvp.length; i++){
    if(kvp[i].id==id){return kvp[i].name;}
    }
}

//-------------------
//Global Variables
//-------------------

//ui objects
let loadbtn=document.getElementById("loadbtn");
let savebtn=document.getElementById("savebtn");

let lastsavetxt=document.getElementById("topmenu-right");

let leaguesbtn=document.getElementById("leaguebtn");
let teamsbtn=document.getElementById("teambtn");
let playersbtn=document.getElementById("playerbtn");

let secondmenuleagueslct=document.getElementById("secondmenuleagueslct");
let secondmenuleagueslctlabel=document.getElementById("secondmenuleagueslctlabel");

let secondmenuteamslct=document.getElementById("secondmenuteamslct");
let secondmenuteamslctlabel=document.getElementById("secondmenuteamslctlabel");

let leaguespanel=document.getElementById("leaguespanel");
let teamsplanel=document.getElementById("teamsplanel");
let playerspanel=document.getElementById("playerspanel");

let panel1slct=document.getElementById("panel1select");
let rivalslct=document.getElementById("team_rivalteam"); //The rival dropdown inside of the team details panel (top left)

let leagueteamlinks_leagueopts=document.getElementById("leagueopts");
let otherleagueteamlinksslct=document.getElementById("otherleagueteamlinks");
let leagueteamlinksslct=document.getElementById("leagueteamlinks");
let teamplayerlinksslct=document.getElementById("teamplayerlinks");
let otherteamplayerlinksslct=document.getElementById("otherteamplayerlinks");
let teamplayerlinks_otherteamopts = document.getElementById("teamplayerlinks_teamopts");
let player_nationality=document.getElementById("player_nationality");

let focus = {
    type: "league",
    value: 0
};

//db and other global vars
let db=null;

//---------------
//Tools
//---------------

function validateintinput(field, val, min, max) {

    if(!Number.isInteger(val)){val=parseInt(val);}
    
    val = Math.round(val);
    if(val<min){val=min;}
    if(val>max){val=max;}
    document.getElementById(field).value = val;
    savefieldinput(field, val.toString());
}

function validatecolorinput(field, type, val){
    val = Math.round(val);
    if(val<0){val=0;}
    if(val>255){val=255;}
    
    switch(field){
    case "team_maincolor":
        if(type=="red"){savefieldinput("team_color1r",val);}
        if(type=="green"){savefieldinput("team_color1g",val);}
        if(type=="blue"){savefieldinput("team_color1b",val);}
    break;
    case "team_secondarycolor":
        if(type=="red"){savefieldinput("team_color2r",val);}
        if(type=="green"){savefieldinput("team_color2g",val);}
        if(type=="blue"){savefieldinput("team_color2b",val);}
    break;
    case "team_tertiarycolor":
        if(type=="red"){savefieldinput("team_color3r",val);}
        if(type=="green"){savefieldinput("team_color3g",val);}
        if(type=="blue"){savefieldinput("team_color3b",val);}
    break;
    }
    
}

function validatestringinput(field, val, length){
    let slice=val.slice(0,23);
    document.getElementById(field).value=slice;
    savefieldinput(field, slice);
}

function checkboxinput(field){
    let checked=document.getElementById(field).checked; 
    let val="0";
    if(checked){val="1";}
    savefieldinput(field, val);
}

function savefieldinput(field, val){

    console.log(field, val);

    let league=db.leagues[focus.value];
    let team=getteamfromteamid(focus.value);
    let player=getplayerfromid(panel1slct.value);
    
    switch(field){
        case "league_leagueid": league.leagueid=val; break;
        case "league_leaguename": league.leaguename = val; break;
    case "league_countryid": league.countryid = val; break;
    case "league_level": league.level = val; break;
    case "league_timeslice": league.leaguetimeslice = val; break;
    case "league_scarfenabled": league.iscompetitionscarfenabled = val; break;
    case "league_bannerenabled": league.isbannerenabled = val; break;
    case "league_poleflagenabled": league.iscompetitionpoleflagenabled = val; break;
    case "league_crowdcardsenabled": league.iscompetitioncrowdcardsenabled = val; break;
        case "league_womens": league.iswomencompetition = val; break;
        case "team_teamname": team.teamname=val; updateteamnameinpanel1(team.teamid, val); break;
    case "team_foundationyear": team.foundationyear=val; break;
    case "team_clubworth": team.clubworth=val; break;
    case "team_profitability": team.profitability=val; break;
    case "team_domesticprestige": team.domesticprestige=val; break;
    case "team_internationalprestige": team.internationalprestige=val; break;
    case "team_popularity": team.popularity=val; break;
    case "team_youthdevelopment": team.youthdevelopment=val; break;
    case "team_rivalteam": team.rivalteam=val; break;
    case "team_ballid": team.ballid=val; break;
    case "team_ethnicity": team.ethnicity=val; break;
    case "team_crowdregion": team.crowdregion=val; break;
    case "team_crowdskintonecode": team.crowdskintonecode = val; break;
    case "team_stadiumcapacity": team.stadiumcapacity=val; break;
        case "team_color1r": team.teamcolor1r=val; break;
        case "team_color1g": team.teamcolor1g=val; break;
        case "team_color1b": team.teamcolor1b=val; break;
        case "team_color2r": team.teamcolor2r=val; break;
        case "team_color2g": team.teamcolor2g=val; break;
        case "team_color2b": team.teamcolor2b=val; break;
        case "team_color3r": team.teamcolor3r=val; break;
        case "team_color3g": team.teamcolor3g=val; break;
        case "team_color3b": team.teamcolor3b=val; break;
        case "player_playerid": player.playerid=val; break;
        case "player_birthdate": player.birthdate = val; break;
        case "player_nationality": player.nationality = val; break;
        case "player_height": player.height = val.toString(); break;
        case "player_weight": player.weight = val.toString(); break;
        case "player_gender": player.gender = val; break;
        case "player_foot": player.preferredfoot = val; break;
        case "player_weakfoot": player.weakfootabilitytypecode = val; break;
        case "player_position1": player.preferredposition1 = val; break;
        case "player_position2": player.preferredposition2 = val; break;
        case "player_position3": player.preferredposition3 = val; break;
        case "player_position4": player.preferredposition4 = val; break;
        case "player_defworkrate": player.defensiveworkrate = val; break;
        case "player_attworkrate": player.attackingworkrate = val; break;
        case "player_gkdiving": player.gkdiving = val; break;
        case "player_gkreflexes": player.gkreflexes = val; break;
        case "player_gkhandling": player.gkhandling = val; break;
        case "player_gkkicking": player.gkkicking = val; break;
        case "player_gkpositioning": player.gkpositioning = val; break;
        case "player_sprintspeed": player.sprintspeed = val; break;
        case "player_acceleration": player.acceleration = val; break;
        case "player_stamina": player.stamina = val; break;
        case "player_agility": player.agility = val; break;
        case "player_balance": player.balance = val; break;
        case "player_strength": player.strength = val; break;
        case "player_jumping": player.jumping = val; break;
        case "player_aggression": player.aggression = val; break;
        case "player_composure": player.composure = val; break;
        case "player_defawareness": player.defensiveawareness = val; break;
        case "player_positioning": player.positioning = val; break;
        case "player_reactions": player.reactions = val; break;
        case "player_vision": player.vision = val; break;
        case "player_interceptions": player.interceptions = val; break;
        case "player_slidingtackle": player.slidingtackle = val; break;
        case "player_standingtackle": player.standingtackle = val; break;
        case "player_heading": player.headingaccuracy = val; break;
        case "player_ballcontrol": player.ballcontrol = val; break;
        case "player_dribbling": player.dribbling = val; break;
        case "player_curve": player.curve = val; break;
        case "player_volleys": player.volleys = val; break;
        case "player_crossing": player.crossing = val; break;
        case "player_shortpassing": player.shortpassing = val; break;
        case "player_longpassing": player.longpassing = val; break;
        case "player_finishing": player.finishing = val; break;
        case "player_longshots": player.longshots = val; break;
        case "player_shotpower": player.shotpower = val; break;
        case "player_freekicks": player.freekickaccuracy = val; break;
        case "player_penalties": player.penalties = val; break;
        case "birthdate": player.birthdate=val; break;
        case "player_firstname": player.firstname=val; break;
        case "player_lastname": player.lastname=val; break;
        case "player_commonname": player.commonname=val; break;
        case "player_jerseyname": player.playerjerseyname=val; break;
        case "player_skintone": player.skintonecode=val; break;
        case "player_haircolor": player.haircolorcode=val; break;
    }
}

function getdatestring(date) {
  var year = date.getFullYear();
  var month = getmonthtxt(date.getMonth()+1,"long");
    var day = date.getDate();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    
    if(hours<10){hours="0" + hours;}
    if(minutes<10){minutes="0" + minutes;}
    
  return String(day + " " + month + " " + year + " " + hours + "" + minutes); // Leading zeros for mm and dd
}

function getmonthtxt(monthval,shortlong){
    switch(monthval){
        case 1: return (shortlong==='short') ? "Jan" : "January";
        case 2: return (shortlong === "short") ? "Feb" : "February";
        case 3: return (shortlong === "short") ? "Mar" : "March";
        case 4: return (shortlong === "short") ? "Apr" : "April";
        case 5: return (shortlong === "short") ? "May" : "May";
        case 6: return (shortlong === "short") ? "Jun" : "June";
        case 7: return (shortlong === "short") ? "Jul" : "July";
        case 8: return (shortlong === "short") ? "Aug" : "August";
        case 9: return (shortlong === "short") ? "Sep" : "September";
        case 10: return (shortlong === "short") ? "Oct" : "October";
        case 11: return (shortlong === "short") ? "Nov" : "November";
        case 12: return (shortlong === "short") ? "Dec" : "December";
    }
}

function rgbtohex(r, g, b) {
    
    let rgb=[r,g,b];
    
    for (let i=0;i<rgb.length;i++){
        let c = parseInt(rgb[i],10).toString(16);
        rgb[i]=c.length == 1? "0" + c : c;
    }
    
    return "#" + rgb[0] + rgb[1] + rgb[2];
}

function hextorgb(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}
