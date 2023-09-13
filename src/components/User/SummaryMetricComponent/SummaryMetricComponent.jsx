import { useApiContext } from "../../../contexts/APIcontext";
import BarChart from "./BarChart";
export const SummaryMetricComponent = () => {
  const { meteoriteData, filteredSearchInput } = useApiContext();
  return (
    <div className="px-5 sm:px-20">
      <BarChart
        searchedMetheroite={filteredSearchInput}
        metheroite={meteoriteData}
      />
    </div>
  );
};
