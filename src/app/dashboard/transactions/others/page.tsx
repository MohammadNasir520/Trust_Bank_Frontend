'use client'

import InvoiceModal from "@/components/UI/modal/InvoiceModal";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  Heading,
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { useRef, useState } from "react";

import { BsThreeDots } from "react-icons/bs";

const page = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
      const finalRef = useRef(null);
          const [showModal, setShowModal] = useState(false);



  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-xl px-4 font-se">
          <thead>
            <tr className="bg-gray-200 h-30px">
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Invoice
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Medium
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Transaction
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="">
            <tr className=" ">
              <td>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://thumbs2.imgbox.com/f7/40/4Ls9oPKC_t.jpg"
                      alt="Profile picture"
                    />
                  </div>
                </div>
              </td>
              <td>
                <h1>#25486</h1>
              </td>
              <td>
                <h1>Trust Bank</h1>
              </td>
              <td>
                <h1>$ 250</h1>
              </td>
              <td>Complete</td>
              <td className="z-10">
                <>
                  <button
                    className=" text-black px-2 py-1 rounded-full"
                    type="button"
                    onClick={() => setShowModal(true)}
                  >
                    Invoice
                  </button>
                  {showModal ? (
                    <InvoiceModal
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  ) : null}
                </>
              </td>
            </tr>
            <tr className=" ">
              <td>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://thumbs2.imgbox.com/a1/31/1OSGCY4w_t.png"
                      alt="Profile picture"
                    />
                  </div>
                </div>
              </td>
              <td>
                <h1>#25486</h1>
              </td>
              <td>
                <h1>Trust Bank</h1>
              </td>
              <td>
                <h1>$ 250</h1>
              </td>
              <td>Complete</td>
              <td className="z-10">
                <>
                  <button
                    className=" text-black px-2 py-1 rounded-full"
                    type="button"
                    onClick={() => setShowModal(true)}
                  >
                    Invoice
                  </button>
                  {showModal ? (
                    <InvoiceModal
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  ) : null}
                </>
              </td>
            </tr>
            <tr className=" ">
              <td>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://thumbs2.imgbox.com/b6/6e/PbtPDppR_t.png"
                      alt="Profile picture"
                    />
                  </div>
                </div>
              </td>
              <td>
                <h1>#25486</h1>
              </td>
              <td>
                <h1>Trust Bank</h1>
              </td>
              <td>
                <h1>$ 250</h1>
              </td>
              <td>Complete</td>
              <td className="z-10">
                <>
                  <button
                    className=" text-black px-2 py-1 rounded-full"
                    type="button"
                    onClick={() => setShowModal(true)}
                  >
                    Invoice
                  </button>
                  {showModal ? (
                    <InvoiceModal
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  ) : null}
                </>
              </td>
            </tr>
            <tr className=" ">
              <td>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://thumbs2.imgbox.com/6b/a2/Z7b3OQ55_t.png"
                      alt="Profile picture"
                    />
                  </div>
                </div>
              </td>
              <td>
                <h1>#25486</h1>
              </td>
              <td>
                <h1>Trust Bank</h1>
              </td>
              <td>
                <h1>$ 250</h1>
              </td>
              <td>Complete</td>
              <td className="z-10">
                <>
                  <button
                    className=" text-black px-2 py-1 rounded-full"
                    type="button"
                    onClick={() => setShowModal(true)}
                  >
                    Invoice
                  </button>
                  {showModal ? (
                    <InvoiceModal
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  ) : null}
                </>
              </td>
            </tr>
            <tr className=" ">
              <td>
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <img
                      className="w-10 h-10 rounded-full"
                      src="https://thumbs2.imgbox.com/34/91/ork52SfL_t.png"
                      alt="Profile picture"
                    />
                  </div>
                </div>
              </td>
              <td>
                <h1>#25486</h1>
              </td>
              <td>
                <h1>Trust Bank</h1>
              </td>
              <td>
                <h1>$ 250</h1>
              </td>
              <td>Complete</td>
              <td className="z-10">
                <>
                  <button
                    className=" text-black px-2 py-1 rounded-full"
                    type="button"
                    onClick={() => setShowModal(true)}
                  >
                    Invoice
                  </button>
                  {showModal ? (
                    <InvoiceModal
                      showModal={showModal}
                      setShowModal={setShowModal}
                    />
                  ) : null}
                </>
              </td>
            </tr>

            {/* Otras filas de ejemplo */}
          </tbody>
          <tfoot className="bg-gray-50 h-56px">
            <tr>
              <td
                className="px-12 py-4 whitespace-no-wrap text-sm font-normal text-center"
                colSpan={8}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="mr-2">Filas por tabla</span>
                    <select className="form-select border border-gray-300 rounded-md px-2 py-1 focus:ring focus:ring-blue-200 focus:border-blue-500 text-sm">
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span>1 - 8 de 25</span>
                    <button className="text-gray-500 hover:text-blue-500 focus:outline-none">
                      {/* Icono de retroceso */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.293 12.293a1 1 0 011.414 0L15 16.586V6a1 1 0 112 0v10a1 1 0 01-1 1H4a1 1 0 110-2h10a1 1 0 01-.707-.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button className="text-gray-500 hover:text-blue-500 focus:outline-none">
                      {/* Icono de siguiente */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 9.293a1 1 0 011.414 0L15 13.586V3a1 1 0 112 0v10a1 1 0 01-1 1H4a1 1 0 010-2h10a1 1 0 01-.707-.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default page;
