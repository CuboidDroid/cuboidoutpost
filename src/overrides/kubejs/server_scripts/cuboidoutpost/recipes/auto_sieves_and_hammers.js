// priority: 0

onEvent('recipes', e => {
    // helper functions

    // remove the standard auto sieve recipe
    e.remove({id: 'excompressum:auto_sieve'})

    // add one that consumes a pulverizer and cuboidmod materials instead of iron
    e.custom({
      "type": "minecraft:crafting_shaped",
      "result": {
        "item": "excompressum:auto_sieve"
      },
      "pattern": [
        "WGW",
        "GSG",
        "TPT"
      ],
      "key": {
        "P": {
          "item": "thermal:machine_pulverizer"
        },
        "G": {
          "tag": "forge:glass_panes/colorless"
        },
        "S": {
          "type": "excompressum:nihilo_item",
          "value": "SIEVE"
        },
        "T": {
          "item": "cuboidmod:thatldu_ingot"
        },
        "W": {
          "item": "cuboidmod:wikidium_block"
        }
      },
      "conditions": [
        {
          "type": "excompressum:has_nihilo_item",
          "value": "SIEVE"
        }
      ]
    })

    // remove the standard auto hammer recipe
    e.remove({id: 'excompressum:auto_hammer'})

    // add one that consumes a pulverizer and cuboidmod materials instead of iron
    e.custom({
      "type": "minecraft:crafting_shaped",
      "result": {
        "item": "excompressum:auto_hammer"
      },
      "pattern": [
        "WTW",
        "THT",
        "TPT"
      ],
      "key": {
        "P": {
          "item": "thermal:machine_pulverizer"
        },
        "H": {
          "type": "excompressum:nihilo_item",
          "value": "HAMMER_DIAMOND"
        },
        "T": {
          "item": "cuboidmod:thatldu_ingot"
        },
        "W": {
          "item": "cuboidmod:wikidium_block"
        }
      },
      "conditions": [
        {
          "type": "excompressum:has_nihilo_item",
          "value": "HAMMER_DIAMOND"
        }
      ]
    })

    e.custom({
      "type": "minecraft:crafting_shaped",
      "result": {
        "item": "excompressum:auto_hammer"
      },
      "pattern": [
        "WTW",
        "THT",
        "TPT"
      ],
      "key": {
        "P": {
          "item": "thermal:machine_pulverizer"
        },
        "H": {
          "item": "cuboidmod:thatldu_smasher"
        },
        "T": {
          "item": "cuboidmod:thatldu_ingot"
        },
        "W": {
          "item": "cuboidmod:wikidium_block"
        }
      },
      "conditions": [
        {
          "type": "excompressum:has_nihilo_item",
          "value": "HAMMER_DIAMOND"
        }
      ]
    })

    // remove the iron-based auto compressed hammer recipe
    e.remove({id: 'excompressum:auto_compressed_hammer_without_steel'})

})