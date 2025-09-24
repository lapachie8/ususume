// Skills data
const skills = [
  {
    "name":"Right-Handed ◎",
    "evalPoints":174
  },
  {
    "name":"Right-Handed ○",
    "evalPoints":129
  },
  {
    "name":"Left-Handed ◎",
    "evalPoints":174
  },
  {
    "name":"Left-Handed ○",
    "evalPoints":129
  },
  {
    "name":"Tokyo Racecourse ◎",
    "evalPoints":174
  },
  {
    "name":"Tokyo Racecourse ○",
    "evalPoints":129
  },
  {
    "name":"Nakayama Racecourse ◎",
    "evalPoints":174
  },
  {
    "name":"Nakayama Racecourse ○",
    "evalPoints":129
  },
  {
    "name":"Hanshin Racecourse ◎",
    "evalPoints":174
  },
  {
    "name":"Hanshin Racecourse ○",
    "evalPoints":129
  },
  {
    "name":"Kyoto Racecourse ◎",
    "evalPoints":174
  },
  {
    "name":"Kyoto Racecourse ○",
    "evalPoints":129
  },
  {
    "name":"Chukyo Racecourse ◎",
    "evalPoints":174
  },
  {
    "name":"Chukyo Racecourse ○",
    "evalPoints":129
  },
  {
    "name":"Sapporo Racecourse ◎",
    "evalPoints":174
  },
  {
    "name":"Sapporo Racecourse ○",
    "evalPoints":129
  },
  {
    "name":"Hakodate Racecourse ◎",
    "evalPoints":174
  },
  {
    "name":"Hakodate Racecourse ○",
    "evalPoints":129
  },
  {
    "name":"Fukushima Racecourse ◎",
    "evalPoints":174
  },
  {
    "name":"Fukushima Racecourse ○",
    "evalPoints":129
  },
  {
    "name":"Niigata Racecourse ◎",
    "evalPoints":174
  },
  {
    "name":"Niigata Racecourse ○",
    "evalPoints":129
  },
  {
    "name":"Kokura Racecourse ◎",
    "evalPoints":174
  },
  {
    "name":"Kokura Racecourse ○",
    "evalPoints":129
  },
  {
    "name":"Oi Racecourse ◎",
    "evalPoints":174
  },
  {
    "name":"Oi Racecourse ○",
    "evalPoints":129
  },
  {
    "name":"Standard Distance ◎",
    "evalPoints":174
  },
  {
    "name":"Standard Distance ○",
    "evalPoints":129
  },
  {
    "name":"Non-Standard Distance ◎",
    "evalPoints":174
  },
  {
    "name":"Non-Standard Distance ○",
    "evalPoints":129
  },
  {
    "name":"Firm Conditions ◎",
    "evalPoints":174
  },
  {
    "name":"Firm Conditions ○",
    "evalPoints":129
  },
  {
    "name":"Wet Conditions ◎",
    "evalPoints":174
  },
  {
    "name":"Wet Conditions ○",
    "evalPoints":129
  },
  {
    "name":"Spring Runner ◎",
    "evalPoints":174
  },
  {
    "name":"Spring Runner ○",
    "evalPoints":129
  },
  {
    "name":"Summer Runner ◎",
    "evalPoints":174
  },
  {
    "name":"Summer Runner ○",
    "evalPoints":129
  },
  {
    "name":"Fall Runner ◎",
    "evalPoints":174
  },
  {
    "name":"Fall Runner ○",
    "evalPoints":129
  },
  {
    "name":"Winter Runner ◎",
    "evalPoints":174
  },
  {
    "name":"Winter Runner ○",
    "evalPoints":129
  },
  {
    "name":"Sunny Days ◎",
    "evalPoints":174
  },
  {
    "name":"Sunny Days ○",
    "evalPoints":129
  },
  {
    "name":"Cloudy Days ◎",
    "evalPoints":174
  },
  {
    "name":"Cloudy Days ○",
    "evalPoints":129
  },
  {
    "name":"Rainy Days ◎",
    "evalPoints":174
  },
  {
    "name":"Rainy Days ○",
    "evalPoints":129
  },
  {
    "name":"Snowy Days ◎",
    "evalPoints":174
  },
  {
    "name":"Snowy Days ○",
    "evalPoints":129
  },
  {
    "name":"Inner Post Proficiency ◎",
    "evalPoints":174
  },
  {
    "name":"Inner Post Proficiency ○",
    "evalPoints":129
  },
  {
    "name":"Outer Post Proficiency ◎",
    "evalPoints":174
  },
  {
    "name":"Outer Post Proficiency ○",
    "evalPoints":129
  },
  {
    "name":"Maverick ◎",
    "evalPoints":174
  },
  {
    "name":"Maverick ○",
    "evalPoints":129
  },
  {
    "name":"Competitive Spirit ◎",
    "evalPoints":174
  },
  {
    "name":"Competitive Spirit ○",
    "evalPoints":129
  },
  {
    "name":"Target in Sight ◎",
    "evalPoints":174
  },
  {
    "name":"Target in Sight ○",
    "evalPoints":129
  },
  {
    "name":"Long Shot ◎",
    "evalPoints":174
  },
  {
    "name":"Long Shot ○",
    "evalPoints":129
  },
  {
    "name":"Corner Adept ○",
    "evalPoints":217
  },
  {
    "name":"Corner Acceleration ○",
    "evalPoints":217
  },
  {
    "name":"Corner Recovery ○",
    "evalPoints":217
  },
  {
    "name":"Straightaway Adept",
    "evalPoints":217
  },
  {
    "name":"Straightaway Acceleration",
    "evalPoints":217
  },
  {
    "name":"Straightaway Recovery",
    "evalPoints":217
  },
  {
    "name":"Focus",
    "evalPoints":129
  },
  {
    "name":"Lay Low",
    "evalPoints":217
  },
  {
    "name":"Prudent Positioning",
    "evalPoints":129
  },
  {
    "name":"Ramp Up",
    "evalPoints":217
  },
  {
    "name":"Pace Strategy",
    "evalPoints":217
  },
  {
    "name":"Calm in a Crowd",
    "evalPoints":217
  },
  {
    "name":"Nimble Navigator",
    "evalPoints":174
  },
  {
    "name":"Go with the Flow",
    "evalPoints":129
  },
  {
    "name":"Homestretch Haste",
    "evalPoints":217
  },
  {
    "name":"Early Lead",
    "evalPoints":217
  },
  {
    "name":"Fast-Paced",
    "evalPoints":217
  },
  {
    "name":"Final Push",
    "evalPoints":217
  },
  {
    "name":"Stamina to Spare",
    "evalPoints":217
  },
  {
    "name":"Preferred Position",
    "evalPoints":217
  },
  {
    "name":"Prepared to Pass",
    "evalPoints":217
  },
  {
    "name":"Position Pilfer",
    "evalPoints":217
  },
  {
    "name":"Slick Surge",
    "evalPoints":217
  },
  {
    "name":"Outer Swell",
    "evalPoints":217
  },
  {
    "name":"Standing By",
    "evalPoints":217
  },
  {
    "name":"Masterful Gambit",
    "evalPoints":217
  },
  {
    "name":"Straightaway Spurt",
    "evalPoints":217
  },
  {
    "name":"Sprinting Gear",
    "evalPoints":217
  },
  {
    "name":"Wait-and-See",
    "evalPoints":217
  },
  {
    "name":"Gap Closer",
    "evalPoints":217
  },
  {
    "name":"Productive Plan",
    "evalPoints":217
  },
  {
    "name":"Watchful Eye",
    "evalPoints":217
  },
  {
    "name":"Updrafters",
    "evalPoints":217
  },
  {
    "name":"Rosy Outlook",
    "evalPoints":217
  },
  {
    "name":"Up-Tempo",
    "evalPoints":217
  },
  {
    "name":"Steadfast",
    "evalPoints":217
  },
  {
    "name":"Deep Breaths",
    "evalPoints":217
  },
  {
    "name":"Inside Scoop",
    "evalPoints":217
  },
  {
    "name":"Extra Tank",
    "evalPoints":217
  },
  {
    "name":"Trick (Front)",
    "evalPoints":217
  },
  {
    "name":"Trick (Rear)",
    "evalPoints":217
  },
  {
    "name":"Frenzied Front Runners",
    "evalPoints":174
  },
  {
    "name":"Frenzied Pace Chasers",
    "evalPoints":174
  },
  {
    "name":"Frenzied Late Surgers",
    "evalPoints":174
  },
  {
    "name":"Frenzied End Closers",
    "evalPoints":174
  },
  {
    "name":"Subdued Front Runners",
    "evalPoints":217
  },
  {
    "name":"Flustered Front Runners",
    "evalPoints":217
  },
  {
    "name":"Hesitant Front Runners",
    "evalPoints":217
  },
  {
    "name":"Subdued Pace Chasers",
    "evalPoints":217
  },
  {
    "name":"Flustered Pace Chasers",
    "evalPoints":217
  },
  {
    "name":"Hesitant Pace Chasers",
    "evalPoints":217
  },
  {
    "name":"Subdued Late Surgers",
    "evalPoints":217
  },
  {
    "name":"Flustered Late Surgers",
    "evalPoints":217
  },
  {
    "name":"Hesitant Late Surgers",
    "evalPoints":217
  },
  {
    "name":"Subdued End Closers",
    "evalPoints":217
  },
  {
    "name":"Flustered End Closers",
    "evalPoints":217
  },
  {
    "name":"Hesitant End Closers",
    "evalPoints":217
  },
  {
    "name":"Sprint Straightaways ◎",
    "evalPoints":262
  },
  {
    "name":"Sprint Straightaways ○",
    "evalPoints":217
  },
  {
    "name":"Sprint Corners ◎",
    "evalPoints":262
  },
  {
    "name":"Sprint Corners ○",
    "evalPoints":217
  },
  {
    "name":"Huge Lead",
    "evalPoints":262
  },
  {
    "name":"Countermeasure",
    "evalPoints":217
  },
  {
    "name":"Meticulous Measures",
    "evalPoints":174
  },
  {
    "name":"Intimidate",
    "evalPoints":262
  },
  {
    "name":"Stop Right There!",
    "evalPoints":262
  },
  {
    "name":"Mile Straightaways ◎",
    "evalPoints":262
  },
  {
    "name":"Mile Straightaways ○",
    "evalPoints":217
  },
  {
    "name":"Mile Corners ◎",
    "evalPoints":262
  },
  {
    "name":"Mile Corners ○",
    "evalPoints":217
  },
  {
    "name":"Shifting Gears",
    "evalPoints":217
  },
  {
    "name":"Acceleration",
    "evalPoints":217
  },
  {
    "name":"Unyielding Spirit",
    "evalPoints":217
  },
  {
    "name":"Speed Eater",
    "evalPoints":217
  },
  {
    "name":"Opening Gambit",
    "evalPoints":217
  },
  {
    "name":"Medium Straightaways ◎",
    "evalPoints":262
  },
  {
    "name":"Medium Straightaways ○",
    "evalPoints":217
  },
  {
    "name":"Medium Corners ◎",
    "evalPoints":262
  },
  {
    "name":"Medium Corners ○",
    "evalPoints":217
  },
  {
    "name":"Hawkeye",
    "evalPoints":129
  },
  {
    "name":"Thunderbolt Step",
    "evalPoints":174
  },
  {
    "name":"Soft Step",
    "evalPoints":217
  },
  {
    "name":"Tether",
    "evalPoints":217
  },
  {
    "name":"Murmur",
    "evalPoints":217
  },
  {
    "name":"Long Straightaways ◎",
    "evalPoints":262
  },
  {
    "name":"Long Straightaways ○",
    "evalPoints":217
  },
  {
    "name":"Long Corners ◎",
    "evalPoints":262
  },
  {
    "name":"Long Corners ○",
    "evalPoints":217
  },
  {
    "name":"Keeping the Lead",
    "evalPoints":217
  },
  {
    "name":"Passing Pro",
    "evalPoints":217
  },
  {
    "name":"Pressure",
    "evalPoints":217
  },
  {
    "name":"Stamina Eater",
    "evalPoints":217
  },
  {
    "name":"Smoke Screen",
    "evalPoints":129
  },
  {
    "name":"Front Runner Straightaways ◎",
    "evalPoints":262
  },
  {
    "name":"Front Runner Straightaways ○",
    "evalPoints":217
  },
  {
    "name":"Front Runner Corners ◎",
    "evalPoints":262
  },
  {
    "name":"Front Runner Corners ○",
    "evalPoints":217
  },
  {
    "name":"Dodging Danger",
    "evalPoints":129
  },
  {
    "name":"Leader's Pride",
    "evalPoints":217
  },
  {
    "name":"Moxie",
    "evalPoints":217
  },
  {
    "name":"Second Wind",
    "evalPoints":217
  },
  {
    "name":"Restart",
    "evalPoints":217
  },
  {
    "name":"Pace Chaser Straightaways ◎",
    "evalPoints":262
  },
  {
    "name":"Pace Chaser Straightaways ○",
    "evalPoints":217
  },
  {
    "name":"Pace Chaser Corners ◎",
    "evalPoints":262
  },
  {
    "name":"Pace Chaser Corners ○",
    "evalPoints":217
  },
  {
    "name":"Shrewd Step",
    "evalPoints":217
  },
  {
    "name":"Straight Descent",
    "evalPoints":217
  },
  {
    "name":"Hydrate",
    "evalPoints":217
  },
  {
    "name":"Tactical Tweak",
    "evalPoints":217
  },
  {
    "name":"Disorient",
    "evalPoints":85
  },
  {
    "name":"Late Surger Straightaways ◎",
    "evalPoints":262
  },
  {
    "name":"Late Surger Straightaways ○",
    "evalPoints":217
  },
  {
    "name":"Later Surger Corners ◎",
    "evalPoints":262
  },
  {
    "name":"Late Surger Corners ○",
    "evalPoints":217
  },
  {
    "name":"Fighter",
    "evalPoints":217
  },
  {
    "name":"1,500,000 CC",
    "evalPoints":217
  },
  {
    "name":"A Small Breather",
    "evalPoints":217
  },
  {
    "name":"Studious",
    "evalPoints":85
  },
  {
    "name":"Sharp Gaze",
    "evalPoints":217
  },
  {
    "name":"End Closer Straightaways ◎",
    "evalPoints":262
  },
  {
    "name":"End Closer Straightaways ○",
    "evalPoints":217
  },
  {
    "name":"End Closer Corners ◎",
    "evalPoints":262
  },
  {
    "name":"End Closer Corners ○",
    "evalPoints":217
  },
  {
    "name":"I Can See Right Through You",
    "evalPoints":85
  },
  {
    "name":"After-School Stroll",
    "evalPoints":217
  },
  {
    "name":"Levelheaded",
    "evalPoints":217
  },
  {
    "name":"Strategist",
    "evalPoints":85
  },
  {
    "name":"Intense Gaze",
    "evalPoints":217
  },
  {
    "name":"Front Runner Savvy ◎",
    "evalPoints":217
  },
  {
    "name":"Front Runner Savvy ○",
    "evalPoints":174
  },
  {
    "name":"Pace Chaser Savvy ◎",
    "evalPoints":217
  },
  {
    "name":"Pace Chaser Savvy ○",
    "evalPoints":174
  },
  {
    "name":"Late Surger Savvy ◎",
    "evalPoints":217
  },
  {
    "name":"Late Surger Savvy ○",
    "evalPoints":174
  },
  {
    "name":"End Closer Savvy ◎",
    "evalPoints":217
  },
  {
    "name":"End Closer Savvy ○",
    "evalPoints":174
  },
  {
    "name":"Lucky Seven",
    "evalPoints":174
  },
  {
    "name":"Triple 7s",
    "evalPoints":217
  },
  {
    "name":"Highlander",
    "evalPoints":217
  },
  {
    "name":"Uma Stan",
    "evalPoints":217
  },
  {
    "name":"Groundwork",
    "evalPoints":217
  },
  {
    "name":"Tail Held High",
    "evalPoints":217
  },
  {
    "name":"Shake It Out",
    "evalPoints":217
  },
  {
    "name":"Sympathy",
    "evalPoints":129
  },
  {
    "name":"Lone Wolf",
    "evalPoints":129
  },
  {
    "name":"Slipstream",
    "evalPoints":217
  },
  {
    "name":"Playtime's Over!",
    "evalPoints":217
  },
  {
    "name":"Top Pick",
    "evalPoints":217
  },
  {
    "name":"Professor of Curvature",
    "evalPoints":508
  },
  {
    "name":"Corner Connoisseur",
    "evalPoints":508
  },
  {
    "name":"Swinging Maestro",
    "evalPoints":508
  },
  {
    "name":"Beeline Burst",
    "evalPoints":508
  },
  {
    "name":"Rushing Gale!",
    "evalPoints":508
  },
  {
    "name":"Breath of Fresh Air",
    "evalPoints":508
  },
  {
    "name":"Concentration",
    "evalPoints":394
  },
  {
    "name":"Iron Will",
    "evalPoints":508
  },
  {
    "name":"Center Stage",
    "evalPoints":334
  },
  {
    "name":"It's On!",
    "evalPoints":508
  },
  {
    "name":"Indomitable",
    "evalPoints":508
  },
  {
    "name":"Unruffled",
    "evalPoints":508
  },
  {
    "name":"No Stopping Me!",
    "evalPoints":394
  },
  {
    "name":"Lane Legerdemain",
    "evalPoints":334
  },
  {
    "name":"In Body and Mind",
    "evalPoints":508
  },
  {
    "name":"Taking the Lead",
    "evalPoints":334
  },
  {
    "name":"Escape Artist",
    "evalPoints":508
  },
  {
    "name":"Unrestrained",
    "evalPoints":508
  },
  {
    "name":"Calm and Collected",
    "evalPoints":508
  },
  {
    "name":"Race Planner",
    "evalPoints":508
  },
  {
    "name":"Speed Star",
    "evalPoints":508
  },
  {
    "name":"Fast & Furious",
    "evalPoints":508
  },
  {
    "name":"On Your Left!",
    "evalPoints":508
  },
  {
    "name":"Rising Dragon",
    "evalPoints":508
  },
  {
    "name":"Sleeping Lion",
    "evalPoints":508
  },
  {
    "name":"Sturm und Drang",
    "evalPoints":508
  },
  {
    "name":"Encroaching Shadow",
    "evalPoints":508
  },
  {
    "name":"Turbo Sprint",
    "evalPoints":508
  },
  {
    "name":"Blinding Flash",
    "evalPoints":508
  },
  {
    "name":"Mile Maven",
    "evalPoints":508
  },
  {
    "name":"Keen Eye",
    "evalPoints":508
  },
  {
    "name":"Furious Feat",
    "evalPoints":508
  },
  {
    "name":"Trackblazer",
    "evalPoints":508
  },
  {
    "name":"Killer Tunes",
    "evalPoints":508
  },
  {
    "name":"Unyielding",
    "evalPoints":508
  },
  {
    "name":"Cooldown",
    "evalPoints":508
  },
  {
    "name":"Innate Experience",
    "evalPoints":508
  },
  {
    "name":"Adrenaline Rush",
    "evalPoints":508
  },
  {
    "name":"Staggering Lead",
    "evalPoints":508
  },
  {
    "name":"Plan X",
    "evalPoints":508
  },
  {
    "name":"Perfect Prep!",
    "evalPoints":394
  },
  {
    "name":"Adored by All",
    "evalPoints":508
  },
  {
    "name":"You've Got No Shot",
    "evalPoints":508
  },
  {
    "name":"Changing Gears",
    "evalPoints":508
  },
  {
    "name":"Step on the Gas!",
    "evalPoints":508
  },
  {
    "name":"Big-Sisterly",
    "evalPoints":334
  },
  {
    "name":"Greed for Speed",
    "evalPoints":461
  },
  {
    "name":"Battle Formation",
    "evalPoints":508
  },
  {
    "name":"Clairvoyance",
    "evalPoints":334
  },
  {
    "name":"Lightning Step",
    "evalPoints":394
  },
  {
    "name":"Miraculous Step",
    "evalPoints":508
  },
  {
    "name":"Dominator",
    "evalPoints":508
  },
  {
    "name":"Mystifying Murmur",
    "evalPoints":508
  },
  {
    "name":"Vanguard Spirit",
    "evalPoints":508
  },
  {
    "name":"Overwhelming Pressure",
    "evalPoints":508
  },
  {
    "name":"Stamina Siphon",
    "evalPoints":461
  },
  {
    "name":"Illusionist",
    "evalPoints":334
  },
  {
    "name":"Restless",
    "evalPoints":508
  },
  {
    "name":"Reignition",
    "evalPoints":508
  },
  {
    "name":"Technician",
    "evalPoints":334
  },
  {
    "name":"Determined Descent",
    "evalPoints":334
  },
  {
    "name":"Gourmand",
    "evalPoints":508
  },
  {
    "name":"Shatterproof",
    "evalPoints":334
  },
  {
    "name":"Dazzling Disorientation",
    "evalPoints":334
  },
  {
    "name":"Hard Worker",
    "evalPoints":334
  },
  {
    "name":"15,000,000 CC",
    "evalPoints":334
  },
  {
    "name":"Relax",
    "evalPoints":508
  },
  {
    "name":"The Bigger Picture",
    "evalPoints":334
  },
  {
    "name":"All-Seeing Eyes",
    "evalPoints":508
  },
  {
    "name":"The Coast Is Clear!",
    "evalPoints":334
  },
  {
    "name":"Go-Home Specialist",
    "evalPoints":508
  },
  {
    "name":"Serenity",
    "evalPoints":508
  },
  {
    "name":"Crusader",
    "evalPoints":334
  },
  {
    "name":"Petrifying Gaze",
    "evalPoints":508
  },
  {
    "name":"Super Lucky Seven",
    "evalPoints":334
  },
  {
    "name":"Trending in the Charts!",
    "evalPoints":508
  },
  {
    "name":"Right-Handed ×",
    "evalPoints":-129
  },
  {
    "name":"Left-Handed ×",
    "evalPoints":-129
  },
  {
    "name":"Tokyo Racecourse ×",
    "evalPoints":-129
  },
  {
    "name":"Nakayama Racecourse ×",
    "evalPoints":-129
  },
  {
    "name":"Hanshin Racecourse ×",
    "evalPoints":-129
  },
  {
    "name":"Kyoto Racecourse ×",
    "evalPoints":-129
  },
  {
    "name":"Chukyo Racecourse ×",
    "evalPoints":-129
  },
  {
    "name":"Sapporo Racecourse ×",
    "evalPoints":-129
  },
  {
    "name":"Hakodate Racecourse ×",
    "evalPoints":-129
  },
  {
    "name":"Fukushima Racecourse ×",
    "evalPoints":-129
  },
  {
    "name":"Niigata Racecourse ×",
    "evalPoints":-129
  },
  {
    "name":"Kokura Racecourse ×",
    "evalPoints":-129
  },
  {
    "name":"Oi Racecourse ×",
    "evalPoints":-129
  },
  {
    "name":"Standard Distance ×",
    "evalPoints":-129
  },
  {
    "name":"Non-Standard Distance ×",
    "evalPoints":-129
  },
  {
    "name":"Firm Conditions ×",
    "evalPoints":-129
  },
  {
    "name":"Wet Conditions ×",
    "evalPoints":-129
  },
  {
    "name":"Spring Runner ×",
    "evalPoints":-129
  },
  {
    "name":"Summer Runner ×",
    "evalPoints":-129
  },
  {
    "name":"Fall Runner ×",
    "evalPoints":-129
  },
  {
    "name":"Winter Runner ×",
    "evalPoints":-129
  },
  {
    "name":"Rainy Days ×",
    "evalPoints":-129
  },
  {
    "name":"Inner Post Averseness",
    "evalPoints":-129
  },
  {
    "name":"Outer Post Averseness",
    "evalPoints":-129
  },
  {
    "name":"Wallflower",
    "evalPoints":-129
  },
  {
    "name":"G1 Averseness",
    "evalPoints":-129
  },
  {
    "name":"Paddock Fright",
    "evalPoints":-129
  },
  {
    "name":"Corner Adept ×",
    "evalPoints":-262
  },
  {
    "name":"Corner Acceleration ×",
    "evalPoints":-262
  },
  {
    "name":"Corner Recovery ×",
    "evalPoints":-262
  },
  {
    "name":"Ramp Revulsion",
    "evalPoints":-262
  },
  {
    "name":"Packphobia",
    "evalPoints":-262
  },
  {
    "name":"Defeatist",
    "evalPoints":-262
  },
  {
    "name":"Reckless",
    "evalPoints":-262
  },
  {
    "name":"Gatekept",
    "evalPoints":-174
  },
  {
    "name":"Running Idle",
    "evalPoints":-262
  },
  {
    "name":"The View from the Lead Is Mine!",
    "evalPoints":340
  },
  {
    "name":"G00 1st. F∞;",
    "evalPoints":340
  },
  {
    "name":"Victoria por plancha ☆",
    "evalPoints":340
  },
  {
    "name":"Genius x Bakushin = Victory",
    "evalPoints":340
  },
  {
    "name":"Where There's a Will, There's a Way",
    "evalPoints":340
  },
  {
    "name":"U=ma2",
    "evalPoints":340
  },
  {
    "name":"∴win Q.E.D.",
    "evalPoints":340
  },
  {
    "name":"This Dance Is for Vittoria!",
    "evalPoints":340
  },
  {
    "name":"Let's Pump Some Iron!",
    "evalPoints":340
  },
  {
    "name":"Flashy☆Landing",
    "evalPoints":340
  },
  {
    "name":"Legacy of the Strong",
    "evalPoints":340
  },
  {
    "name":"SPARKLY☆STARDOM",
    "evalPoints":340
  },
  {
    "name":"Resplendent Red Ace",
    "evalPoints":340
  },
  {
    "name":"Blazing Pride",
    "evalPoints":340
  },
  {
    "name":"Cut and Drive!",
    "evalPoints":340
  },
  {
    "name":"I See Victory in My Future!",
    "evalPoints":340
  },
  {
    "name":"Nemesis",
    "evalPoints":340
  },
  {
    "name":"Anchors Aweigh!",
    "evalPoints":340
  },
  {
    "name":"Certain Victory",
    "evalPoints":340
  },
  {
    "name":"Prideful King",
    "evalPoints":340
  },
  {
    "name":"Warning Shot!",
    "evalPoints":240
  },
  {
    "name":"Shooting for Victory!",
    "evalPoints":340
  },
  {
    "name":"Shooting Star",
    "evalPoints":340
  },
  {
    "name":"1st Place Kiss☆",
    "evalPoints":240
  },
  {
    "name":"I Can Win Sometimes, Right?",
    "evalPoints":240
  },
  {
    "name":"Class Rep + Speed = Bakushin",
    "evalPoints":240
  },
  {
    "name":"Luck Be with Me!",
    "evalPoints":240
  },
  {
    "name":"Xceleration",
    "evalPoints":240
  },
  {
    "name":"Super-Duper Stoked",
    "evalPoints":240
  },
  {
    "name":"Sky-High Teio Step",
    "evalPoints":340
  },
  {
    "name":"Clear Heart",
    "evalPoints":240
  },
  {
    "name":"Pure Heart",
    "evalPoints":340
  },
  {
    "name":"Our Ticket to Win!",
    "evalPoints":340
  },
  {
    "name":"V Is for Victory!",
    "evalPoints":240
  },
  {
    "name":"#LookatCurren",
    "evalPoints":340
  },
  {
    "name":"Just a Little Farther!",
    "evalPoints":340
  },
  {
    "name":"Super-Duper Climax",
    "evalPoints":340
  },
  {
    "name":"Empress's Pride",
    "evalPoints":240
  },
  {
    "name":"Feel the Burn!",
    "evalPoints":240
  },
  {
    "name":"Shadow Break",
    "evalPoints":340
  },
  {
    "name":"Call Me King",
    "evalPoints":240
  },
  {
    "name":"Focused Mind",
    "evalPoints":240
  },
  {
    "name":"Red Shift\/LP1211-M",
    "evalPoints":340
  },
  {
    "name":"Red Ace",
    "evalPoints":240
  },
  {
    "name":"Behold Thine Emperor's Divine Might",
    "evalPoints":340
  },
  {
    "name":"Triumphant Pulse",
    "evalPoints":340
  },
  {
    "name":"Introduction to Physiology",
    "evalPoints":240
  },
  {
    "name":"Corazón ☆ Ardiente",
    "evalPoints":240
  },
  {
    "name":"The Duty of Dignity Calls",
    "evalPoints":340
  },
  {
    "name":"Blue Rose Closer",
    "evalPoints":340
  },
  {
    "name":"Shooting Star",
    "evalPoints":180
  },
  {
    "name":"The View from the Lead Is Mine!",
    "evalPoints":180
  },
  {
    "name":"Sky-High Teio Step",
    "evalPoints":180
  },
  {
    "name":"Red Shift\/LP1211-M",
    "evalPoints":180
  },
  {
    "name":"Triumphant Pulse",
    "evalPoints":180
  },
  {
    "name":"Anchors Aweigh!",
    "evalPoints":180
  },
  {
    "name":"Cut and Drive!",
    "evalPoints":180
  },
  {
    "name":"Resplendent Red Ace",
    "evalPoints":180
  },
  {
    "name":"Shooting for Victory!",
    "evalPoints":180
  },
  {
    "name":"Where There's a Will, There's a Way",
    "evalPoints":180
  },
  {
    "name":"The Duty of Dignity Calls",
    "evalPoints":180
  },
  {
    "name":"Victoria por plancha ☆",
    "evalPoints":180
  },
  {
    "name":"This Dance Is for Vittoria!",
    "evalPoints":180
  },
  {
    "name":"Shadow Break",
    "evalPoints":180
  },
  {
    "name":"Behold Thine Emperor's Divine Might",
    "evalPoints":180
  },
  {
    "name":"Blazing Pride",
    "evalPoints":180
  },
  {
    "name":"∴win Q.E.D.",
    "evalPoints":180
  },
  {
    "name":"Flashy☆Landing",
    "evalPoints":180
  },
  {
    "name":"G00 1st. F∞;",
    "evalPoints":180
  },
  {
    "name":"Let's Pump Some Iron!",
    "evalPoints":180
  },
  {
    "name":"Blue Rose Closer",
    "evalPoints":180
  },
  {
    "name":"U=ma2",
    "evalPoints":180
  },
  {
    "name":"Our Ticket to Win!",
    "evalPoints":180
  },
  {
    "name":"#LookatCurren",
    "evalPoints":180
  },
  {
    "name":"Genius x Bakushin = Victory",
    "evalPoints":180
  },
  {
    "name":"Pure Heart",
    "evalPoints":180
  },
  {
    "name":"SPARKLY☆STARDOM",
    "evalPoints":180
  },
  {
    "name":"Nemesis",
    "evalPoints":180
  },
  {
    "name":"Super-Duper Climax",
    "evalPoints":180
  },
  {
    "name":"I See Victory in My Future!",
    "evalPoints":180
  },
  {
    "name":"Just a Little Farther!",
    "evalPoints":180
  },
  {
    "name":"Prideful King",
    "evalPoints":180
  },
  {
    "name":"Certain Victory",
    "evalPoints":180
  },
  {
    "name":"Legacy of the Strong",
    "evalPoints":180
  }
];

