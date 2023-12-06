import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";

const Cards = () => {
  return (
    <Card
      radius="none"
      shadow="sm"
      className="md:min-w-[200px] !h-full w-full !rounded-sm"
      isPressable
      // onPress={() => console.log("item pressed")}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="md"
          radius="none"
          width="100% "
          alt={"this is profile"}
          isZoomed
          className="w-full h-full object-cover"
          src={
            "https://images.unsplash.com/photo-1696945157988-5dbff7a97d02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
          }
        />
      </CardBody>
    </Card>
  );
};

export default Cards;
