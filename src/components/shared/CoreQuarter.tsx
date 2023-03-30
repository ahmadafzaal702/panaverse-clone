import { FC } from "react";

const CoreQuarter: FC<{
  quarterName: string;
  quarterDescription: string;
  quarterNo: string;
}> = ({ quarterName, quarterDescription, quarterNo }) => {
  return (
    <>
      <div className="border rounded-md flex-1 px-8 py-12 relative flex flex-col justify-center">
        <h4 className="text-lg font-bold">{quarterName}</h4>
        <p className="text-slate-600 mt-2">{quarterDescription}</p>
        <span className="absolute -top-3 right-10 text-[148px] text-gray-200 font-bold -z-10">
          {quarterNo}
        </span>
      </div>
    </>
  );
};

export default CoreQuarter;
