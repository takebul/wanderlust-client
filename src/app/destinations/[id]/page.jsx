import DeleteAlert from "@/components/DeleteAlert";
import EditModal from "@/components/EditModal";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaEdit, FaRegCalendar, FaTrash } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const destination = await res.json();

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
    <div className="max-w-7xl mx-auto">
      <div className="my-6 flex justify-between items-center">
        <Link href={"/destinations"} className="flex gap-2 items-center">
          <FaArrowLeft />
          Back to Destinations
        </Link>
        <div className="flex gap-2 items-center">
          <EditModal destination={destination} />
          <DeleteAlert destination={destination} />
        </div>
      </div>
      <Image alt={destinationName} src={imageUrl} height={500} width={800} />
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
      <h1 className="mt-10 text-2xl font-bold">Overview</h1>
      <p>{description}</p>
    </div>
  );
};

export default DestinationDetailsPage;
