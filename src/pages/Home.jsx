import React, { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PetCard from "../components/PetCard";

const Home = () => {
  const [services, setServices] = useState([]);
  // Data for Swipper
  const slides = [
    {
      id: 1,
      title: "Keep Your Pet Warm & Happy ❄️",
      subtitle:
        "Discover cozy coats and winter grooming services for your furry friend.",
      img: "https://dog-dayz.com/wp-content/uploads/2025/02/bigstock-152575349.jpg",
    },
    {
      id: 2,
      title: "Warm Hearts, Warm Paws ❤️",
      subtitle: "Expert winter care to make every pet feel loved and safe.",
      img: "https://images.news18.com/ibnlive/uploads/2022/11/shutterstock_1043814685.jpg",
    },
    {
      id: 3,
      title: "Style Meets Comfort 🧣",
      subtitle: "Shop stylish winter wear and stay frost-free in fashion!",
      img: "https://corcoranpetcarecenter.com/uploads/SiteAssets/0/images/news-global/winter-weather-tips-for-pet-owners.jpg",
    },
  ];
  // Fetch services.json from public folder
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);
  return (
    <div className="w-11/12 mx-auto space-y-12">
      {/* Hero Slider */}
      <section className=" ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="rounded-2xl shadow-lg"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative h-[70vh] flex flex-col justify-center items-center text-center text-white"
                style={{
                  backgroundImage: `url(${slide.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>

                <div className="relative z-10 px-6">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 drop-shadow">
                    {slide.subtitle}
                  </p>
                  <button className="bg-[#FF7B54] hover:bg-[#FF9B73] text-white px-6 py-3 rounded-xl text-lg font-medium transition-colors">
                    Explore Services
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Popular Winter Care Services */}
      <section>
        <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          🐕‍🦺 Popular Winter Care Services
        </h3>
        {/* Services Grid */}
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <PetCard key={service.serviceId} service={service}></PetCard>
          ))}
        </div>
      </section>
      {/* Winter Care Tips for Pets */}
      <section className="bg-white py-12 rounded-3xl shadow-md max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8"
          data-aos="fade-up"
        >
          ❄️ Winter Care Tips for Pets
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {[
            {
              title: "Keep Them Warm Indoors",
              desc: "Ensure your pet’s bed is away from cold drafts. Use cozy blankets or heated pads.",
              icon: "🐶",
            },
            {
              title: "Protect Paws from Ice",
              desc: "Use pet-safe balms before walks and clean their paws afterward to remove salt or chemicals.",
              icon: "🐾",
            },
            {
              title: "Avoid Overbathing",
              desc: "Bathing too often removes natural oils — use moisturizing shampoos and limit baths in winter.",
              icon: "🛁",
            },
            {
              title: "Stay Active Indoors",
              desc: "Engage pets in indoor games like fetch or tug to keep them fit and happy during cold weather.",
              icon: "🎾",
            },
            {
              title: "Proper Nutrition",
              desc: "Slightly increase food portions to help pets maintain body warmth, unless advised otherwise by your vet.",
              icon: "🥣",
            },
            {
              title: "Watch for Hypothermia",
              desc: "If your pet is shivering or lethargic, warm them gently and contact a vet immediately.",
              icon: "🚨",
            },
          ].map((tip, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-[#FFF4EE] p-6 rounded-2xl hover:shadow-lg transition duration-300 text-center"
            >
              <div className="text-4xl mb-3">{tip.icon}</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-2">
                {tip.title}
              </h3>
              <p className="text-gray-600 text-sm">{tip.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Meet Our Experts */}
      <section className="bg-[#FFF4EE] py-12 rounded-3xl shadow-md max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10"
          data-aos="fade-up"
        >
          🩺 Meet Our Expert Vets
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {[
            {
              name: "Dr. Sarah Bennett",
              specialization: "Canine Health Specialist",
              image:
                "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=600&q=80",
            },
            {
              name: "Dr. Liam Carter",
              specialization: "Feline Nutrition Expert",
              image:
                "https://media.licdn.com/dms/image/v2/D4E03AQGDhWj5XMvonQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1691128958838?e=2147483647&v=beta&t=_Jk1HS2QRi1Z8x_jnneBRG9LoHwlBriNO84jWhdyaXo",
            },
            {
              name: "Dr. Aisha Rahman",
              specialization: "Exotic Pets Veterinarian",
              image:
                "https://hearttogrow.org/wp-content/uploads/2021/02/Screen-Shot-2021-02-02-at-1.30.55-PM.jpg",
            },
            {
              name: "Dr. Noah Kim",
              specialization: "Senior Pet Care Advisor",
              image:
                "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
            },
          ].map((vet, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center overflow-hidden"
            >
              <img
                src={vet.image}
                alt={vet.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {vet.name}
                </h3>
                <p className="text-sm text-[#FF7B54] font-medium mb-3">
                  {vet.specialization}
                </p>
                <button className="bg-[#FF7B54] text-white py-2 px-4 rounded-lg hover:bg-[#FF9B73] transition-colors duration-300">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
