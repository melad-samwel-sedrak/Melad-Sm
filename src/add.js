 /* eslint-disable react-hooks/rules-of-hooks */
import React, { useState , useRef } from "react";
 


 
const Add = () => {
  const [selected, setSelected] = useState("زفاف");
  const [step, setStep] = useState(1);

  const options = ["زفاف", "مؤتمرات", "أعياد ميلاد", "عزاء", "أخرى"];


  //  علشان الصورة
  const inputRef = useRef(null);
 const [images, setImages] = useState([]);

 const handleFiles = (files) => {
  const newImages = Array.from(files).map((file) => ({
    url: URL.createObjectURL(file),
    id: Date.now() + Math.random(),
  }));

  setImages((prev) => [...prev, ...newImages]);
};



  return (
    <>
      <div className="t">
        <h2>إضافة قاعة جديدة</h2>
      </div>

      <div className="pp">
        <p>املأ البيانات التالية لإضافة قاعتك</p>
      </div>

      {/* الخطوات */}
      <div className="c">
        <div className={`c1 ${step === 1 ? "active-step" : ""} ${step > 1 ? "done" : ""}`}>
          <div>
            <i className="fa-solid fa-list"></i>
          </div>
          <p>معلومات أساسية</p>
        </div>

        <hr />

        <div className={`c2 ${step === 2 ? "active-step" : ""} ${step > 2 ? "done" : ""}`}>
          <div>
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <p>الموقع والسعة</p>
        </div>

        <hr />

        <div className={`c3 ${step === 3 ? "active-step" : ""} ${step > 3 ? "done" : ""}`}>
          <div>
            <i className="fa-solid fa-camera"></i>
          </div>
          <p>الصور</p>
        </div>

        <hr />

        <div className={`c4 ${step === 4 ? "active-step" : ""}`}>
          <div>
            <i className="fa-solid fa-gift"></i>
          </div>
          <p>الخدمات والعروض</p>
        </div>
      </div>





      {/* STEP 1 */}
      {step === 1 && (
        <div className="cont">
          <div className="cont-top">
            <lable className="label-1">اسم القاعة</lable>
            <input type="text" placeholder="ادخل اسم القاعة" />
          </div>

          <div className="cont-center">
            <p>نوع القاعة</p>

            <div className="types">
              {options.map((item) => (
                <label
                  key={item}
                  className={`type ${selected === item ? "active" : ""}`}
                >
                  <input
                    type="radio"
                    name="hall"
                    value={item}
                    checked={selected === item}
                    onChange={() => setSelected(item)}
                  />
                  <span className="custom-radio"></span>
                  <span className="text">{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="cont-botm">
            <p>وصف القاعة</p>
            <textarea placeholder="اكتب وصفًا تفصيليًا عن القاعة ..."></textarea>
          </div>

          <button className="bo-1" 
            onClick={() => {
              if (selected === "أخرى") {
                 
                return;
              }
              setStep(2);
            }}
            >
            التالى
          </button>

        </div>
      )}






      {/* STEP 2 */}
      {step === 2 && (

        <div className="cont-2">
           
        <div className="content-1">

            <div className="cont-top-1">
            <label >اسم القاعة</label>
            <input type="text" placeholder="ادخل اسم القاعة" />
          </div>

          <div className="cont-top-2">
            <label>العنوان</label>
            <input type="text" placeholder="شارع _ حى _ مدينة" />
          </div>

            <div className="cont-top-2">
            <label>المدينة</label>
            <input type="text" placeholder="القاهرة" />
            
          </div>
          
          <div className="cont-top-3">
            <label>إضافة الموقع</label>
            

            <iframe
              title="map"
              className="map"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps?q=30.0444,31.2357&z=13&output=embed"
            ></iframe>
          </div>
          

          <div className="cont-top-2">
            <label>السعة</label>
            <input type="text" placeholder="500" />
          </div>

        <div className="cont-top-2">
            <label>السعر/ساعة</label>
            <input type="text" placeholder="1000" />
          </div>

            <div className="cont-top-2">
            <label>السعر/يوم</label>
            <input type="text" placeholder="15000" />
          </div>
        </div>
          

           <div className="botons"> 
            <button className="boton-1" onClick={() => setStep(1)}>السابق</button>
           <button className="boton-2" onClick={() => setStep(3)}>التالى</button>
            
          </div>
          
        </div>
      )}


      {/* الجزء الثالث */}
{step === 3 && (
  <div className="cont-3">

    <div
      className="melad"
      onClick={() => inputRef.current.click()}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        handleFiles(e.dataTransfer.files);
      }}
    >

    {/* الصور */}
      {images.length > 0 && (
        <div className="gallery">

          {images.map((img) => (
            <div className="img-wrapper" key={img.id}>

              <img
                src={img.url}
                alt="preview"
                className="preview-img"
              />

              {/* زر حذف */}
              <span
                className="remove-img"
                onClick={(e) => {
                  e.stopPropagation();
                  setImages((prev) =>
                    prev.filter((i) => i.id !== img.id)
                  );
                }}
              >
                ✖
              </span>

            </div>
          ))}

        </div>
      )}

      {/* المحتوى لو مفيش صور */}
      
      {images.length === 0 && (
        <div className="continer">
          <div className="icon">
            <i className="fa-regular fa-image"></i>
          </div>

          <p>اضغط أو اسحب صورة</p>
          <p className="par">
            يمكنك رفع عدة صور للقاعة (PNG, JPG, JPEG)
          </p>
        </div>
      )}

    </div>

    {/* input */}
    <input
      type="file"
      multiple
      accept="image/*"
      ref={inputRef}
      hidden
      onChange={(e) => handleFiles(e.target.files)}
    />

    {/* buttons */}
    <div className="botons-2">
      <button className="boton-1" onClick={() => setStep(2)}>
        السابق
      </button>

      <button className="boton-2" onClick={() => setStep(4)}>
        التالى
      </button>
    </div>

  </div>
)}

      {/* STEP 4 */}
      {step === 4 && (
        <div className="cont-4">
           

           <div className="cont-top-2-4">
            <label>المدينة</label>
            <input type="text" placeholder="القاهرة" />
          </div>
          
          <div className="cont-top-4">
            <label>الخدمات المتاحة</label>
            <input className="input-1" type="text" placeholder="اسم الخدمة" />
            <input type="text" placeholder="الوصف" />
          </div>
         

         <div className="add">
                <button className="add-1"><span>+</span>إضافة خدمة</button>
         </div>

         <div className="cont-top-5">
            <label>العروض و الباقات</label>
            <input className="input-1" type="text" placeholder="اسم الباقة (الفضى/الذهبى/الماسى)" />
            <input className="input-1" type="text" placeholder="السعر" />
            <input   type="text" placeholder="وصف مميزات الباقة" />
          </div>


          <div className="add-2">
                <button className="add-1"><span>+</span>إضافة خدمة</button>
         </div>
            <div className="botons-3"> 
            <button className="boton-1" onClick={() => setStep(3)}>السابق</button>

           <button className="boton-2" onClick={() => setStep(4)}>
  
               
                         حفظ القاعة
           <span className="check-icon">✔</span>
            </button>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Add;