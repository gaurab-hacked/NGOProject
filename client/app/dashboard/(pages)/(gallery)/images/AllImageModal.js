import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import AllPhotos from "./images/AllPhotos";

export default function AllImageModal({ btnref, updateImages }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button ref={btnref} className="hidden" hidden onPress={onOpen}>
        Open Modal
      </Button>
      <Modal
        size="5xl"
        className="max-h-[600px] overflow-hidden"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <AllPhotos list={updateImages} />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
