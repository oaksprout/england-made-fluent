import type { TimelineEntry } from "@/lib/types";

/**
 * A comparative historical timeline, sorted by startYear. Each entry keeps
 * six aspects deliberately separate (institutional structure, development
 * environment, coaching methodology, senior tactics, interpretation and
 * measurable evidence) so that readers can see which claims are documented
 * fact and which are analytical readings — see docs/RESEARCH_STANDARDS.md.
 */
export const timelineEntries: TimelineEntry[] = [
  {
    id: "hungary-golden-team",
    title: "Hungary's Golden Team and the 1953 Wembley result",
    country: "Hungary",
    startYear: 1950,
    endYear: 1956,
    category: "tactical",
    summary:
      "Hungary's national team of the early 1950s, built around a deep-lying centre-forward role and unusually fluid positional interchange, defeated England 6-3 at Wembley in 1953 — England's first home defeat to a team from outside the British Isles — and is widely cited as an early modern example of collective tactical sophistication overturning an established footballing power.",
    institutionalStructure:
      "Hungarian football in this period operated under state-organised sporting structures, with the national team effectively centred on Honvéd, the army club, allowing an unusual degree of shared training time together.",
    developmentEnvironment:
      "Players trained together with high frequency by international-football standards of the era, owing to their shared club and state-sponsored setting.",
    coachingMethodology:
      "Associated with coach Gusztáv Sebes's promotion of positional interchange and a deep-lying centre-forward (Nándor Hidegkuti) that pulled markers out of position.",
    seniorTactics:
      "A fluid W-M variant with players regularly interchanging position, contrasted with the more rigid positional play then standard in English football.",
    interpretation:
      "Widely read as an early demonstration that shared tactical understanding and positional fluidity could overturn a more individually reputed but less coordinated opponent; this reading should be treated as a historical interpretation rather than a settled causal account of the result.",
    measurableEvidence:
      "The 6-3 scoreline and 1953 date are well documented; specific tactical claims (deep-lying forward role, degree of shared training time) should be verified against primary football-history sources before being treated as precise fact.",
    contested: true,
    sourceIds: ["hungary-1950s-historical", "inverting-the-pyramid"],
  },
  {
    id: "west-german-institutional-continuity",
    title: "West German football's institutional continuity, 1954-1990",
    country: "West Germany / Germany",
    countryId: "germany",
    startYear: 1954,
    endYear: 1990,
    category: "institutional",
    summary:
      "Between the 1954 World Cup win and reunification in 1990, West Germany reached seven World Cup or European Championship finals, a record of sustained tournament competitiveness commonly attributed to consistent footballing institutions even before the more sweeping post-2000 reform.",
    institutionalStructure:
      "The DFB maintained relatively stable governance and licensing structures across this period, alongside a strong Bundesliga (founded 1963) that professionalised German club football.",
    developmentEnvironment:
      "Club academy provision was less formally standardised than after the post-2000 reform, but a broadly consistent domestic football culture is credited with sustaining a deep player pool.",
    coachingMethodology:
      "German coach education in this period placed a consistent emphasis on physical conditioning, organisation and tactical discipline, without a single named reform programme comparable to the post-2000 changes.",
    seniorTactics:
      "Varied across eras from the counter-attacking approach of 1954 to more possession-oriented sides in the 1970s and 1980s, generally noted for defensive organisation and game management.",
    interpretation:
      "This period is sometimes cited to argue that Germany's footballing strength did not begin with the post-2000 reform but was a pre-existing institutional asset that the reform then modernised for a changed footballing landscape — a reading that should be treated as one plausible account among others.",
    measurableEvidence:
      "The sequence of West German tournament finals (1954, 1966, 1972, 1974, 1976, 1980, 1982, 1986, 1990) is well documented; the causal role of specific institutional features is less firmly established and should be checked against football-history sources.",
    contested: true,
    sourceIds: ["dfb-post-2000-reform"],
  },
  {
    id: "brazil-1958-1970",
    title:
      "Brazil's attacking eras and the balance of expression and structure",
    country: "Brazil",
    countryId: "brazil",
    startYear: 1958,
    endYear: 1970,
    category: "tactical",
    summary:
      "Brazil won three World Cups in this period, with the 1970 team in particular remembered as one of the greatest attacking sides in football history — a side historians increasingly describe as tactically organised as well as expressively gifted.",
    institutionalStructure:
      "Brazilian football federation structures in this period were less centrally coordinated than, for example, Hungary's, with player development occurring across a wide range of club and informal settings.",
    developmentEnvironment:
      "A combination of formal club structures and strong informal/street-football traditions is commonly cited as shaping Brazilian technical development in this period.",
    coachingMethodology:
      "Coaching approaches varied by club and generation; the 1970 national team under Mário Zagallo combined attacking freedom for individual players with clear defensive assignments.",
    seniorTactics:
      "Fluid, technically expressive attacking play combined, particularly in 1970, with organised defensive cover and positional discipline.",
    interpretation:
      "The popular memory of this era as pure attacking flair understates the tactical organisation historians now attribute to the 1970 side specifically; treating 'Brazilian football' as synonymous with unstructured expression is a simplification this site avoids.",
    measurableEvidence:
      "World Cup wins in 1958, 1962 and 1970 are well documented; specific claims about tactical structure and defensive organisation should be checked against tactical-history literature rather than popular memory.",
    contested: true,
    sourceIds: ["brazil-development-structures", "inverting-the-pyramid"],
  },
  {
    id: "italy-catenaccio",
    title: "Catenaccio and organised defensive football in Italy",
    country: "Italy",
    countryId: "italy",
    startYear: 1960,
    endYear: 1976,
    category: "tactical",
    summary:
      "Italian club and national teams developed and refined highly organised man-marking defensive systems in this period, associated with the term catenaccio, contributing to World Cup final appearances in 1970 and a European Championship win in 1968.",
    institutionalStructure:
      "Serie A clubs, particularly Inter Milan under Helenio Herrera, were central to developing and popularising these defensive systems, which then fed into national-team selection and tactics.",
    developmentEnvironment:
      "Club-level coaching in this period placed strong emphasis on defensive discipline and positional responsibility from a young age.",
    coachingMethodology:
      "Emphasis on man-marking, a designated sweeper (libero) role, and disciplined defensive shape, taught as a specific coaching discipline rather than treated as an absence of attacking ambition.",
    seniorTactics:
      "Organised man-marking defence with rapid counter-attacking, prioritising defensive solidity as the platform for winning matches.",
    interpretation:
      "Frequently reduced in popular discussion to 'defensive football'; tactical historians generally argue the sophistication of the organisation itself, not merely defensive intent, is the more accurate characterisation.",
    measurableEvidence:
      "Italy's 1968 European Championship win and 1970 World Cup final appearance are well documented; specific claims about marking systems and the sweeper role should be checked against tactical-history sources.",
    contested: true,
    sourceIds: ["italy-tactical-culture", "figc-coverciano"],
  },
  {
    id: "dutch-total-football",
    title: "Total Football at Ajax and the Netherlands",
    country: "Netherlands",
    countryId: "netherlands",
    startYear: 1965,
    endYear: 1978,
    category: "tactical",
    summary:
      "Rinus Michels' Ajax, and the Netherlands national team featuring Johan Cruyff, developed Total Football — a highly influential system of positional fluidity and coordinated pressing — reaching consecutive World Cup finals in 1974 and 1978 without winning either.",
    institutionalStructure:
      "Centred on Ajax as a club, with the Dutch federation's coach education later formalising and disseminating related principles more broadly.",
    developmentEnvironment:
      "Ajax's youth and first-team environment in this period is credited with instilling a shared positional and pressing vocabulary among a core group of Dutch internationals.",
    coachingMethodology:
      "Associated with Rinus Michels' emphasis on space, pressing and positional interchangeability, later carried into coaching thought elsewhere in Europe including by Cruyff himself at Barcelona.",
    seniorTactics:
      "High pressing, offside-trap defending, and fluid positional rotation in which outfield players were expected to competently fill several different positions.",
    interpretation:
      "One of the clearest examples in football history of a tactical idea achieving lasting global influence without the team that developed it winning the sport's biggest prize — evidence that tactical coherence and tournament-winning capability are related but distinct.",
    measurableEvidence:
      "The 1974 and 1978 World Cup final defeats are well documented; the direct lineage from Michels/Cruyff's ideas to later possession-based football (including via Cruyff's Barcelona tenure) is widely asserted in tactical-history literature and should be cited to that literature rather than presented as self-evident.",
    sourceIds: ["netherlands-total-football", "knvb-philosophy"],
  },
  {
    id: "french-academy-reform",
    title: "France's national academy concept and INF Clairefontaine",
    country: "France",
    countryId: "france",
    startYear: 1972,
    endYear: 1998,
    category: "reform",
    summary:
      "France began developing a national approach to elite youth coaching from the early 1970s, culminating in the 1988 opening of INF Clairefontaine, a development frequently linked to the 1998 World Cup win, though the strength of that causal link is debated among historians.",
    institutionalStructure:
      "The FFF established INF Clairefontaine as a national training centre in 1988, complementing an existing and growing network of club and regional academies.",
    developmentEnvironment:
      "A combination of federation-run centres and a dense, geographically wide network of club academies, particularly strong in the Paris region, is credited with producing a large and diverse talent pool.",
    coachingMethodology:
      "Emphasis on technical fundamentals and broad athletic development at Clairefontaine, alongside varied club-level coaching approaches feeding into the national set-up.",
    seniorTactics:
      "The 1998 World Cup-winning team built its approach around midfield control and defensive organisation rather than a single distinctive attacking philosophy.",
    interpretation:
      "Clairefontaine's specific causal contribution to 1998 is genuinely disputed: some historians credit it directly, others point to the wider club academy network and broader demographic factors as equally or more important. This site presents the reform as a plausible contributing factor, not a proven sole cause.",
    measurableEvidence:
      "The 1988 opening date of Clairefontaine and the 1998 World Cup win are well documented; the specific causal weight of the academy versus other factors is not something this site treats as settled.",
    contested: true,
    sourceIds: ["fff-clairefontaine", "france-academy-system"],
  },
  {
    id: "argentina-1978-1986",
    title: "Argentina's earlier World Cup wins",
    country: "Argentina",
    countryId: "argentina",
    startYear: 1978,
    endYear: 1986,
    category: "tactical",
    summary:
      "Argentina won the World Cup as hosts in 1978 and again in 1986, the latter campaign built substantially around Diego Maradona's individual performances, under football-economic conditions very different from the modern game.",
    institutionalStructure:
      "AFA governance and Argentine club football in this period operated with less overlap with European leagues than in the modern era, with most of the 1978 squad based domestically.",
    developmentEnvironment:
      "Argentine club academies in this period were credited with developing technically excellent attacking players within a strong domestic football culture.",
    coachingMethodology:
      "Coaching approaches were shaped by an emerging Argentine tactical lineage that would later influence figures such as Marcelo Bielsa, though this lineage is more thoroughly documented for later periods than for 1978-1986 specifically.",
    seniorTactics:
      "The 1978 team relied on organised collective play under host-nation conditions; the 1986 team was more explicitly built around maximising Maradona's individual influence within a supporting collective structure.",
    interpretation:
      "These wins are frequently invoked in Argentine football culture as evidence of enduring national tactical or temperamental qualities; given the very different footballing conditions of the era, their direct relevance to the modern club-development landscape should be treated cautiously.",
    measurableEvidence:
      "The 1978 and 1986 World Cup wins are well documented; specific tactical and developmental claims for this period require further sourcing beyond what is asserted here.",
    contested: true,
    sourceIds: ["afa-coaching-structures"],
  },
  {
    id: "sacchi-zonal-pressing",
    title:
      "Sacchi's zonal pressing and its influence on Italian and European tactics",
    country: "Italy",
    countryId: "italy",
    startYear: 1987,
    endYear: 1994,
    category: "tactical",
    summary:
      "Arrigo Sacchi's Milan popularised a high-pressing, zonally organised defensive system that marked a significant departure from catenaccio-era man-marking, influencing both Italian and wider European tactical thinking through to Italy's run to the 1994 World Cup final.",
    institutionalStructure:
      "Developed at club level (Milan) rather than through federation policy, later feeding into Italian national-team tactical thinking and coach education discourse.",
    developmentEnvironment:
      "Concentrated in one club's coaching setup rather than reflecting a broader Italian development-system change at the time.",
    coachingMethodology:
      "Emphasis on collective zonal positioning, coordinated pressing triggers and compact defensive lines, a significant methodological departure from individual man-marking.",
    seniorTactics:
      "High-pressing, zonally compact defensive organisation combined with rapid transitions, influencing the Italy team that reached the 1994 World Cup final.",
    interpretation:
      "Widely credited by tactical historians as one of the most influential single coaching innovations in the sport's history; the extent to which it directly reshaped Italian national-team tactics, versus European tactical thought more broadly, is worth distinguishing carefully.",
    measurableEvidence:
      "Milan's European Cup wins in this period and Italy's 1994 World Cup final appearance are well documented; the direct tactical lineage from Sacchi's Milan to the 1994 national team should be checked against specific tactical-history sources.",
    sourceIds: ["italy-tactical-culture"],
  },
  {
    id: "germany-post-2000-reform",
    title: "Germany's post-2000 reform to the 2014 World Cup win",
    country: "Germany",
    countryId: "germany",
    startYear: 2000,
    endYear: 2014,
    category: "reform",
    summary:
      "Following an early exit at Euro 2000, the DFB introduced a national network of regional talent centres, tightened Bundesliga academy licensing requirements and revised coach education; German tournament performances steadily improved across the following decade, culminating in the 2014 World Cup win.",
    institutionalStructure:
      "DFB-led reform combined with Bundesliga licensing changes requiring clubs to run federation-standard academies, aligning league structure and federation policy more closely than in most other national cases studied here.",
    developmentEnvironment:
      "A significantly expanded network of coached young players resulted from the regional talent centre programme and tightened club academy requirements.",
    coachingMethodology:
      "Formalised and raised coaching qualification standards, with closer coordination between the DFB and club academy staff than existed before the reform.",
    seniorTactics:
      "The 2014 World Cup-winning team played a possession-based approach with a fluid front line, differing from earlier and later German tactical approaches.",
    interpretation:
      "Widely regarded as the clearest available precedent for a federation converting a specific tournament failure into sustained, multi-year institutional reform with a measurable outcome; the roughly fourteen-year gap between reform and title win is itself evidence this kind of change is not fast.",
    measurableEvidence:
      "The Euro 2000 group-stage exit and the 2014 World Cup win are well documented; the scale of the talent-centre network and specific academy licensing changes should be verified against DFB documentation before citing precise figures.",
    sourceIds: ["dfb-post-2000-reform", "germany-talent-programme"],
  },
  {
    id: "spain-2008-2012",
    title:
      "Spain's rise from tournament underachievement to sustained dominance",
    country: "Spain",
    countryId: "spain",
    startYear: 2008,
    endYear: 2012,
    category: "tactical",
    summary:
      "After decades of tournament underachievement despite consistently strong individual talent, Spain won Euro 2008, the 2010 World Cup and Euro 2012 — the first team to win three consecutive major men's tournaments — built around a shared positional and possession-based approach traced substantially to Barcelona's academy methodology.",
    institutionalStructure:
      "The RFEF's coach-education approach and the influence of leading club academies, particularly Barcelona's La Masia, are both cited as contributing institutional factors.",
    developmentEnvironment:
      "A critical mass of the senior squad shared closely related positional and technical development, above all through La Masia, though other Spanish academies also contributed players educated in broadly compatible principles.",
    coachingMethodology:
      "Emphasis on patient possession, positional rotation, pressing to regain the ball quickly, and comfort under pressure in tight areas.",
    seniorTactics:
      "Sustained possession, positional discipline and coordinated pressing, deployed with some personnel and tactical variation across all three tournament wins.",
    interpretation:
      "The most commonly cited example of a shared national footballing language converting individual talent into sustained collective control — though the decades of pre-2008 underachievement with similarly talented players complicate any simple 'shared model causes results' account.",
    measurableEvidence:
      "The 2008, 2010 and 2012 tournament wins are well documented; the specific causal contribution of shared academy methodology, as opposed to a particularly strong individual playing generation, is a matter of ongoing analytical debate rather than settled fact.",
    contested: true,
    sourceIds: ["spain-la-masia-context", "rfef-development-method"],
  },
  {
    id: "st-georges-park-england-dna",
    title: "St George's Park and the England DNA framework",
    country: "England",
    startYear: 2012,
    endYear: 2014,
    category: "institutional",
    summary:
      "The FA opened St George's Park, its national football centre, in 2012, and launched the England DNA framework in December 2014, setting out an intended common approach to player development and playing style across England age-group teams.",
    institutionalStructure:
      "The FA developed St George's Park as a single national site co-locating coach education and England age-group teams, alongside the England DNA framework document.",
    developmentEnvironment:
      "Intended to give England's various age-group teams and coaching staff a shared physical base and reference framework, distinct from the club-based development that produces most England-qualified players' formative football education.",
    coachingMethodology:
      "England DNA set out stated principles across areas including playing style, player development priorities and coaching approach, intended to run through the England age-group pathway.",
    seniorTactics:
      "England DNA was framed as a development and coach-education framework rather than a fixed senior first-team formation or system.",
    interpretation:
      "This site's central open question: England DNA's existence and stated aims are documented, but public evidence of its consistent effect on senior-team collective behaviour is much harder to establish, and this site does not assume the framework has achieved its stated aims. See the England DNA section for the fuller audit.",
    measurableEvidence:
      "The 2012 opening of St George's Park and the 2014 England DNA launch are documented FA actions; evidence of their measurable effect on senior-team tactical fluency is not established here and is treated as an open question, not a settled outcome.",
    contested: true,
    sourceIds: ["fa-st-georges-park", "fa-england-dna-launch"],
  },
  {
    id: "germany-post-2014-stagnation",
    title: "Questions over Germany's reform structure after 2014",
    country: "Germany",
    countryId: "germany",
    startYear: 2014,
    endYear: 2022,
    category: "reform",
    summary:
      "Following the 2014 World Cup win, Germany was eliminated in the group stage of the 2018 and 2022 World Cups, prompting public debate among German coaches, officials and commentators about whether the post-2000 reform structure had itself become outdated and needed renewal.",
    institutionalStructure:
      "The same DFB-led talent-centre and academy-licensing structure introduced after 2000 remained largely in place through this period.",
    developmentEnvironment:
      "Critics argued the talent-centre model, designed around early-2000s footballing conditions, had not kept pace with changes in the professional game.",
    coachingMethodology:
      "Debate centred on whether coach education and player development methodology needed updating rather than a wholesale institutional rebuild.",
    seniorTactics:
      "German senior-team tactical approaches in this period were less settled and less clearly distinctive than the 2014 side's, contributing to the broader debate.",
    interpretation:
      "Read here as an important caution rather than a contradiction of the earlier reform's value: institutional reform appears to require periodic renewal rather than being a one-off fix, which is directly relevant to how this site frames its own proposals as needing ongoing evaluation.",
    measurableEvidence:
      "The 2018 and 2022 group-stage exits are well documented; the specific causal link to reform-structure ageing, as opposed to other factors, is a matter of debate among German football commentators and should be attributed as such.",
    contested: true,
    sourceIds: ["germany-talent-programme"],
  },
  {
    id: "hybrid-pragmatism-2016-2024",
    title: "A pattern of tactically hybrid tournament winners, 2016-2024",
    country: "Multiple",
    startYear: 2016,
    endYear: 2024,
    category: "hybrid",
    summary:
      "Recent major tournament winners — Portugal (Euro 2016), France (2018 World Cup), Italy (Euro 2020), Argentina (2022 World Cup) and Spain (Euro 2024) — have shown varied and often situationally pragmatic tactical approaches rather than converging on one dominant style, consistent with this site's argument that no single tactical ideology is a precondition for tournament success.",
    institutionalStructure:
      "No shared institutional structure links these federations; the pattern observed is in tactical outcomes across independent national systems, not a common cause.",
    developmentEnvironment:
      "Each of these teams' core players were developed within different, often contrasting, club and academy environments, again showing that tournament-winning sides need not share a single developmental blueprint.",
    coachingMethodology:
      "Coaching approaches varied considerably across these teams, from Portugal's defensively resilient, situationally adaptive 2016 side to Spain's faster, more transitional 2024 side.",
    seniorTactics:
      "Common threads across these winners include situational flexibility, strong game-state management (protecting leads, managing tempo) and a willingness to depart from a 'signature style' when the match situation demanded it, rather than one shared formation or possession philosophy.",
    interpretation:
      "This is offered as an interpretive pattern rather than a rigorously established statistical trend: it is based on a tactical read of a small number of tournament winners, not a systematic study, and readers should treat it as suggestive rather than conclusive evidence for 'structured adaptability' as a general tournament-winning factor.",
    measurableEvidence:
      "The tournament wins and hosting years listed are well documented; the characterisation of each winner's tactical approach as 'pragmatic' or 'hybrid' is an analytical judgement that should be checked against the relevant UEFA/FIFA technical reports before being treated as quantified fact.",
    contested: true,
    sourceIds: ["tournament-possession-data", "argentina-2022-analysis"],
  },
  {
    id: "argentina-scaloni-era",
    title: "Argentina's Scaloni-era rebuild, 2019-2022",
    country: "Argentina",
    countryId: "argentina",
    startYear: 2019,
    endYear: 2022,
    category: "hybrid",
    summary:
      "Following a turbulent period after the 2014 World Cup final defeat, Argentina rebuilt a settled squad culture under Lionel Scaloni, demonstrating tactical flexibility between matches and winning the 2021 Copa América and the 2022 World Cup.",
    institutionalStructure:
      "AFA maintained continuity of coaching personnel and staff across a multi-year cycle under Scaloni, in contrast to the frequent change of the preceding period.",
    developmentEnvironment:
      "The core senior squad was drawn predominantly from major European leagues rather than domestic Argentine football, reflecting the modern movement of Argentine talent abroad.",
    coachingMethodology:
      "Emphasis on squad cohesion and adaptability, with the coaching staff varying defensive structure (between a back four and back three) between matches according to opponent.",
    seniorTactics:
      "Flexible defensive shape and pressing intensity between matches, built around consistent roles for the team's most important attacking players, including Lionel Messi.",
    interpretation:
      "The clearest recent international example of adaptability itself, rather than one fixed tactical system, being treated as a deliberate team capability — closely related to this site's central proposed concept of structured adaptability, though built here around one exceptional individual player.",
    measurableEvidence:
      "The 2021 Copa América and 2022 World Cup wins are well documented; specific claims about between-match tactical changes should be checked against match-by-match tactical analysis rather than general reputation.",
    sourceIds: ["argentina-2022-analysis", "afa-coaching-structures"],
  },
];
