export default function Clouds() {
    return (
      <div className="bg-white py-24 sm:py-32 ">
        <div className="mx-auto flex-col max-w-7xl px-6 px-lg:8 items-center ">
          <h2 className="text-center text-xl font-semibold leading-8 text-gray-900">
            As seen on
          </h2>
          <div className="mx-auto self-center mt-10 flex justify-around  gap-x-8 gap-y-10 sm:max-w-xl  sm:gap-x-10">
            
            <div className="flex gap-3 items-center ">
            <img
              className=" max-h-12 object-contain "
              src="/medium.png"
              alt="Transistor"
              width={64}
              height={64}
            />
            <div className="text-center text-lg font-semibold text-gray-600">
              Medium
            </div>

            </div>
            <div className="flex gap-3 items-center">
            <img
              className="max-h-12  object-contain "
              src="/product-hunt.png"
              alt="Reform"
              width={48}
              height={48}
            />
            <div className="text-center text-lg font-semibold text-gray-600">
              Product Hunt
            </div>
            </div>
         
           
           
          </div>
        </div>
      </div>
    )
  }
  