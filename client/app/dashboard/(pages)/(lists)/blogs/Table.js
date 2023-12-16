"use client";
import React, { useRef, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Tooltip,
  User,
} from "@nextui-org/react";
import { SearchIcon } from "@/app/dashboard/common/components/Tables/Icons/SearchIcon";
import { ChevronDownIcon } from "@/app/dashboard/common/components/Tables/Icons/ChevronDownIcon";
import { capitalize } from "@/app/dashboard/common/components/Tables/utils";
import { EditIcon } from "@/app/dashboard/common/components/Tables/Icons/EditIcons";
import { DeleteIcon } from "@/app/dashboard/common/components/Tables/Icons/DeleteIcon";
import ModalApp from "./Modal";
import ConFirm from "@/app/dashboard/common/components/ConFirm";
import { PlusIcon } from "@/app/dashboard/common/components/Tables/Icons/PlusIcon";

const INITIAL_VISIBLE_COLUMNS = [
  "sn",
  "title",
  "description",
  "categoryName",
  "subCategoryName",
  "image",
  "actions",
];
const columns = [
  { name: "SN", uid: "sn" },
  { name: "ID", uid: "_id", sortable: true },
  { name: "TITLE", uid: "title" },
  { name: "SUB-TITLE", uid: "subtitle" },
  { name: "DESCRIPTION", uid: "description" },
  { name: "CATEGORY NAME", uid: "categoryName", sortable: true },
  { name: "SUBCATEGORY NAME", uid: "subCategoryName", sortable: true },
  { name: "IMAGE", uid: "image" },
  { name: "DATE", uid: "date" },
  { name: "ACTIONS", uid: "actions" },
];

export default function TablePage(props) {
  const {
    handelpostblog,
    blogData,
    handelDelete,
    handelUpdate,
    categoryDataDropdown,
    subcategoryDataDropdown,
    postUpload,
  } = props;

  const [filterValue, setFilterValue] = React.useState("");
  const [visibleColumns, setVisibleColumns] = React.useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const btnRef = useRef();
  const [deleteId, setDeleteId] = useState("");
  const deleteBtnClk = (id) => {
    setDeleteId(id);
    btnRef.current.click();
  };

  const updateBtnRef = useRef();
  const [updateData, setUpdateData] = useState({ status: false, data: {} });
  const updateBtnClk = (row) => {
    updateBtnRef.current.click();
    setUpdateData({ status: true, data: row });
  };

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...blogData];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.title.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    return filteredUsers;
  }, [blogData, filterValue]);
  let pages = 1;
  pages = Math.ceil(filteredItems.length / rowsPerPage);
  pages = pages > 0 ? pages : 1;

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  function dateConverter(isoDate) {
    const date = new Date(isoDate);
    return date.toLocaleString();
  }

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "image":
        return (
          <User avatarProps={{ radius: "lg", src: user.image[0] }}>
            {user.title}
          </User>
        );
      case "categoryName":
        return <div>{user.category ? user.category.categoryName : "-"}</div>;
      case "subCategoryName":
        return (
          <div>{user.subcategory ? user.subcategory.subCategoryName : "-"}</div>
        );
      case "date":
        return <div>{dateConverter(user.date)}</div>;
      case "like":
        return <div>{user.likeId.length}</div>;
      case "title":
        return (
          <div>
            {user.title.length > 20
              ? user.title.slice(0, 20) + "..."
              : user.title}
          </div>
        );
      case "sn":
        return <div name={cellValue}>{user.sn}</div>;
      case "description":
        return (
          <div
            dangerouslySetInnerHTML={{
              __html:
                user.description.length > 22
                  ? user.description.slice(0, 22) + "..."
                  : user.description,
            }}
          />
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon onClick={() => updateBtnClk(user)} />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon onClick={() => deleteBtnClk(user._id)} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            radius="sm"
            className="w-full sm:max-w-[44%]"
            placeholder="Search by blog name..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown radius="sm" className="!max-h-[500px] overflow-auto">
              <DropdownTrigger className="hidden sm:flex" radius="sm">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  variant="flat"
                  radius="sm"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                radius="sm"
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button
              radius="sm"
              color="primary"
              endContent={<PlusIcon />}
              onClick={() => updateBtnRef.current.click()}
            >
              Add New
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-8 items-center justify-center">
            <span className="text-default-400 text-small">
              Total {blogData.length} blogs
            </span>
            <span className="tracking-wide font-semibold text-slate-600 black:text-slate-300">
              Dashboard/blogs
            </span>
          </div>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    visibleColumns,
    onRowsPerPageChange,
    blogData.length,
    onSearchChange,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-end items-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
          radius="sm"
        />
      </div>
    );
  }, [items.length, page, pages, hasSearchFilter]);

  return (
    <>
      <Table
        radius="sm"
        aria-label="Example table with custom cells, pagination and sorting"
        isHeaderSticky
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        classNames={{
          wrapper: "max-h-[490px]",
        }}
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSortChange={setSortDescriptor}
      >
        <TableHeader
          columns={headerColumns}
          radius="sm"
          className="!top-0 !absolute"
        >
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No blog Found"} items={sortedItems}>
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <ConFirm
        btnRef={btnRef}
        DeleteFunction={handelDelete}
        deleteId={deleteId}
      />
      <ModalApp
        handelpostblog={handelpostblog}
        handelUpdate={handelUpdate}
        updateBtnRef={updateBtnRef}
        updateData={updateData}
        setUpdateData={setUpdateData}
        categoryDataDropdown={categoryDataDropdown}
        subcategoryDataDropdown={subcategoryDataDropdown}
        postUpload={postUpload}
      />
    </>
  );
}