
  $( function() {
    var availableTags = [
      "1000-rupees" ,
      "1080p" ,
      "aadhaar" ,
      "aiboc" ,
      "aiims" ,
      "aradhana" ,
      "attack" ,
      "aabar" ,
      "aachhi" ,
      "aagdom" ,
      "aaghat" ,
      "aagun" ,
      "aamaar" ,
      "aamar" ,
      "aamay" ,
      "aanko" ,
      "aarti" ,
      "aasan" ,
      "aasare" ,
      "aashini" ,
      "aashiqui" ,
      "aashroy" ,
      "abchha" ,
      "abduction" ,
      "abductors" ,
      "abhijit" ,
      "abhishek" ,
      "accepted" ,
      "acharya" ,
      "achchha" ,
      "acoustic" ,
      "action" ,
      "actor" ,
      "actors" ,
      "adalat" ,
      "addata" ,
      "adesh" ,
      "adnan" ,
      "agantuk" ,
      "agency" ,
      "agenda" ,
      "airport" ,
      "akash" ,
      "akashe" ,
      "akasher" ,
      "akhane" ,
      "akhno" ,
      "akhnoor" ,
      "akshay" ,
      "al-hanif" ,
      "album" ,
      "aloye" ,
      "alpana" ,
      "amader" ,
      "amake" ,
      "amare" ,
      "amarinder" ,
      "amazing" ,
      "ambit" ,
      "american" ,
      "ammer" ,
      "analysis" ,
      "anand" ,
      "anindya" ,
      "anisha" ,
      "anjan" ,
      "anjana" ,
      "ankhi" ,
      "ankhipatay" ,
      "ankush" ,
      "announcement" ,
      "ansuman" ,
      "antara" ,
      "antasheela" ,
      "antony" ,
      "anugatojane" ,
      "anuradha" ,
      "anutap" ,
      "apronoy" ,
      "arati" ,
      "arifin" ,
      "arijit" ,
      "arshi" ,
      "artist" ,
      "artistes" ,
      "arvind" ,
      "ashar" ,
      "ashwini" ,
      "asilen" ,
      "assam" ,
      "assembly" ,
      "astarage" ,
      "atanu" ,
      "attack" ,
      "attacked" ,
      "attacking" ,
      "attacks" ,
      "attim" ,
      "audio" ,
      "aunindyo" ,
      "author" ,
      "awara" ,
      "award" ,
      "azhar" ,
      "bangla" ,
      "brishty" ,
      "bachhar" ,
      "backstage" ,
      "badal" ,
      "badtameez" ,
      "bagchi" ,
      "bagdom" ,
      "bahudore" ,
      "bairagi" ,
      "baishakhe" ,
      "baiya" ,
      "bajjati" ,
      "bakulgandhe" ,
      "bakum" ,
      "balidaan" ,
      "balukabelay" ,
      "bande" ,
      "bandhiyachhi" ,
      "bandona" ,
      "banerjee" ,
      "bangla" ,
      "bangladesh" ,
      "bangladeshi" ,
      "banglar" ,
      "banikng" ,
      "banka" ,
      "banking" ,
      "banks" ,
      "banned" ,
      "bannerji" ,
      "banshi" ,
      "bappi" ,
      "barabanki" ,
      "barasha" ,
      "bareli" ,
      "barhi" ,
      "barkha" ,
      "barosha" ,
      "basanta" ,
      "bashi" ,
      "bastar" ,
      "batas" ,
      "beethoven" ,
      "begum" ,
      "belay" ,
      "bengal" ,
      "bengali" ,
      "bengaluru" ,
      "bhabna" ,
      "bhabo" ,
      "bhagat" ,
      "bhagwan" ,
      "bhagwati" ,
      "bhajan" ,
      "bhajo" ,
      "bhakti" ,
      "bhalo" ,
      "bhalobasar" ,
      "bhalobasina" ,
      "bhalobese" ,
      "bhalobesechi" ,
      "bhangar" ,
      "bharane" ,
      "bharatlakshmi" ,
      "bhari" ,
      "bhattacharya" ,
      "bhavaiya" ,
      "bhawaiya" ,
      "bhijiye" ,
      "bhikhari" ,
      "bhirlo" ,
      "bhishan" ,
      "bholabo" ,
      "bhora" ,
      "bhosle" ,
      "bhramar" ,
      "bhuban" ,
      "bhule" ,
      "bhusan" ,
      "bidrohi" ,
      "bijli" ,
      "bilambita" ,
      "bilap" ,
      "biometric" ,
      "bipulo" ,
      "birsa" ,
      "biyer" ,
      "black" ,
      "boatman" ,
      "bobby" ,
      "boishakh" ,
      "bojhabo" ,
      "bojho" ,
      "bolbo" ,
      "bolchhe" ,
      "bolchi" ,
      "boleche" ,
      "bolei" ,
      "bollo" ,
      "bollywood" ,
      "bolte" ,
      "bondhu" ,
      "bongo" ,
      "bookmychotu" ,
      "bookmychotu.com" ,
      "boral" ,
      "border" ,
      "breathe" ,
      "briddhashram" ,
      "brigade" ,
      "brishti" ,
      "bristi" ,
      "bujhi" ,
      "bujhini" ,
      "bureau" ,
      "burman" ,
      "cactus" ,
      "calcutta" ,
      "canonical" ,
      "capital" ,
      "centre" ,
      "chaddha" ,
      "chado" ,
      "chaitali" ,
      "chakraborty" ,
      "chakravarty" ,
      "chalo" ,
      "chalona" ,
      "chamatkar" ,
      "champaker" ,
      "chanchala" ,
      "chand" ,
      "chanda" ,
      "chandana" ,
      "chande" ,
      "chandini" ,
      "chandiyal" ,
      "chandra" ,
      "chandramallika" ,
      "channel" ,
      "chants" ,
      "chaoya" ,
      "character" ,
      "charano" ,
      "chashma" ,
      "chatterjee" ,
      "chattopadhyay" ,
      "chaudhary" ,
      "chaudhuri" ,
      "chennai" ,
      "chetan" ,
      "cheye" ,
      "cheyechhe" ,
      "cheyechhi" ,
      "chhadna" ,
      "chhattisgarh" ,
      "chhere" ,
      "chherona" ,
      "chhilam" ,
      "chhilo" ,
      "chhoto" ,
      "chhotto" ,
      "chidambaram" ,
      "chief" ,
      "child" ,
      "china" ,
      "chirodiner" ,
      "chirodini" ,
      "chirotikta" ,
      "choir" ,
      "choker" ,
      "chokh" ,
      "chokhe" ,
      "chokher" ,
      "chole" ,
      "cholte" ,
      "chowa" ,
      "chowdhary" ,
      "chowdhury" ,
      "christine" ,
      "chumki" ,
      "cinema" ,
      "cinemar" ,
      "city/town/village" ,
      "classic" ,
      "clean" ,
      "coffee" ,
      "collection" ,
      "colonel" ,
      "comedian" ,
      "comedy" ,
      "commando" ,
      "commandos" ,
      "commission" ,
      "composer" ,
      "composition" ,
      "confederation" ,
      "conference" ,
      "congress" ,
      "consolation" ,
      "control" ,
      "cooperative" ,
      "cosmic" ,
      "council" ,
      "counter" ,
      "country" ,
      "court" ,
      "cricket" ,
      "crunch" ,
      "currency" ,
      "dabiq" ,
      "dadar" ,
      "daily" ,
      "dakchhe" ,
      "dalaal" ,
      "dance" ,
      "daniel" ,
      "danny" ,
      "dantabiheen" ,
      "darza" ,
      "dasgupta" ,
      "dawood" ,
      "dayal" ,
      "debashis" ,
      "debashree" ,
      "debate" ,
      "december" ,
      "deewana" ,
      "deewani" ,
      "defence" ,
      "dekechhe" ,
      "dekha" ,
      "dekhechhi" ,
      "dekhi" ,
      "dekho" ,
      "dekhum" ,
      "delhi" ,
      "demolition" ,
      "demonatization" ,
      "demonetisation" ,
      "demonetised" ,
      "demonetization" ,
      "demontisation" ,
      "deposit" ,
      "deshe" ,
      "devotional" ,
      "dhanyi" ,
      "dhare" ,
      "dharite" ,
      "dhawan" ,
      "dhina" ,
      "dhire" ,
      "dhori" ,
      "dhrubatara" ,
      "dialogues" ,
      "dighar" ,
      "digital" ,
      "digitisation" ,
      "digitization" ,
      "dilip" ,
      "dinabandhu" ,
      "dingulo" ,
      "dipanwita" ,
      "director" ,
      "directorate" ,
      "divine" ,
      "dobar" ,
      "doorer" ,
      "doval" ,
      "drishtite" ,
      "driver" ,
      "duets" ,
      "dujanay" ,
      "dukhha" ,
      "duluni" ,
      "durga" ,
      "dutta" ,
      "dwijen" ,
      "e-cash" ,
      "e-wallets" ,
      "eagle" ,
      "ebhabe" ,
      "economy" ,
      "effects" ,
      "ekbar" ,
      "ekbari" ,
      "ekdin" ,
      "eksho" ,
      "ektuku" ,
      "ekush" ,
      "elections" ,
      "emergency" ,
      "emotional" ,
      "english" ,
      "esechhi" ,
      "esechhilo" ,
      "esona" ,
      "ethnicity" ,
      "even-odd" ,
      "evergreen" ,
      "evergreens" ,
      "exclusive" ,
      "exercise" ,
      "eye-witness" ,
      "ficci" ,
      "factory" ,
      "facts" ,
      "faisal" ,
      "fakir" ,
      "faria" ,
      "farmers" ,
      "fateh" ,
      "fictional" ,
      "fight" ,
      "films" ,
      "finance" ,
      "firingee" ,
      "firoza" ,
      "folks" ,
      "footage" ,
      "force" ,
      "formula" ,
      "funds" ,
      "gaane" ,
      "gaaner" ,
      "gabhir" ,
      "gabriel" ,
      "gachhe" ,
      "gachher" ,
      "gadkari" ,
      "gagari" ,
      "gandhi" ,
      "ganga" ,
      "ganger" ,
      "gangster" ,
      "gannguli" ,
      "garden" ,
      "gardens" ,
      "gaurab" ,
      "gauriprasanna" ,
      "gechhi" ,
      "geeta" ,
      "geeti" ,
      "geetimoy" ,
      "gelam" ,
      "general" ,
      "genre" ,
      "georg" ,
      "getta" ,
      "gharkhanay" ,
      "ghatak" ,
      "ghoradom" ,
      "ghore" ,
      "ghosh" ,
      "ghoshal" ,
      "ghure" ,
      "giant" ,
      "goalparia" ,
      "google" ,
      "gopal" ,
      "gostho" ,
      "gourchand" ,
      "government" ,
      "graher" ,
      "greatest" ,
      "grihatyagi" ,
      "group" ,
      "growth" ,
      "gubbi" ,
      "guitar" ,
      "gujarat" ,
      "gupta" ,
      "gurdaspur" ,
      "gursewak" ,
      "gurudev" ,
      "gustav" ,
      "gyalo" ,
      "hemanta" ,
      "holud" ,
      "haate" ,
      "hafiz" ,
      "hallozen" ,
      "halud" ,
      "hamanta" ,
      "haqiqat" ,
      "harabo" ,
      "harano" ,
      "harate" ,
      "harvinder" ,
      "hathaat" ,
      "hatti" ,
      "hattim" ,
      "hawala" ,
      "hazarat" ,
      "hazari" ,
      "hazra" ,
      "headlines" ,
      "hemanta" ,
      "hemendra" ,
      "herald" ,
      "high-value" ,
      "highway" ,
      "hnushiar" ,
      "hoarders" ,
      "hobuchandra" ,
      "holiday" ,
      "hospital" ,
      "hotel" ,
      "houser" ,
      "hoyechhilo" ,
      "hoyto" ,
      "hriday" ,
      "hridaye" ,
      "human" ,
      "humlog" ,
      "hymns" ,
      "imran" ,
      "ibrahim" ,
      "ilish" ,
      "imran" ,
      "income" ,
      "indelible" ,
      "independence" ,
      "india" ,
      "india's" ,
      "india-pakistan" ,
      "indian" ,
      "indiatoday" ,
      "indira" ,
      "indradhanu" ,
      "indrani" ,
      "industries" ,
      "intelligence" ,
      "interview" ,
      "interviews" ,
      "intrinz" ,
      "investigation" ,
      "ishani" ,
      "islam" ,
      "janani" ,
      "joware" ,
      "jaaneman" ,
      "jabar" ,
      "jaganmoy" ,
      "jagdish" ,
      "jagniwas" ,
      "jaish-e-mohammad" ,
      "jaish-e-mohammed" ,
      "jaitley" ,
      "jakhan" ,
      "jamini" ,
      "jammu" ,
      "janala" ,
      "janam" ,
      "janardhana" ,
      "janina" ,
      "jantam" ,
      "japan" ,
      "jatek" ,
      "jater" ,
      "jaunpur" ,
      "jawaani" ,
      "jawab" ,
      "jawans" ,
      "jayalalithaa" ,
      "jayati" ,
      "jedin" ,
      "jeevan" ,
      "jhalmal" ,
      "jhank" ,
      "jharena" ,
      "jharer" ,
      "jhenpe" ,
      "jhikimiki" ,
      "jhinuk" ,
      "jhola" ,
      "jiban" ,
      "jibane" ,
      "jibon" ,
      "jihad" ,
      "jirna" ,
      "jochhonay" ,
      "jogmaya" ,
      "johar" ,
      "joint" ,
      "jokes" ,
      "jolly" ,
      "jonyo" ,
      "jouboner" ,
      "journalist" ,
      "jukebox" ,
      "jukto" ,
      "juthika" ,
      "jwala" ,
      "jwalate" ,
      "jwale" ,
      "jwele" ,
      "kashmir" ,
      "kaali" ,
      "kabir" ,
      "kache" ,
      "kachhe" ,
      "kadambini" ,
      "kagoje" ,
      "kahare" ,
      "kajal" ,
      "kakhan" ,
      "kakhono" ,
      "kalikesh" ,
      "kalpana" ,
      "kandari" ,
      "kande" ,
      "kanika" ,
      "kanpur" ,
      "kanta" ,
      "kapoor" ,
      "karan" ,
      "karkash" ,
      "karli" ,
      "karnataka" ,
      "karol" ,
      "kashmir" ,
      "kasta" ,
      "kasto" ,
      "katha" ,
      "kathay" ,
      "katodin" ,
      "katona" ,
      "kaulitz" ,
      "kavita" ,
      "kejriwal" ,
      "kemon" ,
      "kerala" ,
      "khabarein" ,
      "khame" ,
      "khawaja" ,
      "khela" ,
      "khnoje" ,
      "khola" ,
      "khonje" ,
      "khuku" ,
      "khulya" ,
      "khunje" ,
      "khunji" ,
      "khushi" ,
      "khyapa" ,
      "kichhu" ,
      "kichhui" ,
      "kinchho" ,
      "kiran" ,
      "kirti" ,
      "kishor" ,
      "kishore" ,
      "kohibo" ,
      "kohlian" ,
      "kolir" ,
      "kolkata" ,
      "korche" ,
      "korechhe" ,
      "korechho" ,
      "korilo" ,
      "kotha" ,
      "kothai" ,
      "kripa" ,
      "krishna" ,
      "krishnakali" ,
      "krishnamurthy" ,
      "kshama" ,
      "kshep" ,
      "kuler" ,
      "kumar" ,
      "kumir" ,
      "kuntalini" ,
      "kupwara" ,
      "kurai" ,
      "laagchhe" ,
      "labourers" ,
      "lahiri" ,
      "laila" ,
      "lalan" ,
      "lalchand" ,
      "lalite" ,
      "langate" ,
      "language" ,
      "latest" ,
      "lekho" ,
      "lieutenant" ,
      "likhi" ,
      "lipika" ,
      "literature" ,
      "local" ,
      "lokgeet" ,
      "lokgeeti" ,
      "lolona" ,
      "lopamudra" ,
      "lukochuri" ,
      "lyrics" ,
      "mitra" ,
      "mukherjee" ,
      "machhi" ,
      "madan" ,
      "madhabi" ,
      "madhobi" ,
      "madhur" ,
      "mahabhage" ,
      "mahadev" ,
      "mahalaya" ,
      "mahanayika" ,
      "maharashtra" ,
      "mahashivaratri" ,
      "mahira" ,
      "mahmood" ,
      "majhare" ,
      "majhi" ,
      "makha" ,
      "malik" ,
      "mallick" ,
      "mallorca" ,
      "mamata" ,
      "manabendra" ,
      "mandira" ,
      "mangal" ,
      "mangeshkar" ,
      "manisha" ,
      "manna" ,
      "manohar" ,
      "manomay" ,
      "markets" ,
      "martyred" ,
      "martyrs" ,
      "mashup" ,
      "masood" ,
      "massive" ,
      "matai" ,
      "mataram" ,
      "matim" ,
      "maulana" ,
      "mayabi" ,
      "mayurkanthi" ,
      "mazhar" ,
      "mazood" ,
      "mazumder" ,
      "medalist" ,
      "media" ,
      "megha" ,
      "meghe" ,
      "megher" ,
      "mehbooba" ,
      "mehreen" ,
      "memon" ,
      "memon's" ,
      "memorable" ,
      "milan" ,
      "milane" ,
      "milaner" ,
      "millitant" ,
      "minister" ,
      "mintoo" ,
      "minute" ,
      "mishra" ,
      "misti" ,
      "mitali" ,
      "mithye" ,
      "mitra" ,
      "modern" ,
      "modhupey" ,
      "modi's" ,
      "molly" ,
      "monbhari" ,
      "monbitane" ,
      "moner" ,
      "money" ,
      "monphande" ,
      "month" ,
      "moradabad" ,
      "morechhi" ,
      "mouse" ,
      "mousumi" ,
      "movie" ,
      "movies" ,
      "moyna" ,
      "moynamati" ,
      "moynar" ,
      "moyuri" ,
      "mrinmoyee" ,
      "mufti" ,
      "mujahideen" ,
      "mukhapadhyay" ,
      "mukherjea" ,
      "mukherjee" ,
      "mukherji" ,
      "mukhopadhyay" ,
      "mukunda" ,
      "multimedia" ,
      "mumbai" ,
      "munish" ,
      "muqabla" ,
      "murali" ,
      "mushkil" ,
      "music" ,
      "musical" ,
      "musician" ,
      "muzaffarabad" ,
      "muzaffarnagar" ,
      "nabard" ,
      "noyon" ,
      "naame" ,
      "nabanidas" ,
      "nabodurga" ,
      "nache" ,
      "nachiketa" ,
      "nagar" ,
      "nagarbasi" ,
      "nagare" ,
      "naghma" ,
      "naiko" ,
      "naiya" ,
      "najeeb" ,
      "nanadire" ,
      "nandan" ,
      "nandi" ,
      "naoer" ,
      "narayan" ,
      "narenda" ,
      "narendra" ,
      "narmada" ,
      "national" ,
      "nations" ,
      "natok" ,
      "natun" ,
      "naved" ,
      "nawaz" ,
      "nayan" ,
      "nayane" ,
      "nayar" ,
      "nayikar" ,
      "nazrul" ,
      "neelimay" ,
      "neerabe" ,
      "neeti" ,
      "nesha" ,
      "nidhi" ,
      "nidhu" ,
      "nifty" ,
      "nijhum" ,
      "nilekani" ,
      "nilkamal" ,
      "nilkantha" ,
      "niralay" ,
      "niranjan" ,
      "nirjan" ,
      "nirmala" ,
      "nishiraat" ,
      "nitin" ,
      "nitya" ,
      "nonstop" ,
      "north" ,
      "notes" ,
      "notest" ,
      "notification" ,
      "number" ,
      "nupur" ,
      "nursery" ,
      "nusrat" ,
      "odd-even" ,
      "officers'" ,
      "official" ,
      "officials" ,
      "onkar" ,
      "original" ,
      "pakhi" ,
      "pathankot" ,
      "premer" ,
      "pagal" ,
      "pagol" ,
      "pakhi" ,
      "pakhira" ,
      "pakistan" ,
      "pakistani" ,
      "palligeeti" ,
      "palma" ,
      "palta" ,
      "pannalal" ,
      "pantha" ,
      "paoya" ,
      "parali" ,
      "parechhe" ,
      "parle" ,
      "parliament" ,
      "parody" ,
      "parrikar" ,
      "party" ,
      "parvez" ,
      "passionate" ,
      "patay" ,
      "patel" ,
      "pathankot" ,
      "pathe" ,
      "pather" ,
      "pathor" ,
      "paytm" ,
      "payment" ,
      "payra" ,
      "paytm" ,
      "penalty" ,
      "people" ,
      "pepper" ,
      "performance" ,
      "perry" ,
      "person" ,
      "personality" ,
      "peshay" ,
      "petkati" ,
      "phire" ,
      "phool" ,
      "phuler" ,
      "phutechhe" ,
      "pichhu" ,
      "pictures" ,
      "pilibhit" ,
      "pintoo" ,
      "pohay" ,
      "polka" ,
      "polli" ,
      "polls" ,
      "popular" ,
      "populor" ,
      "prabhu" ,
      "pradesh" ,
      "prakash" ,
      "pramod" ,
      "pranab" ,
      "pranay" ,
      "prantarer" ,
      "prasenjit" ,
      "prashna" ,
      "pratapgarh" ,
      "pratham" ,
      "pratibaad" ,
      "pratip" ,
      "president" ,
      "prime" ,
      "pritam" ,
      "prithibi" ,
      "priya" ,
      "priye" ,
      "priyotamo" ,
      "profession" ,
      "profit" ,
      "program" ,
      "project" ,
      "property" ,
      "prosenjit" ,
      "pujari" ,
      "pujor" ,
      "pulak" ,
      "punjab" ,
      "purnadas" ,
      "purnimari" ,
      "puthiya" ,
      "putul" ,
      "refilling" ,
      "raabta" ,
      "raate" ,
      "raatein" ,
      "raatey" ,
      "rabbikin" ,
      "rabindra" ,
      "rabindranath" ,
      "radhashyam" ,
      "radio" ,
      "raghav" ,
      "raheel" ,
      "rahul" ,
      "raids" ,
      "rajar" ,
      "rajasthan" ,
      "rajat" ,
      "rajeev" ,
      "rajesh" ,
      "rajnath" ,
      "rajnish" ,
      "rakhbo" ,
      "rakhi" ,
      "rally" ,
      "ramkanai" ,
      "ramkrishna" ,
      "ramkumar" ,
      "ramnidhi" ,
      "ranbir" ,
      "ranga" ,
      "rangers" ,
      "rangmashal" ,
      "ranjana" ,
      "rashtriya" ,
      "rastay" ,
      "ratan" ,
      "rater" ,
      "ravish" ,
      "razdan" ,
      "ready" ,
      "record" ,
      "recording" ,
      "records" ,
      "reddy" ,
      "reddy's" ,
      "refuses" ,
      "regiment" ,
      "rekhe" ,
      "relations" ,
      "remix" ,
      "reserve" ,
      "revenue" ,
      "rhymes" ,
      "rickshawala" ,
      "ridoy" ,
      "rifles" ,
      "right" ,
      "riots" ,
      "rituparna" ,
      "roder" ,
      "romantic" ,
      "rudra" ,
      "rules" ,
      "rupankar" ,
      "rupee" ,
      "ruper" ,
      "rural" ,
      "russia" ,
      "shadhi" ,
      "shakti" ,
      "shyamal" ,
      "saadher" ,
      "sabnavis" ,
      "sabyasachi" ,
      "sadhana" ,
      "saeed" ,
      "sagar" ,
      "sahar" ,
      "saikat" ,
      "sajalpurer" ,
      "sakale" ,
      "sakhi" ,
      "salil" ,
      "salman" ,
      "salwinder" ,
      "samadhi" ,
      "samay" ,
      "samuel" ,
      "sandhaye" ,
      "sandhya" ,
      "sandhyay" ,
      "sangeet" ,
      "sangi" ,
      "sangsare" ,
      "sankaram" ,
      "sansani" ,
      "sanyal" ,
      "saraswati" ,
      "sargam" ,
      "sartaj" ,
      "sarthak" ,
      "satinath" ,
      "saurabh" ,
      "savvy" ,
      "sayantika" ,
      "scrapped" ,
      "sector" ,
      "security" ,
      "sengupta" ,
      "sense" ,
      "september" ,
      "shaan" ,
      "shada" ,
      "shamne" ,
      "shaon" ,
      "shapat" ,
      "sharif" ,
      "shark" ,
      "sharma" ,
      "shashi" ,
      "shashurbari" ,
      "shatil" ,
      "shaurya" ,
      "shaykh" ,
      "shemaroo" ,
      "shesh" ,
      "shilpa" ,
      "shiva" ,
      "shivam" ,
      "shivastotoram" ,
      "shivastuti" ,
      "shivnamabalyashtakam" ,
      "shivpratahsmaranstotram" ,
      "shivstotram" ,
      "shiyarer" ,
      "shona" ,
      "shono" ,
      "shorolipi" ,
      "shortage" ,
      "shrabon" ,
      "shree" ,
      "shreya" ,
      "shricharan" ,
      "shudhao" ,
      "shudhu" ,
      "shundori" ,
      "shunechhi" ,
      "shuno" ,
      "shunona" ,
      "shunya" ,
      "shwashur" ,
      "shyam" ,
      "shyamal" ,
      "sindhu" ,
      "singer" ,
      "singh" ,
      "sishya" ,
      "siyaah" ,
      "small" ,
      "sneho" ,
      "sobai" ,
      "social" ,
      "soham" ,
      "sohom" ,
      "soldiers" ,
      "sonam" ,
      "sonar" ,
      "sonaton" ,
      "soneete" ,
      "songh" ,
      "songs" ,
      "sonia" ,
      "sorshe" ,
      "soulful" ,
      "sources" ,
      "south" ,
      "sowing" ,
      "special" ,
      "squad" ,
      "srabonty" ,
      "srikanto" ,
      "srinagar" ,
      "srishti" ,
      "srivastav" ,
      "srodhanjoli" ,
      "stall" ,
      "state" ,
      "station" ,
      "stops" ,
      "stotra" ,
      "strike" ,
      "studio" ,
      "subhash" ,
      "subhashree" ,
      "subho" ,
      "subramanian" ,
      "suchitra" ,
      "sudhin" ,
      "sudhir" ,
      "sudhu" ,
      "sujan" ,
      "sukher" ,
      "suman" ,
      "sumaner" ,
      "sundar" ,
      "sundari" ,
      "sunday" ,
      "sundoira" ,
      "super" ,
      "superfast" ,
      "superhit" ,
      "superstar" ,
      "supreme" ,
      "suren" ,
      "surey" ,
      "surgical" ,
      "surja" ,
      "surjo" ,
      "surprise" ,
      "sushma" ,
      "sutre" ,
      "swamy" ,
      "swapan" ,
      "swapancharini" ,
      "swapna" ,
      "swapna-surabhi" ,
      "swapno" ,
      "swaraj" ,
      "swaraj's" ,
      "swarnali" ,
      "t-series" ,
      "terror" ,
      "tagore" ,
      "tajikistan" ,
      "tajmahal" ,
      "takhon" ,
      "talat" ,
      "talay" ,
      "talks" ,
      "tamil" ,
      "tanjina" ,
      "tapas" ,
      "tappa" ,
      "tarader" ,
      "tarango" ,
      "tarate" ,
      "teaser" ,
      "telangana" ,
      "telugu" ,
      "terminals" ,
      "terror" ,
      "terrorism" ,
      "terrorist" ,
      "terrorists" ,
      "thakbo" ,
      "thaki" ,
      "thako" ,
      "thalaimurai" ,
      "thanthi" ,
      "tharoor" ,
      "theke" ,
      "theme" ,
      "thinking" ,
      "tiger" ,
      "tithi" ,
      "today" ,
      "tokio" ,
      "tokyo" ,
      "tollywood" ,
      "tomaake" ,
      "tomader" ,
      "tomake" ,
      "tomar" ,
      "tomare" ,
      "tomay" ,
      "touts" ,
      "traders" ,
      "traditional" ,
      "traffic" ,
      "transaction" ,
      "transport" ,
      "truth" ,
      "tumar" ,
      "ujjwal" ,
      "ullase" ,
      "uncensored" ,
      "unforgettable" ,
      "united" ,
      "unkijhuki" ,
      "upakule" ,
      "urjit" ,
      "uthiya" ,
      "utpala" ,
      "uttam" ,
      "uttar" ,
      "uttarakhand" ,
      "vardaat" ,
      "video" ,
      "vande" ,
      "vedsar" ,
      "vellore" ,
      "vendor" ,
      "venkatesh" ,
      "verma" ,
      "version" ,
      "vhati" ,
      "video" ,
      "videos" ,
      "videsh" ,
      "village" ,
      "villagers" ,
      "villages" ,
      "vincent" ,
      "vrindavan" ,
      "wallet" ,
      "wallets" ,
      "watch" ,
      "weddings" ,
      "weekend" ,
      "wendy" ,
      "whats" ,
      "winner" ,
      "worker" ,
      "workers" ,
      "yadav" ,
      "yagnik" ,
      "yahoo" ,
      "yakub" ,
      "yamunabati" ,
      "yatri" ,
      "yogendra" ,
      "youtube" ,
      "zindabad" ,
      "zombie" ,
      "aajtak" ,
      "aashiqui" ,
      "absence" ,
      "account" ,
      "accounts" ,
      "acharya" ,
      "actor" ,
      "adalat" ,
      "advertisement" ,
      "after" ,
      "against" ,
      "agni2" ,
      "ahmed" ,
      "airforce" ,
      "airlift" ,
      "airport" ,
      "ajeet" ,
      "akhno" ,
      "akshay" ,
      "album" ,
      "albums" ,
      "alert" ,
      "alpana" ,
      "alpona" ,
      "america" ,
      "ammer" ,
      "amout" ,
      "anadil" ,
      "angry" ,
      "ankhein" ,
      "ankho" ,
      "ankush" ,
      "antony" ,
      "anusheh" ,
      "anutap" ,
      "aparupa" ,
      "appuseries" ,
      "areas" ,
      "arfin" ,
      "arijit" ,
      "armymen" ,
      "arrest" ,
      "arrested" ,
      "ashbona" ,
      "assaulted" ,
      "assembly" ,
      "atack" ,
      "attack" ,
      "attacked" ,
      "attackers" ,
      "attacks" ,
      "awara" ,
      "awareness" ,
      "azhar" ,
      "badass" ,
      "bahudore" ,
      "banashree" ,
      "banashri" ,
      "banasree" ,
      "bandh" ,
      "bandopadhyay" ,
      "bandwala" ,
      "banerjee" ,
      "bangali" ,
      "bangalore" ,
      "bangla" ,
      "banglades" ,
      "bangladesh" ,
      "bangladeshi" ,
      "banglasongs" ,
      "banglay" ,
      "banking" ,
      "banks" ,
      "banned" ,
      "bappi" ,
      "barack" ,
      "beginners" ,
      "belaseshe" ,
      "bench" ,
      "benefits" ,
      "bengal" ,
      "bengali" ,
      "bengaluru" ,
      "benimadhab" ,
      "bhadra" ,
      "bhajans" ,
      "bhajiyawala" ,
      "bhalo" ,
      "bharat" ,
      "bhattacharya" ,
      "bheegi" ,
      "bhosle" ,
      "bhowmick" ,
      "bhudore" ,
      "biography" ,
      "birendra" ,
      "birth" ,
      "biswajeeta" ,
      "biyer" ,
      "black" ,
      "blackmoney" ,
      "blasts" ,
      "board" ,
      "bollywood" ,
      "bolte" ,
      "bongo" ,
      "bonosree" ,
      "bonosri" ,
      "booths" ,
      "border" ,
      "bramhani" ,
      "brave" ,
      "bravery" ,
      "breach" ,
      "breaking" ,
      "briddhashram" ,
      "brigade" ,
      "brishti" ,
      "buddy" ,
      "bujhini" ,
      "bulandshahr" ,
      "bulletin" ,
      "bulletins" ,
      "burman" ,
      "business" ,
      "cabinet" ,
      "cactus" ,
      "cards" ,
      "cashless" ,
      "cassettes" ,
      "centre" ,
      "chandigarh" ,
      "change" ,
      "channel" ,
      "charar" ,
      "charge" ,
      "charges" ,
      "chatterjee" ,
      "check" ,
      "chelani" ,
      "chere" ,
      "chief" ,
      "child" ,
      "children" ,
      "childrens" ,
      "chirodiner" ,
      "choker" ,
      "cholona" ,
      "cinema" ,
      "citizens" ,
      "cloth" ,
      "collection" ,
      "comedy" ,
      "commandos" ,
      "commit" ,
      "congress" ,
      "constitutional" ,
      "control" ,
      "conversion" ,
      "convert" ,
      "cooperative" ,
      "corporate" ,
      "corrupt" ,
      "corruption" ,
      "counter-terrorism" ,
      "court" ,
      "credit" ,
      "cricket" ,
      "crime" ,
      "crisis" ,
      "crore" ,
      "crunch" ,
      "curfew" ,
      "currency" ,
      "curreny" ,
      "customers" ,
      "daily" ,
      "dalia" ,
      "dance" ,
      "dasgupta" ,
      "database" ,
      "daughter" ,
      "dawood" ,
      "ddnews" ,
      "ddyoutube" ,
      "death" ,
      "deaths" ,
      "debate" ,
      "debit" ,
      "debona" ,
      "deewana" ,
      "defence" ,
      "degree" ,
      "deity" ,
      "delhi" ,
      "demolished" ,
      "demolition" ,
      "demonetisation" ,
      "demonetization" ,
      "department" ,
      "deposit" ,
      "destroyed" ,
      "detector" ,
      "devotional" ,
      "dewana" ,
      "dewas" ,
      "dhaka" ,
      "dhasai" ,
      "digi-dhan" ,
      "digital" ,
      "diplomacy" ,
      "discount" ,
      "discussion" ,
      "disruption" ,
      "divine" ,
      "diwana" ,
      "donation" ,
      "doval" ,
      "download.com" ,
      "drill" ,
      "drive" ,
      "driver" ,
      "dugga" ,
      "durga" ,
      "dusmanta" ,
      "e-wallets" ,
      "earnings" ,
      "economy" ,
      "education" ,
      "effect" ,
      "effects" ,
      "efforts" ,
      "elections" ,
      "emotional" ,
      "employee" ,
      "employees" ,
      "engineers" ,
      "english" ,
      "enter" ,
      "entered" ,
      "entertainment" ,
      "eskay" ,
      "estate" ,
      "evasion" ,
      "event" ,
      "evergreen" ,
      "exchange" ,
      "exclusive" ,
      "express" ,
      "fakir" ,
      "families" ,
      "family" ,
      "farmers" ,
      "fawad" ,
      "fidayeen" ,
      "fight" ,
      "films" ,
      "finance" ,
      "firingee" ,
      "floods" ,
      "force" ,
      "fortune" ,
      "fraudulent" ,
      "friends" ,
      "funny" ,
      "galliyan" ,
      "gandhi" ,
      "ganjawala" ,
      "gannguli" ,
      "gathani" ,
      "geeti" ,
      "gelam" ,
      "genuine" ,
      "ghazipur" ,
      "ghoshal" ,
      "global" ,
      "goodwill" ,
      "google" ,
      "gopal" ,
      "govenment" ,
      "government" ,
      "government's" ,
      "grahak" ,
      "graphics" ,
      "greenfield" ,
      "ground" ,
      "growth" ,
      "guitar" ,
      "gujarat" ,
      "gurdaspur" ,
      "gurudev" ,
      "haldar" ,
      "halder" ,
      "happy" ,
      "haqikat" ,
      "haripada" ,
      "haripodo" ,
      "hazra" ,
      "headlines" ,
      "headquarter" ,
      "headquarters" ,
      "heart" ,
      "heartless" ,
      "heckled" ,
      "heeraben" ,
      "hemanata" ,
      "hemanta" ,
      "highway" ,
      "highways" ,
      "hindi" ,
      "hoarders" ,
      "holders" ,
      "holud" ,
      "homes" ,
      "hospital" ,
      "hotam" ,
      "house" ,
      "hoyechilo" ,
      "humour" ,
      "hyderabad" ,
      "ibrahim" ,
      "idiot" ,
      "illegal" ,
      "impact" ,
      "imran" ,
      "income" ,
      "indelible" ,
      "independence" ,
      "india" ,
      "indian" ,
      "indiatv" ,
      "indraadip" ,
      "indrani" ,
      "infiltration" ,
      "inflation" ,
      "insufficient" ,
      "interest" ,
      "international" ,
      "internet" ,
      "interview" ,
      "interviews" ,
      "investigation" ,
      "involved" ,
      "islam" ,
      "islamic" ,
      "jaaneman" ,
      "jahan" ,
      "jaish" ,
      "jaish-e-mohammad" ,
      "jammu" ,
      "janardhana" ,
      "jawan" ,
      "jawans" ,
      "jewellery" ,
      "jewllery" ,
      "jokes" ,
      "jolly" ,
      "jukebox" ,
      "jwale" ,
      "kabir" ,
      "kabira" ,
      "kanheya" ,
      "kapil" ,
      "karnataka" ,
      "kashmir" ,
      "khabarein" ,
      "khiladi" ,
      "kholo" ,
      "kidnap" ,
      "killed" ,
      "kinagi" ,
      "kindergarten" ,
      "kohli" ,
      "kolkata" ,
      "kotha" ,
      "krishna" ,
      "kumar" ,
      "kunal" ,
      "kushinagar" ,
      "lahiri" ,
      "lalan" ,
      "latest" ,
      "laundering" ,
      "leader" ,
      "leaders" ,
      "lesson" ,
      "limit" ,
      "locker" ,
      "lolona" ,
      "lopamudra" ,
      "lucky" ,
      "lullaby" ,
      "magazine" ,
      "mahajan" ,
      "mahakali" ,
      "mahalaya" ,
      "mahanayak" ,
      "maharashtra" ,
      "mahisashur" ,
      "mahishasura" ,
      "mahiya" ,
      "mahmudul" ,
      "majhare" ,
      "majumder" ,
      "malda" ,
      "malik" ,
      "mallick" ,
      "mallik" ,
      "mamata" ,
      "mangal" ,
      "mangeshkar" ,
      "manna" ,
      "manohar" ,
      "mantra" ,
      "mardini" ,
      "markets" ,
      "marriage" ,
      "marriages" ,
      "martyr" ,
      "masala" ,
      "masood" ,
      "massive" ,
      "masterclass" ,
      "masti" ,
      "mayawati" ,
      "mayur" ,
      "media" ,
      "meeting" ,
      "militants" ,
      "minister" ,
      "miniter" ,
      "mintoo" ,
      "minutes" ,
      "mishra" ,
      "mission" ,
      "mitra" ,
      "mobile" ,
      "moder" ,
      "modern" ,
      "mohammad" ,
      "moina" ,
      "molana" ,
      "moner" ,
      "monetary" ,
      "money" ,
      "morning" ,
      "mother" ,
      "movie" ,
      "movies" ,
      "mukherjee" ,
      "mukhopadhyay" ,
      "muktadir" ,
      "mumbai" ,
      "muqtadir" ,
      "musharraf" ,
      "mushkil" ,
      "music" ,
      "muskurane" ,
      "nachiketa" ,
      "naidu" ,
      "najeeb" ,
      "nancy" ,
      "narayan" ,
      "narendra" ,
      "national" ,
      "natok" ,
      "naurate" ,
      "navaratri" ,
      "navel" ,
      "navratri" ,
      "nazrul" ,
      "nesha" ,
      "network" ,
      "nilakshi" ,
      "nirmala" ,
      "nitish" ,
      "niyoti" ,
      "nochiketa" ,
      "noida" ,
      "notes" ,
      "november" ,
      "number" ,
      "nupur" ,
      "nursery" ,
      "nusrat" ,
      "obama" ,
      "obhabe" ,
      "odd-even" ,
      "officer" ,
      "official" ,
      "online" ,
      "onlytechtips" ,
      "opening" ,
      "operation" ,
      "operations" ,
      "opposition" ,
      "original" ,
      "outside" ,
      "pagol" ,
      "pakhi" ,
      "pakistan" ,
      "pakistani" ,
      "paksitan" ,
      "panna" ,
      "pannalal" ,
      "parivartan" ,
      "parliament" ,
      "parliamentary" ,
      "parrikar" ,
      "party" ,
      "parvesh" ,
      "patekar" ,
      "patel" ,
      "pathankot" ,
      "pathikrit" ,
      "pathnakot" ,
      "patiala" ,
      "patriotic" ,
      "payment" ,
      "payments" ,
      "peace" ,
      "penalty" ,
      "performance" ,
      "person" ,
      "pervez" ,
      "petrol" ,
      "phirbe" ,
      "phool" ,
      "picture" ,
      "pintoo" ,
      "platic" ,
      "pocket" ,
      "poems" ,
      "point" ,
      "police" ,
      "policy" ,
      "political" ,
      "politics" ,
      "polls" ,
      "pollution" ,
      "polygraph" ,
      "pooja" ,
      "popular" ,
      "porle" ,
      "porshi" ,
      "pradesh" ,
      "prasenjit" ,
      "pratapgarhi" ,
      "preme" ,
      "preschool" ,
      "president" ,
      "press" ,
      "prices" ,
      "priests" ,
      "prime" ,
      "printing" ,
      "pritam" ,
      "pritha" ,
      "private" ,
      "probe" ,
      "project" ,
      "promote" ,
      "proofs" ,
      "properties" ,
      "property" ,
      "prosenjit" ,
      "prosperity" ,
      "protest" ,
      "protests" ,
      "pumps" ,
      "punjab" ,
      "punjabi" ,
      "puthiya" ,
      "putimaas" ,
      "queue" ,
      "queues" ,
      "queuing" ,
      "raabta" ,
      "rabindra" ,
      "rabindranath" ,
      "rabindrasangeet" ,
      "rahul" ,
      "raids" ,
      "rajat" ,
      "rajesh" ,
      "rajiv" ,
      "rajnath" ,
      "rajya" ,
      "rakhbo" ,
      "rally" ,
      "ranbir" ,
      "randeep" ,
      "rangmashal" ,
      "rappers" ,
      "rates" ,
      "ravish" ,
      "reality" ,
      "realty" ,
      "recovered" ,
      "reddy" ,
      "relations" ,
      "reloading" ,
      "remix" ,
      "report" ,
      "reserve" ,
      "revenge" ,
      "rewards" ,
      "rhyme" ,
      "rhymes" ,
      "riots" ,
      "rituparna" ,
      "robindro" ,
      "rohim" ,
      "romantic" ,
      "ruees" ,
      "rules" ,
      "rumey" ,
      "rupankar" ,
      "rupban" ,
      "rupee" ,
      "rupees" ,
      "rural" ,
      "russia" ,
      "sabha" ,
      "sadhana" ,
      "sagarika" ,
      "salary" ,
      "sales" ,
      "salman" ,
      "salmon" ,
      "salwinder" ,
      "samajwadi" ,
      "sandhya" ,
      "sangeet" ,
      "sargan" ,
      "sarkar" ,
      "sartaj" ,
      "savvy" ,
      "sayantika" ,
      "scams" ,
      "scene" ,
      "scheme" ,
      "school" ,
      "season" ,
      "sector" ,
      "security" ,
      "seize" ,
      "seized" ,
      "seller" ,
      "sengupta" ,
      "senior" ,
      "sensex" ,
      "serial" ,
      "series" ,
      "session" ,
      "shaan" ,
      "shaktikanta" ,
      "shamli" ,
      "sharif" ,
      "sharma" ,
      "shiboprosad" ,
      "shilpa" ,
      "shiva" ,
      "shlok" ,
      "shooting" ,
      "short" ,
      "shortage" ,
      "showroom" ,
      "shree" ,
      "shreya" ,
      "shubhamita" ,
      "shyama" ,
      "shyamasangeet" ,
      "sidhu" ,
      "silver" ,
      "simplicity" ,
      "singh" ,
      "sings" ,
      "sister" ,
      "slammed" ,
      "slams" ,
      "soham" ,
      "soldier" ,
      "sonar" ,
      "songit" ,
      "songs" ,
      "special" ,
      "speech" ,
      "spiritual" ,
      "sponsored" ,
      "sports" ,
      "squad" ,
      "srabanti" ,
      "srabonti" ,
      "srikanta" ,
      "srikanto" ,
      "srodhanjoli" ,
      "station" ,
      "stock" ,
      "stocks" ,
      "stories" ,
      "strike" ,
      "strikes" ,
      "student" ,
      "studio" ,
      "subhamita" ,
      "suchitra" ,
      "sudhu" ,
      "suffer" ,
      "suicide" ,
      "suman" ,
      "superfast" ,
      "superhit" ,
      "superhits" ,
      "supreme" ,
      "surat" ,
      "surgical" ,
      "surjewala" ,
      "survey" ,
      "suspect" ,
      "suspected" ,
      "suspicious" ,
      "swarnali" ,
      "system" ,
      "tagore" ,
      "takes" ,
      "talks" ,
      "tamil" ,
      "tanzil" ,
      "tarate" ,
      "technical" ,
      "telugu" ,
      "temples" ,
      "terorr" ,
      "territory" ,
      "terroists" ,
      "terror" ,
      "terrorism" ,
      "terrorist" ,
      "terrorists" ,
      "thakbo" ,
      "thakur" ,
      "thalaimurai" ,
      "thane" ,
      "thebrownfish" ,
      "through" ,
      "title" ,
      "today" ,
      "today's" ,
      "tomar" ,
      "trade" ,
      "trailer" ,
      "trained" ,
      "transactions" ,
      "treatment" ,
      "trial" ,
      "tribute" ,
      "troops" ,
      "troyee" ,
      "uniform" ,
      "unknown" ,
      "unplugged" ,
      "update" ,
      "updates" ,
      "urjit" ,
      "usage" ,
      "uttam" ,
      "uttar" ,
      "valentine" ,
      "vellore" ,
      "venkaiah" ,
      "venkatesh" ,
      "verma" ,
      "video" ,
      "videos" ,
      "village" ,
      "villagers" ,
      "villages" ,
      "villain" ,
      "vyapar" ,
      "vyapari" ,
      "waits" ,
      "wajah" ,
      "wallet" ,
      "wanted" ,
      "weddding" ,
      "wedding" ,
      "weddings" ,
      "white" ,
      "winter" ,
      "withdraw" ,
      "withdrawal" ,
      "withdrawl" ,
      "workers" ,
      "www.bangla" ,
      "yaariyan" ,
      "yagnik" ,
      "yakeen" ,
      "yatra" ,
      "yojana" ,
      "youth" ,
      "youtube" ,
      "youtuber" ,
      "yt:stretch=16:9" ,
      "zeenews" ,
      "znews"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );
