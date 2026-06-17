---
name: ability-system
description: Use when building character abilities — Resource-based abilities with cost/cooldown/cast, buffs/debuffs, stat modifiers, gameplay tags, and HUD binding
---

# Ability System

Build a data-driven ability system from Godot-native parts: abilities are `Resource`s, an `AbilityComponent` node owns and runs them, and effects/stats/tags compose on top. No third-party addon required.

> **Related skills:** **resource-pattern** for the `Resource` data containers, **component-system** for the component node pattern, **event-bus** for cross-system ability events, **state-machine** for caster states (e.g. casting/stunned), **hud-system** for cooldown UI.

---

## 1. Architecture overview

An ability system in Godot 4.x is built from three collaborating layers:

- **Data layer — `Ability` (Resource):** Each ability is a `Resource` subclass with exported fields (`ability_name`, `cost`, `cooldown`, `cast_time`) and two methods: `can_activate(caster) -> bool` to validate preconditions, and `activate(caster) -> void` to execute the effect. Storing abilities as Resources lets designers create and balance them in the Godot editor without touching code.

- **Behaviour layer — `AbilityComponent` (Node):** A single node added to any entity that should use abilities. It holds the granted ability set, enforces cost/cooldown, and drives the `Ability.activate()` call. Four signals keep the rest of the game informed without coupling: `ability_activated(ability)`, `ability_failed(ability, reason)`, `cooldown_started(ability, duration)`, and `cooldown_finished(ability)`. Grant new abilities at runtime with `grant(ability)` and trigger them with `try_activate(ability_name)`.

- **Effects layer — stat modifiers, buffs/debuffs, and gameplay tags:** Abilities can read from and write to a caster's `StatSet` (a Resource that owns a dictionary of named `StatModifier` entries) to apply temporary or permanent stat changes. A `GameplayTagContainer` attached to the caster gates activation — for example, a "stunned" tag can prevent any ability from firing. These three deep-dives are covered in the reference documents:
  - [Stat modifiers and StatSet](references/stat-modifiers.md)
  - [Gameplay tags and conditions](references/tags-and-conditions.md)
  - [HUD binding for cooldowns and resource bars](references/ui-binding.md)

**Core rule:** *Data in Resources, behavior in the component, communication via signals.*

This separation means an `Ability` resource carries no Node references and can be safely duplicated, saved, and loaded as any other Godot Resource. The `AbilityComponent` owns runtime state (cooldown timers, active ability set), keeping `Ability` resources stateless and reusable across multiple casters simultaneously.

---

## Implementation Checklist

- [ ] `Ability` resource defined with `ability_name`, `cost`, `cooldown`, `cast_time`, `can_activate`, and `activate`
- [ ] `AbilityComponent` node added to entity; signals connected to UI and game logic
- [ ] Abilities granted via `grant(ability)` and triggered via `try_activate(ability_name)`
- [ ] Stat modifiers applied through `StatSet` (see [references/stat-modifiers.md](references/stat-modifiers.md))
- [ ] Gameplay tags gating activation via `GameplayTagContainer` (see [references/tags-and-conditions.md](references/tags-and-conditions.md))
- [ ] Cooldown bars and resource meters bound to `AbilityComponent` signals (see [references/ui-binding.md](references/ui-binding.md))
