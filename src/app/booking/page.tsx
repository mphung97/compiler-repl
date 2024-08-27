"use client";
import React, { useId } from "react";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { useStore, Provider } from "./context/default";
import { cn } from "@/lib/utils";
import { NumberInputProps, TextInputProps } from "./types";

const Header = () => {
  return (
    <div className="pb-6">
      <h1 className="text-black text-[28px] font-black">Booking</h1>
      <p className="text-[#282828] text-[16px] font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </div>
  );
};

const TextInput = ({ fieldName }: TextInputProps) => {
  const textInputId = useId();
  const [value, setStore] = useStore((store) => store[fieldName]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStore({ [fieldName]: e.target.value });
  };

  return (
    <div className="flex flex-col flex-1 gap-1">
      <Label htmlFor={textInputId}>{fieldName}</Label>
      <Input
        type="text"
        id={textInputId}
        placeholder="Placeholder"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const NumberInput = ({ fieldName, value, setValue }: NumberInputProps) => {
  const numberInputId = useId();

  return (
    <div className="flex flex-col flex-1 gap-1">
      <Label htmlFor={numberInputId}>{fieldName}</Label>
      <div
        id={numberInputId}
        className="flex justify-between items-center bg-[#f3f3f3] hover:bg-[#f3f3f3] rounded-[10px]"
      >
        <Button
          className="bg-transparent hover:bg-[#ebebeb] rounded-[10px]"
          onClick={() => setValue(value - 1)}
        >
          <MinusIcon />
        </Button>
        <span className="flex-1 text-center">{value}</span>
        <Button
          className="bg-transparent hover:bg-[#ebebeb] rounded-[10px]"
          onClick={() => setValue(value + 1)}
        >
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};

const Page = () => {
  const [store, setStore] = React.useState({
    city: "",
    arrival: "",
    departure: "",
  });

  const [star, setStar] = React.useState(0);
  const [room, setRoom] = React.useState(0);

  return (
    <div className="w-[360px] rounded-[20px] bg-white p-6">
      <Header />
      <div className="flex flex-col gap-4">
        <Provider value={[store, setStore]}>
          <TextInput fieldName="city" />
          <div className="flex gap-4">
            <TextInput fieldName="arrival" />
            <TextInput fieldName="departure" />
          </div>
        </Provider>
        <div className="flex gap-4">
          <NumberInput fieldName="star" value={star} setValue={setStar} />
          <NumberInput fieldName="room" value={room} setValue={setRoom} />
        </div>
      </div>
      <div className="py-6">
        <Button
          className={cn(
            "uppercase bg-black text-white rounded-[10px] text-[13px]",
            "hover:border hover:border-solid hover:border-black hover:text-black"
          )}
        >
          book now
        </Button>
      </div>
    </div>
  );
};

export default Page;
