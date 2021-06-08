import React, { useEffect, useState } from "react";
const image1 = require("../../../../../assets/images/barber1.jpeg");
const image2 = require("../../../../../assets/images/barber2.jpeg");
const image3 = require("../../../../../assets/images/barber3.jpeg");

const star = [
  {
    id: 1,
    name: "Barber Shop A Loi",
    imageUrl: image1,
    star: "4.5",
    street: "69 Le Duan",
  },
  {
    id: 2,
    name: "Barber Ciking",
    imageUrl: image2,
    star: "4.0",
    street: "20 Nguyen Van Linh",
  },
  {
    id: 3,
    name: "Barber Shop Star 1",
    imageUrl: image3,
    star: "3.5",
    street: "180 Ong Ich Khiem",
  },
  {
    id: 4,
    name: "Barber Shop Star 2",
    imageUrl: image3,
    star: "4.5",
    street: "120 Le Duan",
  },
];

export default star;
