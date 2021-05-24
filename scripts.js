//Dados
const players = []

const Event = {
    //Vitórias
    somaVitoria(){
        
        initApp()    
    },

    diminuiVitoria(){

        initApp()   
    },

    //Empates
    somaEmpate(){

        initApp()   
    },

    diminuiEmpate(){

        initApp()   
    },

    //Derrotas
    somaDerrota(){
        initApp()   
    },

    diminuiDerrota(){

        initApp()   
        },

    //Remove
    remove(index){
        players.splice(index, 1)

        initApp()

    },

    //New
    save(){

        const player = document.getElementById('player')

        if(player.value == ""){
            
            alert('Insira um nome no campo "time/jogador"!')

        } else {
            players.push({
                            player: player.value, 
                            vitorias: 0, 
                            empates: 0,
                            derrotas: 0
                        }
            )
                    
            initApp()

            player.value = ""
        }
    }
}

//Total
calc = (index) => {
    let total = 0;

    total = (players[index].vitorias * 3) + players[index].empates

    return total
}

//Dom
dom = (player, vitorias, empates, derrotas, index) => {

    const html = document.querySelector('#player-data')

    html.innerHTML += `
                        <tr>
                            <td class="description">${player}</td>
                            <td class="description">
                                <a class="income" onclick="Event.somaVitoria(++players[${index}].vitorias)">+ </a>
                                ${vitorias}
                                <a class="expense" onclick="Event.diminuiVitoria(--players[${index}].vitorias)">- </a>
                            </td>
                            <td class="description">
                                <a class="income" onclick="Event.somaEmpate(++players[${index}].empates)">+ </a>
                                ${empates} 
                                <a class="expense" onclick="Event.diminuiEmpate(--players[${index}].empates)">- </a>
                            </td>
                            <td class="description">
                                <a class="income" onclick="Event.somaDerrota(++players[${index}].derrotas)">+ </a>
                                ${derrotas}
                                <a class="expense" onclick="Event.diminuiDerrota(--players[${index}].derrotas)">- </a>
                            </td>
                            <td class="description">${calc(index)}</td>
                            <td class="description">
                                <img onclick="Event.remove(${index})" src="./assets/minus.svg" alt="Remover transação">
                            </td>
                        </tr>
                     `
}

//Init
initApp = () => {
    const html = document.querySelector('#player-data')

    html.innerHTML = ""

    players.forEach((value, index) => {
        dom(value.player, 
            value.vitorias,
            value.empates, 
            value.derrotas, 
            index)
    })
}