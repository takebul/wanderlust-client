"use client";

import { updateDestinationById } from "@/lib/action";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextField,
  Select,
  TextArea,
} from "@heroui/react";
import { redirect } from "next/navigation";
import { FaEdit } from "react-icons/fa";

const EditModal = ({ destination }) => {
  const {
    description,
    imageUrl,
    departureDate,
    duration,
    price,
    category,
    country,
    destinationName,
    _id,
  } = destination;
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = await updateDestinationById(formData, _id);

    if (data.matchedCount > 0) {
      redirect(`/destinations/${_id}`);
    }

    console.log(data);
  };
  return (
    <div>
      <Modal>
        <Button
          variant="outline"
          className={"flex items-center gap-1 rounded-sm"}
        >
          <FaEdit /> Edit
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading>Edit Destination</Modal.Heading>
              </Modal.Header>
              <Modal.Body className="">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="p-10 space-y-8 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Destination Name */}
                      <div className="md:col-span-2">
                        <TextField
                          defaultValue={destinationName}
                          name="destinationName"
                          isRequired
                        >
                          <Label>Destination Name</Label>
                          <Input
                            placeholder="Bali Paradise"
                            className="rounded-2xl"
                          />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* Country */}
                      <TextField
                        defaultValue={country}
                        name="country"
                        isRequired
                      >
                        <Label>Country</Label>
                        <Input
                          placeholder="Indonesia"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>

                      {/* Category - Updated Select Component */}
                      <div>
                        <Select
                          defaultValue={category}
                          name="category"
                          isRequired
                          className="w-full"
                          placeholder="Select category"
                        >
                          <Label>Category</Label>
                          <Select.Trigger className="rounded-2xl">
                            <Select.Value />
                            <Select.Indicator />
                          </Select.Trigger>
                          <Select.Popover>
                            <ListBox>
                              <ListBox.Item id="Beach" textValue="Beach">
                                Beach
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="Mountain" textValue="Mountain">
                                Mountain
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="City" textValue="City">
                                City
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item
                                id="Adventure"
                                textValue="Adventure"
                              >
                                Adventure
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="Cultural" textValue="Cultural">
                                Cultural
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                              <ListBox.Item id="Luxury" textValue="Luxury">
                                Luxury
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            </ListBox>
                          </Select.Popover>
                        </Select>
                      </div>

                      {/* Price */}
                      <TextField
                        defaultValue={price}
                        name="price"
                        type="number"
                        isRequired
                      >
                        <Label>Price (USD)</Label>
                        <Input
                          type="number"
                          placeholder="1299"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>

                      {/* Duration */}
                      <TextField
                        defaultValue={duration}
                        name="duration"
                        isRequired
                      >
                        <Label>Duration</Label>
                        <Input
                          placeholder="7 Days / 6 Nights"
                          className="rounded-2xl"
                        />
                        <FieldError />
                      </TextField>

                      {/* Departure Date */}
                      <div className="md:col-span-2">
                        <TextField
                          defaultValue={departureDate}
                          name="departureDate"
                          type="date"
                          isRequired
                        >
                          <Label>Departure Date</Label>
                          <Input type="date" className="rounded-2xl" />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* Image URL - Removed preview */}
                      <div className="md:col-span-2">
                        <TextField
                          defaultValue={imageUrl}
                          name="imageUrl"
                          isRequired
                        >
                          <Label>Image URL</Label>
                          <Input
                            type="url"
                            placeholder="https://example.com/bali-paradise.jpg"
                            className="rounded-2xl"
                          />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* Description */}
                      <div className="md:col-span-2">
                        <TextField
                          defaultValue={description}
                          name="description"
                          isRequired
                        >
                          <Label>Description</Label>
                          <TextArea
                            placeholder="Describe the travel experience..."
                            className="rounded-3xl"
                          />
                          <FieldError />
                        </TextField>
                      </div>
                    </div>

                    {/* Buttons */}

                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type="submit" slot="close">
                        Save
                      </Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditModal;
