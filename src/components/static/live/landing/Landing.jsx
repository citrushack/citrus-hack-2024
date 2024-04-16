import Image from "next/image";
import logo from "@/public/svg/landing/logo.svg";
import helmet from "@/public/svg/landing/helmet.svg";
import Countdown from "./CountDown";
import Button from "./Button";

const Landing = () => {
  return (
    <div className="flex flex-col pb-12 relative items-center pr-[5%] lg:items-stretch w-screen min-h-[80%]">
      <Image
        src={helmet}
        alt="helmet"
        className="absolute top-0 left-0 w-1/3 lg:hidden"
      />
      <div className="flex justify-between">
        <Image src={helmet} alt="helmet" className="w-1/2 hidden lg:block" />
        <div className="flex flex-grow flex-col items-center lg:items-end">
          <Image src={logo} alt="logo" className="self-end w-2/3 lg:w-full" />
          <div className="text-xl lg:text-3xl">
            May 17 - 19, 2024 Coming Soon!
          </div>
          <Countdown />
        </div>
      </div>
      <div className="text-2xl md:text-3xl lg:text-5xl text-citrus-orange font-bold mb-4 text-right">
        See you at the end;
      </div>
      <div className="flex flex-col lg:flex-row w-full justify-evenly items-center gap-2">
        <Button text="Participate" link="/form/participant" />
        <Button text="Sponsor" link="/form/sponsor" />
        <Button text="Mentor" link="/form/mentor" />
        <Button text="Volunteer" link="/form/volunteer" />
      </div>
    </div>
  );
};

export default Landing;
