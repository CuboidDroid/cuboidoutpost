// priority: 0

onEvent('recipes', e => {

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
    "copper", "gold", "iron", "lead",  
    "nickel", "silver", "steel", "uranium", 
    "aluminum"
  ]

  immersive_crushed_ores.forEach((name) => {
    immersive_crushed_ore(name)
  })

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
    "osmium", "tin"
  ]

  mekanism_crushed_ores.forEach((name) => {
    mekanism_crushed_ore(name)
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

  const kube_crushed_ore = (name) => {
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
        "item": "kubejs:" + name + "_dust",
        "count": 2
      }
    })
  }

  const kube_crushed_ores = [
    "platinum"
  ]

  kube_crushed_ores.forEach((name) => {
    kube_crushed_ore(name)
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
    "copper", "aluminum", "lead", "silver",
    "nickel", "uranium", "constantan", "electrum",
    "steel", "iron", "gold"
  ]

  immersive_plates.forEach((name) => {
    immersive_plate(name)
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
    "tin", "bronze", "invar", 
    "signalum", "lumium", "enderium"
  ]

  thermal_plates.forEach((name) => {
    thermal_plate(name)
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