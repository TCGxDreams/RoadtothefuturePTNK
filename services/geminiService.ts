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

export type VisionType = 'metro' | 'highway' | 'aviation';

export const generateVisionMeaning = async (visionType: VisionType): Promise<string> => {
  if (!apiKey) {
    return "Hệ thống chưa được cấu hình API Key. Vui lòng kiểm tra lại môi trường.";
  }

  const visionPrompts: Record<VisionType, string> = {
    metro: `
NGỮ CẢNH: Lý giải ý nghĩa chuyển đổi từ "Địa Đạo Củ Chi/Vĩnh Mốc" sang "Hệ thống Metro hiện đại"

THÔNG TIN LỊCH SỬ:
- Địa đạo Củ Chi: 250km đường hầm 3 tầng (3m, 6m, 12m sâu), là "thành phố ngầm" trong chiến tranh
- Địa đạo Vĩnh Mốc: Hệ thống hầm trú ẩn ven biển, nơi sinh hoạt của dân thường trong bom đạn
- Tinh thần: Sống trong bóng tối, thiếu oxy, nhưng không khuất phục

HIỆN TẠI:
- Metro TP.HCM (Tuyến 1): Tuyến metro đầu tiên VN, kết nối Bến Thành - Suối Tiên
- Metro Hà Nội: Đang xây dựng nhiều tuyến
- Mục đích: Giải quyết ùn tắc giao thông, phát triển bền vững

YÊU CẦU: Viết 4-5 đoạn văn ngắn (mỗi đoạn 2-3 câu) giải thích:
1. Điểm tương đồng giữa địa đạo và metro (cả hai đều dưới lòng đất)
2. Sự khác biệt (từ trú ẩn chiến tranh → phục vụ dân sinh)
3. Bài học lịch sử (tinh thần đào hầm vượt khó → xây dựng hạ tầng hiện đại)
4. Thông điệp hòa bình (từ bóng tối chiến tranh → ánh sáng phát triển)

Văn phong: Trầm ấm, giàu cảm xúc, có số liệu cụ thể. Sử dụng markdown **in đậm** cho từ khóa quan trọng.
`,

    highway: `
NGỮ CẢNH: Lý giải ý nghĩa chuyển đổi từ "Đường mòn Hồ Chí Minh" sang "Cao tốc Bắc-Nam và Đại lộ Hồ Chí Minh"

THÔNG TIN LỊCH SỬ:
- Đường Trường Sơn (Đường mòn Hồ Chí Minh): 20.000km đường rừng, 5 trục dọc 21 trục ngang
- Đoàn 559: Lực lượng vận tải huyền thoại, thành lập 19/5/1959
- "Tiểu đội xe không kính": Đi ban đêm, tắt đèn tránh máy bay Mỹ ném bom
- Đường ống xăng dầu: 1.400km dài xuyên rừng núi
- Thanh niên xung phong: Sửa đường dưới mưa bom bão đạn

HIỆN TẠI:
- Cao tốc Bắc-Nam: 654km, nối liền Lạng Sơn - Cà Mau
- Đại lộ Hồ Chí Minh: 3.176km, xương sống giao thông miền núi
- Thời gian di chuyển giảm từ vài ngày xuống vài giờ

YÊU CẦU: Viết 4-5 đoạn văn ngắn (mỗi đoạn 2-3 câu) giải thích:
1. Vai trò của Đường Trường Sơn (huyết mạch chiến tranh)
2. Sự kế thừa (cùng nối liền Nam-Bắc, nhưng mục đích khác)
3. Tốc độ chuyển đổi (từ đường mòn hiểm trở → cao tốc hiện đại)
4. Thông điệp (từ vận chuyển vũ khí → vận chuyển hàng hóa, du khách)

Văn phong: Hào hùng, tự hào dân tộc. Sử dụng markdown **in đậm** cho số liệu và địa danh.
`,

    aviation: `
NGỮ CẢNH: Lý giải ý nghĩa chuyển đổi từ "Bầu trời chiến tranh Hà Nội 1972" sang "Đường bay quốc tế"

THÔNG TIN LỊCH SỬ:
- Chiến dịch Điện Biên Phủ trên không (18-29/12/1972): 12 ngày đêm
- B-52 "Pháo đài bay": 207 chiếc tham chiến
- MiG-21 và SAM-2: Lực lượng phòng không Việt Nam
- Kết quả: 34 B-52 bị bắn rơi (theo VN), 81 máy bay Mỹ tổng cộng
- 1.600 dân thường Hà Nội thiệt mạng do bom đạn

HIỆN TẠI:
- Sân bay quốc tế Nội Bài, Tân Sơn Nhất: Cửa ngõ của Việt Nam
- Hàng trăm chuyến bay quốc tế mỗi ngày
- Vietnam Airlines, Vietjet, Bamboo Airways: Kết nối 5 châu
- Việt Nam = điểm đến an toàn, thân thiện

YÊU CẦU: Viết 4-5 đoạn văn ngắn (mỗi đoạn 2-3 câu) giải thích:
1. Bầu trời Hà Nội xưa (lửa đạn, nguy hiểm)
2. Bầu trời Việt Nam nay (hòa bình, kết nối)
3. Biểu tượng chuyển đổi (từ chiến đấu cơ → máy bay dân dụng)
4. Thông điệp (mở cửa, hội nhập, hòa bình đẹp lắm)

Văn phong: Trang trọng, đầy cảm xúc. Đối比 rõ nét giữa quá khứ và hiện tại. Sử dụng markdown **in đậm** cho năm tháng và số liệu.
`
  };

  const prompt = visionPrompts[visionType];
  const fullInstruction = `${BASE_SYSTEM_INSTRUCTION}\n\n${prompt}`;

  try {
    const result = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: fullInstruction
    });

    return result.text || "Nội dung đang được cập nhật...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Không thể tải nội dung lúc này. Vui lòng thử lại sau.";
  }
};

// Load vision content from markdown files
export const loadVisionContent = async (visionType: VisionType): Promise<string> => {
  try {
    const response = await fetch(`/content/${visionType}.md`);
    if (!response.ok) {
      throw new Error(`Failed to load ${visionType} content`);
    }
    const content = await response.text();
    return content;
  } catch (error) {
    console.error("Error loading vision content:", error);
    return "Nội dung đang được cập nhật...";
  }
};