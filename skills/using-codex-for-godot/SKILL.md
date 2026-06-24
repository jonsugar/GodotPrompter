---
name: using-codex-for-godot
description: Bootstrap skill for Codex for Godot — use to find the right Godot skill, workflow, and Codex persona
---

# Using Codex For Godot

> **Related skills:** **godot-project-setup** for scaffolding a new project, **godot-brainstorming** for design exploration, **godot-code-review** for reviewing finished code, **godot-debugging** for diagnosing runtime issues.

Codex for Godot provides Godot 4.x domain skills for Codex. Skills cover project setup, architecture patterns, gameplay systems, UI, multiplayer, testing, export, optimization, editor tooling, and deployment for both GDScript and C#.

## 1. How Codex Uses These Skills

Codex loads this bootstrap through the repository [AGENTS.md](../../AGENTS.md) file. When a Godot request matches one of the skills below, Codex should read the matching `SKILL.md` before planning or editing code.

Use [references/codex-tools.md](references/codex-tools.md) for Codex-specific workflow guidance.
Use [references/project-structure.md](references/project-structure.md) before creating, recommending, or reviewing Godot file paths so new work follows the standard GodotPrompter project layout.

The bootstrap skill id is `using-codex-for-godot`.

## 2. Core Rule

Before implementing, debugging, reviewing, or planning any Godot system, identify the closest matching skill and read it first.

Before creating or recommending any `res://` path, also read [references/project-structure.md](references/project-structure.md). Keep new files in the correct project domain, co-locate entity-specific files with the entity, and use Godot naming conventions: snake_case folders/files and PascalCase only for C# class names.

| Task area | Read first |
|-----------|------------|
| Project scaffolding | `godot-project-setup` |
| Feature design | `godot-brainstorming` |
| Player movement | `player-controller`, `input-handling` |
| State machines | `state-machine` |
| Signals and decoupled communication | `event-bus` |
| Scene structure | `scene-organization` |
| UI and HUD | `godot-ui`, `hud-system`, `responsive-ui` |
| Inventory | `inventory-system`, `resource-pattern` |
| Save/load | `save-load` |
| Enemy AI and navigation | `ai-navigation`, `state-machine` |
| Camera | `camera-system` |
| Audio | `audio-system` |
| Abilities and combat | `ability-system`, `component-system` |
| Input | `input-handling` |
| Animation | `animation-system`, `tween-animation` |
| Testing | `godot-testing` |
| Shaders and VFX | `shader-basics`, `particles-vfx` |
| Physics | `physics-system` |
| Multiplayer | `multiplayer-basics`, `multiplayer-sync`, `dedicated-server` |
| Export and release | `export-pipeline` |
| Optimization | `godot-optimization` |
| Editor tooling | `addon-development` |
| C# | `csharp-godot`, `csharp-signals` |
| GDScript | `gdscript-patterns`, `gdscript-advanced` |
| Native extensions | `gdextension` |
| Third-party behavior tree addons | `limboai`, `beehave` |

## 3. Workflow

### Design

Read `godot-brainstorming` when the user is still shaping a feature or system. It guides scope, clarifying questions, scene tree planning, data flow, and implementation sequencing.

Save larger plans and specs in the user's project under:

```text
docs/codex-for-godot/plans/
docs/codex-for-godot/specs/
```

### Implementation

For each implementation task, read the most specific domain skill before editing code. If the task crosses domains, read the primary skill first and then the smallest useful set of supporting skills.

Examples:

- A platformer controller usually needs `player-controller`, `input-handling`, and sometimes `state-machine`.
- Inventory UI usually needs `inventory-system`, `resource-pattern`, and `godot-ui`.
- Multiplayer spawning usually needs `multiplayer-basics`, then `multiplayer-sync` if state replication is required.

### Review

Read `godot-code-review` for review tasks. If the code belongs to a specific domain, also read that domain skill so the review checks Godot-specific patterns rather than generic style only.

### Debugging

Read `godot-debugging` for runtime failures, scene-tree confusion, signal issues, or reproduction planning. Pair it with subsystem skills such as `physics-system`, `player-controller`, `godot-ui`, or `multiplayer-basics` when the failure is domain-specific.

## 4. Codex Personas

Codex for Godot includes specialist personas under `.codex/agents/codex-for-godot/`. A complete installation must expose these personas to Codex alongside the skills.

| Persona | Use for |
|---------|---------|
| `godot-game-architect` | System design, scene trees, signal maps, implementation plans |
| `godot-game-dev` | General Godot feature implementation and bug fixing |
| `godot-code-reviewer` | Godot-specific code review |
| `godot-shader-author` | Shaders, post-processing, canvas item and spatial materials |
| `godot-performance-profiler` | Profiler-driven performance diagnosis |
| `godot-animator` | AnimationPlayer, AnimationTree, blend trees, IK, retargeting |
| `godot-csharp-engineer` | C#-first Godot development |
| `godot-ui-designer` | Control-tree UI, themes, responsive layouts, localization-aware UI |
| `godot-tools-engineer` | Editor plugins, inspectors, dock panels, gizmos, `@tool` scripts |

