extends Node

signal scene_changed(scene_path: String)
signal game_paused(is_paused: bool)

var current_scene_path: String = ""
var is_paused: bool = false


func change_scene(scene_path: String) -> void:
	current_scene_path = scene_path
	scene_changed.emit(scene_path)
	get_tree().change_scene_to_file(scene_path)


func set_paused(paused: bool) -> void:
	is_paused = paused
	get_tree().paused = paused
	game_paused.emit(paused)


func quit_game() -> void:
	get_tree().quit()

