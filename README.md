# LandTech Rota

This app was built with the [Bolt JavaScript Slack app framework](https://github.com/slackapi/bolt).

## Commands

* `@rota new "[new-rotation-name]" [description]` creates a new rotation; rotation names can contain _only_ lowercase letters, numbers, and hyphens. Technically the description is optional, but everyone will benefit if you provide one.
* `@rota delete "[rotation]"` deletes the rotation completely (use with caution!).
* `@rota "[rotation]" description [new description]` updates the description for a rotation.
* `@rota "[rotation]" staff [@user1 @user2 @user3]` adds staff to a rotation; a space-separated list of usernames is expected as a parameter with usernames in the order of desired rotation (rotations with a staff list can be assigned using `assign next`).
* `@rota "[rotation]" reset staff` clears a rotation's staff list (use with caution!).
* `@rota "[rotation]" assign [@user] [optional handoff message]` assigns someone to the rotation and, optionally, sends a DM to them with handoff information.
* `@rota "[rotation]" assign next [optional handoff message]` assigns the next person in the staff list to a rotation and, optionally, sends a DM to them with handoff information.
* `@rota "[rotation]" unassign` removes the current user assignment for a rotation.
* `@rota "[rotation]" who` reports the name of a rotation's assigned user.
* `@rota "[rotation]" about` displays the rotation's description and on-call user publicly, and displays the staff list only to the user who issued the commend (this is to prevent excessive notifications for everyone on staff).
* `@rota "[rotation]" [message]` sends a direct message to the on-call user for the rotation, notifying them that your message needs attention.
* `@rota list` displays a list of all currently known rotations.
* `@rota help` shows how to use the bot.

## To-Do

- Clean up the code a bit
- Fix the `App Home` link in the `@rota help` message - currently its not pulling the correct link
- Clean up the Intro text and the `@rota help` messages, maybe less info is better?  