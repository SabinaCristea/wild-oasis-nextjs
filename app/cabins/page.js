import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import { EB_Garamond } from "next/font/google";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

//the page gets regenerated for each request = becomes dynamic again
// export const revalidate = 0;

//doesn't make a lot of sense to regenerate this page for every single request, which means making a network trip to the Supabase API for every single user and every single request.  So again, what we need is some kind of middle ground.
// And so that's where incremental static regeneration comes into play.

//So incremental static regeneration will regenerate a static page and fetch fresh data for it from time to time.
//And we can simply define that time using this revalidate value right here.

//EG. once per hr = 3600
export const revalidate = 3600; //this one does not apply anymore after searchParams were set = the page becomes dynamic

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        {/* the key is used so the loading spinner appears when changing filters */}
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
