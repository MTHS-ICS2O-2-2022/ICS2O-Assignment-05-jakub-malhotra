// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Jakub Malhotra
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";
function countDigits() {
  var input = document.getElementById("input").value;
  var number = parseInt(input);

  var digitCount = 0;
  while (number !== 0) {
    number = Math.floor(number / 10);
    digitCount++;
  }

  document.getElementById("output").innerHTML = "Total number of digits: " + digitCount;
}