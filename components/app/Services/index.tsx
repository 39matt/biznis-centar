import React, { useEffect, useState } from "react";
import { ServiceItem } from "../ServiceItem";
import { getServices } from "../../../lib/services";
import { Service } from "../../../types/firestore";

export function Services() {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        const fetchServices = async () => {
            const data = await getServices();
            setServices(data);
        };
        fetchServices();
    }, []);

    return (
        <div className="mb-12 w-full">
            <h2 className="text-2xl font-bold text-[#182135] mb-6">Najtraženije usluge</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {services.map((service) => (
                    <ServiceItem
                        key={service.id}
                        {...service}
                        imageUrl={service.imageUrl}
                        price={`${service.price} din`}
                    />
                ))}
            </div>
        </div>
    );
}
