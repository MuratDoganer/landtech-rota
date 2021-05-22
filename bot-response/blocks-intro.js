/*------------------
   BLOCKS: INTRO
------------------*/
const introBlocks = [
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": ":wave: Hi there! I am your friendly *Rotation Bot* :arrows_counterclockwise: :robot_face: My job is to help the Land Tech team to track many different rotations, from who looks after Tech Support, to the editor of the _Engineering Weekly_. I am easy to use, and still in my early stages, so if you have any feedback, please let my creator, @Murat, know"
      },
      "accessory": {
        "type": "image",
        "image_url": "https://landtech-it-bucket.s3.eu-west-2.amazonaws.com/512x512.png",
        "alt_text": "LandTech Rota Bot"
      }
  },
  {
    "type": "section",
    "text": {
      "type": "mrkdwn",
      "text": `:speech_balloon: *If you need help with a rotation, post a message to any channel I've been added to and mention `@rota "rotation-name" [message]`*. The person who is on duty will be notified and they can help!`
    }
  }
];

module.exports = introBlocks;