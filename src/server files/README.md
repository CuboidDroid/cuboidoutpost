# Server Setup Guide

Set up your Forge Server with version:

**`forge-1.16.5-36-2-5.jar`**

You can find out how to do that manually by reading this article on the Minecraft Wiki: [Setting up a Minecraft Forge server](https://minecraft.fandom.com/wiki/Tutorials/Setting_up_a_Minecraft_Forge_server).

If you're using a server host, you will hopefully be able to choose the version and have it set up for you just by picking the above version.

## Recommended Settings for `server.properties`

The following settings in `server.properties` are recommended for servers:

```
level-type=skyblockbuilder\:custom_skyblock
allow-flight=true
difficulty=2
max-tick-time=-1
view-distance=8
```

**The reasoning behind these is as follows:**

* `level-type=skyblockbuilder\:custom_skyblock` - this MUST be set this way to ensure that the overworld is correctly generated with the Cuboid Outpost(s) in it. If you have accidentally already generated a world, either:
	* Stop the server, ensure the `level-type` setting is correct, change the `level-name=world` to something like `level-name=cuboid`, and restart the server, in which case a new `cuboid` folder will be used instead of the previously created `world` folder; 
	
	**...OR...**
	
	* Stop the server, delete the `world` folder, ensure the `level-type` setting is correct, and restart the server, in which case a new `world` folder will be created correctly when the server starts up again.
* `allow-flight=true` - there are things in the pack that let you fly. 
  If false, players might be kicked by the server.
* `difficulty=2` - this equates to normal difficulty, which is what the pack has been designed for.
* `max-tick-time=-1` - this stops the server from crashing when generating large structures, or a large number of chunks (see "Pre-Generating Chunks" section below)
* `view-distance=8` - this controls the distance that the server will generate chunks for from the player position. This is the recommended maximum. For servers expecting a large number of players, or where lag is proving to be a problem, this can be dropped to 6 or 7 if required.

## Pre-Generating Chunks

Since the overworld is basically flat and only contains one kind of structure which is fairly small, you probably don't need to worry about pre-generating chunks for the overworld (especially since individual outposts should be quite some distance apart)

If you do decide to pre-generate chunks, you'll probably want to restrict doing so to the nether, the end, and the final dimension - the Cuboid Overworld (resource id: `cuboidmod:cuboid_overworld`). I'm also going to assume you know what you're doing, or are willing to seek advice elsewhere as it's not something I personally know much about at the time of writing this! (i.e. please **don't ask me for help on this!**)
