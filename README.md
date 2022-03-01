# Şehiriçi toplu taşıma için Android Uygulama (Kaman/Kırşehir)

Geliştirilen bu android uygulama kapsamında şehiriçi toplu taşımada yolcuların bekleme sürelerinin tespiti ve analizinin yapılması amaçlanmaktadır. Bu sayede toplu taşıma kullanan yolcuların durakta bekleme sürelerinin iyileştirilmesi hedeflenmektedir.

Uygulamayı indirmek için [buraya](https://github.com/aliardatrcn/Kaman-Kirsehir-AndroidApp/blob/main/Android_Uygulama/app-debug.apk) tıklayınız (Uygulamanın uygun şekilde kullanılabilmesi için kullanıcı konumunu açmalı ve uygulamaya konum izini vermelidir).

Kullanıcıcılar uygulamaya giriş yaptıklarında karşılarına aşağıdaki ekran çıkmaktadır;

<p align="center">
  <img src="https://github.com/aliardatrcn/Kaman-Kirsehir-AndroidApp/blob/main/Android_Uygulama/origin.jpeg"/>
</p>

Kullanıcılar isteklerine bağlı olarak aşağıda oklar ile gösterilen yerlere isim ve soyisim girebilir ve sonrasında beklemeye başladığı toplu taşıma aracını seçer.

<p align="center">
  <img src="https://github.com/aliardatrcn/Kaman-Kirsehir-AndroidApp/blob/main/Android_Uygulama/secenek.jpeg"/>
</p>

En son aşamada **Beklemeye Başladım** yazan butona tıkladıklarında butonun üzerindeki yazı **Beklemeyi Bitir** olarak değişir ve uygulama kullanıcı butona tekrardan basıncaya kadarki süreyi ve konumunu veri tabanına kayıt eder.

<p align="center">
  <img src="https://github.com/aliardatrcn/Kaman-Kirsehir-AndroidApp/blob/main/Android_Uygulama/bekleme.jpeg"/>
</p>

# Toplu taşıma aracına ait güzergah verisinin WEB Arayüzü yardımı ile girilmesi:

Kullanılacak olan toplu taşıma aracına ait güzergah, yol ve durak konumu bilgileri belirli öznitelikler eklenerek, tasarlanan WEB Arayüzü aracılığıyla veritabanına aktarılabilir.
Veri aktarımı için yalnızca belirli sistem tarafından onaylanan belirli kullanıcılara  izin verilir. 

