// ========================= src/pages/shop/SingleProduct.jsx =========================
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFetchProductByIdQuery } from '../../../redux/features/products/productsApi';
import { addToCart } from '../../../redux/features/cart/cartSlice';

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, error, isLoading } = useFetchProductByIdQuery(id);
  const { country } = useSelector((state) => state.cart);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [cartQty, setCartQty] = useState(1);

  const isAEDCountry = country === 'الإمارات' || country === 'دول الخليج';
  const currency = isAEDCountry ? 'د.إ' : 'ر.ع.';
  const exchangeRate = isAEDCountry ? 9.5 : 1;

  if (isLoading) return <p className="py-10 text-center">جاري التحميل...</p>;
  if (error) return <p className="py-10 text-center text-red-600">حدث خطأ أثناء تحميل تفاصيل المنتج.</p>;
  if (!data) return null;

  const images = Array.isArray(data.image) ? data.image : (data.image ? [data.image] : []);
  const unitPrice = (data.regularPrice || data.price || 0) * exchangeRate;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...data,
        price: data.price,
        quantity: cartQty,
        currency,
        exchangeRate,
      })
    );
  };

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <section className="section__container mt-8" dir="rtl">
      {/* في الهاتف العناصر بالمنتصف، في الكمبيوتر نفس التخطيط لكن التفاصيل تنزل أكثر للأسفل */}
      <div className="flex flex-col items-center md:items-stretch md:flex-row gap-8">
        {/* الصور */}
        <div className="md:w-1/2 w-full relative">
          {images.length > 0 ? (
            <>
              <div className="overflow-hidden rounded-md">
                <img
                  src={images[currentImageIndex]}
                  alt={data.name}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/800x600?text=%20';
                  }}
                />
              </div>

              {/* أزرار التنقل */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-[#8B4A2C] text-white w-10 h-10 items-center justify-center rounded-full"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextImage}
                    className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-[#8B4A2C] text-white w-10 h-10 items-center justify-center rounded-full"
                  >
                    ›
                  </button>
                </>
              )}

              {/* الصور المصغّرة */}
              <div className="mt-4">
                <div className="flex gap-3 overflow-x-auto no-scrollbar justify-center md:justify-start">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border transition ${
                        idx === currentImageIndex
                          ? 'border-[#8B4A2C] ring-2 ring-[#8B4A2C]/30'
                          : 'border-gray-200 hover:border-[#8B4A2C]'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`صورة ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <p>لا توجد صور متاحة.</p>
          )}
        </div>

        {/* التفاصيل */}
        <div className="md:w-1/2 w-full text-center md:text-right md:mt-60">
          <h3 className="text-2xl font-semibold mb-4">{data.name}</h3>
          <p className="text-gray-600 mb-2">الفئة: {data.category}</p>
          <p className="text-gray-600 mb-4">{data.description}</p>

          <div className="text-xl text-[#8B4A2C] mb-6">
            السعر: {unitPrice.toFixed(2)} {currency}
          </div>

          {/* عداد الكمية */}
          <div className="mb-6 flex items-center gap-4 justify-center md:justify-start">
            <button
              type="button"
              onClick={() => setCartQty((q) => (q > 1 ? q - 1 : 1))}
              className="w-10 h-10 flex items-center justify-center bg-[#8B4A2C] text-white rounded-md"
            >
              -
            </button>
            <div className="min-w-[3rem] text-center font-bold text-lg">
              {cartQty}
            </div>
            <button
              type="button"
              onClick={() => setCartQty((q) => q + 1)}
              className="w-10 h-10 flex items-center justify-center bg-[#8B4A2C] text-white rounded-md"
            >
              +
            </button>
          </div>

          {/* زر الإضافة للسلة */}
          <div className="flex justify-center md:justify-start">
            <button
              onClick={handleAddToCart}
              className="px-6 py-3 bg-[#8B4A2C] text-white rounded-md hover:opacity-90"
            >
              إضافة إلى السلة
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
