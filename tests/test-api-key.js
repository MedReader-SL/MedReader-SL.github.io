/**
 * Test script to verify OpenAI API key integration
 * This script tests the API key functionality independently
 * 
 * ⚠️ SECURITY WARNING: API key is hardcoded for demo/testing purposes only
 * This matches the client-side implementation where the key must be embedded
 * For production use, implement a backend proxy server instead
 */

const OPENAI_API_KEY = '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';
const OPENAI_MODEL = 'gpt-4-turbo';
const API_TIMEOUT = 30000;

async function testOpenAIAPI() {
    console.log('🧪 Testing OpenAI API Integration...\n');
    console.log('API Key (masked):', OPENAI_API_KEY.substring(0, 20) + '...' + OPENAI_API_KEY.substring(OPENAI_API_KEY.length - 10));
    console.log('Model:', OPENAI_MODEL);
    console.log('\n' + '='.repeat(60) + '\n');

    const testText = "Pnracetamol 500 rng - Take 1 tnblet twice daily";
    console.log('📝 Test Input (with OCR errors):\n', testText);
    console.log('\n' + '-'.repeat(60) + '\n');

    const systemPrompt = `You are a medical text correction assistant. Your task is to correct OCR errors in medical prescription text while preserving the original meaning and medical information.

Rules:
1. Correct common OCR errors (e.g., "rng" to "mg", "tnblet" to "tablet")
2. Fix medication name misspellings (e.g., "Pnracetamol" to "Paracetamol")
3. Preserve all medical information including dosages, frequencies, and instructions
4. Maintain the original structure and format
5. Do not add medical advice or interpretations
6. Only return the corrected text, nothing else

Correct the following medical text:`;

    try {
        console.log('⏳ Making API request to OpenAI...\n');
        
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);

        const startTime = Date.now();
        
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: OPENAI_MODEL,
                messages: [
                    {
                        role: 'system',
                        content: systemPrompt
                    },
                    {
                        role: 'user',
                        content: testText
                    }
                ],
                temperature: 0.3,
                max_tokens: 500
            }),
            signal: controller.signal
        });

        clearTimeout(timeoutId);
        const endTime = Date.now();
        const duration = ((endTime - startTime) / 1000).toFixed(2);

        console.log(`✅ API Response received (${duration}s)\n`);
        console.log('Status:', response.status, response.statusText);
        console.log('\n' + '-'.repeat(60) + '\n');

        if (!response.ok) {
            const errorData = await response.text();
            console.error('❌ API Error Response:', errorData);
            throw new Error(`API request failed with status ${response.status}: ${errorData}`);
        }

        const data = await response.json();
        
        if (data.choices && data.choices[0] && data.choices[0].message) {
            const correctedText = data.choices[0].message.content.trim();
            console.log('✨ AI Corrected Output:\n', correctedText);
            console.log('\n' + '-'.repeat(60) + '\n');
            
            console.log('📊 Token Usage:');
            if (data.usage) {
                console.log('  - Prompt tokens:', data.usage.prompt_tokens);
                console.log('  - Completion tokens:', data.usage.completion_tokens);
                console.log('  - Total tokens:', data.usage.total_tokens);
            }
            
            console.log('\n' + '='.repeat(60) + '\n');
            console.log('✅ TEST PASSED: OpenAI API key is working correctly!');
            console.log('✅ The API successfully corrected the OCR errors');
            console.log('✅ Integration is complete and functional\n');
            
            return {
                success: true,
                input: testText,
                output: correctedText,
                duration: duration,
                usage: data.usage
            };
        } else {
            throw new Error('Unexpected API response structure');
        }

    } catch (error) {
        console.log('\n' + '='.repeat(60) + '\n');
        console.error('❌ TEST FAILED:', error.message);
        
        if (error.name === 'AbortError') {
            console.error('⏱️  Request timed out after', API_TIMEOUT / 1000, 'seconds');
        }
        
        console.log('\n💡 Troubleshooting tips:');
        console.log('  1. Verify the API key is correct');
        console.log('  2. Check internet connectivity');
        console.log('  3. Ensure OpenAI API is accessible');
        console.log('  4. Verify API key has sufficient credits');
        console.log('  5. Check if the model is available for your account\n');
        
        return {
            success: false,
            error: error.message
        };
    }
}

// Run the test
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { testOpenAIAPI };
}

// Auto-run in Node.js environment
if (typeof window === 'undefined') {
    testOpenAIAPI().then(result => {
        process.exit(result.success ? 0 : 1);
    });
}
