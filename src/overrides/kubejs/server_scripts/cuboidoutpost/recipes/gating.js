// priority: 0

onEvent('recipes', e => {

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // -- IRON --
  
  // remove tinkers smelting recipes that would give
  // early access to iron

  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/axes'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/boots'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/bucket'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/chestplate'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/crossbow'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/helmet'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/horse_armor'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/ingot_1'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/ingot_2'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/ingot_4'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/ingot_5'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/lantern'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/leggings'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/small'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/tripwire'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/weapon'})

  // remove minecraft recipes that would give
  // early access to iron
  e.remove({id: 'minecraft:iron_nugget_from_blasting'})
  e.remove({id: 'minecraft:iron_nugget_from_smelting'})

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // -- GOLD --
  
  // remove tinkers smelting recipes that would give
  // early access to gold

  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/apple'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/boots'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/chestplate'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/clock'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/enchanted_apple'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/helmet'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/horse_armor'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/leggings'})

  // remove minecraft recipes that would give
  // early access to gold
  e.remove({id: 'minecraft:gold_nugget_from_blasting'})
  e.remove({id: 'minecraft:gold_nugget_from_smelting'})

  // remove standard unfired crucible recipe and add one in that
  // requires grout to try enforce progression by using grout
  // which requires gravel, sand and clay
  e.remove({id: 'exnihilosequentia:ens_crucible_unfired'})
  e.custom({
    "type": "minecraft:crafting_shaped",
    "pattern": [
      "c c",
      "c c",
      "cgc"
    ],
    "key": {
      "c": {
        "item": "exnihilosequentia:porcelain_clay"
      },
      "g": {
        "item": "tconstruct:grout"
      }
    },
    "result": {
      "item": "exnihilosequentia:crucible_unfired"
    }
  })

  e.remove({id: 'thermal:machine/pulverizer/pulverizer_granite'})
  e.remove({id: 'thermal:machine/pulverizer/pulverizer_diorite'})
  e.remove({id: 'thermal:machine/pulverizer/pulverizer_andesite'})

})