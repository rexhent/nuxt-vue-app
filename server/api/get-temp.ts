// server/api/get-temp.ts
import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';

const microbitPort = 'COM15'; // Replace with your micro:bit's serial port
const baudRate = 115200; // The default baud rate for micro:bit

const port = new SerialPort({ path: microbitPort, baudRate });
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

export default defineEventHandler(async (event) => {
  return await sendCommand('GET_TEMP');
});

async function sendCommand(command: string, retries = 5): Promise<string | null> {
  return new Promise((resolve, reject) => {
    let attempt = 1;

    const trySending = () => {
      if (attempt > retries) {
        console.log('Command send failed');
        return reject('Command send failed');
      }

      console.log(`Attempt ${attempt} at command ${command}`);
      port.write(command + '\n', (err) => {
        if (err) {
          console.error('Error on write:', err.message);
          setTimeout(trySending, 100);
        }
      });

      parser.once('data', (response) => {
        if (response) {
          console.log('Response:', response.trim());
          return resolve(response.trim());
        } else {
          attempt++;
          setTimeout(trySending, 100);
        }
      });
    };

    trySending();
  });
}
