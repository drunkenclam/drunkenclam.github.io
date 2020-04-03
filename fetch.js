"use strict";
var gotoNext = false;
var plop = false;
var plep;
var mobile = false;
//pinterest token: ASd8Bnc1sPMQHlW0o-m7futk74WdFPIMPH6_WgBEbppySkAv2gAAAAA
var links = '';
var abortnext = false;
var showtitle = true;
var pic = [];
var dd = [];
var aa = [];
var ciao = [];
var desc = [];
var aicA = [];
var blobsize = '';
var imageSrc= '';
var imageSrcA= '';
var instaurl= '';
var imgNo = '';
var swup = false;
var titleLink = 3;
var gimme = false;
var i = 0;
var j = 0;
var k = 0;
var qq = 1;
var jump = 0;
var muuh = false;
var show1 = true;
var vid = false;
var loading = false;
var chicken = 0;
var chicken2 = false;
var chicken3 = false;
var chicken4 = false;
var chicken5 = false;
var wentBack = false;
var ath = 0;
var full = false;
var showconf = true;
var truesize = false;
var waitForNext = false;
var nextBlob = '';

var app = new Vue({
  el: '#app',

//  data: {
//  },
/*
  data() {
    return { url: 'boobies', links: ''}
  },
*/
  data: {
    // headBot: 51,
  },

  data: function (){
    return {
      headTop: '',
      headBot: '',
      loadski: true,
      message: 'Click for slide',
      show: true,
      imgList: [],
      // imglol: [
      //   'https://i.redd.it/q2yxwydd8ep01.jpg',
      //   'https://i.redd.it/6rz79toqoep01.jpg',
      //   'https://i.imgur.com/Vo4HJAw.jpg',
      //   'https://i.redd.it/9tzs3dazpdp01.jpg',
      //   'https://i.redd.it/nwy2so4gfdp01.jpg'
      // ],
      currentImg: 0,
      imgListA: [],
      currentImgA: 0,
        entries : links,
        imageSrc: '',
        imageSrcA: '',
        iglink: '',
        userlink: '',
        ylink: '',
        glink: '',
        instaurl: '',
        imageNext: '',
        albumImageNext: '',
        imgNo: '',
        pic: [],
        desc: [],
        postlink: '',
        loaded: '',
        fetched: '',
        created: '',
        title: '',
        comments: [],
        commentsL: [],
        hehe: '',
        hoho: '',
        bibo: '',
        max: 100,
        hihi: 0,
        err: '',
        derp: false,
        aaPos: '',
        mic: '',
        nextBlob: '',
        bh24: false,
        ilpic: false,
        il: false,
        ilSrc: [],
        show1: true,
        vid: false,
        loading: false,
        chicken: 0,
        chicken2: false,
        chicken3: false,
        chicken4: false,
        chicken5: false,
        full: false,
        gonext: true,
        showconf: true,
        imgCache: false,
        showComms: false,
        showCommsL: false,
        opcom: 'white',
        truesize: false,
        nextSwitch: true,
        transmode: '',
        transStyle: '',
        ref_info: '',
        nextvid: false,
        picked: 'reddit',
        checked: false,
        checkedP: true,
        checkedZ: true,
        lumpi: false,
        selected: 'BestOf',
        optionsRS: [ 'All',
        'itookapicture',
        'urbanexploration',
        'photocritique',
        //'pics',
        'earthporn',
        'AutumnPorn',
        'Beachporn',
        'desertporn',
        'DestructionPorn',
        'EarthPorn',
        'FirePorn',
        'lakeporn',
        'lavaporn',
        'MushroomPorn',
        'seaporn',
        'SkyPorn',
        'spaceporn',
        'SpringPorn',
        'SummerPorn',
        'waterporn',
        'WeatherPorn',
        'winterporn',
        'AbandonedPorn',
        'AerialPorn',
        'ArchitecturePorn',
        'boatporn',
        'bridgeporn',
        'CabinPorn',
        //'carporn',
        'CemeteryPorn',
        'CityPorn',
        'drydockporn',
        'Houseporn',
        'InfrastructurePorn',
        'MachinePorn',
        'retailporn',
        'RidesPorn',
        'RoadPorn',
        'ruralporn',
        'spaceflightporn',
        'StarshipPorn',
        'steamporn',
        'TechnologyPorn',
        'ThingsCutInHalfPorn',
        'toolporn',
        'VillagePorn',
        'AdrenalinePorn',
        'AgriculturePorn',
        'AnimalPorn',
        'ClimbingPorn',
        'CulinaryPorn',
        'MegalithPorn',
        'SportsPorn',
        'TeaPorn',
        'AdPorn',
        'AerialPorn',
        'AlbumArtPorn',
        'ApocalypsePorn',
        'avporn',
        'DesignPorn',
        'ExposurePorn',
        'FractalPorn',
        'GamerPorn',
        'GeekPorn',
        'HellscapePorn',
        'InstrumentPorn',
        'MacroPorn',
        'MetalPorn',
        'MoviePosterPorn',
        'mtgporn',
        'OrganizationPorn',
        'RetroGamePorn',
        'RoomPorn',
        'SculpturePorn',
        'StreetArtPorn',
        'ViewPorn',
        'bookporn',
        'FossilPorn',
        'futureporn',
        'HistoryPorn',
        'MegalithPorn',
        'NewsPorn',
        ],
        optionsR: [ 'All',
        'BestOf',
        'Fitness',
        'gonewild',
        'nsfw',
        'gentlemanboners',
        'RealGirls',
        'Boobies',
        'FantasticBreasts',
        'BustyPetite',
        'LegalTeens',
        'fortyfivefiftyfive',
        'theratio',
        'titsonastick',
        'SourcedNSFW',
        'Amateurs_Only',
        'OnlyFans_Females',
        'OnlyFans_Accounts',
        'ass',
        'GirlsThatCantDrink',
        'hardbodies',
        'FitnessGirls',
        'FitAndNatural',
        'SkinnyWithAbs',
        'Deathbysnusnu',
        'FitNakedGirls',
        'fitgirls',
        'AthleticGirls',
        'bodyperfection',
        'SexyTummies',
        'Workoutgonewild',
        'Bustyfit',
        'CuteLittleButts',
        'adorableporn',
        'JizzedToThis',
        'YogaPants',
        'girlsinyogapants',
        'Celebswithbigtits',
        'helgalovekaty',
        'RachelCook',
        'breedingmaterial',
        'NSFW_GIF',
        'nsfw_gifs',
        'Amateur',
        'cumsluts',
        'OnOff',
        'milf',
        'polinasitnova',
        'nsfwhardcore',
        'GirlsFinishingTheJob',
        'ginger',
        'holdthemoan',
        'dirtysmall',
        'AnnaTsaralunga',
        'celebnsfw',
        'redheads',
        'GirlswithGlasses',
        'Hotchickswithtattoos',
        'curvy',
        'AsianHotties',
        'Blowjobs',
        'NSFWFunny',
        '60fpsporn',
        'randomsexiness',
        'asstastic',
        'AsiansGoneWild',
        'HappyEmbarrassedGirls',
        'TinyTits',
        'datgap',
        'TittyDrop',
        'PetiteGoneWild',
        'palegirls',
        'tightdresses',
        'collegesluts',
        'pussy',
        'LipsThatGrip',
        'suicidegirls',
        'O_Faces',
        'nsfw2',
        'nsfwcosplay',
        'GoneWildTube',
        'burstingout',
        'facedownassup',
        'nsfwoutfits',
        'HighResNSFW',
        'Unashamed',
        'hugeboobs',
        'lesbians',
        'anal',
        'NSFW_HTML5',
        'Stacked',
        'workgonewild',
        'camwhores',
        'GWNerdy',
        'boltedontits',
        'BonerMaterial',
        'passionx',
        'voluptuous',
        'cumfetish',
        'BigBoobsGW',
        'GoneMild',
        'porn_gifs',
        'rearpussy',
        'creampies',
        'gettingherselfoff',
        'stockings',
        'StraightGirlsPlaying',
        'FestivalSluts',
        'boobbounce',
        'AlbumBabes',
        'nsfw_videos',
        'IndianBabes',
        'CollegeAmateurs',
        'lingerie',
        'iWantToFuckHer',
        'DirtyGaming',
        'assinthong',
        'downblouse',
        'gifsgonewild',
        'SexyFrex',
        'Bottomless_Vixens',
        'gonewildcolor',
        'SexyButNotPorn',
        'ChristianGirls',
        'GirlswithNeonHair',
        'BeautifulTitsAndAss',
        'gwcumsluts',
        'buttplug',
        'asshole',
        'treatemright',
        'WomenOfColor',
        'OnHerKnees',
        'bikinis',
        'metart',
        'TwinGirls',
        'latinas',
        'boobs',
        'PublicFlashing',
        'AnalGW',
        'ChangingRooms',
        'FacialFun',
        // 'thinspo',
        'GroupOfNudeGirls',
        'FlashingGirls',
        'Sexy',
        'facesitting',
        'SheLikesItRough',
        'CelebrityPussy',
        'cumcoveredfucking',
        'Exxxtras',
        'squirting',
        'NotSafeForNature',
        'femalepov',
        'KateeOwen',
        'amateurcumsluts',
        'DarkAngels',
        'cleavage',
        'GirlsinSchoolUniforms',
        'deepthroat',
        'xsmallgirls',
        'Nipples',
        'tight_shorts',
        'girlskissing',
        'Just18',
        'NSFW_Wallpapers',
        'wet',
        'brunette',
        'bigasses',
        'TheUnderboob',
        'Pantyfetish',
        'celebsnaked',
        'TightShorts',
        'UnderwearGW',
        'NSFW_Snapchat',
        'Blonde',
        'girlsdoingnerdythings',
        'BreastEnvy',
        'before_after_cumsluts',
        'WomenOfColour',
        'skinnytail',
        'Page3Glamour',
        'booty',
        'randomsexygifs',
        'BigBoobsGonewild',
        'bustybabes',
        'OldSchoolCoolNSFW',
        'NSFWCostumes',
        'thighhighs',
        'boobgifs',
        'titfuck',
        'collegensfw',
        'VintageBabes',
        'bikinibridge',
        'Ohlympics',
        'Hugeboobshardcore',
        'gangbang',
        'vagina',
        'leggingsgonewild',
        'hugenaturals',
        'MouthWideOpen',
        'SpreadEm',
        'Goddesses',
        'CelebrityPussy',
        '2busty2hide'
      ],
      optionsRfit: [ 'All',
      'hardbodies',
      'FitnessGirls',
      'SkinnyWithAbs',
      'Deathbysnusnu',
      'FitNakedGirls',
      'fitgirls',
      // 'YogaPants',
      'AthleticGirls',
      // 'girlsinyogapants',
      'bodyperfection',
      'FitAndNatural',
      'SexyTummies',
      'Workoutgonewild',
      'Bustyfit',
      'CuteLittleButts',
    ],
      optionsRbo: [ 'All',
      'nsfw',
      // 'gentlemanboners',
      'RealGirls',
      'Boobies',
      'FantasticBreasts',
      'BustyPetite',
      'LegalTeens',
      'fortyfivefiftyfive',
      'theratio',
      'titsonastick',
      'ass',
      'GirlsThatCantDrink',
      'helgalovekaty',
      'Goddesses',
      '2busty2hide',
      'Celebswithbigtits',
      'adorableporn',
      'JizzedToThis',
      'SourcedNSFW',
      'polinasitnova',
      'RachelCook',
      'AnnaTsaralunga',
      'CelebrityPussy',
      // 'NSFW_GIF',
      // 'nsfw_gifs',
      // 'Amateur',
      // 'cumsluts',
      'OnOff',
      // 'milf',
      // 'girlsinyogapants',
      // 'nsfwhardcore',
      // 'GirlsFinishingTheJob',
      'ginger',
      'holdthemoan',
      // 'dirtysmall',
      'celebnsfw',
      'redheads',
      // 'GirlswithGlasses',
      'Hotchickswithtattoos',
      // 'curvy',
      // 'AsianHotties',
      // 'Blowjobs',
      // 'NSFWFunny',
      '60fpsporn',
      'randomsexiness',
      // 'asstastic',
      // 'AsiansGoneWild',
      'HappyEmbarrassedGirls',
      // 'TinyTits',
      // 'datgap',
      // 'TittyDrop',
      // 'PetiteGoneWild',
      // 'palegirls',
      // 'tightdresses',
      // 'collegesluts',
      // 'pussy',
      // 'LipsThatGrip',
      // 'suicidegirls',
      // 'O_Faces',
      // 'nsfw2',
      // 'nsfwcosplay',
      // 'GoneWildTube',
      'burstingout',
      'breedingmaterial',
      // 'facedownassup',
      // 'nsfwoutfits',
      // 'HighResNSFW',
      // 'Unashamed',
      'hugeboobs',
      // 'lesbians',
      // 'anal',
      // 'NSFW_HTML5',
      'Stacked',
      // 'workgonewild',
      // 'camwhores',
      // 'GWNerdy',
      // 'boltedontits',
      'BonerMaterial',
      // 'passionx',
      // 'voluptuous',
      // 'cumfetish',
      // 'BigBoobsGW',
      // 'GoneMild',
      // 'porn_gifs',
      // 'rearpussy',
      // 'creampies',
      // 'gettingherselfoff',
      // 'stockings',
      // 'StraightGirlsPlaying',
      // 'FestivalSluts',
      // 'boobbounce',
      // 'AlbumBabes',
      // 'nsfw_videos',
      // 'IndianBabes',
      // 'CollegeAmateurs',
      // 'lingerie',
      // 'iWantToFuckHer',
      // 'DirtyGaming',
      // 'assinthong',
      // 'downblouse',
      // 'gifsgonewild',
      'SexyFrex',
      // 'Bottomless_Vixens',
      // 'gonewildcolor',
      'SexyButNotPorn',
      // 'ChristianGirls',
      // 'YogaPants',
      // 'GirlswithNeonHair',
      // 'BeautifulTitsAndAss',
      // 'gwcumsluts',
      // 'buttplug',
      // 'asshole',
      // 'treatemright',
      // 'WomenOfColor',
      // 'OnHerKnees',
      // 'bikinis',
      // 'metart',
      'TwinGirls',
      // 'latinas',
      'boobs',
      // 'PublicFlashing',
      // 'AnalGW',
      // 'ChangingRooms',
      // 'FacialFun',
      'GroupOfNudeGirls',
      // 'FlashingGirls',
      // 'Sexy',
      // 'facesitting',
      // 'SheLikesItRough',
      // 'CelebrityPussy',
      // 'cumcoveredfucking',
      // 'Exxxtras',
      // 'squirting',
      'NotSafeForNature',
      // 'femalepov',
      // 'KateeOwen',
      // 'amateurcumsluts',
      // 'DarkAngels',
      'cleavage',
      // 'GirlsinSchoolUniforms',
      // 'deepthroat',
      // 'xsmallgirls',
      // 'Nipples',
      // 'tight_shorts',
      // 'girlskissing',
      // 'Just18',
      // 'NSFW_Wallpapers',
      // 'wet',
      // 'brunette',
      // 'bigasses',
      'TheUnderboob',
      // 'Pantyfetish',
      // 'celebsnaked',
      // 'TightShorts',
      // 'UnderwearGW',
      // 'NSFW_Snapchat',
      // 'Blonde',
      // 'girlsdoingnerdythings',
      'BreastEnvy',
      // 'before_after_cumsluts',
      // 'WomenOfColour',
      'skinnytail',
      'Page3Glamour',
      // 'booty',
      // 'randomsexygifs',
      // 'BigBoobsGonewild',
      // 'bustybabes',
      // 'OldSchoolCoolNSFW',
      // 'NSFWCostumes',
      // 'thighhighs',
      // 'boobgifs',
      // 'titfuck',
      // 'collegensfw',
      // 'VintageBabes',
      // 'bikinibridge',
      // 'Ohlympics',
      // 'Hugeboobshardcore',
      // 'gangbang',
      // 'vagina',
      // 'leggingsgonewild',
      // 'hugenaturals',
      // 'MouthWideOpen',
      // 'SpreadEm',

    ],
      optionsT: [ 'All',
        "murbo",
        "cleavagetweet",
        "mavrin",
        "suicidegirls",
        //"showmethereal",
        "nsfwio",
        "sexypositions",
        "succubusdesires",
        "bustybikinigirls",
        'huge-bikini-boobs',
        'hasthatlook',
        'busty-andyouknowit',
        'legendarybeautyposter',
        'nonameuserstuff',
        'justbigger',
        'whatbustygirlsdo',
        'superboobsandbutts',
        'bustyattention',
        'nitropro',
        'nakednightmare',
        'leolauspt',
        'color4me',
        'trimmedpussy',
        'qqtony',
        'my-taste-in-boobs',
        'xxx-sexbomb',
        'terrabeauty',
        'estopmain',
        'justafanofbeauty',
        'partybuttnaked',
        'beauty-adoring',
        'eroticvisualart',
        'sneakpeaking',
        'vylain',
        'finefemaleart',
        'sensualsideofme',
        'xraymike123',
        'pleasure-treasures',
        'lesfantastiques',
        'naughtilydelicious',
        'morphing-only',
        'jsc-sexy-hot-girls',
        'enjoy-by-awesome-girls',
        'w-y-s-f',
        'scottysplace',
        'beautiful-tangerine2',
        'onlybombs',
        'sexygirlsandporn',
        'wolfshond',
        'almostperfectboobs',
        //'jdbetter',
        'capitol-j',
        'squritabh',
        'myperfectpicturesisstolen',
        //'herandis',
        'slender-and-young',
        'extremeangles',
        'flatgurls',
        'sheissopretty',
        'omgchoppedgoateedinosaurfan',
        'beautifulsexynude',
        'smashablebabes',
        'casi56',
        'jef2828',
        'sensualartaz',
        'lorddragonwind',
        'leaddawg',
        'pinups-plus',
        'no-bra-day',
        'stunningnakedladies',
        'myinterestingposts',
        'bellezanatural11',
        'robertweissner',
        'moistpubes2',
        'helga-lovekaty-hott',
        'vonschreck',
        'theeroticexhibition',
        'socialdeviant-paulhd',
        'nsfwrandomness',
        'bestnudepicsofmodels',
        //'mirimarnrw',
        'my-personal-matrix',

        //meh
      ],
      optionsI: [ 'All',
        'sa_calobra',
        'biancakmiec',
        'lorenara__',
        'celielindblad',
        'angelina__petrova',
        'modelss.queen',
        'lips_n_kisses',
        'classy_babezz',
        'maria_domark',
        'chickmafia',
        'tops_delights',
        'mscolleene',
        'jj_velasquez_photo',
        'tfmgirls',
        'thecollegebabes',
        'sharamdiniz',
        'josephineskriver',
        'rosieroff',
        'sahara_ray',
        'mirgaeva_galinka',
        'devinbrugman',
        'carlybaker55',
        'annanystrom',
        'missamywillerton',
        'realmisacampo',
        'abigailratchford',
        'emilysears',
        'szindy',
        'joneofthewonders',
        'alicepeneaca',
        'parisdylan550',
        'ninaagdal',
        'demirosemawby',
        'courtneytailor',
        'juli.annee',
        'ini.helen',
        'marilynhue',
        'michelematuro',
        'monicaalvarez03',
        'laurenashleyallan',
        'alyshanett',
        'cindyprado',
        'miss_alyssaarce',
        'oabramovich',
        'svetabily',
        'boutinela',
        'ohrangutang',
        'lindapalacio1',
        'ogfoto',
        'stormiimichelle',
        'deniseschaefer',
        'erinolash',
        'erinmfahey',
        'stefanieknight',
        'olgachocolate',
        'jasmineasuarez',
        'karen_vi',
        'silvialicius',
        'viki_odintcova',
        'awesomeantjay',
        'lindseypelas',
        'raissaralves',
        'bossbirds',
        'julianakawka',
        'playmateiryna',
        'minijello',
        'elizabethloaiza',
        'kattiavides',
        'Badasscassfit_',
        'abbydowse',
        'leelhgfx',
        'lee_lhgfx',
        'rosangelaeslo',
        'lana_alexandra',
        'jossanforsberg',
        'miss_alyssaarce',
        'cara_steel',
        'katyonok',
        'caitlin_arnett',
        'shelbychesnes',
        'piamiller',
        'alexisren',
        'aleguilmant',
        'realanaismali',
        'thekingjessica',
        'courtgard',
        'elizabethcturner',
        'jastookes',
        'pauline_jackson',
        'juli.annee',
        '_laurenloretta',
        'piamuehlenbeck',
        'iamyanetgarcia',
        'bridgetsatterlee',
        'manelyk_oficial',
        'mathildegoehler',
        'ziennasonne',
        'keilah.k',
        'galina_dub',
        'erinwillerton',
        'helga_model',
        'ashleyresch',
        'murbo.official',
        'rachelc00k',
      ],
      options5: [ 'All',
        'samrambo1',
        'johnpdunnigan',
        'mavrin',
        'stepankvardakov',
        'rolandogomez',
        'andikunar',
        'alexanderfess',
        'evgenykonasov',
        'timjanssen',
        'jharynuk',
        'coyotakpictures',
        'andreacompagnoni',
        'barepixels',
        'bifidumbakterin',
        'vavaca',

      ],
      optionsF: [ 'All',
        'samrambo1',
        'johnpdunnigan',
        'mavrin',
        'stepankvardakov',
        'rolandogomez',
        'andikunar',
        'alexanderfess',
        'evgenykonasov',
        'timjanssen',
        'jharynuk',
        'coyotakpictures',
        'andreacompagnoni',
        'barepixels',
        'bifidumbakterin',
        'vavaca',

      ],
      optionsP: [ 'All',
        'gsdmott/babe-favs',
        //'gmbeauties/Ꭶɛɛ-Ꭲɧ૨นǥɧ',
        'GorgeousModels/Ꭾरةةçลϯielყ-ðरeʂʂe',
        //'GorgeousModels/behiղđ-Ꭲhe-mลʂƙ',
        'gsdmott/wowsers',
        'GorgeousModels/b૨eลᎦϯลcนlล૨',
        'gsdmott/sexy-perfect',
        'gsdmott/oh-my-my-my',
        'mrhemi318/abigail-ratchford',
        'mrhemi318/babes',
        'mrhemi318/denise-milani',
        'GoodLades/hot-ass-girls',
        'GoodLades/beach-girl',
        'GoodLades/selfies',
        'GoodLades/lingerie',
        'Sharingbeauty/first-class-beauty',
        'Sharingbeauty/just-simply-beautiful',
        'Sharingbeauty/the-best-of-perfection',
        'Sharingbeauty/bw-eye-for-beauty',
        'Beautifulmind02/only-the-best',
        'Sharingbeauty/eye-for-beauty',
        'Sharingbeauty/the-beste-of-bikini',
        'Sharingbeauty/behind-my-backside',
        'Sharingbeauty/beach-girls',
        'Sharingbeauty/sexy-in-shorts',
        'Sharingbeauty/the-best-of-lingerie',
        'Sharingbeauty/shes-so-sensual',
        'Sharingbeauty/ѕecreт-garden',
        'budstone61/swimsuit',
        'budstone61/woman-sexy',
        'Kptisi/just-looking',
        'jhl2015/ooh-so-sexy',
        'rajx3loveyou/baвү-gσт-blσηε-tm',
        'rajx3loveyou/baвy-goт-lιηgεяιε-tm',
        'princessred1980/turning-up-the-heat-20-color',
        'utah44/sssssizzle',
        //'gmbeauties/ィ-ฬ๓eղ',
        'rajx3loveyou/sмσкιιη-eүε-cαηү-tm',
        'lovejoyv3712/shape-of-her-iii',
        'barbiex3doll/bαявιє-hσттιє-oƒ-tнє-mσмєηт',
        'vivalanipple/%2B-bikini-beach-life-%2B',
        'mrsblacknwhite/the-beautyalmost-unclothed-bwtm',
        'mrsblacknwhite/e-y-e-c-a-n-d-ytm',
        'mrsblacknwhite/mrs-blackn-whitetm-~circle-of-friends~',
        'mrsblacknwhite/the-beautysexy-in-blacktm',
        'Mischa4yOu/sexy-back-color',
        'mzhyde56/outdoor-beauties',

      ],
      options: [ 'All'
      ],
    }
  },

  mounted: function () {
    console.log('referrer: ' + referrer);
    this.ref_info = referrer;
    this.options = this.optionsR;
    window.addEventListener('keyup', this.myMethod, { passive: true });
    this.hammer();
    //document.getElementsByName("slide")[0].addEventListener('change', this.doThing, { passive: true });
    // document.getElementsByName("slide")[0].addEventListener('input', function (evt) {
    //   var elem = document.getElementById("asdf");
    //   console.log(this.value);
    //   elem.style.top = '60%';
    //   elem.style.transition = 'all ' + this.value + 's ease';
    // });
  },

  methods: {

    loadImage: function (imageUrl, onprogress) {
      if (pic[k+1][0].indexOf('mp4') != -1) {app.nextvid = true}
      else {app.nextvid = false};
      //console.log(imageUrl);
      return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        var notifiedNotComputable = false;
        var imageUrlCors = 'https://ratv-cors-proxy.herokuapp.com/' + imageUrl;

        if (imageUrl[0].indexOf('i.redd.it') > 0 ||
            imageUrl.indexOf('i.redd.it') > 0 ||
            imageUrl.indexOf('vidble.com') > 0 ||
            imageUrl.indexOf('flickr.com') > 0 ||
            imageUrl.indexOf('flic.kr') > 0 ||
            imageUrl.indexOf('photoshelter.com') > 0 ||
            imageUrl[0].indexOf('wikimedia.org') > 0 ||
            imageUrl[0].indexOf('smugmug.com') > 0 ||
            imageUrl.indexOf('smugmug.com') > 0 ||
            imageUrl[0].indexOf('500px') > 0 ||
            imageUrl.indexOf('500px') > 0 ||
            imageUrl.indexOf('adsttc.com') > 0 ||
            imageUrl.indexOf('puu.sh') > 0 ||
            imageUrl.indexOf('nasa.gov') > 0 ||
            imageUrl.indexOf('hubblesite.org') > 0 ||
            imageUrl[0].indexOf('deviantart') > 0 ||
            imageUrl.indexOf('deviantart') > 0 ||
            imageUrl.indexOf('pinimg.com') > 0 ||
            imageUrl.indexOf('gfycat') > 0 ||
            imageUrl[0].indexOf('nasa.gov') > 0)
        {
          xhr.open('GET', imageUrlCors, true);
        } else {
          xhr.open('GET', imageUrl, true);
        };
        //xhr.setRequestHeader( 'Access-Control-Allow-Origin', '*');
        //console.log('imageUrl: ' + imageUrl);
        //console.log('app.vid: ' + app.vid);
        xhr.responseType = 'arraybuffer';

        xhr.onprogress = function(ev) {
          // console.log(xhr.getAllResponseHeaders().content-length)
          if (abortnext) {console.log('abortnext'); abortnext = false; xhr.abort()}
          if (ev.lengthComputable) {
            onprogress(parseInt((ev.loaded / ev.total) * 100));
          } else {
            if (!notifiedNotComputable) {
              notifiedNotComputable = true;
              onprogress(-1);
            }
          }
        }

        xhr.onloadend = function() {
          if (!xhr.status.toString().match(/^2/)) {
            reject(xhr);
          } else {
            if (!notifiedNotComputable) {
              onprogress(100);
            }

            var options = {}
            var headers = xhr.getAllResponseHeaders();
            var m = headers.match(/^Content-Type\:\s*(.*?)$/mi);

            if (m && m[1]) {
              options.type = m[1];
            }

            nextBlob = 'init';
            var blob = new Blob([this.response], options);
            if (blob.size < 1024*1024) {
              blobsize = Math.round(blob.size/1024) + ' kB';
            } else {
              blobsize = Math.round(blob.size/1024/1024*10)/10 + ' mB';
            }
            console.log('blob.size: ' + blob.size + ' ' + blobsize);
            pic[k+2][12] = blobsize;
            console.log(m[1]);
            console.log(pic[k+2][1]);
            if ((m[1] === 'image/jpeg' || m[1] === 'image/png' || m[1] === 'application/octet-stream') && blob.size < 20000) {
              console.log('Pic < 20kB raus ');
              //pic.splice(k+1,1);
              //app.fetched = ' / ' + pic.length;
              nextBlob = '';
            } else if (m[1] === 'image/jpeg' || m[1] === 'image/png' || m[1] === 'application/octet-stream') {
              if ((app.picked === 'reddit' || app.picked === 'redditSFW') && (app.selected === 'All' || app.selected === 'BestOf' || app.selected === 'Fitness') && pic[k+2][0].indexOf('com/a/') === -1) {
                var ppp = dd.findIndex(function (obj) { return obj === blob.size; });
                console.log('ppp: ' + ppp);
                if (ppp != -1) {
                  console.log(pic[k+2][1] + ' doppelt: https://www.reddit.com/user/' + pic[k+2][7] + ' bei Index ' + ppp + ' in Subreddit ' + pic[k+2][5]);
                  app.fetched = ' / ' + pic.length;
                  nextBlob = '';
                };
                if (dd.length > 49) {dd.pop()};
                dd.unshift(blob.size);
              };
            };
            if (nextBlob === "init") {resolve(window.URL.createObjectURL(blob))} else {reject(xhr)};
          }
        }

        wentBack = false;
        xhr.send();
      });
    },

    myMethod: function (key) {
      //console.log('waitForNext: ' + waitForNext);
      if (key.code == 'ArrowRight') {if (app.hihi === 0 && !plop) {plop = true; app.jump(-1)}}
      // if (key.code == 'ArrowRight' && !waitForNext && !plop) {app.showComms = false; app.next()}
      // else if (key.code == 'ArrowRight') {console.log('else');gotoNext = true; waitForNext = false; app.preload()}
      else if (key.code == 'ArrowLeft') {app.jump(1)}
      else if (key.code == 'ArrowUp' && !app.showComms) {app.down()}
      else if (key.code == 'ArrowDown') {muuh = true; app.up()}
      else if (key.code == 'Numpad1') {app.zlast()}
      else if (key.code == 'Numpad2') {app.zdown()}
      else if (key.code == 'Numpad3') {app.znext()}
      else if (key.code == 'Numpad5') {app.zup()}
      else if (key.code == 'KeyG') {app.imgCache = !app.imgCache}
      else if (key.code == 'KeyF') {app.toggleFS()}
      else if (key.code == 'KeyS') {app.searchTab()}
      else if (key.code == 'KeyC' && (app.picked === 'reddit' || app.picked === 'redditSFW')) {
        //console.log(typeof pic[k][6]);
        if (!app.showComms && pic[k][6] > 0) {
          app.comments = [];
          app.commentsL = [];
          //app.$refs.commsRef.focus();
          app.commentsToggle();
          //app.$refs.commsRef.getElementById('commsID')[0].focus();
        } else {
          document.getElementById('commsID').scrollTop = 0;
          app.showComms = false;
          app.ilSrc = [];
          app.il = false;
          app.ilpic = false;
        }
      }
      else if (key.code == 'KeyD') { app.truesize = !app.truesize; app.full = false}
      app.hehe = '  (truesize ' + app.truesize + ', maximize ' + app.full + ')';
    },

    znext: function () {
      app.gonext = true;
      app.currentImg = app.currentImg + 1;
      app.nextpic();
    },
    zlast: function () {
      app.gonext = false;
      app.currentImg = app.currentImg - 1;
      app.nextpic();
    },

    getCommentsFromArray: function(arr) {
      var text = '';
      var linkify = '';

      arr.forEach(function(item) {
        // console.log(item.data);
        if (typeof item.data.body !== 'undefined') {
          //var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
          text += item.data.body + '\n\n';
          if (item.data.is_submitter) {
            linkify = '[OP]: ' + item.data.body;
            app.opcom = 'yellow';
            // console.log('opcom yellow')
          } else {
            linkify = item.data.body;
            app.opcom = 'white';
            // console.log('opcom white')
          }
          var prelinki = '';
          for (var comdepth=0; comdepth < item.data.depth; comdepth++) {
            prelinki = '> ' + prelinki;
          }
          // console.log(prelinki)
          linkify = prelinki + linkify;
          // console.log(linkify);
          if (linkify.indexOf('#**') === -1 && linkify.indexOf('phonebatterylevelbot') === -1 && linkify.indexOf('nices') === -1 &&
              linkify.indexOf('a bot for linking direct images') === -1 && linkify.indexOf('**Remember OP is a real person') === -1 &&
              linkify.indexOf('AlphaBetaGammaTheta') === -1 && linkify.indexOf('compose/?to') === -1 && linkify.indexOf('#Repost') === -1) {
            if (linkify.indexOf('&amp;') != -1) {linkify = linkify.replace(/&amp;/g, "&")}
            else if (linkify.indexOf('&lt;') != -1) {linkify = linkify.replace(/&lt;/g, "<")}
            else if (linkify.indexOf('&gt;') != -1) {linkify = linkify.replace(/&gt;/g, ">")}
            var peep = linkify.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);
            // console.log(peep);
            // if (peep === null && (linkify.indexOf('r/') === 0 || linkify.indexOf('r/') === 1)) {var peep = []; peep.push(linkify)};
            if (peep === null && (linkify.indexOf('r/') > -1 || linkify.indexOf('u/') > -1)) {var peep = []; peep.push(linkify)};
            app.comments.push('');
            app.comments.push(linkify);
            if (peep !== null) {
              // console.log(peep);
              //console.log(peep.length);
              app.commentsL.push('');
              for (var d=0; d < peep.length; d++) {
                // linkify.replace(/\n/ig, ' ');
                var poop = peep[d];
                // console.log('letztes poop: ' + poop.slice(-1))
                if (poop.indexOf('ttp://') > 0) {poop = poop.replace("ttp://", "ttps://")}
                if (poop.indexOf('www.imgur') > 0) {poop = poop.replace("www.imgur", "imgur")}
                if (poop.indexOf('m.imgur') > 0) {poop = poop.replace("m.imgur", "imgur")}
                if (poop.indexOf('imgur.com/gallery') > 0) {poop = poop.replace("imgur.com/gallery", "imgur.com/a")}
                if (poop.slice(-1) === '.') {poop = poop.slice(0, -1)}
                else if (poop.slice(-2) === '. ') {poop = poop.slice(0, -2)}
                // console.log(poop);
                if (poop.indexOf('/r/') > -1 && poop.indexOf('http') === -1) {poop = poop.replace("/r/", "https://reddit.com/r/")}
                else if (poop.indexOf('r/') > -1 && poop.indexOf('http') === -1) {poop = poop.replace("r/", "https://reddit.com/r/")}
                if (poop.indexOf('/u/') > -1 && poop.indexOf('http') === -1) {poop = poop.replace("/u/", "https://reddit.com/user/")}
                else if (poop.indexOf('u/') > -1 && poop.indexOf('http') === -1) {poop = poop.replace("u/", "https://reddit.com/user/")}
                if (poop.indexOf('http') !== 0) {
                  var uha = poop.indexOf('http');
                  poop = poop.substring(uha);
                }
                // console.log(poop);
                // if (poop.indexOf(' ') > -1 || poop.indexOf('\n') > -1) {
                if (poop.indexOf(' ') > -1 || poop.indexOf('\n') > -1) {
                  var urla1 = poop.replace('\n',' ').split(' ');
                  console.log('urla[0]: ' + urla1[0]);
                  for (var dw=0; dw < urla1.length; dw++) {
                    console.log('urla1[dw]: ' + urla1[dw]);
                    if (urla1[dw].indexOf('r/') > -1) {
                      if (urla1[dw].indexOf('/r/') > -1 && urla1[dw].indexOf('http') === -1) {urla1[dw] = urla1[dw].replace("/r/", "https://reddit.com/r/")}
                      else if (urla1[dw].indexOf('r/') > -1 && urla1[dw].indexOf('http') === -1) {urla1[dw] = urla1[dw].replace("r/", "https://reddit.com/r/")}
                      app.commentsL.push(urla1[dw])
                    } else if (urla1[dw].indexOf('u/') > -1) {
                      if (urla1[dw].indexOf('/u/') > -1 && urla1[dw].indexOf('http') === -1) {urla1[dw] = urla1[dw].replace("/u/", "https://reddit.com/user/")}
                      else if (urla1[dw].indexOf('u/') > -1 && urla1[dw].indexOf('http') === -1) {urla1[dw] = urla1[dw].replace("u/", "https://reddit.com/user/")}
                      app.commentsL.push(urla1[dw])
                    }
                  }
                  // console.log('url: ' + url);
                } else {
                  app.commentsL.push(poop);
                }
              }
            }
          }

          if (typeof item.data.replies !== 'undefined' && item.data.replies !== '') {
            text += app.getCommentsFromArray(item.data.replies.data.children);
          }
        }
      });
      if (app.comments.length === 100) {
        app.showComms = false;
        app.showCommsL = false;
      } else {
        app.showComms = true;
        commsID.childNodes[0].data = '';
        if (app.commentsL.length === 1000) {
          app.showCommsL = false
        } else {
          //console.log('qqqqqq');
          app.showCommsL = true;
          for (var jj = 0; jj < app.commentsL.length; jj++) {
            var miclink = app.commentsL[jj];
            if (miclink.indexOf('instagram') != -1 && miclink.indexOf('?') > 0)
            {
              var jupp = miclink.split("?");
              miclink = jupp[0];
              app.commentsL[jj] = miclink;
            };
            if (miclink.indexOf('imgur') != -1 && miclink.indexOf('imgur.com/a/') === -1 && miclink.indexOf('.', 22) < 0)
            {
              miclink += '.jpg';
            };
            if (miclink.indexOf('.jpg') != -1 || miclink.indexOf('.png') != -1 || miclink.indexOf('.gif') != -1) {
              // if (miclink.indexOf('imgur') != -1 && (miclink.indexOf('.jpg') != -1 || miclink.indexOf('.png') != -1 || miclink.indexOf('.gif') != -1)) {
              //console.log(jj + ' ' + miclink);
              if (miclink.indexOf('.gifv') != -1) {miclink = miclink.replace("gifv", "gif")}
              if (app.ilSrc.indexOf(miclink) === -1) {app.ilSrc.push(miclink)};
            }
          }
          app.il = true;
        }
        // if (!mobile) {app.$nextTick(() => app.$refs.commsRef.focus())}
        document.getElementById('commsID').scrollTop = 0;
      }
      // for (var i = 0; i < document.getElementById('commsID').children.length; i++) {
      //   console.log(i + document.getElementById('commsID').children[i].innerText)
      // }
      return text;
    },

    commentsToggle: function () {
      var pieces = pic[k][1].split("/");
      var commentsTree = 'https://www.reddit.com/r/' + pieces[4] + '/comments/' + pieces[6] + '.json';
      // console.log(commentsTree);
      axios.get(commentsTree)
        .then(function (response) {
          // console.log(response);
          plep = response.data[1].data.children;
          var text = app.getCommentsFromArray(plep);
          // console.log(app.commentsL);
          // doppelte links raus
          app.commentsL = [...new Set(app.commentsL)];
          // console.log(app.commentsL);
          for (var jj = 0; jj < app.commentsL.length; jj++) {
            if (app.commentsL[jj].charAt(app.commentsL[jj].length-1) === '/') {app.commentsL[jj] = app.commentsL[jj].slice(0, -1)}
            if (app.commentsL[jj].indexOf('/a/') > 0) {
              app.albumsincomms(app.commentsL[jj]);
            } else if (app.commentsL[jj].indexOf('reddit.com/r/') > 0 && app.commentsL[jj].indexOf('comments') < 0) {
              app.subincomms(app.commentsL[jj]);
            }
          }
          app.commentsL.push('');
          app.commentsL.push('https://reddit.com/user/' + pic[k][7]);
          document.getElementById('commsID').scrollTop = 0;
          //app.comments = text;
          //for (var i = 0; i < response.data[1].data.children.length; i++) {
            //console.log(response.data[1].data.children[i].data.body)
          //}
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    getBase64Image: function (url) {
      var promise = new Promise(function(resolve, reject) {

        var img = new Image();
        // To prevent: "Uncaught SecurityError: Failed to execute 'toDataURL' on 'HTMLCanvasElement': Tainted canvases may not be exported."
        img.crossOrigin = "Anonymous";
        img.onload = function() {
          var canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          var ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0);
          var dataURL = canvas.toDataURL("image/png");
          resolve(dataURL.replace(/^data:image\/(png|jpg|jpeg|pdf);base64,/, ""));
        };
        img.src = url;
      });

      return promise;
    },

    userincomms: function (q) {
      if (q === undefined) {q = 'https://reddit.com/user/' + pic[k][7]};
      console.log('userincomms ' + q)
      igbtn.hidden = true;
      userbtn.hidden = true;
      gbtn.hidden = true;
      ybtn.hidden = true;
      var url = q;
      aicA = [];
      fetch('https://ratv-cors-proxy.herokuapp.com/' + q + '/submitted/new.json?limit=25').then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json.data)
        for (i = 0; i < json.data.children.length; i++) {
          if ((json.data.children[i].data.url.indexOf('imgur') > 0 ||
            // json.data.children[i].data.url.indexOf('gfycat') > 0 ||
            json.data.children[i].data.url.indexOf('tumblr') > 0 ||
            json.data.children[i].data.url.indexOf('500px') > 0 ||
            json.data.children[i].data.url.indexOf('redditmedia') > 0 ||
            json.data.children[i].data.url.indexOf('reddituploads') > 0 ||
            json.data.children[i].data.url.indexOf('artstation') > 0 ||
            //json.data.children[i].data.url.indexOf('deviantart') > 0 ||
            json.data.children[i].data.url.indexOf('flickr.com') > 0 ||
            json.data.children[i].data.url.indexOf('flic.kr') > 0 ||
            json.data.children[i].data.url.indexOf('.', json.data.children[i].data.url.length-7) > 0) &&
            (
            json.data.children[i].data.title.indexOf(' m ') < 0 &&
            json.data.children[i].data.title.indexOf(' M ') < 0 &&
            json.data.children[i].data.title.indexOf('(m)') < 0 &&
            json.data.children[i].data.title.indexOf('(m1') < 0 &&
            json.data.children[i].data.title.indexOf('(m2') < 0 &&
            json.data.children[i].data.title.indexOf('(m3') < 0 &&
            json.data.children[i].data.title.indexOf('(M)') < 0 &&
            json.data.children[i].data.title.indexOf('(M1') < 0 &&
            json.data.children[i].data.title.indexOf('(M2') < 0 &&
            json.data.children[i].data.title.indexOf('(M3') < 0 &&
            json.data.children[i].data.title.indexOf('[m') < 0 &&
            json.data.children[i].data.title.indexOf('[M') < 0 &&
            json.data.children[i].data.title.indexOf('{m') < 0 &&
            json.data.children[i].data.title.indexOf('{M') < 0 &&
            json.data.children[i].data.url.indexOf('.htm') < 0 &&
            json.data.children[i].data.url.indexOf('imgur.com/a/') < 0 &&
            json.data.children[i].data.url.indexOf('gifv') < 0 &&
            json.data.children[i].data.url.substr(json.data.children[i].data.url.length - 4) != '.com'
          )) {
//              if (json.data.children[i].data.url.indexOf('imgur') > 0 &&
            if (json.data.children[i].data.url.indexOf('ttp://') > 0)
            {
                json.data.children[i].data.url = json.data.children[i].data.url.replace("http", "https")
            };
            if (json.data.children[i].data.url.indexOf('jpeg99') > 0)
            {
                json.data.children[i].data.url = json.data.children[i].data.url.replace("jpeg", "jpg")
            };
            if (json.data.children[i].data.url.indexOf('_d.jpg') > 0)
            {
                json.data.children[i].data.url = json.data.children[i].data.url.replace("_d.jpg", ".jpg")
            };
            if (json.data.children[i].data.url.indexOf('//imgur.com/gallery') > 0)
            {
                //json.data.children[i].data.url = json.data.children[i].data.url.replace("//imgur.com/gallery", "//imgur.com/a")
                json.data.children[i].data.url = json.data.children[i].data.url.replace("//imgur.com/gallery", "//i.imgur.com")
            };
            if (json.data.children[i].data.url.indexOf('imgur') != -1 && json.data.children[i].data.url.indexOf('?', 22) > 0)
            {
              var jupp = json.data.children[i].data.url.split("?");
              json.data.children[i].data.url = jupp[0];
            };
            if (json.data.children[i].data.url.indexOf('imgur.com/r/') != -1)
            {
              console.log(json.data.children[i].data.url + ' an Pos. ' + i + ' umschreiben in ');
              var jupp = json.data.children[i].data.url.split("/");
              json.data.children[i].data.url = jupp[0] + '//' + jupp[2] + '/' + jupp[5] + '.jpg';
              console.log(json.data.children[i].data.url);
            };
            if (json.data.children[i].data.url.indexOf('imgur') != -1 && json.data.children[i].data.url.indexOf('imgur.com/a/') === -1 && json.data.children[i].data.url.indexOf('.', 22) < 0)
            {
              json.data.children[i].data.url += '.jpg';
            };
            if (json.data.children[i].data.url.indexOf('//imgur') != -1 && json.data.children[i].data.url.indexOf('.jpg') != -1)
            {
              json.data.children[i].data.url = json.data.children[i].data.url.replace("//imgur", "//i.imgur")
            };
            if (json.data.children[i].data.url.indexOf('//m.imgur.com/a/') != -1)
            {
              json.data.children[i].data.url = json.data.children[i].data.url.replace("//m.imgur", "//imgur")
            } else if (json.data.children[i].data.url.indexOf('//m.imgur.com/') != -1)
            {
              json.data.children[i].data.url = json.data.children[i].data.url.replace("//m.imgur", "//i.imgur")
              json.data.children[i].data.url += '.jpg';
            }
            if (json.data.children[i].data.url.indexOf('imgur.com/a/') != -1 && json.data.children[i].data.url.indexOf('#') != -1)
            {
              var jupp = json.data.children[i].data.url.split("#");
              json.data.children[i].data.url = jupp[0];
            };
            if (json.data.children[i].data.url.indexOf('/') === json.data.children[i].data.url.length-1)
            {
              json.data.children[i].data.url = json.data.children[i].data.url.slice(0, -1)
            };
            // if (app.checked) {
            //   if (json.data.children[i].data.url.indexOf('/gfycat') > 0)
            //   {
            //       json.data.children[i].data.url = json.data.children[i].data.url.replace("/gfycat", "/giant.gfycat");
            //       json.data.children[i].data.url = json.data.children[i].data.url + '.webm';
            //   }
            //   else if (json.data.children[i].data.url.indexOf('www.gfycat') > 0)
            //   {
            //       json.data.children[i].data.url = json.data.children[i].data.url.replace("www.gfycat", "giant.gfycat");
            //       json.data.children[i].data.url = json.data.children[i].data.url + '.webm';
            //   };
            //   if (json.data.children[i].data.url.indexOf('-size_restricted.gif') > 0)
            //   {
            //       json.data.children[i].data.url = json.data.children[i].data.url.replace("-size_restricted.gif", ".webm");
            //       json.data.children[i].data.url = json.data.children[i].data.url.replace("thumbs", "giant");
            //   };
            // }
            var shit = json.data.children[i].data.created-8*60*60;
            var ts = Math.round((new Date()).getTime() / 1000);
            var minutes = Math.round((ts-shit)/60);
            var date = Math.round(minutes/60);
            var days = Math.round(date/24);
            var formattedTime = "";
            //console.log((ts-shit)/60 + ": " + desc + " " + url);
            if (date >= 36) {formattedTime = days + ' days ago';}
            if (date < 36) {formattedTime = days + ' day ago';}
            if (date < 24) {formattedTime = date + ' hours ago';}
            if (minutes < 90) {formattedTime = date + ' hour ago';}
            if (minutes < 60) {formattedTime = minutes + ' min ago';}

//          if (json.data.children[i].data.author === '[deleted]') {console.log(json.data.children[i].data); console.log(' an Pos. ' + i)}
            // console.log(url);
            // console.log(json.data.children[i].data.preview);
            if (typeof json.data.children[i].data.preview != 'undefined') {
              aicA.push([json.data.children[i].data.subreddit, json.data.children[i].data.url, json.data.children[i].data.preview.images[0].source.height + json.data.children[i].data.preview.images[0].source.width, Math.round(minutes / 20) * 20, json.data.children[i].data.title]);
            }

            // console.log(aicA)
            // pic.push([
            //   json.data.children[i].data.url,
            //   'https://www.reddit.com' + json.data.children[i].data.permalink,
            //   formattedTime,
            //   json.data.children[i].data.title,
            //   shit,
            //   json.data.children[i].data.subreddit,
            //   json.data.children[i].data.num_comments,
            //   json.data.children[i].data.author,
            // ]);
            // app.imgList.push(json.data.children[i].data.url);
            // app.fetched = ' / ' + pic.length;
          } else {
            // ciao.push([json.data.children[i].data.url, json.data.children[i].data.title]);
            console.log('wegwerfen: ' + json.data.children[i].data.url + ' ' + json.data.children[i].data.title)
          }
        }
        //videos raus wenn abgewählt
        if (!app.checked) {
          aicA = aicA.filter( element => !~element[0].indexOf('gif') && !~element[0].indexOf('gfycat') && !~element[0].indexOf('mp4') );
        };
        console.log(aicA)
        // doppelte raus
        aicA = aicA.filter(function(item, pos) {
          if (!this.hasOwnProperty(item[1])) {
            // console.log('true ' + item[1] + ' ' + item[2] + ' ' + item[3])
            return this[item[1]] = true;
          }
          // console.log('false ' + item[1] + ' ' + item[2] + ' ' + item[3])
          return false;
        }, {});
        aicA = aicA.filter(function(item, pos) {
          if (!this.hasOwnProperty(item[3])) {
            // console.log('true ' + item[1] + ' ' + item[2] + ' ' + item[3])
            return this[item[3]] = true;
          }
          // console.log('false ' + item[1] + ' ' + item[2] + ' ' + item[3])
          return false;
        }, {});

        // var lolli = [];
        // for (var z = 0; z < aicA.length; z++) {
        //   var promise = app.getBase64Image('https://ratv-cors-proxy.herokuapp.com/' + aicA[z][1]);
        //
        //   promise.then(function (dataURL) {
        //     console.log(aicA)
        //     console.log(z)
        //     console.log(aicA[z])
        //     lolli.push(dataURL);
        //     console.log(lolli);
        //   });
        // }

        // var diff = resemble('https://ratv-cors-proxy.herokuapp.com/' + aicA[0][1])
        //     .compareTo('https://ratv-cors-proxy.herokuapp.com/' + aicA[1][1])
        //     .ignoreColors()
        //     .onComplete(function(data) {
        //         console.log(data);
        //         /*
        //   {
        //     misMatchPercentage : 100, // %
        //     isSameDimensions: true, // or false
        //     dimensionDifference: { width: 0, height: -1 }, // defined if dimensions are not the same
        //     getImageDataUrl: function(){}
        //   }
        //   */
        //     });

        // aicA = aicA.filter(function(item, pos) {
        //   // console.log(item + ' ' + pos)
        //   if (this.hasOwnProperty(item[2])) {
        //     var ww = false;
        //     for (var ii = 0; ii < pos; ii++) {
        //       console.log('------------')
        //       console.log('aicA[ii][0] ' + aicA[ii][0])
        //       console.log('item[0] ' + item[0])
        //       if (aicA[ii][0] !== item[0]) {return false}
        //     }
        //     if (ww === true) {
        //       console.log('true ' + item[0] + ' ' + item[1] + ' ' + item[2])
        //       return this[item[2]] = true;
        //     } else {
        //       console.log('false ' + item[0] + ' ' + item[1] + ' ' + item[2])
        //       return false;
        //     }
        //   }
        //   console.log('true ' + item[0] + ' ' + item[1] + ' ' + item[2])
        //   return this[item[2]] = true;
        // }, {});

        // app.fetched = ' / ' + pic.length;
        // app.sort();
        // titleLink = 3;
        console.log('lol url: ' + url + '/submitted/?sort=new');
        var pppp = app.commentsL.findIndex(function (obj) { return obj === url; });
        console.log(pppp);
        var count = 0;
        for(var i = 0; i < aicA.length; i++){
          // if(aicA[i][0] === url)
          count++;
        }
        var eee = app.commentsL[pppp] + ' (' + count + ')';
        Vue.set(app.commentsL, pppp, eee);
        console.log('count: ' + eee);

        for (var z = 0; z < aicA.length; z++) {
          // console.log(q.indexOf(aicA[z][0]))
          //if (t.substr(t.length - 5) === aicA[z][0].substr(aicA[z][0].length - 5)) {
          // if (q.indexOf(aicA[z][0]) !== -1) {
            // if (z > 0) {
            //   // console.log(aicA[z][2])
            //   // console.log(aicA[z-1][2])
            //   if (aicA[z][2] !== aicA[z-1][2]) {
            //     app.ilSrc.push(aicA[z][1]);
            //   }
            // } else {
              app.ilSrc.push(aicA[z][1]);
            // }
            // console.log(aicA[z][1])
          // }
        };
      }).catch(function(err) {
        console.log(err);
        app.err = 'error: ' + err.message;
      });
    },

    subincomms: function (q) {
      // if (q.indexOf('%20') > -1) {}
      console.log('q: ' + q);
      var urla = q.split(' ');
      console.log('urla[0]: ' + urla[0]);
      var url = urla[0];
      // console.log(url.charAt(url.length-1))
      if (url.charAt(url.length-1) === '/') {url = url.slice(0, -1)}
      console.log('url: ' + url);
      aicA = [];
      fetch('https://ratv-cors-proxy.herokuapp.com/' + url + '/new.json?limit=25').then(function(response) {
        return response.json();
      }).then(function(json) {
        // console.log(json.data)
        for (i = 0; i < json.data.children.length; i++) {
          if ((json.data.children[i].data.url.indexOf('imgur') > 0 ||
            // json.data.children[i].data.url.indexOf('gfycat') > 0 ||
            json.data.children[i].data.url.indexOf('tumblr') > 0 ||
            json.data.children[i].data.url.indexOf('500px') > 0 ||
            json.data.children[i].data.url.indexOf('redditmedia') > 0 ||
            json.data.children[i].data.url.indexOf('reddituploads') > 0 ||
            json.data.children[i].data.url.indexOf('artstation') > 0 ||
            //json.data.children[i].data.url.indexOf('deviantart') > 0 ||
            json.data.children[i].data.url.indexOf('flickr.com') > 0 ||
            json.data.children[i].data.url.indexOf('flic.kr') > 0 ||
            json.data.children[i].data.url.indexOf('.', json.data.children[i].data.url.length-7) > 0) &&
            (
            json.data.children[i].data.title.indexOf(' m ') < 0 &&
            json.data.children[i].data.title.indexOf(' M ') < 0 &&
            json.data.children[i].data.title.indexOf('(m)') < 0 &&
            json.data.children[i].data.title.indexOf('(m1') < 0 &&
            json.data.children[i].data.title.indexOf('(m2') < 0 &&
            json.data.children[i].data.title.indexOf('(m3') < 0 &&
            json.data.children[i].data.title.indexOf('(M)') < 0 &&
            json.data.children[i].data.title.indexOf('(M1') < 0 &&
            json.data.children[i].data.title.indexOf('(M2') < 0 &&
            json.data.children[i].data.title.indexOf('(M3') < 0 &&
            json.data.children[i].data.title.indexOf('[m') < 0 &&
            json.data.children[i].data.title.indexOf('[M') < 0 &&
            json.data.children[i].data.title.indexOf('{m') < 0 &&
            json.data.children[i].data.title.indexOf('{M') < 0 &&
            json.data.children[i].data.url.indexOf('.htm') < 0 &&
            json.data.children[i].data.url.indexOf('imgur.com/a/') < 0 &&
            json.data.children[i].data.url.indexOf('gifv') < 0 &&
            json.data.children[i].data.url.substr(json.data.children[i].data.url.length - 4) != '.com'
          )) {
//              if (json.data.children[i].data.url.indexOf('imgur') > 0 &&
            if (json.data.children[i].data.url.indexOf('ttp://') > 0)
            {
                json.data.children[i].data.url = json.data.children[i].data.url.replace("http", "https")
            };
            if (json.data.children[i].data.url.indexOf('jpeg99') > 0)
            {
                json.data.children[i].data.url = json.data.children[i].data.url.replace("jpeg", "jpg")
            };
            if (json.data.children[i].data.url.indexOf('_d.jpg') > 0)
            {
                json.data.children[i].data.url = json.data.children[i].data.url.replace("_d.jpg", ".jpg")
            };
            if (json.data.children[i].data.url.indexOf('//imgur.com/gallery') > 0)
            {
                //json.data.children[i].data.url = json.data.children[i].data.url.replace("//imgur.com/gallery", "//imgur.com/a")
                json.data.children[i].data.url = json.data.children[i].data.url.replace("//imgur.com/gallery", "//i.imgur.com")
            };
            if (json.data.children[i].data.url.indexOf('imgur') != -1 && json.data.children[i].data.url.indexOf('?', 22) > 0)
            {
              var jupp = json.data.children[i].data.url.split("?");
              json.data.children[i].data.url = jupp[0];
            };
            if (json.data.children[i].data.url.indexOf('imgur.com/r/') != -1)
            {
              console.log(json.data.children[i].data.url + ' an Pos. ' + i + ' umschreiben in ');
              var jupp = json.data.children[i].data.url.split("/");
              json.data.children[i].data.url = jupp[0] + '//' + jupp[2] + '/' + jupp[5] + '.jpg';
              console.log(json.data.children[i].data.url);
            };
            if (json.data.children[i].data.url.indexOf('imgur') != -1 && json.data.children[i].data.url.indexOf('imgur.com/a/') === -1 && json.data.children[i].data.url.indexOf('.', 22) < 0)
            {
              json.data.children[i].data.url += '.jpg';
            };
            if (json.data.children[i].data.url.indexOf('//imgur') != -1 && json.data.children[i].data.url.indexOf('.jpg') != -1)
            {
              json.data.children[i].data.url = json.data.children[i].data.url.replace("//imgur", "//i.imgur")
            };
            if (json.data.children[i].data.url.indexOf('//m.imgur.com/a/') != -1)
            {
              json.data.children[i].data.url = json.data.children[i].data.url.replace("//m.imgur", "//imgur")
            } else if (json.data.children[i].data.url.indexOf('//m.imgur.com/') != -1)
            {
              json.data.children[i].data.url = json.data.children[i].data.url.replace("//m.imgur", "//i.imgur")
              json.data.children[i].data.url += '.jpg';
            }
            if (json.data.children[i].data.url.indexOf('imgur.com/a/') != -1 && json.data.children[i].data.url.indexOf('#') != -1)
            {
              var jupp = json.data.children[i].data.url.split("#");
              json.data.children[i].data.url = jupp[0];
            };
            if (json.data.children[i].data.url.indexOf('/') === json.data.children[i].data.url.length-1)
            {
              json.data.children[i].data.url = json.data.children[i].data.url.slice(0, -1)
            };
            // if (app.checked) {
            //   if (json.data.children[i].data.url.indexOf('/gfycat') > 0)
            //   {
            //       json.data.children[i].data.url = json.data.children[i].data.url.replace("/gfycat", "/giant.gfycat");
            //       json.data.children[i].data.url = json.data.children[i].data.url + '.webm';
            //   }
            //   else if (json.data.children[i].data.url.indexOf('www.gfycat') > 0)
            //   {
            //       json.data.children[i].data.url = json.data.children[i].data.url.replace("www.gfycat", "giant.gfycat");
            //       json.data.children[i].data.url = json.data.children[i].data.url + '.webm';
            //   };
            //   if (json.data.children[i].data.url.indexOf('-size_restricted.gif') > 0)
            //   {
            //       json.data.children[i].data.url = json.data.children[i].data.url.replace("-size_restricted.gif", ".webm");
            //       json.data.children[i].data.url = json.data.children[i].data.url.replace("thumbs", "giant");
            //   };
            // }
            var shit = json.data.children[i].data.created-8*60*60;
            var ts = Math.round((new Date()).getTime() / 1000);
            var minutes = Math.round((ts-shit)/60);
            var date = Math.round(minutes/60);
            var days = Math.round(date/24);
            var formattedTime = "";
            //console.log((ts-shit)/60 + ": " + desc + " " + url);
            if (date >= 36) {formattedTime = days + ' days ago';}
            if (date < 36) {formattedTime = days + ' day ago';}
            if (date < 24) {formattedTime = date + ' hours ago';}
            if (minutes < 90) {formattedTime = date + ' hour ago';}
            if (minutes < 60) {formattedTime = minutes + ' min ago';}

//          if (json.data.children[i].data.author === '[deleted]') {console.log(json.data.children[i].data); console.log(' an Pos. ' + i)}
            // console.log(url);
            // console.log(json.data.children[i].data.url);
            aicA.push([url, json.data.children[i].data.url]);
            // console.log(aicA)
            // pic.push([
            //   json.data.children[i].data.url,
            //   'https://www.reddit.com' + json.data.children[i].data.permalink,
            //   formattedTime,
            //   json.data.children[i].data.title,
            //   shit,
            //   json.data.children[i].data.subreddit,
            //   json.data.children[i].data.num_comments,
            //   json.data.children[i].data.author,
            // ]);
            // app.imgList.push(json.data.children[i].data.url);
            // app.fetched = ' / ' + pic.length;
          } else {
            // ciao.push([json.data.children[i].data.url, json.data.children[i].data.title]);
            console.log('wegwerfen: ' + json.data.children[i].data.url + ' ' + json.data.children[i].data.title)
          }
        }
        //videos raus wenn abgewählt
        if (!app.checked) {
          aicA = aicA.filter( element => !~element[0].indexOf('gif') && !~element[0].indexOf('gfycat') && !~element[0].indexOf('mp4') );
        };
        // app.fetched = ' / ' + pic.length;
        // app.sort();
        // titleLink = 3;
        console.log('lol url: ' + url);
        var pppp = app.commentsL.findIndex(function (obj) { return obj === url; });
        console.log(pppp);
        var count = 0;
        for(var i = 0; i < aicA.length; i++){
          if(aicA[i][0] === url)
          count++;
        }
        var eee = app.commentsL[pppp] + ' (' + count + ')';
        Vue.set(app.commentsL, pppp, eee);
        console.log('count: ' + eee);
      }).catch(function(err) {
        console.log(err);
        app.err = 'error: ' + err.message;
      });
    },

    albumsincomms: function (q) {
    var url = q;
    qq = 0;
    aicA = [];
    var album;
    //console.log(url);
    if (url.indexOf('ttp://') > 0) {url = url.replace("ttp://", "ttps://")}
    if (url.indexOf('www.imgur') > 0) {url = url.replace("www.imgur", "imgur")}
    else if (url.indexOf('m.imgur') > 0) {url = url.replace("m.imgur", "imgur")};
    if (url.charAt(9) === ".") {album = 'album/' + url.substr(22,7)}
    else {album = 'album/' + url.substr(20,7)};
    console.log(url);
    //console.log('album: ' + album);
    //console.log("url: " + url + " album: " + album);
    var request = new Request('https://api.imgur.com/3/' + album, {
    	method: 'GET',
    	headers: new Headers({
    		'Authorization': 'Client-ID 257cada0393452b'
    	})
    });
    fetch(request).then(function(response) {
      return response.json();
    }).then(function(json) {
      if (json.data.images.length > 1) {
        for (var z = 0; z < json.data.images.length; z++) {
          var tempi = 'https://i.imgur.com/' + json.data.images[z].id + '.jpg';
          aicA.push([url, tempi]);
        };
      } else {
        var tempi = 'https://i.imgur.com/' + json.data.images[0].id + '.jpg';
        aicA.push([url, tempi]);
        console.log("Nur ein Pic im album: " + url);
      }
      var pppp = app.commentsL.findIndex(function (obj) { return obj === url; });
      console.log(pppp);
      var count = 0;
      for(var i = 0; i < aicA.length; i++){
        if(aicA[i][0] === url)
        count++;
      }
      var eee = app.commentsL[pppp] + ' (' + count + ')';
      Vue.set(app.commentsL, pppp, eee);
      console.log('count: ' + count);
    }).catch(function(err) {
      console.log(err);
      app.err = 'error: ' + err.message;
    });
//      }
    },

    sort: function () {
      pic.sort(function(a,b) {
          return b[4]-a[4]
      });
    },

    fetchmic: function (t) {
      // console.log(t)
      if (t.indexOf('reddit.com/user/') > 0 && t.indexOf('comments') < 0) {
        igbtn.hidden = true;
        userbtn.hidden = true;
        gbtn.hidden = true;
        ybtn.hidden = true;
        app.userincomms(t);
      } else if (t.indexOf('/a/') > 0 || (t.indexOf('reddit.com/r/') > 0 && t.indexOf('comments') < 0)) {
        igbtn.hidden = true;
        userbtn.hidden = true;
        gbtn.hidden = true;
        ybtn.hidden = true;
        for (var z = 0; z < aicA.length; z++) {
          //if (t.substr(t.length - 5) === aicA[z][0].substr(aicA[z][0].length - 5)) {
          if (t.indexOf(aicA[z][0]) !== -1) {
            app.ilSrc.push(aicA[z][1]);
          }
        };
      } else {
        window.open(t, '_blank');
      }
    },

    tapAction: function () {
      console.log('tap11');
      //document.getElementById('commsID').scrollTop = 0;
      app.showComms = false;
      app.ilSrc = [];
      app.il = false;
    },

    searchTab: function () {
      // window.open('https://duckduckgo.com/?q=' + pic[k][titleLink], '_blank');
      window.open('https://yandex.com/images/search?source=collections&rpt=imageview&url=' + pic[k][8], '_blank');
    },

    beforeLeave: function (el) {
      // console.log(el);
      //const {marginLeft, marginTop, width, height} = window.getComputedStyle(el)
      // el.style.left = '${el.offsetLeft - parseFloat(marginLeft, 10)}px'
      // console.log(el.offsetTop);
      // console.log(marginTop);
      // el.style.top = '${el.offsetTop - parseFloat(marginTop, 10)}px'
      // document.getElementById('lastOne').visibility = 'hidden';
      if (k > ath) {
        app.hihi = 100;
        app.err = 100;
      }
      el.style.top = el.offsetTop + 'px';
      // plop = true;
      console.log('before')
      // console.log(el.style.top);
      // el.style.width = width
      //el.style.height = height
    },

    afterLeave: function (el) {
      console.log('after app.currentImg: ' + app.currentImg)
      // if (app.currentImg > 0) {
      //   var elementt = document.getElementById("imgDiv");
      //   console.log(elementt)
      //   elementt.classList.add("derp");
      // }
      // console.log(app.imgList)
      if (k > 2 && app.imgList[k-3] === '') {
        app.imgList[k-3] = pic[k-3][0];
      } else if (k > 1 && app.imgList[k-1] === '') {
        app.imgList[k-1] = pic[k-1][0];
        document.getElementById('lastOne').src = app.imgList[k-1];
      } else if (k === 1 && app.imgList[0] === '') {
        app.imgList[0] = pic[0][0];
        document.getElementById('lastOne').src = app.imgList[0];
      }
      if (k > 1 && app.imgList[k-2] != '') {
        app.imgList[k-2] = '';
      }
      //console.log(app.imgList)
      //console.log('k: ' + k)
      if (typeof pic[k][9] != 'undefined') {
        app.chicken = 2;
        console.log('k: ' + k)
      }
      // plop = false;
      if (k >= ath) {app.preload()}
    },

    fetchNow: function (event) {
      if (window.screen.orientation.type === 'portrait-primary' || window.screen.orientation.angle !== 0) {
        mobile = true;
      } else {
        mobile = false;
      }
      app.hehe = '  (truesize ' + app.truesize + ', maximize ' + app.full + ')';
      app.chicken2 = false;
      app.chicken3 = false;
      app.transmode = '';
      app.transStyle = '';
      ath = 0;
      app.err = '';
      app.fetched = ' / ';
      app.gonext = true;
      app.currentImg = 0;
      app.imgList = [];
      if (app.loaded != '') {app.loaded = '1'};
      //if (app.picked === 'redditSFW') {app.transStyle = '{position: relative}'};
      if (app.picked === 'reddit' || app.picked === 'redditSFW') {
        app.fetchR();
      } else if (app.picked === 'tumblr') {
        app.fetchT();
      } else if (app.picked === 'insta') {
        app.fetchI();
      } else if (app.picked === 'pint') {
        app.fetchP();
      } else if (app.picked === '500px') {
        app.fetch5();
      } else if (app.picked === 'flickr') {
        app.fetchF();
      };
    },

    fetchP: function (event) {
      console.log(app.selected);
      var sr = [];
      var limit = 25;
      if (app.selected != 'All') {sr.push('bla', app.selected); limit = 100} else {sr = this.optionsP; limit = 25};
      var counter = 0;
      //console.log('sr: ' + sr);
      pic = [];
      k = 0;
      for (j = 1; j < sr.length; j++) {

        var tname = sr[j];
        //console.log('tname ' + tname);

        var request = new Request('https://api.pinterest.com/v1/boards/' + tname + '/pins/?access_token=ASd8Bnc1sPMQHlW0o-m7futk74WdFPIMPH6_WgBEbppySkAv2gAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cimage%2Cattribution%2Coriginal_link%2Cboard%2Ccolor%2Ccounts%2Ccreated_at%2Ccreator%2Cmedia%2Cmetadata', {
          method: 'GET',
        });
        fetch(request).then(function(response) {
          return response.json();
        }).then(function(json) {
          var tp = json.data;
          //console.log(tp);
          //console.log('tp.lenght: ' + tp.length);
          if (tp.length >= 0) {
            for (var z = 0; z < tp.length; z++) {
              if (tp[z].media.type === 'image') {
                //for (var q = 0; q < tp[z].photos.length; q++) {
                  //if (tp[z].photos.length > 1) {picNo = tp[z].photos.length} else {picNo = 1};
                  //console.log(tp[z].photos.length);
                  var pieces = tp[z].board.url.split("/");
                  var imgID = tp[z].image.original.url;
                  var blogname = pieces[3];
                  var posturl = tp[z].url;
                  var createdT = tp[z].created_at;
                  var tagline = tp[z].note;
                  if (tagline = " ") {tagline = tp[z].board.name};
                  var picNo = 1;
                  //imgNo = json.data.images.length;
                  //imgID += 't';
                  //imgID = 'http://i.imgur.com/' + imgID + '.jpg';
                  var shit = Date.parse(createdT)/1000;
                  var ts = Math.round((new Date()).getTime() / 1000);
                  var zzz = new Date();
                  var minutes = Math.round((ts-shit)/60);
                  var date = Math.round(minutes/60);
                  var days = Math.round(date/24);
                  var formattedTime = "";
                  //console.log((ts-shit)/60 + ": " + desc + " " + url);
                  if (date >= 36) {formattedTime = days + ' days ago';}
                  if (date < 36) {formattedTime = days + ' day ago';}
                  if (date < 24) {formattedTime = date + ' hours ago';}
                  if (minutes < 90) {formattedTime = date + ' hour ago';}
                  if (minutes < 60) {formattedTime = minutes + ' min ago';}
                  pic.push([imgID, blogname, posturl, formattedTime, shit, tagline, picNo]);
                  app.fetched = ' / ' + pic.length;
                //}
              } else if (tp[z].type === 'video' && app.checked) {
                  var imgID = tp[z].video_url;
                  var blogname = tp[z].blog_name;
                  var posturl = tp[z].post_url;
                  var createdT = tp[z].timestamp;
                  var tagline = tp[z].summary;
                  var picNo = 1;
                  //imgNo = json.data.images.length;
                  //imgID += 't';
                  //imgID = 'http://i.imgur.com/' + imgID + '.jpg';
                  var shit = createdT;
                  var ts = Math.round((new Date()).getTime() / 1000);
                  //console.log('ts: ' + ts);
                  var minutes = Math.round((ts-shit)/60);
                  var date = Math.round(minutes/60);
                  var days = Math.round(date/24);
                  var formattedTime = "";
                  //console.log((ts-shit)/60 + ": " + desc + " " + url);
                  if (date >= 36) {formattedTime = days + ' days ago';}
                  if (date < 36) {formattedTime = days + ' day ago';}
                  if (date < 24) {formattedTime = date + ' hours ago';}
                  if (minutes < 90) {formattedTime = date + ' hour ago';}
                  if (minutes < 60) {formattedTime = minutes + ' min ago';}
                  pic.push([imgID, blogname, posturl, formattedTime, shit, tagline, picNo]);
                  app.fetched = ' / ' + pic.length;
                }
            }
          } else {
              console.log("fail 1: " + tp);
          }
          //doppelte rauswerfen
          pic = pic.filter(function(item, pos) {
            if (!this.hasOwnProperty(item[0])) {
                return this[item[0]] = true;
            }
            //console.log('aaaaa ' + pic[k][1])
            return false;
          }, {});
          app.fetched = ' / ' + pic.length;
          app.sort();
          titleLink = 5;
          counter++;
          //console.log('counter: ' + counter + ' j: ' + j + ' sr.length: ' + sr.length);
          if (counter === j-1) {
            app.imgList.push(pic[0][0]);
            app.imgList.push(pic[1][0]);
            app.nextpic();
          };
        }).catch(function(err) {
          counter++;
          console.log(err);
          app.err = 'error: ' + err.message;
        });
      }
    },

    fetchI: function (event) {
      console.log(app.selected);
      var sr = [];
      var limit = 25;
      if (app.selected != 'All') {sr.push('bla', app.selected); limit = 100} else {sr = this.optionsI; limit = 25};
      var counter = 0;
      //console.log('sr: ' + sr);
      pic = [];
      k = 0;
      for (j = 1; j < sr.length; j++) {

        var tname = sr[j];
        var uuu = 0;

        //fetch('https://igpi.ga/' + tname + '/?__a=1').then(function(response) {
        fetch('https://insta-proxy-api.herokuapp.com/' + tname + '/?__a=1').then(function(response) {
          return response.json();
        }).then(function(json) {
          //var tp = json.response.items;
          //console.log(json);
          var tp = json.graphql.user.edge_owner_to_timeline_media.edges;
          //console.log(tp)
          //console.log('tp.lenght: ' + tp.length);
          if (tp.length >= 0) {
            for (var z = 0; z < tp.length; z++) {
              if (tp[z].node.is_video === true && app.checked) {
                var imgID = tp[z].node.display_url;
                uuu++;
                //var pieces = imgID.split("/");
                //if (pieces.length > 6) {imgID = pieces[0] + '//' + pieces[2] + '/' + pieces[3] + '/' + pieces[7]};
                var blogname = json.graphql.user.username + ' (Video!)';
                var posturl = 'https://www.instagram.com/p/' + tp[z].node.shortcode;
                var createdT = tp[z].node.taken_at_timestamp;
                if (typeof tp[z].node.edge_media_to_caption.edges[0].node.text != 'undefined') {
                  if (tp[z].node.edge_media_to_caption.edges[0].node.text.length > 190) {
                    var tagline = tp[z].node.edge_media_to_caption.edges[0].node.text.substring(0, 190) + ' [...]';
                  } else {
                    var tagline = tp[z].node.edge_media_to_caption.edges[0].node.text;
                  }
                } else {
                  var tagline = '';
                }
                var picNo = 1;
                //imgNo = json.data.images.length;
                //imgID += 't';
                //imgID = 'http://i.imgur.com/' + imgID + '.jpg';
                var shit = createdT;
                var ts = Math.round((new Date()).getTime() / 1000);
                //console.log('ts: ' + ts);
                var minutes = Math.round((ts-shit)/60);
                var date = Math.round(minutes/60);
                var days = Math.round(date/24);
                var formattedTime = "";
                //console.log((ts-shit)/60 + ": " + desc + " " + url);
                if (date >= 36) {formattedTime = days + ' days ago';}
                if (date < 36) {formattedTime = days + ' day ago';}
                if (date < 24) {formattedTime = date + ' hours ago';}
                if (minutes < 90) {formattedTime = date + ' hour ago';}
                if (minutes < 60) {formattedTime = minutes + ' min ago';}
                pic.push([imgID, posturl, formattedTime, blogname, shit, tagline, picNo]);
                app.fetched = ' / ' + pic.length;
              } else if (tp[z].node.is_video === false) {
                  picNo = 1;
                  //console.log(tp[z].photos.length);
                  var imgID = tp[z].node.display_url;
                  //console.log(imgID);
                  //var pieces = imgID.split("/");
                  //if (pieces.length > 6) {imgID = pieces[0] + '//' + pieces[2] + '/' + pieces[3] + '/' + pieces[7]};
                  var blogname = json.graphql.user.username;
                  var posturl = 'https://www.instagram.com/p/' + tp[z].node.shortcode;
                  var createdT = tp[z].node.taken_at_timestamp;
                  if (typeof tp[z].node.edge_media_to_caption.edges[0].node.text != 'undefined') {
                    if (tp[z].node.edge_media_to_caption.edges[0].node.text.length > 190) {
                      var tagline = tp[z].node.edge_media_to_caption.edges[0].node.text.substring(0, 190) + ' [...]';
                    } else {
                      var tagline = tp[z].node.edge_media_to_caption.edges[0].node.text;
                    }
                  } else {
                    var tagline = '';
                  }
                  var shit = createdT;
                  var ts = Math.round((new Date()).getTime() / 1000);
                  //console.log('ts: ' + ts);
                  var minutes = Math.round((ts-shit)/60);
                  var date = Math.round(minutes/60);
                  var days = Math.round(date/24);
                  var formattedTime = "";
                  //console.log((ts-shit)/60 + ": " + desc + " " + url);
                  if (date >= 36) {formattedTime = days + ' days ago';}
                  if (date < 36) {formattedTime = days + ' day ago';}
                  if (date < 24) {formattedTime = date + ' hours ago';}
                  if (minutes < 90) {formattedTime = date + ' hour ago';}
                  if (minutes < 60) {formattedTime = minutes + ' min ago';}
                  pic.push([imgID, posturl, formattedTime, blogname, shit, tagline, picNo]);
                  app.fetched = ' / ' + pic.length;
                }
            }
          } else {
              console.log("fail 1: " + tp);
          }
          //doppelte rauswerfen
          pic = pic.filter(function(item, pos) {
            if (!this.hasOwnProperty(item[0])) {
                return this[item[0]] = true;
            }
            //console.log('aaaaa ' + pic[k][1])
            return false;
          }, {});
          app.fetched = ' / ' + pic.length;
          app.sort();
          titleLink = 5;
          counter++;
          //console.log('counter: ' + counter + ' j: ' + j + ' sr.length: ' + sr.length);
          if (counter === j-1) {
            console.log('Anzahl Videos: ' + uuu);
            app.imgList.push(pic[0][0]);
            app.imgList.push(pic[1][0]);
            app.nextpic();
          };
        }).catch(function(err) {
          console.log('wwwww ' + err);
          counter++;
          app.err = 'error: ' + err.message;
        });
      }
    },

    fetchT: function (event) {
      console.log(app.selected);
      var sr = [];
      var limit = 25;
      if (app.selected != 'All') {sr.push('bla', app.selected, app.selected, app.selected, app.selected, app.selected); limit = 100} else {sr = this.optionsT; limit = 25};
      var counter = 0;
      //console.log('sr: ' + sr);
      pic = [];
      var shitload = [];
      k = 0;
      var tpages = '';
      for (j = 1; j < sr.length; j++) {

        var tname = sr[j];
        if (sr.length === 6) {tpages = '&offset=' + (j-1)*20; console.log('tpages: ' + tpages)}

        var request = new Request('https://ratv-cors-proxy.herokuapp.com/' + 'https://api.tumblr.com/v2/blog/' + tname + '/posts?' + 'api_key=nu2qwwClRdfuk3Z3AL31jIhkrpN84So1W7JG9YnETupVIyvVNo' + tpages, {
          method: 'GET',
        });
        fetch(request).then(function(response) {
          return response.json();
        }).then(function(json) {
          var tp = json.response.posts;
          //console.log('tp.lenght: ' + tp.length);
          if (tp.length >= 0) {
            for (var z = 0; z < tp.length; z++) {
              if (tp[z].type === 'photo') {
                  if (tp[z].photos.length > 1) {
                    picNo = tp[z].photos.length;
                    shitload = [];
                    for (var q = 0; q < tp[z].photos.length; q++) {
                      shitload[q] = tp[z].photos[q].original_size.url;
                    }
                  } else {picNo = 1; shitload = []};
                  //console.log(tp[z].photos.length);
                  var imgID = tp[z].photos[0].original_size.url;
                  var blogname = tp[z].blog_name;
                  var posturl = tp[z].post_url;
                  var createdT = tp[z].timestamp;
                  var tagline = tp[z].summary;
                  var comments = [];
                  // for (var kk = 0; kk < tp[z].notes.length; kk++) {
                  //   if (tp[z].notes[kk].type === 'reply') {
                  //     comments.push(tp[z].notes[kk].reply_text);
                  //   }
                  // }
                  //var picNo = q+1;
                  //imgNo = json.data.images.length;
                  //imgID += 't';
                  //imgID = 'http://i.imgur.com/' + imgID + '.jpg';
                  var shit = createdT;
                  var ts = Math.round((new Date()).getTime() / 1000);
                  //console.log('ts: ' + ts);
                  var minutes = Math.round((ts-shit)/60);
                  var date = Math.round(minutes/60);
                  var days = Math.round(date/24);
                  var formattedTime = "";
                  //console.log((ts-shit)/60 + ": " + desc + " " + url);
                  if (date >= 36) {formattedTime = days + ' days ago';}
                  if (date < 36) {formattedTime = days + ' day ago';}
                  if (date < 24) {formattedTime = date + ' hours ago';}
                  if (minutes < 90) {formattedTime = date + ' hour ago';}
                  if (minutes < 60) {formattedTime = minutes + ' min ago';}
                  pic.push([imgID, blogname, posturl, formattedTime, shit, tagline, picNo, shitload, comments]);
                  app.fetched = ' / ' + pic.length;
                //}
              } else if (tp[z].type === 'video' && app.checked) {
                  var imgID = tp[z].video_url;
                  var blogname = tp[z].blog_name;
                  var posturl = tp[z].post_url;
                  var createdT = tp[z].timestamp;
                  var tagline = tp[z].summary;
                  var picNo = 1;
                  //imgNo = json.data.images.length;
                  //imgID += 't';
                  //imgID = 'http://i.imgur.com/' + imgID + '.jpg';
                  var shit = createdT;
                  var ts = Math.round((new Date()).getTime() / 1000);
                  //console.log('ts: ' + ts);
                  var minutes = Math.round((ts-shit)/60);
                  var date = Math.round(minutes/60);
                  var days = Math.round(date/24);
                  var formattedTime = "";
                  //console.log((ts-shit)/60 + ": " + desc + " " + url);
                  if (date >= 36) {formattedTime = days + ' days ago';}
                  if (date < 36) {formattedTime = days + ' day ago';}
                  if (date < 24) {formattedTime = date + ' hours ago';}
                  if (minutes < 90) {formattedTime = date + ' hour ago';}
                  if (minutes < 60) {formattedTime = minutes + ' min ago';}
                  pic.push([imgID, blogname, posturl, formattedTime, shit, tagline, picNo]);
                  app.fetched = ' / ' + pic.length;
                }
            }
          } else {
              console.log("fail 1: " + tp);
          }
          //doppelte rauswerfen
          pic = pic.filter(function(item, pos) {
            if (!this.hasOwnProperty(item[0])) {
                return this[item[0]] = true;
            }
            //console.log('aaaaa ' + pic[k][1])
            return false;
          }, {});
          app.fetched = ' / ' + pic.length;
          app.sort();
          titleLink = 5;
          counter++;
          //console.log('counter: ' + counter + ' j: ' + j + ' sr.length: ' + sr.length);
          if (counter === j-1) {
            app.imgList.push(pic[0][0]);
            app.imgList.push(pic[1][0]);
            app.nextpic();
          };
        }).catch(function(err) {
          counter++;
          console.log(err);
          app.err = 'error: ' + err.message;
        });
      }
    },

    fetch5x: function (event) {
      console.log(app.selected);
      var sr = [];
      var limit = 25;
      if (app.selected != 'All') {sr.push('bla', app.selected); limit = 100} else {sr = this.options5; limit = 25};
      var counter = 0;
      //console.log('sr: ' + sr);
      pic = [];
      var shitload = [];
      k = 0;
      for (j = 1; j < sr.length; j++) {

        var tname = sr[j];

        fetch('https://ratv-cors-proxy.herokuapp.com/' + 'https://api.500px.com/v1/photos?consumer_key=sUcWp6BWMYJZ3BTKwpQXHJiiUy2pzRveuuDSL0C8&feature=user&username=' + tname + '&sort=created_at&image_size=1080').then(function(response) {
          return response.json();
        }).then(function(json) {
          var tp = json.photos;
          //console.log('tp: ' + tp);
          if (tp.length >= 0) {
            for (var z = 0; z < tp.length; z++) {
              picNo = 1;
              shitload = [];
              //console.log(tp[z].photos.length);
              var imgID = tp[z].image_url;
              var blogname = tp[z].user.username;
              var posturl = 'https://500px.com' + tp[z].url;
              var createdT = Date.parse(tp[z].created_at);
              var tagline = tp[z].name;
              if (tp[z].description != null) {
                tagline = tp[z].name + ' - ' + tp[z].description;
              }
              if (tagline.length > 50) {
                tagline = tagline.substring(0, 50) + ' [...]';
              }
              var shit = createdT/1000;
              var ts = Math.round((new Date()).getTime() / 1000);
              //console.log('ts: ' + ts);
              var minutes = Math.round((ts-shit)/60);
              var date = Math.round(minutes/60);
              var days = Math.round(date/24);
              var formattedTime = "";
              //console.log((ts-shit)/60 + ": " + desc + " " + url);
              if (date >= 36) {formattedTime = days + ' days ago';}
              if (date < 36) {formattedTime = days + ' day ago';}
              if (date < 24) {formattedTime = date + ' hours ago';}
              if (minutes < 90) {formattedTime = date + ' hour ago';}
              if (minutes < 60) {formattedTime = minutes + ' min ago';}
              pic.push([imgID, posturl, formattedTime, blogname, shit, tagline, picNo, shitload]);
              app.fetched = ' / ' + pic.length;
            //}
            }
          } else {
              console.log("fail 1: " + tp);
          }
          app.fetched = ' / ' + pic.length;
          app.sort();
          counter++;
          //console.log('counter: ' + counter + ' j: ' + j + ' sr.length: ' + sr.length);
          if (counter === j-1) {
            app.imgList.push(pic[0][0]);
            app.imgList.push(pic[1][0]);
            app.nextpic();
          };
        }).catch(function(err) {
          counter++;
          console.log(err);
          app.err = 'error: ' + err.message;
        });
      }
    },

    fetch5: function (event) {
      console.log(app.selected);
      var sr = [];
      var limit = 25;
      if (app.selected != 'All') {sr.push('bla', app.selected); limit = 100} else {sr = this.options5; limit = 25};
      var counter = 0;
      //console.log('sr: ' + sr);
      pic = [];
      var shitload = [];
      var picNo = 1;
      k = 0;

        fetch('https://ratv-cors-proxy.herokuapp.com/' + 'https://api.500px.com/v1/photos/search?term=nude+sexy&consumer_key=sUcWp6BWMYJZ3BTKwpQXHJiiUy2pzRveuuDSL0C8&image_size=1080&rpp=100&sort=created_at').then(function(response) {
          return response.json();
        }).then(function(json) {
          var tp = json.photos;
          console.log('tp: ' + tp.length);
          if (tp.length >= 0) {
            for (var z = 0; z < tp.length; z++) {
              picNo = 1;
              shitload = [];
              //console.log(tp[z].photos.length);
              var imgID = tp[z].image_url;
              var blogname = tp[z].user.username;
              var posturl = 'https://500px.com' + tp[z].url;
              var createdT = Date.parse(tp[z].created_at);
              var tagline = tp[z].name;
              if (tp[z].description != null && tp[z].description != '') {
                tagline = tp[z].name + ' - ' + tp[z].description;
              }
              if (tagline.length > 50) {
                tagline = tagline.substring(0, 50) + ' [...]';
              }
              var shit = createdT/1000;
              var ts = Math.round((new Date()).getTime() / 1000);
              //console.log('ts: ' + ts);
              var minutes = Math.round((ts-shit)/60);
              var date = Math.round(minutes/60);
              var days = Math.round(date/24);
              var formattedTime = "";
              //console.log((ts-shit)/60 + ": " + desc + " " + url);
              if (date >= 36) {formattedTime = days + ' days ago';}
              if (date < 36) {formattedTime = days + ' day ago';}
              if (date < 24) {formattedTime = date + ' hours ago';}
              if (minutes < 90) {formattedTime = date + ' hour ago';}
              if (minutes < 60) {formattedTime = minutes + ' min ago';}
              pic.push([imgID, posturl, formattedTime, blogname, shit, tagline, picNo, shitload]);
              app.fetched = ' / ' + pic.length;
            //}
            }
          } else {
              console.log("fail 1: " + tp);
          }
          app.fetched = ' / ' + pic.length;
          app.sort();
          titleLink = 5;
          counter++;
          //console.log('counter: ' + counter + ' j: ' + j + ' sr.length: ' + sr.length);
          app.imgList.push(pic[0][0]);
          app.imgList.push(pic[1][0]);
          app.nextpic();
        }).catch(function(err) {
          counter++;
          console.log(err);
          app.err = 'error: ' + err.message;
        });
    },

    fetchR: function (event) {
      console.log(app.selected);
      var sr = [];
      var limit = 25;
      if (app.selected === 'BestOf') {
        sr = this.optionsRbo;
        limit = 100;
      } else if (app.selected === 'Fitness') {
        sr = this.optionsRfit;
        limit = 100;
      } else if (app.selected != 'All') {
        sr.push('bla', app.selected);
        limit = 100;
      } else if (app.picked === 'reddit') {
        sr = this.optionsR;
        limit = 25;
      } else if (app.picked === 'redditSFW') {
        sr = this.optionsRS;
        limit = 25;
      }
      //console.log('sr: ' + sr);
      var counter = 0;
      pic = [];
      k = 0;
      for (j = 1; j < sr.length; j++) {
        // console.log('j: ' + j);
        // console.log('url j: ' + this.options[j]);
        // console.log('url length: ' + this.options.length);
        if (sr[j] === 'itookapicture' || sr[j] === 'earthporn' || app.selected != 'All') {limit = 100} else {limit = 25}
        fetch('https://www.reddit.com/r/' + sr[j] + '/new.json?limit=' + limit).then(function(response) {
          return response.json();
        }).then(function(json) {
          for (i = 0; i < json.data.children.length; i++) {
            // console.log(json.data.children[i].data.url)
            // console.log(json.data.children[i].data)
            if ((json.data.children[i].data.url.indexOf('imgur') > 0 ||
              json.data.children[i].data.url.indexOf('gfycat') > 0 ||
              json.data.children[i].data.url.indexOf('tumblr') > 0 ||
              json.data.children[i].data.url.indexOf('500px') > 0 ||
              json.data.children[i].data.url.indexOf('redditmedia') > 0 ||
              json.data.children[i].data.url.indexOf('reddituploads') > 0 ||
              json.data.children[i].data.url.indexOf('artstation') > 0 ||
              //json.data.children[i].data.url.indexOf('deviantart') > 0 ||
              json.data.children[i].data.url.indexOf('flickr.com') > 0 ||
              json.data.children[i].data.url.indexOf('flic.kr') > 0 ||
              json.data.children[i].data.url.indexOf('.', json.data.children[i].data.url.length-7) > 0) &&
              (
              json.data.children[i].data.author.indexOf('Chrisr25') < 0 &&
              json.data.children[i].data.title.indexOf(' m ') < 0 &&
              json.data.children[i].data.title.indexOf(' M ') < 0 &&
              json.data.children[i].data.title.indexOf('(m)') < 0 &&
              json.data.children[i].data.title.indexOf('(m1') < 0 &&
              json.data.children[i].data.title.indexOf('(m2') < 0 &&
              json.data.children[i].data.title.indexOf('(m3') < 0 &&
              json.data.children[i].data.title.indexOf('(M)') < 0 &&
              json.data.children[i].data.title.indexOf('(M1') < 0 &&
              json.data.children[i].data.title.indexOf('(M2') < 0 &&
              json.data.children[i].data.title.indexOf('(M3') < 0 &&
              json.data.children[i].data.title.indexOf('[m') < 0 &&
              json.data.children[i].data.title.indexOf('[M') < 0 &&
              json.data.children[i].data.title.indexOf('{m') < 0 &&
              json.data.children[i].data.title.indexOf('{M') < 0 &&
              json.data.children[i].data.url.indexOf('.htm') < 0 &&
              json.data.children[i].data.url.substr(json.data.children[i].data.url.length - 4) != '.com'
            )) {
//              if (json.data.children[i].data.url.indexOf('imgur') > 0 &&
              if (json.data.children[i].data.url.indexOf('ttp://') > 0)
              {
                  json.data.children[i].data.url = json.data.children[i].data.url.replace("http", "https")
              };
              if (json.data.children[i].data.url.indexOf('jpeg99') > 0)
              {
                  json.data.children[i].data.url = json.data.children[i].data.url.replace("jpeg", "jpg")
              };
              if (json.data.children[i].data.url.indexOf('_d.jpg') > 0)
              {
                  json.data.children[i].data.url = json.data.children[i].data.url.replace("_d.jpg", ".jpg")
              };
              if (json.data.children[i].data.url.indexOf('//imgur.com/gallery') > 0)
              {
                  //json.data.children[i].data.url = json.data.children[i].data.url.replace("//imgur.com/gallery", "//imgur.com/a")
                  json.data.children[i].data.url = json.data.children[i].data.url.replace("//imgur.com/gallery", "//i.imgur.com")
              };
              if (json.data.children[i].data.url.indexOf('imgur') != -1 && json.data.children[i].data.url.indexOf('?', 22) > 0)
              {
                var jupp = json.data.children[i].data.url.split("?");
                json.data.children[i].data.url = jupp[0];
              };
              if (json.data.children[i].data.url.indexOf('imgur.com/r/') != -1)
              {
                console.log(json.data.children[i].data.url + ' an Pos. ' + i + ' umschreiben in ');
                var jupp = json.data.children[i].data.url.split("/");
                json.data.children[i].data.url = jupp[0] + '//' + jupp[2] + '/' + jupp[5] + '.jpg';
                console.log(json.data.children[i].data.url);
              };
              if (json.data.children[i].data.url.indexOf('imgur') != -1 && json.data.children[i].data.url.indexOf('imgur.com/a/') === -1 && json.data.children[i].data.url.indexOf('.', 22) < 0)
              {
                json.data.children[i].data.url += '.jpg';
              };
              if (json.data.children[i].data.url.indexOf('//imgur') != -1 && json.data.children[i].data.url.indexOf('.jpg') != -1)
              {
                json.data.children[i].data.url = json.data.children[i].data.url.replace("//imgur", "//i.imgur")
              };
              if (json.data.children[i].data.url.indexOf('//m.imgur.com/a/') != -1)
              {
                json.data.children[i].data.url = json.data.children[i].data.url.replace("//m.imgur", "//imgur")
              } else if (json.data.children[i].data.url.indexOf('//m.imgur.com/') != -1)
              {
                json.data.children[i].data.url = json.data.children[i].data.url.replace("//m.imgur", "//i.imgur")
                json.data.children[i].data.url += '.jpg';
              }
              if (json.data.children[i].data.url.indexOf('imgur.com/a/') != -1 && json.data.children[i].data.url.indexOf('#') != -1)
              {
                var jupp = json.data.children[i].data.url.split("#");
                json.data.children[i].data.url = jupp[0];
              };
              // if (app.checked) {
              //   if (json.data.children[i].data.url.indexOf('/gfycat') > 0)
              //   {
              //       json.data.children[i].data.url = json.data.children[i].data.url.replace("/gfycat", "/giant.gfycat");
              //       json.data.children[i].data.url = json.data.children[i].data.url + '.webm';
              //   }
              //   else if (json.data.children[i].data.url.indexOf('www.gfycat') > 0)
              //   {
              //       json.data.children[i].data.url = json.data.children[i].data.url.replace("www.gfycat", "giant.gfycat");
              //       json.data.children[i].data.url = json.data.children[i].data.url + '.webm';
              //   };
              //   if (json.data.children[i].data.url.indexOf('-size_restricted.gif') > 0)
              //   {
              //       json.data.children[i].data.url = json.data.children[i].data.url.replace("-size_restricted.gif", ".webm");
              //       json.data.children[i].data.url = json.data.children[i].data.url.replace("thumbs", "giant");
              //   };
              // }
              var shit = json.data.children[i].data.created-8*60*60;
              var ts = Math.round((new Date()).getTime() / 1000);
              var minutes = Math.round((ts-shit)/60);
              var date = Math.round(minutes/60);
              var days = Math.round(date/24);
              var formattedTime = "";
              // console.log((ts-shit)/60 + ": " + desc + " " + json.data.children[i].data.url);
              if (date >= 36) {formattedTime = days + ' days ago';}
              if (date < 36) {formattedTime = days + ' day ago';}
              if (date < 24) {formattedTime = date + ' hours ago';}
              if (minutes < 90) {formattedTime = date + ' hour ago';}
              if (minutes < 60) {formattedTime = minutes + ' min ago';}

//          if (json.data.children[i].data.author === '[deleted]') {console.log(json.data.children[i].data); console.log(' an Pos. ' + i)}
              pic.push([
                json.data.children[i].data.url,
                'https://www.reddit.com' + json.data.children[i].data.permalink,
                formattedTime,
                json.data.children[i].data.title,
                shit,
                json.data.children[i].data.subreddit,
                json.data.children[i].data.num_comments,
                json.data.children[i].data.author,
                json.data.children[i].data.url,
              ]);
              // app.imgList.push(json.data.children[i].data.url);
              app.fetched = ' / ' + pic.length;
            } else {
              ciao.push([json.data.children[i].data.url, json.data.children[i].data.title]);
              //console.log('wegwerfen: ' + json.data.children[i].data.url + ' ' + json.data.children[i].data.title)
            }
          }
          //doppelte rauswerfen
          pic = pic.filter(function(item, pos) {
            if (!this.hasOwnProperty(item[0])) {
                return this[item[0]] = true;
            }
            //console.log('aaaaa ' + pic[k][1])
            return false;
          }, {});
          //videos raus wenn abgewählt
          if (!app.checked) {
            pic = pic.filter( element => !~element[0].indexOf('gif') && !~element[0].indexOf('gfycat') && !~element[0].indexOf('mp4') );
          };
          app.fetched = ' / ' + pic.length;
          app.sort();
          titleLink = 3;
          counter++;
          if (counter === j-1) {
            // wenn auf den ersten 3 Pos. Alben oder Flickr sind, rauskicken
            if (pic[2][0].indexOf('/a/') > 0 || pic[2][0].indexOf('flic') > 0) {
              console.log('kick ' + pic[2][0])
              pic.splice(2,1);
            }
            if (pic[1][0].indexOf('/a/') > 0 || pic[1][0].indexOf('flic') > 0) {
              console.log('kick ' + pic[1][0])
              pic.splice(1,1);
            }
            if (pic[0][0].indexOf('/a/') > 0 || pic[0][0].indexOf('flic') > 0) {
              console.log('kick ' + pic[0][0])
              pic.splice(0,1);
            }
            if (pic[0][0].indexOf('.gifv') != -1) {pic[0][8] = 'video';pic[0][0] = pic[0][0].replace("gifv", "mp4")}
            else if (pic[0][0].indexOf('.mp4') != -1) {pic[0][8] = 'video'}
            if (pic[1][0].indexOf('.gifv') != -1) {pic[1][8] = 'video';pic[1][0] = pic[1][0].replace("gifv", "mp4")}
            else if (pic[1][0].indexOf('.mp4') != -1) {pic[1][8] = 'video'}

            if (app.picked === 'redditSFW') {app.transmode = 'out-in'};
            for (var ee = 0; ee < pic.length; ee++) {
              app.imgList[ee] = pic[ee][0];
            }
            // app.imgList.push(pic[0][0]);
            // app.imgList.push(pic[1][0]);
            // pic2 = JSON.parse(JSON.stringify(pic));
            // console.log(pic2);
            app.nextpic();
            //console.log('fäddich!')
          };
        }).catch(function(err) {
          counter++;
          console.log(err);
          app.err = 'error: ' + err.message;
        });
      }
    },

    toggleSize: function () {
      app.truesize = !app.truesize;
      app.hehe = 'truesize ' + app.truesize + ', maximize ' + app.full;
    },

    toggleFS: function () {
      if (document.webkitIsFullScreen) {
        app.showconf = true;
        chicken3 = false;
        app.chicken3 = false;
        document.webkitExitFullscreen();
      } else {
        app.showconf = false;
        if (app.picked === 'reddit' || app.picked === 'redditSFW' || app.picked === 'tumblr') {
          chicken3 = true;
          app.chicken3 = true;
        }
        document.documentElement.webkitRequestFullscreen();
        if (typeof video != 'undefined') {console.log('ig');app.headBot = video.offsetTop + video.offsetHeight;}
        else if ((window.screen.orientation.type === 'portrait-primary' && document.webkitIsFullScreen) && (imgDiv.offsetHeight - headpos) > 78) {
          app.headBot = currentOne.offsetTop + currentOne.offsetHeight;
          app.headTop = '';
        } else {
          app.headBot = '';
          app.headTop = '';
        }
      }
    },

    nextpic: function () {
      //console.log('chicken: ' + chicken)
      chicken2 = true;
      app.chicken2 = chicken2;
      app.chicken4 = true;
      app.imageSrcA = '';
      app.mic = '';
      //ratio = 0;
      app.showComms = false;
      app.ilSrc = [];
      app.il = false;
      app.hihi = 0;
      app.err = 0;
      if (app.picked === 'tumblr') {
        if (pic[k+2].length === 7) {pic[k+2][7] = 'video'; console.log('k+2 ist video!')}
        if (pic[k][7] === 'video') {app.vid=true; console.log('tumblr video!')}
        else {
          app.vid=false;
          if (pic[k][8].length > 0) {
            console.log(pic[k][8]);
            app.title = app.title + ' (' + pic[k][8].length + ')';
            for (var ee = 0; ee < pic[k][8].length; ee++) {
              app.title = app.title + ' ' + pic[k][8][ee];
            }
          }
        }
        if (nextBlob != '' && k != 0) {
          app.imageSrc = nextBlob;
        } else {
          app.imageSrc = pic[k][0];
        };

        app.postlink = pic[k][2];
        if (pic[k][5] != '') {app.title = pic[k][5]} else {if (!chicken3) {app.title = pic[k][1]} else {app.title = ''}};
        app.created = pic[k][3] + ' at';
        if (pic[k][6] > 1) {app.imgNo = ' (' + pic[k][6] + ')'} else {app.imgNo = ''};
        aa = [];
        qq = 0;
        if (pic[k][7].length > 1) {
          pic[k][10] = pic[k][7].length;
          pic[k][11] = pic[k][7];
          imgNo = pic[k][10];
          app.aaPos = qq+1 + ' / ' + imgNo;
          app.imgListA = pic[k][11];
        }
        app.loaded = k+1;
        if (pic[k][3].indexOf('day') != -1) {app.bh24 = true} else {app.bh24 = false}
      } else if (app.picked === 'pint') {
        if (pic[k][0].indexOf('.mp4') != -1) {app.vid=true}
        else {app.vid=false};
        if (nextBlob != '' && k != 0) {
          app.imageSrc = nextBlob;
        } else {
          app.imageSrc = pic[k][0];
        };

        app.postlink = pic[k][2];
        if (pic[k][5] != '') {app.title = pic[k][5]} else {app.title = pic[k][1]};
        app.created = pic[k][3] + ' at ' + pic[k][1];
        if (pic[k][6] > 1) {app.imgNo = ' (' + pic[k][6] + ')'} else {app.imgNo = ''};
        app.loaded = k+1;
        if (pic[k][3].indexOf('day') != -1) {app.bh24 = true} else {app.bh24 = false}
      } else { // reddit, insta, 500px, flickr
        app.vid = false;
        if (typeof pic[k][9] != 'undefined') {app.vid=false; app.albums()}
        //else if (pic[k][9].indexOf('imgur.com/a/') > 0) {app.vid=false; app.albums()}
        else if (pic[k][0].indexOf('tumblr.com/post') > 0) {app.vid=false; app.tumblr()}
        //else if (pic[k][0].indexOf('instagram') > 0) {app.vid=false; app.ig()}
        if (k < pic.length-2 && pic[k+2][0].indexOf('.gifv') != -1) {pic[k+2][8] = 'video';pic[k+2][0] = pic[k+2][0].replace("gifv", "mp4");console.log("mp4: " + pic[k+2][0]);}
        else if (k < pic.length-2 && pic[k+2][0].indexOf('.mp4') != -1) {pic[k+2][8] = 'video'}
        if (k < pic.length-3 && pic[k+3][0].indexOf('imgur.com/a/') > 0) {jump = 3; app.albumsnext()}
        else if (k < pic.length-3 && pic[k+3][0].indexOf('.flickr.com') > 0) {app.flickrnext()}
        else if (k < pic.length-3 && pic[k+3][0].indexOf('flic.kr') > 0) {app.flickrnext()}
        else if (k < pic.length-3 && pic[k+3][0].indexOf('500px') > 0) {app.s500pxnext()}
        if (k < pic.length-2 && pic[k+2][0].indexOf('imgur.com/a/') > 0) {jump = 2; app.albumsnext()}
        if (app.checked && k < pic.length && (pic[k][0].indexOf('www.gfycat') > 0 || pic[k][0].indexOf('/gfycat') > 0)) {app.gfycat()}
        else if (app.checked && k < pic.length-1 && (pic[k+1][0].indexOf('www.gfycat') > 0 || pic[k+1][0].indexOf('/gfycat') > 0)) {app.gfycat()}
        else if (app.checked && k < pic.length-2 && (pic[k+2][0].indexOf('www.gfycat') > 0 || pic[k+2][0].indexOf('/gfycat') > 0)) {app.gfycat()}
        if (pic[k][8] === 'video') {app.vid = true; console.log('video!')};
        //console.log('app.vid: ' + app.vid);
        // if (nextBlob != '' && k != 0) {
        //   app.imageSrc = nextBlob;
        // } else {
        //   app.imageSrc = pic[k][0];
        // };

        app.postlink = pic[k][1];
        var susu = pic[k][3].replace(/ /g, '');
        app.iglink = 'https://www.instagram.com/explore/tags/' + susu;
        app.userlink = 'https://www.reddit.com/user/' + pic[k][7];
        app.ylink = 'https://yandex.com/images/search?source=collections&rpt=imageview&url=' + pic[k][8];
        app.glink = 'https://www.google.com/searchbyimage?&image_url=' + pic[k][8];
        // console.log(app.iglink);
        if (app.picked === 'insta' || app.picked === '500px' || app.picked === 'flickr') {
          app.created = pic[k][2] + ' by ' + pic[k][3];
          if (pic[k][5] != '') {app.title = pic[k][5]} else {app.title = pic[k][3]};
          if (pic[k][8]) {pic[k][0] = pic[k][8]}
          if (pic[k][2].indexOf('day') != -1) {app.bh24 = true} else {app.bh24 = false}
        } else { //reddit
          app.created = pic[k][2] + ' in /r/' + pic[k][5];
          if (pic[k][3].indexOf('&amp;') != -1) {pic[k][3] = pic[k][3].replace(/&amp;/g, "&")};
          if (pic[k][3].indexOf('&lt;') != -1) {pic[k][3] = pic[k][3].replace(/&lt;/g, "<")};
          if (pic[k][3].indexOf('&gt;') != -1) {pic[k][3] = pic[k][3].replace(/&gt;/g, ">")};
          if (pic[k][6] > 0) {app.title = pic[k][3] + ' (' + pic[k][6] + ')'} else {app.title = pic[k][3]};
          // console.log('muuuuh')
          console.log(pic[k][2]);
          if (pic[k][2].indexOf('day') === 2) {app.bh24 = true} else {app.bh24 = false}
        }
        //console.log(pic[k]);
        if (typeof pic[k][9] != 'undefined') {
          app.imageSrcA = '';
          app.imgNo = ' (' + imgNo + ')';
          app.imgListA = pic[k][11];
          //console.log(app.imgListA);
        } else {
          app.imageSrcA = '';
          app.imgNo = '';
        };
        if (imgNo != '') {app.mic = ''};
        app.loaded = k+1;
      };
      if (app.vid) {
        console.log('video: ' + app.vid)
        document.documentElement.style.setProperty('--min-w', '100vw')
        app.headBot = '';
        app.headTop = '';
        // document.documentElement.style.setProperty('--head-pos', (imgDiv.offsetHeight - headline.offsetHeight - 27) + 'px')
      } else {
        // console.log('zoompic[k][15]: ' + pic[k][15])
        if (pic[k][8] != 'video') {
          console.log(k)
          console.log(pic[k][8])
          console.log(pic[k+1][8])
          // var element99 = document.getElementById("currentOne");
          // element99.classList.add("pop");
        }
        if (pic[k][15] === 'zoompw' || pic[k][15] === 'zoomvw') {
          console.log('zoom w');
          document.documentElement.style.setProperty('--min-w', '100vw')
          document.documentElement.style.setProperty('--min-h', '0vh')
        } else if (pic[k][15] === 'zoomph' || pic[k][15] === 'zoomvh') {
          console.log('zoom h');
          document.documentElement.style.setProperty('--min-w', '0vw')
          document.documentElement.style.setProperty('--min-h', '100vh')
        } else {
          document.documentElement.style.setProperty('--min-w', '0vw')
          document.documentElement.style.setProperty('--min-h', '0vh')
        }
      }
      // console.log(typeof nextOne);
      if (typeof nextOne !== 'undefined' && !app.vid && document.webkitIsFullScreen && mobile) {
        console.log('offsetTop: ' + nextOne.offsetTop)
        console.log('offsetLeft: ' + nextOne.offsetLeft)
        // var element99 = document.getElementById("currentOne");
        // element99.classList.add("pop");
        app.lumpi = false;
        gimme = false;
        document.documentElement.style.setProperty('--z-indx', '10')
        document.documentElement.style.setProperty('--max-w', '100vw')
        document.documentElement.style.setProperty('--max-h', '100vh')
        document.documentElement.style.setProperty('--move-left', '0')
        if (app.checkedZ && nextOne.offsetTop < 50 && nextOne.offsetTop > 0) {
          var okok = (nextOne.naturalHeight / imgDiv.offsetHeight);
          okok = nextOne.naturalWidth / okok;
          okok = (okok - nextOne.width) / 2;
          okok = -okok + "px";
          app.lumpi = true;
          gimme = true;
          document.documentElement.style.setProperty('--max-w', '200vw')
          document.documentElement.style.setProperty('--move-left', okok)
          // nextOne.style.left = okok;
        } else if (nextOne.offsetTop < 30 && nextOne.offsetTop > 0) {
          gimme = true;
          document.documentElement.style.setProperty('--max-w', '200vw')
        } else if (nextOne.offsetLeft < 20 && nextOne.offsetLeft > 0) {
          gimme = true;
          document.documentElement.style.setProperty('--max-h', '200vh')
        } else {
          document.documentElement.style.setProperty('--max-w', '100vw')
          document.documentElement.style.setProperty('--max-h', '100vh')
        }
        var headpos = nextOne.offsetTop + nextOne.offsetHeight;
        console.log(k + ' bottom: ' + (headpos) + ' imgDiv offsetheight: ' + imgDiv.offsetHeight)
        if ((window.screen.orientation.type === 'portrait-primary' && document.webkitIsFullScreen) && (imgDiv.offsetHeight - headpos) > 56) {
          app.headBot = headpos;
          app.headTop = '';
          // document.documentElement.style.setProperty('--head-pos', headpos + 'px')
        } else {
          app.headBot = '';
          app.headTop = '';
          // document.documentElement.style.setProperty('--head-pos', (imgDiv.offsetHeight - headline.offsetHeight - 27) + 'px')
        }
      }
      // app.derp = false;
      if (k === pic.length-2) {
        app.bibo = 'The End!';
        app.derp = true;
      } else {
        app.bibo = pic[k][2] + ' ' + pic[k][12];
        app.derp = true;
      }
      if (k === 0) {
        window.addEventListener("orientationchange", function() {
          console.log('orientation change! ' + window.screen.orientation.type)
          document.documentElement.style.setProperty('--max-w', '100vw')
          document.documentElement.style.setProperty('--max-h', '100vh')
          document.documentElement.style.setProperty('--min-w', '0vw')
          document.documentElement.style.setProperty('--min-h', '0vh')
          var afterOrientationChange = function() {
            // if (window.screen.orientation.type === 'landscape-primary') {
            console.log('pic[k][8]: ' + pic[k][8])
            if (window.screen.orientation.type === 'landscape-primary') {
              chicken3 = false;
              app.chicken3 = false;
            } else if (showtitle) {
              chicken3 = true;
              app.chicken3 = true;
            }
              if (pic[k][8] === 'video' || pic[k][7] === 'video') {
                // if (video.offsetWidth < imgDiv.clientWidth && video.offsetHeight < imgDiv.clientHeight) {
                  console.log('zoom video');
                  // if (video.offsetWidth / imgDiv.clientWidth > video.offsetHeight / imgDiv.clientHeight) {
                  //   console.log('zoom vw')
                    document.documentElement.style.setProperty('--min-w', '100vw')
                    app.headBot = '';
                    app.headTop = '';
                    // document.documentElement.style.setProperty('--head-pos', (video.offsetTop + video.offsetHeight - 27) + 'px')
                //     document.documentElement.style.setProperty('--min-h', '0vh')
                //   } else {
                //     console.log('zoom vh')
                //     document.documentElement.style.setProperty('--min-w', '0vw')
                //     document.documentElement.style.setProperty('--min-h', '100vh')
                //   }
                // } else {
                //   console.log('zoom nix')
                //   document.documentElement.style.setProperty('--min-w', '0vw')
                //   document.documentElement.style.setProperty('--min-h', '0vh')
                // }
              } else {
                if (currentOne.naturalWidth < imgDiv.clientWidth && currentOne.naturalHeight < imgDiv.clientHeight) {
                  console.log('zoom pic');
                  if (currentOne.naturalWidth / imgDiv.clientWidth > currentOne.naturalHeight / imgDiv.clientHeight) {
                    document.documentElement.style.setProperty('--min-w', '100vw')
                    document.documentElement.style.setProperty('--min-h', '0vh')
                  } else {
                    document.documentElement.style.setProperty('--min-w', '0vw')
                    document.documentElement.style.setProperty('--min-h', '100vh')
                  }
                } else {
                  document.documentElement.style.setProperty('--min-w', '0vw')
                  document.documentElement.style.setProperty('--min-h', '0vh')
                }
                // document.documentElement.style.setProperty('--head-pos', (currentOne.offsetTop + currentOne.offsetHeight) + 'px')
              }
            // } else {
            //   document.documentElement.style.setProperty('--min-w', '0vw')
            //   document.documentElement.style.setProperty('--min-h', '0vh')
            // }
            window.removeEventListener('resize', afterOrientationChange);
          };
          window.addEventListener('resize', afterOrientationChange);
        }, false);
        app.preload();
      } else {
        document.getElementById('nextOne').style.visibility='visible'
      }
      //console.log('wentback: ' + wentBack);
      if (k <= ath && wentBack) {
        app.chicken4 = false
        app.hihi = 0;
        app.err = 0;
      };
    },

    preload: function () {
      //console.log('waitForNext (preload): ' + waitForNext)
      if (waitForNext) {var vgvg = true}
      if (!app.checked && k < pic.length-2 && (pic[k+2][0].indexOf('mp4') > 0 || pic[k+2][0].indexOf('gif') > 0 || pic[k+2][0].indexOf('gfycat') > 0)) {
        console.log('kill video ' + pic[k+2]);
        nextBlob = '';
        app.hihi = 0;
        app.err = 0;
        app.chicken4 = false;
        pic.splice(k+2,1);
        app.fetched = ' / ' + pic.length;
        app.preload();
      }
      //if (k < pic.length-2 && k >= ath && pic[k+2][0].indexOf('blob') === -1 && (k < 2 || pic[k+1][0].indexOf('blob') != -1)) {
      else if (k < pic.length-2 && pic[k+2][0].indexOf('blob') === -1 && pic[k+2][0].indexOf('www.gfycat') === -1 && pic[k+2][0].indexOf('/gfycat') === -1) {

        //var progressBar = document.getElementById("progress");
        //app.loading = true;

        if (pic[k+1][8] === 'video' && (pic[k+2][0].indexOf('webm') > 0 || pic[k+2][0].indexOf('mp4') > 0 || pic[k+2][0].indexOf('gif') > 0)) {
          console.log('show video!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
          document.getElementById('nextOne').style.visibility='hidden';
          // app.currentImg = app.currentImg + 1;
        }
        console.log('preloading no ' + (k+2) + ': ' + pic[k+2][0]);
        console.log(document.getElementById('nextOne'))
        console.log(Math.round((document.getElementById('nextOne').naturalWidth*document.getElementById('nextOne').naturalHeight)/1024/1024));
        app.hihi = 100;
        app.err = 100;
        app.loadImage(pic[k+2][0], (ratio) => {
          if (ratio == -1) {
            // Ratio not computable. Let's make this bar an undefined one.
            // Remember that since ratio isn't computable, calling this function
            // makes no further sense, so it won't be called again.
            //progressBar.removeAttribute("value");
          } else if (app.checkedP) {
            // We have progress ratio; update the bar
            //progressBar.value = ratio;
            if (!wentBack) {app.hihi = 100-ratio; app.err = 100-ratio}
          }
        })
        .then(imgSrc => {
          // Loading successfuly complete; set the image and probably do other stuff.
          //imgContainer.src = imgSrc;
          //img.src = pic[k+1][0];
          //console.log('fertig ' + pic[k+2][0]);
          document.getElementById('nextOne').style.visibility='visible';
          if (k === 0) {
            if (pic[0][8] === 'video') {
              var eee = (window.innerWidth - document.getElementById('video').width) / 2;
            } else {
              var eee = (window.innerWidth - document.getElementById('currentOne').width) / 2;
            }
            // console.log(document.getElementById('currentOne').width)
            // currentOne.style.paddingLeft = eee + 'px';
            // currentOne.style.paddingRight = eee + 'px';
          }
          app.chicken4 = false;
          if (gotoNext) {
            gotoNext = false;
            app.preload();
          }
          // else if (waitForNext) {
          //   waitForNext = false;
          //   vgvg = false;
          //   console.log(app.imgList[k+1])
          //   if (pic[k+2][0].indexOf('blob') != -1) {app.imgList[k+2] = pic[k+2][0]}
          //   if (app.imgList[k+1].indexOf('blob') != -1) {app.next()}
          // }
          //console.log('nextBlob: ' + nextBlob);
          if (nextBlob != '') {
            //console.log('nextBlob ist nicht leer, daher normal weiter');
            nextBlob = imgSrc;
            app.imageNext = imgSrc;
            console.log(imgSrc.length);
            // if (pic[k+2][0].indexOf('imgur.com/a/') === -1 && pic[k+2][0].indexOf('gfycat') === -1) {pic[k+2][0] = imgSrc};
            if (pic[k+2][0].indexOf('imgur.com/a/') === -1) {pic[k+2][0] = imgSrc};
          } else {
            console.log('nextBlob leer, daher kein preloading');
            app.imageNext = pic[k+2][0];
          };
          if (k > 0 || (k === 0 && pic[1][8] === 'video')) {app.next()}
          // app.next();
        }, xhr => {
          // console.log(xhr);
          // An error occured. We have the XHR object to see what happened.
          console.log('xhr error, killed ' + pic[k+2]);
          nextBlob = '';
          app.hihi = 0;
          app.err = 0;
          app.chicken4 = false;
          pic.splice(k+2,1);
          //imgList.splice(k+1,1);
          app.fetched = ' / ' + pic.length;
          app.preload();
        });
      }
      // if (vgvg) {
      //   vgvg = false;
      //   console.log('vgvg')
      //   app.next();
      // }
    },

    jumpto: function (i) {
      k = i;
      app.currentImg = k;
      app.preload();
      app.next();
    },

    gfycat: function () {
      if (pic[k][0].indexOf('gfycat') != -1) {
        var pieces = pic[k][0].split("/");
        var pieces2 = pieces[pieces.length-1].split("-");
        //console.log('pieces2: ' + pieces2);
        var apiURL = "https://api.gfycat.com/v1/gfycats/" + pieces2[0];
        //console.log(pic[k][0] + " apiurl: " + apiURL);
        fetch(apiURL).then(function(response) {
          return response.json();
        }).then(function(json) {
          console.log(json.gfyItem.webmUrl);
          //app.video=true;
          app.vid = true;
          pic[k][0] = app.imgList[k] = json.gfyItem.webmUrl;
          pic[k][8] = 'video';
          //app.imageSrc = json.gfyItem.webmUrl;
        });
        //console.log("gfyurl: " + pic[k][0]);
      }
      if (pic[k+1][0].indexOf('gfycat') != -1) {
        var pieces = pic[k+1][0].split("/");
        var pieces2 = pieces[pieces.length-1].split("-");
        //console.log('pieces2: ' + pieces2);
        var apiURL = "https://api.gfycat.com/v1/gfycats/" + pieces2[0];
        //console.log(pic[k][0] + " apiurl: " + apiURL);
        fetch(apiURL).then(function(response) {
          return response.json();
        }).then(function(json) {
          console.log(json.gfyItem.webmUrl);
          //app.video=true;
          pic[k+1][0] = app.imgList[k+1] = json.gfyItem.webmUrl;
          pic[k+1][8] = 'video';
          //app.imageSrc = json.gfyItem.webmUrl;
        });
        //console.log("gfyurl: " + pic[k][0]);
      }
      if (pic[k+2][0].indexOf('gfycat') != -1) {
        var pieces = pic[k+2][0].split("/");
        var pieces2 = pieces[pieces.length-1].split("-");
        //console.log('pieces2: ' + pieces2);
        var apiURL = "https://api.gfycat.com/v1/gfycats/" + pieces2[0];
        //console.log(pic[k][0] + " apiurl: " + apiURL);
        fetch(apiURL).then(function(response) {
          return response.json();
        }).then(function(json) {
          console.log(json.gfyItem.webmUrl);
          //app.video=true;
          pic[k+2][0] = app.imgList[k+2] = json.gfyItem.webmUrl;
          pic[k+2][8] = 'video';
          //app.imageSrc = json.gfyItem.webmUrl;
        });
        //console.log("gfyurl: " + pic[k][0]);
      }
    },

    touchnextX: function (e) {
      // console.log(e.target.id);
      if (app.showComms) {igbtn.hidden = true; userbtn.hidden = true; gbtn.hidden = true; ybtn.hidden = true}
      if (app.hihi > 0) {waitForNext = true} else {waitForNext = false}
      if (e.target.id === "nextOne") {app.last()}
      else if (!waitForNext && !plop && e.maxPointers === 1) {
        // || e.target.id === "commsID" || e.target.id === "example-1"
        if (e.target.id === "currentOne" || e.target.id === "video" || e.target.id === "container" || e.target.id === "imgDiv" || e.target.id === "albumDiv") {
          // app.showComms = false;
          // app.ilSrc = [];
          // app.il = false;
          //var nextOne = document.getElementById('nextOne')
          var percentage = 100 / 1 * e.deltaX / window.innerWidth; // NEW: our % calc
          // lastOne.style.transition = '';
          imgDiv.style.transition = '';
          // nextOne.style.transition = '';
          // var percentage2 = (percentage-200)/1.01;
          // var percentage3 = (percentage-100)*1.016;
          var percentage2 = (percentage-201.2);
          var percentage3 = (percentage-101.8);
          // currentOne.classList.remove("t1");
          // imgDiv.classList.remove("t1");
          // imgDiv.classList.remove("t2");
          // lastOne.style.transform = 'translateX(' + percentage2 + '%)';
          // lastOne.style.transform = 'rotate3d(0, 1, 0, ' + percentage + 'deg)';
          // currentOne.style.transform = 'translateX(' + percentage + '%)';
          var degree = percentage*3;
          // console.log(degree)
          imgDiv.style.transform = 'rotateY(' + degree + 'deg)';
          if (pic[k+1][8] === 'video') {
            // console.log('show video!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
            document.getElementById('nextOne').style.visibility='hidden';
            // app.currentImg = app.currentImg + 1;
          } else {
            // console.log(percentage)
            // document.documentElement.style.setProperty('--min-h', '0vh')
            // document.documentElement.style.setProperty('--max-h', '100vh')
            // document.documentElement.style.setProperty('--max-w', '100vw')
            // document.documentElement.style.setProperty('--move-left', '0')
            if (percentage < -30) {
              nextOne.src = app.imgList[app.currentImg+1]
            }
            else if (percentage > 30) {
              nextOne.src = app.imgList[app.currentImg-1]
            }
            else {nextOne.src = app.imgList[app.currentImg]}
          }
          if (app.currentImg === 0) {
            var percentage4 = (percentage-1.7);
            // nextOne.style.transform = 'translateX(' + percentage4 + '%)';
            // nextOne.style.transform = 'rotate3d(0, 1, 0, ' + percentage + 'deg)';
          } else {
            // nextOne.style.transform = 'translateX(' + percentage3 + '%)';
            // nextOne.style.transform = 'rotate3d(0, 1, 0, ' + percentage + 'deg)';
            // var eee = (window.innerWidth - document.getElementById('currentOne').width) / 2;
            // currentOne.style.paddingLeft = eee + 'px';
            // currentOne.style.paddingRight = eee + 'px';
            // var eee2 = (window.innerWidth - document.getElementById('lastOne').width) / 2;
            // lastOne.style.paddingLeft = eee2 + 'px';
            // lastOne.style.paddingRight = eee2 + 'px';
            // var eee3 = (window.innerWidth - document.getElementById('nextOne').width) / 2;
            // nextOne.style.paddingLeft = eee3 + 'px';
            // nextOne.style.paddingRight = eee3 + 'px';
          }
          // console.log(percentage)
          if(e.isFinal) { // NEW: this only runs on event end
            // console.log(app.imgList[app.currentImg-1]);
            // document.documentElement.style.setProperty('--max-w', '100vw')
            // document.documentElement.style.setProperty('--max-h', '100vh')
            // console.log(e.velocityX)
            console.log('AAAAAAHHH ' + e.additionalEvent)
            if (e.additionalEvent === 'panright' && percentage < 0) {
              console.log('snap back')
              imgDiv.style.transform = 'rotateY(0deg)';
              imgDiv.style.transition = 'all 0.2s linear';
            } else {
              app.jump(percentage);
            }
            // let elementx = document.getElementById("imgDiv");
          }
        }
      }
    },

    jump: function (percentage) {
      console.log('hehe ' + percentage);
      // console.log(currentOne.src + ' currentOne ' + currentOne.naturalWidth)
      // console.log(nextOne.src + ' nextOne ' + nextOne.naturalWidth)
      if (pic[k][8] != 'video') {
        var element99 = document.getElementById("currentOne");
        element99.classList.remove("pop");
      }
      plop = true;
      imgDiv.addEventListener("transitionend", function(event) {
        // console.log('transitionend');
        if (showtitle && document.webkitIsFullScreen) {
          chicken3 = true;
          app.chicken3 = true;
        }
        document.documentElement.style.setProperty('--min-h', '0vh')
        document.documentElement.style.setProperty('--max-h', '100vh')
        document.documentElement.style.setProperty('--max-w', '100vw')
        document.documentElement.style.setProperty('--move-left', '0')
        plop = false;
        // console.log('k: ' + k)
        // console.log(app.title);
        // console.log(pic[k+1][3]);
        // app.title = pic[k+1][3];
        if (pic[k+1][8] === 'video') {
          console.log(nextOne.offsetHeight)
          if (nextOne.offsetWidth < imgDiv.clientWidth && nextOne.offsetHeight < imgDiv.clientHeight) {
            console.log('zoom video');
            if (nextOne.offsetWidth / imgDiv.clientWidth > nextOne.offsetHeight / imgDiv.clientHeight) {
              pic[k+1][15] = 'zoomvw';
            } else {
              pic[k+1][15] = 'zoomvh';
            }
          } else {
            pic[k+1][15] = '';
          }
        } else {
          if (nextOne.naturalWidth < imgDiv.clientWidth && nextOne.naturalHeight < imgDiv.clientHeight) {
            console.log('zoom pic');
            if (nextOne.naturalWidth / imgDiv.clientWidth > nextOne.naturalHeight / imgDiv.clientHeight) {
              pic[k+1][15] = 'zoompw';
            } else {
              pic[k+1][15] = 'zoomph';
            }
          } else {
            pic[k+1][15] = '';
          }
        }
        // console.log('percentage ' + percentage)
        if(percentage <= -1) {
          if (k < pic.length-1) {
            if (pic[k+2][0].indexOf('blob') === -1) {
              // console.log('preload!');
              app.preload();
              // app.next();
            }
            else {app.next()}
          }
          else {app.next()}
        } else if(percentage >= 1 && k > 0) {
          app.last();
        }
      }, false);
      // if (e.velocityX < -10.5) {
      //   var qqq = (percentage+100)/100 * window.innerWidth;
      //   console.log('qqq: ' + qqq)
      //   document.documentElement.style.setProperty('--move-out', -qqq + 'px')
      //   document.documentElement.style.setProperty('--move-in', qqq + 'px')
      //   var eee = (window.innerWidth - document.getElementById('nextOne').width) / 2;
      //   document.documentElement.style.setProperty('--mar-gin', eee + 'px')
      //   document.documentElement.style.setProperty('--move-ya', '400ms')
      //   app.next()
      // } else if (e.velocityX > 10.5 && k > 0) {
      //   var qqq = (100-percentage)/100 * window.innerWidth;
      //   console.log('qqq: ' + qqq)
      //   document.documentElement.style.setProperty('--move-out', qqq + 'px')
      //   document.documentElement.style.setProperty('--move-in', -qqq + 'px')
      //   var eee = (window.innerWidth - document.getElementById('lastOne').width) / 2;
      //   document.documentElement.style.setProperty('--mar-gin', eee + 'px')
      //   document.documentElement.style.setProperty('--move-ya', '400ms')
      //   app.last()
      // } else {
        if(percentage <= -1) {
          // app.nextSwitch = true;
          var qqq = -180;
          // console.log('degree: ' + degree)
          // console.log('qqq: ' + qqq)
          nextOne.src = app.imgList[app.currentImg+1]
          imgDiv.style.transform = '';
          // currentOne.classList.toggle('t1');
          imgDiv.classList.toggle('t1');
          // if (currentOne.width < imgDiv.clientWidth) {currentOne.width = imgDiv.clientWidth; console.log('iiiiiihh ' + currentOne.width)}
          // if (nextOne.width < imgDiv.clientWidth) {nextOne.width = imgDiv.clientWidth; console.log('iiiiiihh ' + nextOne.width)}
          // document.documentElement.style.setProperty('--move-out', -qqq + 'px')
          // document.documentElement.style.setProperty('--move-in', qqq + 'deg')
          // document.getElementById('currentOne').style.perspectiveOrigin="50% 50%"
          // var eee = (window.innerWidth - document.getElementById('nextOne').width) / 2;
          // document.documentElement.style.setProperty('--mar-gin', eee + 'px')
          // eee = e.velocityX + 0.8;
          // document.documentElement.style.setProperty('--move-ya', eee + 's')
          // currentOne.style.transform = 'translateX(' + qqq + '%)';
          // currentOne.style.transition = 'all .5s ease';
          // nextOne.style.transform = 'translateX(' + qqq + '%)';
          // nextOne.style.transition = 'all .5s ease';
          // app.next()
        }
        else if(percentage >= 1 && k > 0) {
          // app.nextSwitch = false;
          //lastOne.style.transform = 'translateX(100%)';
          // var qqq = (100-percentage)/100 * window.innerWidth;
          // console.log('qqq222: ' + qqq)
          nextOne.src = app.imgList[app.currentImg-1]
          imgDiv.style.transform = '';
          // currentOne.classList.toggle('t1');
          imgDiv.classList.toggle('t2');
          // console.log('lastOne: ' + document.getElementById('lastOne').src)
          // document.getElementById('lastOne').invisible = true;
          // document.documentElement.style.setProperty('--move-out', qqq + 'px')
          // document.documentElement.style.setProperty('--move-in', -qqq + 'px')
          // var eee = (window.innerWidth - document.getElementById('lastOne').width) / 2;
          // document.documentElement.style.setProperty('--mar-gin', eee + 'px')
          // eee = 0.8 - e.velocityX;
          // document.documentElement.style.setProperty('--move-ya', eee + 's')
          // currentOne.style.transform = 'translateX(' + -qqq + '%)';
          // currentOne.style.transition = 'all .5s ease';
          // nextOne.style.transform = 'translateX(' + -qqq + '%)';
          // nextOne.style.transition = 'all .5s ease';
          // app.currentImg = app.currentImg - 1;
          // k--;
          // app.last()
        }
        else {
          console.log('ccccccc')
          imgDiv.style.transform = 'rotateY(0deg)';
          imgDiv.style.transition = 'all 0.2s linear';
          // if (app.currentImg > 0) {
          //   lastOne.style.transform = 'translateX(-201.2%)';
          //   nextOne.style.transform = 'translateX(-101.8%)';
          //   currentOne.style.transform = 'translateX(0%)';
          //   lastOne.style.transition = 'all .5s ease';
          //   nextOne.style.transition = 'all .5s ease';
          //   currentOne.style.transition = 'all .5s ease';
          // } else {
          //   currentOne.style.transform = 'translateX(0%)';
          //   currentOne.style.transition = 'all .5s ease';
          //   nextOne.style.transform = 'translateX(-1.7%)';
          //   nextOne.style.transition = 'all .5s ease';
          // }
        }
      // }
    },

    touchAlbum: function (e) {
       // console.log(lastOne);
      if (!waitForNext && lastOne && typeof pic[k][9] != 'undefined') {
        if (e.target.id === "currentOne" || e.target.id === "container" || e.target.id === "imgDiv" || e.target.id === "albumDiv") {
          app.chicken = 2;
          app.showComms = false;
          app.ilSrc = [];
          app.il = false;
          var percentage = 100 / 1 * e.deltaY / window.innerHeight; // NEW: our % calc
          lastOneA.style.transition = '';
          currentOne.style.transition = '';
          nextOneA.style.transition = '';
          var percentage2 = (percentage-201.2);
          // var percentage3 = (percentage+101.8);
          lastOneA.style.transform = 'translateY(' + percentage2 + '%)'; // NEW: our CSS transform
          currentOne.style.transform = 'translateY(' + percentage + '%)'; // NEW: our CSS transform
          nextOneA.style.transform = 'translateY(' + percentage + '%)'; // NEW: our CSS transform
          // var eee = (window.innerWidth - document.getElementById('currentOne').width) / 2;
          // currentOne.style.paddingLeft = eee + 'px';
          // currentOne.style.paddingRight = eee + 'px';
          // var eee2 = (window.innerWidth - document.getElementById('lastOne').width) / 2;
          // lastOne.style.paddingLeft = eee2 + 'px';
          // lastOne.style.paddingRight = eee2 + 'px';
          // var eee3 = (window.innerWidth - document.getElementById('nextOne').width) / 2;
          // nextOne.style.paddingLeft = eee3 + 'px';
          // nextOne.style.paddingRight = eee3 + 'px';

          // console.log(percentage)
          if(e.isFinal) {
            console.log(e.velocityX)
          //   if (e.velocityX < -0.5) {
          //     var qqq = (percentage+100)/100 * window.innerWidth;
          //     console.log('qqq: ' + qqq)
          //     document.documentElement.style.setProperty('--move-out', -qqq + 'px')
          //     document.documentElement.style.setProperty('--move-in', qqq + 'px')
          //     var eee = (window.innerWidth - document.getElementById('nextOne').width) / 2;
          //     document.documentElement.style.setProperty('--mar-gin', eee + 'px')
          //     document.documentElement.style.setProperty('--move-ya', '400ms')
          //     app.next()
          //   } else if (e.velocityX > 0.5 && k > 0) {
          //     var qqq = (100-percentage)/100 * window.innerWidth;
          //     console.log('qqq: ' + qqq)
          //     document.documentElement.style.setProperty('--move-out', qqq + 'px')
          //     document.documentElement.style.setProperty('--move-in', -qqq + 'px')
          //     var eee = (window.innerWidth - document.getElementById('lastOne').width) / 2;
          //     document.documentElement.style.setProperty('--mar-gin', eee + 'px')
          //     document.documentElement.style.setProperty('--move-ya', '400ms')
          //     app.last()
          //   } else {
              if(percentage < -10) {
                var qqq = (percentage+100)/100 * window.innerHeight;
                console.log('qqqyep: ' + qqq)
                document.documentElement.style.setProperty('--move-out', -qqq + 'px')
                document.documentElement.style.setProperty('--move-in', qqq + 'px')
                // var eee = (window.innerWidth - document.getElementById('nextOne').width) / 2;
                // document.documentElement.style.setProperty('--mar-gin', eee + 'px')
                // eee = e.velocityX + 0.8;
                // document.documentElement.style.setProperty('--move-ya', eee + 's')
                // app.down()
              }
              else if(percentage > 10 && k > 0) {
                var qqq = (100-percentage)/100 * window.innerHeight;
                console.log('qqq222: ' + qqq)
                document.documentElement.style.setProperty('--move-out', qqq + 'px')
                document.documentElement.style.setProperty('--move-in', -qqq + 'px')
                // var eee = (window.innerWidth - document.getElementById('lastOne').width) / 2;
                // document.documentElement.style.setProperty('--mar-gin', eee + 'px')
                // eee = 0.8 - e.velocityX;
                // document.documentElement.style.setProperty('--move-ya', eee + 's')
                app.up()
              }
              else {
                console.log('ccccccc')
                if (app.currentImg > 0) {
                  lastOne.style.transform = 'translateY(-101.2%)';
                  nextOne.style.transform = 'translateY(-1.8%)';
                  currentOne.style.transform = 'translateY(0%)';
                  lastOne.style.transition = 'all .5s ease';
                  nextOne.style.transition = 'all .5s ease';
                  currentOne.style.transition = 'all .5s ease';
                } else {
                  currentOne.style.transform = 'translateY(0%)';
                  currentOne.style.transition = 'all .5s ease';
                  nextOne.style.transform = 'translateY(-1.7%)';
                  nextOne.style.transition = 'all .5s ease';
                }
              }
          //   }
          }
        }
      }
    },

    next: function (event) {
       // console.log('k: ' + k)
       // console.log(pic[k+1][0] + ' is video? ' + pic[k+1][8])
       // if (!waitForNext && pic[k+1][8] === 'video' && pic[k+1][0].indexOf('http://gfy') === -1 && pic[k+1][0].indexOf('www.gfy') === -1) {
       //   console.log('baaam! ' + k);
       //   app.vid = true;
       // }
       // console.log('app.imgList[app.currentImg+1]: ' + app.imgList[app.currentImg+1])
       //console.log('imgList: ' + app.imgList.length)
      // if ((app.chicken4 && k != pic.length-1) || (k > 1 && pic[k+1][0].indexOf('blob') === -1)) {
      if ((app.chicken4 && k != pic.length-1) || (k > 1 && app.imgList[app.currentImg+1] === undefined)) {
        setTimeout(app.next, 400);
        //if (app.imgList[app.currentImg+1] === undefined) {app.imgList[app.currentImg+1] = pic[k+1][0]}
        waitForNext = true;
        console.log('app.chicken4: ' + app.chicken4)
        console.log("wait for next pic " + (k + 2) + ': ' + pic[k+2][0]);
      } else {
        console.log("finished loading next pic " + (k + 2) + ': ' + pic[k+2][0]);
        if (!wentBack) {app.hihi = 100; app.err = 100};
        app.chicken = 0;
        app.show1 = !app.show1;
        app.hoho = '';
        app.albumImageNext = '';
        app.currentImgA = 0;
        waitForNext = false;
        app.loadski = false;
        qq = 0;
        aa = [];
        imgNo = '';
        //console.log('k: ' + k)
        //console.log('pic.length: ' + pic.length)
        //console.log('ath: ' + ath)
        if (k < pic.length-1) {
          k++;
          if (k > ath) {
            ath = k;
            if (pic[k+1][0].indexOf('blob') != -1) {app.imgList[k+1] = pic[k+1][0]}
            //if (pic[k+1][0].indexOf('blob') != -1) {app.imgList.push(pic[k+1][0])}
          } else {
            console.log('k: ' + k);
            console.log('ath: ' + ath);
          };
        } else {k=0; ath=0};
        app.gonext = true;
        //console.log(app.imgList[app.currentImg] != app.imgList[app.currentImg+1])
        app.currentImg = app.currentImg + 1;
        app.nextpic();
        // if (nextBlob != '' && k != 0) {
        //   app.imageSrc = nextBlob;
        // } else {
        //   app.imageSrc = pic[k][0];
        // };
      }
    },

    last: function (event) {
      waitForNext = false;
      if (app.showComms && (app.picked === 'reddit' || app.picked === 'redditSFW')) {
        app.comments = [];
        app.commentsL = [];
        app.showComms = false;
      } else {
        app.hihi = 0;
        app.err = 0;
        app.chicken = 0;
        app.show1 = !app.show1;
        app.albumImageNext = '';
        app.currentImgA = 0;
        app.ilSrc = [];
        app.il = false;
        if (!wentBack) {dd.shift(); wentBack = true};
        qq = 0;
        aa = [];
        imgNo = '';
        nextBlob = '';
        if (k > 0) {k--} else {k = pic.length-1};
        app.gonext = false;
        app.currentImg = app.currentImg - 1;
        app.nextpic();
        // app.imageSrc = pic[k][0];
      }
    },

    down: function () {
      if (imgNo === '' && document.webkitIsFullScreen && app.showComms && (app.picked === 'reddit' || app.picked === 'redditSFW') && pic[k][6] > 0) {
        app.showComms = !app.showComms;
      } else if (imgNo === '' && container.clientHeight < entries.clientHeight*0.84 && container.clientWidth < entries.clientWidth) {
        app.truesize = false;
        app.full = !app.full;
      } else if (imgNo === '' && app.full) {
        app.truesize = false;
        app.full = !app.full;
      } else if (imgNo === '') {
        app.toggleFS();
      } else {
        app.chicken = 2;
        app.show1 = !app.show1;
        if (qq > 0) {qq--} else {qq = pic[k][10]-1};
        console.log('qq: ' + qq);
        app.imageSrc = pic[k][11][qq];
        currentOne.src = pic[k][11][qq];
        app.aaPos = qq+1 + ' / ' + pic[k][10];
        app.currentImgA = app.currentImgA - 1;
        var headpos = currentOne.offsetTop + currentOne.offsetHeight + 1;
        // console.log(k + ' bottom: ' + (headpos) + ' headline offsetheight: ' + headline.offsetHeight)
        if ((window.screen.orientation.type === 'portrait-primary' && document.webkitIsFullScreen) && (imgDiv.offsetHeight - headpos) > 78) {
          app.headBot = headpos;
          app.headTop = '';
          // document.documentElement.style.setProperty('--head-pos', headpos + 'px')
        } else {
          app.headBot = '';
          app.headTop = '';
          // document.documentElement.style.setProperty('--head-pos', (imgDiv.offsetHeight - headline.offsetHeight - 27) + 'px')
        }
      }
    },

    up: function () {
      if (mobile && !document.webkitIsFullScreen) {
        //app.toggleFS();
      // } else if (imgNo === '' && pic[k][6] < 1 || (!document.webkitIsFullScreen && !muuh)) {
        //app.toggleFS();
      } else
      // if (imgNo === '' && (app.picked === 'reddit' || app.picked === 'redditSFW') && pic[k][6] > 0) {
      if (imgNo === '' && (app.picked === 'reddit' || app.picked === 'redditSFW')) {
        if (!app.showComms && swup) {
          swup = false;
          if (imgDiv.offsetWidth < currentOne.width) {
            var element99 = document.getElementById("currentOne");
            element99.classList.add("pop");
            document.documentElement.style.setProperty('--move-left', '0')
            document.documentElement.style.setProperty('--max-w', '100vw')
            document.documentElement.style.setProperty('--min-h', '0vh')
            document.documentElement.style.setProperty('--max-h', '100vh')
            app.derp = true;
            chicken3 = true;
            app.chicken3 = true;
          } else {
            var okok = (currentOne.naturalHeight / imgDiv.offsetHeight);
            okok = currentOne.naturalWidth / okok;
            okok = (okok - currentOne.width) / 2;
            okok = -okok + "px";
            console.log(okok)
            // if (currentOne.naturalHeight )
            document.documentElement.style.setProperty('--move-left', okok)
            document.documentElement.style.setProperty('--max-w', '400vw')
            document.documentElement.style.setProperty('--min-h', '100vh')
            document.documentElement.style.setProperty('--max-h', '100vh')
            app.derp = false;
            chicken3 = false;
            app.chicken3 = false;
          }
        } else if (!app.showComms && !swup) {
          app.comments = [];
          app.commentsL = [];
          app.ilSrc = [];
          app.commentsToggle()
        } else if (commsID.scrollHeight === commsID.clientHeight) {
          app.showComms = false;
          app.ilSrc = [];
          app.il = false;
        }
      } else if (imgNo != '') {
        muuh = false;
        if (app.chicken5) {
          setTimeout(app.up, 400);
          //waitForNext = true;
          console.log("wait for next pic...");
        } else {
          app.chicken = 3;
          app.show1 = !app.show1;
          app.currentImgA = app.currentImgA + 1;
          if (qq < pic[k][10]-1) {
            qq++;
            console.log('qq: ' + qq);
            app.imageSrc = pic[k][11][qq];
            currentOne.src = pic[k][11][qq];
            var headpos = currentOne.offsetTop + currentOne.offsetHeight + 1;
            // console.log(k + ' bottom: ' + (headpos) + ' headline offsetheight: ' + headline.offsetHeight)
            if ((window.screen.orientation.type === 'portrait-primary' && document.webkitIsFullScreen) && (imgDiv.offsetHeight - headpos) > 78) {
              app.headBot = headpos;
              app.headTop = '';
              // document.documentElement.style.setProperty('--head-pos', headpos + 'px')
            } else {
              app.headBot = '';
              app.headTop = '';
              // document.documentElement.style.setProperty('--head-pos', (imgDiv.offsetHeight - headline.offsetHeight - 27) + 'px')
            }
            if (qq < pic[k][10]-1) {
              app.chicken5 = true
              app.albumImageNext = pic[k][11][qq+1];
              console.log('start')
              app.hihi = 100;
              app.err = 100;
              var imgA = new Image;
              imgA.addEventListener('error', function () {
                app.chicken5 = false;
                app.hihi = 0;
                app.err = 0;
              });
              imgA.addEventListener("load", function () {
                app.chicken5 = false;
                app.hihi = 0;
                app.err = 0;
                console.log('ende')
                var headpos = currentOne.offsetTop + currentOne.offsetHeight + 1;
                // console.log(k + ' bottom: ' + (headpos) + ' headline offsetheight: ' + headline.offsetHeight)
                if ((window.screen.orientation.type === 'portrait-primary' && document.webkitIsFullScreen) && (imgDiv.offsetHeight - headpos) > 78) {
                  app.headBot = headpos;
                  app.headTop = '';
                  // document.documentElement.style.setProperty('--head-pos', headpos + 'px')
                } else {
                  app.headBot = '';
                  app.headTop = '';
                  // document.documentElement.style.setProperty('--head-pos', (imgDiv.offsetHeight - headline.offsetHeight - 27) + 'px')
                }
              });
              imgA.src = pic[k][11][qq+1]
            }
            app.aaPos = qq+1 + ' / ' + pic[k][10];
          } else {
            app.chicken5 = false;
            qq=0;
            app.imageSrc = pic[k][11][qq];
            currentOne.src = pic[k][11][qq];
            app.aaPos = qq+1 + ' / ' + pic[k][10];
            var headpos = currentOne.offsetTop + currentOne.offsetHeight + 1;
            // console.log(k + ' bottom: ' + (headpos) + ' headline offsetheight: ' + headline.offsetHeight)
            if ((window.screen.orientation.type === 'portrait-primary' && document.webkitIsFullScreen) && (imgDiv.offsetHeight - headpos) > 78) {
              app.headBot = headpos;
              app.headTop = '';
              // document.documentElement.style.setProperty('--head-pos', headpos + 'px')
            } else {
              app.headBot = '';
              app.headTop = '';
              // document.documentElement.style.setProperty('--head-pos', (imgDiv.offsetHeight - headline.offsetHeight - 27) + 'px')
            }
          };
        };
      }
    },

    hammer: function (e) {
      // if (e.additionalEvent == 'tap') {console.log('tap'); app.tap(e)}
      // else if (e.additionalEvent == 'tap') {console.log('tap'); app.tap(e)}
      var element = document.getElementById('container')
      // var element = e.target.id;
      // console.log(element)
      var hammertime = new Hammer(element, {});

      hammertime.get('tap').set({ threshold: 5, taps: 1 });
      hammertime.get('pinch').set({ enable: true });
      hammertime.get('pan').set({ threshold: 6 });
      hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

      var fixHammerjsDeltaIssue = undefined;
      var pinchStart = { x: undefined, y: undefined }
      var lastEvent = undefined;

      var originalSize = {
          width: currentOne.clientWidth,
          height: currentOne.clientHeight
      }

      var current = {
          x: 0,
          y: 0,
          z: 1,
          zooming: false,
          width: originalSize.width * 1,
          height: originalSize.height * 1,
      }

      var last = {
          x: current.x,
          y: current.y,
          z: current.z
      }

      function getRelativePosition(element, point, originalSize, scale) {
          var domCoords = getCoords(element);

          var elementX = point.x - domCoords.x;
          var elementY = point.y - domCoords.y;

          var relativeX = elementX / (originalSize.width * scale / 2) - 1;
          var relativeY = elementY / (originalSize.height * scale / 2) - 1;
          return { x: relativeX, y: relativeY }
      }

      function getCoords(elem) { // crossbrowser version
        var box = elem.getBoundingClientRect();

        var body = document.body;
        var docEl = document.documentElement;

        var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

        var clientTop = docEl.clientTop || body.clientTop || 0;
        var clientLeft = docEl.clientLeft || body.clientLeft || 0;

        var top  = box.top +  scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;

        return { x: Math.round(left), y: Math.round(top) };
      }

      function scaleFrom(zoomOrigin, currentScale, newScale) {
          var currentShift = getCoordinateShiftDueToScale(originalSize, currentScale);
          var newShift = getCoordinateShiftDueToScale(originalSize, newScale)

          var zoomDistance = newScale - currentScale

          var shift = {
            x: currentShift.x - newShift.x,
            y: currentShift.y - newShift.y,
          }

          var output = {
              x: zoomOrigin.x * shift.x,
              y: zoomOrigin.y * shift.y,
              z: zoomDistance
          }
          return output
      }

      function getCoordinateShiftDueToScale(size, scale){
        var newWidth = scale * size.width;
          var newHeight = scale * size.height;
        var dx = (newWidth - size.width) / 2
        var dy = (newHeight - size.height) / 2
        return {
          x: dx,
          y: dy
        }
      }

      // hammertime.on('doubletap', function(e) {
      //     var scaleFactor = 1;
      //     if (current.zooming === false) {
      //         current.zooming = true;
      //     } else {
      //         current.zooming = false;
      //         scaleFactor = -scaleFactor;
      //     }
      //
      //     element.style.transition = "0.3s";
      //     setTimeout(function() {
      //         element.style.transition = "none";
      //     }, 300)
      //
      //     var zoomOrigin = getRelativePosition(element, { x: e.center.x, y: e.center.y }, originalSize, current.z);
      //     var d = scaleFrom(zoomOrigin, current.z, current.z + scaleFactor)
      //     current.x += d.x;
      //     current.y += d.y;
      //     current.z += d.z;
      //
      //     last.x = current.x;
      //     last.y = current.y;
      //     last.z = current.z;
      //
      //     update();
      // })

      hammertime.on('tap', function(e) {
        console.log('tap');
        // console.log(e);
        if (currentOne.y === 0 && e.center.y/imgDiv.clientHeight < 0.5) {
          chicken3 = !chicken3;
          app.chicken3 = !app.chicken3;
          app.derp = !app.derp;
        } else
        // currentOne.offsetLeft < -40 &&
        if (!gimme && pic[k][8] != 'video' && (current.z != 1 || currentOne.x < 0)) {
          var element99 = document.getElementById("currentOne");
          element99.classList.add("pop");
          current.x = 0; current.y = 0; current.z = 1;
          document.documentElement.style.setProperty('--min-h', '0vh')
          document.documentElement.style.setProperty('--max-w', '100vw')
          document.documentElement.style.setProperty('--max-h', '100vh')
          document.documentElement.style.setProperty('--move-left', '0')
          if (showtitle) {
            chicken3 = true;
            app.chicken3 = true;
            app.derp = true;
          }
          update();
        } else if (app.showComms && e.target.id != 'example-2' && e.target.id != 'userbtn') {
          app.showComms = false;
          app.ilSrc = [];
          app.il = false;
        } else if (e.target.id != 'userbtn') {app.tap(e)}
      })

      hammertime.on('swipedown', function(e) {
        console.log('swipe down');
        imgDiv.style.transform = '';
        app.down();
      })

      hammertime.on('swipeup', function(e) {
        console.log('swipe up');
        document.documentElement.style.setProperty('--z-indx', '-10')
        imgDiv.style.transform = '';
        if (!app.vid) {swup = true};
        app.up();
      })

      hammertime.on('pan', function(e) {
        // console.log(e);
        // console.log(e.additionalEvent);
        // console.log('lumpi: ' + app.lumpi);
        if (pic[k][8] === 'video') {
          if (e.additionalEvent != 'panup' && e.additionalEvent != 'pandown') {
            app.touchnextX(e);
          }
        } else if (app.showComms || app.lumpi || (current.z <= 1 && currentOne.x >= 0) || currentOne.offsetLeft > 0) {
          if (e.additionalEvent != 'panup' && e.additionalEvent != 'pandown') {
            last, current = {
                x: 0,
                y: 0,
                z: 1
            }
            update();
            app.touchnextX(e);
          }
        } else {
          var element99 = document.getElementById("currentOne");
          element99.classList.remove("pop");
          if (lastEvent !== 'pan') {
              fixHammerjsDeltaIssue = {
                  x: e.deltaX,
                  y: e.deltaY
              }
          }
          // console.log(e.deltaX)
          // console.log(fixHammerjsDeltaIssue.x)

          current.x = last.x + e.deltaX - fixHammerjsDeltaIssue.x;
          current.y = last.y + e.deltaY - fixHammerjsDeltaIssue.y;
          lastEvent = 'pan';
          update();
        }
      })

      hammertime.on('pinch', function(e) {
        // console.log('last.z ' + last.z);
        // console.log('current.z ' + current.z);
        if (current.z === 1) {last.z = 1}
        var d = scaleFrom(pinchZoomOrigin, last.z, last.z * e.scale)
        // console.log(d)
        current.x = d.x + last.x + e.deltaX;
        current.y = d.y + last.y + e.deltaY;
        current.z = d.z + last.z;
        lastEvent = 'pinch';
        update();
      })

      var pinchZoomOrigin = undefined;
      hammertime.on('pinchstart', function(e) {
        var element99 = document.getElementById("currentOne");
        element99.classList.remove("pop");
        if (current.z === 1) {
          originalSize = {
              width: currentOne.clientWidth,
              height: currentOne.clientHeight
          }
          last, current = {
              x: 0,
              y: 0,
              z: 1
          }
          chicken3 = false;
          app.chicken3 = false;
          app.derp = false;
          update();
        }
        pinchStart.x = e.center.x;
        pinchStart.y = e.center.y;
        pinchZoomOrigin = getRelativePosition(element, { x: pinchStart.x, y: pinchStart.y }, originalSize, current.z);
        // console.log(pinchZoomOrigin)
        lastEvent = 'pinchstart';
      })

      hammertime.on('panend', function(e) {
        // console.log(e.additionalEvent);
          last.x = current.x;
          last.y = current.y;
          lastEvent = 'panend';
      })

      hammertime.on('pinchend', function(e) {
        // console.log(e.additionalEvent);
        var element99 = document.getElementById("currentOne");
        element99.classList.add("pop");
        last.x = current.x;
        last.y = current.y;
        last.z = current.z;
        lastEvent = 'pinchend';
      })

      function update() {
        // console.log('current.x ' + current.x)
        // console.log('current.y ' + current.y)
        // console.log('current.z ' + current.z)
        if (typeof currentOne != 'undefined') {
          var picelement = document.getElementById('currentOne')
          // console.log(e)
          // var ele = e.target;
          current.height = originalSize.height * current.z;
          current.width = originalSize.width * current.z;
          picelement.style.transform = "translate3d(" + current.x + "px, " + current.y + "px, 0) scale(" + current.z + ")";
          // picelement.style.transform = "scale(" + current.z + ")";
        }
      }
    },

    tap: function (e) {
      if (app.hihi > 0) {abortnext = true}
      else {
        plop = false;
        // console.log(e.center.y/imgDiv.clientHeight);
        // console.log(e);
        if (!document.webkitIsFullScreen && e.target.id === 'currentOne') {
          if (mobile) {
            // if (k === 0) {console.log('huihui'); app.pinch(e)}
            app.toggleFS()}
        }
        // if (document.webkitIsFullScreen && e.target.id === "imgDiv" && app.vid) {
        //   document.documentElement.style.setProperty('--min-w', '100vw')
        // } else
        if (e.target.tagName === 'A') {
          // window.open(e.target.href, '_blank');
        } else if (document.webkitIsFullScreen && e.target.id != "video") {
          console.log('tap2');
          var meep = e.center.y/imgDiv.clientHeight;
          if (imgNo === '' && app.picked === 'tumblr' && !app.showComms) {
            chicken3 = !chicken3;
            app.chicken3 = !app.chicken3;
            showtitle = !showtitle;
          }
          else if (imgNo === '' && meep < 0.5 && !app.showComms && currentOne.y != 0) {
            chicken3 = !chicken3;
            app.chicken3 = !app.chicken3;
            showtitle = !showtitle;
            app.derp = !app.derp;
            // console.log(app.derp)
            document.documentElement.style.setProperty('--max-h', '100vh')
            document.documentElement.style.setProperty('--max-w', '100vw')
            document.documentElement.style.setProperty('--move-left', '0')
          }
          if (imgNo != '' && meep > 0.5) {console.log('upAlbum!'); app.flipAlbum()}
          else if (meep > 0.5) {console.log('up!'); app.up()}
          else if (imgNo != '' && meep < 0.5) {console.log('down!'); app.down()};
        }
      }
    },

    flipAlbum: function () {
      // console.log(e);
      if (!waitForNext) {
          app.showComms = false;
          app.ilSrc = [];
          app.il = false;
          var percentage = 60; // NEW: our % calc
          imgDiv.style.transition = '';
          var degree = percentage*3;
          // console.log(degree)
          // imgDiv.style.transform = 'rotateX(' + degree + 'deg)';
          // console.log(percentage)
            // imgDiv.addEventListener("transitionend", function(event) {
            //   console.log('percentage ' + percentage)
            //   if(percentage < -1) {
            //     if (pic[k+2][0].indexOf('blob') === -1) {console.log('preload!');app.preload()}
            //     else {app.next()}
            //   } else if(percentage > 1 && k > 0) {
            //     app.last();
            //   }
            // }, false);
            // if (e.velocityX < -10.5) {
            //   var qqq = (percentage+100)/100 * window.innerWidth;
            //   console.log('qqq: ' + qqq)
            //   document.documentElement.style.setProperty('--move-out', -qqq + 'px')
            //   document.documentElement.style.setProperty('--move-in', qqq + 'px')
            //   var eee = (window.innerWidth - document.getElementById('nextOne').width) / 2;
            //   document.documentElement.style.setProperty('--mar-gin', eee + 'px')
            //   document.documentElement.style.setProperty('--move-ya', '400ms')
            //   app.next()
            // } else if (e.velocityX > 10.5 && k > 0) {
            //   var qqq = (100-percentage)/100 * window.innerWidth;
            //   console.log('qqq: ' + qqq)
            //   document.documentElement.style.setProperty('--move-out', qqq + 'px')
            //   document.documentElement.style.setProperty('--move-in', -qqq + 'px')
            //   var eee = (window.innerWidth - document.getElementById('lastOne').width) / 2;
            //   document.documentElement.style.setProperty('--mar-gin', eee + 'px')
            //   document.documentElement.style.setProperty('--move-ya', '400ms')
            //   app.last()
            // } else {
              // if(percentage < -1) {
                // app.nextSwitch = true;
                var qqq = -180;
                // console.log('degree: ' + degree)
                // console.log('qqq: ' + qqq)
                if (qq < pic[k][10]-1) {
                  nextOne.src = pic[k][11][qq+1]
                } else {
                  nextOne.src = pic[k][11][0]
                }
                // imgDiv.style.transform = '';
                // currentOne.classList.toggle('t1');
                // if (qq%2 === 0) {
                //   imgDiv.classList.remove('f1');
                //   imgDiv.classList.add('f2');
                // } else {
                //   imgDiv.classList.remove('f2');
                //   imgDiv.classList.add('f1');
                // }
                // imgDiv.classList.toggle('f1');
                // nextOne.classList.add('album');
                app.up();
                // document.documentElement.style.setProperty('--move-out', -qqq + 'px')
                // document.documentElement.style.setProperty('--move-in', qqq + 'deg')
                // document.getElementById('currentOne').style.perspectiveOrigin="50% 50%"
                // var eee = (window.innerWidth - document.getElementById('nextOne').width) / 2;
                // document.documentElement.style.setProperty('--mar-gin', eee + 'px')
                // eee = e.velocityX + 0.8;
                // document.documentElement.style.setProperty('--move-ya', eee + 's')
                // currentOne.style.transform = 'translateX(' + qqq + '%)';
                // currentOne.style.transition = 'all .5s ease';
                // nextOne.style.transform = 'translateX(' + qqq + '%)';
                // nextOne.style.transition = 'all .5s ease';
                // app.next()
              // }
              // else if(percentage > 1 && k > 0) {
              //   // app.nextSwitch = false;
              //   //lastOne.style.transform = 'translateX(100%)';
              //   // var qqq = (100-percentage)/100 * window.innerWidth;
              //   console.log('qqq222: ' + qqq)
              //   nextOne.src = app.imgList[app.currentImg-1]
              //   imgDiv.style.transform = '';
              //   // currentOne.classList.toggle('t1');
              //   imgDiv.classList.toggle('t2');
              //   // console.log('lastOne: ' + document.getElementById('lastOne').src)
              //   // document.getElementById('lastOne').invisible = true;
              //   // document.documentElement.style.setProperty('--move-out', qqq + 'px')
              //   // document.documentElement.style.setProperty('--move-in', -qqq + 'px')
              //   // var eee = (window.innerWidth - document.getElementById('lastOne').width) / 2;
              //   // document.documentElement.style.setProperty('--mar-gin', eee + 'px')
              //   // eee = 0.8 - e.velocityX;
              //   // document.documentElement.style.setProperty('--move-ya', eee + 's')
              //   // currentOne.style.transform = 'translateX(' + -qqq + '%)';
              //   // currentOne.style.transition = 'all .5s ease';
              //   // nextOne.style.transform = 'translateX(' + -qqq + '%)';
              //   // nextOne.style.transition = 'all .5s ease';
              //   // app.currentImg = app.currentImg - 1;
              //   // k--;
              //   // app.last()
              // }
              // else {
                // console.log('ccccccc')
                // if (app.currentImg > 0) {
                //   lastOne.style.transform = 'translateX(-201.2%)';
                //   nextOne.style.transform = 'translateX(-101.8%)';
                //   currentOne.style.transform = 'translateX(0%)';
                //   lastOne.style.transition = 'all .5s ease';
                //   nextOne.style.transition = 'all .5s ease';
                //   currentOne.style.transition = 'all .5s ease';
                // } else {
                //   currentOne.style.transform = 'translateX(0%)';
                //   currentOne.style.transition = 'all .5s ease';
                //   nextOne.style.transform = 'translateX(-1.7%)';
                //   nextOne.style.transition = 'all .5s ease';
                // }
      }
    },

    albums: function () {
      imgNo = pic[k][10];
      app.aaPos = qq+1 + ' / ' + imgNo;
      app.albumImageNext = pic[k][11][qq+1];
      //console.log(aa[qq+1]);
      //if (k < pic.length-1) {app.imageNext = pic[k+1][0]};
      if (typeof pic[k][9] != 'undefined' && imgNo > 1) {
        app.imageSrcA = '';
        app.imgNo = ' (' + imgNo + ')';
        app.mic = '';
      } else {
        app.imageSrcA = '';
        app.imgNo = '';
        imgNo = '';
        console.log('Nur ein Pic im Album von ' + pic[k][1]);
      };
    },

    s500pxnext: function () {
      var url = pic[k+3][0];
      console.log(url);
      var pieces = url.split("/");
      fetch('https://ratv-cors-proxy.herokuapp.com/' + 'https://api.500px.com/v1/photos/' + pieces[4] + '?consumer_key=sUcWp6BWMYJZ3BTKwpQXHJiiUy2pzRveuuDSL0C8&image_size=1080').then(function(response) {
        return response.json();
      }).then(function(json) {
        //console.log(json.photo.image_url);
        pic[k+3][0] = json.photo.image_url;
      }).catch(function(err) {
        pic[k+3][0] = '404.jpg';
        console.log(err);
        app.err = 'error: ' + err.message;
      });
    },

    base58_decode: function(snipcode) {
      var alphabet = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ' ;
      var num = snipcode.length ;
      var decoded = 0 ;
      var multi = 1 ;
      for ( var i = (num-1) ; i >= 0 ; i-- )
      {
          decoded = decoded + multi * alphabet.indexOf( snipcode[i] ) ;
          multi = multi * alphabet.length ;
      }
      return decoded;
    },

    flickrnext: function () {
      var url = pic[k+3][0];
      console.log(url);
      var pieces = url.split("/");
      var pieces2 = '';
      if (url.indexOf('flickr') > 0) {
        pieces2 = pieces[5];
      } else {
        pieces2 = app.base58_decode(pieces[4]);
      }
      var request = new Request('https://ratv-cors-proxy.herokuapp.com/' + 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&format=json&api_key=520678290c4b980e1a563a8f3aaceeb7&photo_id=' + pieces2 + '&format=json&nojsoncallback=1', {
      	method: 'GET',
      });
      fetch(request).then(function(response) {
        return response.json();
      }).then(function(json) {
        //console.log(json.sizes.size[json.sizes.size.length-1]);
        pic[k+3][0] = json.sizes.size[json.sizes.size.length-1].source;
      }).catch(function(err) {
        pic[k+3][0] = '404.jpg';
        console.log(err);
        app.err = 'error: ' + err.message;
      });
    },

    fetchF: function (event) {
      console.log(app.selected);
      var sr = [];
      var limit = 25;
      if (app.selected != 'All') {sr.push('bla', app.selected); limit = 100} else {sr = this.optionsF; limit = 25};
      var counter = 0;
      //console.log('sr: ' + sr);
      pic = [];
      var shitload = [];
      var picNo = 1;
      k = 0;

var request = new Request('https://ratv-cors-proxy.herokuapp.com/' + 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=520678290c4b980e1a563a8f3aaceeb7&tags=lx100&format=json&nojsoncallback=1&extras=date_upload,owner_name,url_o', {
//      var request = new Request('https://ratv-cors-proxy.herokuapp.com/' + 'https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=88a319f649fa9d7ecdc093b518907132&group_id=2148086@N21&format=json&nojsoncallback=1&extras=date_upload,owner_name,url_o', {
//var request = new Request('https://ratv-cors-proxy.herokuapp.com/' + 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=520678290c4b980e1a563a8f3aaceeb7&user_id=55254782@N00&safe_search=3&format=json&nojsoncallback=1&extras=date_upload,owner_name,url_o', {
      	method: 'GET',
      });
      fetch(request).then(function(response) {
        return response.json();
      }).then(function(json) {
        console.log(json);
        var tp = json.photos.photo;
        console.log('tp: ' + tp.length);
        //https://www.flickr.com/photos/155761019@N02/38630786800/
        if (tp.length >= 0) {
          for (var z = 0; z < tp.length; z++) {
            picNo = 1;
            shitload = [];
            //console.log(tp[z].photos.length);
            var imgID = 'https://farm' + tp[z].farm + '.staticflickr.com/' + tp[z].server + '/' + tp[z].id + '_' + tp[z].secret + '_h.jpg';
            var blogname = tp[z].ownername;
            var posturl = 'https://www.flickr.com/photos/' + tp[z].owner + '/' + tp[z].id;
            var createdT = tp[z].dateupload;
            var tagline = tp[z].title;
            var url_o = tp[z].url_o;
            if (tagline.length > 50) {
              tagline = tagline.substring(0, 50) + ' [...]';
            }
            var shit = createdT;
            var ts = Math.round((new Date()).getTime() / 1000);
            var minutes = Math.round((ts-shit)/60);
            var date = Math.round(minutes/60);
            var days = Math.round(date/24);
            var formattedTime = "";
            //console.log((ts-shit)/60 + ": " + desc + " " + url);
            if (date >= 36) {formattedTime = days + ' days ago';}
            if (date < 36) {formattedTime = days + ' day ago';}
            if (date < 24) {formattedTime = date + ' hours ago';}
            if (minutes < 90) {formattedTime = date + ' hour ago';}
            if (minutes < 60) {formattedTime = minutes + ' min ago';}
            pic.push([imgID, posturl, formattedTime, blogname, shit, tagline, picNo, shitload, url_o]);
            app.fetched = ' / ' + pic.length;
          //}
          }
        } else {
            console.log("fail 1: " + tp);
        }
        app.fetched = ' / ' + pic.length;
        app.sort();
        titleLink = 5;
        counter++;
        //console.log('counter: ' + counter + ' j: ' + j + ' sr.length: ' + sr.length);
        app.imgList.push(pic[0][0]);
        app.imgList.push(pic[1][0]);
        app.nextpic();
      }).catch(function(err) {
        counter++;
        console.log(err);
        app.err = 'error: ' + err.message;
      });
    },

    albumsnext: function () {
      var url = pic[k+jump][0];
      qq = 0;
      aa = [];
      var album;
      //console.log(url);
      if (url.indexOf('www.imgur') > 0) {url = url.replace("www.imgur", "imgur")}
      else if (url.indexOf('m.imgur') > 0) {url = url.replace("m.imgur", "imgur")};
      if (url.charAt(9) === ".") {album = 'album/' + url.substr(22,7)}
      else {album = 'album/' + url.substr(20,7)};
      //console.log('album: ' + album);
      //console.log("url: " + url + " album: " + album);
      var request = new Request('https://api.imgur.com/3/' + album, {
      	method: 'GET',
      	headers: new Headers({
      		'Authorization': 'Client-ID 257cada0393452b'
      	})
      });
      fetch(request).then(function(response) {
        return response.json();
      }).then(function(json) {
        if (json.data.images.length > 1) {
          for (var z = 0; z < json.data.images.length; z++) {
            aa[z] = 'https://i.imgur.com/' + json.data.images[z].id + '.jpg';
          };
          //console.log(aa);
          pic[k+jump][9] = pic[k+jump][0];
          pic[k+jump][10] = json.data.images.length;
          pic[k+jump][11] = aa;
          var imgID = json.data.images[0].id;
          imgID = 'https://i.imgur.com/' + imgID + '.jpg';
          pic[k+jump][0] = imgID;
          //console.log('hhhhui ' + imgID);
        } else {
          var imgID = json.data.images[0].id;
          imgID = 'https://i.imgur.com/' + imgID + '.jpg';
          pic[k+jump][0] = imgID;
          console.log("Nur ein Pic im album: " + imgID);
        }
      }).catch(function(err) {
        pic[k+jump][0] = '404.jpg';
        console.log(err);
        app.err = 'error: ' + err.message;
      });
    },

    tumblr: function () {
    var url = pic[k][0];
    console.log('tumblr url: ' + url);

    var pieces = url.split("/");
    var pieces2 = pieces[2];
    var pieces3 = pieces[4];

    console.log('tumblr blog name: ' + pieces2);
    var request = new Request('https://api.tumblr.com/v2/blog/' + pieces2 + '/posts/photo?' + 'api_key=nu2qwwClRdfuk3Z3AL31jIhkrpN84So1W7JG9YnETupVIyvVNo', {
      method: 'GET',
    });
    fetch(request).then(function(response) {
      return response.json();
    }).then(function(json) {
      var tp = json.response.posts;
      //console.log('tp.lenght: ' + tp.length);
      if (tp.length >= 0) {
          //for (var z = 0; z < resp.data.images.length; z++) {
          var imgID = tp[0].photos[0].original_size.url;
          //imgNo = json.data.images.length;
          //imgID += 't';
          //imgID = 'http://i.imgur.com/' + imgID + '.jpg';
          pic[k][9] = pic[k][0];
          pic[k][0] = imgID;
          console.log('imgID: ' + imgID);
          //console.log('imgNo: ' + imgNo);
          app.imageSrc = pic[k][0];
          if (k < pic.length-1) {app.imageNext = pic[k+1][0]};
          if (typeof pic[k][9] != 'undefined') {
            app.imageSrcA = pic[k][9];
            //app.imgNo = ' (' + imgNo + ')'
          } else {
            app.imageSrcA = pic[k][0];
            //app.imgNo = ''
          };
      } else {
          console.log("fail 1: " + tp);
      }
    });
  },

  ig: function () {
    var url = pic[k][0];
    console.log('insta url: ' + url);

    var pieces = url.split("/");
    var pieces2 = pieces[4];

    console.log('insta post id: ' + pieces2);
    app.instaurl = url;
  },
  }
})
