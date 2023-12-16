import React, { useRef, useEffect, useState } from "react";
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
  Textarea,
  Checkbox,
  Progress,
} from "@nextui-org/react";
import { PlusIcon } from "@/app/dashboard/common/components/Tables/Icons/PlusIcon";

const newsEventsCategoryData = [
  { _id: 1, newsEventsCategoryName: "newsEvents Cat A" },
  { _id: 2, newsEventsCategoryName: "newsEvents Cat B" },
  { _id: 3, newsEventsCategoryName: "newsEvents Cat C" },
  { _id: 4, newsEventsCategoryName: "newsEvents Cat D" },
  { _id: 5, newsEventsCategoryName: "newsEvents Cat E" },
];

export default function ModalApp(props) {
  const {
    handelPost,
    updateBtnRef,
    handelUpdate,
    updateData,
    setUpdateData,
    postUpload,
  } = props;
  const closeBtnRef = useRef();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [newsEventsData, setnewsEventsData] = useState({
    newsEventsTitle: "",
    newsEventsCategoryId: "",
    newsEventsCategoryName: "",
    newsEventsDescription: "",
    newsEventsActive: true,
    newsEventsImage: null,
  });

  const [validationErrors, setValidationErrors] = useState({
    newsEventsTitle: "",
    newsEventsCategoryId: "",
  });

  useEffect(() => {
    setnewsEventsData({
      newsEventsTitle: updateData.status ? updateData.data.title : "",
      newsEventsCategoryId: updateData.status ? updateData.data.category : "",
      newsEventsDescription: updateData.status
        ? updateData.data.description
        : "",
      newsEventsActive: updateData.status ? updateData.data.active : true,
      newsEventsImage: updateData.status ? updateData.data.image : null,
    });
  }, [updateData]);

  function getnewsEventsCategoryNameById(id) {
    const category = newsEventsCategoryData.find(
      (item) => Number(item._id) === Number(id)
    );
    return category ? category.newsEventsCategoryName : "Category Not Found";
  }

  const newsEventsDataChange = (e) => {
    if (e.target.name === "newsEventsImage") {
      setnewsEventsData({
        ...newsEventsData,
        newsEventsImage: e.target.files[0],
      });
    } else if (e.target.name === "newsEventsActive") {
      setnewsEventsData({
        ...newsEventsData,
        newsEventsActive: e.target.checked,
      });
    } else if (e.target.name === "newsEventsCategoryId") {
      setnewsEventsData({
        ...newsEventsData,
        newsEventsCategoryId: e.target.value,
        newsEventsCategoryName: getnewsEventsCategoryNameById(e.target.value),
      });
    } else {
      setnewsEventsData({ ...newsEventsData, [e.target.name]: e.target.value });
    }
  };

  const clearnewsEventsData = () => {
    setnewsEventsData({
      newsEventsTitle: "",
      newsEventsCategoryId: "",
      newsEventsCategoryName: "",
      newsEventsDescription: "",
      newsEventsActive: true,
      newsEventsImage: null,
    });
    setUpdateData({ status: false, data: {} });
    setValidationErrors({
      newsEventsTitle: "",
      newsEventsCategoryId: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newValidationErrors = {
      newsEventsTitle: "",
      newsEventsCategoryId: "",
      newsEventsDescription: "",
      newsEventsImage: "",
    };

    if (!newsEventsData.newsEventsTitle.trim()) {
      newValidationErrors.newsEventsTitle = "newsEvents Title is required";
      isValid = false;
    }

    if (!newsEventsData.newsEventsDescription.trim()) {
      newValidationErrors.newsEventsDescription =
        "newsEvents description is required";
      isValid = false;
    }
    if (!newsEventsData.newsEventsImage) {
      newValidationErrors.newsEventsImage = "newsEvents Image is required";
      isValid = false;
    }

    if (newsEventsData.newsEventsCategoryId.length < 1) {
      newValidationErrors.newsEventsCategoryId =
        "newsEvents Category is required";
      isValid = false;
    }

    setValidationErrors(newValidationErrors);

    return isValid;
  };

  const newsEventsDataSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (updateData.status) {
        handelUpdate({ ...newsEventsData, id: updateData.data._id });
      } else {
        handelPost(newsEventsData);
      }
    }
  };
  useEffect(() => {
    if (postUpload === 100) {
      setTimeout(() => {
        closeBtnRef.current?.click();
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
        radius="sm"
        size="xl"
        onOpenChange={onOpenChange}
        onClose={() => {
          clearnewsEventsData();
          onOpenChange();
        }}
      >
        <ModalContent>
          {(onClose) => (
            <form method="post" onSubmit={newsEventsDataSubmit}>
              <ModalHeader className="flex flex-col gap-1 uppercase text-slate-600 black:text-slate-200">
                Add News and Events
              </ModalHeader>
              <ModalBody>
                <Input
                  type="text"
                  label="News & Events Title"
                  radius="sm"
                  size="sm"
                  variant="underlined"
                  name="newsEventsTitle"
                  value={newsEventsData.newsEventsTitle}
                  onChange={newsEventsDataChange}
                />
                {validationErrors.newsEventsTitle && (
                  <div className="text-red-500 errorFront">
                    {validationErrors.newsEventsTitle}
                  </div>
                )}

                <div className="flex gap-3 w-full">
                  <div className="flex flex-col w-1/2">
                    {updateData.status ? (
                      <Select
                        variant="underlined"
                        label="News & Events Cateogry"
                        className="w-full"
                        radius="sm"
                        name="newsEventsCategoryId"
                        value={newsEventsData.newsEventsCategoryId}
                        onChange={newsEventsDataChange}
                        defaultSelectedKeys={[updateData.data.category]}
                      >
                        {newsEventsCategoryData.map((e) => (
                          <SelectItem value={e._id} key={e._id}>
                            {e.newsEventsCategoryName}
                          </SelectItem>
                        ))}
                      </Select>
                    ) : (
                      <Select
                        variant="underlined"
                        label="News & Events Cateogry"
                        className="w-full"
                        radius="sm"
                        name="newsEventsCategoryId"
                        value={newsEventsData.newsEventsCategoryId}
                        onChange={newsEventsDataChange}
                      >
                        {newsEventsCategoryData.map((e) => (
                          <SelectItem value={e._id} key={e._id}>
                            {e.newsEventsCategoryName}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                    {validationErrors.newsEventsCategoryId && (
                      <div className="text-red-500 !mt-1 errorFront">
                        {validationErrors.newsEventsCategoryId}
                      </div>
                    )}
                  </div>
                  <div className="w-1/2">
                    <Input
                      type="file"
                      variant="underlined"
                      label="News & Events Image"
                      placeholder="E"
                      radius="none"
                      className="!p-0 paddintyzero"
                      accept=".jpg, .jpeg, .png, .gif, .bmp, .webp"
                      name="newsEventsImage"
                      onChange={newsEventsDataChange}
                    />
                    {validationErrors.newsEventsImage && (
                      <div className="text-red-500 !mt-1 errorFront">
                        {validationErrors.newsEventsImage}
                      </div>
                    )}
                  </div>
                </div>
                <Textarea
                  variant="underlined"
                  label="News & Events Description"
                  name="newsEventsDescription"
                  value={newsEventsData.newsEventsDescription}
                  onChange={newsEventsDataChange}
                />
                {validationErrors.newsEventsDescription && (
                  <div className="text-red-500 errorFront">
                    {validationErrors.newsEventsDescription}
                  </div>
                )}

                {updateData.status ? (
                  <Checkbox
                    defaultSelected={updateData.data.active}
                    size="md"
                    className="mt-1"
                    name="newsEventsActive"
                    value={newsEventsData.newsEventsActive}
                    onChange={newsEventsDataChange}
                  >
                    Active News & Events
                  </Checkbox>
                ) : (
                  <Checkbox
                    defaultSelected={newsEventsData.newsEventsActive}
                    size="md"
                    className="mt-1"
                    name="newsEventsActive"
                    value={newsEventsData.newsEventsActive}
                    onChange={newsEventsDataChange}
                  >
                    Active News & Events
                  </Checkbox>
                )}
                {postUpload > 0 && (
                  <Progress
                    aria-label="Downloading..."
                    size="sm"
                    value={postUpload}
                    className="mt-1"
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
                    Post
                  </Button>
                  <Button
                    color="danger"
                    size="sm"
                    variant="bordered"
                    onPress={onClose}
                    radius="none"
                    className="rounded-sm !uppercase tracking-wide"
                    type="reset"
                    ref={closeBtnRef}
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
