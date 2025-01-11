const Cusines = ({ cusine }) => {
  return (
    <div className="flex items-center border-b-4 border-dotted border-neutral-700/40 py-2">
      <h1 className="flex-shrink-0 pr-8 text-2xl">{cusine.number}</h1>

      <div className="flex-shrink-0 w-1/3">
        <img
          src={cusine.image}
          alt="cusine-img"
          className="h-auto rounded-3xl"
        />
      </div>

      <div className="pl-8">
        <h1 className="text-2xl text-rose-300 uppercase tracking-tighter">
          {cusine.title}
        </h1>
        <p className="mt-4 text-lg text-gray-200 tracking-tight">
          {cusine.description}
        </p>
      </div>
    </div>
  );
};

export default Cusines;
