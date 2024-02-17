import Image from "next/image";

const providerData = [
    {
        service:"Electricity",
        provider:[
            {
                name:"desco",
                image:"/desco.png",
                bill:"123"
            },
            {
                name:"desco",
                image:"/desco.png",
                bill:"123"
            },
            {
                name:"desco",
                image:"/desco.png",
                bill:"123"
            },
            {
                name:"desco",
                image:"/desco.png",
                bill:"123"
            }
        ]
    },
    {
        service:"Water",
        provider:[
            {
                name:"Oasa",
                image:"/desco.png",
                bill:"123"
            },
            {
                name:"Pure Life",
                image:"/desco.png",
                bill:"123"
            },
            {
                name:"National",
                image:"/desco.png",
                bill:"123"
            },
            {
                name:"",
                image:"/desco.png",
                bill:"123"
            },
            {
                name:"Oasa",
                image:"/desco.png",
                bill:"123"
            },
        ]
    }
]

const page = () => {
  return (
    <div>
      <div className="bg-[#535C91]  rounded-md pb-4 ">
        <div className="flex flex-col items-center justify-center   bg-gray-900 py-10">
          {/* Component Start */}
          <h1 className="text-lg text-gray-400 font-medium">
            Electricity Bill Provider - Data
          </h1>
          <div className="flex flex-col mt-6">
            <div className="-my-2  sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-3 lg:px-8">
                <div className="shadow overflow-hidden sm:rounded-lg">
                  <table className="min-w-full overflow-scroll text-sm text-gray-400 ">
                    <thead className="bg-gray-800 text-[12px] uppercase font-medium">
                      <tr>
                        <th />
                        <th
                          scope="col"
                          className="px-3 py-3 text-left tracking-wider"
                        >
                          Provider
                        </th>
                    
                        <th
                          scope="col"
                          className="px-3 py-3 text-left tracking-wider"
                        >
                          Amount
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3 text-left tracking-wider"
                        >
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-800">
                      <tr className="bg-black bg-opacity-20">
                        <td className="pl-4">1</td>
                        <td className="flex px-3 py-4 whitespace-nowrap">
                          <Image
                            src="/desco.png"
                            alt="Desco"
                            width={20}
                            height={20}
                            className="w-5"
                          />
                          <span className="ml-2 font-medium">Desco</span>
                        </td>
                     
                        <td className="px-3 py-4 whitespace-nowrap">
                          $ <span> 1000</span>
                        </td>
                        <td className="flex px-3 py-4 whitespace-nowrap">
                          <button className=" text-white rounded-md px-4 py-1">
                            View
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="pl-4">2</td>
                        <td className="flex px-3 py-4 whitespace-nowrap">
                          <Image
                            src="/desco.png"
                            alt="Desco"
                            width={20}
                            height={20}
                            className="w-5"
                          />
                          <span className="ml-2 font-medium">Desco</span>
                        </td>
                  
                        <td className="px-3 py-4 whitespace-nowrap">
                          $ <span> 4000</span>
                        </td>
                        <td className="flex px-3 py-4 whitespace-nowrap">
                          <button className=" text-white rounded-md px-4 py-1">
                            View
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="pl-4">3</td>
                        <td className="flex px-3 py-4 whitespace-nowrap">
                          <Image
                            src="/desco.png"
                            alt="Desco"
                            width={20}
                            height={20}
                            className="w-5"
                          />
                          <span className="ml-2 font-medium">Polli biddut</span>
                        </td>
                  
                        <td className="px-3 py-4 whitespace-nowrap">
                          $ <span> 3000</span>
                        </td>
                        <td className="flex px-3 py-4 whitespace-nowrap">
                          <button className=" text-white rounded-md px-4 py-1">
                            View
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="pl-4">4</td>
                        <td className="flex px-3 py-4 whitespace-nowrap">
                          <Image
                            src="/desco.png"
                            alt="Desco"
                            width={20}
                            height={20}
                            className="w-5"
                          />
                          <span className="ml-2 font-medium">Nesco</span>
                        </td>
              
                        <td className="px-3 py-4 whitespace-nowrap">
                          $ <span> 1000</span>
                        </td>
                        <td className="flex px-3 py-4 whitespace-nowrap">
                          <button className=" text-white rounded-md px-4 py-1">
                            View
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
          </div>
          {/* Component End  */}
        </div>
      </div>
    </div>
  );
};

export default page;
