export const updateDestinationById = async (formData, id) => {
  const destination = Object.fromEntries(formData.entries());
  console.log(destination);

  const res = await fetch(`http://localhost:5000/destination/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(destination),
  });

  const data = await res.json();

  return data;
};
