import { Text } from "@chakra-ui/react";
interface HeroProps {
  title: string | undefined;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  const backgroundImageUrl = "/assets/plus_saver_promo_main.jpg";
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
        className="bg-cover bg-center h-[200px] lg:h-[300px] relative"
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="absolute top-[40%] left-[5%] text-white">
        <Text className="text-xl lg:text-4xl font-light">{title}</Text>
      </div>
    </div>
  );
};

export default Hero;
