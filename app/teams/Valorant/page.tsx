import Image from "next/image";
import Backdrop from "../../assets/images/backdrop_valorant_team.gif";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import PlayerCard from "@/app/components/PlayerCard";

export default function Valorant() {
  return (
    <main>
      <div className="w-full h-[35vh] max-sm:h-[50vh] relative">
        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/70 to-white/0 to-10%"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center fill-zinc-100 z-10">
          <h1 className="text-9xl max-sm:text-8xl font-bold text-white drop-shadow-2xl">
            VALORANT
          </h1>
        </div>

        {/* Image */}
        <Image
          src={Backdrop}
          alt="hero banner"
          className="w-full h-full object-cover"
          quality={100}
          loading="lazy"
          unoptimized={true}
        />
      </div>

      {/* Varsity */}
      <MaxWidthWrapper className="py-20">
        <h1 className="font-bold text-6xl pb-6 text-primary">VARSITY</h1>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-wrap gap-x-20 gap-y-5 justify-stretch">
            <PlayerCard
              alias="KEVN"
              name="Kevin K."
              role="Sentinel"
            />
            <PlayerCard
              alias="Hypecks"
              name="Merwin T."
              role="Initiator"
            />
            <PlayerCard
              alias="jacky"
              name="Jacky C."
              role="Controller"
            />
            <PlayerCard
              alias="Yonn"
              name="Jonathan C."
              role="Duelist"
            />
            <PlayerCard
              alias="axel"
              name="Alex A."
              role="Duelist"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
