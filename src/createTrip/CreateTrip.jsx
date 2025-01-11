import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { SelectBudgetOptions, SelectTravelersList } from "../constants/Options";
import { Button } from "../components/ui/button";
import { toast } from "sonner";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { AI_PROMPT, chatSession} from "@/service/AImodel";

const CreateTrip = () => {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState({});
  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onGenerate = async () => {
    if (
      formData.location &&
      formData.days &&
      formData.budget &&
      formData.people !== undefined
    ) {
      const FINAL_PROMPT = 
        AI_PROMPT.replace("{location}",formData.location.label)
        .replaceAll("{totalDays}", formData.days)
        .replace("{traveller}", formData.people)
        .replace("{budget}", formData.budget);
        console.log(FINAL_PROMPT)
      
      const result = await chatSession.sendMessage(FINAL_PROMPT)
      console.log(result?.response?.text());
    } else {
      toast("Please fill all the details");
    }
  };
  return (
    <div className="mt-10 px-5 sm:px-10 md:px-32 lg:px-56 xl:px-72">
      <h2 className="font-bold text-3xl">
        ⛰️ Tell us your travel preferences 🏖️
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a custom itinerary based on your preferences.
      </p>
      <div className="mt-20 flex flex-col gap-5">
        <div>
          <h2 className="font-medium text-xl py-3 ">
            What is your destination?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (val) => {
                setPlace(val);
                handleInputChange("location", val);
              },
            }}
          />
        </div>
        <div>
          <h2 className="font-medium text-xl py-3 ">
            How many days are you planning your trip?
          </h2>
          <Input
            type="number"
            placeholder="Ex. 3"
            onChange={(e) => handleInputChange("days", e.target.value)}
          />
        </div>
      </div>
      <div>
        <h2 className="text-xl mt-16 font-medium">What is your budget?</h2>
        <div className="grid grid-cols-3 gap-5 my-5">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("budget", item.title)}
              className={`p-4 border rounded-lg hover:shadow-md cursor-pointer ${
                formData.budget === item.title
                  ? "border-2 border-black shadow-lg"
                  : ""
              }`}
            >
              <p className="text-4xl">{item.icon}</p>
              <p className="font-bold text-lg">{item.title}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl mt-16 font-medium">
          Who do you plan on travelling with on your next adventure?
        </h2>
        <div className="grid grid-cols-3 gap-5 my-5">
          {SelectTravelersList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("people", item.people)}
              className={`p-4 border rounded-lg hover:shadow-md cursor-pointer ${
                formData.people === item.people
                  ? "border-2 border-black shadow-lg"
                  : ""
              }`}
            >
              <p className="text-4xl">{item.icon}</p>
              <p className="font-bold text-lg">{item.title}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 flex justify-end">
        <Button onClick={() => onGenerate()}>Generate Trip</Button>
      </div>
    </div>
  );
};

export default CreateTrip;
