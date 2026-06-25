# Game Design Document Template

Use this template for final `to-gdd` output. Keep unresolved items visible instead of smoothing them over.

## Document State

- Title:
- Version:
- Date:
- Owner:
- Source input:
- Recommendation:

## Fact Ledger

### Confirmed

- 

### Assumed

- 

### Unknown

- 

## 1. Vision

State the player promise, emotional fantasy, game premise, and what the game is not.

## 2. Genre

Name the genre, subgenre, camera/perspective if known, expected session shape, and major genre conventions the game accepts or rejects.

## 3. Design Pillars

List 3-5 pillars. For each pillar, include:

- Meaning
- Player-facing evidence
- Design trade-offs

## 4. Target Audience

Describe primary players, secondary players, accessibility expectations, platform expectations, skill assumptions, and comparable audience tastes.

## 5. Core Loop

Describe:

- Moment-to-moment loop
- Session loop
- Long-term loop
- Rewards and feedback
- Failure/retry flow

## 6. Controls

Define primary verbs, input assumptions, control complexity, remapping/accessibility expectations, and any platform-specific control constraints.

## 7. Characters

Describe player character(s), roles, abilities, identity constraints, NPCs, and narrative function if applicable.

## 8. UI

Describe HUD, menus, feedback surfaces, readability needs, information hierarchy, onboarding, and failure/retry screens.

## 9. Art Direction

Describe visual style, camera framing, readability needs, animation expectations, effects, environments, UI visual tone, and production constraints.

## 10. Audio Direction

Describe music style, sound effects, feedback sounds, ambience, accessibility considerations, and dynamic audio needs.

## 11. Content

Describe content categories, quantity targets when known, unlock cadence, replay variety, authoring assumptions, and content risks.

## 12. Technical Systems

Stay engine-agnostic. Describe systems needed by design, such as movement, combat, AI, inventory, dialogue, generation, save/load, progression, telemetry, networking, or tools. Do not choose Godot nodes, scripts, resources, or plugins here.

## Optional Sections

Include only the optional sections inferred from genre and confirmed by the user.

### Weapons

- Weapon roles
- Differentiation model
- Upgrade hooks
- Balance risks

### Upgrades

- Upgrade categories
- Player choice model
- Randomness vs deterministic progression
- Power curve risks

### Enemies

- Enemy roles
- Behavior expectations
- Spawn/intensity model
- Readability and fairness rules

### Maps

- Map structure
- Navigation constraints
- Biome/level variety
- Replayability needs

### Progression

- Short-term progression
- Session progression
- Meta progression
- Economy/unlock risks

## 13. Roadmap

Separate:

- Prototype
- Vertical slice
- MVP
- Full game
- Future scope

## 14. Risks

Include:

- Design risks
- Scope risks
- Content risks
- Production risks
- Market/audience risks
- Validation needs

## 15. Next Steps

State the production-readiness recommendation and handoff.

### Handoff To Godot Planning

Include only if recommendation is `Ready for Godot planning`:

- Approved game concept
- Design pillars
- Core loop and player verbs
- Scope target
- Required systems
- Confirmed optional sections
- Open decisions not to guess
- Recommended next Codex for Godot skills
