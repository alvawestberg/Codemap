import pyray as ray

ray.init_window(800, 600, "Mitt första raylib-spel")

while not ray.window_should_close():
    ray.begin_drawing()
    ray.clear_background(ray.RAYWHITE)

    ray.draw_text("Raylib fungerar!", 250, 280, 30, ray.BLACK)

    ray.end_drawing()

ray.close_window()

