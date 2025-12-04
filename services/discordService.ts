// Discord Webhook Service for Legacy Sharing

interface LegacyStory {
    name: string;
    year?: string;
    front: string; // underground, ground, sky
    story: string;
}

export const sendToDiscord = async (data: LegacyStory): Promise<boolean> => {
    // Discord Webhook URL - User needs to replace with their own
    const WEBHOOK_URL = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

    if (!WEBHOOK_URL) {
        console.error('Discord webhook URL not configured');
        return false;
    }

    const frontNames: Record<string, string> = {
        underground: '🕳️ Dưới Đất - Địa Đạo Củ Chi',
        ground: '🌲 Mặt Đất - Đường Trường Sơn',
        sky: '✈️ Trên Không - Điện Biên Phủ trên không'
    };

    const embed = {
        title: '📖 Ký Ức Lịch Sử Mới',
        color: data.front === 'underground' ? 0x5D4037 :
            data.front === 'ground' ? 0x2E7D32 : 0x0277BD,
        fields: [
            {
                name: '👤 Người kể chuyện',
                value: data.name,
                inline: true
            },
            {
                name: '📅 Năm sinh',
                value: data.year || 'Không rõ',
                inline: true
            },
            {
                name: '🎯 Mặt trận',
                value: frontNames[data.front] || data.front,
                inline: false
            },
            {
                name: '📝 Câu chuyện',
                value: data.story.length > 1024
                    ? data.story.substring(0, 1021) + '...'
                    : data.story,
                inline: false
            }
        ],
        thumbnail: {
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/320px-Flag_of_Vietnam.svg.png'
        },
        footer: {
            text: '🇻🇳 Thư Viện Di Sản | roadtothefuture.vn',
            icon_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/32px-Flag_of_Vietnam.svg.png'
        },
        timestamp: new Date().toISOString()
    };

    try {
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                content: '🆕 **Câu chuyện mới từ cộng đồng!**',
                embeds: [embed]
            })
        });

        if (!response.ok) {
            throw new Error(`Discord API error: ${response.status}`);
        }

        return true;
    } catch (error) {
        console.error('Error sending to Discord:', error);
        return false;
    }
};

// Save to localStorage as backup
export const saveStoryLocally = (data: LegacyStory): void => {
    try {
        const stories = JSON.parse(localStorage.getItem('legacyStories') || '[]');
        stories.push({
            ...data,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('legacyStories', JSON.stringify(stories));
    } catch (error) {
        console.error('Error saving locally:', error);
    }
};

// Get total stories count
export const getTotalStories = (): number => {
    try {
        const stories = JSON.parse(localStorage.getItem('legacyStories') || '[]');
        return 12450 + stories.length; // Base count + user submissions
    } catch {
        return 12450;
    }
};
