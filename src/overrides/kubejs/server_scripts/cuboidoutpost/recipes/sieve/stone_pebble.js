// priority: 0

onEvent('recipes', e => {
  // remove standard drop
  e.remove({id: 'exnihilosequentia:sieve/ens_pebble_stone'})

  // add drops for diamond mesh and dirt
  e.custom({
    "type": "exnihilosequentia:sieve",
    "rolls": [
      {
        "chance": 1.0,
        "mesh": "diamond"
      },
      {
        "chance": 1.0,
        "mesh": "diamond"
      },
      {
        "chance": 0.5,
        "mesh": "diamond"
      },
      {
        "chance": 0.5,
        "mesh": "diamond"
      },
      {
        "chance": 0.1,
        "mesh": "diamond"
      },
      {
        "chance": 0.1,
        "mesh": "diamond"
      }
    ],
    "input": {
      "item": "minecraft:dirt"
    },
    "result": {
      "item": "exnihilosequentia:pebble_stone"
    }
  })
})
