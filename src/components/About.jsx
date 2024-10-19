import React from "react";

const About = () => {
  return (
    <div className="about bg-dark text-white" style={{ minHeight: "100vh", paddingTop: "100px" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Tentang Kami</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p className="lead text-center">
              Selamat datang di situs resep makanan kami! Kami adalah platform yang didedikasikan untuk berbagi resep lezat dari seluruh dunia.
            </p>
            <p className="text-center">
              Misi kami adalah menginspirasi orang untuk memasak di rumah dan menjelajahi berbagai masakan dari berbagai budaya. Kami percaya bahwa makanan memiliki kekuatan untuk menyatukan orang dan menciptakan kenangan indah.
            </p>
            <p className="text-center">
              Tim kami terdiri dari pecinta makanan yang bersemangat dan koki amatir yang selalu mencari resep baru dan menarik untuk dibagikan kepada komunitas kami.
            </p>
            <p className="text-center">
              Terima kasih telah mengunjungi situs kami. Kami harap Anda menemukan inspirasi dan kegembiraan dalam memasak!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
