export const leftPad = number => {
  const pad = '00'
  return pad.substring(0, pad.length - number.length) + number
  // Creo una constante pad='00'
  // Utilizando el metodo substring lo que hago es decirle a pad que a partir de la posicion 0
  // (primer parametro) me deje "n" elementos (los "n "elementos los estoy calculando
  // haciendo una resta entre el largo del path y el largo del numero que estoy recibiendo)
  // Si recibo 1 = entonces la resta me da 2-1 = 1, significa que voy a eliminar solo 1 elemento
  // a partir de la posicion 0 de pad. y a eso le voy a sumar el numero, entonces...
  // return 01
  //
  // Si recibo 10 entonces la resta me da 0 y borra todo lo que queda para que el resultado sea
  // return 10
}

export const formattedTime = secs =>{
  const minutes = parseInt(secs/60 , 10)
  const seconds = parseInt(secs % 60 , 10)
  return `${leftPad(minutes.toString())} : ${leftPad(seconds.toString())}`
}
