import { useState } from "react";
import { Label } from "../../UI/Label";
import { Input } from "../../UI/Input";
import { Button } from "../../UI/Button";
import { BsSearch } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";

export const SearchComponent = () => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Value from input field: ", inputValue);
    }

    const handleOnChange = (e) => {
        setInputValue(() => e.target.value);
        console.log("Input value: ", e.target.value);
    }

    const clearInputValue = (e) => {
        setInputValue(() => e.target.value = "");
        console.log("Clear input value: ", e.target.value);
    }

    return (
        <section className="flex flex-col justify-between">
            <form className="flex flex-col space-y-3 mt-1 px-6 pt-6 md:flex-row md:space-x-6 md:space-y-0 md:pt-8" onSubmit={handleSubmit}>
                <section className="relative flex-1 justify-center">
                    <Label htmlFor="search" className="sr-only" text="Search"></Label>
                    <BsSearch style={{ color: "rgb(99 102 241)", height: "20px", width: "20px", position: "absolute", top: "34%", left: "2%" }} />
                    <Input type="text" id="search" className="p-4 pl-12 pr-14 text-md text-slate-800 rounded-lg bg-white focus:ring-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  placeholder-gray-400 shadow-md shadow-indigo-200 w-full md:text-lg md:pl-14 md:pr-20" value={inputValue} onChange={handleOnChange} required />
                    <Button className="absolute top-[1vh] right-[1vw]" onClick={clearInputValue}>
                        <IoCloseCircle style={{ color: "rgb(99 102 241)", height: "30px", width: "30px" }} />
                    </Button>
                </section>

                <Button type="submit" className="text-md text-slate-200 font-semibold rounded-full bg-indigo-500 border-indigo-700 hover:bg-indigo-600 focus:ring-2 focus:outline-none focus:ring-indigo-900 focus:bg-indigo-200 focus:text-slate-800 py-3 md:px-8 md:py-4" text="Search" />
            </form>

            <section className="flex flex-wrap justify-center gap-2 p-4 text-md font-semibold text-indigo-500 md:pl-6 md:justify-start md:pt-6">
                <Button text="Year of strike" type="button" className="border-solid border-2 border-indigo-400 rounded-md hover:text-slate-800 hover:border-indigo-900 focus:border-transparent focus:ring-2 focus:outline-none focus:ring-indigo-900 focus:text-slate-800 px-6 py-1 mt-3 md:mt-0" />
                <Button text="Composition" type="button" className="border-solid border-2 border-indigo-400 rounded-md hover:text-slate-800 hover:border-indigo-900 focus:border-transparent focus:ring-2 focus:outline-none focus:ring-indigo-900 focus:text-slate-800 px-6 py-1 mt-3 md:mt-0" />
                <Button text="Mass range" type="button" className="border-solid border-2 border-indigo-400 rounded-md hover:text-slate-800 hover:border-indigo-900 focus:border-transparent focus:ring-2 focus:outline-none focus:ring-indigo-900 focus:text-slate-800 px-6 py-1 mt-3 md:mt-0" />
            </section>
        </section>
    )
}
