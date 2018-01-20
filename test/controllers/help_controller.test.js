const Botmock = require('botkit-mock')
const helpController = require('../../src/controllers/help_controller.js')

describe('help controller test', () => {

    beforeEach(() => {
        this.controller = Botmock({})
        this.bot = this.controller.spawn({type: 'slack'})

        helpController(this.controller)
    })

    describe('upon receiving a direct message with help keyword', () => {
        it('responds with a message on how to use this bot', () => {
            return this.bot.usersInput(
                [
                    {
                        type: 'direct_message',
                        user: 'aUserId',
                        channel: 'aChannel',
                        messages: [
                            {
                                text: 'help',
                                isAssertion: true
                            }
                        ]
                    }
                ]
            ).then((message) => {
                return expect(message.text).toContain('You can utilise me like so:')
            })
        })
    })

    describe('upon receiving a direct mention with help keyword', () => {
        it('responds with a message on how to use this bot', () => {
            return this.bot.usersInput(
                [
                    {
                        type: 'direct_mention',
                        user: 'aUserId',
                        channel: 'aChannel',
                        messages: [
                            {
                                text: 'help',
                                isAssertion: true
                            }
                        ]
                    }
                ]
            ).then((message) => {
                return expect(message.text).toContain('You can utilise me like so:')
            })
        })
    })

    describe('upon receiving a mention with help keyword', () => {
        it('responds with a message on how to use this bot', () => {
            return this.bot.usersInput(
                [
                    {
                        type: 'mention',
                        user: 'aUserId',
                        channel: 'aChannel',
                        messages: [
                            {
                                text: 'help',
                                isAssertion: true
                            }
                        ]
                    }
                ]
            ).then((message) => {
                return expect(message.text).toContain('You can utilise me like so:')
            })
        })
    })
})