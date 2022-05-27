import "./App.css";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Sneakers from "./Components/products/productPages/Sneakers";
import Soccer from "./Components/products/productPages/Soccer";
import Homepage from './Components/products/productPages/Homepage';
import Clothing from './Components/products/productPages/Clothing'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [productData] = useState([
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
      itemcolor: " #cfbfb0",
      catagory: "clothing",
    },

    {
      id: 7,
      title: "Dunk Low GS 'Aura Clear'",
      price: "200",
      SizinginNumbers: false,
      color: "#97becc",
      img: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/070/577/894/original/912721_00.png.png?action=crop&width=950",
      size: null,
      itemcolor: " #cfbfb0",
      catagory: "sneakers",
    },

    {
      id: 8,
      title: "Dunk Low PS 'Wolf Grey'",
      price: "200",
      SizinginNumbers: false,
      color: "#a9aaae",
      img: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/068/603/784/original/DH9756_001.png.png?action=crop&width=1600",
      size: null,
      itemcolor: "#a9aaae",
      catagory: "sneakers",
    },

    {
      id: 9,
      title: "Rick and Morty x RS-X",
      price: "200",
      SizinginNumbers: false,
      color: "#d1e873",
      img: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/072/464/605/original/386781_01.png.png?action=crop&width=950",
      size: null,
      itemcolor: "#a9aaae",
      catagory: "sneakers",
    },

    {
      id: 10,
      title: "Air Jordan 5 Retro 'Green Bean' 2022",
      price: "200",
      SizinginNumbers: false,
      color: "#d1e873",
      img: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/072/311/764/original/DQ3736_003.png.png?action=crop&width=950",
      size: null,
      itemcolor: "#a9aaae",
      catagory: "sneakers",
    },
    {
      id: 11,
      title: "Travis Scott x Air Max 1 TD 'Baroque Brown'",
      price: "200",
      SizinginNumbers: false,
      color: "#a68044",
      img: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/062/734/044/original/DN4170_200.png.png?action=crop&width=1600",
      size: null,
      itemcolor: "#a9aaae",
      catagory: "sneakers",
    },
    {
      id: 12,
      title: "Air Force 1 Low 'Puerto Rican'",
      price: "200",
      SizinginNumbers: false,
      color: "#8abfc8",
      img: "https://image.goat.com/transform/v1/attachments/product_template_pictures/images/072/661/693/original/DQ9200_100.png.png?action=crop&width=950",
      size: null,
      itemcolor: "#a9aaae",
      catagory: "sneakers",
    },
  ]);

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route exact path="/Soccer" element={<Soccer productData={productData}/>}/>
     <Route exact path="/Sneakers" element={<Sneakers productData={productData}/>}/>
     <Route exact path="/" element={<Homepage productData={productData}/>}/>
     <Route exact path="/Clothing" element={<Clothing productData={productData}/>}/>
    </Routes>
  </BrowserRouter>
     
    </>
  );
}

export default App;
