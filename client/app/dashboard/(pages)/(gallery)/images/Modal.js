"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Select,
  SelectItem,
  Progress,
} from "@nextui-org/react";
import { PlusIcon } from "@/app/dashboard/common/components/Tables/Icons/PlusIcon";

export default function ModalApp(props) {
  const {
    handelpostimage,
    handelUpdate,
    updateBtnRef,
    updateData,
    setUpdateData,
    categoryDataDropdown,
    postUpload,
  } = props;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [discriptionData, setDescriptionData] = useState("");
  const closeBtn = useRef();
  const [imageData, setimageData] = useState({
    categoryId: "",
    imageImage: [],
  });

  const [validationErrors, setValidationErrors] = useState({
    categoryId: "",
    imageImage: [],
  });

  useEffect(() => {
    setimageData({
      categoryId: updateData.status ? updateData.data.categoryId : "",
      imageImage: updateData.status ? "" : [],
    });
  }, [updateData]);

  const imageDataChange = (e) => {
    const newValidationErrors = { ...validationErrors, [e.target.name]: "" };
    setValidationErrors(newValidationErrors);

    if (e.target.name === "imageImage") {
      setimageData({
        ...imageData,
        imageImage: Array.from(e.target.files),
      });
    } else if (e.target.name === "categoryId") {
      setimageData({
        ...imageData,
        categoryId: e.target.value,
      });
    } else {
      setimageData({ ...imageData, [e.target.name]: e.target.value });
    }
  };

  const clearData = () => {
    setimageData({
      categoryId: "",
      imageImage: [],
    });
    setUpdateData({ status: false, data: {} });
    setValidationErrors({
      categoryId: "",
      imageImage: [],
    });
  };

  const formsubmit = (e) => {
    e.preventDefault();
    const newValidationErrors = {};
    let isValid = true;

    // Validate Category ID
    if (!imageData.categoryId) {
      newValidationErrors.categoryId = "Album name is required";
      isValid = false;
    }

    if (Array.isArray(imageData.imageImage)) {
      // Validate image Image
      if (imageData.imageImage.length < 1) {
        newValidationErrors.imageImage = "Image Image is required";
        isValid = false;
      }
    }

    setValidationErrors(newValidationErrors);

    if (isValid) {
      const finalData = {
        ...imageData,
        description: discriptionData,
      };

      if (updateData.status) {
        handelUpdate({ ...finalData, id: updateData.data._id });
        // console.log({ ...finalData, id: updateData.data._id });
      } else {
        // console.log(finalData);
        handelpostimage(finalData);
      }
    }
  };
  useEffect(() => {
    if (postUpload === 100) {
      setTimeout(() => {
        closeBtn.current?.click();
      }, 1500);
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
        onOpenChange={onOpenChange}
        onClose={() => {
          clearData();
          onOpenChange();
        }}
        radius="sm"
        className="rounded-sm"
      >
        <ModalContent>
          {(onClose) => (
            <div id="imageModal">
              <form onSubmit={formsubmit} method="post">
                <ModalHeader className="flex flex-col gap-1 uppercase text-slate-600 black:text-slate-200">
                  Add image
                </ModalHeader>
                <ModalBody>
                  <div className="flex flex-col w-full">
                    {updateData.status ? (
                      <Select
                        label="Category Name"
                        className="max-w-full"
                        variant="underlined"
                        radius="sm"
                        name="categoryId"
                        value={imageData.categoryId}
                        onChange={imageDataChange}
                        defaultSelectedKeys={[updateData.data.categoryId]}
                      >
                        {categoryDataDropdown.map((e) => (
                          <SelectItem key={e._id} value={e._id} radius="sm">
                            {e.albumName}
                          </SelectItem>
                        ))}
                      </Select>
                    ) : (
                      <Select
                        label="Album Name"
                        className="max-w-full"
                        variant="underlined"
                        radius="sm"
                        name="categoryId"
                        value={imageData.categoryId}
                        onChange={imageDataChange}
                      >
                        {categoryDataDropdown.map((e) => (
                          <SelectItem key={e._id} value={e._id} radius="sm">
                            {e.albumName}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                    {validationErrors.categoryId && (
                      <div className="text-red-500 errorFront !mt-[1px]">
                        {validationErrors.categoryId}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col w-full">
                    <Input
                      type="file"
                      variant="underlined"
                      label="Choose Images"
                      placeholder="E"
                      radius="sm"
                      className="!p-0 paddintyzero"
                      accept=".jpg, .jpeg, .png, .gif, .bmp, .webp"
                      multiple
                      name="imageImage"
                      onChange={imageDataChange}
                    />
                    {validationErrors.imageImage && (
                      <div className="text-red-500 errorFront !mt-[1px]">
                        {validationErrors.imageImage}
                      </div>
                    )}
                  </div>

                  {postUpload > 0 && (
                    <Progress
                      aria-label="Downloading..."
                      size="sm"
                      value={postUpload}
                      className=" mt-1"
                    />
                  )}
                </ModalBody>
                <ModalFooter>
                  <div className="flex gap-3 flex-row-reverse">
                    <Button
                      color="primary"
                      size="sm"
                      radius="sm"
                      className="rounded-sm !uppercase ml-2 tracking-wide"
                      // onPress={onClose}
                      type="submit"
                    >
                      Post
                    </Button>
                    <Button
                      color="danger"
                      size="sm"
                      variant="bordered"
                      onPress={onClose}
                      radius="sm"
                      className="rounded-sm !uppercase tracking-wide"
                      type="reset"
                      ref={closeBtn}
                      isDisabled={postUpload !== 0}
                    >
                      Close
                    </Button>
                  </div>
                </ModalFooter>
              </form>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
