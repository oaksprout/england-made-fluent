import type { Proposal } from "@/lib/types";

/**
 * Twelve concrete proposals. Each is deliberately paired with its strongest
 * real objection and an honest response, plus a genuine unintended risk —
 * this site does not present structured adaptability as risk-free or
 * guaranteed to work. See docs/RESEARCH_STANDARDS.md.
 */
export const proposals: Proposal[] = [
  {
    id: "audit-england-dna",
    number: 1,
    title:
      "Audit whether England DNA has produced recognisable, transferable senior-team behaviours",
    purpose:
      "Establish, with evidence rather than assumption, what England DNA has actually achieved since its 2014 launch before proposing anything to replace or extend it.",
    implementation:
      "Commission an independent technical audit comparing England DNA's stated aims against observable senior and age-group team behaviour over the past decade, using match footage, coach interviews and existing FA documentation. Publish the findings, including where the framework has and has not visibly shaped play.",
    owner:
      "FA technical directorate, with an independently appointed review panel",
    objection:
      "England already has a national framework — this proposal implies duplicating work that has been done since 2014.",
    response:
      "The existence of England DNA is not in question; what has not been publicly demonstrated is evidence of its consistent effect on senior-team collective behaviour. An audit does not assume the framework has failed — it simply replaces assumption, in either direction, with evidence.",
    successMeasure:
      "A published, methodologically transparent audit report identifying specific, observable instances where England DNA principles are and are not visible in senior-team play, distinguishing documented evidence from analytical judgement.",
    unintendedRisk:
      "An audit framed defensively could become a box-ticking exercise that confirms existing assumptions rather than genuinely testing them, particularly if conducted entirely in-house without independent input.",
  },
  {
    id: "map-tactical-environments",
    number: 2,
    title:
      "Map the tactical environments in which England-qualified players are developed",
    purpose:
      "Give the FA a clear, current picture of the specific tactical habits and systems England-qualified players actually bring with them from their club academies, rather than a generic assumption of 'Premier League experience'.",
    implementation:
      "Build and maintain a structured internal database, updated each season, recording the principal tactical system and developmental methodology each England-qualified academy graduate was trained in at first-team breakthrough level, drawing on existing player-development records and club liaison.",
    owner:
      "FA technical directorate, in coordination with Premier League and EFL academy staff",
    objection:
      "Club football cannot be standardised or directed by the FA, so mapping it changes nothing about what clubs actually do.",
    response:
      "This proposal does not seek to standardise or direct clubs. It is a diagnostic step: understanding the variety of tactical environments England's players come from is a precondition for building a translation layer between them, not an attempt to control them.",
    successMeasure:
      "A maintained, accurate dataset covering the great majority of the current senior and under-21 pool's developmental tactical background, used to inform coach education content rather than published as a public ranking of clubs.",
    unintendedRisk:
      "Categorising players by club system risks oversimplifying genuinely mixed developmental histories, and could be misused to stereotype players by club background rather than assess them individually.",
  },
  {
    id: "identify-shared-concepts",
    number: 3,
    title: "Identify recurring concepts shared across elite club systems",
    purpose:
      "Find the tactical concepts that already recur across multiple contrasting club systems in the Premier League, since these are the most realistic building blocks for a genuinely shared national vocabulary.",
    implementation:
      "Task the coach education team with a structured comparative review of leading Premier League academies' and first-team methodologies, identifying concepts (such as rest-defence principles or pressing triggers) that appear, in some form, across several otherwise different systems.",
    owner: "St George's Park coaching staff",
    objection:
      "Tactical concepts that look similar on paper across clubs may mean something different in practice, making any 'shared concept' list superficial.",
    response:
      "This is a fair caution, which is exactly why the review needs to be conducted by coaches examining actual practice and match footage, not just published club philosophies, and why any resulting list should be tested with players and coaches before being treated as settled.",
    successMeasure:
      "A working list of genuinely cross-system tactical concepts, each validated by coaches from at least two contrasting club environments as meaning broadly the same thing in practice.",
    unintendedRisk:
      "The search for shared concepts could quietly default to whichever club's language is most prominent or prestigious, effectively reintroducing one dominant style under the guise of a neutral shared vocabulary.",
  },
  {
    id: "common-terminology",
    number: 4,
    title:
      "Create a common England terminology without enforcing one tactical ideology",
    purpose:
      "Give England's coaching staff and players a shared vocabulary for describing tactical concepts and game states, so that a concept meant the same way by every player and coach in the squad, regardless of tactical system.",
    implementation:
      "Publish and teach a defined glossary of terms for common tactical concepts and game states (see the game-states section) as part of England age-group and senior coach education, explicitly framed as descriptive vocabulary rather than a prescribed style of play.",
    owner: "St George's Park coaching staff",
    objection:
      "A fixed FA terminology risks becoming a new rigid orthodoxy, similar to the criticism sometimes made of England DNA itself.",
    response:
      "This is the central risk this proposal has to manage honestly. The distinction that matters is between standardising language (what we call a concept) and standardising tactics (what system we play) — the former is proposed here, not the latter, and the glossary should be reviewed periodically to prevent it calcifying.",
    successMeasure:
      "Independent verification, through player and coach surveys, that a majority of the senior and under-21 pool can consistently describe the same core game states using the same shared terms.",
    unintendedRisk:
      "Even carefully limited to vocabulary, a published FA glossary could be treated informally as prescriptive by coaches or media, narrowing tactical discussion rather than enabling it.",
  },
  {
    id: "train-game-states",
    number: 5,
    title: "Train recurring game states across every national age group",
    purpose:
      "Ensure that the specific, recurring match situations most relevant to senior international football (see the game-states section) are trained consistently from youth level upward, so players arrive at senior level already familiar with the shared response menu.",
    implementation:
      "Incorporate a defined set of game-state training modules into every England age-group coaching programme at St George's Park, using shared diagrams, terminology and rehearsed response options consistent across age groups.",
    owner: "St George's Park coaching staff across all England age groups",
    objection:
      "International youth teams have very limited contact time compared with club academies, making it unrealistic to meaningfully train specific game states at national level.",
    response:
      "This is true and is a genuine constraint, which is why the proposal is about consistent, repeated brief exposure across every age-group camp over years, not a single intensive programme — cumulative brief exposure across a football career can build recognition even with limited annual contact time.",
    successMeasure:
      "Coaches at each age-group level can confirm that players progressing through the England pathway recognise and can describe the same set of game states and response options as those taught at the level below.",
    unintendedRisk:
      "Limited contact time means game-state training could end up superficial, teaching players to recite the vocabulary without developing the actual tactical judgement the vocabulary is meant to support.",
  },
  {
    id: "teach-translation-between-systems",
    number: 6,
    title: "Teach players to translate between contrasting tactical systems",
    purpose:
      "Explicitly develop players' ability to recognise how a tactical principle they know from their own club expresses itself differently in a contrasting system, rather than assuming this translation happens automatically.",
    implementation:
      "Introduce structured video and on-pitch sessions in England age-group and senior camps that deliberately compare how the same underlying principle (for example, rest-defence positioning) looks in two or three contrasting club systems represented in the squad.",
    owner: "St George's Park coaching staff, drawing on club-based analysts",
    objection:
      "Players already adapt to new systems every time they change clubs; this proposal risks over-formalising something players already manage informally.",
    response:
      "Many players do adapt well individually over a full season at a new club. The problem this proposal addresses is different: doing this collectively, as an entire matchday squad, inside a handful of days before a match, which is a much harder and more time-constrained version of the same skill.",
    successMeasure:
      "Coach-assessed evidence that players can articulate, in their own words, how a principle from their own club system maps onto a contrasting system used by a teammate, before and after the training intervention.",
    unintendedRisk:
      "Comparing club systems explicitly in a national team environment could be perceived as the FA publicly ranking or critiquing specific clubs' methodologies, creating unnecessary friction with clubs.",
  },
  {
    id: "measure-age-group-transitions",
    number: 7,
    title:
      "Measure whether players move between age groups without relearning the framework",
    purpose:
      "Test directly whether the England pathway is actually delivering continuity, by measuring how much re-teaching is needed each time a player moves up an England age group.",
    implementation:
      "Introduce a structured coach assessment at each age-group transition point, recording how quickly a promoted player demonstrates familiarity with the shared terminology and game-state responses used at the new level, and track this over multiple cohorts.",
    owner: "St George's Park coaching staff with independent evaluators",
    objection:
      "Formal measurement of 'framework familiarity' risks reducing a complex developmental process to a simplistic pass/fail metric.",
    response:
      "The measurement proposed here is diagnostic, not evaluative of the player — its purpose is to assess the pathway's continuity, not to grade individual players, and results should be used to improve age-group coaching consistency rather than to judge players against each other.",
    successMeasure:
      "A declining trend, tracked over several cohorts, in the amount of re-teaching coaches report needing when players move up an England age group.",
    unintendedRisk:
      "If poorly communicated, this measurement could be misused as an informal player-ranking tool, or could pressure age-group coaches to teach to the assessment rather than to genuine development.",
  },
  {
    id: "diverse-coaching-staff",
    number: 8,
    title:
      "Include coaches with experience across different football traditions",
    purpose:
      "Bring genuinely varied tactical and coaching perspectives into the England set-up, reducing the risk that a 'common framework' quietly reflects only one dominant coaching background.",
    implementation:
      "Deliberately recruit and retain England age-group and senior coaching staff, analysts and consultants with substantive coaching experience in more than one national or club footballing tradition, and ensure their perspectives are genuinely incorporated into framework development, not only individual player coaching.",
    owner: "FA technical directorate",
    objection:
      "Coaching appointments should be made on merit and specific role fit, not to satisfy a diversity requirement around footballing background.",
    response:
      "These are not in tension: coaches with experience across different traditions can be, and should be, selected because that breadth of experience is itself professionally valuable for exactly the coordination problem this site describes — it is a merit criterion, not a quota.",
    successMeasure:
      "The England technical staff includes coaches with substantive first-team or academy coaching experience outside English football, contributing directly and visibly to framework and curriculum decisions.",
    unintendedRisk:
      "Token or symbolic appointments without real influence over framework decisions would fail to deliver the intended benefit while still being presented as evidence of progress.",
  },
  {
    id: "formal-feedback-loops",
    number: 9,
    title:
      "Build formal feedback loops with England-qualified players and club coaches",
    purpose:
      "Ensure the framework is shaped by regular, structured input from the players and club coaches who actually have to use it, rather than being designed and communicated in one direction from the FA.",
    implementation:
      "Establish a recurring, structured consultation process — for example scheduled sessions at each international window and an annual club-coach forum — through which players and club coaching staff can feed back on the practical usefulness of England's shared terminology and game-state training.",
    owner: "St George's Park coaching staff with independent evaluators",
    objection:
      "Players and club coaches have limited time and may not want to spend it on FA framework consultation rather than football itself.",
    response:
      "The proposal is for feedback to be built into existing international windows and coach education contact points that already happen, not additional standalone meetings, keeping the time cost genuinely low while still creating a real channel for practical concerns to reach the people designing the framework.",
    successMeasure:
      "Documented instances of the framework or its terminology being revised in response to specific player or club-coach feedback, not just evidence that consultation sessions took place.",
    unintendedRisk:
      "A feedback process that is not genuinely acted on can become a legitimising ritual — creating the appearance of consultation without giving players and coaches real influence over the outcome.",
  },
  {
    id: "living-framework",
    number: 10,
    title:
      "Maintain a living tactical framework that changes as football changes",
    purpose:
      "Prevent the shared framework from becoming a fixed orthodoxy that outlives its usefulness, learning directly from Germany's post-2014 experience where a successful reform structure was later criticised as outdated.",
    implementation:
      "Build a scheduled, mandatory review cycle (for example every two to three years) into the framework's governance, requiring the coaching staff to explicitly reassess terminology, game-state modules and training content against how the game has evolved, with findings published.",
    owner: "FA technical directorate",
    objection:
      "Frequent revision could create instability and confusion, undermining the very continuity and shared understanding the framework is meant to provide.",
    response:
      "There is a real tension here, which is why the proposal is for scheduled, structured review rather than constant change — a framework that is revisited every few years on a known cycle is different from one that shifts unpredictably with each new coaching regime.",
    successMeasure:
      "Evidence that scheduled reviews have led to genuine, documented content changes over time, rather than the framework remaining static or being rewritten entirely at each review.",
    unintendedRisk:
      "A review process could be captured by whichever coaching regime is in charge at the time, turning 'living framework' into a euphemism for each new manager imposing their own preferences.",
  },
  {
    id: "independent-evaluations",
    number: 11,
    title: "Publish independent periodic evaluations",
    purpose:
      "Give the public, media and football community credible, independently verified evidence of whether the framework is working, rather than relying solely on the FA's own internal assessment.",
    implementation:
      "Commission an independent body (for example a university sport-science department or an independent panel including figures without an FA employment relationship) to publish a periodic public evaluation of the framework's implementation and observable effects, on a fixed schedule.",
    owner:
      "FA technical directorate, commissioning an external independent panel",
    objection:
      "Independent evaluation of tactical and developmental outcomes is inherently difficult to do rigorously, given how many confounding factors affect national team performance.",
    response:
      "This is a genuine methodological limitation that should be stated plainly in any published evaluation, not hidden. An honest, appropriately hedged independent evaluation is still more valuable than no external scrutiny at all, provided its limits are made explicit.",
    successMeasure:
      "Published, publicly accessible evaluation reports on a fixed schedule, each explicitly distinguishing well-evidenced findings from more speculative interpretation.",
    unintendedRisk:
      "An evaluation body seen as insufficiently independent, or reports that are commissioned but not genuinely published in full, could do more reputational harm than having no formal evaluation process at all.",
  },
  {
    id: "adaptability-as-trained-skill",
    number: 12,
    title:
      "Treat adaptability as a trained collective skill, not improvised flexibility",
    purpose:
      "State explicitly, as the organising principle behind the other eleven proposals, that the capacity to change shape, tempo and tactical emphasis together as a team should be deliberately trained, not left to individual improvisation or assumed to emerge naturally from talent.",
    implementation:
      "Adopt structured adaptability as a named, explicit organising principle across FA coach education and England age-group curricula, with each of the preceding proposals understood as contributing to this single, stated goal rather than as isolated initiatives.",
    owner: "FA technical directorate",
    objection:
      "Adaptability by its nature resists being reduced to a formal, trainable curriculum item — some of what looks like adaptability may simply be individual football intelligence that cannot be systematically taught.",
    response:
      "Individual football intelligence undoubtedly matters and this proposal does not claim to replace it. The claim is narrower: that collective coordination during moments of tactical change can be improved through shared preparation, even where individual judgement remains essential and cannot itself be fully systematised.",
    successMeasure:
      "Observable, coach-assessed evidence that England teams execute in-match tactical changes (formation shifts, tempo changes, substitute integration) with visibly less individual confusion or misalignment over successive tournament cycles.",
    unintendedRisk:
      "Naming adaptability as an explicit goal creates a risk of overclaiming success prematurely, or of treating any tournament setback as proof the whole approach has failed, when tournament outcomes depend on many factors beyond this framework.",
  },
];
