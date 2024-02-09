import React from 'react'

const InvoiceModal = ({ showModal, setShowModal }: { showModal: any, setShowModal: any }) => {
  return (
    <div className='p-6'>
      {" "}
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-2xl text-[#6C22A6] font-semibold">Transaction Invoice</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>

              <div className="flex items-center justify-between px-4 py-3">
                <div className="text-md font-serif font-medium">
                  <h1>Transfer:</h1>
                  <h1>Send To:</h1>
                  <h1>Bank Account:</h1>
                  <h1>Date:</h1>
                  <h1>Time:</h1>
                  <h1>Card Number:</h1>
                  <h1>Amount:</h1>
                  <h1>Fee:</h1>
                </div>
                <div className="text-md font-serif font-medium">
                  <h1>#55544444447855</h1>
                  <h1>Nahid Islam</h1>
                  <h1>W122344kdhsss</h1>
                  <h1>11/11/2022</h1>
                  <h1>9.30PM</h1>
                  <h1>5555 5555 5555 5555</h1>
                  <h1>$ 250</h1>
                  <h1>$ 10</h1>
                </div>
              </div>
              <hr  className='w-full h-1 bg-black'/>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  onClick={() => setShowModal(false)}
                  className=" background-transparent bg-[#6C22A6] rounded-md text-[#FFFFFF] font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  Close
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-white rounded-md bg-[#6C22A6]  background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  Download Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
    </div>
  );
}

export default InvoiceModal