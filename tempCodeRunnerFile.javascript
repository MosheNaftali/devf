var jugador1, jugador2, tecla, resultado;
        var piedra = 'piedra;';
        var papel = 'papel';
        var tijera = 'tijera';
judador1 = prompt("Jugador 1, que escoges ¿piedra, papel o tijera?");
            jugador2 = prompt("Jugador 2, que escoges ¿piedra, papel o tijera?");
            if(jugador1 == piedra){
                if(jugador2 == piedra){
                    resultado = 'Empate';
                }else if(jugador2 == papel){
                    resultado = 'Gana Jugador 2';
                }else if(jugador2 == tijera){
                    resultado = 'Gana Jugador 1';
                }
            }else if(jugador1 == papel){
                if(jugador2 == piedra){
                    resultado = 'Gana Jugador 1';
                }else if(jugador2 == papel){
                    resultado = 'Empate';
                }else if(jugador2 == tijera){
                    resultado = 'Gana Jugador 2';
                }
            }else if(jugador1 == tijera){
                if(jugador2 == piedra){
                    resultado = 'Gana Jugador 2';
                }else if(jugador2 == papel){
                    resultado = 'Gana Jugador 1';
                }else if(jugador2 == tijera){
                    resultado = 'Empate';
                }
            }
            alert(resultado);