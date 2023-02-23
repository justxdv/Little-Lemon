import React from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { Link } from "react-router-dom";
import SpecialsCard from "../components/cards/SpecialsCard";
import restaurantImage from "../assets/images/restaurant.jpg";
import greekSaladImage from "../assets/images/dishes/greek-salad.jpg";
import lemonDessertImage from "../assets/images/dishes/lemon-dessert.jpg";
import bruchettaImage from "../assets/images/dishes/bruchetta.jpg";
import Container from "../components/Container";
import TestimonialCard from "../components/cards/TestimonialCard";
import testimonialImage1 from "../assets/images/testimonials/testimonial1.jpg";
import testimonialImage2 from "../assets/images/testimonials/testimonial2.jpg";
import testimonialImage3 from "../assets/images/testimonials/testimonial3.jpg";
import testimonialImage4 from "../assets/images/testimonials/testimonial4.jpg";
import marioAndAdrianImage1 from "../assets/images/mario-and-adrian1.jpg";
import marioAndAdrianImage2 from "../assets/images/mario-and-adrian2.jpg";
const specials = [
  {
    name: "Greek Salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    price: "12.99",
    image: greekSaladImage,
  },
  {
    name: "Bruchetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    price: "5.99",
    image: bruchettaImage,
  },
  {
    name: "Lemon Dessert",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    price: "5.00",
    image: lemonDessertImage,
  },
];
const testimonials = [
  {
    name: "John Doe",
    rating: 4,
    image: testimonialImage1,
  },
  {
    name: "Danilo Pineda",
    rating: 5,
    image: testimonialImage2,
  },
  {
    name: "Rodrigo Vergara",
    rating: 4,
    image: testimonialImage3,
  },
  {
    name: "Juan Perez",
    rating: 5,
    image: testimonialImage4,
  },
];
const Home = () => {
  return (
    <div id="home" className="flex flex-col gap-6">
      <section className="bg-primary text-white py-6 lg:py-12">
        <Container>
          <article className="flex flex-col gap-2 md:gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-4 lg:grid-flow-row lg:gap-x-6">
            <div>
              <h1 className="text-3xl font-bold md:text-5xl md:pb-4">
                Little Lemon
              </h1>
              <b className="text-white text-opacity-75 md:text-2xl">Chicago</b>
            </div>
            <div className="py-4 row-span-4">
              <img className="rounded-lg" src={restaurantImage} alt="" />
            </div>
            <p className="text-lg pb-4 lg:row-span-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
              delectus quasi repellendus voluptatum tempore, labore unde sit
              suscipit. Saepe omnis temporibus, qui maxime sequi id quidem eaque
              nesciunt voluptatibus debitis!
            </p>
            <Link to="/reserve">
              <PrimaryButton className="hover:bg-secondary/50">
                Reserve a table
              </PrimaryButton>
            </Link>
          </article>
        </Container>
      </section>
      <section>
        <Container className="flex flex-col gap-8 py-6 lg:gap-20">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-2xl md:text-4xl">Specials</h2>
            <Link to="/menu">
              <PrimaryButton>Online Menu</PrimaryButton>
            </Link>
          </div>
          <div className="flex flex-col mx-auto justify-between gap-8 md:flex-row">
            {specials.map((special, index) => (
              <SpecialsCard key={index} item={special} />
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-primary text-white py-6 lg:py-12">
        <Container className="flex flex-col gap-8">
          <h2 className="font-bold text-2xl">Testimonials</h2>
          <div className="grid gap-8 place-items-center sm:grid-cols-2 lg:grid-cols-4 md:grid-flow-row md:gap-6">
            {testimonials.map((special, index) => (
              <TestimonialCard key={index} item={special} />
            ))}
          </div>
        </Container>
      </section>
      <section className="text-black">
        <Container>
          <article className="grid pb-8 md:grid-flow-row md:grid-cols-2 md:grid-rows-2 md:gap-x-12 lg:py-12">
            <div>
              <h1 className="text-3xl font-bold md:pb-2 lg:text-5xl ">
                Little Lemon
              </h1>
              <b className="text-black text-opacity-75 lg:text-2xl">Chicago</b>
            </div>
            <div className="row-span-2 flex flex-col lg:items-center">
              <img
                className="rounded-lg w-3/4 relative translate-y-4 ml-auto shadow-xl z-10 max-w-sm lg:max-w-xs"
                src={marioAndAdrianImage1}
                alt=""
              />
              <img
                className="rounded-lg w-3/4 relative -translate-y-4 shadow-xl max-w-sm lg:max-w-xs"
                src={marioAndAdrianImage2}
                alt=""
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              minus suscipit culpa. Excepturi hic nam dolorum deleniti, quas
              beatae sapiente sunt delectus, vitae consectetur odit eos earum
              ipsam quis cumque.
            </p>
          </article>
        </Container>
      </section>
    </div>
  );
};

export default Home;
