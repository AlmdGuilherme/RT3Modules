abstract class Calculo{
  public abstract calculate(numero1: number, numero2: number):number;
}

class Soma extends Calculo{
  public calculate(numero1: number, numero2: number): number {
      return numero1 + numero2
  }
}

class Subtracao extends Calculo{
  public calculate(numero1: number, numero2: number): number {
      return numero1 - numero2
  }
}

class Divisao extends Calculo{
  public calculate(numero1: number, numero2: number): number {
      return numero1 / numero2
  }
}

class Multiplicacao extends Calculo{
  public calculate(numero1: number, numero2: number): number {
      return numero1 * numero2
  }
}

class Potencia extends Calculo{
  public calculate(numero1: number, numero2: number): number {
      return numero1 ** numero2
  }
}

class Modulo extends Calculo{
  public calculate(numero1: number, numero2: number): number {
      return numero1 % numero2
  }
}

class Bhaskara{
  public bhask(a: number, b: number, c: number){
    const delta:number = (b*b) - (4*a*c)
    
    if (delta > 0){
      const x1:number = (-b + Math.sqrt(delta)) / (2*a)
      const x2:number = (-b - Math.sqrt(delta)) / (2*a)

      return `Valores de X: \n|${x1.toFixed(2)}\n|${x2.toFixed(2)}`
    } else if (delta == 0){
      const x: number  = -b / (2*a)
      return `A equação possui tem duas raizes iguais e reais, portanto X1 e X2 são iguais (${x}).`
    } else {
      return `A equação não possui raizes ( Δ < 0)`
    }
  }
}


export {Soma, Subtracao, Divisao, Multiplicacao, Potencia, Modulo, Bhaskara}