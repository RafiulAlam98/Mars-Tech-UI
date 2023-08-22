import { setComponent } from "@/redux/features/componentSlice/componentSlice";
import { toast } from "react-hot-toast";

const { useRouter } = require("next/router");
const { useDispatch } = require("react-redux");

const useAddComponent = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSelectedComponent = (product) => {
    const category = product.category;

    const savedItem = localStorage.getItem("components");
    const savedData = savedItem ? JSON.parse(savedItem) : {};
    savedData[category] = savedData[category] || [];
    savedData[category].push(product);
    localStorage.setItem("components", JSON.stringify(savedData));

    dispatch(setComponent({ category, product }));
    router.push({
      pathname: "/pc_builder",
    });
    toast("Component Added Successfully");
  };
  return { handleSelectedComponent };
};
export default useAddComponent;
