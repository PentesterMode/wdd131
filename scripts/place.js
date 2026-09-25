

function calculateWindChill(temperature, windSpeed,){
    return (
        13.12 +
        0.6215 * temperature -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.395 * temperature * Math.pow(windSpeed, 0.16)
    );
   }
    document.addEventListener("DOMContentLoaded",() => {
        document.getElementById("currentyear").textContent = new Date().getFullYear();
        document.getElementById("lastModified").textContent = "Last Modification: "+document.lastModified;
       
        const tempElement = document.getElementById("temp");
        const windElement = document.getElementById("wind");
        const chillElement = document.getElementById("chill");

        const temp = parseFloat(tempElement.textContent);
        const wind = parseFloat(windElement.textContent);

        if(temp <= 10 && wind > 4.8) {
            const windChill = calculateWindChill(temp, wind);
            chillElement.textContent = `${windChill.toFixed()} &deg`;

    } else {
        chillElement.textContent = "N/A";
    }
    });
