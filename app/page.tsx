import Image from "next/image";
import Backdrop from "./assets/images/utesbanner.png";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import BoxWrapper from "./components/BoxWrapper";
import Overwatch2 from "./assets/images/overwatch2.jpg";
import TeamCard from "./components/TeamCard";
import Discord from "./assets/images/icons/discord.svg";
import Twitter from "./assets/images/icons/twitter.svg";
import Twitch from "./assets/images/icons/twitch.svg";
import CSGO from "./assets/images/cs.png";
import League from "./assets/images/league.png";
import Valorant from "./assets/images/val.png";
import Youtube from "./assets/images/icons/youtube.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="w-full h-[35vh] max-sm:h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/70  to-white/0 to-10%"></div>
        <Image
          src={Backdrop}
          alt="hero banner"
          className="w-full h-full object-cover"
          quality={100}
          loading="lazy"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-9xl max-md:text-7xl max-sm:text-5xl font-bold text-white drop-shadow-2xl max-lg:text-8xl text-center">
            UTES HOME
          </h1>
        </div>
      </div>

      <MaxWidthWrapper>
        {/* Hero section */}
        <h1 className="mt-20 max-sm:text-3xl max-sm:text-center text-primary text-6xl font-bold max-md:text-5xl">
          Welcome to UofT Esports!
        </h1>
        <p className="text-xl max-sm:text-base py-5 max-sm:text-center">
          UTES is a non-profit student group that is the hub for all Esports and
          gaming communities & activities at the University of Toronto. We aim
          to unite students by a common love of gaming through community events
          & discussions on and offline. We encourage you to come out and meet
          new people!
        </p>
        <div className="gap-x-3 flex flex-row max-sm:justify-center text-center max-sm:flex-col max-sm:gap-3">
          <a
            className="flex justify-center items-center text-center text-white bg-cyan-500 rounded-full px-10 py-3 max-sm:text-xl text-2xl bt font-semibold duration-50 hover:scale-105 active:scale-85 hover:bg-cyan-600"
            href="https://discord.gg/EyjrqZyjh8"
          >
            Join our Discord Server
          </a>
          <a
            className="flex justify-center items-center text-center text-white bg-cyan-500 rounded-full px-12 py-3 max-sm:text-xl text-2xl bt font-semibold duration-50 hover:scale-105 active:scale-85 hover:bg-cyan-600"
            href=" https://beacons.ai/uoftesports"
          >
            Check out our Links
          </a>
        </div>
      </MaxWidthWrapper>

      {/* Team section

      <section>
        <MaxWidthWrapper>
          <h1 className="mt-20 mb-5 max-sm:text-3xl max-sm:text-center text-primary text-6xl font-bold max-md:text-5xl">
            Meet the teams
          </h1>
          <div className="flex justify-between gap-5 w-full overflow-x-auto pr-3 pb-3 carousel">
            <TeamCard img={Overwatch2} game="Overwatch 2" link="Overwatch2" />
            <TeamCard
              img={League}
              game="League of Legends"
              link="LeagueOfLegends"
            />
            <TeamCard
              img={CSGO}
              game="Counter-Strike 2"
              link="CounterStrike2"
            />
            <TeamCard img={Valorant} game="Valorant" link="Valorant" />
          </div>
        </MaxWidthWrapper>
      </section> */}

      {/* Contact section */}
      <section className="mb-20">
        <MaxWidthWrapper>
          <h1 className="mt-20 mb-5 max-sm:text-3xl max-sm:text-center text-primary text-6xl font-bold max-md:text-5xl">
            Join our community
          </h1>
          <div className="flex justify-center md:justify-between items-center flex-wrap gap-5 mr-3">
            <Link
              target="_blank"
              href={"https://discord.gg/EyjrqZyjh8"}
              className="bg-primary px-16 py-6 md:px-20 md:py-8 rounded-2xl cyan_shadow hover:shadow-none hover:translate-x-2 hover:translate-y-2 duration-100 hover:bg-cyan-500"
            >
              <Image
                src={Discord}
                alt="Discord"
                className="w-8 md:w-16 aspect-square"
              />
            </Link>
            <Link
              target="_blank"
              href={"https://twitter.com/UofTEsports"}
              className="bg-primary px-16 py-6 md:px-20 md:py-8 rounded-2xl cyan_shadow hover:shadow-none hover:translate-x-2 hover:translate-y-2 duration-100 hover:bg-cyan-500"
            >
              <Image
                src={Twitter}
                alt="Twitter"
                className="w-8 md:w-16 aspect-square"
              />
            </Link>
            <Link
              target="_blank"
              href={"https://www.twitch.tv/uoftesports/videos"}
              className="bg-primary px-16 py-6 md:px-20 md:py-8 rounded-2xl cyan_shadow hover:shadow-none hover:translate-x-2 hover:translate-y-2 duration-100 hover:bg-cyan-500"
            >
              <Image
                src={Twitch}
                alt="Twitch"
                className="w-8 md:w-16 aspect-square"
              />
            </Link>
            <Link
              target="_blank"
              href={"https://www.youtube.com/channel/UCrSS_P3YwBogDOHa9oZnCZw"}
              className="bg-primary px-16 py-6 md:px-20 md:py-8 rounded-2xl cyan_shadow hover:shadow-none hover:translate-x-2 hover:translate-y-2 duration-100 hover:bg-cyan-500"
            >
              <Image
                src={Youtube}
                alt="Youtube"
                className="w-8 md:w-16 aspect-square"
              />
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  );
}
