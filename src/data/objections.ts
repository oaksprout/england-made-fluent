import type { Objection } from "@/lib/types";

/**
 * The seven strongest objections to this site's argument, each answered
 * honestly: concede what is true before answering what is not. A campaign
 * that only presents agreeable objections is not a serious one.
 */
export const objections: Objection[] = [
  {
    id: "already-have-a-framework",
    objection: "England already has a national framework: England DNA.",
    concession:
      "This is true and should not be minimised: the FA has had a named, documented development framework since December 2014, and any proposal that ignored its existence would not be credible.",
    answer:
      "The existence of England DNA is not the question this site is asking. The question is whether there is public evidence of it producing recognisable, transferable senior-team behaviours a decade on: a shared way of reading and responding to match situations that is visible on the pitch. Those are two different claims, and the first being true does not establish the second. Proposal 1 on this site is specifically an audit to find out, honestly, which of the two is actually the case.",
  },
  {
    id: "cannot-standardise-clubs",
    objection: "Club football cannot be standardised by the FA.",
    concession:
      "Agreed, without qualification. The FA has no authority over, and should not attempt to direct, how Premier League or EFL clubs coach their own players or set up their own teams.",
    answer:
      "This objection would be decisive against a proposal to standardise club football, which is not what is proposed here. The argument is for a translation layer that sits above club systems: a shared national vocabulary and set of rehearsed responses that helps England-qualified players and coaches communicate with each other during the small amount of time they spend together as a national squad, without requiring any club to change how it plays.",
  },
  {
    id: "international-football-too-simple",
    objection:
      "International football is too simple and time-constrained for this kind of framework to matter.",
    concession:
      "International management genuinely involves far less contact time than club management, and it is true that some tactical complexity possible at club level is simply not achievable in a few days before a match.",
    answer:
      "Limited time is precisely why prior shared knowledge matters more, not less, in international football. A club manager with daily training time can build understanding from scratch over a season; an international manager cannot. If players already share a common vocabulary and a rehearsed set of responses to recurring situations before they meet up, the manager's very limited contact time can be spent on genuine preparation rather than first establishing basic shared understanding.",
  },
  {
    id: "tournaments-are-mostly-variance",
    objection:
      "Tournaments are mostly decided by players, injuries and variance, not tactical frameworks.",
    concession:
      "Agreed, and this site does not claim otherwise. No tactical framework guarantees victory, and individual quality, fitness, refereeing decisions, penalty shoot-out variance and simple luck all plainly influence tournament outcomes, sometimes decisively.",
    answer:
      "The claim being made here is narrower and more modest than 'a framework wins tournaments': it is that a team with shared collective understanding converts a given level of individual talent into performance more reliably than a team without it. That claim is compatible with variance and misfortune still deciding many specific results. It concerns the conditional probability of good performance given the talent available, and promises nothing about outcomes.",
  },
  {
    id: "pluralism-creates-confusion",
    objection: "Tactical pluralism will create confusion, not adaptability.",
    concession:
      "Unmanaged tactical pluralism can indeed create exactly this problem: a squad of players with genuinely contradictory habits and no shared reference points is a real coordination risk rather than a hypothetical one.",
    answer:
      "This is precisely the distinction the proposal turns on: unmanaged pluralism creates confusion, but structured pluralism does not, because the players still share rehearsed principles, terminology and a limited menu of prepared responses. Structured adaptability is not 'let everyone play however their club plays'; it is a specific attempt to give genuine variety a shared operating language, which is a different and more demanding project than simply tolerating difference.",
  },
  {
    id: "pl-not-english",
    objection: "The Premier League is international, not English.",
    concession:
      "Correct: the Premier League's playing squads, ownership, coaching staff and commercial audience are all substantially international, and it is not, in any meaningful sense, an English institution built to develop England players.",
    answer:
      "The argument made on this site does not depend on the Premier League being English or on its commercial success. The value being claimed is narrower: the tactical environments English-qualified players are exposed to while developing and playing inside the Premier League are unusually varied, regardless of who else plays in the league or who owns the clubs. That specific exposure to varied coaching traditions, tactical systems and elite international teammates is the raw material this site argues England should learn to convert into an advantage. The league's nationality, ownership and global reach are beside the point.",
  },
  {
    id: "spain-proves-rigid-identity-works",
    objection: "Spain proves that a rigid national footballing identity works.",
    concession:
      "Spain's 2008-2012 sides did share a closely related positional and technical vocabulary, and that shared vocabulary is plausibly linked to their run of three consecutive tournament wins; the comparative case study on this site does not dispute this.",
    answer:
      "The word doing the most work in this objection is 'rigid', and it does not hold up against Spain's own history. Spain endured decades of underachievement before 2008 with similarly talented players, and the team's approach has itself evolved considerably since 2012, including the faster, more transitional side that won Euro 2024. What Spain actually demonstrates is shared principles sustained and adapted across multiple coaching generations rather than one fixed, unchanging identity. That is closer to structured adaptability than to rigidity.",
  },
];
