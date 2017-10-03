# Typescript egzersizleri

* Base Image: [frapsoft/typescript](https://hub.docker.com/r/frapsoft/typescript/)

[Fonksiyonel programlama blog serisinin](https://dhalsim.github.io/categories.html#fonksiyonel-programlama-ref) [ikinci bölümü](https://dhalsim.github.io/fonksiyonel-programlama/2017/09/24/fonksiyonel-programlama-s01e02) için gerekli alıştırmalar, bu docker image üzerinden kullanılabilir.

## Kurulum

~~~
docker pull dhalsim/fp-exercises-s01e02
~~~

## Egzersizleri derleme

Dosyalar:

* exercise01.ts
* exercise02.ts
* exercise03.ts
* exercise04.ts
* option.ts

Typescript derlemek için önce:

~~~
docker run -it --entrypoint sh fp-exercises
~~~

ile interactive shell olarak açıp, sonra da:

~~~
tsc
~~~

ile derliyoruz.

## Egzersizleri çalıştırma

Yine interactive shell'deyken:

~~~
node exercise01.js
~~~

şeklinde çalıştırabilirsiniz.