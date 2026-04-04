// url endpoint https://api.open-meteo.com/v1/forecast?latitude=50.29&longitude=19.10¤t=temperature_2m,wind_speed_10m


async function pobierzPogode(szerokosc, dlugosc) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${szerokosc}&longitude=${dlugosc}&current=temperature_2m,wind_speed_10m,relative_humidity_2m`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`error: ${res.status}`);
    }

    const data = await res.json();

    const temperatura = data.current.temperature_2m;
    const wiatr = data.current.wind_speed_10m;
    const wilgotnosc = data.current.relative_humidity_2m;
    const jedn = data.current_units.temperature_2m;

    console.log("Dane pogodowe:");
    console.log("------------------------------------");
    console.log(`Temperatura: ${temperatura}${jedn}`);
    console.log(`Prędkość wiatru: ${wiatr} km/h`);
    console.log(`Wilgotność powietrza: ${wilgotnosc}%`);
    
    // rozsz. wlasne
    ocenaTemp(temperatura);

  } catch (err) {
    console.error(`Nie udało się pobrać danych: ${err.message}`);
  }
}

// fn pomocnicza
function ocenaTemp(temp) {
  if (temp > 25) {
    console.log("Jest gorąco");
  } else if (temp < 5) {
    console.log("Jest zimno");
  } else {
    console.log("Temp umiarkowana");
  }
}

pobierzPogode(50.29, 19.10);
