// priority: 0

onEvent('recipes', e => {
    // add drop for string mesh and silica dust
    e.custom({
      "type": "exnihilosequentia:sieve",
      "rolls": [
        {
          "chance": 0.35,
          "mesh": "string"
        },
        {
          "chance": 0.25,
          "mesh": "string"
        },
        {
          "chance": 0.15,
          "mesh": "string"
        },
        {
          "chance": 0.1,
          "mesh": "string"
        }
      ],
      "input": {
        "item": "cuboidmod:silica_dust_block"
      },
      "result": {
        "item": "cuboidmod:salt"
      }
    })
  })