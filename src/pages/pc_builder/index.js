import MainLayout from "@/components/Layouts/MainLayout";
import {
  faXmark,
  faMicrochip,
  faMemory,
  faDesktop,
  faHardDrive,
  faCarBattery,
  faKeyboard,
  faChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React from "react";

const xmark = <FontAwesomeIcon icon={faXmark} />;
const cpu = <FontAwesomeIcon icon={faMicrochip} />;
const motherboard = <FontAwesomeIcon icon={faChalkboard} />;
const ram = <FontAwesomeIcon icon={faMemory} />;
const monitor = <FontAwesomeIcon icon={faDesktop} />;
const storage = <FontAwesomeIcon icon={faHardDrive} />;
const psu = <FontAwesomeIcon icon={faCarBattery} />;
const others = <FontAwesomeIcon icon={faKeyboard} />;

const componentTypes = [
  {
    name: "cpu",
    componentName: "",
    price: 0,
    category: "CPU",
    img: "",
    icon: cpu,
    Title: "Processor",
    demoText: "Select a processor",
  },
  {
    name: "motherboard",
    img: "",
    icon: motherboard,
    componentName: "",
    category: "Motherboard",
    price: 0,
    Title: "Motherboard",
    demoText: "Select motherboard",
  },

  {
    name: "ram",
    img: "",
    icon: ram,
    Title: "RAM",
    category: "RAM",
    componentName: "",
    price: 0,
    demoText: "Select Ram",
  },
  {
    name: "monitor",
    price: 0,
    category: "Monitor",
    img: "",
    icon: monitor,
    componentName: "",
    Title: "Monitor",
    demoText: "Select Monitor",
  },
  {
    name: "storage",
    img: "",
    icon: storage,
    price: 0,
    category: "Storage Device",
    Title: "Storage Devices",
    componentName: "",
    demoText: "Select Storage",
  },
  {
    name: "psu",
    img: "",
    icon: psu,
    category: "Power Supply Unit",
    componentName: "",
    price: 0,
    Title: "Power Supply Unit",
    demoText: "Select a PSU",
  },
  {
    name: "others",
    img: "",
    icon: others,
    Title: "Others",
    componentName: "",
    category: "Others",
    price: 0,
    demoText: "Select others Components",
  },
];

export default function PcBuilder() {
  const router = useRouter();

  const handleChooseComponent = (category) => {
    router.push({
      pathname: `/category/${category}`,
    });
  };
  return (
    <div className="m-3 border shadow-lg">
      <h3 className="bg-slate-500 text-sm  text-white font-semibold ">
        <span className="ml-2">Core Components</span>
      </h3>
      <section className="grid grid-cols-6 gap-4 my-4 ">
        {componentTypes.map((comp) => (
          <>
            <div key={comp.Title} className="py-2">
              {comp.img === "" ? (
                <section className="ml-4 text-4xl"> {comp.icon}</section>
              ) : (
                <>
                  <img src={comp.img} alt="" className="w-1/3 h-1/3" />
                </>
              )}
            </div>
            <div className="col-start-2 col-span-4 py-2">
              <h2 className="text-sm mb-1 ">{comp.Title}</h2>
              <div className="bg-[#F2F3F4] p-2"></div>
            </div>
            <div className="py-2">
              <button
                onClick={() => handleChooseComponent(comp.name)}
                className="hover:bg-blue-700 hover:text-white border border-blue-700 text-blue-700 text-sm font-medium px-3 py-1 rounded "
              >
                Choose
              </button>
            </div>
          </>
        ))}
      </section>
    </div>
  );
}
PcBuilder.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
