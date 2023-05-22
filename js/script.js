// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Jakub Malhotra
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict";

// Reverses the characters in a word
function reverseString() {
  var input = document.getElementById("string").value;
  var reversed = "";
  for (var counter = input.length - 1; counter >= 0; counter--) {
    reversed += input.charAt(counter);
  }
  document.getElementById("output").textContent = reversed;
}