import RatingStar from "../icons/StarRating";

const Rating = ({ rating }) => {
  const stars = Array(5).fill(false);
  stars.fill(true, 0, rating);
  return (
    <ul className="flex gap-1">
      {stars.map((star, index) => (
        <li key={index} className="w-6">
          {star ? (
            <RatingStar className="fill-secondary" />
          ) : (
            <RatingStar className="fill-black/20" />
          )}
        </li>
      ))}
    </ul>
  );
};

const TestimonialCard = ({ item, className }) => (
  <article
    className={`bg-white rounded-xl shadow-lg p-4 flex flex-col gap-4 text-black w-full max-w-xs ${className}`}
  >
    <div className="flex justify-between items-center gap-4">
      <img src={item.image} alt="" className="w-1/2 rounded-xl" />
      <b className="w-full">{item.name}</b>
    </div>
    <Rating rating={item.rating} />
    <p>
      {item.description ||
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quidem culpa harum accusantium quia dolores ullam eum id eos, ad reiciendis animi voluptatum excepturi dolor. Facilis blanditiis cupiditate veritatis vel!"}
    </p>
  </article>
);

export default TestimonialCard;
