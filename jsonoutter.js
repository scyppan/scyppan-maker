//-------------------
//UI
//-------------------

function setupUIafterload(){
	document.getElementById("loadsmjson").style.display="none";
	document.getElementById("tableoutter").style.display="block";
	
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
	}
}

function outputleagues(){
	
	let output=`countryid\tleaguename\tleaguetype\tlevel\tiscompetitionscarfenabled\tisbannerenabled\tleagueid\tiscompetitionpoleflagenabled\tiscompetitioncrowdcardsenabled\tleaguetimeslice\tiswomencompetition\tiswithintransferwindow`;
	
	for(let i=0;i<db.leagues.length; i++){
	
		if(db.leagues[i].leaguename!=undefined){
	
		let leaguename=db.leagues[i].leaguename
		let safename = leaguename.replace("'","’").replace(".", "").replace("*", "");
		
		let row= String(`\n${db.leagues[i].countryid}	${safename}	${db.leagues[i].leaguetype}	${db.leagues[i].level}	${db.leagues[i].iscompetitionscarfenabled}	${db.leagues[i].isbannerenabled}	${db.leagues[i].leagueid}	${db.leagues[i].iscompetitionpoleflagenabled}	${db.leagues[i].iscompetitioncrowdcardsenabled}	${db.leagues[i].leaguetimeslice}	${db.leagues[i].iswomencompetition}	${db.leagues[i].iswithintransferwindow}`);
		
			output+=row;
		}
	}
	
	let filename = "sm23jsonoutter LEAGUESTABLE - " + getdatestring(new Date()) + ".txt";
	downloadtxt(output, filename);
}

function outputleagueteamlinks(){
	
	let output=`homega	previousyeartableposition	homegf	currenttableposition	awaygf	awayga	teamshortform	hasachievedobjective	yettowin	unbeatenallcomps	unbeatenleague	champion	leagueid	prevleagueid	highestpossible	teamform	highestprobable	homewins	artificialkey	nummatchesplayed	teamid	grouping	awaywins	objective	points	actualvsexpectations	homelosses	unbeatenhome	lastgameresult	unbeatenaway	awaylosses	awaydraws	homedraws	teamlongform`
	
	for(let i=0;i<db.leagueteamlinks.length; i++){
		if(db.leagueteamlinks[i].leagueid!=undefined){
	
		let row = String(`\n${db.leagueteamlinks[i].homega}\t${db.leagueteamlinks[i].previousyeartableposition}\t${db.leagueteamlinks[i].homegf}\t${db.leagueteamlinks[i].currenttableposition}\t${db.leagueteamlinks[i].awaygf}\t${db.leagueteamlinks[i].awayga}\t${db.leagueteamlinks[i].teamshortform}\t${db.leagueteamlinks[i].hasachievedobjective}\t${db.leagueteamlinks[i].yettowin}\t${db.leagueteamlinks[i].unbeatenallcomps}\t${db.leagueteamlinks[i].unbeatenleague}\t${db.leagueteamlinks[i].champion}\t${db.leagueteamlinks[i].leagueid}\t${db.leagueteamlinks[i].prevleagueid}\t${db.leagueteamlinks[i].highestpossible}\t${db.leagueteamlinks[i].teamform}\t${db.leagueteamlinks[i].highestprobable}\t${db.leagueteamlinks[i].homewins}\t${db.leagueteamlinks[i].artificialkey}\t${db.leagueteamlinks[i].nummatchesplayed}\t${db.leagueteamlinks[i].teamid}\t${db.leagueteamlinks[i].grouping}\t${db.leagueteamlinks[i].awaywins}\t${db.leagueteamlinks[i].objective}\t${db.leagueteamlinks[i].points}\t${db.leagueteamlinks[i].actualvsexpectations}\t${db.leagueteamlinks[i].homelosses}\t${db.leagueteamlinks[i].unbeatenhome}\t${db.leagueteamlinks[i].lastgameresult}\t${db.leagueteamlinks[i].unbeatenaway}\t${db.leagueteamlinks[i].awaylosses}\t${db.leagueteamlinks[i].awaydraws}\t${db.leagueteamlinks[i].homedraws}\t${db.leagueteamlinks[i].teamlongform}`);
	
		output+=row;
		}
	}
	
	let filename = "sm23jsonoutter LEAGUETEAMLINKSTABLE - " + getdatestring(new Date()) + ".txt";
	downloadtxt(output, filename);
}

