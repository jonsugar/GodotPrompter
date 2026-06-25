# To GDD Interview Guide

Use this guide to ask short, high-signal question rounds. Never ask more than 5 questions in one round.

## Round Pattern

For each interview round:

1. Summarize known facts in 3-6 bullets.
2. Mark each important fact as `Confirmed`, `Assumed`, or `Unknown`.
3. Name the highest-risk unknowns.
4. Ask up to 5 targeted questions.
5. Ask for approval before moving to the next major phase.

Prefer questions that force useful design trade-offs. Avoid broad questionnaires and avoid asking the user to fill every GDD section manually.

## Phase 1: Idea Intake And Initial Pitch

Use when the idea is vague.

Good questions:

- What is the one-sentence fantasy or promise of the game?
- What does the player do most often?
- What reference games, genres, or media should Codex learn from or avoid?
- Is this meant to be a prototype, vertical slice, MVP, or full game?
- What platform or play context do you imagine first?

Gate: Produce a short pitch and ask whether it is directionally right.

## Phase 2: Vision, Genre, Audience, Pillars

Good questions:

- What feeling should the player leave a session with?
- Who is the primary audience and what do they already enjoy?
- What are 3-5 design pillars the game must protect?
- Which genre expectations are mandatory?
- Which genre expectations should be challenged?

Gate: Confirm the pitch, genre framing, audience, and pillars.

## Phase 3: Optional Research

Use when the user names a reference game, genre, commercial comparison, target market, or audience.

Good questions before research:

- Which reference should be treated as the strongest comparison?
- Are we studying mechanics, audience, commercial positioning, production scope, or all of these?
- Are there references to explicitly avoid?
- Should the research be lightweight or deeper?
- Is current market/platform data required?

Gate: Summarize research findings as reusable design patterns, risks, and non-copying constraints.

## Phase 4: Core Loop And Moment-To-Moment Play

Good questions:

- What are the player’s primary verbs?
- What creates tension or challenge moment to moment?
- What rewards the player immediately?
- What makes a session end, reset, or escalate?
- What does mastery look like?

Gate: Confirm moment-to-moment loop, session loop, and long-term loop.

## Phase 5: Controls, Characters, UI, Art, Audio, Content

Good questions:

- How complex should controls feel to a first-time player?
- Who or what does the player control?
- What information must always be visible?
- What visual style best supports readability and mood?
- What content must exist for the first convincing version?

Gate: Confirm the player-facing experience package.

## Phase 6: Genre-Aware Section Inference

Do not ask "Does this GDD need weapons/upgrades/enemies/maps/progression?" one by one. Infer from genre and mechanics using `genre-section-rules.md`, then ask for confirmation.

Example confirmation prompt:

```text
Based on the current design, I would include Weapons, Upgrades, Enemies, Maps, and Progression as full GDD sections. I would omit Dialogue and Multiplayer for now. Confirm, revise, or tell me what feels wrong.
```

Gate: Confirm the final GDD section shape.

## Phase 7: Scope And Roadmap

Good questions:

- What should the prototype prove?
- What would a vertical slice need to convince you the game works?
- What belongs in MVP and what must wait?
- What content quantity is enough for the first public version?
- What is the biggest scope trap?

Gate: Confirm prototype, vertical slice, MVP, and future-scope boundaries.

## Phase 8: Risks, Assumptions, Validation

Good questions:

- What must be true for this game to work?
- What design assumption feels shakiest?
- What should be playtested first?
- What production constraint might force a redesign?
- What would make you stop or pivot?

Gate: Confirm risks and validation needs before drafting.

## Phase 9: Final Drafting

Before drafting, ask only if blockers remain. Otherwise, state the inferred GDD shape and ask for approval to draft.

Good drafting gate:

```text
I have enough to draft the GDD with these open questions preserved: [...]. I recommend including these optional sections: [...]. Approve the draft, revise the section shape, or answer the open questions first?
```

## Phase 10: Production Gate

After the GDD quality check, ask the user to choose:

- Stop with the GDD.
- Revise the GDD.
- Do more research.
- Continue into Godot-specific planning.
