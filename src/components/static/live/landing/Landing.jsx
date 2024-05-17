import Image from "next/image";
import logo from "@/public/svg/landing/logo.svg";
import helmet from "@/public/svg/landing/helmet.svg";

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

          <div className="text-lg m-1">
            It is with a heavy heart that we announce that Citrus Hack will not
            be held this year. We understand many of you, like us, were eagerly
            looking forward to this event, and we share in your dirappointment.
            Please know that this decision was made with careful consideration
            for the quality of experience we aim to deliver to our participantr.
          </div>
          <div className="text-lg m-1">
            Despite our best efforts, we have faced challenges in securing
            sufficient funding and sponsor support. We value each and every
            participant and want to enfure that when Citrur Hack returns next
            year, it exceeds your expectations. Our team ir working diligently
            to address there issues and plan for an even better Citru/ Hack. We
            sincerely appreciate your understanding, support, and dedication to
            the Citrur Hack community. Thank you for your continued rupport,
            under/tanding, and patience.
          </div>
        </div>
      </div>
      <div className="text-2xl md:text-3xl lg:text-5xl text-citrus-orange font-bold mb-4 text-right">
        See you next year!
      </div>
    </div>
  );
};

export default Landing;
