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

const metal = [
  { id: 1, name: "Male" },
  { id: 2, name: "Female" },
  { id: 3, name: "Both" },
];
const Size = [
  { id: 1, name: "xs" },
  { id: 2, name: "sm" },
  { id: 3, name: "base" },
  { id: 4, name: "xl" },
  { id: 5, name: "2xl" },
  { id: 6, name: "3xl" },
];
const Color = [
  { id: 1, name: "Blue" },
  { id: 2, name: "Red" },
  { id: 3, name: "Yellow" },
  { id: 4, name: "Green" },
  { id: 5, name: "White" },
  { id: 6, name: "Black" },
];

function getMetalName(id) {
  const metalItem = metal.find((item) => String(item.id) === String(id));
  return metalItem ? metalItem.name : "";
}

export default function modalApp(props) {
  const {
    handelpostproduct,
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
  const [productData, setProductData] = useState({
    productTitle: "",
    categoryId: "",
    subCategoryId: null,
    productMetal: "",
    productMetalName: "",
    productImage: [],
    productWeight: "",
    productWestage: "",
    productDiscount: "",
    productQuantity: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    productTitle: "",
    categoryId: "",
    productImage: [],
    productWeight: "",
    productWestage: "",
    productDiscount: "",
    productMetal: "",
    productQuantity: "",
  });

  useEffect(() => {
    setProductData({
      productTitle: updateData.status ? updateData.data.title : "",
      categoryId: updateData.status ? updateData.data.categoryId : "",
      subCategoryId: updateData.status ? updateData.data.subcategoryId : null,
      productMetal: updateData.status ? updateData.data.metal : "",
      productMetalName: updateData.status
        ? getMetalName(updateData.data.metal)
        : "",
      productWeight: updateData.status ? updateData.data.weight : "",
      productWestage: updateData.status ? updateData.data.westage : "",
      productDiscount: updateData.status ? updateData.data.discount : "",
      productQuantity: updateData.status ? updateData.data.maxQuantity : "",
      productImage: updateData.status ? "" : [],
    });
    setDescriptionData(updateData.status ? updateData.data.description : "");
  }, [updateData]);

  const productDataChange = (e) => {
    const newValidationErrors = { ...validationErrors, [e.target.name]: "" };
    setValidationErrors(newValidationErrors);

    if (e.target.name === "productImage") {
      setProductData({
        ...productData,
        productImage: Array.from(e.target.files),
      });
    } else if (e.target.name === "categoryId") {
      setProductData({
        ...productData,
        categoryId: e.target.value,
        subCategoryId: null,
      });
    } else if (e.target.name === "subCategoryId") {
      setProductData({
        ...productData,
        subCategoryId: e.target.value,
      });
    } else if (e.target.name === "productMetal") {
      setProductData({
        ...productData,
        productMetal: e.target.value,
        productMetalName: getMetalName(e.target.value),
      });
    } else {
      setProductData({ ...productData, [e.target.name]: e.target.value });
    }
  };

  const filteredSubcategoryData = subcategoryDataDropdown.filter(
    (item) => String(item.categoryId) === String(productData.categoryId)
  );
  const descriptionDataChange = (event) => {
    setDescriptionData(event.editor.getData());
  };

  const clearData = () => {
    setProductData({
      productTitle: "",
      categoryId: "",
      subCategoryId: null,
      productImage: [],
      productWeight: "",
      productWestage: "",
      productDiscount: "",
      productMetal: "",
      productQuantity: "",
    });
    setDescriptionData("");
    setUpdateData({ status: false, data: {} });
    setValidationErrors({
      productTitle: "",
      categoryId: "",
      productImage: [],
      productWeight: "",
      productWestage: "",
      productDiscount: "",
      productMetal: "",
      productQuantity: "",
      productDescription: "",
    });
  };

  const formsubmit = (e) => {
    e.preventDefault();
    const newValidationErrors = {};
    let isValid = true;

    // Validate Product Title
    if (!productData.productTitle.trim()) {
      newValidationErrors.productTitle = "Product Title is required";
      isValid = false;
    }
    // Validate Product Title
    if (!discriptionData.trim()) {
      newValidationErrors.productDescription =
        "Product Description is required";
      isValid = false;
    }

    // Validate Category ID
    if (!productData.categoryId) {
      newValidationErrors.categoryId = "Category is required";
      isValid = false;
    }

    if (Array.isArray(productData.productImage)) {
      // Validate Product Image
      if (productData.productImage.length < 1) {
        newValidationErrors.productImage = "Product Image is required";
        isValid = false;
      }
    }

    // Validate Product Weight
    if (!productData.productWeight) {
      newValidationErrors.productWeight = "Product Weight is required";
      isValid = false;
    }

    // Validate Product Westage
    if (!productData.productWestage) {
      newValidationErrors.productWestage = "Product Westage is required";
      isValid = false;
    }

    // Validate Product Discount
    if (!productData.productDiscount) {
      newValidationErrors.productDiscount = "Product Discount is required";
      isValid = false;
    }

    // Validate Product Metal
    if (!productData.productMetal) {
      newValidationErrors.productMetal = "Metal Name is required";
      isValid = false;
    }

    // Validate Product Quantity
    if (!productData.productQuantity) {
      newValidationErrors.productQuantity = "Total Quantity is required";
      isValid = false;
    }

    setValidationErrors(newValidationErrors);

    if (isValid) {
      const finalData = {
        ...productData,
        description: discriptionData,
      };

      if (updateData.status) {
        handelUpdate({ ...finalData, id: updateData.data._id });
      } else {
        handelpostproduct(finalData);
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
            <div id="ProductModal">
              <form onSubmit={formsubmit} method="post">
                <ModalHeader className="flex flex-col gap-1 uppercase text-slate-600 black:text-slate-200">
                  Add Product
                </ModalHeader>
                <ModalBody>
                  <div className="flex gap-3 w-full">
                    <div className="flex flex-col w-1/3">
                      <Input
                        type="text"
                        variant="underlined"
                        label="Product Name"
                        radius="sm"
                        name="productTitle"
                        value={productData.productTitle}
                        onChange={productDataChange}
                      />
                      {validationErrors.productTitle && (
                        <div className="text-red-500 errorFront !mt-[1px]">
                          {validationErrors.productTitle}
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
                          value={productData.categoryId}
                          onChange={productDataChange}
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
                          value={productData.categoryId}
                          onChange={productDataChange}
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
                          value={productData.subCategoryId}
                          onChange={productDataChange}
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
                          value={productData.subCategoryId}
                          onChange={productDataChange}
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
                    {validationErrors.productDescription && (
                      <div className="text-red-500 errorFront !mt-[1px]">
                        {validationErrors.productDescription}
                      </div>
                    )}
                  </div>
                  <div className="flex gap-3 w-full">
                    <div className="flex flex-col w-1/3">
                      <Input
                        type="file"
                        variant="underlined"
                        label="Product Image"
                        placeholder="E"
                        radius="sm"
                        className="!p-0 paddintyzero"
                        accept=".jpg, .jpeg, .png, .gif, .bmp, .webp"
                        multiple
                        name="productImage"
                        onChange={productDataChange}
                      />
                      {validationErrors.productImage && (
                        <div className="text-red-500 errorFront !mt-[1px]">
                          {validationErrors.productImage}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col w-1/3">
                      <Input
                        type="number"
                        variant="underlined"
                        label="Product size"
                        radius="sm"
                        name="productWeight"
                        value={productData.productWeight}
                        onChange={productDataChange}
                      />
                      {validationErrors.productWeight && (
                        <div className="text-red-500 errorFront !mt-[1px]">
                          {validationErrors.productWeight}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col w-1/3">
                      <Input
                        variant="underlined"
                        type="number"
                        label="Product price"
                        radius="sm"
                        name="productWestage"
                        value={productData.productWestage}
                        onChange={productDataChange}
                      />
                      {validationErrors.productWestage && (
                        <div className="text-red-500 errorFront !mt-[1px]">
                          {validationErrors.productWestage}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-3 w-full">
                    <div className="flex flex-col w-1/3">
                      <Input
                        type="number"
                        variant="underlined"
                        label="Discount Percentage"
                        radius="sm"
                        name="productDiscount"
                        value={productData.productDiscount}
                        onChange={productDataChange}
                      />
                      {validationErrors.productDiscount && (
                        <div className="text-red-500 errorFront !mt-[1px]">
                          {validationErrors.productDiscount}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col w-1/3">
                      {updateData.status ? (
                        <Select
                          label="Select gender"
                          className="max-w-xs"
                          radius="sm"
                          name="productMetal"
                          variant="underlined"
                          value={productData.productMetal}
                          onChange={productDataChange}
                          defaultSelectedKeys={[String(updateData.data.metal)]}
                        >
                          {metal.map((e) => {
                            return (
                              <SelectItem value={e.id} key={e.id} radius="sm">
                                {e.name}
                              </SelectItem>
                            );
                          })}
                        </Select>
                      ) : (
                        <Select
                          label="Select gender"
                          className="max-w-xs"
                          radius="sm"
                          name="productMetal"
                          variant="underlined"
                          value={productData.productMetal}
                          onChange={productDataChange}
                        >
                          {metal.map((e) => {
                            return (
                              <SelectItem value={e.id} key={e.id} radius="sm">
                                {e.name}
                              </SelectItem>
                            );
                          })}
                        </Select>
                      )}
                      {validationErrors.productMetal && (
                        <div className="text-red-500 errorFront !mt-[1px]">
                          {validationErrors.productMetal}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col w-1/3">
                      <Input
                        type="number"
                        variant="underlined"
                        label="Total Quantity"
                        radius="sm"
                        name="productQuantity"
                        value={productData.productQuantity}
                        onChange={productDataChange}
                      />
                      {validationErrors.productQuantity && (
                        <div className="text-red-500 errorFront !mt-[1px]">
                          {validationErrors.productQuantity}
                        </div>
                      )}
                    </div>
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
