import React, { useEffect, useRef, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Checkbox,
  Progress,
} from "@nextui-org/react";
import { PlusIcon } from "@/app/dashboard/common/components/Tables/Icons/PlusIcon";

export default function ModalApp(props) {
  const closeRef = useRef();
  const {
    handelPostalbum,
    updateBtnRef,
    handelUpdate,
    updateData,
    setUpdateData,
    postUpload,
  } = props;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [albumData, setalbumData] = useState({
    albumName: "",
    date: "",
    image: null,
    active: true,
  });

  const [validationErrors, setValidationErrors] = useState({
    albumName: "",
    image: "",
    date: "",
  });

  useEffect(() => {
    setalbumData({
      albumName: updateData.status ? updateData.data.albumName : "",
      date: updateData.status ? updateData.data.date : "",
      active: updateData.status ? updateData.data.active : true,
    });
  }, [updateData.status]);

  const clearalbumData = () => {
    setalbumData({
      albumName: "",
      date: "",
      image: null,
      active: true,
    });
    setUpdateData({ status: false, data: {} });
    setValidationErrors({
      albumName: "",
      image: "",
      date: "",
    });
  };

  const albumDataChange = (e) => {
    if (e.target.name === "active") {
      setalbumData({ ...albumData, active: e.target.checked });
    } else if (e.target.name === "image") {
      setalbumData({ ...albumData, image: e.target.files[0] });
    } else {
      setalbumData({ ...albumData, [e.target.name]: e.target.value });
    }
    validateForm();
  };

  const validateForm = () => {
    let isValid = true;
    const newValidationErrors = {
      albumName: "",
      date: "",
      image: "",
    };

    if (!albumData.albumName.trim()) {
      newValidationErrors.albumName = "Album name is required";
      isValid = false;
    }
    if (!albumData.date.trim()) {
      newValidationErrors.date = "Album date is required";
      isValid = false;
    }
    if (!updateData.status) {
      if (!albumData.image) {
        newValidationErrors.image = "Ablum image is required";
        isValid = false;
      }
    }
    setValidationErrors(newValidationErrors);

    return isValid;
  };

  const albumPost = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (!updateData.status) {
        handelPostalbum(albumData);
      } else {
        handelUpdate({ ...albumData, id: updateData.data._id });
      }
    }
  };

  useEffect(() => {
    if (postUpload === 100) {
      setTimeout(() => {
        closeRef.current?.click();
      }, 2000);
    }
  }, [postUpload]);

  return (
    <>
      <Button
        radius="sm"
        onPress={onOpen}
        color="primary"
        endContent={<PlusIcon />}
        ref={updateBtnRef}
        className="!hidden"
      >
        Add New
      </Button>
      <Modal
        isOpen={isOpen}
        radius="sm"
        onOpenChange={onOpenChange}
        onClose={() => {
          clearalbumData();
          onOpenChange();
        }}
      >
        <ModalContent>
          {(onClose) => (
            <form method="post" onSubmit={albumPost}>
              <ModalHeader className="flex flex-col gap-1 uppercase text-slate-600 ">
                Add album
              </ModalHeader>
              <ModalBody>
                <Input
                  type="text"
                  label="Album Name"
                  radius="sm"
                  size="sm"
                  variant="underlined"
                  name="albumName"
                  value={albumData.albumName}
                  onChange={albumDataChange}
                />
                {validationErrors.albumName && (
                  <div className="text-red-500 errorFront">
                    {validationErrors.albumName}
                  </div>
                )}
                <Input
                  type="date"
                  radius="sm"
                  size="sm"
                  variant="underlined"
                  id="date"
                  name="date"
                  value={albumData.date}
                  onChange={albumDataChange}
                />
                {validationErrors.date && (
                  <div className="text-red-500 errorFront">
                    {validationErrors.date}
                  </div>
                )}

                <Input
                  type="file"
                  variant="underlined"
                  label="Album Image"
                  placeholder="E"
                  radius="none"
                  className="!p-0 paddintyzero"
                  accept=".jpg, .jpeg, .png, .gif, .bmp, .webp"
                  name="image"
                  onChange={albumDataChange}
                />
                {validationErrors.image && (
                  <div className="text-red-500 errorFront">
                    {validationErrors.image}
                  </div>
                )}
                {updateData.status ? (
                  <Checkbox
                    defaultSelected={updateData.data.active}
                    size="md"
                    className="mt-1"
                    name="active"
                    value={albumData.active}
                    onChange={albumDataChange}
                  >
                    Active Album
                  </Checkbox>
                ) : (
                  <Checkbox
                    defaultSelected={albumData.active ? true : false}
                    size="md"
                    className="mt-1"
                    name="active"
                    value={albumData.active}
                    onChange={albumDataChange}
                  >
                    Active album
                  </Checkbox>
                )}
                {postUpload > 0 && (
                  <Progress
                    aria-label="Downloading..."
                    size="sm"
                    value={postUpload}
                    className="max-w-md mt-1"
                  />
                )}
              </ModalBody>

              <ModalFooter>
                <div className="flex gap-3 flex-row-reverse">
                  <Button
                    color="primary"
                    size="sm"
                    radius="none"
                    className="rounded-sm !uppercase ml-2 tracking-wide"
                    type="submit"
                  >
                    {updateData.status ? "Update" : "Post"}
                  </Button>
                  <Button
                    color="danger"
                    size="sm"
                    variant="bordered"
                    onPress={onClose}
                    radius="none"
                    type="reset"
                    className="rounded-sm !uppercase tracking-wide"
                    ref={closeRef}
                    isDisabled={postUpload !== 0}
                  >
                    Close
                  </Button>
                </div>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