function outputteams(){
	let output=`assetid	teamcolor1g	teamcolor1r	clubworth	teamcolor2b	goalnetstanchioncolor2g	teamcolor2r	foundationyear	goalnetstanchioncolor2r	teamcolor3r	goalnetstanchioncolor1b	teamcolor1b	opponentweakthreshold	latitude	teamcolor3g	opponentstrongthreshold	goalnetstanchioncolor2b	goalnetstanchioncolor1r	teamcolor2g	goalnetstanchioncolor1g	teamname	teamcolor3b	presassetone	powid	defensivestyle	hassubstitutionboard	rightfreekicktakerid	flamethrowercannon	domesticprestige	genericint2	defensivedepth	hasvikingclap	jerseytype	chancecreation	pitchcolor	pitchwear	popularity	hastifo	presassettwo	teamstadiumcapacity	stadiumgoalnetstyle	iscompetitionscarfenabled	cityid	defensivewidth	rivalteam	playsurfacetype	isbannerenabled	midfieldrating	stadiummowpattern_code	matchdayoverallrating	matchdaymidfieldrating	attackrating	playersinboxcorner	longitude	buildupplay	matchdaydefenserating	hasstandingcrowd	favoriteteamsheetid	defenserating	iscompetitionpoleflagenabled	skinnyflags	uefa_consecutive_wins	longkicktakerid	trait1vweak	iscompetitioncrowdcardsenabled	rightcornerkicktakerid	uefa_cl_wins	domesticcups	ethnicity	leftcornerkicktakerid	youthdevelopment	teamid	uefa_el_wins	trait1vequal	numtransfersin	playersinboxfk	stanchionflamethrower	stadiumgoalnetpattern	captainid	offensivestyle	personalityid	playersinboxcross	prev_el_champ	leftfreekicktakerid	leaguetitles	genericbanner	crowdregion	uefa_uecl_wins	overallrating	ballid	offensivewidth	profitability	utcoffset	penaltytakerid	pitchlinecolor	freekicktakerid	crowdskintonecode	internationalprestige	haslargeflag	trainingstadium	form	genericint1	trait1vstrong	matchdayattackrating`
	
	for(let i=0;i<db.teams.length; i++){
		if(db.teams[i].teamname!=undefined){
		let row = String(`\n${db.teams[i].assetid}\t${db.teams[i].teamcolor1g}\t${db.teams[i].teamcolor1r}\t${db.teams[i].clubworth}\t${db.teams[i].teamcolor2b}\t${db.teams[i].goalnetstanchioncolor2g}\t${db.teams[i].teamcolor2r}\t${db.teams[i].foundationyear}\t${db.teams[i].goalnetstanchioncolor2r}\t${db.teams[i].teamcolor3r}\t${db.teams[i].goalnetstanchioncolor1b}\t${db.teams[i].teamcolor1b}\t${db.teams[i].opponentweakthreshold}\t${db.teams[i].latitude}\t${db.teams[i].teamcolor3g}\t${db.teams[i].opponentstrongthreshold}\t${db.teams[i].goalnetstanchioncolor2b}\t${db.teams[i].goalnetstanchioncolor1r}\t${db.teams[i].teamcolor2g}\t${db.teams[i].goalnetstanchioncolor1g}\t${db.teams[i].teamname}\t${db.teams[i].teamcolor3b}\t${db.teams[i].presassetone}\t${db.teams[i].powid}\t${db.teams[i].defensivestyle}\t${db.teams[i].hassubstitutionboard}\t${db.teams[i].rightfreekicktakerid}\t${db.teams[i].flamethrowercannon}\t${db.teams[i].domesticprestige}\t${db.teams[i].genericint2}\t${db.teams[i].defensivedepth}\t${db.teams[i].hasvikingclap}\t${db.teams[i].jerseytype}\t${db.teams[i].chancecreation}\t${db.teams[i].pitchcolor}\t${db.teams[i].pitchwear}\t${db.teams[i].popularity}\t${db.teams[i].hastifo}\t${db.teams[i].presassettwo}\t${db.teams[i].teamstadiumcapacity}\t${db.teams[i].stadiumgoalnetstyle}\t${db.teams[i].iscompetitionscarfenabled}\t${db.teams[i].cityid}\t${db.teams[i].defensivewidth}\t${db.teams[i].rivalteam}\t${db.teams[i].playsurfacetype}\t${db.teams[i].isbannerenabled}\t${db.teams[i].midfieldrating}\t${db.teams[i].stadiummowpattern_code}\t${db.teams[i].matchdayoverallrating}\t${db.teams[i].matchdaymidfieldrating}\t${db.teams[i].attackrating}\t${db.teams[i].playersinboxcorner}\t${db.teams[i].longitude}\t${db.teams[i].buildupplay}\t${db.teams[i].matchdaydefenserating}\t${db.teams[i].hasstandingcrowd}\t${db.teams[i].favoriteteamsheetid}\t${db.teams[i].defenserating}\t${db.teams[i].iscompetitionpoleflagenabled}\t${db.teams[i].skinnyflags}\t${db.teams[i].uefa_consecutive_wins}\t${db.teams[i].longkicktakerid}\t${db.teams[i].trait1vweak}\t${db.teams[i].iscompetitioncrowdcardsenabled}\t${db.teams[i].rightcornerkicktakerid}\t${db.teams[i].uefa_cl_wins}\t${db.teams[i].domesticcups}\t${db.teams[i].ethnicity}\t${db.teams[i].leftcornerkicktakerid}\t${db.teams[i].youthdevelopment}\t${db.teams[i].teamid}\t${db.teams[i].uefa_el_wins}\t${db.teams[i].trait1vequal}\t${db.teams[i].numtransfersin}\t${db.teams[i].playersinboxfk}\t${db.teams[i].stanchionflamethrower}\t${db.teams[i].stadiumgoalnetpattern}\t${db.teams[i].captainid}\t${db.teams[i].offensivestyle}\t${db.teams[i].personalityid}\t${db.teams[i].playersinboxcross}\t${db.teams[i].prev_el_champ}\t${db.teams[i].leftfreekicktakerid}\t${db.teams[i].leaguetitles}\t${db.teams[i].genericbanner}\t${db.teams[i].crowdregion}\t${db.teams[i].uefa_uecl_wins}\t${db.teams[i].overallrating}\t${db.teams[i].ballid}\t${db.teams[i].offensivewidth}\t${db.teams[i].profitability}\t${db.teams[i].utcoffset}\t${db.teams[i].penaltytakerid}\t${db.teams[i].pitchlinecolor}\t${db.teams[i].freekicktakerid}\t${db.teams[i].crowdskintonecode}\t${db.teams[i].internationalprestige}\t${db.teams[i].haslargeflag}\t${db.teams[i].trainingstadium}\t${db.teams[i].form}\t${db.teams[i].genericint1}\t${db.teams[i].trait1vstrong}\t${db.teams[i].matchdayattackrating}`);
		
		output+=row;
		}//end of if statement
	}//end of for loop

	let filename = "sm23jsonoutter TEAMSTABLE - " + getdatestring(new Date()) + ".txt";
	downloadtxt(output, filename);
	
}//end of function

