const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let windDirection = Math.floor(Math.random() * 360);
let windSpeed = Math.random() * 10 + 5;
let boatDirection = 0;
let sailAngle = 0;
let boatSpeed = 0;
let boatX = canvas.width / 2;
let boatY = canvas.height / 2;
let steeringValue = 0;

const steering = document.getElementById('steering');
steering.addEventListener('input', (e) => {
    steeringValue = parseInt(e.target.value);
    document.getElementById('courseValue').textContent = steeringValue;
});

steering.addEventListener('change', () => {
        const goToZero = () => {
            setTimeout(() => {
                steeringValue = steering.value;
                if(steeringValue > 0) {
                    steeringValue--;
                    steering.value--;
                } else if(steeringValue < 0) {
                    steeringValue++;
                    steering.value++;
                }
                document.getElementById('courseValue').textContent = steeringValue;

                if(steeringValue !== 0) {
                    goToZero();
                }
            }, 100);
        }
        goToZero();
});

document.getElementById('changeWind').addEventListener('click', () => {
    windDirection = Math.floor(Math.random() * 360);
    windSpeed = Math.random() * 10 + 5;
});

const boatImage = new Image();
boatImage.src = 'boat.png';

const sailImage = new Image();
sailImage.src = 'sail.png';

function calculateSpeed() {
    let relativeWind = (windDirection - boatDirection + 360) % 360;
    sailAngle = Math.max(-90, Math.min(90, relativeWind > 180 ? relativeWind - 360 : relativeWind));
    let sailEfficiency = Math.cos((relativeWind - sailAngle) * Math.PI / 180);
    boatSpeed = Math.max(0, sailEfficiency * 0.3);
}

function updateBoatPosition() {
    let turnRadius = 100;
    let turnAngle = steeringValue * 0.005;
    boatDirection += turnAngle;
    boatX += boatSpeed * Math.cos((boatDirection - 90) * Math.PI / 180);
    boatY += boatSpeed * Math.sin((boatDirection - 90) * Math.PI / 180);

    if (boatX < 0) boatX = canvas.width;
    if (boatX > canvas.width) boatX = 0;
    if (boatY < 0) boatY = canvas.height;
    if (boatY > canvas.height) boatY = 0;
}

function drawBoat() {
    ctx.save();
    ctx.translate(boatX, boatY);
    ctx.rotate((boatDirection * Math.PI) / 180);

    ctx.drawImage(boatImage, -20, -40, 40, 120);

    ctx.save();
    ctx.translate(0, 20);
    ctx.rotate((sailAngle * Math.PI) / 180);
    ctx.drawImage(sailImage, -30, -30, 60, 30);
    ctx.restore();
    
    ctx.restore();
}

function drawCompass() {
    const compassRadius = 50;
    const compassX = 100;
    const compassY = 100;

    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.beginPath();
    ctx.arc(compassX, compassY, compassRadius + 30, 0, 2 * Math.PI);
    ctx.fill();

    ctx.save();
    ctx.translate(compassX, compassY);
    ctx.rotate((windDirection * Math.PI) / 180);

    ctx.beginPath();
    ctx.arc(0, 0, compassRadius, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(0, -compassRadius);
    ctx.lineTo(10, 0);
    ctx.lineTo(-10, 0);
    ctx.closePath();
    ctx.fill();

    ctx.restore();

    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';
    ctx.fillText('N', compassX - 5, compassY - compassRadius - 10);
    ctx.fillText('E', compassX + compassRadius + 5, compassY + 5);
    ctx.fillText('S', compassX - 5, compassY + compassRadius + 15);
    ctx.fillText('W', compassX - compassRadius - 15, compassY + 5);

    ctx.font = '25px Arial';
    ctx.fillText(`Prędkość wiatru: ${windSpeed.toFixed(1)} kt`, compassX - compassRadius - 30, compassY + compassRadius + 90);
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateBoatPosition();
    calculateSpeed();
    drawCompass();
    drawBoat();
    requestAnimationFrame(gameLoop);
}

gameLoop();