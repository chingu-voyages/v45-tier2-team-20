import { SearchComponent } from "../components/User/SearchComponent/SearchComponent";
import { Card } from "../components/UI/Card";
import { DataListComponent } from "../components/User/DataSummaryComponent/DataListComponent";
import { MetricsComponent } from "../components/User/MetricsComponent/MetricsComponent.jsx";
import { ApiContextProvider } from "../contexts/APIcontext";
import { SummaryMetricComponent } from "../components/User/SummaryMetricComponent/SummaryMetricComponent";

export const SearchPage = () => {
  return (
    <ApiContextProvider>
      <div className="w-full min-h-screen content-center bg-[#F7FAFF]">
        <div className="relative bg-indigo-700 h-56">
          <Card className="absolute mx-auto shadow-lg shadow-indigo-300 min-h-[15vh] w-[90%] top-[8vh] left-0 right-0 md:h-[15vh] md:w-[50%]">
            <SearchComponent />
          </Card>
        </div>
        <DataListComponent />
        <SummaryMetricComponent />
        <MetricsComponent />
      </div>
    </ApiContextProvider>
  );
};
