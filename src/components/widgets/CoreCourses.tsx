import { FC } from "react";
import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";

// FC component
const CoreCourses = () => {
  const heading2 = "Core Courses \n(Common in All Specializations):";
  return (
    <>
      <section className="mt-16 lg:mt-20">
        <Wrapper>
          <div className="max-w-screen-md">
            <h4 className="text-teal-700 text-lg font-semibold uppercase mb-1">
              Program of Studies
            </h4>
            <h2 className="text-3xl font-bold whitespace-pre">{heading2}</h2>
            <p className="text-slate-600 mt-3">
              Every participant of the program will start by completing the
              following three core courses:
            </p>
            <div className="mt-5">
              <Button text="Learn More"></Button>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default CoreCourses;
