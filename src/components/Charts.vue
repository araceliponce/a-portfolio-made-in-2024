<template>
  <div class="donuts">
    <div class="card">
      <div class="donut-chart chart1">
        <div class="quad one"></div>
        <div class="quad two"></div>
        <div class="quad three"></div>
        <div class="quad four"></div>
        <div class="quad top"></div>
        <div class="chart-center"></div>
      </div><!--/.donut-chart-->
    </div>

    <div class="card">
      <div class="donut-chart chart2">
        <div class="quad one"></div>
        <div class="quad two"></div>
        <div class="quad three"></div>
        <div class="quad four"></div>
        <div class="quad top"></div>
        <div class="chart-center"></div>
      </div><!--/.donut-chart-->
    </div>

    <div class="card">
      <div class="donut-chart chart3">
        <div class="quad one"></div>
        <div class="quad two"></div>
        <div class="quad three"></div>
        <div class="quad four"></div>
        <div class="quad top"></div>
        <div class="chart-center"></div>
      </div><!--/.donut-chart-->
    </div>
  </div>
</template>

<!-- 
  /* 
<style> tag can be acompanied with the scoped attr (like: <style scoped>) if you want the styling code to stay only within the scope of that file.
but, you can also add a lang attribute to the <style>, to establish something like i want this to be interpreted as scss or sass, then you write <style lang="scss"></style> or <style lang="sass"></style>.

If you get a warning, it just means sass it is not installed so just follow what the msg says.  mine said:
Preprocessor dependency "sass" not found. Did you install it? Try `pnpm add -D sass`. 

so go to your terminal and run the command it suggests and all should be then good and fine.

*/
 -->


<!-- 

  <style lang="sass" scoped>

div
  color: red


  span
    color: blue
  

</style>

  -->
<style lang="scss" scoped>
* {

  -webkit-transform: transform3d(0, 0, 0);
}

.donuts {
  display: grid;
  grid-auto-flow: column;
  gap: 5px;
  justify-content: center;
  /* padding-block: 1rem; */

  /* width: min(400px,90vw); */
  margin-inline: auto;
}

.grid .card {
  /* float: left; */
  /* background: #fff; */
  /* padding: 20px; */
  /* margin: 0 20px 0 0; */
}


// Donut Chart Mixin
.donut-chart {
  position: relative;
  border-radius: 50%;
  overflow: hidden;

  .quad {
    position: absolute;
    top: 0;
    left: 0;
  }

  .chart-center {
    position: absolute;
    border-radius: 50%;

    span {
      display: block;
      text-align: center;
    }
  }
}

@mixin donut-chart($name, $perc, $size, $width, $speed, $base, $center, $color, $textColor: $color, $textSize: 40px) {

  $deg: (
    $perc/100*360)+deg;

  @-webkit-keyframes #{$name} {
    0% {
      -webkit-transform: rotate(0deg
      );
  }

  100% {
    -webkit-transform: rotate($deg);
  }
}

@-webkit-keyframes chartRotate2 {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(90deg);
  }
}

@-webkit-keyframes chartRotate3 {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(180deg);
  }
}

@-webkit-keyframes chartRotate4 {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(270deg);
  }
}

@-webkit-keyframes chartCover {

  0%,
  90% {
    opacity: 1;
  }

  91%,
  100% {
    opacity: 0;
  }
}

.donut-chart {
  &.#{$name} {
    width: $size;
    height: $size;
    background: $base;

    .quad {
      width: $size/2;
      height: $size/2;
      top: 0;
      left: 0;
      border-radius: 100% 0 0 0;
      display: none;

      &.one {
        -webkit-transform: rotate($deg);
        -webkit-transform-origin: bottom right;
        background: $color;
        -webkit-animation: #{$name} $speed linear;

        @if $perc >0 {
          display: block;
        }
      }

      &.two {
        -webkit-transform: rotate(90deg);
        -webkit-transform-origin: bottom right;
        background: $color;
        -webkit-animation: chartRotate2 $speed linear;

        @if $perc >25 {
          display: block;
        }
      }

      &.three {
        -webkit-transform: rotate(180deg);
        -webkit-transform-origin: bottom right;
        background: $color;
        -webkit-animation: chartRotate3 $speed linear;

        @if $perc >50 {
          display: block;
        }
      }

      &.four {
        -webkit-transform: rotate(270deg);
        -webkit-transform-origin: bottom right;
        background: $color;
        -webkit-animation: chartRotate4 $speed linear;

        @if $perc >75 {
          display: block;
        }
      }

      &.top {
        display: block;
        background: $base;

        @if $perc >75 {
          opacity: 0;
          -webkit-animation: chartCover .01s linear $speed/1.2 both;
        }
      }
    }

    // quad

    .chart-center {
      top: $width;
      left: $width;
      width: $size - ($width * 2);
      height: $size - ($width * 2);
      background: $center;

      &:after {
        display: inline-block;
        width: 100%;
        /* font-size: $size / 5; */
        font-size: calc($size / 5);
        font-size: 2cqw;
        color: $textColor;
        text-align: center;
        line-height: $size - ($width * 2);
        content: '#{$perc}%';
      }
    }
  }
}
}

// mixin

$chart-size: 100px;
// Charts
@include donut-chart('chart1', 99, $chart-size, 25px, .5s, #e1e1e1, var(--body-bg), #48b2c1);

@include donut-chart('chart2', 100, $chart-size, 15px, .7s, #e1e1e1, #fff, #f26a4a);

@include donut-chart('chart3', 100, $chart-size, 10px, .9s, #e1e1e1, #fff, #353535);

/* @include donut-chart('chart4', 93, 250px, 40px, .5s, #e1e1e1, #fff, #50C690); */
</style>