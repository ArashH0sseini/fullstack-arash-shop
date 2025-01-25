import React from 'react'

function CartItem() {
  return (
    <div className="grid grid-cols-12 bg-slate-100 mb-4">
            <div className="col-span-2">
              <img
                src="https://cdn.mos.cms.futurecdn.net/jGHehERQq4fhNFNTvZAhE9-320-80.png"
                alt="product"
              />
            </div>

            <div className="col-span-10 text-right p-4">
              <h2 className="text-xl font-bold">اسم محصول</h2>
              <p>
                تعداد: <span>3</span>
              </p>
              <p>
                قیمت محصول: <span>45$</span>
              </p>
              <div className="mt-4">
                <button className="px-4 py-2 rounded bg-sky-500 text-white">
                  +
                </button>
                <span className="mx-4">3</span>
                <button className="px-4 py-2 rounded bg-sky-500 text-white">
                  +
                </button>
              </div>
            </div>
          </div>
  )
}

export default CartItem