export const TopPanel = () => {
  return (
    <header
      className={"bg-[url('/assets/white-marble.jpg')] bg-cover bg-center"}
    >
      <div
        className={
          "flex items-center justify-center border-4 border-double border-gray-500 px-4 py-2 rounded-md"
        }
      >
        <h1 className={"font-greek text-2xl font-bold text-gray-700 "}>
          Santorini
        </h1>
      </div>
      <div
        className={
          "relative left-1/2 -translate-x-1/2 w-[75%] rounded-b-[16px] " +
          "border border-double border-gray-500 border-t-0 rounded-md text-center py-1"
        }
      >
        <p className={"text-2xl font-bold text-gray-700 "}>hi</p>
      </div>
    </header>
  );
};
