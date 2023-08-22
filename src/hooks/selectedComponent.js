import { setComponent } from "@/redux/features/componentSlice/componentSlice";

const { useRouter } = require("next/router");
const { useDispatch } = require("react-redux");

const useAddComponent = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleSelectedComponent = (product) => {
    const category = product.category;
    console.log(category);
    dispatch(setComponent({ category, product }));
  };
  return { handleSelectedComponent };
};
export default useAddComponent;
