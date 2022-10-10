# react-in-class

Bootcamp eğitim sürecinde React derslerimde aldığım notlar

#### Önemli Notlar:

- React bir SPA(Single Page Application)'dır
- React'ta jsx yapısı vardır.
- React'ta en büyük sıkıntı bir component'ten diğerine veri taşınmasıdır.
- React her render çalıştığında tree of elemetns oluşturur
- Üst comp.'tan alt comp.'a veri taşınır ama alttan üste taşınmaz
- Component: Kullanıcı arayüzünün parçalarını ifade eder. Uygulamamız componentlerden oluşur
- 3 çeşit comp. vardır. Fonksiyon, class ve react hooks yapısıyla oluşturulan componentler

- render() metodu, bir sınıf bileşeni oluşturmak için gereken tek metottur.
- render() componentleri tekrar çalıştırmayı(yenilemeyi) sağlar.
- props : Bir componentten diğerine taşınan datadır
- state : Bir component'in datasıdır.
- reconciliation : Virtual DOM oluşturma sürecine verilen ad. Elementlerin component, prompts veya state'i değiştiğinde "tree"sini saklamaktan sorumlu.

### Api ile çalışma

- https://github.com/typicode/json-server bu siteden fake rest api'yi çekiyoruz. Bunun için;
- konsola => "npm install -g json-server " komutunu giriyoruz
- ardından içinde data bulunan bir db.json dosyası oluturuyoruz
- son olarak ise db.josn dosyamızın olduğu konumda terminal açıp => "json-server --watch db.json" komutunu giriyoruz
- api'miz 3000 portunda çalışıcağı için projemizden çıkıp yapı tekrardan başlatmamız gerekebilir.
- apimizin çalıştığı "http://localhost:3000/" adresine gidip "/" koyup kategori isimlerimizi yazarak gerekli bilgilere ulaşabiliriz.

- datanın bit component'den altına ve ordanda onun altına geçmesi işlemine "Componet Drilling" denir.

### Alertify Kurulum

- Öncelikle boş bir terminale "npm install alertifyjs --save" yazıyoruz
- 2. adım olarak index.js'de alertify'ı "import "alertifyjs/build/css/alertify.min.css";" diyerek css'i eklemiş oluyoruz
- En sonda alertify'ı kullanacağımız yere gelip 'import alertify from "alertifyjs"' diyerek import ediyoruz ve kullanmaya başlıyoruz
