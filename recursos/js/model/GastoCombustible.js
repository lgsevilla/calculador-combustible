"use strict";

export class GastoCombustible {
    constructor(id, vehicleType, date, kilometers, precioViaje) {
        this.id = Number(id);
        this.vehicleType = String(vehicleType);
        this.date = new Date(date);
        this.kilometers = parseFloat(kilometers);
        this.precioViaje = parseFlaot(precioViaje);
    }
}