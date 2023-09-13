import { services } from "../constants";
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section className='max-container flex justify-center mt-11 mb-11 flex-wrap gap-9'>
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
