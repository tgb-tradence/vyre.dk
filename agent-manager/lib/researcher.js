import axios from 'axios';

/**
 * Searches the web for the latest trends and inspiration.
 * Uses Tavily API by default, or falls back to a mock response if no key is provided.
 */
export async function searchTrends() {
    const apiKey = process.env.TAVILY_API_KEY;

    if (!apiKey) {
        console.warn('⚠️ No TAVILY_API_KEY found. Using mock data for research.');
        return getMockResearch();
    }

    const queries = [
        "latest e-commerce web design trends 2025",
        "innovative hair dryer technology news",
        "Shopify store conversion rate optimization tips 2025",
        "best minimal dark mode e-commerce sites"
    ];

    try {
        const results = [];
        for (const query of queries) {
            console.log(`🔍 Searching for: "${query}"...`);
            const response = await axios.post('https://api.tavily.com/search', {
                api_key: apiKey,
                query: query,
                search_depth: "basic",
                include_answer: true,
                max_results: 3
            });

            results.push({
                query,
                findings: response.data.results.map(r => ({
                    title: r.title,
                    url: r.url,
                    content: r.content
                }))
            });
        }
        return results;
    } catch (error) {
        console.error('Error searching web:', error.message);
        return getMockResearch();
    }
}

function getMockResearch() {
    return [
        {
            query: "latest e-commerce web design trends 2025",
            findings: [
                {
                    title: "The Rise of Bento Grids in Web Design",
                    url: "https://example.com/bento-grids",
                    content: "Bento grids are becoming popular for showcasing products in a modular way."
                },
                {
                    title: "Micro-interactions and Scrollytelling",
                    url: "https://example.com/scrollytelling",
                    content: "Users engage more with sites that tell a story as they scroll."
                }
            ]
        },
        {
            query: "innovative hair dryer technology news",
            findings: [
                {
                    title: "Ionic vs Ceramic Hair Dryers",
                    url: "https://example.com/hair-tech",
                    content: "New ionic technology reduces frizz by 30% compared to traditional models."
                }
            ]
        }
    ];
}