function outputteamplayerlinks(){
	
	let output=`leaguegoals	isamongtopscorers	yellows	isamongtopscorersinteam	jerseynumber	position	artificialkey	teamid	leaguegoalsprevmatch	injury	leagueappearances	istopscorer	leaguegoalsprevthreematches	playerid	form	reds`;
	
	for(let i=0;i<db.teamplayerlinks.length; i++){
		if(db.teamplayerlinks[i].playerid!=undefined){
			let row=`\n${db.teamplayerlinks[i].leaguegoals}\t${db.teamplayerlinks[i].isamongtopscorers}\t${db.teamplayerlinks[i].yellows}\t${db.teamplayerlinks[i].isamongtopscorersinteam}\t${db.teamplayerlinks[i].jerseynumber}\t${db.teamplayerlinks[i].position}\t${db.teamplayerlinks[i].artificialkey}\t${db.teamplayerlinks[i].teamid}\t${db.teamplayerlinks[i].leaguegoalsprevmatch}\t${db.teamplayerlinks[i].injury}\t${db.teamplayerlinks[i].leagueappearances}\t${db.teamplayerlinks[i].istopscorer}\t${db.teamplayerlinks[i].leaguegoalsprevthreematches}\t${db.teamplayerlinks[i].playerid}\t${db.teamplayerlinks[i].form}\t${db.teamplayerlinks[i].reds}`
			
			output+=row;
			}// end of it
	}// end of loop
	
	let filename = "sm23jsonoutter TEAMPLAYERLINKSTABLE - " + getdatestring(new Date()) + ".txt";
	downloadtxt(output, filename);

}//end of function

