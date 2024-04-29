<div align="center">
<img width="607" alt="Loogie blo" src="https://github.com/damianmarti/loogie-blo/assets/466652/2a20bb9b-c468-4fa0-a352-663f0b2f5ed6">
  <br><strong>loogie-blo</strong> is a small and fast library to generate Ethereum Loogies identicons.
  <br>It is a fork of the original Blo library by <a href="https://github.com/bpierre/blo" target="_blank">bpierre</a>.
  <br><br>
</div>

<p align=center><a href="https://www.npmjs.com/package/loogie-blo"><img src="https://badgen.net/npm/v/loogie-blo" alt="npm version"></a> <a href="https://bundlejs.com/?q=loogie-blo"><img src="https://deno.bundlejs.com/badge?q=loogie-blo" alt="bundle size"></a> <a href="https://github.com/damianmarti/loogie-blo/loogie-blob/main/LICENSE"><img src="https://badgen.net/github/license/damianmarti/loogie-blo" alt="License"></a></p>

## Features

- 🐥 **Small**: **[0.75 KB](https://bundlejs.com/?bundle&q=loogie-blo)** gzipped.
- 💥 **Fast**: **[3.5x faster](#library-comparison)** than the second fastest solution (performance from original blo).
- 🔍 **Optimized**: Leverages SVG to generate compact and sharp images at any size.
- 💆 **Simple**: Focuses on Ethereum identicons only, allowing for a simpler API.
- 🗂 **Typed**: Ships with [types included](#types).
- 👫 **Works everywhere**: browsers, [Bun](https://bun.sh/), [Node.js](http://nodejs.org/).
- ☁️ **Zero dependencies**.

## Library Comparison

| Library                               |              Renders/sec[^1] | Size                                                                                                       | Types                                        | Environment[^2]                                | Rendering |
| ------------------------------------- | ---------------------------: | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ---------------------------------------------- | --------: |
| <b>blo</b>                            | <nobr><b>💥 8,197</b></nobr> | [![](https://img.shields.io/badge/0.67kB-6ead0a)](https://bundlejs.com/?bundle&q=blo)                      | ![](https://img.shields.io/badge/yes-6ead0a) | ![](https://img.shields.io/badge/all-6ead0a)   |       SVG |
| <nobr>ethereum-blockies-base64</nobr> |                          807 | [![](https://img.shields.io/badge/2.75kB-ee4433)](https://bundlejs.com/?bundle&q=ethereum-blockies-base64) | ![](https://img.shields.io/badge/no-ee4433)  | ![](https://img.shields.io/badge/all-6ead0a)   |       PNG |
| <nobr>blockies-react-svg</nobr>       |                        1,749 | [![](https://img.shields.io/badge/4kB-ee4433)](https://bundlejs.com/?bundle&q=blockies-react-svg)          | ![](https://img.shields.io/badge/yes-6ead0a) | ![](https://img.shields.io/badge/react-ee4433) |       SVG |
| <nobr>@download/blockies</nobr>       |                          334 | [![](https://img.shields.io/badge/0.67kB-6ead0a)](https://bundlejs.com/?bundle&q=%6ead0a%2Fblockies)       | ![](https://img.shields.io/badge/no-ee4433)  | ![](https://img.shields.io/badge/dom-ee4433)   |    Canvas |
| <nobr>blockies-ts</nobr>              |                          342 | [![](https://img.shields.io/badge/1.31kB-6ead0a)](https://bundlejs.com/?bundle&q=blockies-ts)              | ![](https://img.shields.io/badge/yes-6ead0a) | ![](https://img.shields.io/badge/dom-ee4433)   |    Canvas |
| <nobr>react-blockies</nobr>           |                        2,361 | [![](https://img.shields.io/badge/4.72kB-ee4433)](https://bundlejs.com/?bundle&q=react-blockies)           | ![](https://img.shields.io/badge/no-ee4433)  | ![](https://img.shields.io/badge/react-ee4433) |    Canvas |

[^1]: The number of renders per second. It was measured on Chrome 117 Linux with an AMD Ryzen 7 PRO 4750U. [See ./benchmark](https://github.com/bpierre/blo/tree/main/benchmark) for the methodology.

[^2]: The term “all” refers to libraries that are framework agnostic and that run in browsers, Bun and Node.js.

## Getting Started

```sh
npm i -S loogie-blo
pnpm add loogie-blo
yarn add loogie-blo
```

```ts
import { loogieBlo } from "loogie-blo";

img.src = loogieBlo("0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045");
```

### React / Vue / Others

loogie-blo is fast enough to not require memoization or async rendering for common use cases.

```tsx
function AddressIcon({ address }: { address: `0x${string}` }) {
  return (
    <img
      alt={address}
      src={loogieBlo(address)}
    />
  );
}
```

## API

<details>
<summary><b><code>loogieBlo(address: Address, size = 64): string</code></b></summary>
<br>

Get a data URI string representing the identicon as an SVG image.

The `size` paramater shouldn’t usually be needed, as the image will stay sharp no matter what the size of the `img` element is.

Example:

```ts
import { loogieBlo } from "loogie-blo";

img.src = loogieBlo(address); // size inside the SVG defaults to 400px
img2.src = loogieBlo(address, 24); // set it to 24px
```

</details>

<details>
<summary><b><code>loogieBloSvg(address: Address, size = 64): string</code></b></summary>
<br>

Same as above except it returns the SVG code instead of a data URI string.

</details>

## Types

The library ships with TypeScript types included.

```ts
// A color in the HSL color space.
// [0]: 0-360 (hue)
// [1]: 0-100 (saturation)
// [2]: 0-100 (lightness)
export type Hsl = Uint16Array;

// An Ethereum address.
export type Address = `0x${string}`;
```

## Acknowledgements

- blo is a modernized version of [ethereum-blockies-base64](https://github.com/MyCryptoHQ/ethereum-blockies-base64), which I think was based on [ethereum/blockies](https://github.com/ethereum/blockies).
- This README style was heavily inspired by [colord](https://github.com/omgovich/colord).
- The visual was made in collaboration with [@dizzypaty](https://twitter.com/dizzypaty) 💖.

## FAQ

### Does it follow the exact same algorithm as Etherscan, MetaMask and others?

Yes.

### Does it work with ENS names?

No it only works with Ethereum addresses, but you can resolve the ENS name to an address (e.g. with [wagmi](https://wagmi.sh/core/actions/fetchEnsAddress)) and pass the result to blo.

### Can it be used to generate other types of identicons?

blo only focuses on the Ethereum identicons algorithm but you can use it with any data, just prefix it with `0x` to fulfill the expected `Address` type if you are using TypeScript.

### Why is it named blo?

blo is short for blockies, which is the name of [the original library](https://github.com/ethereum/blockies) it is based on.

## License

[MIT](./LICENSE)
