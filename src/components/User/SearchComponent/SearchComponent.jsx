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
            <form className="flex flex-col space-x-2 space-y-4 mt-1 px-6 pt-8 md:flex-row md:space-x-6 md:space-y-0" onSubmit={handleSubmit}>
                <section className="relative flex-1 justify-center">
                    <Label htmlFor="search" className="sr-only" text="Search"></Label>
                    <BsSearch style={{ color: "rgb(99 102 241)", height: "20px", width: "20px", position: "absolute", top: "34%", left: "4%" }} />
                    <Input type="text" id="search" className="p-4 pl-12 pr-14 text-md text-slate-800 rounded-lg bg-white focus:ring-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  placeholder-gray-400 shadow-md shadow-indigo-200 w-full md:pl-16 md:pr-20" value={inputValue} onChange={handleOnChange} required />
                    <Button className="absolute top-[1vh] right-[1vw]" onClick={clearInputValue}>
                        <IoCloseCircle style={{ color: "rgb(99 102 241)", height: "30px", width: "30px" }} />
                    </Button>
                </section>

                <Button type="submit" className="text-md text-slate-200 font-semibold rounded-full bg-indigo-500 border-indigo-700 hover:bg-indigo-600 focus:ring-2 focus:outline-none focus:ring-indigo-900 focus:bg-indigo-200 focus:text-slate-800 px-8 py-4" text="Search" />
            </form>

            <section className="inline-flex justify-center pl-6 md:justify-start md:pt-4">
                <section className="space-x-4 space-y-4">
                    <Button text="Year of strike" type="button" className="text-sm font-semibold text-indigo-500 border-solid border-2 border-indigo-400 rounded-md hover:text-slate-800 hover:border-indigo-900 focus:border-transparent focus:ring-2 focus:outline-none focus:ring-indigo-900 focus:text-slate-800 px-6 py-1" />
                    <Button text="Composition" type="button" className="text-sm font-semibold text-indigo-500 border-solid border-2 border-indigo-400 rounded-md hover:text-slate-800 hover:border-indigo-900 focus:border-transparent focus:ring-2 focus:outline-none focus:ring-indigo-900 focus:text-slate-800 px-6 py-1" />
                    <Button text="Mass range" type="button" className="text-sm font-semibold text-indigo-500 border-solid border-2 border-indigo-400 rounded-md hover:text-slate-800 hover:border-indigo-900 focus:border-transparent focus:ring-2 focus:outline-none focus:ring-indigo-900 focus:text-slate-800 px-6 py-1" />
                </section>
            </section>
        </section>
    )
}
