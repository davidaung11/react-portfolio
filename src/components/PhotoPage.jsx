
const Photo =[
    {pos:"top",img:"./images/3.png"},
    {pos:"left",img:"./images/5.png"},
    {pos:"right",img:"./images/6.png"},
    {pos:"bottom",img:"./images/8.png"},
    {pos:"center",img:"./images/7.png"}
]
export default function PhotoPage() {
  return (
    <>
      {/* Mobile / small screen: show normal stacked images (one by one) */}
      <div className="bg-[#9b4b1b] px-6 py-10 space-y-10 md:hidden">
        {Photo.map((a) => (
          <img
            key={a.pos}
            src={a.img}
          
            className="mx-auto w-full max-w-130 rounded-xl object-cover"
          />
        ))}
      </div>

      {/* Desktop (md and up): show collage */}
      <div className="relative hidden h-screen w-screen overflow-hidden bg-[#9b4b1b] md:block">
        {Photo.map((a) => (
          <img
            key={a.pos}
            src={a.img}
            className={
  a.pos === "center"
    ? "absolute left-1/2 top-1/2 z-10 h-75 w-90 -translate-x-1/2 -translate-y-1/2 object-contain rounded-t-full"
    : a.pos === "top"
    ? "absolute left-1/2 top-8 z-2 h-40 w-110 -translate-x-1/2 object-cover"
    : a.pos === "right"
    ? "absolute right-8 top-6 z-2 h-65 w-105 object-cover"
    : a.pos === "left"
    ? "absolute left-8 top-1/2 z-2 h-95 w-[320px] -translate-y-1/2 object-cover"
    : "absolute right-16 bottom-8 z-2 h-80 w-95 object-cover"
}

          />
        ))}
      </div>
    </>
  );
}