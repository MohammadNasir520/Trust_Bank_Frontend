import Image from "next/image";
import React from "react";
import agriImg1 from "@/assets/images/agriImg1.jpg";
import Button from "@/components/Common/Button";

const AgricultureCard = () => {
  return (
    <div>
      <div className="flex w-[600px] h-[300px] shadow-lg border">
        <div className="h-full w-1/2 overflow-hidden ">
          <Image
            src={agriImg1}
            width={500}
            height={500}
            alt="agri image"
            // layout="responsive"
            className="h-full overflow-hidden  hover:scale-110 transition-transform transform ease-out"
          ></Image>
        </div>
        <div className="w-1/2">
          <h1>Title</h1>
          <p>
            Purpose / Objective: To augment flow of credit to tenant farmers
            cultivating land either as oral lessees or share croppers…
          </p>

          {/* <Button>Read More</Button> */}
          <button className="h-11 w-12">Read More</button>
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
