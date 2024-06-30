"use client";
import React from "react";
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { useStore, Provider } from "./context/default";

const Header = () => {
  console.log("Header rendering...");
  return (
    <div className="pb-6">
      <h1 className="text-black text-[28px] font-black">Book now</h1>
      <p className="text-[#282828] text-[16px] font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
    </div>
  );
};

const City = () => {
  const [city, setStore] = useStore((store) => store.city);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStore({ city: e.target.value });
  };

  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="city">City</Label>
      <Input
        type="text"
        id="city"
        placeholder="Placeholder"
        value={city}
        onChange={onChange}
      />
    </div>
  );
};

const Arrival = () => {
  const [arrival, setStore] = useStore((store) => store.arrival);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStore({ arrival: e.target.value });
  };

  return (
    <div className="flex flex-col flex-1 gap-1">
      <Label htmlFor="arrival">Arrival</Label>
      <Input
        type="text"
        id="city"
        placeholder="Placeholder"
        value={arrival}
        onChange={onChange}
      />
    </div>
  );
};

const Departure = () => {
  const [departure, setStore] = useStore((store) => store.departure);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStore({ departure: e.target.value });
  };

  return (
    <div className="flex flex-col flex-1 gap-1">
      <Label htmlFor="departure">Departure</Label>
      <Input
        type="text"
        id="city"
        placeholder="Placeholder"
        value={departure}
        onChange={onChange}
      />
    </div>
  );
};

const Star = ({
  star,
  setStar,
}: {
  star: number;
  setStar: (star: number) => void;
}) => {
  return (
    <div className="flex flex-col flex-1 gap-1">
      <Label htmlFor="star">Star</Label>
      <div
        id="star"
        className="flex justify-between items-center bg-[#f3f3f3] hover:bg-[#f3f3f3] rounded-[10px]"
      >
        <Button
          className="bg-transparent hover:bg-[#ebebeb] rounded-[10px]"
          onClick={() => setStar(star - 1)}
        >
          <MinusIcon />
        </Button>
        <span className="flex-1 text-center">{star}</span>
        <Button
          className="bg-transparent hover:bg-[#ebebeb] rounded-[10px]"
          onClick={() => setStar(star + 1)}
        >
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};

const Room = ({
  room,
  setRoom,
}: {
  room: number;
  setRoom: (room: number) => void;
}) => {
  return (
    <div className="flex flex-col flex-1 gap-1">
      <Label htmlFor="room">Room</Label>
      <div
        id="room"
        className="flex justify-between items-center bg-[#f3f3f3] hover:bg-[#f3f3f3] rounded-[10px]"
      >
        <Button
          className="bg-transparent hover:bg-[#ebebeb] rounded-[10px]"
          onClick={() => setRoom(room - 1)}
        >
          <MinusIcon />
        </Button>
        <span className="flex-1 text-center">{room}</span>
        <Button
          className="bg-transparent hover:bg-[#ebebeb] rounded-[10px]"
          onClick={() => setRoom(room + 1)}
        >
          <PlusIcon />
        </Button>
      </div>
    </div>
  );
};

const Page = () => {
  const store = React.useState({
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
        <Provider value={store}>
          <City />
          <div className="flex gap-4">
            <Arrival />
            <Departure />
          </div>
        </Provider>
        <div className="flex gap-4">
          <Star star={star} setStar={setStar} />
          <Room room={room} setRoom={setRoom} />
        </div>
      </div>
      <div className="py-6">
        <Button className="uppercase bg-black text-white rounded-[10px] text-[13px]">
          book now
        </Button>
      </div>
    </div>
  );
};

export default Page;
