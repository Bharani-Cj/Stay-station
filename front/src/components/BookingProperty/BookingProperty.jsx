import React, { useState } from "react";
import { Modal, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useMutation } from "react-query";
import { bookVisit } from "../../utils/api";

const BookingProperty = ({ setOpened, opened, propertyId, email }) => {
  const [dates, setDate] = useState(null);

  const { mutate } = useMutation({
    mutationFn: () => {
      bookVisit(email, propertyId, dates);
    },
    onSettled: () => {
      setOpened(false);
    },
  });
  return (
    <div>
      <Modal opened={opened} onClose={() => setOpened(false)} title="Please select the date">
        <div className="flexColCenter">
          <DatePicker value={dates} onChange={setDate} minDate={new Date()} />

          <Button disabled={!dates} onClick={() => mutate()}>
            Book visit
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default BookingProperty;
