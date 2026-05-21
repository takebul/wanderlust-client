import DestinationCard from "@/components/DestinationCard";
import { cn } from "@heroui/styles";

const DestinationPage = async () => {
  const res = await fetch("http://localhost:5000/destination");
  const destinations = await res.json();

  console.log(destinations);

  return (
    <div>
      <h1>All Destinations</h1>
      <div className="grid grid-cols-3 gap-4 w-11/12 mx-auto my-6">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;
