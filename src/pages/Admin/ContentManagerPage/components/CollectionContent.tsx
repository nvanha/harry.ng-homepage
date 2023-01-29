import { ButtonCustom } from "@/components/forms";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { getListWorksRequest, resetWorksState } from "@/redux/works/actions";
import ModalEditCollection from "./ModalEditCollection";
import Table from "./Table";

const CollectionContent = ({ sidebarItems }) => {
  const {
    isGetListWorksRequest,
    isGetListWorksSuccess,
    listWorksState,
    isUpdateWorkSuccess,
  } = useSelector((store: any) => store.works);
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const apiID = sidebarItems.find((item) => item.slug === pathname).title;

  const [dataTable, setDataTable] = useState([]);
  const [dataActive, setDataActive] = useState({});
  const [isShowModalEditCollection, setIsShowModalEditCollection] =
    useState(false);

  useEffect(() => {
    dispatch(getListWorksRequest());
  }, []);

  useEffect(() => {
    if (isGetListWorksSuccess) {
      setDataTable(listWorksState);
    }
  }, [isGetListWorksSuccess]);

  const handleOpenModalEditCollection = () => {
    setIsShowModalEditCollection(true);
  };

  const handleCloseModalEditCollection = () => {
    setIsShowModalEditCollection(false);
    setDataActive({});
  };

  const handleClickRow = (data) => {
    setIsShowModalEditCollection(true);
    setDataActive(data);
  };

  useEffect(() => {
    if (isUpdateWorkSuccess) {
      handleCloseModalEditCollection();
      dispatch(resetWorksState());
      dispatch(getListWorksRequest());
    }
  }, [isUpdateWorkSuccess]);

  return (
    <>
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-4xl font-bold">{apiID}</h2>
          <p className="text-colorSecondaryDark font-semibold">
            {dataTable.length} entries found
          </p>
        </div>
        <ButtonCustom onClick={handleOpenModalEditCollection}>
          Add work
        </ButtonCustom>
      </div>
      <Table data={dataTable} onClickRow={handleClickRow} />
      {isGetListWorksRequest && <p>Loading</p>}
      {isShowModalEditCollection && (
        <ModalEditCollection
          open={isShowModalEditCollection}
          handleCloseModalEditCollection={handleCloseModalEditCollection}
          dataActive={dataActive}
          apiID={apiID}
        />
      )}
    </>
  );
};

export default CollectionContent;
