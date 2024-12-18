import { useContext, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { initialMenu } from "../components/AddMenuModal";
import axios from "../axios/axios";
import { GlobalContext } from "./GlobalStateProvider";
import { menuItems } from "./ButtonBanner";
import { FiCheck } from "react-icons/fi";
import menuBanner from '../assets/menuBanner.png'
type props = {
  menu: initialMenu,
  close:()=>void
};

const AddMenuItems = ({ menu,close }: props) => {
  const context = useContext(GlobalContext);
  const [selecteditems, setSelecteditems] = useState<menuItems[]>([]);
  const [items, setItem] = useState({
    name: "",
    price: "",
    description: "",
  });
  if (!context) return;
  const { setMenus } = context;
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async () => {

    const data = {
      selecteditems,
      menu,
    };

    try {
      const response: any = await axios.post("/menu", { data });
      console.log(response);
      if (response) {
        setMenus((prev:initialMenu[]) => [...prev, response.data.menu]);
        close()
      }

    } catch (error) {
        close()
      console.log(error);
    }
  };
  return (
    <div className="bg-white opacity-100 fixed inset-0 flex justify-center items-center  h-screen z-10">
        <div className="max-w-[400px] w-full p-6  rounded-lg relative " style={{ backgroundImage: `url(${menuBanner})`}}>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="  sm:mx-auto sm:w-full sm:max-w-sm">
            <button onClick={close} className="absolute top-4 right-4 text-white">
              <IoMdClose />
            </button>
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-100">
              Add Menu Items
            </h2>
          </div>
            <div className="flex gap-2 flex-wrap mt-4">
                {
                    selecteditems.map((elem)=>{
                        return (
                            <h3 className=" flex justify-center items-center gap-1 bg-gray-300 text-black px-4 py-2 w-fit rounded-lg ">{elem.name}<FiCheck/></h3>
                        )
                    })
                }
            </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm/6 font-medium text-gray-100"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    value={items.name}
                    required
                    onChange={(e) => handleFormChange(e)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="description"
                    className="block text-sm/6 font-medium text-gray-100"
                  >
                    Description
                  </label>
                </div>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    value={items.description}
                    onChange={(e) => handleFormChange(e)}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  ></textarea>
                </div>
              </div>
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm/6 font-medium text-gray-100"
                >
                  Price
                </label>
                <div className="mt-2">
                  <input
                    id="price"
                    name="price"
                    type="Number"
                    value={items.price}
                    required
                    onChange={(e) => handleFormChange(e)}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="flex  gap-2">
                <button
                 onClick={() => {
                    
                    setSelecteditems((prev) => {
                      const updatedItems = [...prev, { ...items }];
                      console.log("Updated selected items:", updatedItems);
                      return updatedItems;
                    });
                    setItem({
                      name: "",
                      description: "",
                      price: "",
                    });
                  }}
                  
                  
                  type="button"
                  className="flex w-full justify-center items-center gap-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Select
                </button>

                <button
                  onClick={handleSubmit}
                  type="button"
                  className="flex w-full justify-center items-center gap-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Save
                  {/* <FaGreaterThan /> */}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMenuItems;
