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

export default function ModalUpdateExperience({ experience }) {
  // console.log(experience);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [image, setImage] = useState("");
  const [showImage, setShowImage] = useState("");
  const dispatch = useDispatch();

  const [exp, setExp] = useState({
    company: "",
    datein: "",
    dateout: "",
    description: "",
    profesi: "",
    image: image,
  });

  useEffect(() => {
    setExp({
      company: experience.company,
      datein: experience.datein,
      dateout: experience.dateout,
      description: experience.description,
      profesi: experience.profesi,
      image: experience.image,
    });
  }, [experience]);

  const handleChange = (e) => {
    setExp({
      ...exp,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    e.preventDefault();
    const uploader = e.target.files[0]; // Get the first selected file
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
        updateExperience({
          experience_id: experience.experience_id,
          exp,
          image,
        })
      );
      onClose();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="pl-2 text-center w-[50%] h-[100%]" onClick={onOpen}>
        <i className="bi bi-pencil-square text-[100%]"></i>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                Edit Experience
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
                    experience.image && (
                      <Image
                        src={experience.image}
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
                  label="Jobdesk"
                  placeholder="Enter your Jobdesk"
                  variant="bordered"
                  name="profesi"
                  onChange={handleChange}
                  value={exp.profesi}
                />
                <Input
                  autoFocus
                  // endContent={
                  //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  // }
                  label="Company"
                  placeholder="Enter your Company"
                  variant="bordered"
                  name="company"
                  onChange={handleChange}
                  value={exp.company}
                />
                <Input
                  autoFocus
                  // endContent={
                  //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  // }
                  label="Tahun Masuk"
                  placeholder="Enter your Tahun Masuk"
                  variant="bordered"
                  name="datein"
                  onChange={handleChange}
                  value={exp.datein}
                  type="date"
                />
                <Input
                  autoFocus
                  // endContent={
                  //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  // }
                  label="Tahun Keluar"
                  placeholder="Enter your Tahun Keluar"
                  variant="bordered"
                  name="dateout"
                  onChange={handleChange}
                  value={exp.dateout}
                  type="date"
                />
                <Textarea
                  autoFocus
                  // endContent={
                  //   <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  // }
                  label="Description"
                  placeholder="Enter your Description"
                  variant="bordered"
                  name="description"
                  onChange={handleChange}
                  value={exp.description}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" onClick={handleUpdate}>
                  Update Pengalaman Kerja
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
