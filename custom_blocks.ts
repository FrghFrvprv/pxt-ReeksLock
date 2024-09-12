//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {

    let codes = {
        reeks2missie8: "code20232024"
    }


    //% block="unlockWorld $code"
    export function unlockWorld(code: string) {
        if (code === "code20232024") {
            const duration = 20 * 60 * 60 * 3

            player.execute(`scoreboard players set @a lock_clock ${duration}`)
            player.execute("effect @s clear")
        }
    }

    //% block="unlockWorld $code"
    export function unlockWorldReeks2Missie8(code: string) {
        if (code === codes.reeks2missie8) {
            player.execute("scriptevent cc:auth");
        }
    }
    
}
