# Codex for Godot Project Structure

Use this reference before creating, recommending, or reviewing Godot file paths. The goal is to keep project files organized by domain while preserving Godot conventions and avoiding empty scaffolding.

## Naming Rules

- Use `snake_case` for folders and files.
- Use `PascalCase` only for C# class names.
- Prefer domain-owned paths over broad catch-all folders.
- Create only folders that the current entity or feature actually needs.

## Top-Level Layout

```text
res://
├── addons/
├── global/
├── game/
└── game_menu/
```

### `res://addons/`

Third-party and project addons live here. Do not place gameplay, menu, or shared project code in `addons/` unless it is truly an addon.

### `res://global/`

Use this only for truly global autoloads, services, settings, and cross-domain utilities. A file belongs here when both gameplay and menu code may depend on it, or when it represents a project-wide service.

Good candidates:

- `res://global/audio/`
- `res://global/events/`
- `res://global/save/`
- `res://global/settings/`

Avoid placing feature-specific gameplay or menu files here just because they are reused by several nodes inside one domain. Keep domain-local shared files in that domain's `global/` folder instead.

### `res://game/`

Gameplay domain files live here. Use this for runtime play spaces, playable and non-playable characters, gameplay environments, gameplay-specific globals, and levels.

```text
res://game/
├── characters/
│   ├── playable/
│   └── non_playable/
├── entities/
├── environments/
├── global/
└── levels/
```

- `characters/playable/` contains player-controlled entities.
- `characters/non_playable/` contains NPCs, enemies, companions, and other non-player entities.
- `entities/` contains reusable gameplay entities that are not owned by one character, level, environment, or other entity.
- `environments/` contains reusable gameplay environment pieces and domain assets.
- `global/` contains gameplay-only services, shared resources, autoload candidates, and helpers.
- `levels/` contains playable maps, stages, rooms, or mission scenes.

Reusable gameplay entities use plural category folders:

```text
res://game/entities/
├── effects/
├── hazards/
├── interactables/
├── pickups/
├── projectiles/
└── props/
```

### `res://game_menu/`

Menu domain files live here. Use this for title screens, pause menus, settings screens, save-slot screens, menu-only entities, and menu-specific globals.

```text
res://game_menu/
└── global/
```

- `global/` contains menu-only services, shared resources, theme helpers, or autoload candidates.
- Individual menu entities and screens live directly under `res://game_menu/<entity_name>/`.

## Entity Co-Location

An entity is a cohesive game or menu concept such as a character, enemy, level, screen, pickup, interactable, or reusable environment piece. Keep the entity's files together under that entity's folder instead of scattering them by file type across the project.

Each entity may include any of these folders when needed:

```text
assets/
├── audio/
│   ├── music/
│   └── sfx/
├── fonts/
├── shaders/
├── sprites/
└── textures/
resources/
scenes/
scripts/
themes/
```

Create only the folders the entity actually uses. For example, a simple enemy might only need:

```text
res://game/characters/non_playable/slime/
├── assets/
│   └── sprites/
│       └── slime_idle.png
├── scenes/
│   └── slime.tscn
└── scripts/
    └── Slime.cs
```

A reusable projectile might use:

```text
res://game/entities/projectiles/projectile_bullet/
├── assets/
│   └── audio/
│       └── sfx/
│           └── hit.ogg
├── scenes/
│   └── projectile_bullet.tscn
└── scripts/
    └── projectile_bullet.gd
```

If an entity exists only as part of one owning entity, nest it under the owner with the same plural category pattern:

```text
res://game/characters/non_playable/bank_robber/
├── scenes/
│   └── bank_robber.tscn
├── scripts/
│   └── bank_robber.gd
└── entities/
    └── projectiles/
        └── projectile_bullet/
            ├── scenes/
            │   └── projectile_bullet.tscn
            └── scripts/
                └── projectile_bullet.gd
```

A menu screen might use:

```text
res://game_menu/save_slots/
├── scenes/
│   └── save_slots_menu.tscn
├── scripts/
│   └── SaveSlotsMenu.cs
└── themes/
    └── save_slots_menu_theme.tres
```

## Path Selection Checklist

Before adding a file, answer:

- Is this a third-party or reusable editor/runtime addon? Use `res://addons/`.
- Is this truly shared across gameplay and menus? Use `res://global/`.
- Is this gameplay-specific? Use `res://game/`.
- Is this menu-specific? Use `res://game_menu/`.
- Is this a reusable gameplay entity that is not owned by one entity? Use `res://game/entities/<plural_category>/<entity_name>/`.
- Does the file belong to a specific entity? Put it inside that entity's folder and create only the needed subfolders.
- Does a sub-entity belong only to one owner? Put it under the owner's `entities/<plural_category>/<entity_name>/` folder.
