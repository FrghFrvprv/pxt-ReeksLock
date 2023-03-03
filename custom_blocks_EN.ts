//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmosEN {
    //% block="unlockWorld $code"
    export function unlockWorld(code: string) {
        if (code === "code123") {
            const duration = 20 * 60 * 60 * 3

            player.execute(`scoreboard players set @a lock_clock ${duration}`)
            player.execute("effect @s clear")
        }
    }
}