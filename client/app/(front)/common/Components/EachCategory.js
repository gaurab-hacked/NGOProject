import React from "react";
import Link from "next/link";
import { Card, Image, button } from "@nextui-org/react";

const EachCategory = () => {
  return (
    <Card
      isPressable
      className="col-lg-3 group col-md-4 col-sm-6 rounded-sm"
      radius="none"
    >
      <Link href="/shop" className="w-full">
        <div className="cat-item flex items-center w-full rounded shadow-sm hover:bg-slate-100">
          <div className="overflow-hidden">
            <Image
              radius="none"
              className="w-[100px] h-full group-hover:scale-110 group-hover:rotate-6"
              src="https://media.istockphoto.com/id/1488741199/photo/indian-rajasthani-antique-gold-tone-traditional-stylish-gold-plated-jhumka-earrings.jpg?s=612x612&w=0&k=20&c=Yss34Vi9HVWwpyR-jG01HJ9PvnM5dEYuSjGZl5oRShY="
              alt=""
            />
          </div>
          <div className="flex flex-col justify-start pl-3">
            <h6 className="font-semibold text-gray-800">Category Name</h6>
            <small className="text-gray-600 text-start w-full">
              100 Products
            </small>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default EachCategory;
