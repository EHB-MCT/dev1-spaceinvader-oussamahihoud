"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

context.lineWidth = 1;
context.fillStyle = "black";
context.beginPath();
context.rect(50, 50, 300, 300);
context.stroke();
context.fill();
