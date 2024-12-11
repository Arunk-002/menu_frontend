import MenuBtn from './MenuBtn';
import Banner2 from '../assets/banner2.png';
import { useCallback, useContext, useEffect, useState } from 'react';
import axios from '../axios/axios';
import { GlobalContext } from './GlobalStateProvider';

export type menu = {
    _id: string;
    name: string;
    description: string;
    items: menuItems[];
};

export type menuItems = {
    name: string;
    price: number | string;
    description: string;
};

const ButtonBanner = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("ButtonBanner must be used within a GlobalStateProvider");
    }

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const { setItems,setMenus,menus } = context;
    let menuId;
    const menuItemsFetch = useCallback(async(id:string)=>{
        console.log(id, "id received");
        menuId = id
        try {
            const { data } = await axios.get(`/menu/${id}`);
            setItems(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    },[menuId]) 

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                const { data } = await axios.get('/menu');
                console.log(data);
                setMenus(data);
                menuItemsFetch(data[0]._id)
            } catch (error) {
                console.log(error);
            }
        };

        fetchMenu();
    }, []);

    return (
        <div
            style={{ backgroundImage: `url(${Banner2})` }}
            className="bg-cover bg-center"
        >
            <div className="container max-w-[1200px] min-h-10 mx-auto text-white flex justify-between items-baseline p-6 px-2">
                <div className="flex justify-center gap-4 w-full">
                    {menus.length > 0 ? (
                        menus.map((menu,index) => (
                            <MenuBtn
                                id={menu._id ? menu._id : ""}
                                menuItemsFetch={menuItemsFetch}
                                key={menu._id}
                                currentIndex={currentIndex}
                                setCurrentIndex={setCurrentIndex}
                                content={menu.name}
                                index={index}
                            />
                        ))
                    ) : (
                        <p>Loading menus...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ButtonBanner;
