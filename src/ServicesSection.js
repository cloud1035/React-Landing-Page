import ServiceBlock from "./ServiceBlock";

const SERVICE_BLOCK_DATA = [
  {
    image: "https://assets.codepen.io/6060109/agency-service-1.png",
    title: "Web design"
  },
  {
    image: "https://assets.codepen.io/6060109/agency-service-2.png",
    title: "Ecommerce"
  },
  {
    image: "https://assets.codepen.io/6060109/agency-service-3.png",
    title: "Automation"
  }
];

export default function ServicesSection() {
  return (
    <div className="service-section" id="services">
      <h1> Our services</h1>
      <div className="services">
        {SERVICE_BLOCK_DATA.map((block) => {
          return <ServiceBlock block={block} />;
        })}
      </div>
    </div>
  );
}
