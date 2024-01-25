import Image from "next/image";
import React from "react";
import agriImg1 from "@/assets/images/agriImg1.jpg";

const AgricultureCard = () => {
  return (
    <div>
      <div className="flex w-[600px] h-[300px] shadow-lg border hover:shadow-xl ">
        <div className="h-full w-1/2 overflow-hidden ">
          <Image
            src={agriImg1}
            width={500}
            height={500}
            alt="agri image"
            // layout="responsive"
            className="h-full overflow-hidden cursor-pointer hover:scale-110 transition-transform transform ease-out"
          ></Image>
        </div>
        <div className="w-1/2 flex flex-col space-y-5 p-4 relative ">
          <img
            src="https://docs.material-tailwind.com/img/face-2.jpg"
            alt="avatar"
            className="relative inline-block h-12 w-12 !rounded-full  object-cover object-center"
          />
          <h1>Agricultural Jewel Loan Scheme</h1>
          <p className="text-gray-500">
            Purpose / Objective: To augment flow of credit to tenant farmers
            cultivating land either as oral lessees or share croppers…
          </p>

          <button className="bg-[#1F305E] px-4 py-2   text-white absolute bottom-0 w-2/3">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgricultureCard;
// import Image from "next/image";
// import React from "react";
// import agriImg1 from "@/assets/images/agriImg1.jpg";

// const AgricultureCard = () => {
//   return (
//     <div>
//       <div className="flex w-[600px] h-[300px] shadow-lg border">
//         <div className="h-full w-5/12 overflow-hidden">
//           <Image
//             src={agriImg1}
//             width={500}
//             height={500}
//             alt="agri image"
//             className="h-full w-full object-cover transition-transform hover:scale-110 transform ease-out"
//           ></Image>
//         </div>
//         <div className="w-7/12">
//           <h1>Title</h1>
//           <p>
//             Purpose / Objective: To augment flow of credit to tenant farmers
//             cultivating land either as oral lessees or share croppers…
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AgricultureCard;
