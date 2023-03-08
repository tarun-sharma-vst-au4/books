const fs = require("fs");

let moves = [
  {
    move: {
      name: "headbutt",
      url: "https://pokeapi.co/api/v2/move/29/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
    ],
  },
  {
    move: { name: "tackle", url: "https://pokeapi.co/api/v2/move/33/" },
    version_group_details: [
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
    ],
  },
  {
    move: {
      name: "body-slam",
      url: "https://pokeapi.co/api/v2/move/34/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version-group/2/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "take-down",
      url: "https://pokeapi.co/api/v2/move/36/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version-group/2/",
        },
      },
    ],
  },
  {
    move: {
      name: "double-edge",
      url: "https://pokeapi.co/api/v2/move/38/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version-group/2/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
    ],
  },
  {
    move: {
      name: "tail-whip",
      url: "https://pokeapi.co/api/v2/move/39/",
    },
    version_group_details: [
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/",
        },
      },
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version-group/2/",
        },
      },
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 5,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 5,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 5,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 4,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 4,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 4,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 4,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 5,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 5,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 4,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 4,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 4,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 4,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 4,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 3,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: { name: "roar", url: "https://pokeapi.co/api/v2/move/46/" },
    version_group_details: [
      {
        level_learned_at: 21,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/",
        },
      },
      {
        level_learned_at: 21,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version-group/2/",
        },
      },
      {
        level_learned_at: 13,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 13,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 9,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 9,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 9,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 7,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 7,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 7,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 7,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 9,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 9,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 7,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 7,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 7,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 7,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 7,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 28,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "disable",
      url: "https://pokeapi.co/api/v2/move/50/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 4,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: { name: "ember", url: "https://pokeapi.co/api/v2/move/52/" },
    version_group_details: [
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/",
        },
      },
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version-group/2/",
        },
      },
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 7,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
      {
        level_learned_at: 1,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "flamethrower",
      url: "https://pokeapi.co/api/v2/move/53/",
    },
    version_group_details: [
      {
        level_learned_at: 35,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/",
        },
      },
      {
        level_learned_at: 35,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version-group/2/",
        },
      },
      {
        level_learned_at: 31,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 31,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 29,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 29,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 29,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 24,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 24,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 24,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 37,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 29,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 29,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 34,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 34,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 36,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 36,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 36,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 24,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
      {
        level_learned_at: 32,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "fire-spin",
      url: "https://pokeapi.co/api/v2/move/83/",
    },
    version_group_details: [
      {
        level_learned_at: 42,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/",
        },
      },
      {
        level_learned_at: 42,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version-group/2/",
        },
      },
      {
        level_learned_at: 37,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 37,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 41,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 41,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 41,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 34,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 34,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 34,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 14,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 41,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 41,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 12,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 12,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 15,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 15,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 15,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 21,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
      {
        level_learned_at: 40,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: { name: "dig", url: "https://pokeapi.co/api/v2/move/91/" },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version-group/2/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: { name: "toxic", url: "https://pokeapi.co/api/v2/move/92/" },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version-group/2/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
    ],
  },
  {
    move: {
      name: "hypnosis",
      url: "https://pokeapi.co/api/v2/move/95/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "agility",
      url: "https://pokeapi.co/api/v2/move/97/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "quick-attack",
      url: "https://pokeapi.co/api/v2/move/98/",
    },
    version_group_details: [
      {
        level_learned_at: 16,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/",
        },
      },
      {
        level_learned_at: 16,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version-group/2/",
        },
      },
      {
        level_learned_at: 7,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 7,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 13,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 13,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 13,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 11,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 11,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 11,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 11,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 13,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 13,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 10,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 10,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 10,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 10,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 10,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 10,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
      {
        level_learned_at: 8,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: { name: "rage", url: "https://pokeapi.co/api/v2/move/99/" },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version-group/2/",
        },
      },
    ],
  },
  {
    move: { name: "mimic", url: "https://pokeapi.co/api/v2/move/102/" },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version-group/2/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
    ],
  },
  {
    move: {
      name: "double-team",
      url: "https://pokeapi.co/api/v2/move/104/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version-group/2/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
    ],
  },
  {
    move: {
      name: "confuse-ray",
      url: "https://pokeapi.co/api/v2/move/109/",
    },
    version_group_details: [
      {
        level_learned_at: 28,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/",
        },
      },
      {
        level_learned_at: 28,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version-group/2/",
        },
      },
      {
        level_learned_at: 19,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 19,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 21,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 21,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 21,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 17,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 17,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 17,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 17,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 21,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 21,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 15,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 15,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 12,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 12,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 12,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 14,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
      {
        level_learned_at: 20,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "reflect",
      url: "https://pokeapi.co/api/v2/move/115/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version-group/2/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
    ],
  },
  {
    move: { name: "bide", url: "https://pokeapi.co/api/v2/move/117/" },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version-group/2/",
        },
      },
    ],
  },
  {
    move: {
      name: "fire-blast",
      url: "https://pokeapi.co/api/v2/move/126/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version-group/2/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 47,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 47,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 47,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 54,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 42,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 42,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 42,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 42,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 42,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 31,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
      {
        level_learned_at: 56,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: { name: "swift", url: "https://pokeapi.co/api/v2/move/129/" },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version-group/2/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "skull-bash",
      url: "https://pokeapi.co/api/v2/move/130/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version-group/2/",
        },
      },
    ],
  },
  {
    move: { name: "rest", url: "https://pokeapi.co/api/v2/move/156/" },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version-group/2/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "substitute",
      url: "https://pokeapi.co/api/v2/move/164/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "red-blue",
          url: "https://pokeapi.co/api/v2/version-group/1/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "yellow",
          url: "https://pokeapi.co/api/v2/version-group/2/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: { name: "snore", url: "https://pokeapi.co/api/v2/move/173/" },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: { name: "curse", url: "https://pokeapi.co/api/v2/move/174/" },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
    ],
  },
  {
    move: { name: "flail", url: "https://pokeapi.co/api/v2/move/175/" },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: { name: "spite", url: "https://pokeapi.co/api/v2/move/180/" },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 12,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "protect",
      url: "https://pokeapi.co/api/v2/move/182/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "feint-attack",
      url: "https://pokeapi.co/api/v2/move/185/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 20,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 20,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 23,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 23,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 23,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
    ],
  },
  {
    move: {
      name: "endure",
      url: "https://pokeapi.co/api/v2/move/203/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "swagger",
      url: "https://pokeapi.co/api/v2/move/207/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
    ],
  },
  {
    move: {
      name: "attract",
      url: "https://pokeapi.co/api/v2/move/213/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "sleep-talk",
      url: "https://pokeapi.co/api/v2/move/214/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "return",
      url: "https://pokeapi.co/api/v2/move/216/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
    ],
  },
  {
    move: {
      name: "frustration",
      url: "https://pokeapi.co/api/v2/move/218/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
    ],
  },
  {
    move: {
      name: "safeguard",
      url: "https://pokeapi.co/api/v2/move/219/",
    },
    version_group_details: [
      {
        level_learned_at: 25,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 25,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 33,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 33,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 33,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 27,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 27,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 27,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 27,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 33,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 33,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 36,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 36,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 34,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 34,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 34,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 44,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "pain-split",
      url: "https://pokeapi.co/api/v2/move/220/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
    ],
  },
  {
    move: {
      name: "encore",
      url: "https://pokeapi.co/api/v2/move/227/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "iron-tail",
      url: "https://pokeapi.co/api/v2/move/231/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "hidden-power",
      url: "https://pokeapi.co/api/v2/move/237/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
    ],
  },
  {
    move: {
      name: "sunny-day",
      url: "https://pokeapi.co/api/v2/move/241/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "gold-silver",
          url: "https://pokeapi.co/api/v2/version-group/3/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "crystal",
          url: "https://pokeapi.co/api/v2/version-group/4/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "psych-up",
      url: "https://pokeapi.co/api/v2/move/244/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
    ],
  },
  {
    move: {
      name: "heat-wave",
      url: "https://pokeapi.co/api/v2/move/257/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "will-o-wisp",
      url: "https://pokeapi.co/api/v2/move/261/",
    },
    version_group_details: [
      {
        level_learned_at: 17,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 17,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 17,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 14,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 14,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 14,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 31,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 17,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 17,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 26,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 26,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 20,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 20,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 20,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 17,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
      {
        level_learned_at: 24,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "memento",
      url: "https://pokeapi.co/api/v2/move/262/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "facade",
      url: "https://pokeapi.co/api/v2/move/263/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "role-play",
      url: "https://pokeapi.co/api/v2/move/272/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
    ],
  },
  {
    move: {
      name: "imprison",
      url: "https://pokeapi.co/api/v2/move/286/",
    },
    version_group_details: [
      {
        level_learned_at: 25,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 25,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 25,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 21,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 21,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 21,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 21,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 25,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 25,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 18,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 18,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 39,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 39,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 39,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 36,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "grudge",
      url: "https://pokeapi.co/api/v2/move/288/",
    },
    version_group_details: [
      {
        level_learned_at: 37,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 37,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 37,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 41,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 41,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 41,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 47,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 37,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 37,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 44,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 44,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 44,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 44,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 44,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 52,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "secret-power",
      url: "https://pokeapi.co/api/v2/move/290/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
    ],
  },
  {
    move: {
      name: "weather-ball",
      url: "https://pokeapi.co/api/v2/move/311/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "overheat",
      url: "https://pokeapi.co/api/v2/move/315/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "colosseum",
          url: "https://pokeapi.co/api/v2/version-group/12/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "xd",
          url: "https://pokeapi.co/api/v2/version-group/13/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "extrasensory",
      url: "https://pokeapi.co/api/v2/move/326/",
    },
    version_group_details: [
      {
        level_learned_at: 44,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 44,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 44,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 51,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 39,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 39,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 31,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 31,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 31,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 28,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: { name: "howl", url: "https://pokeapi.co/api/v2/move/336/" },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "ruby-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/5/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "emerald",
          url: "https://pokeapi.co/api/v2/version-group/6/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "firered-leafgreen",
          url: "https://pokeapi.co/api/v2/version-group/7/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: { name: "covet", url: "https://pokeapi.co/api/v2/move/343/" },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
    ],
  },
  {
    move: {
      name: "natural-gift",
      url: "https://pokeapi.co/api/v2/move/363/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
    ],
  },
  {
    move: {
      name: "payback",
      url: "https://pokeapi.co/api/v2/move/371/",
    },
    version_group_details: [
      {
        level_learned_at: 31,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 31,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 31,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 34,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 31,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 31,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 18,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 18,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 18,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "power-swap",
      url: "https://pokeapi.co/api/v2/move/384/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "flare-blitz",
      url: "https://pokeapi.co/api/v2/move/394/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "dark-pulse",
      url: "https://pokeapi.co/api/v2/move/399/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "energy-ball",
      url: "https://pokeapi.co/api/v2/move/412/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "zen-headbutt",
      url: "https://pokeapi.co/api/v2/move/428/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "captivate",
      url: "https://pokeapi.co/api/v2/move/445/",
    },
    version_group_details: [
      {
        level_learned_at: 37,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "diamond-pearl",
          url: "https://pokeapi.co/api/v2/version-group/8/",
        },
      },
      {
        level_learned_at: 37,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 37,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
      {
        level_learned_at: 41,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 47,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 47,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 47,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 47,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 47,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
    ],
  },
  {
    move: {
      name: "ominous-wind",
      url: "https://pokeapi.co/api/v2/move/466/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "platinum",
          url: "https://pokeapi.co/api/v2/version-group/9/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "heartgold-soulsilver",
          url: "https://pokeapi.co/api/v2/version-group/10/",
        },
      },
    ],
  },
  {
    move: {
      name: "flame-burst",
      url: "https://pokeapi.co/api/v2/move/481/",
    },
    version_group_details: [
      {
        level_learned_at: 24,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 23,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 23,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 28,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 28,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 28,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
    ],
  },
  {
    move: {
      name: "flame-charge",
      url: "https://pokeapi.co/api/v2/move/488/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "foul-play",
      url: "https://pokeapi.co/api/v2/move/492/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "lets-go-pikachu-lets-go-eevee",
          url: "https://pokeapi.co/api/v2/version-group/19/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: { name: "round", url: "https://pokeapi.co/api/v2/move/496/" },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: { name: "hex", url: "https://pokeapi.co/api/v2/move/506/" },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 28,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 28,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 26,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 26,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 26,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "incinerate",
      url: "https://pokeapi.co/api/v2/move/510/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 16,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "inferno",
      url: "https://pokeapi.co/api/v2/move/517/",
    },
    version_group_details: [
      {
        level_learned_at: 44,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 50,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 50,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 50,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 50,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 50,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 48,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "tail-slap",
      url: "https://pokeapi.co/api/v2/move/541/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "black-2-white-2",
          url: "https://pokeapi.co/api/v2/version-group/14/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "confide",
      url: "https://pokeapi.co/api/v2/move/590/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
    ],
  },
  {
    move: {
      name: "mystical-fire",
      url: "https://pokeapi.co/api/v2/move/595/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "machine",
          url: "https://pokeapi.co/api/v2/move-learn-method/4/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "baby-doll-eyes",
      url: "https://pokeapi.co/api/v2/move/608/",
    },
    version_group_details: [
      {
        level_learned_at: 9,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
      {
        level_learned_at: 9,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "omega-ruby-alpha-sapphire",
          url: "https://pokeapi.co/api/v2/version-group/16/",
        },
      },
      {
        level_learned_at: 9,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "sun-moon",
          url: "https://pokeapi.co/api/v2/version-group/17/",
        },
      },
      {
        level_learned_at: 9,
        move_learn_method: {
          name: "level-up",
          url: "https://pokeapi.co/api/v2/move-learn-method/1/",
        },
        version_group: {
          name: "ultra-sun-ultra-moon",
          url: "https://pokeapi.co/api/v2/version-group/18/",
        },
      },
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "egg",
          url: "https://pokeapi.co/api/v2/move-learn-method/2/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
  {
    move: {
      name: "burning-jealousy",
      url: "https://pokeapi.co/api/v2/move/807/",
    },
    version_group_details: [
      {
        level_learned_at: 0,
        move_learn_method: {
          name: "tutor",
          url: "https://pokeapi.co/api/v2/move-learn-method/3/",
        },
        version_group: {
          name: "sword-shield",
          url: "https://pokeapi.co/api/v2/version-group/20/",
        },
      },
    ],
  },
];

moves?.map((item) => {
  delete item.version_group_details;
});

console.log("moves is ", moves);

const jsonContent = JSON.stringify(moves);

fs.writeFile("./t.json", jsonContent, "utf8", function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});
