"use client";
import BillCard from "@/components/ui/payBill/BillCard";
import Image from "next/image";
import { useState } from "react";
import { TiTickOutline } from "react-icons/ti";


 
interface Provider {
  name: string;
  image: string;
}

interface BillData {
  id: number;
  title: string;
  image: string;
  providers: Provider[];
}

const billsData: BillData[] = [
  {
    id: 1,
    title: "Electricity",
    image: " https://cdn-icons-png.flaticon.com/512/9746/9746847.png",
    providers: [
      {
        name: "Desco",
        image:
          "https://cdn3.vectorstock.com/i/1000x1000/09/17/electricity-logo-circle-electric-icon-vector-27370917.jpg",
      },
      {
        name: "Nesco",
        image: "https://thumbs2.imgbox.com/f7/40/4Ls9oPKC_t.jpg",
      },
      {
        name: "Polli Biddut",
        image: "https://thumbs2.imgbox.com/34/91/ork52SfL_t.png",
      },
      {
        name: "Desco",
        image: "https://thumbs2.imgbox.com/6b/a2/Z7b3OQ55_t.png",
      },
      {
        name: "Nesco",
        image: "https://thumbs2.imgbox.com/c3/50/KVSXVdwg_t.jpg",
      },
      {
        name: "Polli Biddut",
        image: "https://thumbs2.imgbox.com/ef/81/7mYOt9yh_t.png",
      },
    ],
  },
  {
    id: 2,
    title: "Education",
    image:
      "https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-school-logo-design-template-vector-png-image_6705854.png",
    providers: [
      {
        name: "American University ",
        image: "https://thumbs2.imgbox.com/0f/ab/Qq51aUL8_t.png",
      },
      {
        name: "Cumilla University",
        image: "https://thumbs2.imgbox.com/14/04/OjYpK6ue_t.jpg",
      },
      {
        name: "Dhaka University",
        image: "https://thumbs2.imgbox.com/b6/6e/PbtPDppR_t.png",
      },
      {
        name: "Harvard University",
        image: "https://thumbs2.imgbox.com/a1/31/1OSGCY4w_t.png",
      },
      {
        name: "HSTU",
        image: "https://thumbs2.imgbox.com/af/15/kRd0GBHB_t.png",
      },
      {
        name: "Stanford University",
        image: "https://thumbs2.imgbox.com/d8/57/lI1XCsEi_t.png",
      },
      {
        name: "University of Oxford",
        image: "https://thumbs2.imgbox.com/41/df/E4EDqyg0_t.jpg",
      },
      {
        name: "Titumir College",
        image: "https://thumbs2.imgbox.com/27/19/ksBgYyj3_t.png",
      },
    ],
  },
  {
    id: 3,
    title: "Internet",
    image:
      "https://www.pngimages.in/uploads/png-webp/2023/2023-January/internet_icon_(2).webp",
    providers: [
      {
        name: "Novus ISP",
        image: "https://thumbs2.imgbox.com/27/fa/Inc3Kwec_t.jpg",
      },

      {
        name: "Oncierge ISP",
        image: "https://thumbs2.imgbox.com/05/55/jYKVs9eV_t.png",
      },
      {
        name: "Skyfiber ISP",
        image: "https://thumbs2.imgbox.com/6e/42/P4tztQG0_t.png",
      },
      {
        name: "Earth-LINK",
        image: "https://thumbs2.imgbox.com/77/fa/iPtZmSNg_t.png",
      },
      {
        name: "Amber IT",
        image: "https://thumbs2.imgbox.com/05/55/jYKVs9eV_t.png",
      },
      {
        name: "Dot ISP",
        image: "https://thumbs2.imgbox.com/ee/c2/bzBDb056_t.png",
      },
    ],
  },
  {
    id: 4,
    title: "Gas",
    image:
      "https://e7.pngegg.com/pngimages/298/501/png-clipart-natural-gas-symbol-icon-flames-pic-text-logo-thumbnail.png",
    providers: [
      {
        name: "AMARA OIL & GAS ",
        image: "https://thumbs2.imgbox.com/a7/8b/adSIh8Md_t.png",
      },
      {
        name: "Wigen",
        image: "https://thumbs2.imgbox.com/ed/df/2ZUTBruC_t.png",
      },
      {
        name: "Basundhara",
        image: "https://thumbs2.imgbox.com/43/af/QRYfMipB_t.png",
      },
      {
        name: " Statish Gas",
        image: "https://thumbs2.imgbox.com/43/85/crp18bxj_t.jpg",
      },
      {
        name: "JMI",
        image: "https://thumbs2.imgbox.com/42/1a/We3dM1ty_t.jpg",
      },
      {
        name: "KONI",
        image: "https://thumbs2.imgbox.com/d5/ec/C6tapbTc_t.png",
      },
      {
        name: "LAUFS",
        image: "https://thumbs2.imgbox.com/77/f5/vjNT5KKu_t.jpg",
      },
      {
        name: "OMERA  ",
        image: "https://thumbs2.imgbox.com/9c/93/ZpigE8OF_t.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Water",
    image:
      " https://img2.annthegran.com/printart/xlarge/great_notions/pg67504.webp",
    providers: [
      {
        name: "Clean ",
        image: "https://thumbs2.imgbox.com/5b/a5/G1rdCRjy_t.jpg",
      },
      {
        name: "InLine",
        image: "https://thumbs2.imgbox.com/3c/be/W9PPa8bf_t.jpg",
      },
      {
        name: "Pure Life",
        image: "https://thumbs2.imgbox.com/e3/44/MoUycjAb_t.jpg",
      },
      {
        name: " Water Bring",
        image: "https://thumbs2.imgbox.com/11/e4/D8Om1rXC_t.png",
      },
      {
        name: "Water Line",
        image: "https://thumbs2.imgbox.com/9a/97/C2fkQhJV_t.png",
      },
    ],
  },
  {
    id: 6,
    title: "Insurance",
    image:
      "https://img.freepik.com/premium-vector/umbrella-vector-logo-icon-insurance-property-design_598213-6894.jpg",
    providers: [
      {
        name: "Clean Lifecycle",
        image: "https://thumbs2.imgbox.com/5b/a5/G1rdCRjy_t.jpg",
      },
      {
        name: "InSured",
        image: "https://thumbs2.imgbox.com/10/5e/hxHPPdp0_t.jpg",
      },
      {
        name: "Insure Life",
        image: "https://thumbs2.imgbox.com/82/7c/O10JZJpy_t.jpg",
      },
      {
        name: "Armer Life",
        image: "https://thumbs2.imgbox.com/f4/68/EUAtzNye_t.png",
      },
      {
        name: "National Brokers",
        image: "https://thumbs2.imgbox.com/fd/b2/Lk5nSdLc_t.jpg",
      },
      {
        name: "Feyolink Insurance",
        image: "https://thumbs2.imgbox.com/52/a5/RZEwUQk2_t.jpg",
      },
    ],
  },
  {
    id: 7,
    title: "Telephone",
    image:
      "https://t4.ftcdn.net/jpg/03/58/71/69/360_F_358716966_CCuwLNaZT8jAPbFjlOEjoPxPPepg0S03.jpg",
    providers: [
      {
        name: "Telenor",
        image: "https://thumbs2.imgbox.com/d0/0b/NEaJxAUG_t.png",
      },
      {
        name: "MTN",
        image: "https://thumbs2.imgbox.com/0f/d0/ZWJm2Dfj_t.jpg",
      },
      {
        name: "LG Telecom",
        image: "https://thumbs2.imgbox.com/ff/07/WMDucrvD_t.jpg",
      },
      {
        name: "Telstrach",
        image: "https://thumbs2.imgbox.com/61/2e/RK17DskW_t.jpg",
      },
    ],
  },
  {
    id: 6,
    title: "Restaurant",
    image:
      "https://thumb.ac-illust.com/fe/fe58fc7c88bc3d80431699648c2bac4e_t.jpeg",
    providers: [
      {
        name: "Macdonald ",
        image: "https://thumbs2.imgbox.com/d9/a9/vq9eBH1B_t.png",
      },
      {
        name: "IIR Restaurant",
        image: "https://thumbs2.imgbox.com/8c/7e/UvVWTruG_t.jpg",
      },
      {
        name: "Afresco",
        image: "https://thumbs2.imgbox.com/20/d8/AXx3hKz9_t.png",
      },
      {
        name: "Cuisine",
        image: "https://thumbs2.imgbox.com/d7/67/ypGcIb5O_t.jpg",
      },
    ],
  },
];

const page = () => {
  const [providerData, setProviderData] = useState<BillData>({
    id: 0,
    title: "",
    image: "",
    providers: [],
  });
  // const [serviceTitle, setServiceTitle] = useState({
  //   title: "",
  //   titleId: "",
  // });
  console.log(providerData.providers);
  return (
    <div className="w-full my-4">
      <div className="relative bg-deep-purple-accent-400">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
              The quick, brown fox
              <br className="hidden md:block" />
              jumps over a{" "}
              <span className="relative inline-block px-2">
                <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative text-teal-900">lazy dog</span>
              </span>
            </h2>
            <p className="mb-6 text-base md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo. Sed ut perspiciatis unde omnis.
            </p>          
          
          
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 ">
        {/* // TODO: ADD BILLS DATA HERE */}
        <div className=" col-span-2">
          <div className="grid grid-cols-2  lg:grid-cols-3 mx-0 lg:mx-6 py-3 gap-1 ">
            {billsData.map((item) => {
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setProviderData(item);
                  }}
                  className="cursor-pointer border shadow-md  rounded-md  py-2 px-2 flex flex-col justify-center items-center "
                >
                  <h1 className="text-center text-md font-medium font-serif ">
                    {item.title}
                  </h1>
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded-full"
                    width={500}
                    height={500}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className=" col-span-3">
          <div className="grid grid-cols-2  lg:grid-cols-3 mx-0 lg:mx-6 py-3 gap-2">
            {providerData.providers?.length > 0 ? (
              providerData.providers.map((item, index) => (
                <BillCard key={index} item={item} title={providerData.title} />
              ))
            ) : (
              <h1>Please select a service</h1>
            )}
          </div>
        </div>
        <div className="bg-black col-span-1">
          <Image
            src="https://thumbs2.imgbox.com/a5/e3/H5FuzJoJ_t.jpg"
            alt="offer"
            className="h-full"
            width={500}
            height={500}
          />
        </div>
        <div className="bg-black col-span-1">
          <Image
            src="https://thumbs2.imgbox.com/17/59/aa80StsY_t.jpg"
            alt="offer"
            className=" h-full"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="my-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="md:text-4xl text-3xl font-semibold text-light dark:text-dark">
            Discover Your Capabilities
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 md:text-md">
            Choose from Our Flexible Plans for a Personalized Journey. Embrace a
            Spectrum of Opportunities to Elevate Your Path to Success.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-3 mx-2 lg:mx-6">
          <li className="contents">
            <div className="flex flex-col p-6 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-md dark:border-gray-600 xl:p-8 dark:bg-[#171717] dark:text-white relative">
              {/* ITEM HEADING */}
              <h3 className=" text-2xl font-semibold">Basic Package</h3>
              {/* ITEM DESCRIPTION */}
              <p className="font-light text-sm text-gray-500  dark:text-gray-400 max-w-[90%] my-3">
                Essential web features for small businesses.
              </p>
              {/* ITEM PRICE */}
              <div className="my-3 flex items-center">
                <span className="mr-2 text-3xl font-extrabold text-light dark:text-dark">
                  $99
                </span>
                <span>/month</span>
              </div>
              {/* FEATURE List */}
              <div className="my-3 flex flex-col gap-2 ">
                <p className="flex items-center gap-1">
                  <TiTickOutline />
                  check your bill type
                </p>
                <p className="flex items-center gap-1">
                  <TiTickOutline />
                  Select your provider
                </p>
                <p className="flex items-center gap-1">
                  <TiTickOutline />
                  Check all data
                </p>
              </div>
              {/* BUTTON */}
              <a
                href="#"
                className=" dark:text-white text-light font-semibold rounded-lg  text-center border-2 border-light dark:border-dark mt-auto hover:bg-light dark:hover:bg-dark hover:text-white transition-all duration-500"
              >
                Get started
              </a>
            </div>
          </li>
          <li className="contents">
            <div className="flex flex-col p-6 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-md dark:border-gray-600 xl:p-8 dark:bg-[#171717] dark:text-white relative">
              {/* ITEM HEADING */}
              <h3 className=" text-2xl font-semibold">Premium Package</h3>
              {/* ITEM DESCRIPTION */}
              <p className="font-light text-sm text-gray-500  dark:text-gray-400 max-w-[90%] my-3">
                Essential web features for small businesses.
              </p>
              {/* ITEM PRICE */}
              <div className="my-3 flex items-center">
                <span className="mr-2 text-3xl font-extrabold text-light dark:text-dark">
                  $99
                </span>
                <span>/month</span>
              </div>
              {/* FEATURE List */}
              <div className="my-3 flex flex-col gap-2 ">
                <p className="flex items-center gap-1">
                  <TiTickOutline />
                  check your bill type
                </p>
                <p className="flex items-center gap-1">
                  <TiTickOutline />
                  Select your provider
                </p>
                <p className="flex items-center gap-1">
                  <TiTickOutline />
                  Check all data
                </p>
              </div>
              {/* BUTTON */}
              <a
                href="#"
                className=" dark:text-white text-light font-semibold rounded-lg  text-center border-2 border-light dark:border-dark mt-auto hover:bg-light dark:hover:bg-dark hover:text-white transition-all duration-500"
              >
                Get started
              </a>
            </div>
          </li>
          <li className="contents">
            <div className="flex flex-col p-6 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-md dark:border-gray-600 xl:p-8 dark:bg-[#171717] dark:text-white relative">
              {/* ITEM HEADING */}
              <h3 className=" text-2xl font-semibold">Platinum Package</h3>
              {/* ITEM DESCRIPTION */}
              <p className="font-light text-sm text-gray-500  dark:text-gray-400 max-w-[90%] my-3">
                Essential web features for small businesses.
              </p>
              {/* ITEM PRICE */}
              <div className="my-3 flex items-center">
                <span className="mr-2 text-3xl font-extrabold text-light dark:text-dark">
                  $200
                </span>
                <span>/month</span>
              </div>
              {/* FEATURE List */}
              <div className="my-3 flex flex-col gap-2 ">
                <p className="flex items-center gap-1">
                  <TiTickOutline />
                  check your bill type
                </p>
                <p className="flex items-center gap-1">
                  <TiTickOutline />
                  Select your provider
                </p>
                <p className="flex items-center gap-1">
                  <TiTickOutline />
                  Check all data
                </p>
              </div>
              {/* BUTTON */}
              <a
                href="#"
                className=" dark:text-white text-light font-semibold rounded-lg  text-center border-2 border-light dark:border-dark mt-auto hover:bg-light dark:hover:bg-dark hover:text-white transition-all duration-500"
              >
                Get started
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
