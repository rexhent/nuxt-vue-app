import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';

export default defineNuxtPlugin(() => {
  if (process.server) {
    const microbitPort = 'COM15'; // Replace with your micro:bit's serial port
    const baudRate = 115200;

    const port = new SerialPort({ path: microbitPort, baudRate });
    const parser = new ReadlineParser({ delimiter: '\n' });

    port.pipe(parser);

    return {
      provide: {
        port,
        parser
      }
    };
  }
});
