"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";

const BookingCard = ({ destination }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [departureDate, setDepartureDate] = useState(null);

  const { price, _id, destinationName, imageUrl, country } = destination;

  const handleBooking = async () => {
    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      destinationId: _id,
      destinationName,
      price,
      imageUrl,
      country,
      departureDate: new Date(departureDate),
    };

    const res = await fetch(`http://localhost:5000/booking`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();

    console.log(data);

    toast.success("You booked successfully");
  };

  return (
    <div>
      <Card className="rounded-xs border">
        <p className="text-sm text-muted">Starting from</p>
        <h2 className="text-3xl font-bold text-cyan-500">${price}</h2>
        <p className="text-sm text-muted">per person</p>

        <DateField
          onChange={setDepartureDate}
          className="w-[256px]"
          name="date"
        >
          <Label>Departure Date</Label>
          <DateField.Group>
            <DateField.Input>
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>
          </DateField.Group>
        </DateField>

        <Button
          onClick={handleBooking}
          className={`w-full rounded-xs bg-cyan-500`}
        >
          {!user ? "Book Now" : "Booked"} <FaArrowRight />
        </Button>
      </Card>
    </div>
  );
};

export default BookingCard;
