/* peek */
.carousel.peek {

   overflow: hidden;
}
.carousel.peek .carousel-item {
  width: 50%;
}
.carousel.peek .carousel-item-prev,
.carousel.peek .carousel-item-next {
  display: block;
  opacity: .5;
  position:  absolute;
  left: -20%;
  top: 0;
  z-index: 2;
  -webkit-transition: left -webkit-transform .2s linear;
  -moz-transition: left -moz-transform .2s linear;
  -o-transition: left -o-transform .2s linear;
  -ms-transition: left -ms-transform .2s linear;
  transition: left transform .2s linear;
  -webkit-transform: scale(.6) translateX(0);
  -moz-transform: scale(.6) translateX(0);
  -o-transform: scale(.6) translateX(0);
  -ms-transform: scale(.6) translateX(0);
  transform: scale(.6) translateX(0);
}
.carousel-no-transition.peek .carousel-item {
  -webkit-transition: none;
  -moz-transition: none;
  -ms-transition: none;
  -o-transition: none;
  transition: none;
}
.carousel.peek .carousel-item-next {
  left: 70%;
}
.carousel.peek .carousel-active {
  opacity: 1;
  position: relative;
  left: 25%;
  z-index: 1;
  -webkit-transform: scale(1) translateX(0);
  -moz-transform: scale(1) translateX(0);
  -o-transform: scale(1) translateX(0);
  -ms-transform: scale(1) translateX(0);
  transform: scale(1) translateX(0);
}
.carousel.peek .carousel-nav {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
}
.carousel.peek .carousel-nav a {
  width: 15%;
  height: 100%;
  background: #fff;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  left: 0;
}
.carousel.peek .carousel-nav a.next {
  left: auto;
  right: 0;
}



