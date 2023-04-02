"use client";
import { useState } from "react";

import Image from "next/image";

import Wrapper from "@/components/shared/Wrapper";
import CoreQuarter from "@/components/shared/CoreQuarter";

import { DataSpecializedTracks } from "./DataSpecializedTracks";

const SpecializedTracks = () => {
  const [selectedItem, setSelectedItem] = useState("wmd");

  const filteredSTrackData = DataSpecializedTracks.find((item) => {
    return item.slug === selectedItem;
  });

  // FC return
  return (
    <>
      <section className="mt-12 lg:mt-16">
        <Wrapper>
          {/* specialized track header */}
          <div className="lg:max-w-screen-md">
            <h2 className=" text-lg md:text-3xl font-bold">
              Specialized Tracks:
            </h2>
            <p className="text-slate-600 mt-3">
              After completing the first three quarters the participants will
              select one or more specializations consisting of two courses each:{" "}
            </p>
          </div>

          {/* specialized track body */}
          <div className="flex gap-x-4 gap-y-3 flex-col-reverse lg:flex-row mt-5">
            {/* content left */}

            <div className="basis-8/12 sticky top-28 self-start border border-slate-300 rounded-xl shadow-lg px-7 py-8">
              <h4 className="text-primary font-semibold mb-3">
                Specialized Program
              </h4>
              <h3 className="text-xl font-bold">
                {filteredSTrackData?.header}
              </h3>
              <p className="text-slate-600 mt-2 text-justify">
                {filteredSTrackData?.description}
              </p>
              <button className="text-primary font-medium mt-3 flex gap-x-1 items-center">
                Learn More
                <svg
                  width="8"
                  height="11"
                  viewBox="0 0 8 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-1"
                >
                  <path
                    d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                    stroke="#00616C"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              {/* quarter boxes */}

              <div className="mt-5 flex flex-col sm:flex-row gap-x-6 gap-y-5">
                {filteredSTrackData?.quarters.map((item, i) => {
                  return (
                    <CoreQuarter
                      key={i}
                      quarterName={item.header}
                      quarterDescription={item.description}
                      quarterNo={item.number}
                      haveBorder={false}
                    />
                  );
                })}
              </div>
            </div>

            {/* content right */}
            <div className="basis-4/12 px-2">
              {DataSpecializedTracks.map((item, i) => {
                return (
                  <div
                    className="flex gap-x-5 items-center mb-5 cursor-pointer"
                    key={i}
                    onClick={() => {
                      setSelectedItem(item.slug);
                    }}
                  >
                    <div className="basis-4/12">
                      <Image
                        src={item.image}
                        alt="Special Track"
                        className="hover:scale-105 duration-300 rounded-lg shadow-2xl"
                      />
                    </div>
                    <div className="basis-8/12">
                      <h4 className="text-primary text-sm font-medium">
                        Specialized Program
                      </h4>
                      <h3 className="font-bold text-base">{item.header}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default SpecializedTracks;
