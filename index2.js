function showMessage (nota1, nota2, nota3) {
    let promedio = (nota1 + nota2 + nota3) / 3;
    
    if (promedio > 70) {
      return "aprobado";
    } else {
      return "reprobado";
    }
  }
  
  let nota1 = 80;
  let nota2 = 75;
  let nota3 = 90;
  let promedio = 70
  let estado = showMessage(nota1, nota2, nota3);
  alert(estado);