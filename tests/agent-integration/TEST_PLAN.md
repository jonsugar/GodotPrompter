# Codex For Godot Session Integration Test Plan

Run these tests in a fresh Codex session with Codex for Godot installed or symlinked. Record results in [RESULTS.md](RESULTS.md) after each test.

## Category 1: Cold Start

### Test 1.1: Bootstrap Skill Loads

**Setup:** Fresh Codex session from a Godot project or this repository.

**Prompt:** "What Godot skills are available from Codex for Godot?"

**Expected:**

- Codex loads or summarizes `using-codex-for-godot`.
- The response mentions the catalog shape: Core/Process, Architecture, Gameplay, UI/HUD, Multiplayer, Build/Deploy, C#, and GDScript.
- The response names at least 10 specific skill ids.

**Pass criteria:** Codex shows awareness of the repo skill catalog, not generic Godot advice.

### Test 1.2: Skill Content Access

**Prompt:** "What does the state-machine skill cover? Show me the approaches."

**Expected:**

- Codex reads `skills/state-machine/SKILL.md`.
- The response describes enum-based, node-based, and resource-based approaches.
- The comparison matches the skill content.

**Pass criteria:** Response is grounded in `state-machine`, not a generic FSM tutorial.

### Test 1.3: Cross-Reference Navigation

**Prompt:** "The state-machine skill mentions related skills. What are they?"

**Expected:**

- Codex finds the related skills in `state-machine`.
- Codex briefly explains why each related skill might matter.

**Pass criteria:** Codex navigates local cross-references correctly.

## Category 2: Skill Discovery

### Test 2.1: State Machine Request

**Prompt:** "I need to add a state machine to my player character in Godot 4."

**Expected skill:** `state-machine`

**Expected behavior:**

- Codex reads `state-machine`.
- Codex asks about complexity when that affects enum vs node vs resource choice.
- Codex includes GDScript and C# guidance when code examples are useful.

**Pass criteria:** Uses skill content and explains a Godot-appropriate FSM choice.

### Test 2.2: Project Setup Request

**Prompt:** "I'm starting a new Godot 4.3 project. How should I organize it?"

**Expected skill:** `godot-project-setup`

**Expected behavior:**

- Codex reads `godot-project-setup`.
- Codex recommends the repo layout, autoload conventions, and `.gitignore` pattern from the skill.

**Pass criteria:** Directory guidance matches the skill rather than a generic project tree.

### Test 2.3: Enemy AI Request

**Prompt:** "I want enemies that patrol waypoints and chase the player when they get close."

**Expected skill:** `ai-navigation`

**Expected behavior:**

- Codex reads `ai-navigation`.
- Codex uses `NavigationAgent2D` or `NavigationAgent3D` as appropriate.
- Codex references `state-machine` for behavior transitions.

**Pass criteria:** Navigation-based patrol and chase plan grounded in the skill.

### Test 2.4: Save/Load Request

**Prompt:** "Help me set up a save/load system for my Godot game."

**Expected skill:** `save-load`

**Expected behavior:**

- Codex reads `save-load`.
- Codex compares `ConfigFile`, JSON, and Resource serialization.
- Codex recommends a save manager pattern with version migration.

**Pass criteria:** Recommendation and code shape match the skill.

### Test 2.5: Code Review Request

**Prompt:** "Review this GDScript for common Godot issues."

Paste this sample script:

```gdscript
extends CharacterBody2D

var health = 100
var speed = 200

func _process(delta):
    var player = get_node("/root/Main/Player")
    if player:
        var dir = (player.position - position).normalized()
        position += dir * speed * delta

func take_damage(amount):
    health -= amount
    if health <= 0:
        get_parent().remove_child(self)
        queue_free()
```

**Expected skill:** `godot-code-review`

**Expected behavior:**

- Codex reads `godot-code-review`.
- Codex flags untyped variables, `_process` movement, hardcoded node path, direct `position` movement on `CharacterBody2D`, and unnecessary `remove_child`.
- Codex uses the review stance/checklist from the skill.

**Pass criteria:** Finds at least 3 of the listed issues and explains Godot-specific impact.

## Category 3: Persona Routing

### Test 3.1: Architecture Persona

**Prompt:** "Design an enemy AI system with patrol, chase, attack, and alert states before we implement it."

**Expected persona:** `godot-game-architect`

**Expected behavior:**

- Codex uses the architect persona only if persona routing is available in the session.
- Codex reads `ai-navigation` and `state-machine`.
- Codex returns a scene tree, state map, signal map, and implementation steps.

**Pass criteria:** Planning is structured and grounded in local skills.

### Test 3.2: Implementation Persona

**Prompt:** "Implement a top-down player controller with WASD movement and an attack action."

**Expected persona:** `godot-game-dev`

**Expected skills:** `player-controller`, `input-handling`, `state-machine`

**Expected behavior:**

- Codex reads the relevant skills before editing.
- Codex creates or modifies focused Godot files.
- Codex runs the smallest useful validation command available in the test project.

**Pass criteria:** Implementation follows skill patterns and reports changed files plus validation.

### Test 3.3: UI Persona

**Prompt:** "Build a responsive health HUD that updates when the player's health changes."

**Expected persona:** `godot-ui-designer`

**Expected skills:** `hud-system`, `godot-ui`, `event-bus`, `responsive-ui`

**Expected behavior:**

- Codex uses Control nodes and a CanvasLayer HUD.
- Codex routes health changes through a signal or event-bus pattern.
- Layout is container-driven and responsive.

**Pass criteria:** UI structure is Godot-native and skill-grounded.

### Test 3.4: Review Persona

**Prompt:** "Review all the code we just wrote for Godot best practices."

**Expected persona:** `godot-code-reviewer`

**Expected skill:** `godot-code-review`

**Expected behavior:**

- Codex reviews changed files first.
- Codex prioritizes bugs, regressions, Godot misuse, and missing tests.
- Findings include file and line references where possible.

**Pass criteria:** Review follows code-review stance rather than a general summary.

## How To Run

1. Start a fresh Codex session.
2. Make Codex for Godot available through the repository `AGENTS.md` bootstrap or local Codex skill symlinks.
3. Navigate to an empty Godot test project for implementation tests.
4. Run each test sequentially and record outcomes in [RESULTS.md](RESULTS.md).
5. Keep Category 3 in one session if you want to test continuity across planning, implementation, UI, and review.
