import { FC } from "react";
import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";
import CoreQuarter from "@/components/shared/CoreQuarter";

const CoreQuarterData = [
  {
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using TypeScript",
    number: "1",
  },
  {
    header: "Quarter II",
    description:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: "2",
  },
  {
    header: "Quarter III",
    description:
      "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: "3",
  },
];
// FC component
const CoreCourses = () => {
  const heading2 = "Core Courses \n(Common in All Specializations):";
  return (
    <>
      <section className="mt-12 lg:mt-16">
        <Wrapper>
          {/* Program of studies */}
          <div className="lg:max-w-screen-md">
            <h4 className="text-teal-700  text-base md:text-lg font-semibold uppercase mb-1">
              Program of Studies
            </h4>
            <h2 className=" text-base md:text-3xl font-bold whitespace-pre">
              {heading2}
            </h2>
            <p className="text-slate-600 mt-3">
              Every participant of the program will start by completing the
              following three core courses:
            </p>
            <div className="mt-5">
              <Button text="Learn More"></Button>
            </div>
          </div>

          {/* Boxes */}
          <div className="mt-12 flex gap-x-6 gap-y-4 flex-col md:flex-row">
            {CoreQuarterData.map((item) => {
              return (
                <CoreQuarter
                  quarterName={item.header}
                  quarterDescription={item.description}
                  quarterNo={item.number}
                />
              );
            })}
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default CoreCourses;
