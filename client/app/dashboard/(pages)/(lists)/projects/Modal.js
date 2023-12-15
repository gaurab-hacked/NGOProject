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

const projectCategoryData = [
  { _id: 1, projectCategoryName: "project Cat A" },
  { _id: 2, projectCategoryName: "project Cat B" },
  { _id: 3, projectCategoryName: "project Cat C" },
  { _id: 4, projectCategoryName: "project Cat D" },
  { _id: 5, projectCategoryName: "project Cat E" },
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

  const [projectData, setprojectData] = useState({
    projectTitle: "",
    projectCategoryId: "",
    projectCategoryName: "",
    projectActive: true,
    projectImage: null,
  });

  const [validationErrors, setValidationErrors] = useState({
    projectTitle: "",
    projectCategoryId: "",
  });

  useEffect(() => {
    setprojectData({
      projectTitle: updateData.status ? updateData.data.title : "",
      projectCategoryId: updateData.status ? updateData.data.category : "",
      projectActive: updateData.status ? updateData.data.active : true,
      projectImage: updateData.status ? updateData.data.image : null,
    });
  }, [updateData]);

  function getprojectCategoryNameById(id) {
    const category = projectCategoryData.find(
      (item) => Number(item._id) === Number(id)
    );
    return category ? category.projectCategoryName : "Category Not Found";
  }

  const projectDataChange = (e) => {
    if (e.target.name === "projectImage") {
      setprojectData({ ...projectData, projectImage: e.target.files[0] });
    } else if (e.target.name === "projectActive") {
      setprojectData({ ...projectData, projectActive: e.target.checked });
    } else if (e.target.name === "projectCategoryId") {
      setprojectData({
        ...projectData,
        projectCategoryId: e.target.value,
        projectCategoryName: getprojectCategoryNameById(e.target.value),
      });
    } else {
      setprojectData({ ...projectData, [e.target.name]: e.target.value });
    }
  };

  const clearprojectData = () => {
    setprojectData({
      projectTitle: "",
      projectCategoryId: "",
      projectCategoryName: "",
      projectActive: true,
      projectImage: null,
    });
    setUpdateData({ status: false, data: {} });
    setValidationErrors({
      projectTitle: "",
      projectCategoryId: "",
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newValidationErrors = {
      projectTitle: "",
      projectCategoryId: "",
      projectImage: "",
    };

    if (!projectData.projectTitle.trim()) {
      newValidationErrors.projectTitle = "project Title is required";
      isValid = false;
    }

    if (!projectData.projectImage) {
      newValidationErrors.projectImage = "project Image is required";
      isValid = false;
    }

    if (projectData.projectCategoryId.length < 1) {
      newValidationErrors.projectCategoryId = "project Category is required";
      isValid = false;
    }

    setValidationErrors(newValidationErrors);

    return isValid;
  };

  const projectDataSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (updateData.status) {
        handelUpdate({ ...projectData, id: updateData.data._id });
        // console.log({ ...projectData, id: updateData.data._id });
      } else {
        handelPost(projectData);
        // console.log(projectData);
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
          clearprojectData();
          onOpenChange();
        }}
      >
        <ModalContent>
          {(onClose) => (
            <form method="post" className="pb-5" onSubmit={projectDataSubmit}>
              <ModalHeader className="flex flex-col gap-1 uppercase text-slate-600 black:text-slate-200">
                Add project
              </ModalHeader>
              <ModalBody>
                <Input
                  type="text"
                  label="project Title"
                  radius="sm"
                  size="sm"
                  variant="underlined"
                  name="projectTitle"
                  value={projectData.projectTitle}
                  onChange={projectDataChange}
                />
                {validationErrors.projectTitle && (
                  <div className="text-red-500 errorFront">
                    {validationErrors.projectTitle}
                  </div>
                )}

                <div className="flex gap-3 w-full">
                  <div className="flex flex-col w-1/2">
                    {updateData.status ? (
                      <Select
                        variant="underlined"
                        label="project Cateogry"
                        className="w-full"
                        radius="sm"
                        name="projectCategoryId"
                        value={projectData.projectCategoryId}
                        onChange={projectDataChange}
                        defaultSelectedKeys={[updateData.data.category]}
                      >
                        {projectCategoryData.map((e) => (
                          <SelectItem value={e._id} key={e._id}>
                            {e.projectCategoryName}
                          </SelectItem>
                        ))}
                      </Select>
                    ) : (
                      <Select
                        variant="underlined"
                        label="project Cateogry"
                        className="w-full"
                        radius="sm"
                        name="projectCategoryId"
                        value={projectData.projectCategoryId}
                        onChange={projectDataChange}
                      >
                        {projectCategoryData.map((e) => (
                          <SelectItem value={e._id} key={e._id}>
                            {e.projectCategoryName}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                    {validationErrors.projectCategoryId && (
                      <div className="text-red-500 !mt-1 errorFront">
                        {validationErrors.projectCategoryId}
                      </div>
                    )}
                  </div>
                  <div className="w-1/2">
                    <Input
                      type="file"
                      variant="underlined"
                      label="project Image"
                      placeholder="E"
                      radius="none"
                      className="!p-0 paddintyzero"
                      accept=".jpg, .jpeg, .png, .gif, .bmp, .webp"
                      name="projectImage"
                      onChange={projectDataChange}
                    />
                    {validationErrors.projectImage && (
                      <div className="text-red-500 !mt-1 errorFront">
                        {validationErrors.projectImage}
                      </div>
                    )}
                  </div>
                </div>

                {updateData.status ? (
                  <Checkbox
                    defaultSelected={updateData.data.active}
                    size="md"
                    className="mt-1"
                    name="projectActive"
                    value={projectData.projectActive}
                    onChange={projectDataChange}
                  >
                    Active project
                  </Checkbox>
                ) : (
                  <Checkbox
                    defaultSelected={projectData.projectActive}
                    size="md"
                    className="mt-1"
                    name="projectActive"
                    value={projectData.projectActive}
                    onChange={projectDataChange}
                  >
                    Active project
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
