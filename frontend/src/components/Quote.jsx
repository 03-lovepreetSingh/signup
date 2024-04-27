import background from "../assets/peakpx2.jpg";
export const Quote = () => {
  return (
    <div
      className="h-screen flex justify-center flex-col"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="flex justify-center">
        <div className="max-w-md text-center backdrop-blur-sm ">
          <div className="font-medium text-2xl font-serif">
            Nothing should bring you more joy than your own goals. Live only for
            that glorious moment. And if you can’t…then you’re no player at all.
          </div>
        </div>
      </div>
    </div>
  );
};
