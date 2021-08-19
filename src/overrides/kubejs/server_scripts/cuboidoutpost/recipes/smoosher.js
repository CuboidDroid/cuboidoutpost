// priority: 0

onEvent('recipes', e => {

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  const mekanism_crushed_ore = (name) => {
    e.custom({
      "type": "minecraft:crafting_shapeless",
      "ingredients": [
        {
          "item": "cuboidmod:smoosher"
        },
        {
          "tag": "forge:ores/" + name
        }
      ],
      "result": {
        "item": "mekanism:dust_" + name,
        "count": 2
      }
    })
  }

  const mekanism_crushed_ores = [
    "iron", "gold", "copper", "osmium", 
    "tin", "lead", "uranium"
  ]

  mekanism_crushed_ores.forEach((name) => {
    mekanism_crushed_ore(name)
  })

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  const thermal_crushed_ore = (name) => {
    e.custom({
      "type": "minecraft:crafting_shapeless",
      "ingredients": [
        {
          "item": "cuboidmod:smoosher"
        },
        {
          "tag": "forge:ores/" + name
        }
      ],
      "result": {
        "item": "thermal:" + name + "_dust",
        "count": 2
      }
    })
  }

  const thermal_crushed_ores = [
    "silver", "nickel"
  ]

  thermal_crushed_ores.forEach((name) => {
    thermal_crushed_ore(name)
  })

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  const immersive_crushed_ore = (name) => {
    e.custom({
      "type": "minecraft:crafting_shapeless",
      "ingredients": [
        {
          "item": "cuboidmod:smoosher"
        },
        {
          "tag": "forge:ores/" + name
        }
      ],
      "result": {
        "item": "immersiveengineering:dust_" + name,
        "count": 2
      }
    })
  }

  const immersive_crushed_ores = [
    "aluminum"
  ]

  immersive_crushed_ores.forEach((name) => {
    immersive_crushed_ore(name)
  })

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  const other_crushed_ore = (name) => {
    e.custom({
      "type": "minecraft:crafting_shapeless",
      "ingredients": [
        {
          "item": "cuboidmod:smoosher"
        },
        {
          "tag": "forge:ores/" + name
        }
      ],
      "result": {
        "item": "cuboidmod:" + name + "_dust",
        "count": 2
      }
    })
  }

  const other_crushed_ores = [
    "zinc", "cobalt"
  ]

  other_crushed_ores.forEach((name) => {
    other_crushed_ore(name)
  })

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  const thermal_plate = (name) => {
    e.custom({
      "type": "minecraft:crafting_shapeless",
      "ingredients": [
        {
          "item": "cuboidmod:smoosher"
        },
        {
          "tag": "forge:ingots/" + name
        }
      ],
      "result": {
        "item": "thermal:" + name + "_plate",
        "count": 1
      }
    })
  }

  const thermal_plates = [
    "iron", "gold", "copper", "tin", "lead", "silver", "nickel", "bronze", 
    "electrum", "invar", "constantan", "signalum", "lumium", "enderium"
  ]

  thermal_plates.forEach((name) => {
    thermal_plate(name)
  })

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  const immersive_plate = (name) => {
    e.custom({
      "type": "minecraft:crafting_shapeless",
      "ingredients": [
        {
          "item": "cuboidmod:smoosher"
        },
        {
          "tag": "forge:ingots/" + name
        }
      ],
      "result": {
        "item": "immersiveengineering:plate_" + name,
        "count": 1
      }
    })
  }

  const immersive_plates = [
    "aluminum", "uranium", "steel"
  ]

  immersive_plates.forEach((name) => {
    immersive_plate(name)
  })

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  const create_sheet = (name) => {
    e.custom({
      "type": "minecraft:crafting_shapeless",
      "ingredients": [
        {
          "item": "cuboidmod:smoosher"
        },
        {
          "tag": "forge:ingots/" + name
        }
      ],
      "result": {
        "item": "create:" + name + "_sheet",
        "count": 1
      }
    })
  }

  const create_sheets = [
    "brass"
  ]

  create_sheets.forEach((name) => {
    create_sheet(name)
  })

  e.custom({
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
      {
        "item": "cuboidmod:smoosher"
      },
      {
        "tag": "forge:gems/lapis"
      }
    ],
    "result": {
      "item": "create:lapis_sheet",
      "count": 1
    }
  })

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

})