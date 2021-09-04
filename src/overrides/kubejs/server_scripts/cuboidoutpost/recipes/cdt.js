// priority: 0

onEvent('recipes', e => {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Cryogenic Dimensional Teleporter recipes
    e.remove({id: 'rftoolsbase:dimensionalshard'})

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Cryogenic Dimensional Teleporter

    e.shaped('cuboidmod:cryogenic_dimensional_teleporter', [
      'NPN',
      'EFE',
      'CBC'
    ], {
      N: 'powah:crystal_niotic',
      P: 'cookingforblockheads:preservation_chamber',
      E: 'thermal:enderium_ingot',
      F: 'cookingforblockheads:fridge',
      C: 'mekanism:ultimate_control_circuit',
      B: 'thermal:machine_chiller'
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Energized End Stone Bricks
    e.custom({
      "type": "powah:energizing",
      "ingredients": [
        {"item": "minecraft:end_stone_bricks"},
        {"tag": "forge:storage_blocks/redstone"},
        {"item": "powah:capacitor_blazing"},
        {"item": "powah:capacitor_blazing"},
        {"item": "ironfurnaces:rainbow_core"}
      ],
      "energy": 1500000,
      "result": {
        "item": "cuboidmod:energized_end_stone_bricks",
        "count": 1
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Energized Nether Bricks
    e.custom({
      "type": "powah:energizing",
      "ingredients": [
        {"item": "minecraft:nether_bricks"},
        {"item": "rftoolsbase:dimensionalshard"},
        {"item": "endergetic:boof_block"},
        {"item": "powah:crystal_niotic"},
        {"item": "powah:crystal_niotic"}
      ],
      "energy": 2000000,
      "result": {
        "item": "cuboidmod:energized_nether_bricks",
        "count": 1
      }
    })
  
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Energized Stone Bricks
  
    e.custom({
      "type": "powah:energizing",
      "ingredients": [
        {"item": "minecraft:stone_bricks"},
        {"tag": "forge:storage_blocks/redstone"},
        {"item": "powah:capacitor_hardened"},
        {"item": "powah:capacitor_hardened"}
      ],
      "energy": 1000000,
      "result": {
        "item": "cuboidmod:energized_stone_bricks",
        "count": 1
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // Energized Thatlduvium
  
    e.custom({
      "type": "powah:energizing",
      "ingredients": [
        {"item": "cuboidmod:thatldu_block"},
        {"item": "appliedenergistics2:singularity"},
        {"item": "extendedcrafting:ultimate_singularity"},
        {"item": "powah:capacitor_nitro"},
        {"item": "industrialforegoing:ether_gas_bucket"},
        {"item": "cuboidmod:dirt_quantum_singularity"}
      ],
      "energy": 20000000,
      "result": {
        "item": "cuboidmod:energized_thatlduvium",
        "count": 1
      }
    })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  
  })