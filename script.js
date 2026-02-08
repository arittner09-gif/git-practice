console.log("Die Verbindung steht!");
alert("JavaScript ist aktiv!");
const video = document.getElementById('webcam');
const button = document.getElementById('start-camera');

button.addEventListener('click', async () => {
    try {
        // Hier fragen wir den Browser nach der Kamera
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        
        // Button-Text ändern, damit man sieht, dass es geklappt hat
        button.innerText = "Kamera läuft!";
        button.style.background = "lightgreen";
    } catch (err) {
        console.error("Da lief was schief: ", err);
        alert("Kamera-Zugriff verweigert oder nicht gefunden.");
    }
});
