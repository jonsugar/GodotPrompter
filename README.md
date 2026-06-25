# Codex for Godot

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Godot 4.x](https://img.shields.io/badge/Godot-4.3+-blue.svg)](https://godotengine.org)
[![Skills: 52](https://img.shields.io/badge/Skills-52-green.svg)](#available-skills)

Codex for Godot is a Codex-only skill pack for Godot 4.x game development. It gives Codex domain-specific guidance for GDScript and C# projects, including project setup, gameplay systems, UI, multiplayer, testing, export, optimization, and Godot editor tooling.

## Quick Start

Clone the repository somewhere stable:

```bash
git clone https://github.com/jonsugar/codex-for-godot.git ~/.codex/codex-for-godot
```

Expose the skills and personas to Codex:

```bash
mkdir -p ~/.codex/skills ~/.codex/agents
ln -s ~/.codex/codex-for-godot/skills ~/.codex/skills/codex-for-godot
ln -s ~/.codex/codex-for-godot/.codex/agents/codex-for-godot ~/.codex/agents/codex-for-godot
```

Restart Codex after installing or updating symlinks.

## How It Works

Examples:

- "Turn this game idea into a GDD" uses `to-gdd`.
- "Set up a new Godot project" uses `godot-project-setup`.
- "Add a platformer controller with coyote time" uses `player-controller` and `input-handling`.
- "Design enemy patrol and chase behavior" uses `ai-navigation` and `state-machine`.
- "Review my Godot code" uses `godot-code-review`.

Codex personas live under [.codex/agents/codex-for-godot](.codex/agents/codex-for-godot). They provide specialist roles such as game producer, researcher, architect, developer, reviewer, UI designer, animator, shader author, performance profiler, C# engineer, and tools engineer.

## Available Skills

### Core / Process

| Skill | Description |
|-------|-------------|
| `using-codex-for-godot` | Bootstrap skill catalog and workflow guide |
| `to-gdd` | Turn vague game ideas and reference prompts into GDDs with research, gates, and a production-readiness review |
| `godot-project-setup` | Scaffold directory structure, autoloads, .gitignore, input maps |
| `godot-brainstorming` | Scene tree planning, node selection, architectural decisions |
| `godot-code-review` | Review checklist for Godot best practices and common pitfalls |
| `godot-debugging` | Remote debugger, print techniques, signal tracing, error patterns |
| `godot-testing` | TDD with GUT and gdUnit4 |

### Architecture & Patterns

| Skill | Description |
|-------|-------------|
| `scene-organization` | Scene tree composition and node hierarchy |
| `state-machine` | Enum-based, node-based, and resource-based FSM patterns |
| `event-bus` | Global EventBus autoload with typed signals |
| `component-system` | Composition patterns for reusable gameplay pieces |
| `resource-pattern` | Custom Resources for items, stats, config, and editor integration |
| `dependency-injection` | Autoloads, service locators, exported dependencies, scene injection |

### Gameplay Systems

| Skill | Description |
|-------|-------------|
| `player-controller` | CharacterBody2D/3D movement |
| `input-handling` | InputEvent, Input Map, controllers, mouse/touch, rebinding |
| `animation-system` | AnimationPlayer, AnimationTree, blend trees, state machines |
| `tween-animation` | Tween class, easing, chains, parallel sequences |
| `audio-system` | Audio buses, music management, SFX pooling, spatial audio |
| `inventory-system` | Resource-based inventory, slots, stacking, UI binding |
| `dialogue-system` | Branching dialogue trees, conditions, UI presentation |
| `save-load` | ConfigFile, JSON, Resource serialization, save versioning |
| `ai-navigation` | NavigationAgent2D/3D, steering, patrols, behavior trees |
| `ability-system` | Resource-based abilities, cost/cooldown/cast, buffs, tags |
| `camera-system` | Smooth follow, screen shake, zones, transitions |
| `localization` | TranslationServer, CSV/PO files, RTL, pluralization |
| `procedural-generation` | Noise, BSP dungeons, cellular automata, WFC |

### UI, Rendering, Physics, And Deployment

| Skill | Description |
|-------|-------------|
| `godot-ui` | Control nodes, themes, anchors, containers |
| `responsive-ui` | Stretch modes, aspect ratios, DPI, mobile/desktop adaptation |
| `hud-system` | Health bars, score, minimap, notifications, damage numbers |
| `physics-system` | Bodies, areas, raycasting, shapes, Jolt, ragdolls |
| `2d-essentials` | TileMaps, parallax, 2D lights/shadows, particles |
| `3d-essentials` | Materials, lighting, shadows, environment, GI, fog, LOD |
| `shader-basics` | Godot shader language, visual shaders, post-processing |
| `particles-vfx` | GPUParticles2D/3D, materials, subemitters, trails |
| `xr-development` | OpenXR, XROrigin3D, hand tracking, controllers, Meta Quest |
| `mobile-development` | Android/iOS export, signing, lifecycle, permissions, plugins |

### Multiplayer, Build, Scripting, And Data

| Skill | Description |
|-------|-------------|
| `multiplayer-basics` | MultiplayerAPI, ENet/WebSocket, RPCs, authority |
| `multiplayer-sync` | MultiplayerSynchronizer, interpolation, prediction |
| `dedicated-server` | Headless export, server architecture, lobbies |
| `export-pipeline` | Platform exports and CI/CD |
| `godot-optimization` | Profiler, draw calls, physics tuning, memory |
| `addon-development` | EditorPlugin, tool scripts, custom inspectors, dock panels |
| `assets-pipeline` | Import settings for images, 3D scenes, audio, resources |
| `gdscript-patterns` | Static typing, await/coroutines, lambdas, exports |
| `gdscript-advanced` | Performance idioms, metaprogramming, `@tool`, profiler recipes |
| `csharp-godot` | C# conventions, GodotSharp APIs, project setup |
| `csharp-signals` | C# signal delegates, EmitSignal, async awaiting |
| `gdextension` | C++ godot-cpp and Rust gdext native extensions |
| `multithreading` | WorkerThreadPool, Thread, Mutex, deferred calls |
| `math-essentials` | Vectors, transforms, interpolation, curves, RNG |
| `limboai` | LimboAI behavior trees and hierarchical state machines |
| `beehave` | Beehave pure-GDScript behavior trees |

## Validation

Run the skill validator before merging changes:

```bash
node scripts/validate-skills.mjs
```

The validator checks skill metadata, cross-references, and repository structure expected by Codex for Godot. Keep it passing alongside any manual review for changed skills or personas.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE)
