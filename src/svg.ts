import type { Address } from "./types";

import { randomColor } from "./image";
import { seedRandom } from "./random";

const SVG_START = `<svg `
  + `xmlns="http://www.w3.org/2000/svg" `
  + `shape-rendering="optimizeSpeed" `;

export function svg(address: Address, size: number) {
  const random = seedRandom(address.toLowerCase());

  const color = randomColor(random);
  // 35 to 90
  const chubbiness = 35 + random() * 55;
  // 180 to 180+chubbiness/4 (202)
  const mouthLength = 180 + (chubbiness / 4) * random();
  const translate = (810 - 9 * chubbiness) / 11;

  return `${SVG_START}width="${size}" height="${size}">`
    + '<g transform="scale(2.1 2.1) translate(-110, -100)">'
    + '<g id="eye1">'
    + '<ellipse stroke-width="3" ry="29.5" rx="29.5" id="svg_1" cy="154.5" cx="181.5" stroke="#000" fill="#fff"/>'
    + '<ellipse ry="3.5" rx="2.5" id="svg_3" cy="154.5" cx="173.5" stroke-width="3" stroke="#000" fill="#000000"/>'
    + '</g>'
    + '<g id="head">'
    + `<ellipse fill="hsl(${color[0]} ${color[1]}% ${color[2]}%)" stroke-width="3" cx="204.5" cy="211.80065" id="svg_5" rx="${chubbiness}" ry="51.80065" stroke="#000"/>`
    + '</g>'
    + '<g id="eye2">'
    + '<ellipse stroke-width="3" ry="29.5" rx="29.5" id="svg_2" cy="168.5" cx="209.5" stroke="#000" fill="#fff"/>'
    + '<ellipse ry="3.5" rx="3" id="svg_4" cy="169.5" cx="208" stroke-width="3" fill="#000000" stroke="#000"/>'
    + '</g>'
    + `<g class="mouth" transform="translate(${translate},0)">`
    + `<path d="M 130 240 Q 165 250 ${mouthLength} 235" stroke="black" stroke-width="3" fill="transparent"/>`
    + '</g>'
    + '</g>'
    + "</svg>";
}
