import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "@/components/Header";

const index = () => {
  const [customer, setCustomer] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8005/customers");

        setCustomer(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      {customer ? (
        <div style={{whiteSpace: "pre-wrap"}}>{JSON.stringify(customer, null, 2)}</div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default index;
