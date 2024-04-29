import type { Address } from "./types";

import { svg } from "./svg";

export type { Address, Hsl } from "./types";

export function loogieBlo(address: Address, size: number = 400): string {
  return "data:image/svg+xml;base64," + btoa(loogieBloSvg(address, size));
}

export function loogieBloSvg(address: Address, size: number = 400): string {
  return svg(address, size);
}