function outputplayersforsquadfile(){
	let output=`firstnameid	lastnameid	playerjerseynameid	commonnameid	skintypecode	trait2	haircolorcode	facialhairtypecode	curve	jerseystylecode	agility	tattooback	accessorycode4	gksavetype	positioning	tattooleftarm	hairtypecode	standingtackle	preferredposition3	longpassing	penalties	animfreekickstartposcode	isretiring	longshots	gkdiving	interceptions	shoecolorcode2	crossing	potential	gkreflexes	finishingcode1	reactions	composure	vision	contractvaliduntil	finishing	dribbling	slidingtackle	accessorycode3	accessorycolourcode1	headtypecode	driref	sprintspeed	height	hasseasonaljersey	tattoohead	preferredposition2	strength	shoetypecode	birthdate	preferredposition1	tattooleftleg	ballcontrol	phypos	shotpower	trait1	socklengthcode	weight	hashighqualityhead	gkglovetypecode	tattoorightarm	balance	gender	headassetid	gkkicking	defspe	internationalrep	shortpassing	freekickaccuracy	skillmoves	faceposerpreset	usercaneditname	avatarpomid	attackingworkrate	finishingcode2	aggression	acceleration	paskic	headingaccuracy	iscustomized	eyebrowcode	runningcode2	modifier	gkhandling	eyecolorcode	jerseysleevelengthcode	accessorycolourcode3	accessorycode1	playerjointeamdate	headclasscode	defensiveworkrate	tattoofront	nationality	preferredfoot	sideburnscode	weakfootabilitytypecode	jumping	personality	gkkickstyle	stamina	playerid	accessorycolourcode4	gkpositioning	headvariation	skillmoveslikelihood	shohan	skintonecode	shortstyle	overallrating	smallsidedshoetypecode	emotion	runstylecode	jerseyfit	accessorycode2	shoedesigncode	shoecolorcode1	hairstylecode	bodytypecode	animpenaltiesstartposcode	pacdiv	defensiveawareness	runningcode1	preferredposition4	volleys	accessorycolourcode2	tattoorightleg	facialhaircolorcode`;
	
	for(let i=0;i<db.players.length; i++){
		if(db.players[i].playerid!=undefined){
			let row=`\n0\t0\t0\t0t${db.players[i].skintypecode}\t${db.players[i].trait2}\t${db.players[i].haircolorcode}\t${db.players[i].facialhairtypecode}\t${db.players[i].curve}\t${db.players[i].jerseystylecode}\t${db.players[i].agility}\t${db.players[i].tattooback}\t${db.players[i].accessorycode4}\t${db.players[i].gksavetype}\t${db.players[i].positioning}\t${db.players[i].tattooleftarm}\t${db.players[i].hairtypecode}\t${db.players[i].standingtackle}\t${db.players[i].preferredposition3}\t${db.players[i].longpassing}\t${db.players[i].penalties}\t${db.players[i].animfreekickstartposcode}\t${db.players[i].isretiring}\t${db.players[i].longshots}\t${db.players[i].gkdiving}\t${db.players[i].interceptions}\t${db.players[i].shoecolorcode2}\t${db.players[i].crossing}\t${db.players[i].potential}\t${db.players[i].gkreflexes}\t${db.players[i].finishingcode1}\t${db.players[i].reactions}\t${db.players[i].composure}\t${db.players[i].vision}\t${db.players[i].contractvaliduntil}\t${db.players[i].finishing}\t${db.players[i].dribbling}\t${db.players[i].slidingtackle}\t${db.players[i].accessorycode3}\t${db.players[i].accessorycolourcode1}\t${db.players[i].headtypecode}\t${db.players[i].driref}\t${db.players[i].sprintspeed}\t${db.players[i].height}\t${db.players[i].hasseasonaljersey}\t${db.players[i].tattoohead}\t${db.players[i].preferredposition2}\t${db.players[i].strength}\t${db.players[i].shoetypecode}\t${db.players[i].birthdate}\t${db.players[i].preferredposition1}\t${db.players[i].tattooleftleg}\t${db.players[i].ballcontrol}\t${db.players[i].phypos}\t${db.players[i].shotpower}\t${db.players[i].trait1}\t${db.players[i].socklengthcode}\t${db.players[i].weight}\t${db.players[i].hashighqualityhead}\t${db.players[i].gkglovetypecode}\t${db.players[i].tattoorightarm}\t${db.players[i].balance}\t${db.players[i].gender}\t${db.players[i].headassetid}\t${db.players[i].gkkicking}\t${db.players[i].defspe}\t${db.players[i].internationalrep}\t${db.players[i].shortpassing}\t${db.players[i].freekickaccuracy}\t${db.players[i].skillmoves}\t${db.players[i].faceposerpreset}\t${db.players[i].usercaneditname}\t${db.players[i].avatarpomid}\t${db.players[i].attackingworkrate}\t${db.players[i].finishingcode2}\t${db.players[i].aggression}\t${db.players[i].acceleration}\t${db.players[i].paskic}\t${db.players[i].headingaccuracy}\t${db.players[i].iscustomized}\t${db.players[i].eyebrowcode}\t${db.players[i].runningcode2}\t${db.players[i].modifier}\t${db.players[i].gkhandling}\t${db.players[i].eyecolorcode}\t${db.players[i].jerseysleevelengthcode}\t${db.players[i].accessorycolourcode3}\t${db.players[i].accessorycode1}\t${db.players[i].playerjointeamdate}\t${db.players[i].headclasscode}\t${db.players[i].defensiveworkrate}\t${db.players[i].tattoofront}\t${db.players[i].nationality}\t${db.players[i].preferredfoot}\t${db.players[i].sideburnscode}\t${db.players[i].weakfootabilitytypecode}\t${db.players[i].jumping}\t${db.players[i].personality}\t${db.players[i].gkkickstyle}\t${db.players[i].stamina}\t${db.players[i].playerid}\t${db.players[i].accessorycolourcode4}\t${db.players[i].gkpositioning}\t${db.players[i].headvariation}\t${db.players[i].skillmoveslikelihood}\t${db.players[i].shohan}\t${db.players[i].skintonecode}\t${db.players[i].shortstyle}\t${db.players[i].overallrating}\t${db.players[i].smallsidedshoetypecode}\t${db.players[i].emotion}\t${db.players[i].runstylecode}\t${db.players[i].jerseyfit}\t${db.players[i].accessorycode2}\t${db.players[i].shoedesigncode}\t${db.players[i].shoecolorcode1}\t${db.players[i].hairstylecode}\t${db.players[i].bodytypecode}\t${db.players[i].animpenaltiesstartposcode}\t${db.players[i].pacdiv}\t${db.players[i].defensiveawareness}\t${db.players[i].runningcode1}\t${db.players[i].preferredposition4}\t${db.players[i].volleys}\t${db.players[i].accessorycolourcode2}\t${db.players[i].tattoorightleg}`;
			output+=row;
		}//end of if
	}//end of loop
	
	let filename = "sm23jsonoutter PLAYERS_FORSQUAD_TABLE - " + getdatestring(new Date()) + ".txt";
	downloadtxt(output, filename);
}

