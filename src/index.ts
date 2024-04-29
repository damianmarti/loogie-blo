import type { Address } from "./types";

import { svg } from "./svg";

export type { Address, Hsl } from "./types";

export function blo(address: Address, size: number = 400): string {
  return "data:image/svg+xml;base64," + btoa(bloSvg(address, size));
}

export function bloSvg(address: Address, size: number = 400): string {
  return svg(address, size);
}
