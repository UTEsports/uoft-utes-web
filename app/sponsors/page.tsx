import BoxWrapper from "../components/BoxWrapper";
import MaxWidthWrapper from "../components/MaxWidthWrapper";
import Backdrop from "../assets/images/utesbanner.png";
import BMO from "../assets/images/BMO-logo_2R.png";
import BMONL from "../assets/images/BMONXTLVL_Blue_E.png";
import Image from "next/image";
import LU from "../assets/images/Levelup Logo (Landscape,Transparent).png";
export default function Sponsors() {
    return (
        <div>
            <div className="w-full h-[35vh] max-sm:h-[50vh] relative">
                {/* Gradient Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white/70 to-white/0 to-10%"></div>

                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-9xl max-sm:text-6xl font-bold text-white drop-shadow-2xl max-md:text-8xl z-10">
                    SPONSORS
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

            <h1 className="max-sm:text-4xl text-center uppercase text-primary text-6xl font-bold mb-12 px-7 pt-20">Thank you to our sponsors!</h1>
            
            {/* Sponsor section */}
            <MaxWidthWrapper>
                <BoxWrapper className="mt-20 text-center z-10">
                    <h1 className="text-5xl">Our Title Sponsor:</h1>
                    <div className="flex flex-row justify-evenly">
                        <Image
                src={BMO}
                alt="hero banner"
                className="w-1/4 h-full object-cover"
                quality={100}
                loading="lazy"
                    />
                    <Image src={BMONL} alt="BMO NXT LVL logo" className="-ml-40 w-1/2 h-1/6" />
                    </div>
                    
                    <a href="https://www.bmo.com/en-ca/main/personal/"><button className="bg-cyan-500 rounded-full px-12 py-3 text-2xl font-semibold duration-50 hover:scale-105 active:scale-95 hover:bg-cyan-600 mr-4 z-10">
                        Visit BMO
                    </button></a>
                    <a href="https://bmo.gg"><button className="bg-cyan-500 rounded-full px-12 py-3 text-2xl font-semibold duration-50 hover:scale-105 active:scale-95 hover:bg-cyan-600 z-10">
                        Visit BMONXTLVL
                    </button></a>
                    <p className="pt-5"> BMONXTLVL streams every Thursdays @ 7pm at <a href="https://twitch.tv/bmo_nxtlvl" className="font-semibold text-cyan-200">twitch.tv/bmo_nxtlvl</a>. Each stream features gaming and financial literacy tips with BMO's Gaming Relations Specialist. Join <a href="https://discord.gg/bmonxtlvl" className="font-semibold text-cyan-200">discord.gg/bmonxtlvl</a> to get access to exclusive content.</p>
                </BoxWrapper>
            </MaxWidthWrapper>
            
            <h1 className="max-sm:text-2xl text-center uppercase text-primary text-3xl font-bold px-7 pt-20">Co-Sponsors</h1>
            <MaxWidthWrapper className="mb-10">
                <div className="flex flex-row self-center">
                    <div className="flex flex-col text-center">
                    <Image src={LU} alt="BMO NXT LVL logo" className="self-center w-1/2 -mb-7" />
                    <a href="https://www.levelupreality.ca/"><button className=" -mt-10 text-white bg-cyan-500 rounded-full px-12 py-3 text-lg font-semibold duration-50 hover:scale-105 active:scale-95 hover:bg-cyan-600 z-10">
                        Levelup VR Arcade Toronto
                    </button></a>
                    <div className="text-center pt-4 w-1/2 self-center ">
                        Levelup Reality VR Arcade is Toronto's top spot for immersive virtual reality, perfect for student groups seeking a fun and unique experience. From social events to team-building, we offer a wide range of VR games that engage all interests. Connect, compete, and create unforgettable memories at Levelup Reality.
                    </div>
                </div>
                </div>
                
            </MaxWidthWrapper>
        </div>
    );
}
  