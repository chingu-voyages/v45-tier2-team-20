import { useEffect, useState } from "react";
import { Label } from "../../UI/Label";
import { Input } from "../../UI/Input";
import { Button } from "../../UI/Button";
import { BsSearch } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";
import { useApi } from "../../../contexts/APIcontext";

export const SearchComponent = () => {
    const [name, setName] = useState([]);
    const [yearOfStrike, setYearOfStrike] = useState([]);
    const [meteoriteComposition, setMeteoriteComposition] = useState([]);
    const [massRange, setMassRange] = useState([]);

    const [placeholderValue, setPlaceholderValue] = useState("Search meteor data...");

    const { meteoriteData, searchInputValue, setSearchInputValue } = useApi();

    let filteredListOfMeteoriteNameData;
    let filteredListOfMeteoriteYearOfStrikeData;
    let filteredListOfMeteoriteCompositionData;
    let filteredListOfMeteoriteMassRangeData;

    if (searchInputValue !== undefined) {
        filteredListOfMeteoriteNameData = meteoriteData.filter((meteorite) => {
            return meteorite.name.toLowerCase().includes(searchInputValue.toLowerCase());
        })
        filteredListOfMeteoriteYearOfStrikeData = meteoriteData.filter((meteorite) => {
            return new Date(meteorite.year).getFullYear().toString().includes(searchInputValue);
        })
        filteredListOfMeteoriteCompositionData = meteoriteData.filter((meteorite) => {
            return meteorite.recclass.toLowerCase().includes(searchInputValue.toLowerCase());
        })
        filteredListOfMeteoriteMassRangeData = meteoriteData.filter((meteorite) => {
            return ((meteorite.mass) / 1000).toString().includes(searchInputValue);
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setSearchInputValue(searchInputValue);
        console.log("searchInputValue: ", searchInputValue);
        setName(filteredListOfMeteoriteNameData);
        console.log("name: ", name);
        setYearOfStrike(filteredListOfMeteoriteYearOfStrikeData);
        console.log("yearOfStrike: ", yearOfStrike);
        setMeteoriteComposition(filteredListOfMeteoriteCompositionData);
        console.log("meteoriteComposition: ", meteoriteComposition);
        setMassRange(filteredListOfMeteoriteMassRangeData);
        console.log("massRange: ", massRange);
        setSearchInputValue("");
    }

    const handleOnChange = (e) => {
        setSearchInputValue(e.target.value);
        console.log("Input value: ", e.target.value);
    }

    const clearSearchInputValue = (e) => {
        setSearchInputValue("");
        setName("");
        setYearOfStrike("");
        setMeteoriteComposition("");
        setMassRange("");
        console.log("Clear input value: ", e.target.value);
    }

    const handleOnClickName = () => {
        setPlaceholderValue(placeholderTextSwitch("name"));
        searchInputValue && setSearchInputValue(searchInputValueSwitch(name));
        console.log("getMeteoritesNameData: ", name);
    }

    const handleOnClickYearOfStrike = () => {
        setPlaceholderValue(placeholderTextSwitch("year"));
        searchInputValue && setSearchInputValue(searchInputValueSwitch(yearOfStrike));
        console.log("getMeteoritesYearOfStrikeData: ", yearOfStrike);
    }

    const handleOnClickMeteoriteComposition = () => {
        setPlaceholderValue(placeholderTextSwitch("composition"));
        searchInputValue && setSearchInputValue(searchInputValueSwitch(meteoriteComposition));
        console.log("getMeteoritesCompositionData: ", meteoriteComposition);
    }

    const handleOnClickMassRangeInKilograms = () => {
        setPlaceholderValue(placeholderTextSwitch("mass"));
        searchInputValue && setSearchInputValue(searchInputValueSwitch(massRange));
        console.log("getMeteoritesMassRangeData: ", massRange);
    }

    const placeholderTextSwitch = (text) => {
        switch (text) {
            case "name":
                return "Search by meteor name (Ex: Aarhus)";
            case "year":
                return "Search by meteor year of strike (Ex: 1880)";
            case "composition":
                return "Search by meteorite composition (Ex: 'Iron' or 'H4')";
            case "mass":
                return "Search by meteorite mass range (Ex: 1.44)";
            default:
                return "Search...";
        }
    }

    const searchInputValueSwitch = (searchValue) => {
        switch (searchValue) {
            case name:
                return name;
            case yearOfStrike:
                return yearOfStrike;
            case meteoriteComposition:
                return meteoriteComposition;
            case massRange:
                return massRange;
            default:
                return name;
        }
    }

    return (
        <section className="flex flex-col justify-between">
            <form className="flex flex-col space-y-3 mt-1 px-6 pt-6 md:flex-row md:space-x-6 md:space-y-0 md:pt-8" onSubmit={handleOnSubmit}>
                <section className="relative flex-1 justify-center">
                    <Label htmlFor="search" className="sr-only" text="Search"></Label>
                    <BsSearch style={{ color: "rgb(99 102 241)", height: "20px", width: "20px", position: "absolute", top: "34%", left: "2%" }} />
                    <Input type="text" id="search" className="p-4 pl-12 pr-14 text-md text-slate-800 rounded-lg bg-white focus:ring-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  placeholder-gray-400 shadow-md shadow-indigo-200 w-full md:text-lg md:pl-14 md:pr-20" placeholder={placeholderValue} name={placeholderValue} value={searchInputValue} onChange={handleOnChange} required />
                    <Button className="absolute top-[1vh] right-[1vw]" onClick={clearSearchInputValue}>
                        <IoCloseCircle style={{ color: "rgb(99 102 241)", height: "30px", width: "30px" }} />
                    </Button>
                </section>

                <Button type="submit" className="text-md text-slate-200 font-semibold rounded-full bg-indigo-500 border-indigo-700 hover:bg-indigo-600 focus:ring-2 focus:outline-none focus:ring-indigo-900 focus:bg-indigo-200 focus:text-slate-800 py-3 md:px-8 md:py-4" text="Search" />
            </form>

            <section className="flex flex-wrap justify-center gap-2 p-4 text-md font-semibold text-indigo-500 md:pl-6 md:justify-start md:pt-6">
                <Button text="Name" type="button" className="border-solid border-2 border-indigo-400 rounded-md hover:text-slate-800 hover:border-indigo-900 focus:border-transparent focus:ring-2 focus:outline-none focus:ring-indigo-900 focus:text-slate-800 px-6 py-1 mt-3 md:mt-0" onClick={handleOnClickName} />
                <Button text="Year of strike" type="button" className="border-solid border-2 border-indigo-400 rounded-md hover:text-slate-800 hover:border-indigo-900 focus:border-transparent focus:ring-2 focus:outline-none focus:ring-indigo-900 focus:text-slate-800 px-6 py-1 mt-3 md:mt-0" onClick={handleOnClickYearOfStrike} />
                <Button text="Meteorite Composition" type="button" className="border-solid border-2 border-indigo-400 rounded-md hover:text-slate-800 hover:border-indigo-900 focus:border-transparent focus:ring-2 focus:outline-none focus:ring-indigo-900 focus:text-slate-800 px-6 py-1 mt-3 md:mt-0" onClick={handleOnClickMeteoriteComposition} />
                <Button text="Mass range" type="button" className="border-solid border-2 border-indigo-400 rounded-md hover:text-slate-800 hover:border-indigo-900 focus:border-transparent focus:ring-2 focus:outline-none focus:ring-indigo-900 focus:text-slate-800 px-6 py-1 mt-3 md:mt-0" onClick={handleOnClickMassRangeInKilograms} />
            </section>
        </section>
    )
}
