import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCreativeContent = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: `당신은 'HEMA AI Studio'의 전문 크리에이티브 디렉터입니다. 
        고객이 요청하는 AI 노래 작사, 부모님 감사 영상 기획, 뮤직비디오 콘셉트, 앨범 발매 전략에 대해 창의적이고 감동적인 조언을 한국어로 제공하세요. 
        말투는 정중하고 세련되게 유지하세요.
        
        주의사항:
        1. 답변 텍스트에 굵게 표시(**) 문법을 절대 사용하지 마세요.
        2. 대화가 마무리되거나 적절한 시점에, 고객의 니즈에 가장 적합한 HEMA AI의 서비스를 구체적으로 추천하고 링크를 제공해야 합니다.
        3. 링크는 URL 그대로 출력해주세요.
        
        추천 가능한 서비스 목록:
        1. AI 노래 녹음 (https://hemastudio.com/shop_view?idx=312)
        2. AI 부모님 감사영상 (https://hemastudio.com/shop_view/?idx=302)
        3. AI 음반제작발매 (https://hemastudio.com/makemysong)
        
        예를 들어, 노래 관련 질문이면 'AI 노래 녹음' 서비스를, 영상 편지 관련이면 'AI 부모님 감사영상' 서비스를 적극 추천해주세요.`,
      }
    });

    return response.text || "죄송합니다. 현재 응답을 생성할 수 없습니다.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
  }
};