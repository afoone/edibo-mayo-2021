
export const PARTIDA_TERMINADA_ACTION = "partidaTerminada"

export const terminarPartida = (clicks) => {
    return {
        type: PARTIDA_TERMINADA_ACTION,
        payload: {
            nclicks: clicks
        }
    }
}