Use a persona when the request benefits from a specialist role. Otherwise, work directly from the relevant skills.

## 5. Skill Catalog

### Core / Process

- `using-codex-for-godot` — This bootstrap skill
- `godot-project-setup` — Project scaffolding, directory layout, autoloads, .gitignore
- `godot-brainstorming` — Design exploration and implementation planning
- `godot-code-review` — GDScript/C# review against Godot best practices
- `godot-debugging` — Runtime diagnosis, signal tracing, scene-tree debugging
- `godot-testing` — TDD with GUT and gdUnit4

### Architecture & Patterns

- `scene-organization` — Scene tree structure and node responsibility boundaries
- `state-machine` — Enum, node, and resource FSM patterns
- `event-bus` — Typed signal autoloads and decoupled communication
- `component-system` — Composition patterns for reusable gameplay systems
- `resource-pattern` — Custom Resources for data and configuration
- `dependency-injection` — Autoloads, service locators, exported injection, scene injection

### Gameplay Systems

- `player-controller` — CharacterBody2D/3D movement
- `input-handling` — Input Map, InputEvent, controllers, mouse/touch, rebinding
- `animation-system` — AnimationPlayer, AnimationTree, blend trees, state machines
- `tween-animation` — Tween workflows and common motion recipes
- `inventory-system` — Resource-based items, slots, stacking, UI binding
- `dialogue-system` — Dialogue trees, conditions, UI presentation
- `save-load` — ConfigFile, JSON, Resource serialization, version migration
- `ai-navigation` — NavigationAgent2D/3D, steering, patrols, behavior trees
- `ability-system` — Abilities, costs, cooldowns, buffs, tags, HUD binding
- `camera-system` — Smooth follow, shake, zones, transitions
- `audio-system` — Audio buses, music, SFX pooling, spatial audio
- `localization` — TranslationServer, CSV/PO, locale switching, RTL, pluralization
- `procedural-generation` — Noise, BSP dungeons, cellular automata, WFC

### UI, Rendering, Physics, And Platforms

- `godot-ui` — Control nodes, themes, anchors, containers
- `responsive-ui` — Stretch modes, aspect ratios, DPI, mobile/desktop adaptation
- `hud-system` — Health bars, score displays, minimap, notifications
- `physics-system` — Bodies, areas, raycasts, collisions, Jolt, ragdolls
- `2d-essentials` — TileMaps, parallax, 2D lights/shadows, particles
- `3d-essentials` — Materials, lighting, environment, GI, fog, LOD, decals
- `shader-basics` — Godot shader language and visual shader recipes
- `particles-vfx` — GPUParticles2D/3D, materials, trails, subemitters
- `xr-development` — OpenXR, XROrigin3D, hand tracking, Quest deployment
- `mobile-development` — Android/iOS export, signing, permissions, lifecycle

### Multiplayer, Build, Scripting, And Data

- `multiplayer-basics` — MultiplayerAPI, ENet/WebSocket, RPCs, authority
- `multiplayer-sync` — Synchronization, interpolation, prediction, lag compensation
- `dedicated-server` — Headless export, lobby flow, deployment
- `export-pipeline` — Export presets, platform settings, CI/CD
- `godot-optimization` — Profiler, draw calls, physics, memory, bottlenecks
- `addon-development` — EditorPlugin, inspectors, docks, gizmos
- `assets-pipeline` — Import settings for images, 3D scenes, audio, resources
- `gdscript-patterns` — Static typing, await, lambdas, match, exports
- `gdscript-advanced` — Performance idioms, metaprogramming, `@tool`, async pitfalls
- `csharp-godot` — Godot C# conventions and GodotSharp APIs
- `csharp-signals` — C# signal delegates, EmitSignal, async awaiting
- `gdextension` — Native extension workflows with godot-cpp or Rust gdext
- `multithreading` — WorkerThreadPool, Thread, Mutex, thread-safe scene access
- `math-essentials` — Vectors, transforms, interpolation, curves, RNG
- `limboai` — LimboAI behavior trees and hierarchical state machines
- `beehave` — Beehave pure-GDScript behavior trees

## Implementation Checklist

- [ ] Identified the closest matching Codex for Godot skill before acting
- [ ] Read the selected skill's `SKILL.md`
- [ ] Read `references/project-structure.md` before creating or recommending Godot file paths
- [ ] Read only the relevant `references/*.md` files linked by that skill
- [ ] Used a Codex persona only when specialist routing added value
- [ ] Ran `godot-code-review` after significant implementation work
- [ ] Noted any missing Godot domain guidance that should become a future skill