// Global variables
let selectedSkills = [];

// DOM elements
const skillSelect = document.getElementById("skillSelect");
const skillInput = document.getElementById("skillInput");
const selectedSkillsDiv = document.getElementById("selectedSkills");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const loadingScreen = document.getElementById("loading-screen");

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen after a short delay
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);

    // Initialize components
    initializeNavigation();
    initializeSkills();
    initializeStatInputs();
    updateStatScores();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });
});

// Navigation functionality
function initializeNavigation() {
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
}

// Skills functionality
function initializeSkills() {
    renderSkillOptions();
    skillInput.addEventListener("input", renderSkillOptions);
}

function renderSkillOptions() {
    skillSelect.innerHTML = "";
    const filter = skillInput.value.toLowerCase();
    const filteredSkills = skills.filter(s => s.name.toLowerCase().includes(filter));
    
    filteredSkills.forEach((skill, index) => {
        const option = document.createElement("option");
        option.value = skills.indexOf(skill);
        option.textContent = `${skill.name} (${skill.evalPoints > 0 ? '+' : ''}${skill.evalPoints})`;
        skillSelect.appendChild(option);
    });
}

function addSkill() {
    const selectedIndex = skillSelect.value;
    if (selectedIndex !== "" && selectedIndex !== null) {
        const skill = skills[selectedIndex];
        
        // Check if skill is already selected
        const isAlreadySelected = selectedSkills.some(s => s.name === skill.name);
        if (!isAlreadySelected) {
            selectedSkills.push(skill);
            updateSelectedSkills();
            
            // Add animation effect
            setTimeout(() => {
                const skillTags = selectedSkillsDiv.querySelectorAll('.skill-tag');
                const lastTag = skillTags[skillTags.length - 1];
                if (lastTag) {
                    lastTag.style.animation = 'slideIn 0.3s ease-out';
                }
            }, 10);
        }
    }
}

