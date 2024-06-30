"use client";
import React, { useRef, useState } from "react";
import { For } from "million/react";
import { useVirtualizer } from "@tanstack/react-virtual";

import Lag from "react-lag-radar";
import { Button } from "@/components/ui/button";

const lotsOfElements = Array.from({ length: 5000 }, (_, i) => <div>{i}</div>);

const MillionApp = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: 10000,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
  });

  return (
    <>
      <div ref={parentRef} className="h-[400px] overflow-auto">
        <div
          style={{
            position: "relative",
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
          }}
        >
          <For each={rowVirtualizer.getVirtualItems()}>
            {(virtualItem) => (
              <div
                key={virtualItem.key}
                style={{
                  height: `${virtualItem.size}px`,
                  transform: `translateY(${virtualItem.start}px)`,
                }}
                className="bg-white absolute top-0 left-0 w-full text-[20px]"
              >
                v1.2.0-beta.{virtualItem.index}
                <div hidden>{...lotsOfElements}</div>
              </div>
            )}
          </For>
        </div>
      </div>
    </>
  );
};

function ReactApp() {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: 10000,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
  });

  return (
    <>
      <div ref={parentRef} className="h-[400px] overflow-auto">
        <div
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative",
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualItem) => (
            <div
              key={virtualItem.key}
              style={{
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
              className="bg-white absolute top-0 left-0 w-full text-[20px]"
            >
              v1.2.0-beta.{virtualItem.index}
              <div hidden>{...lotsOfElements}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const Page = () => {
  const [useMillion, setMillion] = useState(false);
  return (
    <div className="flex flex-col gap-4 w-[450px] text-center">
      <div className="flex justify-center">
        <Lag size={250} />
      </div>
      <p className="text-white">
        This demo is a benchmark to see how virtualization holds up with
        TanStack Virtual and Million.js vs React. Note that each row contains
        5000 hidden div elements.{" "}
        <a
          className="underline"
          href="https://github.com/aidenybai/million-tanstack-virtual"
        >
          Source Code
        </a>
      </p>
      <Button
        className="text-lg bg-white rounded-[10px] hover:bg-sky-100"
        onClick={() => setMillion(!useMillion)}
      >
        Currently using: {useMillion ? "Million.js" : "React"}
      </Button>
      {useMillion ? <MillionApp /> : <ReactApp />}
    </div>
  );
};

export default Page;
