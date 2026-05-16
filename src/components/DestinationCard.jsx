import Image from "next/image";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";

const DestinationCard = ({ destination }) => {
  const {
    description,
    imageUrl,
    departureDate,
    duration,
    price,
    category,
    country,
    destinationName,
  } = destination;
  return (
    <div className="border shadow p-4 rounded-md space-y-0.5">
      <Image
        className=""
        alt={destinationName}
        src={imageUrl}
        height={400}
        width={400}
      />
      <div className="flex items-center gap-1 mt-4">
        <LuMapPin />
        <p>{country}</p>
      </div>
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{destinationName}</h2>
        <p>
          <span className="text-lg font-semibold">${price}/</span>
          <span className="text-sm">Person</span>
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <FaRegCalendar />
        {duration}
      </div>
      <Link
        href={`/destinations/${destination._id}`}
        className="mt-3 flex items-center gap-2 text-lg text-cyan-500 border-b w-fit border-b-cyan-500"
      >
        BOOK NOW <FaArrowUpRightFromSquare />
      </Link>
    </div>
  );
};

export default DestinationCard;