function updateSelectedSkills() {
    selectedSkillsDiv.innerHTML = "";
    
    if (selectedSkills.length === 0) {
        selectedSkillsDiv.innerHTML = '<div style="color: var(--gray-500); font-style: italic; padding: var(--spacing-md);">No skills selected</div>';
        return;
    }
    
    selectedSkills.forEach((skill, index) => {
        const skillTag = document.createElement("div");
        skillTag.className = "skill-tag";
        skillTag.innerHTML = `
            ${skill.name} (${skill.evalPoints > 0 ? '+' : ''}${skill.evalPoints})
            <span class="remove">×</span>
        `;
        skillTag.onclick = () => removeSkill(index);
        selectedSkillsDiv.appendChild(skillTag);
    });
}

function removeSkill(index) {
    selectedSkills.splice(index, 1);
    updateSelectedSkills();
}

// Stats functionality
function initializeStatInputs() {
    const statInputs = ['speed', 'stamina', 'power', 'guts', 'wisdom'];
    statInputs.forEach(stat => {
        const input = document.getElementById(stat);
        input.addEventListener('input', updateStatScores);
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    });
}

function statToScore(stat) {
    const blockSize = 50;
    const multipliers = [
        0.5, 0.8, 1, 1.3, 1.6, 1.8, 2.1, 2.4, 2.6, 2.8,
        2.9, 3, 3.1, 3.3, 3.4, 3.5, 3.9, 4.1, 4.2, 4.3,
        5.2, 5.5, 6.6, 6.8, 6.9
    ];
    
    let blocks = Math.floor(stat / blockSize);
    let remainder = stat % blockSize;
    let blockSum = 0;
    
    for (let i = 0; i < blocks && i < multipliers.length; i++) {
        blockSum += multipliers[i] * blockSize;
    }
    
    let remainderSum = 0;
    if (blocks < multipliers.length) {
        remainderSum = multipliers[blocks] * (remainder + 1);
    }
    
    return Math.floor(blockSum + remainderSum);
}

