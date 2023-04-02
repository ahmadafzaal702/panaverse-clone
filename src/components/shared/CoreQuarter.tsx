import { FC } from "react";

interface CoreProps {
  quarterName: string;
  quarterDescription: string;
  quarterNo: string;
  haveBorder?: boolean;
}

const CoreQuarter: FC<CoreProps> = ({
  quarterName,
  quarterDescription,
  quarterNo,
  haveBorder = true,
}) => {
  return (
    <>
      <div
        className={`rounded-md flex-1 px-8 py-12 relative flex flex-col justify-center ${
          haveBorder && "border"
        }`}
      >
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
