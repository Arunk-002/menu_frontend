import { createContext, ReactNode, useState } from "react";
import { initialMenu } from "./AddMenuModal"; // Define this type as necessary
import { menuItems } from "./ButtonBanner"; // Ensure `menuItems` is a proper TypeScript type

// Define the type for the context value
type Item = {
  description: string;
  menuItems: menuItems[]; // Array of menuItems
};

// type GlobalContextType = {
//   items: Item; // A single `Item` object with description and items array
//   setItems: React.Dispatch<React.SetStateAction<Item>>; // Setter for the state
//   menus: initialMenu[]; // Menu array state
//   setMenus: React.Dispatch<React.SetStateAction<initialMenu[]>>; // Setter for menu state
// };
type GlobalContextType = {
  items: Item; // The structure for your `items`
  setItems: React.Dispatch<React.SetStateAction<Item>>; // Setter for items
  menus: initialMenu[]; // Add `menus` if you're storing menus in context
  setMenus: React.Dispatch<React.SetStateAction<initialMenu[]>>; // Setter for menus
};


// Create the context with a default value
export const GlobalContext = createContext<GlobalContextType | null>(null);

// Define the props for the provider
interface GlobalStateProviderProps {
  children: ReactNode; // Allows any valid React children
}

const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
  const [items, setItems] = useState<Item>({
    description: "", // Initial empty description
    menuItems: [], // Initial empty array for menuItems
  });

  const [menus, setMenus] = useState<initialMenu[]>([
    {
      _id:'',
      name: "",
      description: "",
    },
  ]);

  return (
    <GlobalContext.Provider value={{ items, setItems, menus, setMenus }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStateProvider;