function outputplayersforfifa_ng_db(){
	let output=`haircolorcode	facialhairtypecode	curve	jerseystylecode	agility	tattooback	accessorycode4	gksavetype	positioning	tattooleftarm	hairtypecode	standingtackle	preferredposition3	longpassing	penalties	animfreekickstartposcode	isretiring	longshots	gkdiving	interceptions	shoecolorcode2	crossing	potential	gkreflexes	finishingcode1	reactions	composure	vision	contractvaliduntil	finishing	dribbling	slidingtackle	accessorycode3	accessorycolourcode1	headtypecode	firstnameid	driref	sprintspeed	height	hasseasonaljersey	tattoohead	preferredposition2	strength	shoetypecode	birthdate	preferredposition1	tattooleftleg	ballcontrol	phypos	shotpower	trait1	socklengthcode	weight	hashighqualityhead	gkglovetypecode	tattoorightarm	balance	gender	headassetid	gkkicking	lastnameid	defspe	internationalrep	shortpassing	freekickaccuracy	skillmoves	faceposerpreset	usercaneditname	avatarpomid	attackingworkrate	finishingcode2	aggression	acceleration	paskic	headingaccuracy	iscustomized	eyebrowcode	runningcode2	modifier	gkhandling	eyecolorcode	jerseysleevelengthcode	accessorycolourcode3	accessorycode1	playerjointeamdate	headclasscode	defensiveworkrate	tattoofront	nationality	preferredfoot	sideburnscode	weakfootabilitytypecode	jumping	skintypecode	personality	gkkickstyle	stamina	playerid	accessorycolourcode4	gkpositioning	headvariation	skillmoveslikelihood	trait2	shohan	skintonecode	shortstyle	overallrating	smallsidedshoetypecode	emotion	runstylecode	jerseyfit	accessorycode2	shoedesigncode	playerjerseynameid	shoecolorcode1	hairstylecode	commonnameid	bodytypecode	animpenaltiesstartposcode	pacdiv	defensiveawareness	runningcode1	preferredposition4	volleys	accessorycolourcode2	tattoorightleg	facialhaircolorcode`;
	
	for(let i=0;i<db.players.length; i++){
		if(db.players[i].playerid!=undefined){
			
			let row=`\n${db.players[i].haircolorcode}\t${db.players[i].facialhairtypecode}\t${db.players[i].curve}\t${db.players[i].jerseystylecode}\t${db.players[i].agility}\t${db.players[i].tattooback}\t${db.players[i].accessorycode4}\t${db.players[i].gksavetype}\t${db.players[i].positioning}\t${db.players[i].tattooleftarm}\t${db.players[i].hairtypecode}\t${db.players[i].standingtackle}\t${db.players[i].preferredposition3}\t${db.players[i].longpassing}\t${db.players[i].penalties}\t${db.players[i].animfreekickstartposcode}\t${db.players[i].isretiring}\t${db.players[i].longshots}\t${db.players[i].gkdiving}\t${db.players[i].interceptions}\t${db.players[i].shoecolorcode2}\t${db.players[i].crossing}\t${db.players[i].potential}\t${db.players[i].gkreflexes}\t${db.players[i].finishingcode1}\t${db.players[i].reactions}\t${db.players[i].composure}\t${db.players[i].vision}\t${db.players[i].contractvaliduntil}\t${db.players[i].finishing}\t${db.players[i].dribbling}\t${db.players[i].slidingtackle}\t${db.players[i].accessorycode3}\t${db.players[i].accessorycolourcode1}\t${db.players[i].headtypecode}\t0\t${db.players[i].driref}\t${db.players[i].sprintspeed}\t${db.players[i].height}\t${db.players[i].hasseasonaljersey}\t${db.players[i].tattoohead}\t${db.players[i].preferredposition2}\t${db.players[i].strength}\t${db.players[i].shoetypecode}\t${db.players[i].birthdate}\t${db.players[i].preferredposition1}\t${db.players[i].tattooleftleg}\t${db.players[i].ballcontrol}\t${db.players[i].phypos}\t${db.players[i].shotpower}\t${db.players[i].trait1}\t${db.players[i].socklengthcode}\t${db.players[i].weight}\t${db.players[i].hashighqualityhead}\t${db.players[i].gkglovetypecode}\t${db.players[i].tattoorightarm}\t${db.players[i].balance}\t${db.players[i].gender}\t${db.players[i].headassetid}\t${db.players[i].gkkicking}\t0\t${db.players[i].defspe}\t${db.players[i].internationalrep}\t${db.players[i].shortpassing}\t${db.players[i].freekickaccuracy}\t${db.players[i].skillmoves}\t${db.players[i].faceposerpreset}\t${db.players[i].usercaneditname}\t${db.players[i].avatarpomid}\t${db.players[i].attackingworkrate}\t${db.players[i].finishingcode2}\t${db.players[i].aggression}\t${db.players[i].acceleration}\t${db.players[i].paskic}\t${db.players[i].headingaccuracy}\t${db.players[i].iscustomized}\t${db.players[i].eyebrowcode}\t${db.players[i].runningcode2}\t${db.players[i].modifier}\t${db.players[i].gkhandling}\t${db.players[i].eyecolorcode}\t${db.players[i].jerseysleevelengthcode}\t${db.players[i].accessorycolourcode3}\t${db.players[i].accessorycode1}\t${db.players[i].playerjointeamdate}\t${db.players[i].headclasscode}\t${db.players[i].defensiveworkrate}\t${db.players[i].tattoofront}\t${db.players[i].nationality}\t${db.players[i].preferredfoot}\t${db.players[i].sideburnscode}\t${db.players[i].weakfootabilitytypecode}\t${db.players[i].jumping}\t${db.players[i].skintypecode}\t${db.players[i].personality}\t${db.players[i].gkkickstyle}\t${db.players[i].stamina}\t${db.players[i].playerid}\t${db.players[i].accessorycolourcode4}\t${db.players[i].gkpositioning}\t${db.players[i].headvariation}\t${db.players[i].skillmoveslikelihood}\t${db.players[i].trait2}\t${db.players[i].shohan}\t${db.players[i].skintonecode}\t${db.players[i].shortstyle}\t${db.players[i].overallrating}\t${db.players[i].smallsidedshoetypecode}\t${db.players[i].emotion}\t${db.players[i].runstylecode}\t${db.players[i].jerseyfit}\t${db.players[i].accessorycode2}\t${db.players[i].shoedesigncode}\t0\t${db.players[i].shoecolorcode1}\t${db.players[i].hairstylecode}\t0\t${db.players[i].bodytypecode}\t${db.players[i].animpenaltiesstartposcode}\t${db.players[i].pacdiv}\t${db.players[i].defensiveawareness}\t${db.players[i].runningcode1}\t${db.players[i].preferredposition4}\t${db.players[i].volleys}\t${db.players[i].accessorycolourcode2}\t${db.players[i].tattoorightleg}\t${db.players[i].facialhaircolorcode}`;
			output+=row;
			
		}// end of if
	}//end of loop
	let filename = "sm23jsonoutter PLAYERS_FORFIFA_NG_DB_TABLE - " + getdatestring(new Date()) + ".txt";
	downloadtxt(output, filename);
}//end of function

function outputeditedplayernames(){
	let output=`firstname\tcommonname\tplayerjerseyname\tsurname\tplayerid`;

	for(let i=0;i<db.players.length; i++){
		if(db.players[i].playerid!=undefined){
		let row=`\n${db.players[i].firstname}\t${db.players[i].commonname}\t${db.players[i].jerseyname}\t${db.players[i].lastname}\t${db.players[i].playerid}`;
		output+=row;
		}//end of if
	}//end of loop
	let filename = "sm23jsonoutter EDITEDPLAYERNAMES_TABLE - " + getdatestring(new Date()) + ".txt";
	downloadtxt(output, filename);
}//end of function

//-------------------
//Global Vars
//-------------------

let db=null;

//-------------------
//Tools
//-------------------

function downloadtxt(txt,filename){

	var link = window.document.createElement("a");
	link.setAttribute("href", "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(txt));
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