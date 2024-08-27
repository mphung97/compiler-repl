82:
"use memo";

import React from 'react';

const $empty = Symbol.for("react.memo_cache_sentinel");
/**
 * DANGER: this hook is NEVER meant to be called directly!
 *
 * Note that this is a temporary userspace implementation of this function
 * from React 19. It is not as efficient and may invalidate more frequently
 * than the official API. Please upgrade to React 19 as soon as you can.
 **/
export function c(size) {
  return React.useState(() => {
    const $ = new Array(size);
    for (let ii = 0; ii < size; ii++) {
      $[ii] = $empty;
    }
    // @ts-ignore
    $[$empty] = true;
    return $;
  })[0];
}

9: 
import { useStore, Provider, useStoreData } from "./context/custom";
83:
const { get, set, subscribe } = useStoreData({
  city: "",
  arrival: "",
  departure: "",
});
96:
<Provider value={{ get, set, subscribe }}>
114:
onClick={() => console.log(get())}
