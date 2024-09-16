//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {

    let codes = {
        reeks1missie1: "CreeperExplodesNearHouse",
        reeks1missie2: "DiamondPickaxeMinesStone",
        reeks1missie3: "EnderDragonFlyingHigh",
        reeks1missie4: "ZombieAttacksAtNight",
        reeks1missie5: "SkeletonShootsArrowsFast",
        reeks1missie6: "NetherPortalGlowsBright",
        reeks1missie7: "SteveCraftsIronSword",
        reeks1missie8: "VillagerTradesEmeraldsDaily",

        reeks2missie1: "RedstonePowersMachines",
        reeks2missie2: "CreeperStalksFromBehind",
        reeks2missie3: "EnchantedBowShootsTrue",
        reeks2missie4: "EndermanTeleportsAwaySilently",
        reeks2missie5: "PotionBrewsInCauldron",
        reeks2missie6: "PiglinsGuardNetherFortress",
        reeks2missie7: "WolvesHuntWithSteve",
        reeks2missie8: "AxolotlSwimsUnderwater",
        reeks2missie9: "LlamaSpitsOnEnemies"

    }

    //% block="unlockWorld $code"
    export function unlockWorldReeks1Missie1(code: string) {
        if (code === codes.reeks1missie1) {
            const duration = 20 * 60 * 60 * 3

            player.execute(`scoreboard players set @a lock_clock ${duration}`)
            player.execute("effect @s clear")
        }
    }
    
    //% block="unlockWorld $code"
    export function unlockWorldReeks1Missie2(code: string) {
        if (code === codes.reeks1missie2) {
            const duration = 20 * 60 * 60 * 3

            player.execute(`scoreboard players set @a lock_clock ${duration}`)
            player.execute("effect @s clear")
        }
    }

    //% block="unlockWorld $code"
    export function unlockWorldReeks1Missie3(code: string) {
        if (code === codes.reeks1missie3) {
            const duration = 20 * 60 * 60 * 3

            player.execute(`scoreboard players set @a lock_clock ${duration}`)
            player.execute("effect @s clear")
        }
    }

    //% block="unlockWorld $code"
    export function unlockWorldReeks1Missie4(code: string) {
        if (code === codes.reeks1missie4) {
            const duration = 20 * 60 * 60 * 3

            player.execute(`scoreboard players set @a lock_clock ${duration}`)
            player.execute("effect @s clear")
        }
    }

    //% block="unlockWorld $code"
    export function unlockWorldReeks1Missie5(code: string) {
        if (code === codes.reeks1missie5) {
            const duration = 20 * 60 * 60 * 3

            player.execute(`scoreboard players set @a lock_clock ${duration}`)
            player.execute("effect @s clear")
        }
    }

    //% block="unlockWorld $code"
    export function unlockWorldReeks1Missie6(code: string) {
        if (code === codes.reeks1missie6) {
            const duration = 20 * 60 * 60 * 3

            player.execute(`scoreboard players set @a lock_clock ${duration}`)
            player.execute("effect @s clear")
        }
    }

    //% block="unlockWorld $code"
    export function unlockWorldReeks1Missie7(code: string) {
        if (code === codes.reeks1missie7) {
            const duration = 20 * 60 * 60 * 3

            player.execute(`scoreboard players set @a lock_clock ${duration}`)
            player.execute("effect @s clear")
        }
    }

    //% block="unlockWorld $code"
    export function unlockWorldReeks1Missie8(code: string) {
        if (code === codes.reeks1missie8) {
            const duration = 20 * 60 * 60 * 3

            player.execute(`scoreboard players set @a lock_clock ${duration}`)
            player.execute("effect @s clear")
        }
    }



    //% block="unlockWorld $code"
    export function unlockWorldReeks2Missie1(code: string) {
        if (code === codes.reeks2missie1) {
            player.execute("scriptevent cc:auth");
        }
    }
        
    //% block="unlockWorld $code"
    export function unlockWorldReeks2Missie2(code: string) {
        if (code === codes.reeks2missie2) {
            player.execute("scriptevent cc:auth");
        }
    }
    
    //% block="unlockWorld $code"
    export function unlockWorldReeks2Missie3(code: string) {
        if (code === codes.reeks2missie3) {
            player.execute("scriptevent cc:auth");
        }
    }
    
    //% block="unlockWorld $code"
    export function unlockWorldReeks2Missie4(code: string) {
        if (code === codes.reeks2missie4) {
            player.execute("scriptevent cc:auth");
        }
    }

    //% block="unlockWorld $code"
    export function unlockWorldReeks2Missie5(code: string) {
        if (code === codes.reeks2missie5) {
            player.execute("scriptevent cc:auth");
        }
    }

    //% block="unlockWorld $code"
    export function unlockWorldReeks2Missie6(code: string) {
        if (code === codes.reeks2missie6) {
            player.execute("scriptevent cc:auth");
        }
    }

    //% block="unlockWorld $code"
    export function unlockWorldReeks2Missie7(code: string) {
        if (code === codes.reeks2missie7) {
            player.execute("scriptevent cc:auth");
        }
    }

    //% block="unlockWorld $code"
    export function unlockWorldReeks2Missie8(code: string) {
        if (code === codes.reeks2missie8) {
            player.execute("scriptevent cc:auth");
        }
    }

    //% block="unlockWorld $code"
    export function unlockWorldReeks2Missie9(code: string) {
        if (code === codes.reeks2missie9) {
            player.execute("scriptevent cc:auth");
        }
    }
}
