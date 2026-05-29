let port: any = null

let reader: any = null

let moisture = null

let pumpOn = false

export function getMoisture() {
  return moisture
}

export function getPumpStatus() {
  return pumpOn
}

export function isSimulationMode() {
  return port === null
}

export async function connectArduino() {
  try {
    port =
      await navigator.serial.requestPort()

    await port.open({
      baudRate: 9600,
    })

    const decoder =
      new TextDecoderStream()

    port.readable.pipeTo(
      decoder.writable
    )

    reader =
      decoder.readable.getReader()

    readSerialData()
  } catch (error) {
    console.log(error)
  }
}

async function readSerialData() {
  while (true) {
    const { value, done } =
      await reader.read()

    if (done) {
      reader.releaseLock()
      break
    }

    if (value) {
      console.log(value)

      const lines =
        value.split("\n")

      lines.forEach((line: string) => {
        if (
          line.includes(
            "MOISTURE:"
          )
        ) {
          moisture = parseInt(
            line.replace(
              "MOISTURE:",
              ""
            )
          )
        }

        if (
          line.includes("PUMP:ON")
        ) {
          pumpOn = true
        }

        if (
          line.includes(
            "PUMP:OFF"
          )
        ) {
          pumpOn = false
        }
      })
    }
  }
}

export function updateSimulation() {}