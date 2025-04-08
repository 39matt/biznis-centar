import React from "react";
import { IconBase } from "../index";

type ItemDetailsProps = {
    rating?: number;
    reviews?: number | undefined;
    category?: string;
    price?: number;
    bonus?: string;
    distance?: string;
    deliveryTime?: string;
};

export function ItemDetails({ ...props }: ItemDetailsProps) {
    return (
        <div className="mt-3 flex gap-4">
            {props.rating && RatingComponent(props.rating, props.reviews)}
            {props.category && CategoryComponent(props.category)}
            {props.price && PriceComponent(props.price)}
            {props.bonus && BonusComponent(props.bonus)}
            {props.distance && DistanceComponent(props.distance)}
            {props.deliveryTime && DeliveryTimeComponent(props.deliveryTime)}
        </div>
    );
}

const RatingComponent = (rating: number, reviews: number | undefined) => (
    <div className="flex items-center text-xs text-[#626264] ml-2.5">
        <IconBase iconName="star" size={16} color="#facd5d" />
        <span className="font-semibold text-[#182135] mr-1">{rating.toFixed(1)}</span> ({reviews})
    </div>
);

const CategoryComponent = (category: string) => (
    <div className="flex items-center text-xs text-[#626264] ml-2.5">
        <IconBase iconName="cutlery" size={16} color="#a3a3a4" />
        {category}
    </div>
);

const PriceComponent = (price: number) => (
    <div className="flex items-center text-xs text-[#626264] ml-2.5">
        <IconBase iconName="money" size={16} color="#a3a3a4" />
        {price}
    </div>
);

const BonusComponent = (bonus: string) => (
    <div className="flex items-center text-xs text-[#626264] ml-2.5">{bonus}</div>
);

const DistanceComponent = (distance: string) => (
    <div className="flex items-center text-xs text-[#626264] ml-2.5">
        <IconBase iconName="target-location" size={16} color="#a3a3a4" />
        {distance}
    </div>
);

const DeliveryTimeComponent = (deliveryTime: string) => (
    <div className="flex items-center text-xs text-[#626264] ml-2.5">
        <IconBase iconName="bike" size={16} color="#a3a3a4" />
        {deliveryTime}
    </div>
);
