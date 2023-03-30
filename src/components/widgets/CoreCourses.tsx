import { FC } from "react";
import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";
import CoreQuarter from "@/components/shared/CoreQuarter";

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
          <div className="mt-12 flex gap-5 flex-col md:flex-row">
            <CoreQuarter
              quarterName={"Quarter I"}
              quarterDescription={
                "CS-101: Object-Oriented Programming using TypeScript"
              }
              quarterNo={"1"}
            />

            <CoreQuarter
              quarterName={"Quarter II "}
              quarterDescription={
                "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
              }
              quarterNo={"2"}
            />

            <CoreQuarter
              quarterName={"Quarter III"}
              quarterDescription={
                "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development"
              }
              quarterNo={"3"}
            />
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default CoreCourses;
