import type { GameStateModule } from "@/lib/types";

/**
 * The twelve recurring match situations ("game states") that structured
 * adaptability is meant to prepare England for. Each module deliberately
 * offers several valid responses rather than one correct answer — the
 * argument of this site is that England needs shared recognition of the
 * situation and a shared menu of rehearsed responses, not one prescribed
 * tactical solution. Diagrams use fictional numbered markers only; no real
 * player names, kits or crests. Coordinates run 0-100, x left→right towards
 * the opponent's goal (x=100).
 */
export const gameStateModules: GameStateModule[] = [
  {
    id: "escaping-high-press",
    title: "Escaping a high press",
    supporterExplanation:
      "When the opposition pushes players high up the pitch to win the ball back near England's goal, the team needs a rehearsed way to play through or around them rather than panicking into a long ball.",
    coachingExplanation:
      "A high press asks specific questions of the team in possession: is there a spare defender, can the goalkeeper be used as an auxiliary passer, and which underloaded zone can be reached in two passes rather than five? Coaching this game state means drilling recognition of press triggers (the moment an opponent commits to jumping out of their line) and rehearsing at least two structural solutions — dropping the holding midfielder between the centre-backs to create a back three, and using the goalkeeper's positioning to make the press numerically disadvantageous for the opponent. The aim is not one fixed build-up shape but a shared read of when the pitch in behind the press is open enough to justify the risk of playing through it.",
    whyItMatters:
      "England's players face a high press in most Premier League matches involving the division's leading sides, but they experience contrasting solutions to it depending on which club sets up which way — some clubs invite the press and play long from deep, others insist on playing through it at all costs. Assembled into a national squad with only days to prepare, that variety can turn into hesitation rather than intelligent risk assessment, particularly against well-coached international opponents who are specifically prepared to press England. The point is not that any individual has failed to solve the press alone; it is that the team has not always shared a settled, rehearsed answer to a situation that recurs in almost every match.",
    validResponses: [
      {
        title: "Drop the six to create a back three",
        description:
          "The holding midfielder drops between the centre-backs, turning a back two into a temporary back three and creating an extra passing option the press cannot easily cover.",
      },
      {
        title: "Use the goalkeeper as an auxiliary passer",
        description:
          "The goalkeeper holds a high starting position and is used as a genuine passing option, forcing an additional opponent to commit forward and open space elsewhere.",
      },
      {
        title: "Third-man release beyond the first press line",
        description:
          "A short pass draws the nearest presser, then a first-time pass beyond the first line finds a teammate who received no direct pressure, bypassing the press in two touches.",
      },
      {
        title: "Selective long ball into a won second phase",
        description:
          "Rather than an unstructured clearance, a deliberately targeted long ball is played into a zone where England has pre-arranged numerical superiority for the second ball.",
      },
    ],
    evidenceNote:
      "This module describes a well-established coaching problem in modern football, but the specific claim that England's squad experiences unusually varied press-resistance training across clubs is an analytical reading based on general knowledge of Premier League club variation, not a controlled study of England players specifically.",
    evidenceKind: "analytical-interpretation",
    diagram: {
      description:
        "A two-phase diagram showing England building out from the back against a high opposition press: first the initial shape with the press engaging, then the holding midfielder dropping to create a back three and a third-man pass breaking the first press line.",
      phases: [
        {
          caption:
            "The opponent presses high with their front line, engaging England's back two and goalkeeper.",
          markers: [
            { x: 8, y: 50, team: "england", label: "1" },
            { x: 18, y: 35, team: "england", label: "4" },
            { x: 18, y: 65, team: "england", label: "5" },
            { x: 32, y: 50, team: "england", label: "6" },
            { x: 45, y: 25, team: "england", label: "8" },
            { x: 45, y: 75, team: "england", label: "7" },
            { x: 68, y: 50, team: "england", label: "9" },
            { x: 30, y: 38, team: "opponent", label: "9" },
            { x: 30, y: 62, team: "opponent", label: "10" },
            { x: 40, y: 20, team: "opponent", label: "7" },
            { x: 40, y: 80, team: "opponent", label: "11" },
            { x: 50, y: 50, team: "opponent", label: "8" },
            { x: 15, y: 50, team: "ball" },
          ],
          arrows: [
            { from: [30, 38], to: [18, 35], kind: "press", team: "opponent" },
            { from: [30, 62], to: [18, 65], kind: "press", team: "opponent" },
          ],
        },
        {
          caption:
            "The six drops between the centre-backs; a third-man pass finds the eight beyond the opponent's first press line.",
          markers: [
            { x: 8, y: 50, team: "england", label: "1" },
            { x: 18, y: 30, team: "england", label: "4" },
            { x: 18, y: 70, team: "england", label: "5" },
            { x: 18, y: 50, team: "england", label: "6" },
            { x: 48, y: 25, team: "england", label: "8" },
            { x: 45, y: 75, team: "england", label: "7" },
            { x: 68, y: 50, team: "england", label: "9" },
            { x: 30, y: 38, team: "opponent", label: "9" },
            { x: 30, y: 62, team: "opponent", label: "10" },
            { x: 40, y: 20, team: "opponent", label: "7" },
            { x: 40, y: 80, team: "opponent", label: "11" },
            { x: 50, y: 50, team: "opponent", label: "8" },
            { x: 18, y: 50, team: "ball" },
          ],
          arrows: [
            { from: [18, 50], to: [18, 30], kind: "pass", team: "england" },
            { from: [18, 30], to: [48, 25], kind: "pass", team: "england" },
            { from: [48, 25], to: [65, 30], kind: "run", team: "england" },
          ],
        },
      ],
    },
    sourceIds: ["shared-mental-models-research"],
  },

  {
    id: "controlling-deep-block",
    title: "Controlling a deep block",
    supporterExplanation:
      "When the opposition sits deep and compact to defend, England needs a shared method for breaking the block down patiently instead of forcing low-percentage crosses or shots.",
    coachingExplanation:
      "Against a deep, organised low block, the game state calls for patient circulation to manipulate the opponent's defensive shape, combined with recognised triggers for when and how to increase the tempo — a switch of play to isolate a full-back, a underlap or overlap to create a two-on-one, or a direct pass into a false nine dropping into space between the lines. Coaching this well means teaching players to read spacing (is the block genuinely compact, or has fatigue or a substitution created a gap) and to share a common vocabulary for the specific patterns being used to disorganise it, rather than relying on individual improvisation alone.",
    whyItMatters:
      "Deep blocks are the single most common defensive setup England's players encounter in major tournaments, since most opponents have less individual quality and choose to defend deep and compact rather than compete for the ball in open space. Club football gives England's players very different levels of practice at breaking such blocks down — some Premier League teams rarely face one, others face it every week — so the national team can arrive at a tournament with uneven collective fluency at exactly the situation it will meet most often. This is a structural mismatch between preparation and demand, not a question of any player's individual technical quality.",
    validResponses: [
      {
        title: "Switch play to isolate a full-back",
        description:
          "A rapid diagonal switch moves the ball from a congested side to the far side, where an opposition full-back is isolated one-on-one against an England wide player.",
      },
      {
        title: "Underlap or overlap to create a two-on-one",
        description:
          "A full-back or wide midfielder makes a rehearsed underlapping or overlapping run to create a temporary two-on-one against a single defender.",
      },
      {
        title: "False nine dropping between the lines",
        description:
          "The central striker drops into the space between opposition midfield and defence to receive and turn, drawing a defender out of the block and opening space in behind.",
      },
      {
        title: "Patient rotation to shift the block laterally",
        description:
          "Sustained side-to-side circulation is used deliberately to shift the entire defensive block across the pitch until a gap opens on the far side.",
      },
    ],
    evidenceNote:
      "The tactical patterns described here are standard coaching concepts documented in coaching literature; the claim about uneven club-level exposure to deep blocks is an analytical reading rather than a measured statistic.",
    evidenceKind: "analytical-interpretation",
    diagram: {
      description:
        "A two-phase diagram showing England circulating the ball against a deep, compact opposition block, then executing a switch of play to isolate a full-back on the far side.",
      phases: [
        {
          caption:
            "England circulate the ball in front of a deep, compact opposition block.",
          markers: [
            { x: 15, y: 50, team: "england", label: "1" },
            { x: 30, y: 30, team: "england", label: "4" },
            { x: 30, y: 70, team: "england", label: "5" },
            { x: 45, y: 50, team: "england", label: "6" },
            { x: 55, y: 20, team: "england", label: "7" },
            { x: 55, y: 80, team: "england", label: "11" },
            { x: 65, y: 50, team: "england", label: "9" },
            { x: 78, y: 30, team: "opponent", label: "4" },
            { x: 78, y: 70, team: "opponent", label: "5" },
            { x: 82, y: 50, team: "opponent", label: "6" },
            { x: 75, y: 15, team: "opponent", label: "2" },
            { x: 75, y: 85, team: "opponent", label: "3" },
            { x: 70, y: 40, team: "opponent", label: "8" },
            { x: 45, y: 50, team: "ball" },
          ],
          arrows: [
            { from: [45, 50], to: [30, 30], kind: "pass", team: "england" },
            { from: [30, 30], to: [30, 70], kind: "pass", team: "england" },
          ],
        },
        {
          caption:
            "A diagonal switch finds the far winger isolated one-on-one against the opposition full-back.",
          markers: [
            { x: 15, y: 50, team: "england", label: "1" },
            { x: 30, y: 30, team: "england", label: "4" },
            { x: 30, y: 70, team: "england", label: "5" },
            { x: 45, y: 50, team: "england", label: "6" },
            { x: 60, y: 15, team: "england", label: "7" },
            { x: 55, y: 80, team: "england", label: "11" },
            { x: 65, y: 45, team: "england", label: "9" },
            { x: 78, y: 30, team: "opponent", label: "4" },
            { x: 78, y: 70, team: "opponent", label: "5" },
            { x: 82, y: 50, team: "opponent", label: "6" },
            { x: 72, y: 18, team: "opponent", label: "2" },
            { x: 75, y: 85, team: "opponent", label: "3" },
            { x: 70, y: 40, team: "opponent", label: "8" },
            { x: 60, y: 15, team: "ball" },
          ],
          arrows: [
            { from: [30, 70], to: [60, 15], kind: "pass", team: "england" },
            { from: [60, 15], to: [78, 10], kind: "run", team: "england" },
          ],
        },
      ],
    },
    sourceIds: ["tournament-possession-data"],
  },

  {
    id: "maintaining-possession-after-lead",
    title: "Maintaining possession after taking the lead",
    supporterExplanation:
      "After scoring, England needs a shared, rehearsed way to manage the ball and the game clock without simply inviting pressure by sitting too deep or losing the ball needlessly.",
    coachingExplanation:
      "Managing a lead is a distinct tactical skill from attacking to create chances: it requires controlled circulation in safer areas of the pitch, disciplined rest-defence structure so a lost ball does not immediately expose the defence, and clear roles for who is responsible for retaining possession under pressure versus who can still look to extend the lead. Coaching this well means giving players a shared sense of acceptable risk at different scorelines and time points, rather than leaving each player to independently judge how cautious to be — misalignment here is exactly what produces the mixture of overly cautious and overly risky decisions that can undo a lead.",
    whyItMatters:
      "Protecting a lead late in a tournament knockout match is one of the situations most visibly, and painfully, associated with England's recent tournament history, where narrow leads have occasionally been surrendered or leads have been managed so cautiously that the team invited unnecessary pressure. This is a genuinely difficult, universal footballing problem — many strong teams have struggled with it — and it is better understood as a question of shared game management principles than of any individual's composure or courage in a given moment.",
    validResponses: [
      {
        title: "Controlled circulation with disciplined rest-defence",
        description:
          "The team keeps the ball in less dangerous central and defensive areas while maintaining a compact rest-defence shape that limits the counter-attacking risk of a turnover.",
      },
      {
        title: "Selective extension of the lead in transition",
        description:
          "Rather than pure containment, the team looks for low-risk transition opportunities to extend the lead when the opponent is committed forward, without abandoning defensive discipline.",
      },
      {
        title: "Substitution-led management of tempo",
        description:
          "Fresh players are introduced specifically to control tempo and retain possession in tiring periods, rather than only for like-for-like positional replacement.",
      },
      {
        title: "Zonal compactness without total territorial retreat",
        description:
          "The team defends a mid-to-low block that stays compact between the lines rather than retreating so far that it concedes territory and invites sustained pressure.",
      },
    ],
    evidenceNote:
      "Late-game management is a widely discussed problem in football analysis; the framing here is an analytical reading of a recurring tactical challenge rather than a claim backed by a specific dataset of England's own results.",
    evidenceKind: "analytical-interpretation",
    diagram: {
      description:
        "A two-phase diagram showing England's compact rest-defence shape while managing a lead, followed by a controlled transition opportunity as the opponent commits players forward.",
      phases: [
        {
          caption:
            "England retain a compact mid-block shape, circulating the ball in safer central areas while leading.",
          markers: [
            { x: 12, y: 50, team: "england", label: "1" },
            { x: 25, y: 32, team: "england", label: "4" },
            { x: 25, y: 68, team: "england", label: "5" },
            { x: 35, y: 50, team: "england", label: "6" },
            { x: 45, y: 30, team: "england", label: "8" },
            { x: 45, y: 70, team: "england", label: "7" },
            { x: 55, y: 50, team: "england", label: "9" },
            { x: 60, y: 35, team: "opponent", label: "9" },
            { x: 60, y: 65, team: "opponent", label: "10" },
            { x: 70, y: 50, team: "opponent", label: "8" },
            { x: 80, y: 30, team: "opponent", label: "4" },
            { x: 80, y: 70, team: "opponent", label: "5" },
            { x: 35, y: 50, team: "ball" },
          ],
          arrows: [
            { from: [35, 50], to: [25, 32], kind: "pass", team: "england" },
            { from: [25, 32], to: [25, 68], kind: "pass", team: "england" },
          ],
        },
        {
          caption:
            "As the opponent commits players forward chasing an equaliser, England break with a controlled transition to extend the lead.",
          markers: [
            { x: 12, y: 50, team: "england", label: "1" },
            { x: 25, y: 32, team: "england", label: "4" },
            { x: 25, y: 68, team: "england", label: "5" },
            { x: 40, y: 50, team: "england", label: "6" },
            { x: 55, y: 35, team: "england", label: "8" },
            { x: 55, y: 65, team: "england", label: "7" },
            { x: 75, y: 50, team: "england", label: "9" },
            { x: 65, y: 30, team: "opponent", label: "9" },
            { x: 65, y: 70, team: "opponent", label: "10" },
            { x: 78, y: 50, team: "opponent", label: "8" },
            { x: 90, y: 40, team: "opponent", label: "4" },
            { x: 88, y: 75, team: "opponent", label: "5" },
            { x: 55, y: 35, team: "ball" },
          ],
          arrows: [
            { from: [40, 50], to: [55, 35], kind: "pass", team: "england" },
            { from: [55, 35], to: [75, 50], kind: "pass", team: "england" },
            { from: [55, 65], to: [72, 60], kind: "run", team: "england" },
          ],
        },
      ],
    },
    sourceIds: ["team-coordination-research", "england-tournament-record"],
  },

  {
    id: "defending-without-passive",
    title: "Defending without becoming permanently passive",
    supporterExplanation:
      "England needs to defend a lead or a difficult period of the match solidly without sliding into a passive retreat that hands the opponent territory and momentum for the rest of the game.",
    coachingExplanation:
      "There is an important difference between disciplined, compact defending and passive retreat: the former keeps defensive shape tight while still applying selective pressure and looking for moments to step forward and regain territory, while the latter cedes the pitch entirely and invites sustained pressure. Coaching this game state means giving the team clear triggers for when to step up as a unit and compress the pitch again, rather than allowing a single cautious moment to become the default mode for the rest of the match. It also means distinguishing match-management defending (see the 'maintaining a lead' module) from a more general tendency to defend passively regardless of scoreline.",
    whyItMatters:
      "England has, at various points in recent tournament history, been described by commentators as dropping too deep for long stretches of matches even when defending is not strictly required by the scoreline, ceding control of games it had periods of dominance in. This is best understood as a coordination and confidence question about when the team collectively decides to defend a lower line versus stepping up together, rather than a lack of defensive quality in individual players.",
    validResponses: [
      {
        title: "Unit-triggered pressing to reclaim territory",
        description:
          "A specific, shared trigger (e.g. a backwards pass by the opponent) prompts the whole defensive unit to step up together and compress the pitch, rather than defending deep by default.",
      },
      {
        title: "Selective pressing traps in wide areas",
        description:
          "Rather than pressing high everywhere, the team channels the opponent into wide areas where a coordinated trap can regain the ball with lower risk.",
      },
      {
        title: "Mid-block with active engagement, not retreat",
        description:
          "The team holds a mid-height defensive block that actively closes passing lanes and applies pressure to the ball, distinct from a low block that simply defends the edge of its own area.",
      },
      {
        title: "Scheduled step-up after defensive spells",
        description:
          "Following a period of sustained defending, the team has a rehearsed method (often via a specific pass or substitution) for collectively stepping the defensive line back up the pitch.",
      },
    ],
    evidenceNote:
      "The description of England 'dropping too deep' in specific matches reflects a common line of tournament commentary and tactical analysis; it is presented here as an analytical reading, not a verified statistic, and should not be attributed to any individual player or decision.",
    evidenceKind: "analytical-interpretation",
    diagram: {
      description:
        "A two-phase diagram contrasting a passive deep retreat with a coordinated unit press that reclaims territory using a shared trigger.",
      phases: [
        {
          caption:
            "England's defensive line has dropped deep without an active trigger to step back up, ceding territory.",
          markers: [
            { x: 10, y: 50, team: "england", label: "1" },
            { x: 15, y: 30, team: "england", label: "4" },
            { x: 15, y: 70, team: "england", label: "5" },
            { x: 20, y: 50, team: "england", label: "6" },
            { x: 30, y: 30, team: "england", label: "8" },
            { x: 30, y: 70, team: "england", label: "7" },
            { x: 45, y: 50, team: "england", label: "9" },
            { x: 50, y: 40, team: "opponent", label: "6" },
            { x: 55, y: 30, team: "opponent", label: "8" },
            { x: 55, y: 70, team: "opponent", label: "10" },
            { x: 65, y: 50, team: "opponent", label: "9" },
            { x: 40, y: 35, team: "opponent", label: "4" },
            { x: 40, y: 65, team: "opponent", label: "5" },
            { x: 50, y: 40, team: "ball" },
          ],
          arrows: [],
        },
        {
          caption:
            "A shared trigger (the opponent's backwards pass) prompts England's unit to step up together and press as a coordinated line.",
          markers: [
            { x: 10, y: 50, team: "england", label: "1" },
            { x: 28, y: 30, team: "england", label: "4" },
            { x: 28, y: 70, team: "england", label: "5" },
            { x: 38, y: 50, team: "england", label: "6" },
            { x: 48, y: 30, team: "england", label: "8" },
            { x: 48, y: 70, team: "england", label: "7" },
            { x: 55, y: 50, team: "england", label: "9" },
            { x: 42, y: 40, team: "opponent", label: "6" },
            { x: 55, y: 30, team: "opponent", label: "8" },
            { x: 55, y: 70, team: "opponent", label: "10" },
            { x: 65, y: 50, team: "opponent", label: "9" },
            { x: 40, y: 55, team: "opponent", label: "4" },
            { x: 40, y: 65, team: "opponent", label: "5" },
            { x: 40, y: 55, team: "ball" },
          ],
          arrows: [
            { from: [10, 50], to: [28, 30], kind: "shift", team: "england" },
            { from: [55, 50], to: [42, 40], kind: "press", team: "england" },
            { from: [48, 30], to: [40, 55], kind: "press", team: "england" },
          ],
        },
      ],
    },
    sourceIds: ["england-tournament-record"],
  },

  {
    id: "attacking-superior-possession",
    title: "Attacking against a superior possession side",
    supporterExplanation:
      "When facing a team more comfortable on the ball than England, the team needs a shared plan for creating chances without the ball rather than only reacting once possession is regained.",
    coachingExplanation:
      "Against an opponent with clearly superior technical control of possession, a national team often has to accept less of the ball and instead plan deliberately for transition moments — organised counter-attacking structure, coordinated pressing triggers to win the ball in advantageous areas, and clarity about which players stay forward as outlets during longer defensive spells. Coaching this well means treating 'having less of the ball' as a specific, prepared game state with its own rehearsed patterns, rather than as a default failure mode that the team has no plan for beyond individual effort.",
    whyItMatters:
      "England has, at times, faced technically superior possession sides at major tournaments and in qualifying, and public commentary has sometimes framed these matches as failures of quality when the more precise question is whether the team had a shared, rehearsed plan for playing effectively with a minority share of possession. Being comfortable without the ball is not the same as being outclassed, and treating them as identical understates what a well-prepared team can still achieve in this game state.",
    validResponses: [
      {
        title: "Organised low-to-mid block with clear transition outlets",
        description:
          "The team defends compactly with a settled block while keeping specific players positioned to receive quickly on the counter-attack when possession is won.",
      },
      {
        title: "Selective high pressing to disrupt build-up",
        description:
          "Rather than pressing everywhere, the team applies coordinated pressing triggers targeted at specific opposition build-up patterns to force turnovers in advantageous areas.",
      },
      {
        title: "Direct combination play in transition",
        description:
          "On winning the ball, the team uses rehearsed quick combinations between two or three players to progress rapidly before the opponent can reorganise.",
      },
      {
        title: "Set-piece emphasis as a controlled route to chances",
        description:
          "Given a reduced share of open-play possession, the team places deliberate additional preparation and weight on set-piece routines as a reliable source of chances.",
      },
    ],
    evidenceNote:
      "This module describes a general and well-recognised tactical problem in international football; specific claims about England's own historical share of possession against stronger sides should be checked against tournament technical-report data before being cited precisely.",
    evidenceKind: "analytical-interpretation",
    diagram: {
      description:
        "A two-phase diagram showing England in a compact defensive block against a possession-dominant opponent, then executing a rehearsed rapid transition after winning the ball.",
      phases: [
        {
          caption:
            "England hold a compact mid-block while the opponent circulates the ball patiently in search of an opening.",
          markers: [
            { x: 15, y: 50, team: "england", label: "1" },
            { x: 28, y: 32, team: "england", label: "4" },
            { x: 28, y: 68, team: "england", label: "5" },
            { x: 38, y: 50, team: "england", label: "6" },
            { x: 45, y: 30, team: "england", label: "8" },
            { x: 45, y: 70, team: "england", label: "7" },
            { x: 60, y: 50, team: "england", label: "9" },
            { x: 70, y: 30, team: "opponent", label: "8" },
            { x: 70, y: 70, team: "opponent", label: "10" },
            { x: 80, y: 50, team: "opponent", label: "6" },
            { x: 90, y: 30, team: "opponent", label: "4" },
            { x: 90, y: 70, team: "opponent", label: "5" },
            { x: 80, y: 50, team: "ball" },
          ],
          arrows: [],
        },
        {
          caption:
            "England win the ball and execute a rehearsed rapid combination before the opponent can reorganise.",
          markers: [
            { x: 15, y: 50, team: "england", label: "1" },
            { x: 30, y: 32, team: "england", label: "4" },
            { x: 30, y: 68, team: "england", label: "5" },
            { x: 42, y: 50, team: "england", label: "6" },
            { x: 55, y: 35, team: "england", label: "8" },
            { x: 55, y: 65, team: "england", label: "7" },
            { x: 78, y: 50, team: "england", label: "9" },
            { x: 65, y: 40, team: "opponent", label: "8" },
            { x: 68, y: 68, team: "opponent", label: "10" },
            { x: 85, y: 50, team: "opponent", label: "6" },
            { x: 90, y: 30, team: "opponent", label: "4" },
            { x: 90, y: 70, team: "opponent", label: "5" },
            { x: 42, y: 50, team: "ball" },
          ],
          arrows: [
            { from: [42, 50], to: [55, 35], kind: "pass", team: "england" },
            { from: [55, 35], to: [78, 50], kind: "pass", team: "england" },
            { from: [55, 65], to: [75, 60], kind: "run", team: "england" },
          ],
        },
      ],
    },
    sourceIds: ["tournament-possession-data"],
  },

  {
    id: "counter-pressing",
    title: "Pressing after losing the ball (counter-pressing)",
    supporterExplanation:
      "The moments immediately after losing the ball are a chance to win it straight back before the opponent can organise, if the whole team reacts together rather than individually.",
    coachingExplanation:
      "Counter-pressing depends on a shared, immediate collective reaction to losing possession: the nearest players close down the ball-carrier while others cut passing lanes, compressing space around the opponent before they can play forward. This only works if the whole team recognises the same trigger at the same moment — if some players counter-press instantly while others start retreating into a defensive shape, the team ends up neither pressing effectively nor organised defensively. Coaching this game state means agreeing collectively on when counter-pressing is the right response (for example, high up the pitch, with support nearby) versus when an immediate organised retreat is safer.",
    whyItMatters:
      "Counter-pressing intensity and structure differ significantly across Premier League clubs, with some built entirely around it and others prioritising a more measured defensive retreat after losing the ball. England's players bring genuinely different habits from their clubs into this exact moment, and without a shared national trigger, part of the team can counter-press while another part drops off, leaving gaps that a well-prepared opponent can exploit. This is a coordination problem with a specific, trainable fix, not a question of effort or commitment.",
    validResponses: [
      {
        title: "Immediate collective press within a set radius",
        description:
          "All players within a defined distance of the lost ball press together immediately, while others shift to cut nearby passing lanes rather than retreating.",
      },
      {
        title: "Controlled tactical foul as a last-resort reset",
        description:
          "Where the counter-press has failed and a dangerous transition is developing, a deliberate, controlled foul is used to stop the break and allow the team to reorganise.",
      },
      {
        title: "Immediate organised retreat when unsupported",
        description:
          "When the ball is lost without nearby support, the team instead drops quickly into an organised defensive shape rather than attempting an isolated, unsupported press.",
      },
      {
        title: "Rest-defence positioning to pre-empt the loss",
        description:
          "Players not directly involved in the attack maintain rest-defence positions before the ball is even lost, reducing how exposed the team is if possession changes hands.",
      },
    ],
    evidenceNote:
      "Counter-pressing is a well-documented modern tactical concept in coaching literature and club football; the specific claim about variation in England players' club-level habits is an analytical reading rather than a measured comparison.",
    evidenceKind: "analytical-interpretation",
    diagram: {
      description:
        "A two-phase diagram showing England losing possession in an advanced area, then executing a collective counter-press within a set radius of the ball to win it back immediately.",
      phases: [
        {
          caption:
            "England lose the ball in an advanced area during an attack.",
          markers: [
            { x: 20, y: 50, team: "england", label: "1" },
            { x: 35, y: 35, team: "england", label: "4" },
            { x: 35, y: 65, team: "england", label: "5" },
            { x: 50, y: 50, team: "england", label: "6" },
            { x: 65, y: 35, team: "england", label: "8" },
            { x: 65, y: 65, team: "england", label: "7" },
            { x: 78, y: 50, team: "england", label: "9" },
            { x: 78, y: 55, team: "opponent", label: "5" },
            { x: 70, y: 40, team: "opponent", label: "6" },
            { x: 60, y: 60, team: "opponent", label: "8" },
            { x: 85, y: 30, team: "opponent", label: "2" },
            { x: 85, y: 70, team: "opponent", label: "3" },
            { x: 78, y: 55, team: "ball" },
          ],
          arrows: [],
        },
        {
          caption:
            "The nearest England players press collectively within a set radius of the ball while others cut passing lanes, aiming to win it back immediately.",
          markers: [
            { x: 20, y: 50, team: "england", label: "1" },
            { x: 40, y: 40, team: "england", label: "4" },
            { x: 40, y: 65, team: "england", label: "5" },
            { x: 55, y: 50, team: "england", label: "6" },
            { x: 70, y: 40, team: "england", label: "8" },
            { x: 68, y: 62, team: "england", label: "7" },
            { x: 78, y: 52, team: "england", label: "9" },
            { x: 78, y: 55, team: "opponent", label: "5" },
            { x: 70, y: 40, team: "opponent", label: "6" },
            { x: 60, y: 60, team: "opponent", label: "8" },
            { x: 85, y: 30, team: "opponent", label: "2" },
            { x: 85, y: 70, team: "opponent", label: "3" },
            { x: 78, y: 55, team: "ball" },
          ],
          arrows: [
            { from: [78, 52], to: [78, 55], kind: "press", team: "england" },
            { from: [68, 62], to: [60, 60], kind: "press", team: "england" },
            { from: [55, 50], to: [70, 40], kind: "shift", team: "england" },
          ],
        },
      ],
    },
    sourceIds: ["team-coordination-research"],
  },

  {
    id: "slowing-chaotic-match",
    title: "Slowing a chaotic match",
    supporterExplanation:
      "When a match becomes end-to-end and disorganised, England needs a shared way to calm the game down and re-establish control rather than being carried along by the chaos.",
    coachingExplanation:
      "Chaotic, transition-heavy matches favour whichever team can first re-impose structure: this typically means deliberately slowing the tempo of possession, using experienced ball-players to hold the ball in safe areas, and accepting some sideways or backwards passing as a legitimate tool rather than a sign of a lack of ambition. Coaching this game state means giving specific players an explicit mandate to be the ones who slow things down at the right moment, and making sure the rest of the team recognises and supports that decision rather than continuing to play at a chaotic tempo around them.",
    whyItMatters:
      "International matches, especially against well-organised counter-attacking opponents, can become stretched and chaotic more easily than club matches where a settled team has more shared understanding of when to slow down. Without an explicit, shared mechanism for calming a match, individual players attempting to slow the tempo can look isolated or be misread as a lack of urgency, when in fact game control is itself a collective tactical skill that needs to be recognised and backed by the rest of the team.",
    validResponses: [
      {
        title: "Designated tempo-setter in central midfield",
        description:
          "One or two central players are given an explicit mandate to receive the ball in tight areas and consciously slow the tempo when the team needs to regain control.",
      },
      {
        title: "Deliberate extended possession in low-risk areas",
        description:
          "The team consciously retains the ball for longer sequences in central and defensive areas specifically to reduce the number of transitions happening in the match.",
      },
      {
        title: "Substitution to introduce a calming presence",
        description:
          "A substitution is used specifically to bring on a player known for composure on the ball, changing the match's tempo rather than only its personnel.",
      },
      {
        title: "Structured stoppages to reset team shape",
        description:
          "The team uses legitimate stoppages (throw-ins, free-kicks, injuries) as deliberate moments to reorganise defensive and attacking shape before play resumes.",
      },
    ],
    evidenceNote:
      "Game control and tempo management are recognised concepts in coaching discussion; this module is an analytical reading of how a shared mechanism for slowing a match could function collectively, not a claim based on a specific measured study of England matches.",
    evidenceKind: "analytical-interpretation",
    diagram: {
      description:
        "A two-phase diagram showing an open, transition-heavy passage of play, then England's midfield consciously slowing tempo through extended central possession to regain control.",
      phases: [
        {
          caption:
            "The match is open and transition-heavy, with players from both teams stretched across the pitch.",
          markers: [
            { x: 15, y: 50, team: "england", label: "1" },
            { x: 30, y: 20, team: "england", label: "4" },
            { x: 35, y: 80, team: "england", label: "5" },
            { x: 55, y: 50, team: "england", label: "6" },
            { x: 70, y: 30, team: "england", label: "8" },
            { x: 75, y: 75, team: "england", label: "7" },
            { x: 88, y: 50, team: "england", label: "9" },
            { x: 60, y: 40, team: "opponent", label: "8" },
            { x: 45, y: 60, team: "opponent", label: "10" },
            { x: 25, y: 45, team: "opponent", label: "9" },
            { x: 80, y: 20, team: "opponent", label: "2" },
            { x: 40, y: 30, team: "opponent", label: "6" },
            { x: 55, y: 50, team: "ball" },
          ],
          arrows: [],
        },
        {
          caption:
            "England's midfield consciously slows the tempo, retaining the ball in central, low-risk areas to reduce the number of transitions.",
          markers: [
            { x: 15, y: 50, team: "england", label: "1" },
            { x: 30, y: 35, team: "england", label: "4" },
            { x: 30, y: 65, team: "england", label: "5" },
            { x: 45, y: 50, team: "england", label: "6" },
            { x: 55, y: 35, team: "england", label: "8" },
            { x: 55, y: 65, team: "england", label: "7" },
            { x: 65, y: 50, team: "england", label: "9" },
            { x: 55, y: 45, team: "opponent", label: "8" },
            { x: 45, y: 60, team: "opponent", label: "10" },
            { x: 40, y: 35, team: "opponent", label: "9" },
            { x: 65, y: 30, team: "opponent", label: "2" },
            { x: 50, y: 50, team: "opponent", label: "6" },
            { x: 30, y: 35, team: "ball" },
          ],
          arrows: [
            { from: [30, 35], to: [30, 65], kind: "pass", team: "england" },
            { from: [30, 65], to: [45, 50], kind: "pass", team: "england" },
          ],
        },
      ],
    },
    sourceIds: ["team-coordination-research"],
  },

  {
    id: "accelerating-slow-match",
    title: "Accelerating a slow match",
    supporterExplanation:
      "When a match has settled into a slow, low-tempo pattern that suits the opponent, England needs a shared way to deliberately increase tempo and create disruption.",
    coachingExplanation:
      "Some opponents are content to let a match settle into a slow, controlled tempo that neutralises a more talented side's individual quality by reducing the number of open, disorganised moments. Breaking that pattern requires a collective, not individual, decision to increase tempo — faster combination play, more direct passing into forward areas, and higher-intensity pressing to force the game into transitions where England's attacking players are more likely to have an advantage. Coaching this well means agreeing specific, shared cues for when and how to raise tempo together, rather than one or two players trying to speed the game up while the rest of the team remains at the old pace.",
    whyItMatters:
      "England has occasionally been described in tournament commentary as struggling to break down opponents who successfully slow matches to a pace that neutralises individual quality, particularly in group-stage matches against well-organised, deliberately conservative opponents. The relevant skill is not simply 'more urgency' from individual players, but a shared, coordinated team decision about when and how to raise tempo collectively.",
    validResponses: [
      {
        title: "Coordinated increase in passing tempo",
        description:
          "The whole team, on a shared cue, deliberately increases the speed of passing and off-ball movement together rather than a single player attempting to force the pace alone.",
      },
      {
        title: "Higher pressing intensity to force transitions",
        description:
          "The team raises its pressing intensity as a unit to force more turnovers and transition moments, which tend to favour a technically stronger side.",
      },
      {
        title: "Direct forward passing to bypass a settled midfield",
        description:
          "More frequent forward passing into advanced areas is used deliberately to disrupt an opponent who has settled into controlling the midfield tempo.",
      },
      {
        title: "Attacking substitutions to change the pattern",
        description:
          "Fresh attacking players are introduced specifically to break a settled match pattern, bringing different running and passing habits into the game.",
      },
    ],
    evidenceNote:
      "Tempo control is a widely discussed tactical concept; the specific characterisation of England's tournament matches is an analytical reading of general commentary rather than a claim backed by measured tempo data.",
    evidenceKind: "analytical-interpretation",
    diagram: {
      description:
        "A two-phase diagram showing a slow, settled passage of play, then England collectively raising tempo with faster combination play and a higher press to disrupt the opponent's control.",
      phases: [
        {
          caption:
            "The match has settled into a slow, low-tempo pattern with the opponent content to hold their shape.",
          markers: [
            { x: 15, y: 50, team: "england", label: "1" },
            { x: 30, y: 35, team: "england", label: "4" },
            { x: 30, y: 65, team: "england", label: "5" },
            { x: 42, y: 50, team: "england", label: "6" },
            { x: 55, y: 30, team: "england", label: "8" },
            { x: 55, y: 70, team: "england", label: "7" },
            { x: 65, y: 50, team: "england", label: "9" },
            { x: 68, y: 40, team: "opponent", label: "6" },
            { x: 68, y: 60, team: "opponent", label: "8" },
            { x: 82, y: 50, team: "opponent", label: "9" },
            { x: 90, y: 30, team: "opponent", label: "4" },
            { x: 90, y: 70, team: "opponent", label: "5" },
            { x: 42, y: 50, team: "ball" },
          ],
          arrows: [],
        },
        {
          caption:
            "England collectively raise the tempo: faster combinations forward and a higher press together disrupt the settled pattern.",
          markers: [
            { x: 15, y: 50, team: "england", label: "1" },
            { x: 35, y: 35, team: "england", label: "4" },
            { x: 35, y: 65, team: "england", label: "5" },
            { x: 50, y: 50, team: "england", label: "6" },
            { x: 65, y: 30, team: "england", label: "8" },
            { x: 65, y: 70, team: "england", label: "7" },
            { x: 78, y: 50, team: "england", label: "9" },
            { x: 68, y: 40, team: "opponent", label: "6" },
            { x: 68, y: 60, team: "opponent", label: "8" },
            { x: 82, y: 50, team: "opponent", label: "9" },
            { x: 90, y: 30, team: "opponent", label: "4" },
            { x: 90, y: 70, team: "opponent", label: "5" },
            { x: 50, y: 50, team: "ball" },
          ],
          arrows: [
            { from: [50, 50], to: [65, 30], kind: "pass", team: "england" },
            { from: [65, 30], to: [78, 50], kind: "pass", team: "england" },
            { from: [35, 35], to: [50, 25], kind: "press", team: "england" },
          ],
        },
      ],
    },
    sourceIds: ["team-coordination-research"],
  },

  {
    id: "chasing-goal-without-destroying-structure",
    title: "Chasing a goal without destroying defensive structure",
    supporterExplanation:
      "When England is behind late in a match, the team needs a shared way to push for a goal without abandoning defensive shape so completely that it concedes a second.",
    coachingExplanation:
      "Chasing a goal is a genuine tactical challenge, not simply a matter of committing more players forward: it requires a rehearsed structure for how many players go forward, who covers the space they leave, and what the rest-defence shape looks like if possession is lost in a advanced position. Coaching this well means preparing specific patterns in training — for example, an auxiliary attacking substitute with a covering midfielder holding position — rather than leaving the team to improvise an unstructured, high-risk push that leaves it exposed to a fast break.",
    whyItMatters:
      "Matches chased from behind late on are exactly the situation where a lack of shared preparation is most visible and most costly, since a team that concedes a further goal while chasing an equaliser suffers a compounding tactical and psychological setback. England's collective experience of this specific situation is necessarily limited at international level, given how few minutes national teams train together compared with clubs, which is precisely the argument for deliberately rehearsing it rather than assuming it can be managed instinctively.",
    validResponses: [
      {
        title: "Rehearsed attacking overload with a covering midfielder",
        description:
          "A specific, drilled pattern commits extra attackers forward while one designated midfielder deliberately holds a covering position to limit counter-attacking risk.",
      },
      {
        title: "Staggered substitutions for attacking impact",
        description:
          "Attacking substitutions are introduced at staggered intervals rather than all at once, maintaining some structural balance while still increasing attacking threat.",
      },
      {
        title: "Increased width to stretch a defending block",
        description:
          "The team commits extra numbers to wide areas specifically to stretch the opponent's defensive block and create central space, rather than simply adding more central attackers.",
      },
      {
        title: "Set-piece-focused chase with defensive cover assigned",
        description:
          "Set-pieces are used as a primary attacking route with specific players assigned to defensive cover roles during the set-piece itself, managing transition risk.",
      },
    ],
    evidenceNote:
      "The tactical patterns described are standard coaching concepts for managing late-game attacking risk; the claim about limited England training time for this specific situation follows from general knowledge of international football scheduling constraints rather than a specific measured study.",
    evidenceKind: "analytical-interpretation",
    diagram: {
      description:
        "A two-phase diagram showing England behind late in a match, then executing a rehearsed attacking overload with one covering midfielder deliberately holding position against the counter-attack.",
      phases: [
        {
          caption:
            "England are behind late in the match and need to commit more players forward without abandoning structure entirely.",
          markers: [
            { x: 15, y: 50, team: "england", label: "1" },
            { x: 28, y: 35, team: "england", label: "4" },
            { x: 28, y: 65, team: "england", label: "5" },
            { x: 42, y: 50, team: "england", label: "6" },
            { x: 55, y: 30, team: "england", label: "8" },
            { x: 55, y: 70, team: "england", label: "7" },
            { x: 70, y: 50, team: "england", label: "9" },
            { x: 78, y: 35, team: "opponent", label: "4" },
            { x: 78, y: 65, team: "opponent", label: "5" },
            { x: 85, y: 50, team: "opponent", label: "6" },
            { x: 60, y: 45, team: "opponent", label: "9" },
            { x: 50, y: 60, team: "opponent", label: "10" },
            { x: 42, y: 50, team: "ball" },
          ],
          arrows: [],
        },
        {
          caption:
            "England commit an attacking overload while one designated midfielder holds a covering position against a counter-attack.",
          markers: [
            { x: 15, y: 50, team: "england", label: "1" },
            { x: 30, y: 40, team: "england", label: "4" },
            { x: 30, y: 60, team: "england", label: "5" },
            { x: 48, y: 50, team: "england", label: "6" },
            { x: 65, y: 25, team: "england", label: "8" },
            { x: 65, y: 75, team: "england", label: "7" },
            { x: 82, y: 50, team: "england", label: "9" },
            { x: 78, y: 35, team: "opponent", label: "4" },
            { x: 78, y: 65, team: "opponent", label: "5" },
            { x: 85, y: 50, team: "opponent", label: "6" },
            { x: 60, y: 45, team: "opponent", label: "9" },
            { x: 50, y: 60, team: "opponent", label: "10" },
            { x: 65, y: 25, team: "ball" },
          ],
          arrows: [
            { from: [48, 50], to: [65, 25], kind: "pass", team: "england" },
            { from: [65, 25], to: [82, 40], kind: "pass", team: "england" },
            { from: [48, 50], to: [48, 55], kind: "shift", team: "england" },
          ],
        },
      ],
    },
    sourceIds: ["international-preparation-time"],
  },

  {
    id: "changing-formation-mid-match",
    title: "Changing formation during a match",
    supporterExplanation:
      "Sometimes the best response to how a match is going is to change England's formation, but this only works if every player understands what their new role actually asks of them.",
    coachingExplanation:
      "A formation change is really a change in the team's shared reference points for spacing, pressing triggers and passing responsibilities, not just a different-looking shape on a team sheet. Coaching this well means players have rehearsed the same two or three formation options often enough that a switch — for example, from a back four to a back three, or a double pivot to a diamond — is a recognisable, prepared adjustment rather than an unfamiliar structure the team is encountering live in a match. Without that shared preparation, a formation change on paper can fail to change the team's actual coordination on the pitch, because players do not share the same understanding of their new responsibilities.",
    whyItMatters:
      "England's players arrive from clubs that use markedly different formations and in-match adjustment habits, so a mid-match formation change for the national team risks meaning something different to each player depending on their club experience, even if the shape looks correct from the sideline. This is a specific, addressable version of the site's broader argument: shared recognition of what a formation is for, not just its name, is what allows a change to actually function collectively.",
    validResponses: [
      {
        title: "Rehearsed switch between two prepared systems",
        description:
          "The team trains switching between two specific, prepared formations often enough that the change in a match is executing a known pattern rather than improvising a new one.",
      },
      {
        title: "Positional rather than formation-label change",
        description:
          "Rather than announcing a new formation, the coaching staff communicates the change in terms of specific positional and pressing adjustments each player needs to make.",
      },
      {
        title: "Staged formation change via substitution",
        description:
          "A formation change is introduced gradually alongside specific substitutions, so the team transitions into the new shape with fresh players already briefed for their roles.",
      },
      {
        title: "Retained core principles across formations",
        description:
          "Regardless of the specific formation, players retain the same core principles (e.g. rest-defence rules, pressing triggers) so the change alters shape without discarding shared understanding.",
      },
    ],
    evidenceNote:
      "The description of formation changes as changes in shared reference points reflects general coaching theory; the specific claim about England players' varied club-level formation habits is an analytical reading rather than a measured comparison across current squad members.",
    evidenceKind: "analytical-interpretation",
    diagram: {
      description:
        "A two-phase diagram showing England's back four shape, then a rehearsed mid-match switch to a back three with retained pressing and rest-defence principles.",
      phases: [
        {
          caption:
            "England play with a back four and a double pivot in midfield.",
          markers: [
            { x: 12, y: 50, team: "england", label: "1" },
            { x: 25, y: 20, team: "england", label: "2" },
            { x: 25, y: 40, team: "england", label: "4" },
            { x: 25, y: 60, team: "england", label: "5" },
            { x: 25, y: 80, team: "england", label: "3" },
            { x: 40, y: 40, team: "england", label: "6" },
            { x: 40, y: 60, team: "england", label: "8" },
            { x: 65, y: 50, team: "england", label: "9" },
            { x: 55, y: 35, team: "opponent", label: "10" },
            { x: 55, y: 65, team: "opponent", label: "7" },
            { x: 70, y: 50, team: "opponent", label: "6" },
            { x: 40, y: 40, team: "ball" },
          ],
          arrows: [],
        },
        {
          caption:
            "A rehearsed switch to a back three creates an additional central passing option, with retained pressing triggers and rest-defence roles.",
          markers: [
            { x: 12, y: 50, team: "england", label: "1" },
            { x: 25, y: 30, team: "england", label: "4" },
            { x: 25, y: 50, team: "england", label: "5" },
            { x: 25, y: 70, team: "england", label: "6" },
            { x: 42, y: 20, team: "england", label: "2" },
            { x: 42, y: 80, team: "england", label: "3" },
            { x: 48, y: 50, team: "england", label: "8" },
            { x: 68, y: 50, team: "england", label: "9" },
            { x: 55, y: 35, team: "opponent", label: "10" },
            { x: 55, y: 65, team: "opponent", label: "7" },
            { x: 70, y: 50, team: "opponent", label: "6" },
            { x: 48, y: 50, team: "ball" },
          ],
          arrows: [
            { from: [25, 50], to: [25, 30], kind: "shift", team: "england" },
            { from: [40, 60], to: [42, 80], kind: "shift", team: "england" },
          ],
        },
      ],
    },
    sourceIds: ["shared-mental-models-research"],
  },

  {
    id: "integrating-substitute",
    title:
      "Integrating a substitute without changing the team's basic understanding",
    supporterExplanation:
      "When a substitute comes on, England needs the rest of the team to keep the same shared shape and understanding rather than having to relearn how to play around the new player.",
    coachingExplanation:
      "Substitutions introduce a genuine coordination risk: if the incoming player has a different sense of spacing, pressing triggers or passing patterns than the player they replace, the team's collective understanding can degrade even if the substitute is individually excellent. Coaching this well means every squad member, not just the starting eleven, is drilled in the same shared principles, so that a substitution changes personnel and energy without changing the team's underlying tactical language. This is precisely the kind of game state that benefits from a common national framework rather than assuming shared understanding will transfer automatically from club football.",
    whyItMatters:
      "Squad depth means England's substitutes typically arrive from a wide range of different Premier League and European clubs, each with different tactical habits, and international squads have far less shared training time than a club squad to iron out those differences before a substitute is needed in a live match. A substitute changing the team's basic understanding, even briefly, is a specific and preventable version of the coordination problem this site's whole argument is about.",
    validResponses: [
      {
        title: "Consistent squad-wide principles regardless of formation",
        description:
          "The whole squad, not just starters, is drilled in the same core positional and pressing principles, so a substitute already shares the team's basic tactical language on arrival.",
      },
      {
        title: "Brief, structured on-pitch communication at the substitution",
        description:
          "A short, specific verbal or gestural exchange between the substitute and nearby teammates at the moment of the change confirms roles and immediate priorities.",
      },
      {
        title: "Like-for-like role framing rather than literal replication",
        description:
          "The substitute is briefed to fulfil the same functional role (e.g. 'press the ball-near centre-back') rather than attempting to literally copy the outgoing player's individual habits.",
      },
      {
        title: "Staged introduction during a natural break",
        description:
          "Where possible, the substitution is timed around a stoppage that allows a brief team reset, rather than being made during a live, fast-moving passage of play.",
      },
    ],
    evidenceNote:
      "Coordination costs of squad rotation and substitution are a recognised topic in team-sport coordination research; the specific application to England substitutes drawing from varied club systems is an analytical reading rather than a study of England substitutions specifically.",
    evidenceKind: "analytical-interpretation",
    diagram: {
      description:
        "A two-phase diagram showing the team's shape before a substitution, then the same shape maintained after the substitute enters and is briefed into the same positional and pressing principles.",
      phases: [
        {
          caption:
            "England hold a settled shape with the player about to be substituted occupying the right wing role.",
          markers: [
            { x: 15, y: 50, team: "england", label: "1" },
            { x: 28, y: 35, team: "england", label: "4" },
            { x: 28, y: 65, team: "england", label: "5" },
            { x: 42, y: 50, team: "england", label: "6" },
            { x: 55, y: 30, team: "england", label: "8" },
            { x: 55, y: 70, team: "england", label: "7" },
            { x: 68, y: 50, team: "england", label: "9" },
            { x: 65, y: 40, team: "opponent", label: "6" },
            { x: 65, y: 60, team: "opponent", label: "8" },
            { x: 80, y: 50, team: "opponent", label: "5" },
            { x: 42, y: 50, team: "ball" },
          ],
          arrows: [],
        },
        {
          caption:
            "A substitute replaces the wide player and is briefed into the same positional role and pressing trigger, keeping the team's shape and understanding unchanged.",
          markers: [
            { x: 15, y: 50, team: "england", label: "1" },
            { x: 28, y: 35, team: "england", label: "4" },
            { x: 28, y: 65, team: "england", label: "5" },
            { x: 42, y: 50, team: "england", label: "6" },
            { x: 55, y: 30, team: "england", label: "8" },
            { x: 55, y: 70, team: "england", label: "11" },
            { x: 68, y: 50, team: "england", label: "9" },
            { x: 65, y: 40, team: "opponent", label: "6" },
            { x: 65, y: 60, team: "opponent", label: "8" },
            { x: 80, y: 50, team: "opponent", label: "5" },
            { x: 42, y: 50, team: "ball" },
          ],
          arrows: [
            { from: [55, 70], to: [65, 60], kind: "press", team: "england" },
          ],
        },
      ],
    },
    sourceIds: ["shared-mental-models-research", "team-coordination-research"],
  },

  {
    id: "responding-opponent-shape-change",
    title: "Responding when the opponent changes shape",
    supporterExplanation:
      "When the opposition changes its own formation or approach mid-match, England needs a shared way to recognise the change and respond together rather than reacting individually and inconsistently.",
    coachingExplanation:
      "Recognising and responding to an opponent's formation or approach change requires the whole team to read the same cues at roughly the same time — a different opposition build-up shape, a switch to a back three, or a change in pressing height — and to have a small number of prepared collective responses ready, rather than several players independently guessing what has changed and adjusting differently from one another. Coaching this well means training pattern recognition of common opposition adjustments and pairing each recognised pattern with an agreed team response, so the adjustment is a coordinated reaction rather than a scramble.",
    whyItMatters:
      "International opponents, especially at major tournaments, frequently make specific tactical adjustments aimed directly at nullifying England's known strengths, and the quality of England's collective response — not just individual defenders' or midfielders' reactions — often determines whether the change causes real problems. A team that shares a common framework for reading and responding to opposition changes can adjust as a unit within the same passage of play, rather than needing a stoppage or half-time team talk to realign.",
    validResponses: [
      {
        title: "Mirrored positional adjustment",
        description:
          "The team mirrors a key element of the opponent's shape change (for example, matching a switch to a back three with an extra central attacking option) to maintain numerical balance.",
      },
      {
        title: "Maintained principles despite the opponent's change",
        description:
          "Rather than mirroring the opponent, the team deliberately maintains its own core principles and shape, judging that adapting only the identified specific vulnerability is enough.",
      },
      {
        title: "Targeted exploitation of a new opposition weakness",
        description:
          "The team identifies and specifically attacks the space or mismatch the opponent's shape change has created, rather than only reacting defensively to the change.",
      },
      {
        title: "Coach-led signal for a coordinated team response",
        description:
          "Coaching staff use a clear pitch-side signal recognised by the whole squad to trigger a specific, rehearsed collective response to a recognised opposition adjustment.",
      },
    ],
    evidenceNote:
      "In-match tactical adjustment and opponent-reading are established coaching concepts; the specific framing of England facing deliberate opposition adjustments at tournaments is a reasonable analytical inference rather than a claim backed by a study of specific matches.",
    evidenceKind: "analytical-interpretation",
    diagram: {
      description:
        "A two-phase diagram showing the opponent switching from a back four to a back three mid-match, then England's coordinated positional response identified and executed as a team.",
      phases: [
        {
          caption:
            "The opponent switches from a back four to a back three, adding an extra central midfielder to try to overload England's midfield.",
          markers: [
            { x: 15, y: 50, team: "england", label: "1" },
            { x: 28, y: 35, team: "england", label: "4" },
            { x: 28, y: 65, team: "england", label: "5" },
            { x: 42, y: 50, team: "england", label: "6" },
            { x: 55, y: 30, team: "england", label: "8" },
            { x: 55, y: 70, team: "england", label: "7" },
            { x: 68, y: 50, team: "england", label: "9" },
            { x: 78, y: 30, team: "opponent", label: "4" },
            { x: 78, y: 50, team: "opponent", label: "5" },
            { x: 78, y: 70, team: "opponent", label: "6" },
            { x: 65, y: 45, team: "opponent", label: "8" },
            { x: 65, y: 60, team: "opponent", label: "10" },
            { x: 42, y: 50, team: "ball" },
          ],
          arrows: [
            { from: [78, 60], to: [65, 60], kind: "shift", team: "opponent" },
          ],
        },
        {
          caption:
            "England respond as a unit, dropping the nine into midfield to match the opponent's numbers centrally and prevent the overload.",
          markers: [
            { x: 15, y: 50, team: "england", label: "1" },
            { x: 28, y: 35, team: "england", label: "4" },
            { x: 28, y: 65, team: "england", label: "5" },
            { x: 45, y: 45, team: "england", label: "6" },
            { x: 55, y: 30, team: "england", label: "8" },
            { x: 55, y: 70, team: "england", label: "7" },
            { x: 55, y: 55, team: "england", label: "9" },
            { x: 78, y: 30, team: "opponent", label: "4" },
            { x: 78, y: 50, team: "opponent", label: "5" },
            { x: 78, y: 70, team: "opponent", label: "6" },
            { x: 65, y: 45, team: "opponent", label: "8" },
            { x: 65, y: 60, team: "opponent", label: "10" },
            { x: 45, y: 45, team: "ball" },
          ],
          arrows: [
            { from: [68, 50], to: [55, 55], kind: "shift", team: "england" },
            { from: [55, 55], to: [65, 60], kind: "press", team: "england" },
          ],
        },
      ],
    },
    sourceIds: ["team-coordination-research", "shared-mental-models-research"],
  },
];
