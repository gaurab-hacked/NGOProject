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
  Chip,
  User,
  Pagination,
  Tooltip,
} from "@nextui-org/react";
import { SearchIcon } from "@/app/dashboard/common/components/Tables/Icons/SearchIcon";
import { ChevronDownIcon } from "@/app/dashboard/common/components/Tables/Icons/ChevronDownIcon";
import { capitalize } from "@/app/dashboard/common/components/Tables/utils";
import { EyeIcon } from "@/app/dashboard/common/components/Tables/Icons/EyeIcon";
import { DeleteIcon } from "@/app/dashboard/common/components/Tables/Icons/DeleteIcon";
import ConFirm from "@/app/dashboard/common/components/ConFirm";
import ModalFun from "../Modal";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const columns = [
  { name: "SN", uid: "sn" },
  { name: "ID", uid: "_id", sortable: true },
  { name: "USER", uid: "user", sortable: true },
  { name: "PRODUCT NAME", uid: "product", sortable: true },
  { name: "PRODUCT DESCRIPTION", uid: "productId" },
  { name: "TOTAL PRICE", uid: "totalPrize" },
  { name: "QUNTITY", uid: "quntity" },
  { name: "METAL", uid: "productmetal" },
  { name: "GOLD PRICE", uid: "goldRate" },
  { name: "SILVER PRICE", uid: "silverRate" },
  { name: "DELIVER ADDRESS", uid: "detailId" },
  { name: "DATE", uid: "date" },
  { name: "ACTIONS", uid: "actions" },
];

const INITIAL_VISIBLE_COLUMNS = [
  "sn",
  "user",
  "product",
  "quntity",
  "totalPrize",
  "productmetal",
  "detailId",
  "actions",
];

const metal = [
  { id: 1, name: "Gold" },
  { id: 2, name: "Silver" },
  { id: 3, name: "Panchadhatu" },
];
function dateConverter(isoDate) {
  const date = new Date(isoDate);
  return date.toLocaleString();
}

function getMetalName(id) {
  const metalItem = metal.find((item) => String(item.id) === String(id));
  return metalItem ? metalItem.name : "";
}

export default function TableOrder(props) {
  const { orderData, pageFrom, handelUpdate, pageType, handelDelete } = props;
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

  const hasSearchFilter = Boolean(filterValue);
  const btnRef = useRef();

  const [viewDetal, setViewDetal] = useState({});
  const viewBtnClk = (row) => {
    setViewDetal(row);
    btnRef.current.click();
  };

  const btnRefdelete = useRef();
  const [deleteId, setDeleteId] = useState("");
  const deleteBtnClk = (id) => {
    setDeleteId(id);
    btnRefdelete.current.click();
  };

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...orderData];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.product?.title.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    return filteredUsers;
  }, [orderData, filterValue]);

  let pages = Math.ceil(filteredItems.length / rowsPerPage);
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

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "user":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.user?.image }}
            description={user.user?.email}
            name={user.user?.name}
          >
            {user.user?.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "product":
        return <div>{user.product?.title}</div>;
      case "productmetal":
        return <div>{getMetalName(user.product?.metal)}</div>;
      case "productId":
        return <div>{user.product?.description}</div>;
      case "detailId":
        return (
          <div>{user.userDetail?.area + ", " + user.userDetail?.landmark}</div>
        );
      case "date":
        return <div>{dateConverter(user.date)}</div>;
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[user.status]}
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span
                className="text-lg text-default-400 cursor-pointer active:opacity-50"
                onClick={() => viewBtnClk(user)}
              >
                <EyeIcon />
              </span>
            </Tooltip>
            {/* <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip> */}
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
            placeholder="Search by product name..."
            startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown radius="sm">
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
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-8 items-center justify-center">
            <span className="text-default-400 text-small">
              Total {orderData.length}{" "}
              {pageFrom.toLowerCase() === "order"
                ? "orders"
                : pageFrom.toLowerCase() === "delivery"
                ? "delivery"
                : "finished"}
            </span>
            <span className="tracking-wide font-semibold text-slate-600 dark:text-slate-300">
              Dashboard/
              {pageFrom.toLowerCase() === "order"
                ? "orders"
                : pageFrom.toLowerCase() === "delivery"
                ? "delivery"
                : "finished"}
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
    orderData.length,
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
        <TableBody
          emptyContent={`No  ${
            pageFrom.toLowerCase() === `order`
              ? `orders`
              : pageFrom.toLowerCase() === `delivery`
              ? `delivery`
              : `finished`
          } found`}
          items={sortedItems}
        >
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <ModalFun
        btnRef={btnRef}
        viewDetal={viewDetal}
        setViewDetal={setViewDetal}
        pageFrom={pageFrom}
        handelUpdate={handelUpdate}
        pageType={pageType}
      />
      <ConFirm
        btnRef={btnRefdelete}
        DeleteFunction={handelDelete}
        deleteId={deleteId}
      />
    </>
  );
}
