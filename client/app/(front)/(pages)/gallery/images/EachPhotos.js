import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
// import image1 from "@/public/image1.jpg";
// import image2 from "@/public/image2.jpg";

export default function EachPhotos({ btnref, data }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div id="EachImageModal">
      <Button hidden ref={btnref} className="hidden" onPress={onOpen}></Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="5xl"
        isDismissable={false}
        radius="sm"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="min-h-[500px] !p-0 flex max-h-[600px] overflow-hidden">
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper h-full !m-0 flex"
                >
                  {data.map((e, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="h-[80vh] w-full flex items-center justify-center max-h-[600px]">
                          <Image
                            height={600}
                            width={600}
                            src={e.image}
                            alt="image1"
                            className="max-h-[600px] w-full"
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
