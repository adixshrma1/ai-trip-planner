import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { SelectBudgetOptions, SelectTravelersList } from "../constants/Options";
import { Button } from "../components/ui/button";

const CreateTrip = () => {
  const [place, setPlace] = useState();
  const [days, setDays] = useState()
  const [budget, setBudget] = useState();
  const [people, setPeople] = useState();
  return (
    <div className="mt-10 px-5 sm:px-10 md:px-32 lg:px-56 xl:px-72">
      <h2 className="font-bold text-3xl">⛰️ Tell us your travel preferences 🏖️</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a custom itinerary based on your preferences.
      </p>
      <div className="mt-20 flex flex-col gap-5">
        <div>
          <h2 className="font-medium text-xl py-3 ">
            What is your destination?
          </h2>
          <Input
            type="text"
            placeholder="Enter a place"
            onChange={(e) => {setPlace(e.target.value); }}
          />
        </div>
        <div>
          <h2 className="font-medium text-xl py-3 ">
            How many days are you planning your trip?
          </h2>
          <Input
            type="number"
            placeholder="Ex. 3"
            onChange={(e)=> setDays(e.target.value)}
          />
        </div>
      </div>
      <div>
        <h2 className="text-xl mt-16 font-medium">What is your budget?</h2>
        <div className="grid grid-cols-3 gap-5 my-5">
          {SelectBudgetOptions.map((item, index)=>(
            <div key={index} onClick={()=> setBudget(item.title)} className="p-4 border rounded-lg hover:shadow-md cursor-pointer">
              <p className="text-4xl">{item.icon}</p>
              <p className="font-bold text-lg">{item.title}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl mt-16 font-medium">Who do you plan on travelling with on your next adventure?</h2>
        <div className="grid grid-cols-3 gap-5 my-5">
          {SelectTravelersList.map((item, index)=>(
            <div key={index} onClick={()=> setPeople(item.people)} className="p-4 border rounded-lg hover:shadow-md cursor-pointer">
              <p className="text-4xl">{item.icon}</p>
              <p className="font-bold text-lg">{item.title}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 flex justify-end">
        <Button onClick={()=> console.log({place, days, budget, people})}>Generate Trip</Button>
      </div>
    </div>
  );
};

export default CreateTrip;
