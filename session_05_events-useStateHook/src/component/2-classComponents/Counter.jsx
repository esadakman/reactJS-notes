import React, { Component } from "react";
//* ============================ CLASS COMPONENTS AND STATE ============================
// ! butonları yazdıktan sonra
//* React'da Class-Component'ler ES6 class yapisina dayanmaktadir.
// * react 16.8 'e kadar class componentler  kullanıyordu
//* Cok fazla boilerplate kod icermektedir.
// ! çok az değişiklikle veya hiç değişiklik olmaksızın birden çok yerde tekrarlanan kod bölümleridir.
//* Ancak Class-Component'ler React'da state'leri barindiran ilk component yapisidir.
//* State, aslinda bir component hakkinda bilgi tutan bir React nesnesidir.
//* Bir componentin state'i zaman icerisinde degisebilir.
//* State her degistiginde React bu componenti yeninden render eder.
//* Bir state'e baslangıc degeri constructor metodu icersinde this.state ile atanabilir
//* constructor'in disinda state, setState() metodu ile degistilebilir. (güvenlik sebebi ile)
//* ====================================================================================

class Counter extends Component {
  // ! react compenentttan Counter adında yeni bir component oluşturuyoruz
  constructor(props) {
    // ! constructor içerisinde superlada react componentde ki tanımlanan bütün probsları almış oldu
    super(props);
    // ! this diyerek Counter objesinin state'inde bir count objesi oluşturuyoruz
    this.state = {
      count: 0,
      // ! class component yaptığımızda içinde state kullanabiliyoruz ve state'in başlangıç değerini constructor'da verebiliyoruz
      // * count: props.count || 0,
    };
    // ? handleInc metodunun Counter class'ina baglanmasi için
    // * this.handleInc = this.handleInc.bind(this);
  }

  handleInc() {
    // ! herhangi bir fonksiyonumda state'i değiştirmek içinse setState metodunu kullanıyorum ama this'le
    // ! obje olduğu için süslüyü açıyoruz
    // ! bu formatta  yapınca yine binding yapmak gerekiyor. constructor içerisinde bşndlamamız gerekiyor
    this.setState({ count: this.state.count + 1 });
  }

  //! Yazmis oldugumuz metotlar default olarak classa baglanmaz.Ancak, React built-in fonksiyonlari baglidir bind'a gerek duymuyor.
  //* Bunun icin metotlarimizi ya constructor icerisinde baglamaliyiz yada otomatik baglamayi saglayan arrow fonksiyonlarini kullanmaliyiz.
  //! Arrow olduğu için bağlandı dosyamız, bindsız çalıştı
  handleDec = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="container text-center mt-4">
        <h1 className="display-4 text-danger m-4">COUNT</h1>
        {/* //! Direkt count deyince bağlanmıyor, erişmek içinde this.state dememiz lazım */}
        <h1 className="display-4 text-danger m-4">COUNT:{this.state.count}</h1>
        {/* //! Fonksiyonları çağırırkende yine this kullanıyoruz */}
        <button onClick={this.handleInc} className="btn btn-success">
          INC
        </button>
        <button onClick={this.handleDec} className="btn btn-danger">
          DEC
        </button>
      </div>
    );
  }
}

export default Counter;
