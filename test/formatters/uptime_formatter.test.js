require('../../src/formatters/uptime_formatter.js');

describe("Uptime formatter", function () {
    describe("given a value", function () {
        it("formats its uptime for display (seconds)", function() {
            expect(formatUptime(30)).toBe('30 seconds');
        });

        it("formats its uptime for display (minutes)", function() {
            expect(formatUptime(90)).toBe('1.5 minutes');
        });

        it("formats its uptime for display (hours)", function() {
            expect(formatUptime(4320)).toBe('1.2 hours');
        });
    });
});