import { useReducer, useState } from "react";
import ReservationForm from "../components/form/ReservationForm";
import { fetchAPI, submitAPI } from "../api/reservation";
import Container from "../components/Container";

const Reservations = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
  };
  const handleSubmit = async (values) => {
    try {
      await submitAPI(values);
      setSubmitSuccess(true);
    } catch (err) {
      console.log(err);
    }
  };
  const updateTimes = (state, action) => {
    const date = new Date(action.date);
    const newTimes = fetchAPI(date);
    return newTimes;
  };
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    {},
    initializeTimes
  );
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-bold md:text-5xl pb-4 md:pb-8">
        Reservations
      </h1>
      {submitSuccess ? (
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-bold">Congratulations!</h2>
          <p>
            Your table reservation has been confirmed at Little Lemon restaurant
            for the requested date and time. We look forward to welcoming you
            and offering you a delicious culinary experience in our cozy
            atmosphere.
          </p>
          <b>See you soon at Little Lemon!</b>
        </div>
      ) : (
        <>
          <div className="pb-10 flex flex-col gap-4 md:gap-8">
            <p>
              Thank you for choosing Little Lemon for your upcoming outing!
              Please complete the following form to schedule your reservation at
              our restaurant. We will be in touch to confirm the details of your
              reservation and look forward to offering you an unforgettable
              culinary experience.
            </p>
            <b>We look forward to your reservation!</b>
          </div>
          <ReservationForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            onSubmit={handleSubmit}
          />
        </>
      )}
    </Container>
  );
};

export default Reservations;
