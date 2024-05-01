import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 animate-pulse duration-75 z-10 mix-blend-color-dodge">
      <Image
        src={"/circles.png"}
        alt="Circles"
        width={260}
        height={200}
        className="w-full h-full"
      />
    </div>
  );
};

export default Circles;