import type { Hsl } from "./types";

export function randomColor(rand: () => number): Hsl {
  // Math.floor() calls omitted since Uint16Array() does it
  return new Uint16Array([
    // hue = 0 to 360 (whole color spectrum)
    rand() * 360,
    // saturation = 40 to 100 (avoid greyish colors)
    40 + rand() * 60,
    // lightness = 0 to 100 but probabilities are a bell curve around 50%
    (rand() + rand() + rand() + rand()) * 25,
  ]);
}
