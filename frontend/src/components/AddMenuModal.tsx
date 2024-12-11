import { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import AddMenuItems from "./AddMenuItems";
import axios from "../axios/axios"

type props = {
  close: () => void;
};

export type initialMenu = {
    _id?:string,
    name:string,
    description:string
}

const AddMenuModal = ({ close }: props) => {
  const [nextModal, setNextModal] = useState<boolean>(false);
  const [menu, setMenu] = useState<initialMenu>({
    name: "",
    description: "",
  });
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMenu((prev) => ({ ...prev, [name]: value }));
  };
//   const addMenu = async() =>{
//         try {
//             const response = await axios.post(`/menu`,{})
//             console.log(response);
//         } catch (err) {
//             console.log((err as Error).message);
            
//         }
//   }
  return (
    <>  
      {nextModal ? (
        <AddMenuItems close={close} menu={menu} />
      ) : (
        <div className="bg-black fixed inset-0 flex justify-center items-center  h-screen z-10">
          <div className="max-w-[400px] w-full bg-white p-6 rounded-lg relative ">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="  sm:mx-auto sm:w-full sm:max-w-sm">
                <button onClick={close} className="absolute top-4 right-4">
                  <FaRegWindowClose />
                </button>
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                  Add Menu
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        onChange={(e) => handleFormChange(e)}
                        id="name"
                        name="name"
                        type="name"
                        required
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="description"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Description
                      </label>
                    </div>
                    <div className="mt-2">
                      <textarea
                        onChange={(e) => handleFormChange(e)}
                        id="description"
                        name="description"
                        required
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      ></textarea>
                    </div>
                  </div>

                  <div>
                    {menu.name.length && menu.description.length ? (
                      <button
                        onClick={() => {
                          setNextModal((prev) => !prev);
                        }}
                        type="submit"
                        className="flex w-full justify-center items-center gap-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Next
                        <FaGreaterThan />
                      </button>
                    ) : (
                      <button 
                        type="button"
                        disabled
                        className="flex w-full justify-center items-center gap-2 rounded-md bg-indigo-300 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Next
                        <FaGreaterThan />
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddMenuModal;
