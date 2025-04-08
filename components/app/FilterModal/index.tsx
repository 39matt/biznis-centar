import React from "react";
import { useFilter } from "../../../stores";

export const FilterModal = () => {
    const { isOpen } = useFilter((store) => store.state);
    const { toggleModal } = useFilter((store) => store);

    return (
        <>
            {isOpen && (
                <div className="block">
                    <div className="fixed top-0 right-0 w-1/3 z-50 h-screen bg-white p-6 rounded-tl-3xl rounded-bl-3xl">
                        Sadržaj filtera
                    </div>
                    <div
                        className="fixed top-0 left-0 w-screen h-screen z-40 bg-black opacity-80"
                        onClick={toggleModal}
                    ></div>
                </div>
            )}
        </>
    );
};
