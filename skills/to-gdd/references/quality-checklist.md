# To GDD Quality Checklist

Run this checklist manually before finalizing a GDD.

## Completeness

- Vision, genre, design pillars, target audience, core loop, controls, characters, UI, art direction, audio direction, content, technical systems, roadmap, risks, and next steps are present.
- Optional sections have been inferred from the design, not blindly asked section by section.
- Confirmed optional sections are included; rejected optional sections are omitted or noted as out of scope.
- The roadmap separates prototype, vertical slice, MVP, full game, and future scope where useful.
- The next step recommendation uses one of the allowed production-gate values.

## Specificity

- The player fantasy is concrete enough to evaluate.
- Primary verbs are observable.
- The core loop distinguishes moment-to-moment, session, and long-term play.
- Design pillars include trade-offs, not just adjectives.
- Content expectations are concrete enough to scope production.
- Technical systems describe design needs without selecting Godot implementation details.

## Uncertainty

- Important claims are tracked as `Confirmed`, `Assumed`, or `Unknown`.
- Unknowns are not silently filled in.
- Assumptions that could change scope are called out.
- External facts that were not verified are marked `Needs external verification`.

## Scope Control

- The GDD distinguishes prototype, vertical slice, MVP, full game, and future scope.
- Nice-to-have features do not leak into MVP unless justified.
- Production risks include content volume, balance complexity, tools needs, and playtest needs.
- The handoff identifies open decisions that later Godot planning must not guess.

## Research Integrity

- Research summaries extract reusable patterns, not protected expression.
- The GDD does not copy reference-game characters, names, exact content lists, level layouts, dialogue, art direction, music, or proprietary text.
- Reference games are used to clarify genre expectations, audience, mechanics, loops, and risks.
- Comparisons are framed as learning sources, not cloning instructions.

## Engine-Agnostic Boundary

- Before the production gate, the GDD does not choose Godot nodes, scene trees, script classes, plugins, import settings, or folder paths.
- If the user asks for Godot planning early, pause and explain that the GDD should be approved first unless they explicitly want to abandon the GDD workflow.
- The final handoff recommends relevant Codex for Godot skills only after the production-readiness recommendation.

## Final Recommendation

Use exactly one:

- `Ready for Godot planning`
- `Revise GDD first`
- `Needs research`
- `Pause / do not proceed`

Choose `Ready for Godot planning` only when the design is coherent enough for Godot-specific architecture and implementation planning.
