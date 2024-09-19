import { SerialPort } from 'serialport'
const port = new SerialPort({ path: '/dev/tty-usbserial1', baudRate: 57600 })

port.write('main screen turn on', function(err) {
  if (err) {
    return console.log('Error on write: ', err.message)
  }
  console.log('message written')
})

// Open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message)
})

port.on('readable', function () {
  console.log('Data:', port.read())
})

// Switches the port into "flowing mode"
port.on('data', function (data) {
  console.log('Data:', data)
})

// Pipe the data into another stream (like a parser or standard out)

port.write('Hello World!')
port.write(Buffer.from('Hello World!'))

export default defineEventHandler(async (event) => {
  
  return 'Hello Nitro'
})
