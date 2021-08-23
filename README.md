# LandTech Rota

This app was built with the [Bolt JavaScript Slack app framework](https://github.com/slackapi/bolt).

## Commands

* `@LandTechRota new "[new-rotation-name]" [description]` creates a new rotation; rotation names can contain _only_ lowercase letters, numbers, and hyphens. Technically the description is optional, but everyone will benefit if you provide one.
* `@LandTechRota delete "[rotation]"` deletes the rotation completely (use with caution!).
* `@LandTechRota "[rotation]" description [new description]` updates the description for a rotation.
* `@LandTechRota "[rotation]" staff [@user1 @user2 @user3]` adds staff to a rotation; a space-separated list of usernames is expected as a parameter with usernames in the order of desired rotation (rotations with a staff list can be assigned using `assign next`).
* `@LandTechRota "[rotation]" reset staff` clears a rotation's staff list (use with caution!).
* `@LandTechRota "[rotation]" assign [@user] [optional handoff message]` assigns someone to the rotation and, optionally, sends a DM to them with handoff information.
* `@LandTechRota "[rotation]" assign next [optional handoff message]` assigns the next person in the staff list to a rotation and, optionally, sends a DM to them with handoff information.
* `@LandTechRota "[rotation]" unassign` removes the current user assignment for a rotation.
* `@LandTechRota "[rotation]" who` reports the name of a rotation's assigned user.
* `@LandTechRota "[rotation]" about` displays the rotation's description and on-call user publicly, and displays the staff list only to the user who issued the commend (this is to prevent excessive notifications for everyone on staff).
* `@LandTechRota "[rotation]" [message]` sends a direct message to the on-call user for the rotation, notifying them that your message needs attention.
* `@LandTechRota list` displays a list of all currently known rotations.
* `@LandTechRota help` shows how to use the bot.

## To-Do

- Clean up the code a bit
- Fix the `App Home` link in the `@LandTechRota help` message - currently its not pulling the correct link
- Clean up the Intro text and the `@LandTechRota help` messages, maybe less info is better?  