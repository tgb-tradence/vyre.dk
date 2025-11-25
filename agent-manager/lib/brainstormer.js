import { GoogleGenerativeAI } from "@google/generative-ai";

/**
 * Uses Google Gemini to analyze research and generate proposals.
 * @param {Array} researchData - The data gathered from the web.
 */
export async function brainstormIdeas(researchData) {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        console.warn('⚠️ No GEMINI_API_KEY found. Returning mock ideas.');
        return getMockIdeas();
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
    You are the Chief Product Officer for VYRE.DK, a premium e-commerce brand selling high-end hair dryers and beauty tech.
    
    Your goal is to analyze the following research on trends and competitors, and propose 3 concrete development or integration ideas for the VYRE.DK website.
    
    Research Data:
    ${JSON.stringify(researchData, null, 2)}
    
    For each idea, provide:
    1. **Title**: A catchy name for the feature.
    2. **Description**: What it is and how it works.
    3. **Why**: The business value or user benefit.
    4. **Implementation**: A brief technical hint (e.g., "Use Shopify App X" or "React component with Framer Motion").
    
    Format the output as a Markdown report.
  `;

    try {
        console.log('🧠 Brainstorming ideas with Gemini...');
        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error('Error generating ideas:', error.message);
        return getMockIdeas();
    }
}

function getMockIdeas() {
    return `
# 🧠 Daily Inspiration Report (Mock - Gemini Fallback)

## 1. Interactive "Hair Type Quiz"
**Description**: A multi-step quiz where users select their hair type (curly, straight, fine) and get a personalized drying routine using VYRE.
**Why**: Increases engagement and conversion by solving the "will this work for me?" doubt.
**Implementation**: React component with state management, saving results to local storage or Shopify customer metaobject.

## 2. "See it in Action" Video Scroller
**Description**: A TikTok-style vertical video feed on the homepage showing real users using the dryer.
**Why**: Social proof is critical for beauty tech.
**Implementation**: Use a library like \`swiper\` for vertical scrolling videos.

## 3. Dynamic "Frizz Forecast"
**Description**: A widget that shows the local humidity/frizz index for the user's location and suggests using the ionic feature.
**Why**: Personalized utility that brings users back to the site.
**Implementation**: Integration with a Weather API + Geolocation.
  `;
}
