import Image from "next/image";
import React, { useState } from "react";
import img from "../../assets/bg1.png";
import { Carousel } from "react-responsive-carousel";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function CardCarousel(workers) {
  // console.log(workers.workers.workers.data);
  const route = useRouter();
  const [loading, setLoading] = useState(false);
  const token = Cookies.get("token");

  const handleClick = (workers_id) => {
    if (token) {
      route.push(`profileDetail/${workers_id}`);
    } else {
      route.push("login");
    }
  };

  // Membagi data kartu menjadi grup yang berisi 3 kartu per grup
  const cardGroups = [];
  for (let i = 0; i < workers?.workers?.workers?.data?.length; i += 3) {
    cardGroups.push(workers?.workers?.workers?.data?.slice(i, i + 3));
  }

  // console.log(cardGroups);

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
            {loading
              ? "loading..."
              : group.map((card, cardIndex) => (
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
                    <div
                      className="flex flex-col justify-center items-center overflow-y-auto h-full"
                      onClick={() => handleClick(card.workers_id)}
                    >
                      <div
                        className="w-[130] h-[130] border-4"
                        style={{
                          borderRadius: "50%",
                          borderColor: "#FBB0175E",
                          width: 120,
                          height: 120,
                        }}
                      >
                        {card.image && (
                          <Image
                            className="card-img-top"
                            src={card.image}
                            alt="Card image cap"
                            width={120}
                            height={120}
                            style={{
                              borderRadius: "50%",
                              width: 120,
                              height: 120,
                            }}
                          />
                        )}
                      </div>
                      <div
                        className="card-body"
                        style={{
                          width: "90%",
                          justifyContent: "center",
                          alignItems: "center",
                          overflowY: "auto",
                        }}
                      >
                        <h5
                          className="card-title"
                          style={{ textAlign: "center" }}
                        >
                          {card.nama}
                        </h5>
                        <p
                          className="card-text"
                          style={{ textAlign: "center" }}
                        >
                          {card.profesi}
                        </p>
                        <p> {card.description}</p>
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
