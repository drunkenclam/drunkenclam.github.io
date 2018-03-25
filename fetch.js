"use strict";
var gotoNext = false;
var plop = false;
var plep;
var mobile = false;
// pinterest token: ASd8Bnc1sPMQHlW0o-m7futk74WdFPIMPH6_WgBEbppySkAv2gAAAAA
var links = '';
var pic = [];
var dd = [];
var aa = [];
var ciao = [];
var desc = [];
var aicA = [];
var imageSrc= '';
var imageSrcA= '';
var instaurl= '';
var imgNo = '';
var titleLink = 3;
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
  },

  data: function (){
    return {
      loadski: true,
      message: 'Click for slide',
      show: true,
      imgList: [],
      currentImg: 0,
      imgListA: [],
      currentImgA: 0,
        entries : links,
        imageSrc: '',
        imageSrcA: '',
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
        max: 100,
        hihi: 0,
        err: '',
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
        truesize: false,
        transmode: '',
        transStyle: '',
        nextvid: false,
        picked: 'reddit',
        checked: false,
        checkedP: true,
        selected: 'All',
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
        //'InstagramHotties',
        'gonewild',
        'nsfw',
        'gentlemanboners',
        'RealGirls',
        'NSFW_GIF',
        'nsfw_gifs',
        'Amateur',
        'Boobies',
        'ass',
        'BustyPetite',
        'LegalTeens',
        'cumsluts',
        'OnOff',
        'milf',
        'girlsinyogapants',
        'nsfwhardcore',
        'GirlsFinishingTheJob',
        'ginger',
        'holdthemoan',
        'dirtysmall',
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
        'SnapNSFW',
        //'SnapNSFWx',
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
        'fitgirls',
        'YogaPants',
        'GirlswithNeonHair',
        'BeautifulTitsAndAss',
        'gwcumsluts',
        'buttplug',
        'asshole',
        'treatemright',
        'WomenOfColor',
        'OnHerKnees',
        'NSFW_nospam',
        'bikinis',
        'metart',
        'TwinGirls',
        'latinas',
        'boobs',
        'PublicFlashing',
        'AnalGW',
        'ChangingRooms',
        'FacialFun',
        'thinspo',
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
        'AthleticGirls',
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
        //'doppelbangher',
        'Sexy_Ed',
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
        //'nipslip',
        'vagina',
        'leggingsgonewild',
        'outercourse',
        'hugenaturals',
        'MouthWideOpen',
        'SpreadEm',
        'Goddesses',
        '2busty2hide'
      ],
      optionsT: [ 'All',
        "murbo",
        "cleavagetweet",
        "mavrin",
        "suicidegirls",
        "showmethereal",
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
        'bustyattention',
        'mostlybigbreastedamateurs2',
        'nitropro',
        'nakednightmare',
        'leolauspt',
        'color4me',
        'trimmedpussy',
        'qqtony',
        'my-taste-in-boobs',
        'xxx-sexbomb',
        'terrabeauty',
        'femnude',
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
        '69times',
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
        'jdbetter',
        'capitol-j',
        'squritabh',
        'myperfectpicturesisstolen',
        'herandis',
        'slender-and-young',
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
        'stunningnakedwomen',
        'myinterestingposts',
        'bellezanatural11',

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
        //meh
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
        'hungaryattila/sexy-lingerie-color',
        'izzie3142/sexy-as-fuck',
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
    this.options = this.optionsR;
    window.addEventListener('keyup', this.myMethod, { passive: true });
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
              var blobsize = Math.round(blob.size/1024) + ' KB';
            } else {
              var blobsize = Math.round(blob.size/1024/1024*10)/10 + ' MB';
            }
            //console.log('blob.size: ' + blobsize);
            //console.log(m[1]);
            if ((m[1] === 'image/jpeg' || m[1] === 'image/png' || m[1] === 'application/octet-stream') && blob.size < 20000) {
              console.log('Pic < 20kB raus');
              //pic.splice(k+1,1);
              //app.fetched = ' / ' + pic.length;
              nextBlob = '';
            } else {
              if ((app.picked === 'reddit' || app.picked === 'redditSFW') && app.selected === 'All' && pic[k+2][0].indexOf('com/a/') === -1) {
                var ppp = dd.findIndex(function (obj) { return obj === blob.size; });
                if (ppp != -1) {
                  console.log(pic[k+2][1] + ' doppelt: https://www.reddit.com/user/' + pic[k+2][7] + ' bei Index ' + ppp + ' in Subreddit ' + pic[k+2][5]);
                  //pic.splice(k+1,1);
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
      if (key.code == 'ArrowRight' && !waitForNext && !plop) {app.showComms = false; app.next()}
      else if (key.code == 'ArrowRight') {console.log('else');gotoNext = true; waitForNext = false; app.preload()}
      else if (key.code == 'ArrowLeft') {app.last()}
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
        if (typeof item.data.body !== 'undefined') {
          //var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
          text += item.data.body + '\n\n';
          linkify = item.data.body;
          //console.log(linkify);
          if (linkify.indexOf('#**') === -1 && linkify.indexOf('phonebatterylevelbot') === -1 &&
              linkify.indexOf('a bot for linking direct images') === -1 && linkify.indexOf('**Remember OP is a real person') === -1 &&
              linkify.indexOf('AlphaBetaGammaTheta') === -1) {
            var peep = linkify.match(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);
            app.comments.push('');
            app.comments.push(linkify);
            if (peep !== null) {
              //console.log(peep);
              //console.log(peep.length);
              app.commentsL.push('');
              for (var d=0; d < peep.length; d++) {
                var poop = peep[d];
                if (poop.indexOf('ttp://') > 0) {poop = poop.replace("ttp://", "ttps://")}
                if (poop.indexOf('www.imgur') > 0) {poop = poop.replace("www.imgur", "imgur")}
                else if (poop.indexOf('m.imgur') > 0) {poop = poop.replace("m.imgur", "imgur")};
                app.commentsL.push(poop);
              }
            }
          }

          if (typeof item.data.replies !== 'undefined' && item.data.replies !== '') {
            text += app.getCommentsFromArray(item.data.replies.data.children);
          }
        }
      });
      if (app.comments.length === 0) {
        app.showComms = false;
        app.showCommsL = false;
      } else {
        app.showComms = true;
        commsID.childNodes[0].data = '';
        if (app.commentsL.length === 0) {
          app.showCommsL = false
        } else {
          //console.log('qqqqqq');
          app.showCommsL = true;
          for (var jj = 0; jj < app.commentsL.length; jj++) {
            var miclink = app.commentsL[jj];
            if (miclink.indexOf('imgur') != -1 && miclink.indexOf('imgur.com/a/') === -1 && miclink.indexOf('.', 22) < 0)
            {
              miclink += '.jpg';
            };
            if (miclink.indexOf('imgur') != -1 && (miclink.indexOf('.jpg') != -1 || miclink.indexOf('.png') != -1 || miclink.indexOf('.gif') != -1)) {
              //console.log(jj + ' ' + miclink);
              if (miclink.indexOf('.gifv') != -1) {miclink = miclink.replace("gifv", "gif")}
              if (app.ilSrc.indexOf(miclink) === -1) {app.ilSrc.push(miclink)};
            }
          }
          app.il = true;
        }
        if (!mobile) {app.$nextTick(() => app.$refs.commsRef.focus())}
        document.getElementById('commsID').scrollTop = 0;
      }
      return text;
    },

    commentsToggle: function () {
      var pieces = pic[k][1].split("/");
      var commentsTree = 'https://www.reddit.com/r/' + pieces[4] + '/comments/' + pieces[6] + '.json';
      //console.log(commentsTree);
      axios.get(commentsTree)
        .then(function (response) {
          //console.log(response);
          plep = response.data[1].data.children;
          var text = app.getCommentsFromArray(plep);
          //console.log(app.commentsL.length);
          for (var jj = 0; jj < app.commentsL.length; jj++) {
            if (app.commentsL[jj].indexOf('/a/') > 0) {
              app.albumsincomms(app.commentsL[jj]);
            }
          }
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

    albumsincomms: function (q) {
    var url = q;
    qq = 0;
    aicA = [];
    var album;
    //console.log(url);
    if (url.indexOf('ttp://') > 0) {url = url.replace("ttp://", "ttps://")}
    if (url.indexOf('www.imgur') > 0) {url = url.replace("www.imgur", "imgur")}
    else if (url.indexOf('m.imgur') > 0) {url = url.replace("m.imgur", "imgur")};
    if (url.charAt(9) === ".") {album = 'album/' + url.substr(22,5)}
    else {album = 'album/' + url.substr(20,5)};
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
      if (t.indexOf('/a/') > 0) {
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
      console.log('tap');
      //document.getElementById('commsID').scrollTop = 0;
      app.showComms = false;
      app.ilSrc = [];
      app.il = false;
    },

    searchTab: function () {
      window.open('https://www.qwant.com/?q=' + pic[k][titleLink], '_blank');
    },

    beforeLeave: function (el) {
      // console.log(el);
      //const {marginLeft, marginTop, width, height} = window.getComputedStyle(el)
      // el.style.left = '${el.offsetLeft - parseFloat(marginLeft, 10)}px'
      // console.log(el.offsetTop);
      // console.log(marginTop);
      // el.style.top = '${el.offsetTop - parseFloat(marginTop, 10)}px'
      if (k > ath) {
        app.hihi = 100;
        app.err = 100;
      }
      el.style.top = el.offsetTop + 'px';
      plop = true;
      // console.log(el.style.top);
      // el.style.width = width
      //el.style.height = height
    },

    afterLeave: function (el) {
      // console.log('app.currentImg: ' + app.currentImg)
      // if (app.currentImg > 0) {
      //   var elementt = document.getElementById("imgDiv");
      //   console.log(elementt)
      //   elementt.classList.add("derp");
      // }
      plop = false;
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
                  if (minutes < 60) {formattedTime = minutes + ' minutes ago';}
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
                  if (minutes < 60) {formattedTime = minutes + ' minutes ago';}
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
                if (minutes < 60) {formattedTime = minutes + ' minutes ago';}
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
                  if (minutes < 60) {formattedTime = minutes + ' minutes ago';}
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
      if (app.selected != 'All') {sr.push('bla', app.selected); limit = 100} else {sr = this.optionsT; limit = 25};
      var counter = 0;
      //console.log('sr: ' + sr);
      pic = [];
      var shitload = [];
      k = 0;
      for (j = 1; j < sr.length; j++) {

        var tname = sr[j];

        var request = new Request('https://ratv-cors-proxy.herokuapp.com/' + 'https://api.tumblr.com/v2/blog/' + tname + '/posts?' + 'api_key=nu2qwwClRdfuk3Z3AL31jIhkrpN84So1W7JG9YnETupVIyvVNo', {
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
                  if (minutes < 60) {formattedTime = minutes + ' minutes ago';}
                  pic.push([imgID, blogname, posturl, formattedTime, shit, tagline, picNo, shitload]);
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
                  if (minutes < 60) {formattedTime = minutes + ' minutes ago';}
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
              if (minutes < 60) {formattedTime = minutes + ' minutes ago';}
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
              if (minutes < 60) {formattedTime = minutes + ' minutes ago';}
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
      if (app.selected != 'All') {
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
//        console.log('j: ' + j);
//        console.log('url j: ' + this.options[j]);
//        console.log('url length: ' + this.options.length);
        if (sr[j] === 'itookapicture' || sr[j] === 'earthporn' || app.selected != 'All') {limit = 100} else {limit = 25}
        fetch('https://www.reddit.com/r/' + sr[j] + '/new.json?limit=' + limit).then(function(response) {
          return response.json();
        }).then(function(json) {
          for (i = 0; i < json.data.children.length; i++) {
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
              //console.log((ts-shit)/60 + ": " + desc + " " + url);
              if (date >= 36) {formattedTime = days + ' days ago';}
              if (date < 36) {formattedTime = days + ' day ago';}
              if (date < 24) {formattedTime = date + ' hours ago';}
              if (minutes < 90) {formattedTime = date + ' hour ago';}
              if (minutes < 60) {formattedTime = minutes + ' minutes ago';}

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
            if (app.picked === 'redditSFW') {app.transmode = 'out-in'};
            app.imgList.push(pic[0][0]);
            app.imgList.push(pic[1][0]);
            console.log(app.imgList)
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
        if (app.picked === 'reddit' || app.picked === 'redditSFW') {
          chicken3 = true;
          app.chicken3 = true;
        }
        document.documentElement.webkitRequestFullscreen();
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
      app.ilSrc = [];
      app.il = false;
      app.hihi = 0;
      app.err = 0;
      if (app.picked === 'tumblr') {
        if (pic[k][0].indexOf('.mp4') != -1) {app.vid=true}
        else {app.vid=false};
        if (nextBlob != '' && k != 0) {
          app.imageSrc = nextBlob;
        } else {
          app.imageSrc = pic[k][0];
        };

        app.postlink = pic[k][2];
        if (pic[k][5] != '') {app.title = pic[k][5]} else {app.title = pic[k][1]};
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
        if (pic[k][2].indexOf('1 day') != -1) {app.bh24 = true} else {app.bh24 = false}
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
        if (pic[k][3].indexOf('1 day') != -1) {app.bh24 = true} else {app.bh24 = false}
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
        if (k < pic.length-2 && (pic[k+2][0].indexOf('www.gfycat') > 0 || pic[k+2][0].indexOf('/gfycat') > 0)) {app.gfycat()}
        if (k < pic.length-1 && (pic[k+1][0].indexOf('www.gfycat') > 0 || pic[k+1][0].indexOf('/gfycat') > 0)) {app.gfycat()}
        if (pic[k][8] === 'video') {app.vid = true; console.log('video!')};
        //console.log('app.vid: ' + app.vid);
        // if (nextBlob != '' && k != 0) {
        //   app.imageSrc = nextBlob;
        // } else {
        //   app.imageSrc = pic[k][0];
        // };

        app.postlink = pic[k][1];
        if (app.picked === 'insta' || app.picked === '500px' || app.picked === 'flickr') {
          app.created = pic[k][2] + ' by ' + pic[k][3];
          if (pic[k][5] != '') {app.title = pic[k][5]} else {app.title = pic[k][3]};
          if (pic[k][8]) {pic[k][0] = pic[k][8]}
          if (pic[k][3].indexOf('1 day') != -1) {app.bh24 = true} else {app.bh24 = false}
        } else { //reddit
          if (pic[k][3].indexOf('mic') > 0 ||
            pic[k][3].indexOf('aic') > 0 ||
            pic[k][3].indexOf('AIC') > 0 ||
            pic[k][3].indexOf('MIC') > 0 ||
            pic[k][3].indexOf('in comments') > 0 ||
            pic[k][3].indexOf('lbum') > 0) {
              app.mic = 'mic';
          };
          app.created = pic[k][2] + ' in /r/' + pic[k][5];
          if (pic[k][3].indexOf('&amp;') != -1) {pic[k][3] = pic[k][3].replace(/&amp;/g, "&")};
          if (pic[k][3].indexOf('&lt;') != -1) {pic[k][3] = pic[k][3].replace(/&lt;/g, "<")};
          if (pic[k][3].indexOf('&gt;') != -1) {pic[k][3] = pic[k][3].replace(/&gt;/g, ">")};
          if (pic[k][6] > 0) {app.title = pic[k][3] + ' (' + pic[k][6] + ')'} else {app.title = pic[k][3]};
          if (pic[k][2].indexOf('1 day') != -1) {app.bh24 = true} else {app.bh24 = false}
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
      if (k === 0) {app.preload()}
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
      if (k < pic.length-2 && k >= ath && pic[k+2][0].indexOf('blob') === -1 && (k < 2 || pic[k+1][0].indexOf('blob') != -1)) {
        //var progressBar = document.getElementById("progress");
        //app.loading = true;
        //console.log('start ' + pic[k+2][0]);
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
            if (pic[k+2][0].indexOf('imgur.com/a/') === -1 && pic[k+2][0].indexOf('gfycat') === -1) {pic[k+2][0] = imgSrc};
          } else {
            console.log('nextBlob leer, daher kein preloading');
            app.imageNext = pic[k+2][0];
          };
        }, xhr => {
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

    gfycat: function () {
      if (pic[k+2][0].indexOf('gfycat') != -1) {
        var pieces = pic[k+2][0].split("/");
        var pieces2 = pieces[pieces.length-1].split("-");
        //console.log('pieces2: ' + pieces2);
        var apiURL = "https://gfycat.com/cajax/get/" + pieces2[0];
        //console.log(pic[k][0] + " apiurl: " + apiURL);
        fetch(apiURL).then(function(response) {
          return response.json();
        }).then(function(json) {
          console.log(json.gfyItem.webmUrl);
          //app.video=true;
          pic[k+2][0] = json.gfyItem.webmUrl;
          pic[k+2][8] = 'video';
          //app.imageSrc = json.gfyItem.webmUrl;
        });
        //console.log("gfyurl: " + pic[k][0]);
      }
      if (pic[k+1][0].indexOf('gfycat') != -1) {
        var pieces = pic[k+1][0].split("/");
        var pieces2 = pieces[pieces.length-1].split("-");
        //console.log('pieces2: ' + pieces2);
        var apiURL = "https://gfycat.com/cajax/get/" + pieces2[0];
        //console.log(pic[k][0] + " apiurl: " + apiURL);
        fetch(apiURL).then(function(response) {
          return response.json();
        }).then(function(json) {
          console.log(json.gfyItem.webmUrl);
          //app.video=true;
          pic[k+1][0] = json.gfyItem.webmUrl;
          pic[k+1][8] = 'video';
          //app.imageSrc = json.gfyItem.webmUrl;
        });
        //console.log("gfyurl: " + pic[k][0]);
      }
    },

    touchnextX: function (e) {
      //console.log(e.target);
      //var nextOne = document.getElementById('nextOne')
      var percentage = 100 / 1 * e.deltaX / window.innerWidth; // NEW: our % calc
      lastOne.style.transition = '';
      currentOne.style.transition = '';
      nextOne.style.transition = '';
      // var percentage2 = (percentage-200)/1.01;
      // var percentage3 = (percentage-100)*1.016;
      var percentage2 = (percentage-200);
      var percentage3 = (percentage-100);
      lastOne.style.transform = 'translateX(' + percentage2 + '%)'; // NEW: our CSS transform
      currentOne.style.transform = 'translateX(' + percentage + '%)'; // NEW: our CSS transform
      if (app.currentImg === 0) {
        nextOne.style.transform = 'translateX(' + percentage + '%)'; // NEW: our CSS transform
      } else {
        nextOne.style.transform = 'translateX(' + percentage3 + '%)'; // NEW: our CSS transform
      }
      console.log(percentage)
      if(e.isFinal) { // NEW: this only runs on event end
        console.log(app.imgList[app.currentImg-1]);
        console.log(e.velocityX)
        if (e.velocityX < -1) {
          var qqq = (percentage+100)/100 * window.innerWidth;
          console.log('qqq: ' + qqq)
          document.documentElement.style.setProperty('--move-out', -qqq + 'px')
          document.documentElement.style.setProperty('--move-in', qqq + 'px')
          app.next()
        } else if (e.velocityX > 1) {
          var qqq = (100-percentage)/100 * window.innerWidth;
          console.log('qqq: ' + qqq)
          document.documentElement.style.setProperty('--move-out', qqq + 'px')
          document.documentElement.style.setProperty('--move-in', -qqq + 'px')
          app.last()
        } else {
          if(percentage < -25) {
            var qqq = (percentage+100)/100 * window.innerWidth;
            console.log('qqq: ' + qqq)
            document.documentElement.style.setProperty('--move-out', -qqq + 'px')
            document.documentElement.style.setProperty('--move-in', qqq + 'px')
            // currentOne.style.transform = 'translateX(' + qqq + '%)';
            // currentOne.style.transition = 'all .5s ease';
            // nextOne.style.transform = 'translateX(' + qqq + '%)';
            // nextOne.style.transition = 'all .5s ease';
            app.next()
          }
          else if(percentage > 25) {
            //lastOne.style.transform = 'translateX(100%)';
            var qqq = (100-percentage)/100 * window.innerWidth;
            console.log('qqq: ' + qqq)
            document.documentElement.style.setProperty('--move-out', qqq + 'px')
            document.documentElement.style.setProperty('--move-in', -qqq + 'px')
            // currentOne.style.transform = 'translateX(' + -qqq + '%)';
            // currentOne.style.transition = 'all .5s ease';
            // nextOne.style.transform = 'translateX(' + -qqq + '%)';
            // nextOne.style.transition = 'all .5s ease';
            // app.currentImg = app.currentImg - 1;
            // k--;
            app.last()
          }
          else {
            //document.documentElement.style.setProperty('--move-out', percentage + '%')
            //document.documentElement.style.setProperty('--move-in', -percentage + '%')
            lastOne.style.transform = 'translateX(-200%)';
            currentOne.style.transform = 'translateX(0%)';
            nextOne.style.transform = 'translateX(-100%)';
            lastOne.style.transition = 'all .5s ease';
            currentOne.style.transition = 'all .5s ease';
            nextOne.style.transition = 'all .5s ease';
          }
        }
      }
    },

    touchlastX: function (e) {
      console.log(e.target);
      //var percentage = 100 / 1 * e.deltaX / window.innerWidth; // NEW: our % calc
      //e.target.style.transform = 'translateX(' + -percentage + '%)'; // NEW: our CSS transform
    },

    touchnext: function (event) {
      // if (!waitForNext) {
        //document.getElementById('commsID').scrollTop = 0;
        app.showComms = false;
        app.ilSrc = [];
        app.il = false;
        app.next();
      // };
    },

    next: function (event) {
      // console.log('k: ' + k)
       //console.log('imgList: ' + app.imgList.length)
      if ((app.chicken4 && k != pic.length-1) || (k > 1 && pic[k+1][0].indexOf('blob') === -1)) {
        //setTimeout(app.next, 400);
        waitForNext = true;
        console.log("wait for next pic " + (k + 2));
      } else {
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
        app.imageSrc = pic[k][11][qq];
        app.aaPos = qq+1 + ' / ' + pic[k][10];
        app.currentImgA = app.currentImgA - 1;
      }
    },

    up: function () {
      if (mobile && !document.webkitIsFullScreen) {
        app.toggleFS();
      } else if (imgNo === '' && pic[k][6] < 1 || (!document.webkitIsFullScreen && !muuh)) {
        app.toggleFS();
      } else if (imgNo === '' && (app.picked === 'reddit' || app.picked === 'redditSFW') && pic[k][6] > 0) {
        if (!app.showComms) {
          app.comments = [];
          app.commentsL = [];
          app.ilSrc = [];
          if (mobile) {
            commsID.style.top = document.getElementById('headline').clientHeight + "px";
            commsID.style.maxHeight = document.getElementById('entries').clientHeight - document.getElementById('headline').clientHeight + "px";
          } else {
            commsID.style.top = document.getElementById('container').offsetTop + "px";

          }
          app.commentsToggle()
        } else if (commsID.scrollHeight === commsID.clientHeight) {
          app.showComms = false;
          app.ilSrc = [];
          app.il = false;
        }
      } else {
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
            if (qq < pic[k][10]-1) {app.chicken5 = true};
            app.albumImageNext = pic[k][11][qq+1];
            var imgA = new Image;
            imgA.addEventListener('error', function () {
              app.chicken5 = false;
            });
            imgA.addEventListener("load", function () {
              app.chicken5 = false;
            });
            if (qq < pic[k][10]-1) {imgA.src = pic[k][11][qq+1]};
            app.aaPos = qq+1 + ' / ' + pic[k][10];
          } else {
            app.chicken5 = false;
            qq=0;
            app.imageSrc = pic[k][11][qq];
            app.aaPos = qq+1 + ' / ' + pic[k][10];
          };
        };
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
            if (minutes < 60) {formattedTime = minutes + ' minutes ago';}
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
      if (url.charAt(9) === ".") {album = 'album/' + url.substr(22,5)}
      else {album = 'album/' + url.substr(20,5)};
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
