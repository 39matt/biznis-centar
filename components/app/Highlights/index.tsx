import React, { useEffect, useState } from "react";
import { HighlightsItem } from "../HighlightsItem";
import { getHighlightedServices } from "../../../lib/services";
import { Service } from "../../../types/firestore";

export function Highlights() {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        const fetchServices = async () => {
            const data = await getHighlightedServices();
            setServices(data);
        };
        fetchServices();
    }, []);

    return (
        <div className="mb-12 w-full">
            <h2 className="text-2xl font-bold text-[#182135] mb-6">Istaknuti oglasi</h2>
            <div className="flex gap-6 overflow-x-auto pb-4 max-w-full no-scrollbar">
                {services.map((service) => (
                    <div key={service.id} className="flex-none w-[240px] min-w-[240px]">
                        <HighlightsItem
                            {...service}
                            imageUrl={service.imageUrl}
                            price={`${service.price} din`}
                        />
                    </div>
                ))}
                {services.map((service) => (
                    <div key={`${service.id}-duplicate`} className="flex-none w-[240px] min-w-[240px]">
                        <HighlightsItem
                            {...service}
                            imageUrl={service.imageUrl}
                            price={`${service.price} din`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}