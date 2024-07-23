import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to Urban Cart!
At Urban Cart, 
  we believe that fashion is more than just clothing; 
it’s a statement, a lifestyle, and a form of self-expression Found by Dhanush, our e-commerce platform is dedicated to bringing you the latest trends 
  on clothing, accessories, and watches, 
  all on one convenient place.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
