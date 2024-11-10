const date = new Date();

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const dayName = weekdays[date.getDay()];
    const day = date.getDate();
    const month = date.getMonth() + 1;

    
    const finalDate = `${dayName} ${day}.${month}`;


    document.getElementById("date").innerText = finalDate;