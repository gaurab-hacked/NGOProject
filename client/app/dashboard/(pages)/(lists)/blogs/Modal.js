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
import { CKEditor } from "ckeditor4-react";

export default function modalApp(props) {
  const {
    handelpostblog,
    handelUpdate,
    updateBtnRef,
    updateData,
    setUpdateData,
    categoryDataDropdown,
    subcategoryDataDropdown,
    postUpload,
  } = props;

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [discriptionData, setDescriptionData] = useState("");
  const closeBtn = useRef();
  const [blogData, setblogData] = useState({
    blogTitle: "",
    blogSubTitle: "",
    categoryId: "",
    subCategoryId: null,
    blogImage: [],
  });

  const [validationErrors, setValidationErrors] = useState({
    blogTitle: "",
    categoryId: "",
    blogImage: [],
  });

  useEffect(() => {
    setblogData({
      blogTitle: updateData.status ? updateData.data.title : "",
      blogSubTitle: updateData.status ? updateData.data.subtitle : "",
      categoryId: updateData.status ? updateData.data.categoryId : "",
      subCategoryId: updateData.status ? updateData.data.subcategoryId : null,
      blogImage: updateData.status ? "" : [],
    });
    setDescriptionData(updateData.status ? updateData.data.description : "");
  }, [updateData]);

  const blogDataChange = (e) => {
    const newValidationErrors = { ...validationErrors, [e.target.name]: "" };
    setValidationErrors(newValidationErrors);

    if (e.target.name === "blogImage") {
      setblogData({
        ...blogData,
        blogImage: Array.from(e.target.files),
      });
    } else if (e.target.name === "categoryId") {
      setblogData({
        ...blogData,
        categoryId: e.target.value,
        subCategoryId: null,
      });
    } else if (e.target.name === "subCategoryId") {
      setblogData({
        ...blogData,
        subCategoryId: e.target.value,
      });
    } else {
      setblogData({ ...blogData, [e.target.name]: e.target.value });
    }
  };

  const filteredSubcategoryData = subcategoryDataDropdown.filter(
    (item) => String(item.categoryId) === String(blogData.categoryId)
  );
  const descriptionDataChange = (event) => {
    setDescriptionData(event.editor.getData());
  };

  const clearData = () => {
    setblogData({
      blogTitle: "",
      blogSubTitle: "",
      categoryId: "",
      subCategoryId: null,
      blogImage: [],
    });
    setDescriptionData("");
    setUpdateData({ status: false, data: {} });
    setValidationErrors({
      blogTitle: "",
      categoryId: "",
      blogImage: [],
      blogDescription: "",
    });
  };

  const formsubmit = (e) => {
    e.preventDefault();
    const newValidationErrors = {};
    let isValid = true;

    // Validate blog Title
    if (!blogData.blogTitle.trim()) {
      newValidationErrors.blogTitle = "blog Title is required";
      isValid = false;
    }
    // Validate blog Title
    if (!discriptionData.trim()) {
      newValidationErrors.blogDescription = "blog Description is required";
      isValid = false;
    }

    // Validate Category ID
    if (!blogData.categoryId) {
      newValidationErrors.categoryId = "Category is required";
      isValid = false;
    }

    if (Array.isArray(blogData.blogImage)) {
      // Validate blog Image
      if (blogData.blogImage.length < 1) {
        newValidationErrors.blogImage = "blog Image is required";
        isValid = false;
      }
    }

    setValidationErrors(newValidationErrors);

    if (isValid) {
      const finalData = {
        ...blogData,
        description: discriptionData,
      };

      if (updateData.status) {
        handelUpdate({ ...finalData, id: updateData.data._id });
        // console.log({ ...finalData, id: updateData.data._id });
      } else {
        // console.log(finalData);
        handelpostblog(finalData);
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
        size="3xl"
        radius="sm"
        className="rounded-sm"
      >
        <ModalContent>
          {(onClose) => (
            <div id="blogModal">
              <form onSubmit={formsubmit} method="post">
                <ModalHeader className="flex flex-col gap-1 uppercase text-slate-600 black:text-slate-200">
                  Add blog
                </ModalHeader>
                <ModalBody>
                  <div className="flex gap-3 w-full">
                    <div className="flex flex-col w-1/2">
                      <Input
                        type="text"
                        variant="underlined"
                        label="Blog Title"
                        radius="sm"
                        name="blogTitle"
                        value={blogData.blogTitle}
                        onChange={blogDataChange}
                      />
                      {validationErrors.blogTitle && (
                        <div className="text-red-500 errorFront !mt-[1px]">
                          {validationErrors.blogTitle}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col w-1/2">
                      <Input
                        type="text"
                        variant="underlined"
                        label="Blog Subtitle"
                        radius="sm"
                        name="blogSubTitle"
                        value={blogData.blogSubTitle}
                        onChange={blogDataChange}
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 w-full">
                    <div className="flex flex-col w-1/3">
                      <Input
                        type="file"
                        variant="underlined"
                        label="Blog Image"
                        placeholder="E"
                        radius="sm"
                        className="!p-0 paddintyzero"
                        accept=".jpg, .jpeg, .png, .gif, .bmp, .webp"
                        multiple
                        name="blogImage"
                        onChange={blogDataChange}
                      />
                      {validationErrors.blogImage && (
                        <div className="text-red-500 errorFront !mt-[1px]">
                          {validationErrors.blogImage}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col w-1/3">
                      {updateData.status ? (
                        <Select
                          label="Category Name"
                          className="max-w-xs"
                          variant="underlined"
                          radius="sm"
                          name="categoryId"
                          value={blogData.categoryId}
                          onChange={blogDataChange}
                          defaultSelectedKeys={[updateData.data.categoryId]}
                        >
                          {categoryDataDropdown.map((e) => (
                            <SelectItem key={e._id} value={e._id} radius="sm">
                              {e.categoryName}
                            </SelectItem>
                          ))}
                        </Select>
                      ) : (
                        <Select
                          label="Category Name"
                          className="max-w-xs"
                          variant="underlined"
                          radius="sm"
                          name="categoryId"
                          value={blogData.categoryId}
                          onChange={blogDataChange}
                        >
                          {categoryDataDropdown.map((e) => (
                            <SelectItem key={e._id} value={e._id} radius="sm">
                              {e.categoryName}
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
                    <div className="flex flex-col w-1/3">
                      {updateData.status ? (
                        <Select
                          label="Subcategory Name"
                          className="max-w-xs"
                          variant="underlined"
                          radius="sm"
                          name="subCategoryId"
                          value={blogData.subCategoryId}
                          onChange={blogDataChange}
                          defaultSelectedKeys={
                            updateData.data.subcategoryId !== null
                              ? [updateData.data.subcategoryId]
                              : null
                          }
                        >
                          <SelectItem value={null} key={null} radius="sm">
                            None
                          </SelectItem>
                          {filteredSubcategoryData.map((e) => (
                            <SelectItem key={e._id} value={e._id} radius="sm">
                              {e.subCategoryName}
                            </SelectItem>
                          ))}
                        </Select>
                      ) : (
                        <Select
                          label="Subcategory Name"
                          className="max-w-xs"
                          variant="underlined"
                          radius="sm"
                          name="subCategoryId"
                          value={blogData.subCategoryId}
                          onChange={blogDataChange}
                          defaultSelectedKeys={null}
                        >
                          <SelectItem value={null} key={null} radius="sm">
                            None
                          </SelectItem>
                          {filteredSubcategoryData.map((e) => (
                            <SelectItem key={e._id} value={e._id} radius="sm">
                              {e.subCategoryName}
                            </SelectItem>
                          ))}
                        </Select>
                      )}
                    </div>
                  </div>
                  <div>
                    <CKEditor
                      initData={
                        updateData.status
                          ? updateData.data.description
                          : discriptionData
                      }
                      onChange={(event) => {
                        descriptionDataChange(event);
                      }}
                    />
                    {validationErrors.blogDescription && (
                      <div className="text-red-500 errorFront !mt-[1px]">
                        {validationErrors.blogDescription}
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
