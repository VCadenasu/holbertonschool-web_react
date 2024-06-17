import { getFullYear,getFooterCopy, getLatestNotification } from "./utils";

describe('Test the file utils.js', () => {
    it('should return the current year', () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()),toBe(currentYear);
    });

    it('should return "Holberton School" when isIndex is "true"', () => {
        expect(getFooterCopy("true")).toBe("Holberton School");
    });

    it('should return "Holberton School main dashboard" when isIndex is "false"', () => {
        expect(getFooterCopy("false")).toBe("Holberton School main dashboard");
    });

    it('should return the latest notification string', () => {
        const notification = '<strong>Urgent requirement</strong> - complete by EOD';
        expect(getLatestNotification()).toBe(notification);
    });
})