import React from "react";

const Information = () => {
  const informcard = [
    {
      title: "Nature of Business",
      description: "Exporter and Wholesale Trader",
      img: require("../../../assets/coin.gif"),
    },
    {
      title: "Total Number of Employees",
      description: "Upto 10 People",
      img: require("../../../assets/users.gif"),
    },
    {
      title: "Year of Establishment",
      description: "2017",
      img: require("../../../assets/build.gif"),
    },
    {
      title: "Legal Status of Firm",
      description: "Individual - Proprietor",
      img: require("../../../assets/weight.gif"),
    },
    {
      title: "Annual Turnover",
      description: "Rs. 50 Lakh - 1 Crore",
      img: require("../../../assets/stock.gif"),
    },
    {
      title: "Import Export Code (IEC)",
      description: "ASLPC*****",
      img: require("../../../assets/web.gif"),
    },
    {
      title: "GST Number",
      description: "27ASLPC8597P1ZO",
      img: require("../../../assets/file.gif"),
    },
  ];

  return (
    <div className="bg-fa ptpx60 pbpx60 sm-ptpx30 sm-pbpx30" id="features">
      <div className="container mx-auto">
        <h4 className="textforth font-600 text-center mtpx1 mbpx1 fsize35 sm-fsize18">
          Features of Kepal Enterprises
        </h4>
        <div className="flex sm-block flex-wrap justify-center gap-12 mtpx36 sm-mtpx25">
          {informcard.map((e) => (
            <div className="flex w-30 sm-w-full items-center gap-4 mbpx40">
              <div className="">
                <img src={e.img} alt="info" className="info-img " />
              </div>
              <div>
                <h6 className="fsize17 textdark font-600 mtpx1 mbpx1 mlpx10">
                  {e.title}
                </h6>
                <p className="fsize15 textforth mlpx10">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Information;
