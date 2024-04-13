import Release from "@/components/static/Release";
import RELEASES from "@/data/Releases";
import Live from "@/components/static/live/Live";
// import Postlive from "@/components/static/postlive/Postlive";
import Image from "next/image";
import mlh from "../../public/mlh-banner.svg";

const Home = () => {
  return (
    <div className="w-full relative">
      <Image src={mlh} className="fixed top-0 right-5 z-50 w-24" alt="mlh" />
      <Release release={RELEASES.STATIC.LIVE}>
        <Live />
      </Release>
      {/* <Release release={RELEASES.STATIC.POSTLIVE}>
        <Postlive />
      </Release> */}
    </div>
  );
};

export default Home;
