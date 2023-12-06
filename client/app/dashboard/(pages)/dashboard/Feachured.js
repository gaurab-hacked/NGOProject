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
            {forDailyRevenue && "See "}Total Revenue
            {forDailyRevenue && " Daily"}
          </h1>
          <Chip
            size="sm"
            radius="full"
            as={"button"}
            variant="faded"
            color="success"
            className="!text-xs"
            onClick={() => btnRef.current.click()}
          >
            Add target
          </Chip>
        </div>
        <div className="bottom !shadow-none !my-5">
          <div className="featuredChart">
            <CircularProgressbar
              value={getPercentage(bigShowRevenue, bigTargetRevenue)}
              text={`${getPercentage(bigShowRevenue, bigTargetRevenue)}%`}
              strokeWidth={5}
            />
          </div>
          <p className="title !mt-2">Total revenue made {title}</p>
          <p className="amount !my-2">Rs {convertToK(bigShowRevenue)}</p>
          <p className="desc !mt-2 !mb-3">
            Previous transactions processing. Last payments may not be included.
          </p>
          <div className="summary">
            <div className="item">
              <div className="itemTitle">All Time</div>
              <div className="itemResult positive">
                <div className="resultAmount">
                  Rs {convertToK(Number(data.all))}
                </div>
              </div>
            </div>
            <div className="item">
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
                Last Week
              </div>
              <div className="itemResult positive">
                <div className="resultAmount">
                  Rs {convertToK(Number(data.oneWeek))}
                </div>
              </div>
            </div>
            <div className="item">
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
                Last Month
              </div>
              <div className="itemResult positive">
                <div className="resultAmount">
                  Rs {convertToK(Number(data.oneMonth))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Target btnRef={btnRef} targetDataProp={targetData} />
    </>
  );
};

export default Featured;
