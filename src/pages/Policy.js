import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>We collect personal information like name, email, shipping address, and payment details during the purchase process.</p>
          <p>Your information is used to process orders, improve our services, and send promotional offers.</p>
          <p>We implement strict security measures to protect your data from unauthorized access and breaches</p>
          <p> We dont sell or share your personal information to third parties, except to essential service providers</p>
          <p>We use cookies to enhance your browsing experience and analyze website traffic.</p>
          <p>You have the right to access, update your personal information at any time.</p>
          <p>For any privacy-related inquiries, please contact our support team.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
