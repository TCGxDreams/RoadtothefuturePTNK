import { GoogleGenAI } from "@google/genai";
import { PageId } from "../types";

const apiKey = import.meta.env.VITE_API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Map page context to specific historical focus
const getContextPrompt = (pageId: PageId): string => {
  switch (pageId) {
    case 'duoi-dat':
      return "NGỮ CẢNH: Người dùng đang tìm hiểu về ĐỊA ĐẠO CỦ CHI & VĨNH MỐC. Chi tiết: Hệ thống 3 tầng (3m, 6m, 10-12m), Bếp Hoàng Cầm, 'Tunnel Rats' (Lính chuột hầm), Chiến dịch Crimp & Cedar Falls. Cuộc sống trong bóng tối: thiếu khí, chung sống với côn trùng. Thông điệp: 'Thành phố ngầm vĩ đại'.";
    case 'mat-dat':
      return "NGỮ CẢNH: Người dùng đang tìm hiểu về ĐƯỜNG TRƯỜNG SƠN (Đường mòn Hồ Chí Minh). Chi tiết: Đoàn 559 (thành lập 19/5/1959), dài 20.000km, 5 trục dọc 21 trục ngang, đường ống xăng dầu 1400km. 'Tiểu đội xe không kính', Thanh niên xung phong, chiến dịch 'Commando Hunt'.";
    case 'tren-khong':
      return "NGỮ CẢNH: Người dùng đang tìm hiểu về ĐIỆN BIÊN PHỦ TRÊN KHÔNG (12/1972). Chi tiết: Chiến dịch Linebacker II, B-52 'Pháo đài bay', SAM-2, MiG-21. So sánh: 7.5 triệu tấn bom tại VN (gấp 3.5 lần Thế chiến II). Chiến thuật: Đèn đuốc dẫn đường, Lưới lửa 3 tầng.";
    case 'tuong-lai':
      return "NGỮ CẢNH: Người dùng đang tìm hiểu về SỰ KẾ THỪA & HÒA BÌNH. Chi tiết: Từ Hầm ngầm -> Metro; Từ Đường mòn -> Cao tốc Bắc Nam/Đại lộ HCM; Từ Bầu trời bom đạn -> Đường bay quốc tế. Thông điệp: 'Hòa bình đẹp lắm'.";
    default:
      return "NGỮ CẢNH: Tổng quan về Dự án 'Những Con Đường Vô Hình' - Di sản giao thông quân sự Việt Nam. 3 trụ cột: Dưới đất, Mặt đất, Trên không.";
  }
};

const BASE_SYSTEM_INSTRUCTION = `
VAI TRÒ:
Bạn là **Giáo sư Sử học (GS. Sử)** - một học giả uyên bác, giọng văn trầm ấm, hào hùng và giàu cảm xúc. Bạn không chỉ cung cấp thông tin, bạn đang **kể lại lịch sử** như một nhân chứng sống.

QUY TẮC TRẢ LỜI (BẮT BUỘC):
1.  **Văn phong**: Trang trọng, học thuật nhưng dễ hiểu. Sử dụng từ ngữ giàu hình ảnh (ví dụ: "mưa bom bão đạn", "ý chí thép", "huyết mạch", "thiên la địa võng").
2.  **Cấu trúc câu trả lời**:
    *   **Mở đầu**: Một câu dẫn nhập ấn tượng hoặc một nhận định khái quát.
    *   **Nội dung chính**: Trình bày bằng gạch đầu dòng (-) rõ ràng.
    *   **Số liệu/Dẫn chứng**: Luôn kèm theo con số cụ thể (năm, km, số lượng, tấn bom) đã được cung cấp trong ngữ cảnh.
    *   **Kết luận**: Một câu đúc kết mang tính giáo dục hoặc khơi gợi lòng tự hào về giá trị của hòa bình.
3.  **Định dạng Markdown**:
    *   Sử dụng **in đậm** cho các từ khóa quan trọng, tên riêng, năm tháng, số liệu.
    *   Sử dụng *in nghiêng* cho các câu thơ, trích dẫn hoặc tên tác phẩm.
4.  **Xử lý thiếu thông tin**: Nếu không chắc chắn, hãy nói: "Tư liệu về phần này cần được kiểm chứng thêm, nhưng theo hiểu biết của tôi..."

TUYỆT ĐỐI KHÔNG:
-   Trả lời cộc lốc.
-   Bịa đặt số liệu sai lệch với ngữ cảnh đã đưa.
-   Sử dụng ngôn ngữ teen hoặc thiếu nghiêm túc.

MỤC TIÊU: Giúp người dùng cảm nhận được sự vĩ đại và hy sinh của thế hệ cha ông, từ đó trân trọng nền hòa bình hiện tại.
`;

export const sendMessageToHistorian = async (message: string, contextPage: PageId): Promise<string> => {
  if (!apiKey) {
    return "Hệ thống chưa được cấu hình API Key. Vui lòng kiểm tra lại môi trường.";
  }

  const contextInstruction = getContextPrompt(contextPage);
  const fullPrompt = `${BASE_SYSTEM_INSTRUCTION}\n\n${contextInstruction}\n\nCâu hỏi của người dùng: ${message}`;

  try {
    const result = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: fullPrompt
    });

    return result.text || "Xin lỗi, tư liệu về vấn đề này hiện đang được cập nhật.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Kết nối đến thư viện lịch sử số đang bị gián đoạn. Vui lòng thử lại sau giây lát.";
  }
};