import './App.css';
import Navbar from './Components/Navbar';
import Soccer from './Components/products/productPages/Soccer';
import { useState } from 'react';
function App() {
  const [productData, setproductData] = useState([
    {
      id: 1,
      title: "Hypervenom Phinish 'Volt'",
      price: "200",
      SizinginNumbers: true,
      img: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/013/255/557/original/749901_703.png.png?action=crop&width=950",
      color: "#cfeb30",
      size: null,
      itemcolor: null,
      catagory: "soccer",
    },

    {
      id: 2,
      title: "Mercurial Superfly 7 Crimson White",
      price: "200",
      SizinginNumbers: true,
      color: "#d05b5b",
      img: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/047/239/672/original/AT5382_163.png.png?action=crop&width=750",
      size: null,
      itemcolor: null,
      catagory: "soccer",
    },
    {
      id: 3,
      title: "Tiempo Legend 8 Ocean Blue White",
      price: "200",
      SizinginNumbers: true,
      color: "#31507f",
      img: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/014/643/392/original/AH7241_107.png.png?action=crop&width=950",
      size: null,
      itemcolor: null,
      catagory: "soccer",
    },
    {
      id: 4,
      title: "Wmns Hypervenom Phantom 3 DF FG",
      price: "200",
      SizinginNumbers: true,
      color: "#53b1a8",
      img: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/014/349/887/original/881545_400.png.png?action=crop&width=950",
      size: null,
      itemcolor: null,
      catagory: "soccer",
    },
    {
      id: 5,
      title: "Air Jordan x Hypervenom",
      price: "200",
      SizinginNumbers: true,
      color: "#a3a0a6",
      img: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/007/000/511/original/820122_006.png.png?action=crop&width=950",
      size: null,
      itemcolor: null,
      catagory: "soccer",
    },
    
    {
      id: 6,
      title: "Fear of God Essentials Pullover Hoodie 'String'",
      price: "200",
      SizinginNumbers: false,
      color: "#cfbfb0",
      img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/066/246/952/original/884314_01.jpg.jpeg?action=crop&width=950",
      size: null,
      itemcolor:" #cfbfb0",
      catagory: "clothing",
    },
  ]);


  return (
  <>
  <Navbar/>
<Soccer productData={productData} setproductData={setproductData}/>
  </>
)}

export default App;
