// imports
import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";

// poster import
import HeroPoster from "@/assests/Hero-Poster.png";
const Hero = () => {
  return (
    <>
      <section className="bg-red-100 pb-3">
        <Wrapper>
          <div className="flex flex-col md:flex-row items-center">
            {/* left */}
            <div className="flex-1 max-w-xl">
              <h4 className="text-teal-700 text-lg font-semibold mb-1">
                Presidential Initiative for Artificial Intelligence and
                Computing (PIAIC)
              </h4>
              <h1 className="text-4xl sm:text-5xl font-bold">
                Certified Web 3.0 and Metaverse Developer
              </h1>
              <p className="text-slate-600 mt-6">
                A One and Quarter Years Panaverse DAO Earn as you Learn Program
                Getting Ready for the Next Generation of the Internet.
              </p>

              <p className=" text-slate-600 mt-3">
                Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
                Cloud, Edge, Ambient Computing/IoT, Network Automation, and
                Bioinformatics Technologies.
              </p>
              <div className="mt-4">
                <Button text={"Enroll Now"} />
              </div>
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
