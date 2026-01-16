export default function ProjectGalleryPage() {
  return (
    <section className="bg-[#F5F1EA] py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        
        <h2 className="font-serif text-5xl text-[#A4571A]">
          Project Gallery
        </h2>

        <p className="mt-6 text-xl text-[#2B2B2B]/80">
          Here are some of the{" "}
          <span className="border-b-2 border-[#2B2B2B]/70 pb-1">
            projects I worked on
          </span>
        </p>

      
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          
          <div>
            <img
              src="/images/5.png"
              alt=""
              className="w-full rounded-lg shadow-lg"
            />
            <p className="mt-4 text-lg italic underline text-black">
              Restaurant Bon Appétit – Full Stack Web App
            </p>
          </div>

          
          <div>
            <img
              src="/images/6.png"
              alt=""
              className="w-full rounded-lg shadow-lg"
            />
            <p className="mt-4 text-lg italic underline text-black">
              Ananya Hotel Website – Full Stack Web App
            </p>
          </div>

         
          <div>
            <img
              src="/images/3.png"
              alt=""
              className="w-full rounded-lg shadow-lg"
            />
            <p className="mt-4 text-lg italic underline text-black">
              Ananya Hotel Website – Booking System 
            </p>
          </div>

          
          <div>
            <img
              src="/images/2.png"
              alt=""
              className="w-full rounded-lg shadow-lg"
            />
            <p className="mt-4 text-lg italic underline text-black">
              Reservation & Checkout Flow
            </p>
          </div>
        </div>

        
        <div className="mt-14 flex justify-center">
          <div className="max-w-xl">
            <img
              src="/images/8.png"
              alt=""
              className="w-full rounded-lg shadow-lg"
            />
            <p className="mt-4 text-lg italic underline text-black">
              Secure & Collaborative To-Do App 
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
