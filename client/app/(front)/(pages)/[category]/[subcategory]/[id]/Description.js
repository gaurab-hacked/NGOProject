import { Button, Card, Tab, Tabs, Textarea } from "@nextui-org/react";
import React from "react";
import Comments from "./Comments";
import SendIcon from "@mui/icons-material/Send";

const data = {
  description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, distinctio.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam
distinctio nemo fugiat, dolore sed pariatur in ipsa impedit molestias
eum ab hic officia, blanditiis non obcaecati. Facere, officiis nulla.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
cupiditate nobis neque veritatis quo, suscipit itaque, minus
necessitatibus vel aperiam laborum ducimus ipsa id consectetur commodi
dicta quaerat molestias quis similique corrupti quos totam ut nihil
voluptates. Ratione quasi molestias rem possimus laboriosam a saepe
veritatis laudantium non perspiciatis, vel pariatur ducimus natus odit
nam recusandae quae, voluptate animi tenetur harum excepturi dolorum
sequi numquam. Harum rerum ex cum quisquam expedita quaerat
voluptatum, nesciunt labore iure dolorum ducimus quibusdam ut animi
adipisci nemo mollitia perspiciatis exercitationem molestias illo
recusandae. Quos nisi laboriosam minus quis. Porro facere veniam ipsa
earum obcaecati!
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
possimus, minima quam repudiandae iste voluptatibus! Distinctio veniam
autem nesciunt corrupti.`,
  details: {
    title: "this is title",
    weight: "2",
    westage: "3",
    making_cost: 1000,
    contactNumber: 9810325922,
    metal: "Gold",
    description: "Lorem ipsum dolor sit amet consectetur",
    size: 10,
    address: "Macchapokhari-kathmandu, Nepal",
  },
  reviews: "",
};

const Description = () => {
  const handelClick = (e) => {
    // console.log(e);
  };
  return (
    <>
      <hr />
      <div className="my-3">
        <Tabs variant="underlined">
          <Tab key="details" title="Details">
            <Card
              radius="none"
              shadow="none"
              className="shadow min-h-[200px] w-full pt-2 pb-3 rounded-sm px-4"
            >
              {data.description}
            </Card>
          </Tab>
          <Tab key="description" title="Description">
            <Card
              radius="none"
              shadow="none"
              className="shadow min-h-[200px] w-full pt-2 pb-3 rounded-sm px-4"
            >
              <div className=" tracking-wide text-slate-700">
                Title: {data.details.title}
              </div>
              <div className=" tracking-wide text-slate-700">
                Description: {data.details.description}
              </div>
              <div className=" tracking-wide text-slate-700">
                Weight: {data.details.weight} gram
              </div>
              <div className=" tracking-wide text-slate-700">
                Westage: {data.details.westage} gram
              </div>
              <div className=" tracking-wide text-slate-700">
                Size: {data.details.size} Inch
              </div>
              <div className=" tracking-wide text-slate-700">
                Making_cost: Rs. {data.details.making_cost}
              </div>
              <div className=" tracking-wide text-slate-700">
                ContactNumber: {data.details.contactNumber}
              </div>
              <div className=" tracking-wide text-slate-700">
                Address: {data.details.address}
              </div>
              <div className=" tracking-wide text-slate-700">
                Metal: {data.details.metal}
              </div>
              <div className=" tracking-wide text-slate-700">
                Total Price: 120000
              </div>
            </Card>
          </Tab>
          <Tab key="reviews" title="Reviews" className="py-2">
            <Card
              radius="none"
              shadow="none"
              className="shadow w-full pt-2  pb-3 rounded-sm px-4 py-4 "
            >
              <div className=" min-h-[200px] max-h-[55vh] overflow-auto">
                <div className="gap-3 flex flex-col">
                  <Comments />
                  <Comments />
                </div>
              </div>
              <div>
                <div className="!p-0 !m-0 !mt-4">
                  <form method="post" className="relative w-[95%] mx-auto">
                    <Textarea
                      radius="none"
                      type="text"
                      name="comment"
                      id="comment"
                      placeholder="Enter Comment"
                      className="w-full h-full p-0 m-0"
                    />
                    <Button
                      type="submit"
                      className="uppercase float-right font-semibold rounded-sm tracking-wide mt-1 duration-200 text-white"
                      radius="none"
                      color="primary"
                      size="sm"
                    >
                      Post
                      <SendIcon className="text-sm -rotate-45" />
                    </Button>
                  </form>
                </div>
              </div>
            </Card>
          </Tab>
        </Tabs>
      </div>
      <hr />
    </>
  );
};

export default Description;
