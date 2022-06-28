//* ========================== HOOKS ====================================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
// !1. İlk olarak import edilmedlir. import { useState } from "react";
//* 2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    reactta 10 küsür tane built-in hook'u var ve bunun dışındada custom hook oluşturulabilir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://reactjs.org/docs/hooks-rules.html
//* =====================================================================
import { useState } from "react";
// ! Mümkün mertebe döngünün en üst seviyesinde, döngü dışında kullanılmalı// ! Mümkün mertebe döngünün en üst seviyesinde, döngü dışında kullanılmalı

const UseStateExample = () => {
  // ? useState en çok kullanılan hook'tur.
  // ? Bir state in degisken,ve obje ile kutlanilabilmesine olanak saglar
  // ? useState hook'u 2 deger dondurur.

  // ? 1. si state degiskenidir.
  // ? 2. si ise state"i degistirmeye izin veren bir setter metodudur.
  // ? useState parametre olarak state'in ilk degerini alir.
  //  *****************************
  const [count, setCount] = useState(0); // ! array dest yapıyoruz
  // ! iki tane şey return ediyor, birincisi state variable'ı ikincisi setter metodu
  const dec = () => {
    setCount(count - 1);
  };
  const inc = () => {
    setCount(count + 1);
  };
  // const resetter = () => {
  //   setCount(0);
  // };
  //  !  ===========İkinci Hook=====================Hookumuz obje olacağı için süslü  açtık========
  const [info, setInfo] = useState({
    name: "Ahmet Yılmaz",
    email: "ay@gmail.com",
    age: 32,
  });
  const incAge = () => {
    setInfo(info.age + 1);
    // console.log(info.age); // ! yas consolda düştü ama ekrana yansımadı çünkü elimizde ki veriyi saklamadık
    // ! spreadle önce açmamız ve elementlere erişmemiz, sonra key:Value şeklinde yazmamız gerekiyor
    // setInfo({ ...info, age: info.age + 1 });
    //  ! bütün bilgileri değiştirmek istersem setInfo içine yazabilirim
    // setInfo({ ...info, name: " esad", age: 12 });
  };
  return (
    <div className="container text-center mt-4">
      <section>
        <h1 className="display-4 text-danger m-4">USESTATE COUNT:{count}</h1>
        <button onClick={dec}>DEC</button>
        {/* // ! re-render'ı engellemek için arrow func. yazdık */}
        <button onClick={() => setCount(0)}>CLEAR</button>
        {/* <button onClick={resetter}>CLEAR</button> */}
        <button onClick={inc}>INC</button>
      </section>
      <section>
        <h1 className="display-4 text-danger m-4">USESTATE:Object</h1>
        <h2>{info.name}</h2>
        <h2>{info.email}</h2>
        <h2>{info.age}</h2>
        <button onClick={incAge} className="btn btn-info">
          inc age
        </button>
      </section>
    </div>
  );
};

export default UseStateExample;
