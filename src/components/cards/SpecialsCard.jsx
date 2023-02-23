import PrimaryButton from "../buttons/PrimaryButton";

const SpecialsCard = ({ item }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <article className="bg-black/5 rounded-xl overflow-hidden shadow-lg w-full flex flex-col max-w-xs">
      <div className="md:h-48 md:overflow-hidden lg:h-64">
        <img src={item.image} alt="" className="w-full" />
      </div>
      <div className="p-4 flex flex-col justify-between gap-4 md:gap-0 h-full">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-xl">{item.name}</h3>
          <b className="text-primary">{formatter.format(item.price)}</b>
        </div>
        <p>{item.description}</p>
        <PrimaryButton>Add to cart</PrimaryButton>
      </div>
    </article>
  );
};

export default SpecialsCard;
