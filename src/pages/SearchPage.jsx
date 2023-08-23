import { SearchComponent } from "../components/User/SearchComponent/SearchComponent";
import { Card } from "../components/UI/Card";
import {MetricsComponent} from "../components/User/MetricsComponent/MetricsComponent.jsx";

export const SearchPage = () => {
  return (
    <div className="w-full min-h-screen content-center">
      <div className="bg-indigo-700 h-56 relative">
        {/* Card  */}
        <Card className="absolute shadow-lg shadow-indigo-300 h-[150px] w-[50%] top-[9em] left-[22em] mx-auto">
          <SearchComponent />
        </Card>
      </div>
      <MetricsComponent/>
    </div>
  );
};
