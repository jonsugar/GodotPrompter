---
name: to-gdd
description: Use when the user has a vague game idea, partial game brief, reference-game prompt, genre concept, or asks to create a Game Design Document (GDD). Guides idea intake, optional reference/genre research, phased game-design interviews, GDD drafting, quality review, and a production-readiness gate before any Godot-specific planning.
---

# To GDD

> **Related skills:** **godot-brainstorming** for Godot-specific design after the production gate, **scene-organization** for later scene planning, **player-controller** for later controls implementation, **godot-ui** for later UI planning, **audio-system** for later audio planning.

Turn a vague game idea into a comprehensive Game Design Document. Stay engine-agnostic until the final GDD is approved and the user chooses to continue into Godot-specific planning.

## 1. Operating Rules

- Act as the `godot-game-producer` process owner unless the user explicitly wants another mode.
- Ask short interview rounds: no more than 5 questions per round.
- Track important facts as `Confirmed`, `Assumed`, or `Unknown`.
- Preserve uncertainty instead of inventing details.
- Use approval gates before moving between major phases.
- Use optional research when the user names a reference game, genre, market comparison, audience, platform, or commercial benchmark.
- Learn from successful games without copying protected expression: do not reproduce names, characters, dialogue, levels, art, music, or exact content tables from reference games.
- Do not make Godot architecture, scene tree, scripting, plugin, or asset-pipeline decisions until the production gate is passed.

## 2. Intake

Classify the starting point:

- `Vague idea`: one sentence, mood, genre label, mechanic, or reference game.
- `Partial brief`: some audience, mechanics, scope, art, or platform details exist.
- `Research-led prompt`: reference game, genre, market, or audience comparison is central.
- `Near-complete GDD`: enough material exists to draft and quality-check.

For vague or partial input, read [references/interview-guide.md](references/interview-guide.md) and ask only the smallest useful question round. For reference-game or genre prompts, read [references/genre-section-rules.md](references/genre-section-rules.md) and decide whether research is needed before the next interview.

## 3. Phase Workflow

Use these phases as the default path:

1. Idea intake and initial pitch.
2. Vision, genre, target audience, and design pillars.
3. Optional reference-game and genre research.
4. Core loop and moment-to-moment play.
5. Controls, characters, UI, art, audio, and content model.
6. Genre-aware inference for optional GDD sections.
7. Scope, roadmap, and prototype / vertical slice / MVP / full-game framing.
8. Risks, assumptions, unknowns, and validation needs.
9. Final GDD drafting and quality check.
10. Production gate: stop, revise, or continue into Godot-specific planning.

At each gate:

- Summarize known facts in 3-8 bullets.
- List the highest-risk unknowns.
- Ask for approval to continue, revise, research, or draft.

## 4. Research Mode

Use `godot-game-researcher` when research would improve the GDD. Research should return concise findings usable by the producer:

- Reference-game mechanics and core loop.
- Genre conventions and audience expectations.
- Session structure and progression model.
- Content expectations and replay hooks.
- Common risks and production traps.
- Comparable games worth learning from.
- Non-copying guidance: abstract patterns, not protected expression.

If live market, platform, pricing, legal, or current commercial facts matter, verify them with current sources when tools allow. If not verified, mark them `Needs external verification`.

## 5. Drafting The GDD

Do not draft the final GDD until the completion criteria are met or the user explicitly asks for a draft with gaps.

Before drafting:

1. Read [assets/gdd-template.md](assets/gdd-template.md).
2. Read [references/quality-checklist.md](references/quality-checklist.md).
3. Read [references/genre-section-rules.md](references/genre-section-rules.md).
4. Infer optional sections from genre and mechanics, then ask the user to confirm the inferred GDD shape.

Default output behavior:

- If working in a repository and the user has not requested chat-only output, create `docs/codex-for-godot/gdd/<game-slug>.gdd.md`.
- If no file-writing context exists, output the GDD in Markdown.
- Keep unresolved decisions in `Open Questions`, `Assumptions`, or `Validation Needs`.

## 6. Required GDD Sections

The final GDD must include:

1. Vision
2. Genre
3. Design Pillars
4. Target Audience
5. Core Loop
6. Controls
7. Characters
8. UI
9. Art Direction
10. Audio Direction
11. Content
12. Technical Systems
13. Roadmap
14. Risks
15. Next Steps

Infer whether these optional sections belong, then ask for confirmation:

- Weapons
- Upgrades
- Enemies
- Maps
- Progression

## 7. Completion Criteria

Before finalizing, ensure these are answered or explicitly marked unresolved:

- The fantasy, player promise, and design pillars are clear.
- Genre and audience expectations are understood.
- Moment-to-moment play and core loop are defined.
- Control expectations and primary verbs are known.
- Character, UI, art, audio, and content direction are coherent.
- Optional genre sections have been inferred and confirmed.
- Scope framing distinguishes prototype, vertical slice, MVP, and full game.
- Roadmap, risks, assumptions, and validation needs are visible.
- The GDD has enough detail for a production-readiness decision.

Run the checklist in [references/quality-checklist.md](references/quality-checklist.md) before finalizing.

## 8. Production Gate And Handoff

End with a production-readiness recommendation:

- `Ready for Godot planning`
- `Revise GDD first`
- `Needs research`
- `Pause / do not proceed`

If the user continues into Godot planning, hand off to existing Codex for Godot skills instead of doing it inside the GDD:

- `godot-brainstorming` for feature/system planning.
- `scene-organization` for scene tree and ownership boundaries.
- `player-controller`, `input-handling`, `state-machine`, `resource-pattern`, `godot-ui`, `hud-system`, `audio-system`, `save-load`, and `godot-testing` as relevant.

The handoff must include:

- Approved game concept and design pillars.
- Required GDD sections and confirmed optional sections.
- Core loop and primary player verbs.
- Scope target: prototype, vertical slice, MVP, or full game.
- Production risks and validation needs.
- Open decisions that Godot planning must not guess.

## Implementation Checklist

- [ ] Classified the input state before asking questions or drafting
- [ ] Asked no more than 5 questions in the current interview round
- [ ] Tracked key facts as `Confirmed`, `Assumed`, or `Unknown`
- [ ] Used research mode only when reference or genre investigation is useful
- [ ] Stayed engine-agnostic before the production gate
- [ ] Inferred optional GDD sections using genre rules and asked for confirmation
- [ ] Ran the GDD quality checklist before finalizing
- [ ] Ended with a production-readiness recommendation and handoff contract
