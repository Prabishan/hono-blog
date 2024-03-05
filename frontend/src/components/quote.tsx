import React from "react";

const Quote = () => {

    return (

        <div className="h-screen bg-slate-300 flex flex-col justify-center items-center ">
            <div className="max-w-md">
                <div className="font-bold text-2xl">
                    "The customer service I received was expeceptional. The support team went above and beyond to address my concerns."
                </div>
                <div className="font-semibold text-base mt-2">
                    Jules Winnfield
                </div>
                <div className=" font-thin">
                    CEO, Acme Inc
                </div>
            </div>
        </div>
    )
}

export default Quote;