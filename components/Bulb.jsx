
import Image from "next/image";

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 mix-blend-color-dodge rotate-12 animate-pulse duration-75 z-10 xl:w-[260px] w-[200px]">
      <Image src={"/bulb.png"} width={260} height={200} alt="Bulb" />
    </div>
  );
};

export default Bulb;
