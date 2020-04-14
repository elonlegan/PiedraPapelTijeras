function opcion(humano)
{
  var resultado_texto = ["empata","ganas","pierdes"];
  var nombres = ["Piedra","Papel","Tijeras","Lagarto","Spock"]
  var cpu = Math.floor((Math.random() * 5));

  var jugada =[
                [0,1,2,2,1],
                [2,0,1,1,2],
                [1,2,0,2,1],
                [1,2,1,0,2],
                [2,1,2,1,0]
              ];
  desc_jugada = [
                    ["Iguales","Papel tapa a piedra","Piedra rompe tijeras","Piedra aplasta lagarto","Spock vaporiza piedra"],
                    ["Papel tapa a piedra","Iguales","Tijeras cortan papel","Lagarto devora papel","Papel desautoriza a Spock"],
                    ["Piedra rompe tijeras","Tijeras cortan papel","Iguales","Tijeras decapitan lagarto","Spock rompe tijeras"],
                    ["Piedra aplasta lagarto","Lagarto devora papel","Tijeras decapitan lagarto","Iguales","Lagarto envena a Spock"],
                    ["Spock vaporiza piedra","Papel desautoriza a Spock","Spock rompe tijeras","Lagarto envena a Spock","Iguales"]
                ];

  resultado = jugada[cpu][humano];

  console.log("humano: " + nombres[humano]);
  console.log("cpu: " + nombres[cpu]);
  console.log(desc_jugada[cpu][humano]);
  console.log(resultado_texto[resultado]);

  var mensaje1;
  var mensaje2;
  var mensaje3;
  var mensaje4;

  mensaje1  = new SpeechSynthesisUtterance("humano: " + nombres[humano]);
  mensaje2  = new SpeechSynthesisUtterance("cpu: " + nombres[cpu]);
  mensaje3  = new SpeechSynthesisUtterance(desc_jugada[cpu][humano]);
  mensaje4  = new SpeechSynthesisUtterance(resultado_texto[resultado]);

  speechSynthesis.speak(mensaje1);
  speechSynthesis.speak(mensaje2);
  speechSynthesis.speak(mensaje3);
  speechSynthesis.speak(mensaje4);
}
