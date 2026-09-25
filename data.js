// Easy to expand: add another object to MOVIES or TV_EPISODES.
const MOVIES=[
 {id:'m01',title:'National Lampoon’s Christmas Vacation',year:1989,runtime:'1h 37m',category:'Comedy',tier:'core'},
 {id:'m02',title:'The Family Stone',year:2005,runtime:'1h 43m',category:'Dramedy',tier:'core'},
 {id:'m03',title:'Just Friends',year:2005,runtime:'1h 36m',category:'Comedy',tier:'core'},
 {id:'m04',title:'Bad Santa',year:2003,runtime:'1h 32m',category:'Adult Comedy',tier:'core',naughty:true},
 {id:'m05',title:'Scrooged',year:1988,runtime:'1h 41m',category:'Comedy',tier:'core'},
 {id:'m06',title:'Home Alone',year:1990,runtime:'1h 43m',category:'Family Comedy',tier:'core'},
 {id:'m07',title:'Home Alone 2: Lost in New York',year:1992,runtime:'2h',category:'Family Comedy',tier:'core'},
 {id:'m08',title:'Elf',year:2003,runtime:'1h 37m',category:'Comedy',tier:'core'},
 {id:'m09',title:'Die Hard',year:1988,runtime:'2h 12m',category:'Action',tier:'core'},
 {id:'m10',title:'Lethal Weapon',year:1987,runtime:'1h 50m',category:'Action',tier:'extended'},
 {id:'m11',title:'Violent Night',year:2022,runtime:'1h 52m',category:'Action / Dark Comedy',tier:'core',naughty:true},
 {id:'m12',title:'Krampus',year:2015,runtime:'1h 38m',category:'Horror',tier:'core',naughty:true},
 {id:'m13',title:'Batman Returns',year:1992,runtime:'2h 6m',category:'Christmas Adjacent',tier:'wildcard'},
 {id:'m14',title:'Eyes Wide Shut',year:1999,runtime:'2h 39m',category:'Christmas Adjacent',tier:'wildcard'},
 {id:'m15',title:'A Christmas Story',year:1983,runtime:'1h 33m',category:'Classic Comedy',tier:'core'},
 {id:'m16',title:'It’s a Wonderful Life',year:1946,runtime:'2h 10m',category:'Classic',tier:'core'},
 {id:'m17',title:'Miracle on 34th Street',year:1947,runtime:'1h 36m',category:'Classic',tier:'core'},
 {id:'m18',title:'White Christmas',year:1954,runtime:'2h',category:'Classic / Musical',tier:'core'},
 {id:'m19',title:'The Night Before',year:2015,runtime:'1h 41m',category:'Adult Comedy',tier:'core',naughty:true},
 {id:'m20',title:'Office Christmas Party',year:2016,runtime:'1h 45m',category:'Adult Comedy',tier:'core',naughty:true},
 {id:'m21',title:'Gremlins',year:1984,runtime:'1h 46m',category:'Dark Comedy / Horror',tier:'extended',naughty:true},
 {id:'m22',title:'Black Christmas',year:1974,runtime:'1h 38m',category:'Horror',tier:'extended',naughty:true},
 {id:'m23',title:'Klaus',year:2019,runtime:'1h 36m',category:'Animation',tier:'core'},
 {id:'m24',title:'The Muppet Christmas Carol',year:1992,runtime:'1h 25m',category:'Family / Musical',tier:'core'},
 {id:'m25',title:'The Polar Express',year:2004,runtime:'1h 40m',category:'Animation',tier:'core'},
 {id:'m26',title:'Four Christmases',year:2008,runtime:'1h 28m',category:'Comedy',tier:'core'},
 {id:'m27',title:'Love Actually',year:2003,runtime:'2h 15m',category:'Romance / Comedy',tier:'core'},
 {id:'m28',title:'The Holiday',year:2006,runtime:'2h 16m',category:'Romance / Comedy',tier:'core'},
 {id:'m29',title:'Jingle All the Way',year:1996,runtime:'1h 29m',category:'90s Comedy',tier:'core'},
 {id:'m30',title:'A Very Harold & Kumar Christmas',year:2011,runtime:'1h 30m',category:'Adult Comedy',tier:'extended',naughty:true}
,{id:'m31',title:'The Santa Clause',year:1994,runtime:'1h 37m',category:'Family Comedy',tier:'core'}
,{id:'m32',title:'The Santa Clause 2',year:2002,runtime:'1h 44m',category:'Family Comedy',tier:'extended'}
,{id:'m33',title:'The Santa Clause 3: The Escape Clause',year:2006,runtime:'1h 37m',category:'Family Comedy',tier:'extended'}
,{id:'m34',title:'Christmas with the Kranks',year:2004,runtime:'1h 39m',category:'Comedy',tier:'core'}
,{id:'m35',title:'Fred Claus',year:2007,runtime:'1h 56m',category:'Comedy',tier:'extended'}
,{id:'m36',title:'Surviving Christmas',year:2004,runtime:'1h 31m',category:'Comedy',tier:'extended'}
,{id:'m37',title:'The Family Man',year:2000,runtime:'2h 5m',category:'Comedy / Drama',tier:'core'}
,{id:'m38',title:'Jack Frost',year:1998,runtime:'1h 41m',category:'Family',tier:'extended'}
,{id:'m39',title:'Ernest Saves Christmas',year:1988,runtime:'1h 35m',category:'Comedy',tier:'extended'}
,{id:'m40',title:'Prancer',year:1989,runtime:'1h 43m',category:'Family',tier:'extended'}
,{id:'m41',title:'The Christmas Chronicles',year:2018,runtime:'1h 44m',category:'Family / Adventure',tier:'core'}
,{id:'m42',title:'The Christmas Chronicles 2',year:2020,runtime:'1h 55m',category:'Family / Adventure',tier:'extended'}
,{id:'m43',title:'Noelle',year:2019,runtime:'1h 40m',category:'Family Comedy',tier:'extended'}
,{id:'m44',title:'8-Bit Christmas',year:2021,runtime:'1h 37m',category:'Comedy / Nostalgia',tier:'core'}
,{id:'m45',title:'Spirited',year:2022,runtime:'2h 7m',category:'Comedy / Musical',tier:'core'}
,{id:'m46',title:'Candy Cane Lane',year:2023,runtime:'1h 57m',category:'Comedy / Fantasy',tier:'extended'}
,{id:'m47',title:'Dashing Through the Snow',year:2023,runtime:'1h 32m',category:'Family Comedy',tier:'extended'}
,{id:'m48',title:'Bad Santa 2',year:2016,runtime:'1h 32m',category:'Adult Comedy',tier:'extended',naughty:true}
,{id:'m49',title:'The Ref',year:1994,runtime:'1h 37m',category:'Dark Comedy',tier:'core',naughty:true}
,{id:'m50',title:'Mixed Nuts',year:1994,runtime:'1h 37m',category:'Comedy',tier:'extended'}
,{id:'m51',title:'Trapped in Paradise',year:1994,runtime:'1h 51m',category:'Comedy',tier:'extended'}
,{id:'m52',title:'Friday After Next',year:2002,runtime:'1h 25m',category:'Adult Comedy',tier:'extended',naughty:true}
,{id:'m53',title:'The Ice Harvest',year:2005,runtime:'1h 28m',category:'Crime / Dark Comedy',tier:'wildcard',naughty:true}
,{id:'m54',title:'Why Him?',year:2016,runtime:'1h 51m',category:'Adult Comedy',tier:'extended',naughty:true}
,{id:'m55',title:'The Best Man Holiday',year:2013,runtime:'2h 3m',category:'Comedy / Drama',tier:'core'}
,{id:'m56',title:'The Holdovers',year:2023,runtime:'2h 13m',category:'Comedy / Drama',tier:'core'}
,{id:'m57',title:'A Bad Moms Christmas',year:2017,runtime:'1h 44m',category:'Adult Comedy',tier:'extended',naughty:true}
,{id:'m58',title:'Love the Coopers',year:2015,runtime:'1h 47m',category:'Comedy / Drama',tier:'extended'}
,{id:'m59',title:'Last Christmas',year:2019,runtime:'1h 43m',category:'Romance / Comedy',tier:'core'}
,{id:'m60',title:'Serendipity',year:2001,runtime:'1h 30m',category:'Romance',tier:'core'}
,{id:'m61',title:'While You Were Sleeping',year:1995,runtime:'1h 43m',category:'Romance / Comedy',tier:'core'}
,{id:'m62',title:'Happiest Season',year:2020,runtime:'1h 42m',category:'Romance / Comedy',tier:'core'}
,{id:'m63',title:'Carol',year:2015,runtime:'1h 58m',category:'Drama / Romance',tier:'extended'}
,{id:'m64',title:'The Shop Around the Corner',year:1940,runtime:'1h 39m',category:'Classic / Romance',tier:'extended'}
,{id:'m65',title:'The Bishop’s Wife',year:1947,runtime:'1h 49m',category:'Classic / Fantasy',tier:'extended'}
,{id:'m66',title:'The Preacher’s Wife',year:1996,runtime:'2h 4m',category:'Romance / Fantasy',tier:'extended'}
,{id:'m67',title:'Christmas in Connecticut',year:1945,runtime:'1h 41m',category:'Classic / Comedy',tier:'extended'}
,{id:'m68',title:'The Apartment',year:1960,runtime:'2h 5m',category:'Classic / Comedy',tier:'wildcard'}
,{id:'m69',title:'Die Hard 2',year:1990,runtime:'2h 4m',category:'Action',tier:'extended'}
,{id:'m70',title:'The Long Kiss Goodnight',year:1996,runtime:'2h 1m',category:'Action',tier:'extended',naughty:true}
,{id:'m71',title:'Kiss Kiss Bang Bang',year:2005,runtime:'1h 43m',category:'Crime / Comedy',tier:'wildcard',naughty:true}
,{id:'m72',title:'Reindeer Games',year:2000,runtime:'1h 44m',category:'Action / Crime',tier:'wildcard',naughty:true}
,{id:'m73',title:'Fatman',year:2020,runtime:'1h 40m',category:'Action / Dark Comedy',tier:'extended',naughty:true}
,{id:'m74',title:'Carry-On',year:2024,runtime:'1h 59m',category:'Action / Thriller',tier:'extended'}
,{id:'m75',title:'Red One',year:2024,runtime:'2h 3m',category:'Action / Comedy',tier:'extended'}
,{id:'m76',title:'Black Christmas',year:2006,runtime:'1h 35m',category:'Horror',tier:'wildcard',naughty:true}
,{id:'m77',title:'Black Christmas',year:2019,runtime:'1h 32m',category:'Horror',tier:'wildcard',naughty:true}
,{id:'m78',title:'Better Watch Out',year:2016,runtime:'1h 29m',category:'Horror / Thriller',tier:'extended',naughty:true}
,{id:'m79',title:'Rare Exports: A Christmas Tale',year:2010,runtime:'1h 24m',category:'Horror / Fantasy',tier:'extended',naughty:true}
,{id:'m80',title:'Silent Night, Deadly Night',year:1984,runtime:'1h 19m',category:'Horror',tier:'extended',naughty:true}
,{id:'m81',title:'Silent Night, Deadly Night Part 2',year:1987,runtime:'1h 28m',category:'Horror',tier:'wildcard',naughty:true}
,{id:'m82',title:'Christmas Evil',year:1980,runtime:'1h 40m',category:'Horror',tier:'wildcard',naughty:true}
,{id:'m83',title:'Santa’s Slay',year:2005,runtime:'1h 18m',category:'Horror / Comedy',tier:'wildcard',naughty:true}
,{id:'m84',title:'A Christmas Horror Story',year:2015,runtime:'1h 39m',category:'Horror Anthology',tier:'extended',naughty:true}
,{id:'m85',title:'Anna and the Apocalypse',year:2017,runtime:'1h 33m',category:'Horror / Musical',tier:'extended',naughty:true}
,{id:'m86',title:'The Lodge',year:2019,runtime:'1h 48m',category:'Horror / Thriller',tier:'wildcard',naughty:true}
,{id:'m87',title:'There’s Something in the Barn',year:2023,runtime:'1h 40m',category:'Horror / Comedy',tier:'extended',naughty:true}
,{id:'m88',title:'It’s a Wonderful Knife',year:2023,runtime:'1h 27m',category:'Horror / Comedy',tier:'extended',naughty:true}
,{id:'m89',title:'Silent Night',year:2021,runtime:'1h 32m',category:'Dark Comedy / Drama',tier:'wildcard',naughty:true}
,{id:'m90',title:'Deadly Games',year:1989,runtime:'1h 32m',category:'Horror / Thriller',tier:'wildcard',naughty:true}
,{id:'m91',title:'A Charlie Brown Christmas',year:1965,runtime:'25m',category:'Animated Special',tier:'core'}
,{id:'m92',title:'Rudolph the Red-Nosed Reindeer',year:1964,runtime:'47m',category:'Animated Special',tier:'core'}
,{id:'m93',title:'Frosty the Snowman',year:1969,runtime:'25m',category:'Animated Special',tier:'core'}
,{id:'m94',title:'Santa Claus Is Comin’ to Town',year:1970,runtime:'51m',category:'Animated Special',tier:'core'}
,{id:'m95',title:'The Year Without a Santa Claus',year:1974,runtime:'51m',category:'Animated Special',tier:'core'}
,{id:'m96',title:'Mickey’s Christmas Carol',year:1983,runtime:'26m',category:'Animated Special',tier:'core'}
,{id:'m97',title:'The Nightmare Before Christmas',year:1993,runtime:'1h 16m',category:'Animation / Fantasy',tier:'core'}
,{id:'m98',title:'Arthur Christmas',year:2011,runtime:'1h 37m',category:'Animation',tier:'core'}
,{id:'m99',title:'How the Grinch Stole Christmas',year:2000,runtime:'1h 44m',category:'Family Comedy',tier:'core'}
,{id:'m100',title:'The Grinch',year:2018,runtime:'1h 25m',category:'Animation',tier:'core'}

];
const TV_EPISODES=[
 {id:'t01',show:'The Office',title:'Christmas Party',season:2,episode:10,runtime:'~22m',category:'Comedy',tier:'core'},
 {id:'t02',show:'The Office',title:'A Benihana Christmas, Part 1',season:3,episode:10,runtime:'~22m',category:'Comedy',tier:'core'},
 {id:'t03',show:'The Office',title:'A Benihana Christmas, Part 2',season:3,episode:11,runtime:'~22m',category:'Comedy',tier:'core'},
 {id:'t04',show:'The Office',title:'Moroccan Christmas',season:5,episode:11,runtime:'~22m',category:'Comedy',tier:'core'},
 {id:'t05',show:'The Office',title:'Secret Santa',season:6,episode:13,runtime:'~22m',category:'Comedy',tier:'core'},
 {id:'t06',show:'The Office',title:'Dwight Christmas',season:9,episode:9,runtime:'~22m',category:'Comedy',tier:'core'},
 {id:'t07',show:'Community',title:'Abed’s Uncontrollable Christmas',season:2,episode:11,runtime:'~22m',category:'Comedy',tier:'core'},
 {id:'t08',show:'Community',title:'Regional Holiday Music',season:3,episode:10,runtime:'~22m',category:'Comedy',tier:'core'},
 {id:'t09',show:'Friends',title:'The One with the Holiday Armadillo',season:7,episode:10,runtime:'~22m',category:'Comedy',tier:'core'},
 {id:'t10',show:'It’s Always Sunny in Philadelphia',title:'A Very Sunny Christmas',season:6,episode:13,runtime:'~43m',category:'Adult Comedy',tier:'core',naughty:true},
 {id:'t11',show:'Ted Lasso',title:'Carol of the Bells',season:2,episode:4,runtime:'~30m',category:'Comedy / Drama',tier:'core'},
 {id:'t12',show:'Brooklyn Nine-Nine',title:'Christmas',season:1,episode:11,runtime:'~22m',category:'Comedy',tier:'core'},
 {id:'t13',show:'Parks and Recreation',title:'Christmas Scandal',season:2,episode:12,runtime:'~22m',category:'Comedy',tier:'core'},
 {id:'t14',show:'Arrested Development',title:'Afternoon Delight',season:2,episode:6,runtime:'~22m',category:'Comedy',tier:'core'},
 {id:'t15',show:'Frasier',title:'Merry Christmas, Mrs. Moskowitz',season:6,episode:10,runtime:'~22m',category:'Comedy',tier:'core'},
 {id:'t16',show:'Futurama',title:'Xmas Story',season:2,episode:4,runtime:'~22m',category:'Animation',tier:'extended'},
 {id:'t17',show:'American Dad!',title:'Rapture’s Delight',season:5,episode:9,runtime:'~22m',category:'Adult Animation',tier:'extended',naughty:true},
 {id:'t18',show:'Family Guy',title:'Road to the North Pole',season:9,episode:7,runtime:'~44m',category:'Adult Animation',tier:'extended',naughty:true},
 {id:'t19',show:'Seinfeld',title:'The Strike',season:9,episode:10,runtime:'~22m',category:'Festivus / Comedy',tier:'extended'},
 {id:'t20',show:'Modern Family',title:'Undeck the Halls',season:1,episode:10,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t21',show:'Modern Family',title:'Express Christmas',season:3,episode:10,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t22',show:'Modern Family',title:'The Old Man & the Tree',season:5,episode:10,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t23',show:'Modern Family',title:'White Christmas',season:7,episode:9,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t24',show:'Modern Family',title:'Stuck in a Moment',season:10,episode:10,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t25',show:'Modern Family',title:'The Last Christmas',season:11,episode:9,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t26',show:'The Office',title:'Classy Christmas, Part 1',season:7,episode:11,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t27',show:'The Office',title:'Classy Christmas, Part 2',season:7,episode:12,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t28',show:'The Office',title:'Christmas Wishes',season:8,episode:10,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t29',show:'Community',title:'Comparative Religion',season:1,episode:12,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t30',show:'Community',title:'Intro to Knots',season:4,episode:10,runtime:'~22m',category:'Comedy',tier:'extended'}
,{id:'t31',show:'That ’70s Show',title:'The Best Christmas Ever',season:1,episode:12,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t32',show:'That ’70s Show',title:'Hyde’s Christmas Rager',season:3,episode:9,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t33',show:'That ’70s Show',title:'An Eric Forman Christmas',season:4,episode:12,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t34',show:'That ’70s Show',title:'Christmas',season:6,episode:7,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t35',show:'That ’70s Show',title:'Winter',season:7,episode:11,runtime:'~22m',category:'Comedy',tier:'extended'}
,{id:'t36',show:'How I Met Your Mother',title:'How Lily Stole Christmas',season:2,episode:11,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t37',show:'How I Met Your Mother',title:'Little Minnesota',season:4,episode:11,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t38',show:'How I Met Your Mother',title:'False Positive',season:6,episode:12,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t39',show:'How I Met Your Mother',title:'Symphony of Illumination',season:7,episode:12,runtime:'~22m',category:'Comedy / Drama',tier:'core'}
,{id:'t40',show:'Frasier',title:'Miracle on Third or Fourth Street',season:1,episode:12,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t41',show:'Frasier',title:'Frasier Grinch',season:3,episode:9,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t42',show:'Frasier',title:'Perspectives on Christmas',season:5,episode:9,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t43',show:'Frasier',title:'The Fight Before Christmas',season:7,episode:11,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t44',show:'Frasier',title:'Mary Christmas',season:8,episode:8,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t45',show:'Frasier',title:'We Two Kings',season:10,episode:10,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t46',show:'Frasier',title:'High Holidays',season:11,episode:11,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t47',show:'Bob’s Burgers',title:'Bob Rest Ye Merry Gentle-Mannequins',season:3,episode:9,runtime:'~22m',category:'Animation',tier:'core'}
,{id:'t48',show:'Bob’s Burgers',title:'Christmas in the Car',season:4,episode:8,runtime:'~22m',category:'Animation',tier:'core'}
,{id:'t49',show:'Bob’s Burgers',title:'Father of the Bob',season:5,episode:6,runtime:'~22m',category:'Animation',tier:'core'}
,{id:'t50',show:'Bob’s Burgers',title:'Nice-Capades',season:6,episode:5,runtime:'~22m',category:'Animation',tier:'core'}
,{id:'t51',show:'Bob’s Burgers',title:'The Last Gingerbread House on the Left',season:7,episode:7,runtime:'~22m',category:'Animation',tier:'core'}
,{id:'t52',show:'Bob’s Burgers',title:'The Bleakening, Part One',season:8,episode:6,runtime:'~22m',category:'Animation',tier:'core'}
,{id:'t53',show:'Bob’s Burgers',title:'The Bleakening, Part Two',season:8,episode:7,runtime:'~22m',category:'Animation',tier:'core'}
,{id:'t54',show:'Bob’s Burgers',title:'Better Off Sled',season:9,episode:10,runtime:'~22m',category:'Animation',tier:'core'}
,{id:'t55',show:'Bob’s Burgers',title:'Have Yourself a Maily Linda Christmas',season:10,episode:10,runtime:'~22m',category:'Animation',tier:'extended'}
,{id:'t56',show:'Bob’s Burgers',title:'Yachty or Nice',season:11,episode:10,runtime:'~22m',category:'Animation',tier:'extended'}
,{id:'t57',show:'Bob’s Burgers',title:'Gene’s Christmas Break',season:12,episode:10,runtime:'~22m',category:'Animation',tier:'extended'}
,{id:'t58',show:'Bob’s Burgers',title:'The Plight Before Christmas',season:13,episode:10,runtime:'~22m',category:'Animation',tier:'core'}
,{id:'t59',show:'Futurama',title:'A Tale of Two Santas',season:3,episode:3,runtime:'~22m',category:'Animation',tier:'extended'}
,{id:'t60',show:'Futurama',title:'The Futurama Holiday Spectacular',season:6,episode:13,runtime:'~22m',category:'Animation',tier:'extended'}
,{id:'t61',show:'Futurama',title:'I Know What You Did Next Xmas',season:11,episode:6,runtime:'~22m',category:'Animation',tier:'extended'}
,{id:'t62',show:'Family Guy',title:'A Very Special Family Guy Freakin’ Christmas',season:3,episode:16,runtime:'~22m',category:'Adult Animation',tier:'extended',naughty:true}
,{id:'t63',show:'Family Guy',title:'Jesus, Mary and Joseph!',season:11,episode:8,runtime:'~22m',category:'Adult Animation',tier:'extended',naughty:true}
,{id:'t64',show:'Family Guy',title:'Christmas Guy',season:12,episode:8,runtime:'~22m',category:'Adult Animation',tier:'extended',naughty:true}
,{id:'t65',show:'Family Guy',title:'The First No L',season:19,episode:9,runtime:'~22m',category:'Adult Animation',tier:'extended',naughty:true}
,{id:'t66',show:'American Dad!',title:'For Whom the Sleigh Bell Tolls',season:6,episode:8,runtime:'~22m',category:'Adult Animation',tier:'extended',naughty:true}
,{id:'t67',show:'American Dad!',title:'Season’s Beatings',season:7,episode:7,runtime:'~22m',category:'Adult Animation',tier:'extended',naughty:true}
,{id:'t68',show:'American Dad!',title:'Minstrel Krampus',season:9,episode:8,runtime:'~22m',category:'Adult Animation',tier:'extended',naughty:true}
,{id:'t69',show:'American Dad!',title:'Dreaming of a White Porsche Christmas',season:10,episode:6,runtime:'~22m',category:'Adult Animation',tier:'extended',naughty:true}
,{id:'t70',show:'American Dad!',title:'Yule. Tide. Repeat.',season:17,episode:22,runtime:'~22m',category:'Adult Animation',tier:'extended',naughty:true}
,{id:'t71',show:'Married... with Children',title:'You Better Watch Out',season:2,episode:13,runtime:'~22m',category:'Comedy',tier:'extended',naughty:true}
,{id:'t72',show:'Married... with Children',title:'It’s a Bundyful Life, Part 1',season:4,episode:11,runtime:'~22m',category:'Comedy',tier:'extended',naughty:true}
,{id:'t73',show:'Married... with Children',title:'It’s a Bundyful Life, Part 2',season:4,episode:12,runtime:'~22m',category:'Comedy',tier:'extended',naughty:true}
,{id:'t74',show:'Home Improvement',title:'Yule Better Watch Out',season:1,episode:12,runtime:'~22m',category:'90s Comedy',tier:'extended'}
,{id:'t75',show:'Home Improvement',title:'I’m Scheming of a White Christmas',season:2,episode:12,runtime:'~22m',category:'90s Comedy',tier:'extended'}
,{id:'t76',show:'Home Improvement',title:'’Twas the Blight Before Christmas',season:3,episode:12,runtime:'~22m',category:'90s Comedy',tier:'extended'}
,{id:'t77',show:'Home Improvement',title:'’Twas the Night Before Chaos',season:4,episode:12,runtime:'~22m',category:'90s Comedy',tier:'extended'}
,{id:'t78',show:'Home Improvement',title:'’Twas the Flight Before Christmas',season:5,episode:12,runtime:'~22m',category:'90s Comedy',tier:'extended'}
,{id:'t79',show:'Home Improvement',title:'No Place Like Home',season:6,episode:12,runtime:'~22m',category:'90s Comedy',tier:'extended'}
,{id:'t80',show:'Home Improvement',title:'Bright Christmas',season:7,episode:11,runtime:'~22m',category:'90s Comedy',tier:'extended'}
,{id:'t81',show:'Home Improvement',title:'Home for the Holidays',season:8,episode:11,runtime:'~22m',category:'90s Comedy',tier:'extended'}
,{id:'t82',show:'New Girl',title:'The 23rd',season:1,episode:9,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t83',show:'New Girl',title:'Santa',season:2,episode:11,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t84',show:'New Girl',title:'LAXmas',season:4,episode:11,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t85',show:'New Girl',title:'Christmas Eve Eve',season:6,episode:10,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t86',show:'The Big Bang Theory',title:'The Bath Item Gift Hypothesis',season:2,episode:11,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t87',show:'The Big Bang Theory',title:'The Maternal Congruence',season:3,episode:11,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t88',show:'The Big Bang Theory',title:'The Santa Simulation',season:6,episode:11,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t89',show:'Superstore',title:'Seasonal Help',season:2,episode:9,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t90',show:'Boy Meets World',title:'Santa’s Little Helper',season:1,episode:10,runtime:'~22m',category:'90s Comedy',tier:'core'}
,{id:'t91',show:'Boy Meets World',title:'A Very Topanga Christmas',season:5,episode:11,runtime:'~22m',category:'90s Comedy',tier:'core'}
,{id:'t92',show:'Boy Meets World',title:'Santa’s Little Helpers',season:6,episode:11,runtime:'~22m',category:'90s Comedy',tier:'core'}
,{id:'t93',show:'Seinfeld',title:'The Red Dot',season:3,episode:12,runtime:'~22m',category:'Comedy',tier:'extended'}
,{id:'t94',show:'The Simpsons',title:'Simpsons Roasting on an Open Fire',season:1,episode:1,runtime:'~22m',category:'Animation',tier:'core'}
,{id:'t95',show:'The Simpsons',title:'Marge Be Not Proud',season:7,episode:11,runtime:'~22m',category:'Animation',tier:'core'}
,{id:'t96',show:'The Simpsons',title:'Miracle on Evergreen Terrace',season:9,episode:10,runtime:'~22m',category:'Animation',tier:'core'}
,{id:'t97',show:'King of the Hill',title:'Pretty, Pretty Dresses',season:3,episode:9,runtime:'~22m',category:'Animation',tier:'extended'}
,{id:'t98',show:'King of the Hill',title:'’Twas the Nut Before Christmas',season:5,episode:8,runtime:'~22m',category:'Animation',tier:'extended'}
,{id:'t99',show:'Malcolm in the Middle',title:'Christmas',season:3,episode:7,runtime:'~22m',category:'Comedy',tier:'core'}
,{id:'t100',show:'30 Rock',title:'Ludachristmas',season:2,episode:9,runtime:'~22m',category:'Comedy',tier:'core'}

];
