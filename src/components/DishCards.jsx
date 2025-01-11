const DishCards = ({ cards }) => {
  return (
    <div>
      <img
        src={cards.image}
        alt={cards.title}
        className="rounded-3xl overflow-hidden hover:scale-95 duration-200 p-2 custom-white-shadow"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 tracking-tighter">
          {cards.title}
        </h3>
        <p className="text-sm text-gray-400">
          {cards.description.substring(0, 41) + "..."}
        </p>
      </div>
    </div>
  );
};

export default DishCards;
