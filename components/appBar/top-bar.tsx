import { ModeToggle } from "../mode-toggle";

const TopBar = () => {
  return (
    <div className="z-50 w-full flex justify-around items-center">
        <h1 className="w-full h-full text-center m-auto font-black text-4xl mt-5 mb-5"><a href="/">Kareer</a></h1>
        <ModeToggle />
    </div>
  );
};

export default TopBar;
