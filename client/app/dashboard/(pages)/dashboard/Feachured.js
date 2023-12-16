import "./css/feachured.css";
import { Chip } from "@nextui-org/react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Target from "./Target";
import { useEffect, useRef, useState } from "react";
function convertToK(amount) {
  if (amount < 1000) {
    return amount.toString();
  } else {
    const kValue = amount / 1000.0;
    return kValue.toFixed(2) + "k";
  }
}
const getPercentage = (collected, targeted) => {
  return Math.round((collected / targeted) * 100);
};

const Featured = ({ data, targetData }) => {
  const btnRef = useRef();
  const [title, setTitle] = useState("daily");
  const [forDailyRevenue, setForDailyRevenue] = useState(false);

  const [bigShowRevenue, setBigShowRevenue] = useState(1);
  const [bigTargetRevenue, setBigTargetRevenue] = useState(1);
  useEffect(() => {
    setBigShowRevenue(data ? Number(data.today) : 1);
    setBigTargetRevenue(Number(targetData[0] ? targetData[0].daily : 1));
  }, [data, targetData]);

  const btnclick = (myData, targetData, title) => {
    setBigShowRevenue(myData);
    setBigTargetRevenue(targetData);
    setTitle(title);
    setForDailyRevenue(true);
    if (title === "daily") {
      setForDailyRevenue(false);
    }
  };

  return (
    <>
      <div className="featured min-w-[400px] max-w-[550px]">
        <div className="top">
          <h1
            className={`title ${forDailyRevenue && "cursor-pointer"}`}
            onClick={
              forDailyRevenue
                ? () => btnclick(data.today, targetData[0]?.daily || 1, "daily")
                : null
            }
          >
            {forDailyRevenue && "See "}Total Projects and Events
            {forDailyRevenue && " Daily"}
          </h1>
        </div>
        <div className="bottom  !shadow-none !my-5">
          <div className="flex !flex-row w-full justify-between">
            <div className="w-1/2 flex justify-center items-center flex-col">
              <div className="featuredChart">
                <CircularProgressbar
                  value={getPercentage(bigShowRevenue, bigTargetRevenue)}
                  text={`${getPercentage(bigShowRevenue, bigTargetRevenue)}%`}
                  strokeWidth={5}
                />
              </div>
              <p className="title !mt-2">Total Projects </p>
              <div className="summary !gap-3 !mt-5 !flex-col">
                <div className="item !text-center w-full ">
                  <div className="itemTitle">
                    All Time {convertToK(Number(data.all))}
                  </div>
                </div>
                <div className="item !text-center w-full">
                  <div
                    className="itemTitle cursor-pointer"
                    onClick={() =>
                      btnclick(
                        data.oneWeek,
                        targetData[0] ? targetData[0].weekly : 1,
                        "weekly"
                      )
                    }
                  >
                    Last Week {convertToK(Number(data.oneWeek))}
                  </div>
                </div>
                <div className="item !text-center w-full">
                  <div
                    className="itemTitle cursor-pointer"
                    onClick={() =>
                      btnclick(
                        data.oneMonth,
                        targetData[0] ? targetData[0].monthly : 1,
                        "monthly"
                      )
                    }
                  >
                    Last Month {convertToK(Number(data.oneMonth))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 flex justify-center items-center flex-col">
              <div className="featuredChart">
                <CircularProgressbar
                  value={getPercentage(bigShowRevenue, bigTargetRevenue)}
                  text={`${getPercentage(bigShowRevenue, bigTargetRevenue)}%`}
                  strokeWidth={5}
                />
              </div>
              <p className="title !mt-2">Total News-Events </p>
              <div className="summary !gap-3 !mt-5 !flex-col">
                <div className="item !text-center w-full ">
                  <div className="itemTitle">
                    All Time {convertToK(Number(data.all))}
                  </div>
                </div>
                <div className="item !text-center w-full">
                  <div
                    className="itemTitle cursor-pointer"
                    onClick={() =>
                      btnclick(
                        data.oneWeek,
                        targetData[0] ? targetData[0].weekly : 1,
                        "weekly"
                      )
                    }
                  >
                    Last Week {convertToK(Number(data.oneWeek))}
                  </div>
                </div>
                <div className="item !text-center w-full">
                  <div
                    className="itemTitle cursor-pointer"
                    onClick={() =>
                      btnclick(
                        data.oneMonth,
                        targetData[0] ? targetData[0].monthly : 1,
                        "monthly"
                      )
                    }
                  >
                    Last Month {convertToK(Number(data.oneMonth))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="desc !mt-4 !mb-3">
            {/* Previous transactions processing. Last payments may not be included. */}
            Thank you for using this dashboard.
          </p>
        </div>
      </div>
      <Target btnRef={btnRef} targetDataProp={targetData} />
    </>
  );
};

export default Featured;
