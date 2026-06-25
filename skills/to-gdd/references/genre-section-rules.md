# Genre Section Rules

Use these rules to infer optional GDD sections. Do not ask the user whether every possible section exists. Infer the likely shape, explain the reasoning briefly, and ask for confirmation.

## Inference Process

1. Identify the genre, camera/perspective, primary verbs, challenge source, reward model, and session structure.
2. Map those facts to optional sections.
3. Mark each optional section as `Include`, `Omit`, or `Unclear`.
4. Ask the user to confirm the inferred section set before drafting.

## Optional Section Rules

### Weapons

Include when:

- Combat is a primary verb.
- The player chooses, upgrades, collects, crafts, or swaps attack tools.
- Weapon identity affects buildcraft, pacing, range, risk, or fantasy.

Omit when combat is absent or weapon choice is purely cosmetic.

### Upgrades

Include when:

- Player power changes over a run, level, campaign, or account.
- The game has perks, talents, modifiers, gear stats, abilities, roguelike choices, crafting, unlocks, or buildcraft.
- Progression choices are central to replayability.

Omit when the game is static, puzzle-authored, or purely skill-based without persistent or session upgrades.

### Enemies

Include when:

- Hostile agents, hazards with behavior, bosses, waves, or spawn systems define challenge.
- Enemy roles, readability, fairness, or AI behavior meaningfully shape the game.

Omit when challenge comes from puzzles, traversal, social deduction, economy, or abstract systems without enemy actors.

### Maps

Include when:

- Spatial layout, levels, arenas, biomes, overworlds, tracks, rooms, routes, or procedural spaces matter.
- Navigation, exploration, chokepoints, resource placement, or camera framing affects play.

Omit when play is primarily menu-driven, board-like, single-screen without meaningful spatial variation, or narrative-only.

### Progression

Include when:

- The game has levels, unlocks, economy, ranks, story chapters, meta-progression, difficulty tiers, collection, or long-term goals.
- Retention, mastery, or replayability depends on progression structure.

Omit only when the game is intentionally one-shot, purely arcade with no unlocks, or a toy/sandbox without advancement goals.

## Common Genre Patterns

### Survivors-Like / Bullet Heaven

Usually include:

- Weapons
- Upgrades
- Enemies
- Maps
- Progression

Look for: automatic attacks, crowd pressure, timed sessions, escalating waves, XP pickups, buildcraft, unlocks, meta progression, readable enemy silhouettes, arena variety.

### Roguelike / Roguelite

Usually include:

- Upgrades
- Enemies if combat exists
- Maps if spatial runs exist
- Progression if unlocks or meta progression exist
- Weapons if combat loadouts matter

Look for: run structure, procedural variation, risk/reward choices, failure reset rules, meta unlocks.

### Platformer / Action Adventure

Usually include:

- Enemies if combat or hazards with behavior exist
- Maps
- Progression if abilities, levels, or worlds unlock
- Upgrades if ability growth or collectibles change play
- Weapons only if attack tools are differentiated

Look for: movement verbs, level readability, checkpoints, traversal challenges, ability gates.

### Puzzle Game

Usually include:

- Maps if puzzle spaces or level layouts matter
- Progression if puzzle packs, mechanics, or difficulty curves unlock

Usually omit:

- Weapons
- Enemies unless adversarial pieces or pressure agents exist

Look for: ruleset clarity, onboarding, hint economy, difficulty ramp.

### Narrative / Adventure

Usually include:

- Characters
- UI
- Art direction
- Audio direction
- Progression if chapters, routes, relationship levels, or quest states exist

Optional sections from this file may be omitted unless combat, maps, or upgrades are meaningful.

Look for: dialogue structure, choice consequences, pacing, content production load.

### Strategy / Management

Usually include:

- Progression
- Maps if territory, placement, routes, or spatial control matter
- Upgrades if tech trees, economy, units, or facilities evolve
- Enemies if AI opponents, rivals, waves, or threats exist

Weapons may be reframed as units, actions, tools, or abilities if "weapons" is not the right label.

## Confirmation Pattern

Use a concise confirmation:

```text
Based on the current concept, I recommend including these optional GDD sections: Weapons, Upgrades, Enemies, Maps, and Progression. Rationale: combat/buildcraft drives the core loop, escalating enemy pressure defines challenge, map variety affects replayability, and meta/session progression is central to retention. Confirm, revise, or tell me what feels off.
```
