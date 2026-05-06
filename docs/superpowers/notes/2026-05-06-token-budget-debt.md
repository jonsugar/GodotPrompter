# Token Budget Debt — v1.7.0 baseline

The validator (`token-budget-exceeded` warning, added in v1.7.0) flags every `skills/*/SKILL.md` ≥ 16 KB. v1.7.0 restructured the top 10 plus `addon-development` using **Pattern X** (core SKILL.md + `references/<topic>.md`). The remaining **24 skills** are still over budget and tracked here for v1.7.x point releases.

## The Pattern X recipe

The structural recipe is the same for every restructure:

1. Identify what stays in SKILL.md: intro, distinguishing-choices table, canonical recipe, anti-patterns, checklist
2. Identify what moves: edge-case recipes, advanced patterns, long code samples, version-specific deep dives
3. Create `skills/<name>/references/<topic>.md` per move (with `> ← Back to [SKILL.md](../SKILL.md)` header)
4. Replace each moved section in SKILL.md with a 2-3 sentence summary + relative link `[references/<file>.md](references/<file>.md)`
5. Verify: SKILL.md ≤ 16 KB (ideally ≤ 14 KB), no `[orphan-reference]` warnings, GDScript-then-C# pattern preserved within sections

## v1.7.0 progress (2026-05-06)

11 skills restructured to Pattern X:

| Skill | Before | After | Reference files |
|---|---:|---:|---:|
| `godot-optimization` | 37 KB | 11.5 KB | 4 |
| `ai-navigation` | 37 KB | 15.6 KB | 4 |
| `animation-system` | 35 KB | 16.0 KB | 6 |
| `3d-essentials` | 35 KB | 15.9 KB | 6 |
| `physics-system` | 34 KB | 15.9 KB | 7 |
| `dedicated-server` | 31 KB | 11.4 KB | 4 |
| `hud-system` | 28 KB | 11.2 KB | 4 |
| `inventory-system` | 28 KB | 13.5 KB | 3 |
| `audio-system` | 28 KB | 13.6 KB | 4 |
| `godot-ui` | 27 KB | 13.7 KB | 4 |
| `addon-development` | 20 KB | 12.0 KB | 3 |

Plus the new **`gdscript-advanced`** skill ships with 3 references at 9.8 KB SKILL.md (born under budget).

## Deferred (count: 24)

Listed largest-first. Each entry suggests a natural cut. v1.7.x releases pick rows off this list.

- `skills/input-handling/SKILL.md` (~27 KB) — InputEvent deep dive, action rebinding UI, gamepad/touch deep dives → `references/`
- `skills/dialogue-system/SKILL.md` (~26 KB) — branching/conditions, UI presentation, external formats → `references/`
- `skills/multiplayer-sync/SKILL.md` (~26 KB) — interpolation, prediction, lag compensation deep dives → `references/`
- `skills/shader-basics/SKILL.md` (~26 KB) — Compositor effects, Stencil buffer, SMAA, Shader Baker deep dives → `references/`
- `skills/godot-debugging/SKILL.md` (~26 KB) — remote debugger, signal tracing, common error catalog → `references/`
- `skills/particles-vfx/SKILL.md` (~25 KB) — emission shapes, subemitters deep dive, trails, attractors, collision → `references/`
- `skills/procedural-generation/SKILL.md` (~24 KB) — noise/BSP/cellular/WFC algorithms each become a reference
- `skills/multiplayer-basics/SKILL.md` (~24 KB) — ENet/WebSocket, RPC patterns, authority deep dives → `references/`
- `skills/xr-development/SKILL.md` (~24 KB) — OpenXR setup, hand tracking, controllers, passthrough deep dives → `references/`
- `skills/2d-essentials/SKILL.md` (~24 KB) — TileMap deep dive, parallax, custom drawing → `references/`
- `skills/gdscript-patterns/SKILL.md` (~23 KB) — keep examples concise; consider moving the longest sections (variadic, abstract) into a `references/` if they grow with future Godot versions
- `skills/tween-animation/SKILL.md` (~22 KB) — easing recipes, parallel sequences, common UI/gameplay motion → `references/`
- `skills/save-load/SKILL.md` (~22 KB) — ConfigFile/JSON/Resource patterns, version migration recipes → `references/`
- `skills/dependency-injection/SKILL.md` (~20 KB) — testing patterns, anti-pattern catalog → `references/`
- `skills/godot-testing/SKILL.md` (~20 KB) — GUT vs gdUnit4 deep dive, CI patterns → `references/`
- `skills/camera-system/SKILL.md` (~20 KB) — SpringArm3D, orbit camera, transitions, split-screen → `references/`
- `skills/resource-pattern/SKILL.md` (~20 KB) — Resource collections, sharing vs unique, anti-patterns → `references/`
- `skills/csharp-signals/SKILL.md` (~19 KB) — async signal awaiting, [Signal] generic patterns → `references/`
- `skills/responsive-ui/SKILL.md` (~19 KB) — stretch modes deep dive, mobile vs desktop adaptation → `references/`
- `skills/math-essentials/SKILL.md` (~18 KB) — interpolation/curves recipes, geometric helpers → `references/`
- `skills/state-machine/SKILL.md` (~18 KB) — node-based vs resource-based deep dives → `references/`
- `skills/export-pipeline/SKILL.md` (~18 KB) — per-platform export deep dives, CI recipes → `references/`
- `skills/godot-brainstorming/SKILL.md` (~18 KB) — process skill; consider whether the recipe section can move to `references/`
- `skills/event-bus/SKILL.md` (~17 KB) — typed signal patterns, testing recipes → `references/`

## Accepted

None at v1.7.0 baseline. If a future skill genuinely needs > 16 KB SKILL.md (and Pattern X cannot apply), it goes here with justification.
