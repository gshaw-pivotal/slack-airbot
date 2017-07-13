# Airbot Slackbot #

A slackbot that you can ask for the current air quality (based on a series of different index measures) at a user specified location. This slackbot is built using Node.js.

## Getting Started ##

```
    git clone https://github.com/gshaw-pivotal/slack-airbot.git
```

## Integration with Slack ##

Bots and apps need to be given permission to integrate with slack. Thus you need to obtain a Slack API token for the bot.

Once a slack api token is obtained, it will need to be provided to the bot as an environment variable named 'token'.

When obtaining the API token you also have to give the bot a name that will be used to address it within slack. We used 'airbot', but you may use whatever name you like.

After the slackbot is running / deployed it will not have access to any channels until invited. Bots are invited just the same as any other slack user.

## Integration with AQICN ##

This bot uses the [AQICN API](https://http://aqicn.org/json-api/doc/) to get weather data. In order for this bot to work you will need a AQICN Data Platform API token/key.

Once you have said token/key, you will need to provide it to the bot as an environment variable named 'aqicnKey'.

## Starting airbot Locally ##

Airbot can be started locally with the following command executed from the root of this repo.

```
    aqicnKey=AQICN_API_TOKEN token=SLACK_API_TOKEN node src/airqual_bot.js
```

## Using airbot ##

After being invited into a slack channel, the bot can be interacted with the following commands:

1. '@airbot help' results in the bot responding with instructions on how to use it.
2. '@airbot uptime' results in the bot responding with how long it has been online.
3. '@airbot qual [location]' results in the bot responding with the latest air quality report for the provided location (based on AQICN's interpretation of said location). This is a 'rich' response that utilises Slack's attachment option and includes a color notification with each measure.
4. '@airbot qual-text [location]' like the previous command, expect the response is a simpler plain text response with the latest air quality report for the provided location.

Only one location per message is supported, as the bot takes the location to be everything after the command (eg. after qual or qual-text), hence the message '@airbot qual new york city' is interpreted to be a request for the air quality in New York City.

## Notes ##

A manifest file is present to support deployments to cloudfoundry.
