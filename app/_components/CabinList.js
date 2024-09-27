import CabinCard from "./CabinCard";

import { getCabins } from "../_lib/data-service";
//import { unstable_noStore as noStore } from "next/cache";

async function CabinList({ filter }) {
  //noStore();
  //So in practice right now, opting out one of the components of the page out of the data cache.
  //So basically telling that it should not cache any data will opt out the entire route out of the data cache because it will dynamically generate this entire route itself.

  const cabins = await getCabins();

  if (!cabins.length) return null;

  let displayedCabins;
  if (filter === "all") displayedCabins = cabins;
  if (filter === "small")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === "medium")
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  if (filter === "large")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
