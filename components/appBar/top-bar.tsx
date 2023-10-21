import { ModeToggle } from "../mode-toggle";

const TopBar = () => {
  return (
    <div className="w-full flex justify-around">
        <h1 className="w-full h-full text-center m-auto font-black text-4xl">Kareer</h1>
        <ModeToggle />
    </div>
  );
};

export default TopBar;
