import Banner from '../assets/banner.png'


const Home = () => {

  return (
      <div   style={{ backgroundImage: `url(${Banner})` }}  className={`bg-cover bg-center`}>    
          <div className='container max-w-[1200px] min-h-10 mx-auto text-white flex justify-between items-baseline pb-2 px-2'>
              <div className='py-24 w-fit max-w-2xl text-center mx-auto px-4'>
                  <h1 className='text-[76px] font-bold '>MENU</h1>
                  <p className='text-[18px] font-kelly text-neutral-400 ' >Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>
              </div>
           </div>
      </div>
  )
}

export default Home
