"use strict";

import { GastoCombustible } from "../model/GastoCombustible.js";
import { GASTOS_DB } from "../data/gasto.data.js";

var gastoAnual = {
  2020 : 0,
  2019 : 0,
  2018 : 0,
  2017 : 0,
  2016 : 0,
  2015 : 0
};

function almacenarGastos() {
  GASTOS_DB.forEach(gasto => {
    localStorage.setItem(gasto.id, JSON.stringify(gasto));

    const year = gasto.date.getFullYear();
    gastoAnual[year] += gasto.precioViaje;
  });

  for (const year in gastoAnual) {
    sessionStorage.setItem(year, gastoAnual[year]);
  }
}

export const GastoService = {
  almacenarGastos,
  procesarGasto
};

function procesarGasto(jsonNuevoGasto){
  const obj = JSON.parse(jsonNuevoGasto);

  const gasto = new GastoCombustible(
    obj.id,
    obj.vehicleType,
    obj.date,
    obj.kilometers,
    obj.precioViaje
  );

  localStorage.setItem(gasto.id, JSON.stringify(gasto));

  const year = String(gasto.date.getFullYear());
  const actual = parseFloat(sessionStorage.getItem(year)) || 0;
  const nuevoTotal = +(actual + gasto.precioViaje).toFixed(2);
  sessionStorage.setItem(year, nuevoTotal);
}
