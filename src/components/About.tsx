import { MapPin, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import aboutImg from "../assets/home-page-about.jpeg";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-red-600">About Us</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
            <ImageWithFallback
              src={aboutImg}
              alt="Mothers and children"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <div className="flex items-center gap-3 text-gray-600">
              <Calendar className="w-5 h-5 text-red-600" />
              <span>Founded in 2024</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <MapPin className="w-5 h-5 text-red-600" />
              <span>
                Operating in Masaka and Kampala, Uganda
              </span>
            </div>

            <p className="text-gray-700">
              Sanyu for the Needy started working in Uganda in
              2024 by assisting communities in central Uganda to
              acquire basic needs like clothes, shoes, and
              books. This was mainly done in Masaka which later
              extended to Kampala.
            </p>

            <p className="text-gray-700">
              During our field activities, we noticed that the
              need was more than just clothes. Single mothers
              are struggling with their children where the
              mothers are the breadwinners, and receiving
              medication for their children is a nightmare.
            </p>
          </div>
        </div>

        {/* Founder's Story */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-8 md:p-12">
          <h3 className="mb-6 text-center text-red-600">
            The Story Behind Sanyu
          </h3>

          <div className="space-y-4 text-gray-700 max-w-4xl mx-auto">
            <p>
              This organization was born from the life story of
              Mr. Edron, who was raised by a single mother under
              extremely difficult circumstances. Each day was a
              quiet battle to survive, and even the simplest
              needs—like access to medication—felt impossibly
              far away. He grew up without shoes, wearing torn
              clothes, and often went to school without a
              uniform or a bag. He knows firsthand what it means
              to be overlooked and to grow up without
              opportunity. From this lived experience came a
              deep desire to stand with children who face the
              same hardships he once endured.
            </p>

            <p>
              During some of his most vulnerable years, Mr.
              Edron lived with his late grandmother, who became
              his source of love, care, and stability when he
              had no one else to lean on. Her name was{" "}
              <span className="text-red-600">'SANYU'</span>—a
              name rich with meaning and compassion, and one
              that lives on through the organization she
              inspired. After her passing, Mr. Edron was taken
              to an orphanage in Jinja, where he stayed for two
              years. His life took a hopeful turn when a kind
              and selfless Samaritan—his maternal aunt—welcomed
              him into her home, supported him through school,
              and stood by him until he was able to seek a
              better future in the United States of America.
            </p>

            <p>
              Today, we carry forward Sanyu’s legacy of love,
              kindness, and unwavering care. In her honor, we
              work to bring hope, dignity, and happiness to
              single mothers and vulnerable children across
              Uganda—so that no child feels forgotten and no
              mother walks alone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}