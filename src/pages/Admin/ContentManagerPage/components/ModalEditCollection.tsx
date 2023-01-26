import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
} from "@material-tailwind/react";
import { IoArrowBack } from "react-icons/io5";
import { useDispatch } from "react-redux";

import { ButtonCustom } from "@/components/forms";
import { testUploadImageRequest } from "@/redux/works/actions";
import "./ModalEditCollection.scss";

const ModalEditCollection = ({
  open,
  handleCloseModalEditCollection,
  dataActive,
}) => {
  const dispatch = useDispatch();

  const handleChangeFile = (e) => {
    const Files = e.target.files[0];
    let object = {
      file: Files,
    };
    dispatch(testUploadImageRequest(object));
  };

  return (
    <Dialog
      open={open}
      size="xxl"
      handler={handleCloseModalEditCollection}
      className="bg-[#181826] relative modal-edit-collection"
    >
      <DialogHeader className="fixed top-0 left-0 w-screen bg-[#181826] p-4 border-b-[1px] border-[#32324d]">
        <p
          className="absolute left-5 top-1/2 -translate-y-1/2 text-[#009b7c] text-sm font-medium cursor-pointer flex items-center hover:underline"
          onClick={handleCloseModalEditCollection}
        >
          <IoArrowBack className="mr-3" /> Back
        </p>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h3 className="text-colorPrimaryDark text-3xl font-bold">
            LinkedIn Clone with ReactJD, NodeJS, AWS
          </h3>
          <p className="text-colorSecondaryDark font-semibold text-base">
            API ID: WorksWorkspace
          </p>
        </div>
      </DialogHeader>
      <DialogBody className="mt-[93px] h-[calc(100vh-93px-69px)] overflow-y-scroll">
        {/* <div className="mx-8 p-4 bg-[#212134] border-[1px] border-[#32324d] shadow-lg shadow-[#03030533] rounded">
          <div className="mb-8 mt-4">
            <InputText
              label="Title thumb"
              variant="static"
              customClassName="!text-colorPrimaryDark font-bold"
            />
          </div>
          <div className="mb-8">
            <InputText
              label="Title full"
              variant="static"
              customClassName="!text-colorPrimaryDark font-bold"
            />
          </div>
          <div className="mb-8">
            <InputText
              label="Stack"
              variant="static"
              customClassName="!text-colorPrimaryDark font-bold"
            />
          </div>
          <div className="mb-8">
            <InputText
              label="Category"
              variant="static"
              customClassName="!text-colorPrimaryDark font-bold"
            />
          </div>
          <div className="mb-8">
            <InputText
              label="Link website"
              variant="static"
              customClassName="!text-colorPrimaryDark font-bold"
            />
          </div>
          <div className="mb-8">
            <InputText
              label="Link repository"
              variant="static"
              customClassName="!text-colorPrimaryDark font-bold"
            />
          </div>
          <div className="mb-8">
            <Textarea
              label="Content"
              variant="static"
              className="text-colorPrimaryDark font-bold"
            />
          </div>
        </div> */}
        <Input type="file" onChange={(e) => handleChangeFile(e)} />
        <img
          src="https://s3.ap-southeast-2.amazonaws.com/harry.ng-homepage/images/demodemo.png"
          alt=""
        />
      </DialogBody>
      <DialogFooter className="fixed bottom-0 left-0 w-screen bg-[#181826] p-3 border-t-[1px] border-[#32324d]">
        <ButtonCustom variant="disabled">
          <span>Save</span>
        </ButtonCustom>
      </DialogFooter>
    </Dialog>
  );
};

export default ModalEditCollection;
