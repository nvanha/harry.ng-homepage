import React, { useState } from "react";
import ModalEditCollection from "./ModalEditCollection";
import Table from "./Table";

const CollectionContent = () => {
  const [isShowModalEditCollection, setIsShowModalEditCollection] =
    useState(false);
  const [dataActive, setDataActive] = useState({});

  const data = [
    {
      titleThumb:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error recusandae ducimus quas expedita rem architecto dolore iste non numquam assumenda incidunt reprehenderit voluptatem provident earum sapiente, ea at consequuntur dolor!",
      updatedAt: new Date(),
    },
    {
      titleThumb:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error recusandae ducimus quas expedita rem architecto dolore iste non numquam assumenda incidunt reprehenderit voluptatem provident earum sapiente, ea at consequuntur dolor!",
      updatedAt: new Date(),
    },
    {
      titleThumb:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error recusandae ducimus quas expedita rem architecto dolore iste non numquam assumenda incidunt reprehenderit voluptatem provident earum sapiente, ea at consequuntur dolor!",
      updatedAt: new Date(),
    },
    {
      titleThumb:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error recusandae ducimus quas expedita rem architecto dolore iste non numquam assumenda incidunt reprehenderit voluptatem provident earum sapiente, ea at consequuntur dolor!",
      updatedAt: new Date(),
    },
    {
      titleThumb:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error recusandae ducimus quas expedita rem architecto dolore iste non numquam assumenda incidunt reprehenderit voluptatem provident earum sapiente, ea at consequuntur dolor!",
      updatedAt: new Date(),
    },
    {
      titleThumb:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error recusandae ducimus quas expedita rem architecto dolore iste non numquam assumenda incidunt reprehenderit voluptatem provident earum sapiente, ea at consequuntur dolor!",
      updatedAt: new Date(),
    },
    {
      titleThumb:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error recusandae ducimus quas expedita rem architecto dolore iste non numquam assumenda incidunt reprehenderit voluptatem provident earum sapiente, ea at consequuntur dolor!",
      updatedAt: new Date(),
    },
    {
      titleThumb:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error recusandae ducimus quas expedita rem architecto dolore iste non numquam assumenda incidunt reprehenderit voluptatem provident earum sapiente, ea at consequuntur dolor!",
      updatedAt: new Date(),
    },
    {
      titleThumb:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error recusandae ducimus quas expedita rem architecto dolore iste non numquam assumenda incidunt reprehenderit voluptatem provident earum sapiente, ea at consequuntur dolor!",
      updatedAt: new Date(),
    },
  ];

  const handleClickRow = (data) => {
    setIsShowModalEditCollection(true);
    setDataActive(data);
  };

  const handleCloseModalEditCollection = () => {
    setIsShowModalEditCollection(false);
    setDataActive({});
  };

  return (
    <div>
      <h2 className="text-4xl font-bold">WorksWorkspace</h2>
      <p className="text-colorSecondaryDark mb-10 font-semibold">
        10 entries found
      </p>
      <Table data={data} onClickRow={handleClickRow} />
      {isShowModalEditCollection && (
        <ModalEditCollection
          open={isShowModalEditCollection}
          handleCloseModalEditCollection={handleCloseModalEditCollection}
          dataActive={dataActive}
        />
      )}
    </div>
  );
};

export default CollectionContent;