function updateStatScores() {
    const stats = ['speed', 'stamina', 'power', 'guts', 'wisdom'];
    stats.forEach(stat => {
        const input = document.getElementById(stat);
        const scoreElement = document.getElementById(stat + 'Score');
        const value = parseInt(input.value) || 0;
        const score = statToScore(value);
        
        scoreElement.textContent = score.toLocaleString();
        
        // Add visual feedback for score changes
        scoreElement.style.color = 'var(--primary-color)';
        scoreElement.style.fontWeight = '700';
    });
}

function calculateUmaScore(uniqueSkillLvl, umaStarLvl) {
    if (umaStarLvl === "1★" || umaStarLvl === "2★") {
        return uniqueSkillLvl * 120;
    }
    if (umaStarLvl === "3★" || umaStarLvl === "4★" || umaStarLvl === "5★") {
        return uniqueSkillLvl * 170;
    }
    return 0;
}

function getRank(score) {
    if (score <= 299) return "G";
    else if (score <= 599) return "G+";
    else if (score <= 899) return "F";
    else if (score <= 1299) return "F+";
    else if (score <= 1799) return "E";
    else if (score <= 2299) return "E+";
    else if (score <= 2899) return "D";
    else if (score <= 3499) return "D+";
    else if (score <= 4899) return "C";
    else if (score <= 6499) return "C+";
    else if (score <= 8199) return "B";
    else if (score <= 8999) return "B+";
    else if (score <= 12099) return "A";
    else if (score <= 14499) return "A+";
    else if (score <= 15899) return "S";
    else if (score <= 17499) return "S+";
    else if (score >= 20000) return "SS";
    return "-";
}

