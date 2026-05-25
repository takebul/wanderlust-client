export const updateDestinationById = async (formData, id) => {
  const destination = Object.fromEntries(formData.entries());
  console.log(destination);

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`,
    {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(destination),
    },
  );

  const data = await res.json();

  console.log(data);

  return data;
};
