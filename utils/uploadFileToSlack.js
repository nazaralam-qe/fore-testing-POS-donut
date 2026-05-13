import fs from 'fs';
import axios from 'axios';

export async function uploadFileToSlack(filePath, fileName) {
    const token = process.env.SLACK_BOT_TOKEN;
    const channel = process.env.SLACK_CHANNEL_ID;

    if (!fs.existsSync(filePath)) {
        console.error(`❌ File not found: ${filePath}`);
        return;
    }

    try {
        const response = await axios.post('https://slack.com/api/files.upload', null, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
            params: {
                channels: channel,
                filename: fileName,
                title: fileName,
            },
            data: {
                file: fs.createReadStream(filePath)
            },
            maxBodyLength: Infinity
        });

        if (!response.data.ok) {
            console.error('❌ Slack upload failed:', response.data);
        } else {
            console.log('✅ Slack file uploaded:', fileName);
        }
    } catch (error) {
        console.error('❌ Error uploading to Slack:', error);
    }
}