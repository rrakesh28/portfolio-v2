"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeSnippetsCarousel: React.FC = () => {
  const javascriptCode = `
function addNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

console.log(addNumbers(5, 3));
`;

  const pythonCode = `
def add_numbers(a, b):
    if not all(isinstance(i, int) for i in [a, b]):
        raise ValueError('Both arguments must be integers')
    return a + b

print(add_numbers(5, 3))
`;

  const phpCode = `
<?php
function addNumbers($a, $b) {
    if (!is_int($a) || !is_int($b)) {
        throw new Exception('Both arguments must be integers');
    }
    return $a + $b;
}

echo addNumbers(5, 3);
?>
`;

  const rubyCode = `
def add_numbers(a, b)
  raise 'Both arguments must be integers' unless [a, b].all? { |i| i.is_a?(Integer) }
  a + b
end

puts add_numbers(5, 3)
`;

  const goCode = `
package main

import "fmt"

func addNumbers(a, b int) int {
    if a == 0 || b == 0 {
        panic("Arguments must be non-zero integers")
    }
    return a + b
}

func main() {
    fmt.Println(addNumbers(5, 3))
}
`;

  const rustCode = `
fn add_numbers(a: i32, b: i32) -> i32 {
    if a == 0 || b == 0 {
        panic!("Arguments must be non-zero integers");
    }
    a + b
}

fn main() {
    println!("{}", add_numbers(5, 3));
}
`;

  const codeSnippets = [
    javascriptCode,
    rustCode,
    pythonCode,
    phpCode,
    rubyCode,
    goCode,
  ];
  return (
    <div>
      <Swiper
        direction="vertical"
        modules={[Autoplay, Mousewheel]}
        spaceBetween={30}
        slidesPerView={3}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        mousewheel={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChangeTransitionStart={(swiper) => {
          const slides = swiper.slides;
          slides.forEach((slide, index) => {
            if (index === swiper.activeIndex) {
              slide.style.opacity = "1";
            } else {
              slide.style.opacity = "0.6";
            }
          });
        }}
        style={{ height: "700px", width: "500px" }}
      >
        {[...Array(6)].map((_, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#011627",
              color: "white",
              fontWeight: "bold",
              height: "100%",
              opacity: index === 0 ? 1 : 0.6,
              transition: "opacity 0.2s ease-in-out",
            }}
          >
            <SyntaxHighlighter
              language="javascript"
              style={nightOwl}
              customStyle={{
                fontSize: "12px",
                height: "200px",
                width: "500px",
                overflow: "hidden",
              }}
            >
              {codeSnippets[index]}
            </SyntaxHighlighter>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CodeSnippetsCarousel;
