import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
  Image,
} from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function EachPhotos({ btnref }) {
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
                  <SwiperSlide>
                    <div className="h-[80vh] w-full flex items-center justify-center max-h-[600px]">
                      <Image
                        src={
                          "https://miro.medium.com/v2/resize:fit:1000/1*cFfa3LOIy4Kr8qadDGK1Lg.png"
                        }
                        alt="image1"
                        className="max-h-[600px] w-full"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>Slide 2</SwiperSlide>
                </Swiper>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
