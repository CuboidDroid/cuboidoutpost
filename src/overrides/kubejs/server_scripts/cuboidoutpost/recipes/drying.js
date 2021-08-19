// priority: 0

onEvent('recipes', e => {

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    e.custom({
        "type": "cuboidmod:drying",
        "ingredient": {
          "item": "kubejs:albumen"
        },
        "result": {
          "item": "minecraft:egg",
          "count": 1
        },
        "work_ticks": 400
      })

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  
  })