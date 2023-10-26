import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
  Textarea,
} from "@nextui-org/react";
import Image from "next/image";
import img from "../../assets/foto4.png";
import { useDispatch } from "react-redux";
import { updateExperience } from "@/redux/reducer/experience/updateExperienceSlice";
import { ToastContainer } from "react-toastify";
import { updatePortofolio } from "@/redux/reducer/portofolio/updatePortofolioSlice";

export default function ModalUpdatePortofolio({ portofolio }) {
  console.log(portofolio);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [image, setImage] = useState("");
  const [showImage, setShowImage] = useState("");
  const dispatch = useDispatch();

  const [porto, setPorto] = useState({
    namaAplikasi: "",
    linkRepo: "",
    typePortofolio: "",
    image: image,
  });

  useEffect(() => {
    setPorto({
      namaAplikasi: portofolio?.namaaplikasi,
      linkRepo: portofolio?.linkrepo,
      typePortofolio: portofolio?.typeportofolio,
      image: portofolio?.image,
    });
  }, [portofolio]);

  const handleChange = (e) => {
    setPorto({
      ...porto,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    e.preventDefault();
    const uploader = e.target.files[0];
    if (uploader instanceof Blob || uploader instanceof File) {
      const reader = new FileReader();
      reader.onload = () => {
        setShowImage(reader.result);
      };
      reader.readAsDataURL(uploader);
      setImage(uploader);
    } else {
      console.error("Invalid file selected.");
    }
  };

  const handleUpdate = async (e) => {
    try {
      await dispatch(
        updatePortofolio({
          portofolio_id: portofolio.portofolio_id,
          porto,
          image,
        })
      );
      onClose();
    } catch (e) {
      console.log(e);
    }
  };

  console.log(porto);

  return (
    <>
      <ToastContainer />
      <div className="pl-2 text-center w-[40px] h-[40px]" onClick={onOpen}>
        <i className="bi bi-pencil-square text-[100%] "></i>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                Edit portofolio
              </ModalHeader>
              <ModalBody className="items-center">
                <div className="flex lg:w-[150px] md:w-[120px] w-[100px] lg:h-[150px] md:h-[120px] h-[100px] rounded-md my-4 bg-gray-500 relative">
                  <input
                    type="file"
                    name="files"
                    id="files"
                    onChange={handleImage}
                    className="py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400  w-[100%] h-[100%] absolute top-0 opacity-0"
                  />
                  {showImage ? (
                    <Image
                      src={showImage}
                      alt="img"
                      className="rounded-lg w:[100%] h-[100%]"
                      width={150}
                      height={150}
                    />
                  ) : (
                    porto.image && (
                      <Image
                        src={porto.image}
                        alt="img"
                        className="rounded-lg w:[100%] h-[100%]"
                        width={150}
                        height={150}
                      />
                    )
                  )}
                </div>

                <Input
                  autoFocus
                  // endContent={
                  //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  // }
                  label="namaAplikasi"
                  placeholder="Enter your namaAplikasi"
                  variant="bordered"
                  name="namaAplikasi"
                  onChange={handleChange}
                  value={porto.namaAplikasi}
                />
                <Input
                  autoFocus
                  // endContent={
                  //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  // }
                  label="Link Repository"
                  placeholder="Enter your Link Repository"
                  variant="bordered"
                  name="linkRepo"
                  onChange={handleChange}
                  value={porto.linkRepo}
                />
                <div className="flex flex-row w-full">
                  <div className="flex flex-col w-[90%] ml-[5%]">
                    <label
                      htmlFor="tahun"
                      className="block font-medium leading-6 text-[#9EA0A5] w-[90%] text-xs"
                    >
                      Type Portofolio
                    </label>
                    <div className="mt-2 w-[90%] mb-4 flex flex-row items-center">
                      <input
                        id="typePortofolio-web"
                        type="radio"
                        name="typePortofolio"
                        value="Aplikasi Web"
                        onChange={handleChange}
                        checked={porto.typePortofolio === "Aplikasi Web"}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="typePortofolio-2"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 pr-5"
                      >
                        Aplikasi Web
                      </label>

                      <input
                        id="typePortofolio-mobile"
                        type="radio"
                        name="typePortofolio"
                        value="Aplikasi Mobile"
                        onChange={handleChange}
                        checked={porto.typePortofolio === "Aplikasi Mobile"}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="typePortofolio-2"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Aplikasi Mobile
                      </label>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onClick={handleUpdate}>
                  update Portofolio
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
