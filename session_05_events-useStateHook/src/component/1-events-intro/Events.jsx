import React from "react";

//? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
//? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
//? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
//? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
//? React ortaminda kullanilan event'larin bilindik tarayicilarda
//? sorunsuz calismasini saglanir.
//? Ayrinti icin : https://reactjs.org/docs/events.html

const Events = () => {
  let info = "events";
  const clickHandler = () => {
    alert("clicked");
  };
  const handleClear = (text) => {
    alert(text);
    // console.log(text);
  };
  //   const handleChange = () => {
  const handleChange = (e) => {
    info = "changed";
    console.log(info);
    console.log(e.target);
  };
  return (
    <div>
      {/* //!en son div oluştur. 3. buton için */}
      <div className="display-4 text-danger m-2">{info}</div>
      {/* //! buton oluştur */}
      <button onClick={clickHandler} className="btn btn-primary">
        {/* <button onClick={() => clickHandler()} className="btn btn-primary"> */}
        Click
      </button>
      {/* //! buton oluştur */}
      {/* Eger bir event fonksiyonunun paremetresi olmasi gerkiyorsa
      bu fonksiyon bir arrow fonks. tarafindan  cagrilmalidir. Aksi
      takdirde event fonksiyonu event gerceklesmeden cagirilir */}
      {/* //! butona tıkladığımda gönderdiğim bir paramtrenin dönmesini istiyorum ama clear butonu sadece refresh işleminde çalışıyor*/}
      {/* //! bir event fonksiyonunda parametre varsa doğrudan triggerlanıyor*/}
      {/* <button onClick={handleClear("esad")} className="btn btn-danger mx-3"> */}
      <button
        onClick={() => handleClear("Clear clicked")}
        className="btn btn-danger mx-3"
      >
        Clear!
      </button>
      {/* //! buton oluştur */}
      {/* //! En son olarakta butomla birlikte "events yazısının değişmesini istiyorum" */}
      {/* //! Biz aksini belirtmediğimiz sürece elementler statik kabul ediliyor */}
      <button onClick={handleChange} className="btn btn-warning">
        {" "}
        {/* //! Böyle çağırınca fon. otomatik olarak çağrılıyor*/}
        {/* <button onClick={(e) => handleChange(e)} className="btn btn-warning"> */}
        {/* //! Fonksiyonlarımıza event göndermek istiyosak yine bir arrow func. yapmamız gerekiyor ve parametre ekliyoruz */}
        Change ME!
      </button>
    </div>
  );
};

export default Events;
//! info console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
//* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
//* static olarak kabul etmesinden kaynaklanir.

//* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
//* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
//! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
//? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
//? 1. Statefull Classes (Class Components).
//? 2. Hooks (Functional Components).

//?Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
//? Yaygin kullanim Fonksiyonel Component'lerdir.
