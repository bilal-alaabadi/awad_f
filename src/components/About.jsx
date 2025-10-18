// src/pages/About.jsx
import React from 'react';
import perfumeImg from '../assets/WhatsApp Image 2025-10-05 at 2.44.13 PM (1).jpeg';

const About = () => {
  return (
    <div dir="rtl" className="bg-white text-gray-800">
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-8">
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          {/* الصورة */}
          <div className="md:w-1/2">
            <img
              src={perfumeImg}
              alt="أعواد - صانع وموزع أعواد البخور"
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
          </div>

          {/* النص */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-[#8B4513] mb-4">
              أعواد
              <br />
              <span>جودة تفوح بالعراقة</span>
            </h2>

            <p className="text-lg leading-loose mb-4">
              منذ عام 2024، تأسست <span className="font-semibold text-[#8B4513]">شركة أعواد</span> 
              كصانع وبائع لأعواد البخور. اسم أصبح اليوم مرادفاً للمنتجات عالية الجودة 
              وصديقة للبيئة التي استمرت لفترة ليست بالقصيرة، وتفخر أعواد بتنوع منتجاتها 
              الذي يشمل على سبيل المثال لا الحصر الأعواد، العطور، البخور، وحاملات الأعواد.
            </p>

            <p className="leading-loose mb-4">
              بصفتها علامة تجارية مسجلة في وزارة التجارة وترويج الاستثمار، أصبحت اليوم 
              في معظم المنازل الخليجية لتصبح جزءاً لا غنى عنه في كل منزل. فقد حملت 
              <span className="font-semibold text-[#8B4513]"> أعواد </span> 
              معها دائماً سمعة طيبة في تقديم منتجات مبتكرة عالية الجودة مما يجعل الشركة 
              رائدة في مجالها.
            </p>

            <p className="leading-loose mb-4">
              تمكّنا من اختيار أفضل المواد لمنتجاتنا من الزيوت، الأخشاب، والمواد العطرية 
              الطبيعية، من شبكة المصادر الراسخة لدينا التي تم بناؤها على مدى فترة من الزمن.
            </p>

            <div className="mt-6 p-5 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-semibold text-[#8B4513] mb-3">
                رؤيتنا
              </h3>
              <ul className="space-y-2 list-disc pr-5">
                <li>تقديم منتجات عطرية تجمع بين الأصالة والجودة العالية.</li>
                <li>الاهتمام بالبيئة عبر استخدام مواد طبيعية مستدامة.</li>
                <li>الانتشار في الأسواق الخليجية والعربية كرمز للفخامة والرقي.</li>
              </ul>
            </div>

            <p className="mt-8 text-lg font-medium text-[#8B4513]">
              أعواد — عراقة الماضي برؤية عصرية.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-xl font-semibold text-[#8B4513]">
            بخور أعواد... عبقٌ يعيد للبيت روحه.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
