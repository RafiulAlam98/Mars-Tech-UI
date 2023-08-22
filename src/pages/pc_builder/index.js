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
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const refresh = <FontAwesomeIcon icon={faArrowsRotate} />;
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
    category: "CPU / Processor",
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
    category: "motherboard",
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
    category: "MONITOR",
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
    category: "storage",
    Title: "Storage Devices",
    componentName: "",
    demoText: "Select Storage",
  },
  {
    name: "psu",
    img: "",
    icon: psu,
    category: "PSU",
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
    category: "others",
    price: 0,
    demoText: "Select others Components",
  },
];

export default function PcBuilder() {
  const router = useRouter();
  const { components, totalPrice } = useSelector((state) => state.pcComponents);

  const completeBuild = () => {
    return componentTypes.every(
      (component) =>
        component.componentName === "" &&
        component.price === 0 &&
        component.img === ""
    );
  };

  if (components) {
    components.map((component) => {
      const { name, price, img } = component.product;
      console.log(component.category);
      const { category } = component;
      const selectedComponent = componentTypes.find(
        (component) => component.category === category
      );
      console.log(selectedComponent);

      selectedComponent.componentName = name;
      selectedComponent.price = price;
      selectedComponent.img = img;
    });
  }

  const handleChooseComponent = (category) => {
    router.push({
      pathname: `/category/${category}`,
    });
  };
  const handleRemove = (product) => {
    console.log(product);
  };
  const handleBuild = () => {
    toast("complete build successfully");
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
                  <img src={comp.img} alt="" className="w-2/3 h-2/3 mx-auto" />
                </>
              )}
            </div>
            <div className="col-start-2 col-span-4 py-2">
              <h2 className="text-sm mb-1 ">{comp.Title}</h2>
              <div className="bg-[#F2F3F4] p-2 ">
                <h3 className="text-lime-600  font-semibold">
                  {comp.componentName}
                </h3>
                <h4 className="text-orange-600 font-semibold text-sm">
                  {comp.price > 0 ? `Price: ${comp.price}` : ""}
                </h4>
              </div>
            </div>
            <div className="py-2">
              {comp.price === 0 ? (
                <button
                  onClick={() => handleChooseComponent(comp.name)}
                  className="hover:bg-blue-700 hover:text-white border border-blue-700 text-blue-700 text-sm font-medium px-3 py-1 rounded "
                >
                  Choose
                </button>
              ) : (
                <div className=" text-center border-l-2 border-slate-400">
                  <button
                    onClick={() => handleRemove(comp.category)}
                    className="text-red-500 text-lg"
                  >
                    {xmark}
                  </button>
                  <butoon
                    onClick={() => handleChooseComponent(comp.name)}
                    className="text-red-500 text-lg block"
                  >
                    {refresh}
                  </butoon>
                </div>
              )}
            </div>
          </>
        ))}
      </section>
      <div className="text-center ">
        <button
          disabled={completeBuild()}
          onClick={handleBuild}
          className="text-sm  font-semibold text-white bg-blue-600  rounded lg:w-1/2 md:w-full sm:w-full  mt-3 py-1"
        >
          Complete Build
        </button>
      </div>
    </div>
  );
}
PcBuilder.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
