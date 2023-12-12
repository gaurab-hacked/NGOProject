import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

export default function CardCollection() {
  return (
    <>
      <h2 className="text-2xl pt-10 pb-5 font-semibold text-center underline">
        Our Activities
      </h2>
      <div className="max-w-[1550px] gap-2 grid grid-cols-12 grid-rows-2 px-1 my-5">
        <Card
          radius="none"
          className="round-sm col-span-12 bg-black sm:col-span-5 h-[300px] "
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white tracking-wider uppercase font-bold">
              What to watch
            </p>
            <h4 className="text-white font-medium tracking-wide text-large">
              Stream the Acme event
            </h4>
          </CardHeader>
          <Image
            radius="none"
            removeWrapper
            isZoomed
            alt="Card background"
            className="z-0 w-full !opacity-70 h-full object-cover"
            src="https://images.unsplash.com/photo-1682687220247-9f786e34d472?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-white/80 text-base">Category Name</p>
                <p className="text-tiny text-white/80">Avilable from Now...</p>
              </div>
            </div>
            <Button
              size="sm"
              className="px-4 py-2 hover:text-white rounded-sm hover:bg-blue-900 text-black bg-blue-300"
            >
              Get Now
            </Button>
          </CardFooter>
        </Card>

        <Card
          radius="none"
          className="round-sm col-span-12 bg-black sm:col-span-4 h-[300px]"
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white tracking-wider uppercase font-bold">
              What to watch
            </p>
            <h4 className="text-white font-medium tracking-wide text-large">
              Stream the Acme event
            </h4>
          </CardHeader>
          <Image
            radius="none"
            removeWrapper
            isZoomed
            alt="Card background"
            className="z-0 w-full !opacity-70 h-full object-cover"
            src="https://images.unsplash.com/photo-1682687220247-9f786e34d472?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-white/80 text-base">Category Name</p>
                <p className="text-tiny text-white/80">Avilable from Now...</p>
              </div>
            </div>
            <Button
              size="sm"
              className="px-4 py-2 hover:text-white rounded-sm hover:bg-blue-900 text-black bg-blue-300"
            >
              Get Now
            </Button>
          </CardFooter>
        </Card>
        <Card
          radius="none"
          className="round-sm col-span-12 bg-black sm:col-span-3 row-span-2 h-full makegridrow1"
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white tracking-wider uppercase font-bold">
              What to watch
            </p>
            <h4 className="text-white font-medium tracking-wide text-large">
              Stream the Acme event
            </h4>
          </CardHeader>
          <Image
            radius="none"
            removeWrapper
            isZoomed
            alt="Card background"
            className="z-0 w-full !opacity-70 h-full object-cover"
            src="https://images.unsplash.com/photo-1682687220247-9f786e34d472?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-white/80 text-base">Category Name</p>
                <p className="text-tiny text-white/80">Avilable from Now...</p>
              </div>
            </div>
            <Button
              size="sm"
              className="px-4 py-2 hover:text-white rounded-sm hover:bg-blue-900 text-black bg-blue-300"
            >
              Get Now
            </Button>
          </CardFooter>
        </Card>
        <Card
          radius="none"
          className="w-full rounded-sm bg-black h-[300px] col-span-12 sm:col-span-4"
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white tracking-wider uppercase font-bold">
              What to watch
            </p>
            <h4 className="text-white font-medium tracking-wide text-large">
              Stream the Acme event
            </h4>
          </CardHeader>
          <Image
            radius="none"
            removeWrapper
            isZoomed
            alt="Relaxing app background"
            className="z-0 w-full !opacity-70 h-full object-cover"
            src="https://images.unsplash.com/photo-1682687220247-9f786e34d472?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-white/80 text-base">Category Name</p>
                <p className="text-tiny text-white/80">Avilable from Now...</p>
              </div>
            </div>
            <Button
              size="sm"
              className="px-4 py-2 hover:text-white rounded-sm hover:bg-blue-900 text-black bg-blue-300"
            >
              Get Now
            </Button>
          </CardFooter>
        </Card>
        <Card
          radius="none"
          className="w-full rounded-sm h-[300px] bg-black col-span-12 sm:col-span-5"
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white tracking-wider uppercase font-bold">
              What to watch
            </p>
            <h4 className="text-white font-medium tracking-wide text-large">
              Stream the Acme event
            </h4>
          </CardHeader>
          <Image
            radius="none"
            removeWrapper
            isZoomed
            alt="Relaxing app background"
            className="z-0 w-full h-full !opacity-70 object-cover"
            src="https://images.unsplash.com/photo-1682687220247-9f786e34d472?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-white/80 text-base">Category Name</p>
                <p className="text-tiny text-white/80">Avilable from Now...</p>
              </div>
            </div>
            <Button
              size="sm"
              className="px-4 py-2 hover:text-white rounded-sm hover:bg-blue-900 text-black bg-blue-300"
            >
              Get Now
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
