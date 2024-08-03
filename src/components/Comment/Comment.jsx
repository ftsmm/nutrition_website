import React from "react";
import CommentCard from "./CommnetCard";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Comment() {
  const services = [
    {
      title: "Eray Kılıç",
      description: "Diyetisyen Hanım işinde oldukça profesyonel",
      image:
        "https://images.pexels.com/photos/2128819/pexels-photo-2128819.jpeg?auto=compress&cs=tinysrgb&w=600",
      degree: "harika",
    },
    {
      title: "Mehmet Ateş",
      description:
        "Çok kısa zamanda inanılmaz değişim gösterdim. Tek kelimeyle mükemmel bir insan",
      image:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
      degree: "mükemmel",
    },
    {
      title: "Ayşe Yeşil",
      description: "Hoşgörülü, disiplinli, işinde profesyonel",
      image:
        "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=600",
      degree: "çok iyi",
    },
  ];

  return (
    <section id="comment">
      <h1 style={{ textAlign: "center" }}>Yorumlar</h1>
      <div style={{ width: "28rem", margin: "auto" }}>
        <Slide>
          {services.map((service, index) => (
            <div className="each-slide-effect" key={index}>
              <CommentCard
                title={service.title}
                description={service.description}
                image={service.image}
                degree={service.degree}
              />
            </div>
          ))}
        </Slide>
      </div>
    </section>
  );
}
