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

context.lineWidth = 1;
context.fillStyle = "#66FF00";
context.beginPath();
context.rect(75, 275, 50, 50);
context.fill();

context.lineWidth = 1;
context.fillStyle = "#66FF00";
context.beginPath();
context.rect(175, 275, 50, 50);
context.fill();

context.lineWidth = 1;
context.fillStyle = "#66FF00";
context.beginPath();
context.rect(275, 275, 50, 50);
context.fill();

context.lineWidth = 1;
context.fillStyle = "#66FF00";
context.beginPath();
context.rect(175, 125, 50, 50);
context.fill();