import Image from "next/image";
import Backdrop from "./../assets/images/utesbanner.png";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import PlayerCard from "@/app/components/PlayerCard";

export default function Overwatch2() {
  return (
    <main>
      <div className="w-full h-[35vh] max-sm:h-[50vh] relative">
        {/* Gradient Overlay */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/70 to-white/0 to-10%"></div> */}

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-9xl max-md:text-7xl max-sm:text-5xl font-bold text-white drop-shadow-2xl max-lg:text-8xl text-center">
            STAFF
          </h1>
        </div>

        {/* Image */}
        <Image
          src={Backdrop}
          alt="hero banner"
          className="w-full h-full object-cover"
          quality={100}
          loading="lazy"
        />
      </div>

      <MaxWidthWrapper className="py-20">
        <h1 className="mb-5 max-sm:text-3xl max-sm:text-center text-primary text-6xl font-bold max-md:text-5xl">
          Esports Executives
        </h1>
        <div className="flex flex-wrap gap-x-7 gap-y-5 justify-normal items-stretch max-md:justify-center">
          <PlayerCard alias="kaprixal" name="Kirsten S." role="President" />
          <PlayerCard
            alias="JaidynPurple"
            name="Jaidyn Y."
            role="External Affairs"
          />
          <PlayerCard
            alias="ghoulies"
            name="Emily H."
            role="Marketing Operations"
          />
          <PlayerCard
            alias="zlion"
            name="Zilin C."
            role="Broadcast Operations"
          />
          <PlayerCard alias="fairyy" name="Ariana D." role="Treasurer" />
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <h1 className="mb-5 max-sm:text-3xl max-sm:text-center text-primary text-6xl font-bold max-md:text-5xl">
          Media Team
        </h1>
        <div className="flex flex-wrap gap-x-7 gap-y-5 justify-normal items-stretch max-md:justify-center">
          <PlayerCard
            alias="hugzowugzo"
            name="Hugo N."
            role="Head of Graphic Design"
            instagram="hugomakesmagic"
          />
          <PlayerCard
            alias="catalyst"
            name="Masaya C."
            role="Social Media Manager"
            instagram="masaya.chan"
            twitch="ttvcatalzying"
          />
          <PlayerCard
            alias="Mapsee"
            name="Nicole L."
            role="Graphic Designer & Social Media Manager"
          />
          <PlayerCard alias="alle" name="Alle S." role="Graphic Designer" />
          <PlayerCard
            alias="yvrini"
            name="Christina R."
            role="Graphic Designer"
          />
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="py-20">
        <h1 className="mb-5 max-sm:text-3xl max-sm:text-center text-primary text-6xl font-bold max-md:text-5xl">
          Broadcast Team
        </h1>
        <div className="flex flex-wrap gap-x-7 gap-y-5 justify-normal items-stretch max-md:justify-center">
          <PlayerCard
            alias="pearyonline"
            name="Elizabeth P."
            role="Producer / Observer"
            twitter="pearyonline"
            instagram=""
            twitch="pearyonline"
          />

          <PlayerCard
            alias="Spafflez"
            name="Zack S."
            role="Caster"
            twitter="Spafflez"
            instagram="Spafflez"
            twitch="Spafflez"
          />

          <PlayerCard
            alias="Cerocune"
            name="Bryan C."
            role="Caster"
            twitter=""
            instagram=""
            twitch="Cerocune"
          />

          <PlayerCard
            alias="HailMonkeyman"
            name="Richard W."
            role="Caster"
            twitter="hail_monkeyman"
            instagram="hail_monkeyman"
            twitch="hail_monkeyman"
          />

          <PlayerCard
            alias="EsTiny"
            name="Valentina V-M."
            role="Observer"
            twitter="estiny_"
            instagram="val.vrvscs"
            twitch=""
          />

          <PlayerCard
            alias="Natural"
            name="Igor T."
            role="Caster"
            twitter="NaturalCasts"
            instagram="rogit31"
            twitch="NaturalCasts"
          />

          <PlayerCard
            alias="Scouter"
            name="Timothy P."
            role="Producer"
            twitter=""
            instagram=""
            twitch=""
          />

          <PlayerCard
            alias="Zedroid"
            name="Daniel B."
            role="Producer"
            twitter=""
            instagram="Zedroid_"
            twitch="Zedroid_"
          />

          <PlayerCard
            alias="swanner"
            name="Jessica C."
            role="Caster"
            twitter=""
            instagram="jess.chen04"
            twitch=""
          />

          <PlayerCard
            alias="concordski"
            name="Franklin W."
            role="Producer"
            twitter="concordski_"
            instagram="concordski1231"
            twitch="concordski1231"
          />

          <PlayerCard
            alias="Rasaska"
            name="Charley Y."
            role="Caster/Observer"
            twitter="Rasaska_"
            instagram="charley.yeet"
            twitch="Rasaska"
          />

          <PlayerCard
            alias="BearLight"
            name="Chris L."
            role="Caster"
            twitter="bearlightcasts"
            instagram="bearlightcasts"
            twitch="bearlightcasts"
          />
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
