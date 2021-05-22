# LandTech Rota

Rota is a Slack app + bot I wrote for internal company use to manage team rotations. This app was built with the [Bolt JavaScript Slack app framework](https://github.com/slackapi/bolt).

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

## Tips

Rota does **not** handle _message scheduling_ or _automate_ rotation assignments. But don't worry — since `@rota` is a bot and not slash commands, it plays well with others! Here are some ways you can use the `@rota` bot in conjunction with other Slack features / third party apps.

### Rotation Reminders

You can set a recurring reminder with Slack's `/remind` slash command to remind a rotation's on-call user to assign the next person in the rotation at some regular interval. This must be done at the channel level. You must ensure that Rota has been added to the channel you're setting the reminder in, also. For example:

_(With Rota present in a #channel)_
```
/remind [#channel] "@rota "[rotation]" assign the next user in the rotation using `@rota "[rotation]" assign next"` every Monday at 9am
```

Use quotes as shown in the snippet above to avoid unexpected behavior.

**Note:** You _can't_ directly remind the `@rota` _bot_ to do anything. For instance, `/remind @rota "[rotation]" some message in 5 minutes` will _not_ work because it will try to send a direct message to the _bot user_, not a rotation's _assigned human user_. Slack cannot do this, and it will tell you so. When using `/remind`, you need to set the reminder _in a channel_. Reminders come from Slackbot, and Rota and Slackbot can't talk to each other.

**Note:** Keep in mind that if you use `/remind`, the message will come from `@Slackbot`, _not from your username_. If you need the person on rotation to know the message was from _you_, either include your username in the reminder when you set it up, or use a third-party app that delivers the message later from your account.


