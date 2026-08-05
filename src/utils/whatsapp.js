const WA_NUMBER = '919113052138';

/**
 * Generate a WhatsApp booking URL with a dynamic pre-filled message.
 *
 * @param {Object} options
 * @param {string} [options.vehicle]      - Vehicle name (e.g. "Maruti Suzuki Ertiga")
 * @param {string} [options.tripType]     - Trip type (e.g. "Airport Transfer")
 * @param {string} [options.destination]  - Destination (e.g. "Mysore")
 * @returns {string} Full WhatsApp URL
 */
export function waBookingUrl({ vehicle = '', tripType = '', destination = '' } = {}) {
  const vehicleLine = vehicle
    ? `Vehicle          : ${vehicle}`
    : `Preferred Vehicle: `;

  const tripLine = tripType
    ? `Trip Type        : ${tripType}`
    : `Trip Type        : (Local / Airport / One Way / Outstation)`;

  const destinationLine = destination ? `Destination      : ${destination}\n` : '';

  const message = `Hello LnT Travels,

I would like to book a cab.

${tripLine}
${vehicleLine}
${destinationLine}Pickup Location  : __________
Drop Location    : __________
Travel Date      : __________
Pickup Time      : __________
No. of Passengers: __________
Luggage          : __________
Return Trip      : Yes / No
Special Requests : __________

Please share the fare and confirm availability.`;

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Shortcut for vehicle-specific booking URL.
 */
export function waVehicleUrl(vehicleName) {
  const message = `Hello LnT Travels,

I would like to book a ${vehicleName}.

Vehicle          : ${vehicleName}
Trip Type        : (Local / Airport / One Way / Outstation)
Pickup Location  : __________
Drop Location    : __________
Travel Date      : __________
Pickup Time      : __________
No. of Passengers: __________
Luggage          : __________
Special Requests : __________

Please share the fare and confirm availability.`;

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
