var config = {
    apiKey: "AIzaSyBqJ8HrUrx7EuGORcI_5KvCtBUQCn3Lf1U",
    authDomain: "collaborative-sketch-8df1a.firebaseapp.com",
    databaseURL: "https://collaborative-sketch-8df1a.firebaseio.com",
    storageBucket: "collaborative-sketch-8df1a.appspot.com",
    messagingSenderId: "424772188255"
};
firebase.initializeApp(config);
  
var pointsData = firebase.database().ref();

var points = [];

function setup() {
var canvas  =  createCanvas(600,600);
    background(255);
    fill(0);
    pointsData.on("child_added", function (point) {
        points.push(point.val());
    });
    
    pointsData.on("child_removed", function () {
        points = [];
    });
    
    canvas.mousePressed(drawPoint);
    canvas.mouseMoved(drawPointIfMousePressed);
    
}

function draw() {
    background(255);
    
    
    for (var i = 0; i < points.length; i++) {
        var point = points[i];
        fill('blue')
        ellipse(point.x, point.y, 5, 5);
        
    }
}

function drawPoint() {
    pointsData.push({x: mouseX, y: mouseY})
}

function drawPointIfMousePressed() {
    if (mouseIsPressed) {
       drawPoint();
    }
}

$("#saveDrawing").on("click", saveDrawing);

function saveDrawing() {
    saveCanvas();
}

$("#clearDrawing").on("click", clearDrawing);

function clearDrawing() {
    pointsData.remove();
    points = [];
}