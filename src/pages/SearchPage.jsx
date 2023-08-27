import { SearchComponent } from "../components/User/SearchComponent/SearchComponent";
import { Card } from "../components/UI/Card";

export const SearchPage = () => {
  return (
    <div className="h-[100vh] w-full">
      <div className="relative bg-indigo-700 h-56">
        <Card className="absolute shadow-md shadow-indigo-500 top-[10vh] left-[8vw] h-[20vh] w-[80vw] md:w-[40vw] md:left-[30vw]">
          <SearchComponent />
        </Card>
      </div>
    </div>
  );
};
