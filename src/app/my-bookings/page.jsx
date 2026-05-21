import BookingCancelAlert from "@/components/BookingCancelAlert";
import { auth } from "@/lib/auth";
import { TrashBin } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  console.log(user);

  const res = await fetch(`http://localhost:5000/booking/${user?.id}`);

  const bookings = await res.json();
  console.log(bookings);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center">My Bookings Page</h1>
      <div className="space-y-5">
        {bookings.map((booking) => (
          <div key={booking._id} className="min-w-3xl flex gap-5 border p-4">
            <Image
              src={booking.imageUrl}
              alt={booking.destinationName}
              height={300}
              width={300}
            />
            <div className="space-y-2">
              <h1 className="font-bold text-2xl">{booking.destinationName} </h1>
              <p>
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
              </p>

              <p>Booking Id: {booking._id}</p>

              <div className="flex gap-20 justify-between">
                <p className="text-3xl font-bold text-cyan-500">
                  ${booking.price}
                </p>

                <div className="flex gap-2 items-center">
                  <BookingCancelAlert booking={booking} />

                  <Button
                    className={"rounded-xs text-white bg-cyan-600"}
                    variant="outline"
                  >
                    <FaEye />
                    View
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingPage;
