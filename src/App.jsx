import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import AOS from 'aos'; 
import 'aos/dist/aos.css'; // Import AOS CSS
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  const [currentDiv, setCurrentDiv] = useState(0);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);

  const handleClick = () => {
    setCurrentDiv(currentDiv + 1);
  }

  return (
    <>
    <div >
    {currentDiv === 0 && (
      <div onClick={handleClick} className=' vh-100 d-flex flex-column p-0 justify-content-center align-items-center '>
        <div className='col-12  d-flex flex-column justify-content-center align-items-center p-0' >
          <p className='text-center ' style={{fontSize: '100px'}} data-aos="fade-in">Hey</p>
          <p className='text-center' data-aos-delay="100" data-aos="fade-up"> Happy National Crush Day! <i className='bi-heart-fill text-danger'></i></p>
        </div>
      </div>
    )}


    {currentDiv === 1 && (
      <div onClick={handleClick} className=' vh-100 d-flex flex-column p-0 justify-content-center align-items-center '>
        <div className='col-10  d-flex flex-column justify-content-center align-items-center p-0' >
          <p className='m-0 '   data-aos-delay="100" data-aos="fade-left">You've been on my mind a lot lately, </p>
        </div>
      </div>
    )}

    {currentDiv === 2 && (
          <div onClick={handleClick} className=' vh-100 d-flex flex-column p-0 justify-content-center align-items-center '>
            <div className='col-10  d-flex flex-column justify-content-center align-items-center p-0' >
            <p className='m-0 '>You've been on my mind a lot lately,</p>
              <i className='m-0 text-center' data-aos-delay="100" data-aos="fade-left"> I thought National Crush Day would be the perfect occasion to finally confess.
</i>
            </div>
          </div>
    )}

{currentDiv === 3 && (
          <div onClick={handleClick} className=' vh-100 d-flex flex-column p-0 justify-content-center align-items-center '>
            <div className='col-10  d-flex flex-column justify-content-center align-items-center p-0' >
              <p className='mb-2' data-aos="fade-up"> :-) <i className=''></i> </p>
              <img data-aos-delay="500" data-aos="fade-in" style={{width: '300px'}} src="https://i.pinimg.com/564x/f6/ee/45/f6ee45ed2e9923836186ffece75ea059.jpg" alt="" />
            </div>
          </div>
    )}


    {currentDiv === 4 && (
          <div onClick={handleClick} className=' vh-100 d-flex flex-column p-0 justify-content-center align-items-center '>
            <div className='col-10  d-flex flex-column justify-content-center align-items-center p-0' >
              <p className='' data-aos="fade-in"> Uhm... </p>
            </div>
            
            <div className='col-10  d-flex gap-2 justify-content-center align-items-center p-0' >
              <p className='border p-2 rounded m-0' data-aos="zoom-in"> I've heard that sharing a cup of coffee can be a wonderful way to get to know someone better. <i className=''></i> </p>
              <button className='btn btn-primary' data-aos="zoom-in" data-aos-delay="500">Send </button>
            </div>

          </div>
    )}
{currentDiv === 5 && (
          <div onClick={handleClick} className=' vh-100 d-flex flex-column p-0 justify-content-center align-items-center '>
            <div className='col-10  d-flex flex-column justify-content-center align-items-center p-0' >
              <p className='text-center ' data-aos="zoom-in"> So, I was wondering if you'd like to grab a coffee together sometime.<i className='bi-smile'></i> </p>
            </div>
          </div>
    )}

{currentDiv === 6 && (
          <div  className=' vh-100 d-flex flex-column p-0 justify-content-center align-items-center '>
            <div className='col-12  d-flex flex-column justify-content-center align-items-center p-0' >
              <img className='rounded-2' style={{width: '300px'}} src="https://i.pinimg.com/736x/9d/c0/f0/9dc0f03f8c6223828d3f7e898d2ddd14.jpg" alt="" />
            <div className='d-flex gap-2 mt-3 mb-3'>
              <button className='btn btn-primary ' onClick={handleClick} >Yes</button>
              <button className='btn btn-success' onClick={handleClick} >Yes</button>
            </div>

            <img data-aos-delay="1000" data-aos="fade-in" className='rounded-2' style={{width: '300px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDUHh80Xfyjpftoj27riiA5j4pEqXhWdTi6g&usqp=CAU" alt="" />

            </div>
          </div>
    )}

{currentDiv === 7 && (
          <div  className=' vh-100 d-flex flex-column p-0 justify-content-center align-items-center '>
            <div className='col-10  d-flex flex-column justify-content-center align-items-center p-0' >
            <p className='mb-2 bi-heart-fill text-danger' data-aos="fade-in"> </p>

              <img className='rounded' style={{width: '300px'}} data-aos="fade-in" src="https://media.licdn.com/dms/image/D5622AQGK_nYy-gArwA/feedshare-shrink_2048_1536/0/1692056963291?e=2147483647&v=beta&t=b0gmDrn_jkCR8t8RnxEWUAqSJW-NVeBNp9I7TlJfPis" alt="" />
            </div>
          </div>
    )}










</div>

    </>
  )
}

export default App
