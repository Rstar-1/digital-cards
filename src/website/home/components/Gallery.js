import React from "react";

const Gallery = () => {
  const gallery = [
    {
      id: 1,
      img: "https://5.imimg.com/data5/SELLER/Default/2023/10/353687298/YA/CM/OP/34882840/printer-toner-250x250.jpg",
      name: "Toner Powder",
    },
    {
      id: 2,
      img: "https://5.imimg.com/data5/SELLER/Default/2023/4/300382771/RW/LK/HE/183802580/xerox-c7020-toner-cartridges-set-250x250.jpeg",
    },
    {
      id: 3,
      img: "https://3.imimg.com/data3/LP/EN/GLADMIN-80171/copier-spare-parts-250x250.jpg",
    },
    {
      id: 4,
      img: "https://3.imimg.com/data3/BD/PQ/GLADMIN-34658/opc-drum-250x250.jpg",
    },
    {
      id: 5,
      img: "https://4.imimg.com/data4/CB/KB/GLADMIN-184991/canon-toner-cartridges-250x250.jpg",
    },
    {
      id: 6,
      img: "https://4.imimg.com/data4/JO/GJ/GLADMIN-184949/hp-toner-cartridges-250x250.jpg",
    },
  ];
  return (
    <div className="bgwhite ptpx40 pbpx40 sm-ptpx20 sm-pbpx20" id="gallery">
      <div className="flex justify-center">
        <h4 className="textprimary font-600 mtpx1 mbpx1 fsize35 sm-fsize23">
          GALLERY
        </h4>
      </div>
      <div className="container mx-auto">
        <div className="grid-cols-3 sm-grid-cols-1 mtpx18 w-full gap-12">
          {gallery.map((e) => (
            <div className="bg-ec rounded-10 p10">
              <img
                src={e.img}
                alt="website"
                className="flex gallery-img object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
