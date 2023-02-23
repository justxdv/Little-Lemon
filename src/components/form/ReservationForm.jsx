import React, { useState } from "react";
import DateInput from "./DateInput";
import SelectInput from "./SelectInput";
import NumberInput from "./NumberInput";
import * as yup from "yup";
import PrimaryButton from "../buttons/PrimaryButton";

const ReservationForm = ({ availableTimes, dispatch, onSubmit }) => {
  const occasionOptions = ["Birthday", "Anniversary"];
  const today = new Date().toISOString().substr(0, 10);

  const [resDate, setResDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("");
  const [errors, setErrors] = useState({});

  const formValidation = {
    resDate: yup.string().required("Please select a date"),
    resTime: yup.string().required("Please select a time"),
    guests: yup
      .number()
      .required("Please enter a number of guests")
      .min(1, "Must be at least 1 guest")
      .max(10, "Limit to 10 guests"),
    occasion: yup
      .string()
      .required("Please select an occasion")
      .oneOf(occasionOptions, "Invalid occasion"),
  };
  const schema = yup.object().shape({
    ...formValidation,
  });
  const validateInput = (value, inputName) => {
    formValidation[inputName]
      .validate(value)
      .then(() => {
        setErrors({ ...errors, [inputName]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [inputName]: err.errors[0] });
      });
  };
  const handleDateChange = (newDate) => {
    setResDate(newDate);
    setResTime("");
    dispatch({ type: "updateTimes", date: newDate });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};
    setErrors({});
    schema
      .validate({ resDate, resTime, guests, occasion }, { abortEarly: false })
      .then((values) => {
        onSubmit(values);
      })
      .catch((err) => {
        err.inner.forEach((e) => {
          validationErrors[e.path] = e.message;
        });
        setErrors(validationErrors);
      });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md mx-auto"
    >
      <DateInput
        label="Choose date"
        w
        id="res-date"
        value={resDate}
        onChange={(e) => {
          handleDateChange(e);
          validateInput(e, "resDate");
        }}
        min={today}
        error={errors.resDate}
      />
      <SelectInput
        label="Choose time"
        id="res-time"
        options={availableTimes}
        value={resTime}
        onChange={(e) => {
          setResTime(e);
          validateInput(e, "resTime");
        }}
        error={errors.resTime}
      />
      <NumberInput
        label="Number of guests"
        id="guests"
        placeholder="1"
        min="1"
        value={guests}
        onChange={(e) => {
          setGuests(e);
          validateInput(e, "guests");
        }}
        error={errors.guests}
      />
      <SelectInput
        label="Occasion"
        id="occasion"
        options={occasionOptions}
        value={occasion}
        onChange={(e) => {
          setOccasion(e);
          validateInput(e, "occasion");
        }}
        error={errors.occasion}
      />
      <PrimaryButton type="submit">Make Your Reservation</PrimaryButton>
    </form>
  );
};
export default ReservationForm;
