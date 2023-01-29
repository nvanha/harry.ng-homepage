import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import {
  IoArrowBack,
  IoCloseCircleSharp,
  IoCloudUploadOutline,
} from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { ButtonCustom, InputArea, InputText } from "@/components/forms";
import hooks from "@/hooks";
import {
  addWorkRequest,
  deleteImageWorkRequest,
  updateWorkRequest,
  uploadImageWorkRequest,
} from "@/redux/works/actions";

const ModalEditCollection = ({
  open,
  handleCloseModalEditCollection,
  dataActive,
  apiID,
}) => {
  const {
    isAddWorkRequest,
    isAddWorkSuccess,
    addWorkRes,
    isUpdateWorkRequest,
    isUploadImageWorkRequest,
    isUploadImageWorkSuccess,
    uploadImageWorkRes,
    isDeleteImageWorkRequest,
    isDeleteImageWorkSuccess,
    deleteImageWorkRes,
  } = useSelector((store: any) => store.works);
  const dispatch = useDispatch();

  const isModalAddWork = hooks.useIsObjectEmpty(dataActive);

  const [imageListData, setImageListData] = useState<
    { Key: string; Location: string }[]
  >([]);

  const formik = useFormik({
    initialValues: {
      titleThumb: "",
      titleFull: "",
      stack: "",
      category: "",
      content: "",
      linkWebsite: "",
      linkRepo: "",
    },
    validationSchema: Yup.object({
      titleThumb: Yup.string().trim().required("Title thumbnail is required!"),
      titleFull: Yup.string().trim().required("Title full is required!"),
      stack: Yup.string().trim().required("Stack is required!"),
      category: Yup.string().trim().required("Category is required!"),
      content: Yup.string().trim().required("Content is required!"),
    }),
    onSubmit: (values) => {
      if (isAddWorkSuccess) {
        const payload = {
          id: addWorkRes.id,
          image: imageListData,
        };
        dispatch(updateWorkRequest(payload));
      } else {
        const payload = {
          titleThumb: values.titleThumb,
          titleFull: values.titleFull,
          stack: values.stack.split(", "),
          category: values.category.split(", "),
          content: values.content,
          linkWebsite: values.linkWebsite,
          linkRepo: values.linkRepo,
        };
        dispatch(addWorkRequest(payload));
      }
    },
  });

  const handleChangeFile = async (e) => {
    const fileItem = e.target.files[0];
    const base64File = await hooks.useConvertBase64(fileItem);
    const payload = {
      file: base64File,
      type: fileItem.type,
      name: fileItem.name,
    };
    dispatch(uploadImageWorkRequest(payload));
  };

  useEffect(() => {
    if (isUploadImageWorkSuccess) {
      setImageListData(
        imageListData.concat({
          Key: uploadImageWorkRes.Key,
          Location: uploadImageWorkRes.Location,
        })
      );
    }
  }, [isUploadImageWorkSuccess]);

  const handleDeleteImage = (key) => {
    dispatch(deleteImageWorkRequest(encodeURIComponent(key)));
  };

  useEffect(() => {
    if (isDeleteImageWorkSuccess) {
      setImageListData(
        imageListData.filter((item) => item.Key !== deleteImageWorkRes)
      );
    }
  }, [isDeleteImageWorkSuccess]);

  return (
    <Dialog
      open={open}
      size="xxl"
      handler={handleCloseModalEditCollection}
      className="bg-[#181826] relative modal-edit-collection"
    >
      <form noValidate onSubmit={formik.handleSubmit}>
        <DialogHeader className="fixed top-0 left-0 w-screen bg-[#181826] p-4 border-b-[1px] border-[#32324d]">
          <p
            className="absolute left-5 top-1/2 -translate-y-1/2 text-[#009b7c] text-sm font-medium cursor-pointer flex items-center hover:underline"
            onClick={handleCloseModalEditCollection}
          >
            <IoArrowBack className="mr-3" /> Back
          </p>
          <div className="flex flex-col items-center justify-center w-full h-full">
            <h3 className="text-colorPrimaryDark text-3xl font-bold">
              {isAddWorkSuccess
                ? "Upload image"
                : isModalAddWork
                ? "Modal add new work"
                : "demo"}
            </h3>
            <p className="text-colorSecondaryDark font-semibold text-base">
              API ID: {apiID}
            </p>
          </div>
        </DialogHeader>
        <DialogBody className="mt-[93px] h-[calc(100vh-93px-69px)] overflow-y-scroll">
          <div className="mx-8 p-4 bg-[#212134] border-[1px] border-[#32324d] shadow-lg shadow-[#03030533] rounded">
            <div className="mb-8 mt-4">
              <InputText
                customClassName="!text-colorPrimaryDark font-bold"
                label="Title thumb"
                variant="static"
                isValid={formik.touched.titleThumb && !formik.errors.titleThumb}
                isInvalid={
                  formik.touched.titleThumb && formik.errors.titleThumb
                }
                isError={formik.touched.titleThumb && formik.errors.titleThumb}
                msgError={formik.errors.titleThumb}
                isRequired
                {...formik.getFieldProps("titleThumb")}
              />
            </div>
            <div className="mb-8">
              <InputText
                customClassName="!text-colorPrimaryDark font-bold"
                label="Title full"
                variant="static"
                isValid={formik.touched.titleFull && !formik.errors.titleFull}
                isInvalid={formik.touched.titleFull && formik.errors.titleFull}
                isError={formik.touched.titleFull && formik.errors.titleFull}
                msgError={formik.errors.titleFull}
                isRequired
                {...formik.getFieldProps("titleFull")}
              />
            </div>
            <div className="mb-8">
              <InputText
                customClassName="!text-colorPrimaryDark font-bold"
                label="Stack"
                variant="static"
                isValid={formik.touched.stack && !formik.errors.stack}
                isInvalid={formik.touched.stack && formik.errors.stack}
                isError={formik.touched.stack && formik.errors.stack}
                msgError={formik.errors.stack}
                isRequired
                {...formik.getFieldProps("stack")}
              />
            </div>
            <div className="mb-8">
              <InputText
                customClassName="!text-colorPrimaryDark font-bold"
                label="Category"
                variant="static"
                isValid={formik.touched.category && !formik.errors.category}
                isInvalid={formik.touched.category && formik.errors.category}
                isError={formik.touched.category && formik.errors.category}
                msgError={formik.errors.category}
                isRequired
                {...formik.getFieldProps("category")}
              />
            </div>
            <div className="mb-8">
              <InputText
                customClassName="!text-colorPrimaryDark font-bold"
                label="Link website"
                variant="static"
                isValid={
                  formik.touched.linkWebsite && !formik.errors.linkWebsite
                }
                isInvalid={
                  formik.touched.linkWebsite && formik.errors.linkWebsite
                }
                isError={
                  formik.touched.linkWebsite && formik.errors.linkWebsite
                }
                msgError={formik.errors.linkWebsite}
                {...formik.getFieldProps("linkWebsite")}
              />
            </div>
            <div className="mb-8">
              <InputText
                customClassName="!text-colorPrimaryDark font-bold"
                label="Link repository"
                variant="static"
                isValid={formik.touched.linkRepo && !formik.errors.linkRepo}
                isInvalid={formik.touched.linkRepo && formik.errors.linkRepo}
                isError={formik.touched.linkRepo && formik.errors.linkRepo}
                msgError={formik.errors.linkRepo}
                {...formik.getFieldProps("linkRepo")}
              />
            </div>
            <div className="mb-8">
              <InputArea
                customClassName="!text-colorPrimaryDark font-bold"
                label="Content"
                variant="static"
                isValid={formik.touched.content && !formik.errors.content}
                isInvalid={formik.touched.content && formik.errors.content}
                isError={formik.touched.content && formik.errors.content}
                msgError={formik.errors.content}
                isRequired
                {...formik.getFieldProps("content")}
              />
            </div>
            {isAddWorkSuccess && (
              <div className="mb-8">
                <label className="inline-block mb-4">Image (*)</label>
                <div className="flex flex-wrap">
                  {imageListData.map((item, index) => (
                    <div
                      key={index}
                      className="w-20 h-20 rounded-md relative mr-4"
                    >
                      <IoCloseCircleSharp
                        className="absolute top-0 right-0 cursor-pointer translate-x-1/2 -translate-y-1/2 h-5 w-5 text-red-300 hover:text-red-400"
                        onClick={() => handleDeleteImage(item.Key)}
                      />
                      <img
                        src={item.Location}
                        alt=""
                        className="block w-full h-full object-cover object-center rounded-md"
                      />
                      {isDeleteImageWorkRequest && (
                        <div className="absolute top-0 left-0 w-full h-full  backdrop-blur-md flex items-center justify-center z-10">
                          <CgSpinner className="text-3xl animate-spin" />
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="w-20 h-20 border-2 border-teal-500 rounded-md border-dashed flex items-center justify-center relative transition-opacity hover:opacity-80">
                    <IoCloudUploadOutline className="text-3xl" />
                    <input
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                      type="file"
                      onChange={(e) => handleChangeFile(e)}
                    />
                    {isUploadImageWorkRequest && (
                      <div className="absolute top-0 left-0 w-full h-full  backdrop-blur-md flex items-center justify-center z-10">
                        <CgSpinner className="text-3xl animate-spin" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogBody>
        <DialogFooter className="fixed bottom-0 left-0 w-screen bg-[#181826] p-3 border-t-[1px] border-[#32324d]">
          <ButtonCustom
            variant={
              isAddWorkRequest || isUpdateWorkRequest ? "disabled" : "primary"
            }
            type="submit"
            customClassName="w-[150px] h-[44px]"
          >
            {isAddWorkRequest || isUpdateWorkRequest ? (
              <CgSpinner className="animate-spin w-5 h-5" />
            ) : (
              "Save"
            )}
          </ButtonCustom>
        </DialogFooter>
      </form>
    </Dialog>
  );
};

export default ModalEditCollection;
