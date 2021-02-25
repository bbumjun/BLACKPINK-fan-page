# BLACKPINK 팬 페이지

기존의 [블랙핑크 공식 홈페이지](https://www.ygfamily.com/artist/main.asp?LANGDIV=K&ATYPE=2&ARTIDX=70)를 세련되게 만들어 보자.

[BLACKPINK IN YOUR AREA](https://bbumjun.github.io/BLACKPINK-fan-page/dist/)

----

반응형 이미지를 사용하는 이유

큰 화면에 해상도가 작은 이미지를 보여주게 되면 이미지가 깨져 보일 수 있다. 반대로 작은 화면에 너무 큰 화면을 보여주면 쓸데없는 데이터가 낭비되고 성능도 저하된다.  기기에 따라 달라지는 화면의 크기에 맞는 해상도의 이미지를 제공하는 것이 반응형 디자인에서 필요한 것이다. 

img 태그에서 srcset, sizes 속성을 사용해 화면에 알맞는 해상도의 이미지를 로드할 수 있다.

**왜 css 나 자바스크립트에서 하지 않고 html에서?**

브라우저가 페이지를 로드하는 순서와 관련이 있다. 브라우저가 페이지를 불러오기 시작할 때, 메인 파서가 CSS와 자바스크립트를 로드하고 해석하기 전에 이미지를 다운로드 하기 시작한다.  CSS와 JS가 로드된 시점에는 이미지가 이미 로드된 상태이기 때문에 성능면에서도 반응형 디자인 면에서도 좋지 못하다.


----

html 의 무결성을 위해 w3c의 [markup validator](https://validator.w3.org/)를 사용했다.
