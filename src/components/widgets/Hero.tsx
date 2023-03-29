// imports
import Image from "next/image";
import Wrapper from "../shared/Wrapper";

// poster import
import HeroPoster from "@/assests/Hero-Poster.png";
const Hero = () => {
  return (
    <>
      <section>
        <Wrapper>
          <div className="flex items-center">
            {/* left */}
            <div className="flex-1">
              <h4 className="text-teal-800 text-lg font-semibold mb-1">
                Presidential Initiative for Artificial Intelligence and
                Computing (PIAIC)
              </h4>
              <h1 className="text-5xl font-bold">
                Certified Web 3.0 and Metaverse Developer
              </h1>
              <p className="text-base font-normal mt-2">
                A One and Quarter Years Panaverse DAO Earn as you Learn Program
                Getting Ready for the Next Generation of the Internet.
              </p>

              <p className="mt-1">
                Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
                Cloud, Edge, Ambient Computing/IoT, Network Automation, and
                Bioinformatics Technologies
              </p>
              <button className="w-32 h-10 rounded-3xl bg-teal-700 mt-5 text-sm font-medium text-white">
                Learn More
              </button>
            </div>
            {/* right */}
            <div className="flex-1">
              <Image src={HeroPoster} alt="Hero-Poster" />
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Hero;
