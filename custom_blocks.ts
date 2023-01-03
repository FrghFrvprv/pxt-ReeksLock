//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block="unlockWorld code:$code"
    //% block.loc.nl="ontgrendelWereld $code"
    export function unlockWorld(code: string) {
        if (code === "code123") {
            const duration = 20*60*90

            player.execute(`scoreboard players set @a lock_clock ${duration}`)
            player.execute("effect @s clear");
        }
    }
}