function nextRankScore(score) {
    const thresholds = [300, 600, 900, 1300, 1800, 2300, 2900, 3500, 4900, 6500, 8200, 10000, 12100, 14500, 15900, 17500, 20000];
    for (let threshold of thresholds) {
        if (score < threshold) {
            return threshold - score;
        }
    }
    return 0;
}

function getRankColor(rank) {
    const rankColors = {
        'SS': '#ff6b6b',
        'S+': '#ff8e53',
        'S': '#ff9f43',
        'A+': '#feca57',
        'A': '#48dbfb',
        'B+': '#0abde3',
        'B': '#006ba6',
        'C+': '#5f27cd',
        'C': '#341f97',
        'D+': '#00d2d3',
        'D': '#01a3a4',
        'E+': '#2ed573',
        'E': '#1e90ff',
        'F+': '#ffa502',
        'F': '#ff6348',
        'G+': '#ff4757',
        'G': '#c44569'
    };
    return rankColors[rank] || 'var(--gray-500)';
}

function calculateScore() {
    // Get stat scores
    const speed = parseInt(document.getElementById('speed').value) || 0;
    const stamina = parseInt(document.getElementById('stamina').value) || 0;
    const power = parseInt(document.getElementById('power').value) || 0;
    const guts = parseInt(document.getElementById('guts').value) || 0;
    const wisdom = parseInt(document.getElementById('wisdom').value) || 0;
    
    const baseScore = statToScore(speed) + statToScore(stamina) + statToScore(power) + statToScore(guts) + statToScore(wisdom);
    
    // Get skill score
    const skillScore = selectedSkills.reduce((total, skill) => total + skill.evalPoints, 0);
    
    // Get UMA score
    const uniqueSkillLvl = parseInt(document.getElementById("uniqueSkill").value);
    const umaStarLvl = document.getElementById("umaStar").value;
    const umaScore = calculateUmaScore(uniqueSkillLvl, umaStarLvl);
    
    // Calculate total
    const totalScore = baseScore + skillScore + umaScore;
    const rank = getRank(totalScore);
    const nextRank = nextRankScore(totalScore);
    const rankColor = getRankColor(rank);
    
    // Display results with animation
    const resultDiv = document.getElementById("result");
    resultDiv.style.opacity = '0';
    resultDiv.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        resultDiv.innerHTML = `
            <div class="result-content">
                <div class="result-score" style="color: ${rankColor};">
                    ${totalScore.toLocaleString()}
                </div>
                <div class="result-rank" style="color: ${rankColor};">
                    Rank: ${rank}
                </div>
                <div class="result-breakdown" style="margin: var(--spacing-lg) 0; padding: var(--spacing-md); background: var(--white); border-radius: var(--radius-md); border: 1px solid var(--gray-200);">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-sm); font-size: var(--font-size-sm);">
                        <div>Base Stats: <strong>${baseScore.toLocaleString()}</strong></div>
                        <div>Skills: <strong>${skillScore > 0 ? '+' : ''}${skillScore.toLocaleString()}</strong></div>
                        <div>UMA Bonus: <strong>+${umaScore.toLocaleString()}</strong></div>
                        <div>Total: <strong style="color: ${rankColor};">${totalScore.toLocaleString()}</strong></div>
                    </div>
                </div>
                ${nextRank > 0 ? `<div class="result-next">Need ${nextRank.toLocaleString()} more points for next rank</div>` : '<div class="result-next">Maximum rank achieved!</div>'}
            </div>
        `;
        
        resultDiv.style.transition = 'all 0.5s ease-out';
        resultDiv.style.opacity = '1';
        resultDiv.style.transform = 'translateY(0)';
    }, 100);
}

// Add CSS animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .calculator-card {
        animation: fadeInUp 0.6s ease-out;
    }
    
    .calculator-card:nth-child(2) {
        animation-delay: 0.1s;
    }
    
    .calculator-card:nth-child(3) {
        animation-delay: 0.2s;
    }
    
    .calculator-card:nth-child(4) {
        animation-delay: 0.3s;
    }
`;
document.head.appendChild(style);