import Image from "next/image";
import React from "react";
import img from "../../assets/bg1.png";
import { Carousel } from "react-responsive-carousel";

export default function CardCarousel() {
  // Data untuk kartu-kartu Anda
  const cardsData = [
    {
      title: "Card 1",
      text: "Some quick example text for Card 1.",
    },
    {
      title: "Card 2",
      text: "Some quick example text for Card 2.",
    },
    {
      title: "Card 3",
      text: "Some quick example text for Card 3.",
    },
    {
      title: "Card 4",
      text: "Some quick example text for Card 4.",
    },
    {
      title: "Card 5",
      text: "Some quick example text for Card 5.",
    },
  ];

  // Membagi data kartu menjadi grup yang berisi 3 kartu per grup
  const cardGroups = [];
  for (let i = 0; i < cardsData.length; i += 3) {
    cardGroups.push(cardsData.slice(i, i + 3));
  }

  return (
    <div
      className="flex flex-column justify-center items-center px-[50%]"
      style={{
        width: "100vw",
      }}
    >
      <Carousel
        showThumbs={false}
        showStatus={true}
        showArrows={true}
        className="w-screen"
      >
        {cardGroups.map((group, groupIndex) => (
          <div className="flex flex-row justify-center" key={groupIndex}>
            {group.map((card, cardIndex) => (
              <div
                className="card justify-center items-center mx-3"
                style={{
                  width: "339px",
                  height: "437px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={cardIndex}
              >
                <div className="flex flex-col justify-center items-center">
                  <div
                    className="w-[130] h-[130] border-4"
                    style={{ borderRadius: "50%", borderColor: "#FBB0175E" }}
                  >
                    <Image
                      className="card-img-top"
                      src={img}
                      alt="Card image cap"
                      style={{ borderRadius: "50%", width: 120, height: 120 }}
                    />
                  </div>
                  <div
                    className="card-body"
                    style={{
                      width: "75%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h5 className="card-title" style={{ textAlign: "center" }}>
                      {card.title}
                    </h5>
                    <p className="card-text" style={{ textAlign: "center" }}>
                      {card.text}
                    </p>
                    <p> Desc</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
      <style jsx>{`
        @media (max-width: 576px) {
          .react-responsive-carousel .carousel .slide {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .react-responsive-carousel .carousel .control-dots {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
