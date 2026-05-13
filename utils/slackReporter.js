// helper/slackReporter.js
import axios from 'axios';
import {loadTestResults} from "../helper/testResults.js";

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
const SEND_SLACK_MESSAGE = process.env.SEND_SLACK_MESSAGE === 'true';
const TEST_REPORT_URL = process.env.TEST_REPORT_URL || 'https://fore-toper.github.io/qa-reports/';
const TEST_RUNNER_NAME = process.env.TEST_RUNNER_NAME || 'Unknown';


export async function sendSlackMessage({passed, failed, platformName, deviceName}) {
    if (!SEND_SLACK_MESSAGE || !SLACK_WEBHOOK_URL) {
        console.log("webhook url", SLACK_WEBHOOK_URL);
        console.log('📭 Slack message not sent — feature disabled or URL missing.');
        return;
    }

    const total = passed + failed;
    const statusColor = failed > 0 ? '#e01e5a' : '#2eb67d';
    const statusText = failed > 0 ? '❗️ *Ada yang gagal!*' : '✅ *Semua test berhasil*';
    const now = new Date();
    const formattedDate = now.toLocaleString('id-ID');
    const testResults = loadTestResults();
    const passedList = testResults.passed.length > 0
        ? testResults.passed.map((name, i) => `${i + 1}. ${name}`).join('\n')
        : '-';

    const failedList = testResults.failed.length > 0
        ? testResults.failed.map((name, i) => `${i + 1}. ${name}`).join('\n')
        : '-';
    console.log("tesssss",testResults.passed)
    console.log("tesssss",testResults.failed)
    const blocks = [
        {
            type: 'header',
            text: {
                type: 'plain_text',
                text: '📱 Regression Test Mobile Report',
                emoji: true
            }
        },
        {
            type: 'section',
            fields: [
                {type: 'mrkdwn', text: `*Platform:* ${platformName}`},
                {type: 'mrkdwn', text: `*Device:* ${deviceName}`},
                {type: 'mrkdwn', text: `*Tester:* ${TEST_RUNNER_NAME}`},
                {type: 'mrkdwn', text: `*Execution Date:* ${formattedDate}`}
            ]
        },
        {
            type: 'section',
            fields: [
                {type: 'mrkdwn', text: `*Total:* ${total}`},
            ]
        },
        {
            type: 'section',
            fields: [
                {type: 'mrkdwn', text: `*✅ Passed:* ${passed}`},
                {type: 'mrkdwn', text: `*❌ Failed:* ${failed}`}
            ]
        },
        {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: `*Status:*\n${statusText}`
            }
        },
        {
            type: 'section',
            fields: [
                {
                    type: 'mrkdwn',
                    text: `*✅ Passed Features:*\n${passedList}`
                },
                {
                    type: 'mrkdwn',
                    text: `*❌ Failed Features:*\n${failedList}`
                }
            ]
        },
        TEST_REPORT_URL
            ? {
                type: 'actions',
                elements: [
                    {
                        type: 'button',
                        text: {
                            type: 'plain_text',
                            text: '🔍 Lihat Report',
                            emoji: true
                        },
                        url: TEST_REPORT_URL,
                        style: failed > 0 ? 'danger' : 'primary'
                    }
                ]
            }
            : null
    ].filter(Boolean);

    try {
        await axios.post(SLACK_WEBHOOK_URL, {
            blocks,
            attachments: [
                {
                    color: statusColor,
                    fallback: 'Hasil test Regresi (lihat di Slack)',
                    footer: 'QA Fore Coffee'
                }
            ]
        });
        console.log('✅ Slack Block Kit message sent');
    } catch (err) {
        console.error('❌ Gagal kirim ke Slack:', err.message);
    }
}
