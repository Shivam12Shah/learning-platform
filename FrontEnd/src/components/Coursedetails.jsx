import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/Axios";
import Razorpay from "razorpay"


const Coursedetails = () => {
  const { id } = useParams();
  // console.log(id);
  const [coursedets, setCoursedets] = useState({});
  const [newurl, seturl] = useState('')
  const [newprice, setnewprice] = useState(coursedets.price)
  const [orderId, setOrderId] = useState(null);
 console.log(newprice);

  const coursedetails = async () => {
    try {
      const { data } = await axios.get(`/course/details/${id}`);
      console.log(data);
      setCoursedets(data);
      seturl(data.courseimage.url)
      // setnewprice(data.price)
      
    } catch (error) {
      console.log(error);
      seturl('')
    }
  };

  useEffect(() => {
    const createOrderId = async () => {
      try {
        const response = await axios.post(`/create/orderId`,{
          amount:newprice
        }, {
          headers: {
            "Content-Type": "application/json",
          }
        });
        console.log(response);
        setOrderId(response.data.id);
      } catch (error) {
        console.error('Error creating order ID:', error);
      }
    };
    createOrderId();
  }, []);

  const handlePayment = () => {
    const options = {
      key: "rzp_test_gCbXuQ9aLwZbca", // Enter the Key ID generated from the Dashboard
      amount: `${coursedets.price * 100}`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: `${coursedets.coursename}`,
      description: `${coursedets.description}`,
      image: `${newurl}`,
      order_id: orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async (response) => {
        try {
          const verificationResponse = await axios.post('/api/payment/verify', { response });
          // console.log(verificationResponse);
          if (verificationResponse.data === true) {
            alert("Payment successful");

          } else {
            alert("Payment failed");
          }
        } catch (error) {
          console.error('Error verifying payment:', error);
        }
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9000090000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
  };
  useEffect(() => {
    coursedetails();
    
  }, []);
  useEffect(()=>{
    setnewprice(coursedets.price)
  })
  return (
    <div className="coursedets w-full flex p-20 gap-10">
      <div className="coursemaindeetials w-[60%]">
        <h1 className="text-2xl font-semibold my-4">Course Details</h1>
        <p
          className="text-sm bg-[#CDC2FF] mt-2 w-max px-2  py-1 rounded-md
        "
        >
          Course Name
        </p>
        <h1 className="text-xl capitalize mt-2  font-semibold text-[#8B77E8]">
          {coursedets.coursename}
        </h1>
        <p
          className="text-sm bg-[#CDC2FF] mt-2 w-max px-2 py-1 rounded-md
        "
        >
          Course Descripption
        </p>
        <p className="text-sm mt-2">Front End Development includes creating a user interface website or application. It involves designing and implementing the visual elements, layout and features that users see and interact with. Front-end developers primarily use HTML, CSS, and JavaScript to structure the content</p>
        <p
          className="text-sm bg-[#CDC2FF] mt-2 w-max px-2 py-1 rounded-md
        "
        >
          Course Category
        </p>
        <p className="text-sm mt-2">{coursedets.category}</p>

        <p
          className="text-sm bg-[#CDC2FF] mt-2 w-max px-2 py-1 rounded-md
        "
        >
          Course Instructor
        </p>
        <p className="text-sm mt-2">{coursedets.author}</p>
      </div>
      <div className="imagediv-and-buy-option w-[40%]">
        <div className="imagediv w-full h-[300px] rounded-md overflow-hidden">
          <img className="w-full h-full object-cover" src={newurl} alt="" />
        </div>
        <button onClick={handlePayment} className="bg-[#8B77E8]  text-white px-2 py-1 mt-2 w-full capitalize rounded-md">buy Now</button>
        <button className="bg-[#8B77E8]  text-white px-2 py-1 mt-2 w-full capitalize rounded-md">${newprice}</button>
      </div>
    </div>
  );
};

export default Coursedetails;
