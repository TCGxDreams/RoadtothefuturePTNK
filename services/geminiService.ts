import { GoogleGenAI } from "@google/genai";
import { PageId } from "../types";

const apiKey = import.meta.env.VITE_API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Map page context to specific historical focus
const getContextPrompt = (pageId: PageId): string => {
  switch (pageId) {
    case 'duoi-dat':
      return `NGỮ CẢNH: Người dùng đang tìm hiểu về ĐỊA ĐẠO CỦ CHI & VĨNH MỐC.

THÔNG TIN LỊCH SỬ CHÍNH XÁC:
**Địa đạo Củ Chi:**
- Khởi nguồn từ thời kháng chiến chống Pháp (1945-1954), phát triển mạnh từ 1961-1965
- Tổng chiều dài: khoảng 250km, đường zigzag có nhánh nối ra sông Sài Gòn
- Cấu trúc 3 tầng: Tầng trên (3m) - chiến đấu, chống pháo/xe tăng; Tầng giữa (5-8m) - sinh hoạt, họp, y tế; Tầng sâu (8-12m) - kho chứa, giếng nước, lối thoát
- Bếp Hoàng Cầm: sáng chế của kỹ sư quân sự Hoàng Cầm, tản khói qua các ống ngầm để tránh bị phát hiện từ trên không
- "Tunnel Rats" (Lính chuột hầm): khoảng 600 lính Mỹ chuyên chui hầm, chịu thương vong cao từ bẫy và phục kích
- Chiến dịch Crimp (8-19/1/1966): 12.000 quân, Mỹ tổn thất 1.600 người thương vong, 77 xe bị phá hủy
- Chiến dịch Cedar Falls (8-26/1/1967): 30.000 quân với B-52 và Napalm, 3.500 thương vong địch nhưng không phá được hệ thống
- Hy sinh: hơn 45.000 người (trên 10.000 dân thường và chiến sĩ)
- Số trận đánh: 4.200+ trận, tiêu diệt 22.582 địch, bắn rơi 256 máy bay
- Công nhận di tích lịch sử quốc gia: 1979

**Địa đạo Vĩnh Mốc (Quảng Trị):**
- Xây dựng 1965-1967, đất bazan đỏ
- Trục chính: hơn 2.000m, thuộc mạng lưới 42km địa đạo Vĩnh Linh
- Cấu trúc 3 tầng: 12-15m (chiến đấu/trú ẩn), 18m (căn hộ gia đình - cứ 4m cho 4 người, trạm xá, hội trường), 22-23m (kho)
- 13 cửa ra: 7 cửa phía biển (tiếp tế), 6 cửa đồi (thông gió)
- Chịu hơn 500.000 tấn bom trong hơn 2.000 ngày
- Kết quả: KHÔNG CÓ THƯƠNG VONG, 17 trẻ em được sinh ra trong địa đạo
- Sức chứa: 1.200 người`;

    case 'mat-dat':
      return `NGỮ CẢNH: Người dùng đang tìm hiểu về ĐƯỜNG TRƯỜNG SƠN (Đường mòn Hồ Chí Minh).

THÔNG TIN LỊCH SỬ CHÍNH XÁC:
**Lịch sử hình thành:**
- Đoàn 559 thành lập: 19/5/1959
- Chỉ huy ban đầu: Võ Bẩm, sau là Phan Trọng Tuệ (1965), Đồng Sĩ Nguyên (1966-1976)
- Phát triển từ đường mòn đi bộ thành mạng lưới 20.000km vào năm 1975

**Cấu trúc mạng lưới:**
- 5 trục dọc (tuyến Bắc-Nam chính)
- 21 trục ngang (mở rộng qua Lào và Campuchia)
- 3.140km "đường kín" cho di chuyển ban ngày

**Đường ống xăng dầu:**
- Tổng chiều dài: 1.450km
- Xây dựng từ 1968, dùng ống thép di động (đường kính tới 200mm)
- 2 nhánh: Đông (qua Quảng Trị đến Tây Nguyên), Tây (qua Lào và Campuchia)
- Vận chuyển: 317.000 tấn nhiên liệu

**Lực lượng:**
- Hơn 120.000 người, gồm gần 10.000 Thanh niên xung phong
- "Tiểu đội xe không kính" - thơ Phạm Tiến Duật, biểu tượng tinh thần kiên cường

**Chiến dịch phá hoại của Mỹ:**
- Commando Hunt (1968-1972): thả 4 triệu tấn bom
- Hàng rào điện tử McNamara, cảm biến Igloo White
- Mỹ tuyên bố phá hủy 46.000 xe (con số bị tranh cãi là phóng đại)

**Di sản:**
- 72 nghĩa trang liệt sĩ dọc tuyến đường
- Nghĩa trang Trường Sơn (Quảng Bình): hơn 10.000 mộ từ Việt Nam, Lào, Campuchia`;

    case 'tren-khong':
      return `NGỮ CẢNH: Người dùng đang tìm hiểu về ĐIỆN BIÊN PHỦ TRÊN KHÔNG (12/1972).

THÔNG TIN LỊCH SỬ CHÍNH XÁC:
**Chiến dịch Linebacker II:**
- Thời gian: 18-29/12/1972 (12 ngày đêm)
- Mỹ huy động: 197-207 chiếc B-52 (gần 50% lực lượng B-52), 741 lượt xuất kích

**Thiệt hại máy bay:**
- Theo Việt Nam: 34 B-52 bị bắn rơi (16 tại chỗ), tổng 81 máy bay các loại (5 F-111, 21 F-4, 12 A-7)
- Theo Mỹ: 15-16 B-52, tổng ~26-28 máy bay
- Sự khác biệt do phương pháp xác nhận và tuyên truyền

**Thương vong dân thường:**
- Tổng: 2.368 người thiệt mạng
- Hà Nội: 1.318 người (riêng phố Khâm Thiên: 287 người)
- Hải Phòng: 45 người
- Bị thương: 1.355 người
- Bệnh viện Bạch Mai bị tàn phá: 30 nhân viên y tế thiệt mạng

**Lực lượng phòng không Việt Nam:**
- SAM-2 (S-75 Dvina): 23 tiểu đoàn (60% lực lượng phòng không)
- 334 tên lửa được bắn, tỷ lệ trúng 85% B-52
- Chiến thuật: Mảng tam giác tên lửa, đánh đa góc độ

**Không quân:**
- MiG-21: 31 lượt xuất kích, mất 3 chiếc
- Anh hùng Phạm Tuân: bắn hạ B-52 ngày 27/12 bằng tên lửa tầm gần
- Tổng: 2 B-52 bị MiG bắn hạ

**Chiến thuật đặc biệt:**
- "Lưới lửa 3 tầng": Pháo cao xạ + SAM-2 + MiG-21
- "Đèn đuốc dẫn đường": dân quân thắp lửa tạo đường băng giả

**Kết quả:**
- Nixon ngừng ném bom: 30/12/1972
- Hiệp định Paris ký kết: 27/1/1973
- Nội dung: Mỹ rút quân, ngừng bắn, trao đổi tù binh, công nhận lực lượng ở miền Nam`;

    case 'tuong-lai':
      return `NGỮ CẢNH: Người dùng đang tìm hiểu về SỰ KẾ THỪA & PHÁT TRIỂN HẠ TẦNG HIỆN ĐẠI.

THÔNG TIN CHÍNH XÁC (cập nhật 12/2025):
**Metro:**
- Metro TP.HCM Tuyến 1 (Bến Thành - Suối Tiên): 19.7km, khai trương 22/12/2024
- Kế hoạch mở rộng đến sân bay Long Thành: 41km, đầu tư 60.000 tỷ VND
- Metro Hà Nội: Tuyến 2 (10.9km) khởi công 10/2025, Tuyến 5 mục tiêu hoàn thành cuối năm 2025
- Mục tiêu 2030: 3 tuyến ưu tiên tại Hà Nội

**Cao tốc Bắc-Nam:**
- Mục tiêu 2025: 3.345km (từ 654km)
- Tính đến cuối 2025: khoảng 3.188km hoàn thành
- Kết nối toàn bộ từ Lạng Sơn đến Cà Mau

**Đường Hồ Chí Minh:**
- Tổng chiều dài: 3.183km
- Hoàn thành kết nối từ Pác Bó đến Đất Mũi
- Bổ sung 170km đoạn mới đến 2028

**Hàng không:**
- Năm 2025: dự kiến 84 triệu hành khách
- 9 tháng đầu 2025: 64 triệu hành khách (tăng 11% so với cùng kỳ)
- Khoảng 20.000 chuyến bay/ngày
- Các hãng: Vietnam Airlines, Vietjet, Bamboo Airways
- Sân bay Nội Bài: công suất 10-15 triệu, cần nâng cấp
- Sân bay Tân Sơn Nhất: quá tải, xếp hạng 248/250 toàn cầu

**Thông điệp:**
- Từ địa đạo ẩn nấp → Metro hiện đại
- Từ đường mòn vận tải vũ khí → Cao tốc vận chuyển hàng hóa, du khách
- Từ bầu trời bom đạn → Đường bay quốc tế hòa bình`;

    default:
      return `NGỮ CẢNH: Tổng quan về Dự án 'Những Con Đường Vô Hình' - Di sản giao thông quân sự Việt Nam.

3 TRỤ CỘT:
1. DƯỚI ĐẤT: Địa đạo Củ Chi (250km, 3 tầng) & Vĩnh Mốc (2.000m, 17 trẻ được sinh ra)
2. MẶT ĐẤT: Đường Trường Sơn (20.000km, Đoàn 559, 1.450km đường ống dầu)
3. TRÊN KHÔNG: Điện Biên Phủ Trên Không (34 B-52 bị hạ, buộc Mỹ ký Hiệp định Paris)

THÔNG ĐIỆP: Từ những con đường chiến tranh đến hạ tầng hòa bình - "Hòa bình đẹp lắm"`;
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
5.  **Số liệu tranh cãi**: Khi có sự khác biệt giữa nguồn Việt Nam và Mỹ (như số B-52 bị bắn rơi), hãy trình bày cả hai phía và giải thích nguyên nhân khác biệt.

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
      model: 'gemini-2.5-flash',
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

THÔNG TIN LỊCH SỬ CHÍNH XÁC:
- Địa đạo Củ Chi: 250km đường hầm 3 tầng (3m, 5-8m, 8-12m sâu), là "thành phố ngầm" trong chiến tranh
- Địa đạo Vĩnh Mốc: Trục chính >2.000m, 3 tầng (12-23m), 17 trẻ được sinh ra, KHÔNG CÓ thương vong
- Bếp Hoàng Cầm: sáng chế của kỹ sư Hoàng Cầm, tản khói qua ống ngầm
- Tinh thần: Sống trong bóng tối, thiếu oxy, nhưng không khuất phục

HIỆN TẠI (12/2025):
- Metro TP.HCM Tuyến 1: 19.7km, khai trương 22/12/2024
- Kế hoạch mở rộng đến sân bay Long Thành: 41km, 60.000 tỷ VND
- Metro Hà Nội: Tuyến 2 (10.9km) khởi công 10/2025

YÊU CẦU: Viết 4 đoạn văn ngắn (mỗi đoạn 2-3 câu) giải thích:
1. Điểm tương đồng (cả hai đều dưới lòng đất)
2. Sự khác biệt (từ trú ẩn chiến tranh → phục vụ dân sinh)
3. Bài học lịch sử (tinh thần đào hầm vượt khó → xây dựng hạ tầng hiện đại)
4. Thông điệp hòa bình (từ bóng tối chiến tranh → ánh sáng phát triển)

Văn phong: Trầm ấm, giàu cảm xúc. Sử dụng markdown **in đậm** cho từ khóa quan trọng.
`,

    highway: `
NGỮ CẢNH: Lý giải ý nghĩa chuyển đổi từ "Đường Trường Sơn" sang "Cao tốc Bắc-Nam và Đường Hồ Chí Minh"

THÔNG TIN LỊCH SỬ CHÍNH XÁC:
- Đường Trường Sơn: 20.000km, 5 trục dọc 21 trục ngang
- Đoàn 559: thành lập 19/5/1959, chỉ huy Võ Bẩm, sau Đồng Sĩ Nguyên
- Đường ống xăng dầu: 1.450km, vận chuyển 317.000 tấn nhiên liệu
- "Tiểu đội xe không kính" - thơ Phạm Tiến Duật
- Thanh niên xung phong: gần 10.000 người
- Commando Hunt: 4 triệu tấn bom, nhưng không ngăn được tiếp tế
- 72 nghĩa trang liệt sĩ dọc tuyến

HIỆN TẠI (12/2025):
- Cao tốc Bắc-Nam: mục tiêu 3.345km, đã có ~3.188km
- Đường Hồ Chí Minh: 3.183km, kết nối Pác Bó - Đất Mũi

YÊU CẦU: Viết 4 đoạn văn ngắn:
1. Vai trò của Đường Trường Sơn (huyết mạch chiến tranh)
2. Sự kế thừa (cùng nối liền Nam-Bắc, nhưng mục đích khác)
3. Tốc độ chuyển đổi (từ đường mòn → cao tốc hiện đại)
4. Thông điệp (từ vận chuyển vũ khí → hàng hóa, du khách)

Văn phong: Hào hùng, tự hào. Sử dụng markdown **in đậm** cho số liệu.
`,

    aviation: `
NGỮ CẢNH: Lý giải ý nghĩa chuyển đổi từ "Bầu trời chiến tranh Hà Nội 1972" sang "Đường bay quốc tế"

THÔNG TIN LỊCH SỬ CHÍNH XÁC:
- Chiến dịch Linebacker II: 18-29/12/1972
- B-52 tham chiến: 197-207 chiếc, 741 lượt xuất kích
- B-52 bị bắn rơi: 34 (theo VN), 15-16 (theo Mỹ)
- Tổng máy bay Mỹ bị hạ: 81 (theo VN)
- Dân thường thiệt mạng: 2.368 người (Hà Nội: 1.318, phố Khâm Thiên: 287)
- SAM-2: 23 tiểu đoàn, 334 tên lửa bắn, tỷ lệ trúng 85%
- Anh hùng Phạm Tuân: bắn hạ B-52 ngày 27/12
- Kết quả: Hiệp định Paris 27/1/1973

HIỆN TẠI (12/2025):
- Hành khách năm 2025: dự kiến 84 triệu (64 triệu trong 9 tháng đầu, +11%)
- Khoảng 20.000 chuyến bay/ngày
- Vietnam Airlines, Vietjet, Bamboo Airways kết nối 5 châu

YÊU CẦU: Viết 4 đoạn văn ngắn:
1. Bầu trời Hà Nội xưa (lửa đạn, 1.318 người Hà Nội thiệt mạng)
2. Bầu trời Việt Nam nay (hòa bình, 84 triệu hành khách)
3. Biểu tượng chuyển đổi (từ B-52 → Airbus/Boeing)
4. Thông điệp (mở cửa, hội nhập, hòa bình đẹp lắm)

Văn phong: Trang trọng, đầy cảm xúc. Sử dụng markdown **in đậm**.
`
  };

  const prompt = visionPrompts[visionType];
  const fullInstruction = `${BASE_SYSTEM_INSTRUCTION}\n\n${prompt}`;

  try {
    const result = await ai.models.generateContent({
      model: 'gemini-2.5-flash-lite',
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

export type HistoricalImageId = 'cuchi-entrance' | 'cuchi-cross-section' | 'b52' | 'mig21' | 'sam2';

export const generateHistoricalImageDetail = async (imageId: HistoricalImageId): Promise<string> => {
  if (!apiKey) {
    return "Hệ thống chưa được cấu hình API Key. Vui lòng kiểm tra lại môi trường.";
  }

  const imagePrompts: Record<HistoricalImageId, string> = {
    'cuchi-entrance': `
NGỮ CẢNH: Phân tích sâu về "Lối vào Địa đạo Củ Chi"
MÔ TẢ HÌNH ẢNH: Một khung gỗ vuông vức nhỏ hẹp nằm ẩn mình dưới lớp lá khô ngụy trang. Một người lính đang chui xuống.

YÊU CẦU: Hóa thân thành Giáo sư Sử học, viết **ngắn gọn, súc tích, đanh thép** (tối đa 3 đoạn ngắn):
1.  **Nghệ thuật ngụy trang**: Khung gỗ mối chịu nước, cửa hẹp chỉ vừa người Việt, lính Mỹ to lớn không lọt.
2.  **Chiến thuật**: "Thoắt ẩn thoắt hiện" - đánh xong biến mất vào lòng đất.
3.  **Ý nghĩa**: Cửa tử của quân thù, cửa sinh của quân ta.
TRẢ LỜI NGAY VÀO VẤN ĐỀ, KHÔNG DẪN DẮT DÀI DÒNG.`,

    'cuchi-cross-section': `
NGỮ CẢNH: Phân tích "Kết cấu 3 tầng Địa đạo Củ Chi"
MÔ TẢ HÌNH ẢNH: Sơ đồ cắt ngang ba tầng địa đạo.

YÊU CẦU: Hóa thân thành Giáo sư Sử học, phân tích **cực kỳ ngắn gọn** theo gạch đầu dòng:
- **Tầng 1 (3m)**: Chống đạn pháo, xe tăng, có ổ chiến đấu.
- **Tầng 2 (6m-8m)**: Bệnh viện, bếp Hoàng Cầm, nơi nghỉ ngơi.
- **Tầng 3 (8-12m)**: Trú ẩn an toàn trước bom B-52.
- **Thông hơi**: Ụ mối giả giấu lỗ thông hơi tài tình.
KHÔNG VIẾT MỞ BÀI KẾT BÀI, CHỈ TẬP TRUNG SỐ LIỆU VÀ CÔNG NĂNG.`,

    'b52': `
NGỮ CẢNH: Phân tích "B-52 Stratofortress - Pháo đài bay"
MÔ TẢ HÌNH ẢNH: Chiếc máy bay ném bom khổng lồ của Mỹ.

YÊU CẦU: Hóa thân thành Giáo sư Sử học, viết **cô đọng, chấn động**:
- **Sức mạnh**: Mang 30 tấn bom, bay cao 10km, được coi là "Bất khả xâm phạm".
- **Tội ác**: Rải thảm hủy diệt phố Khâm Thiên, Bệnh viện Bạch Mai.
- **Sụp đổ**: Đêm 18/12/1972, B-52 đầu tiên bị bắn rơi tại Phù Lỗ, xác rơi hữu Tiệp. Thần tượng sụp đổ.
TRẢ LỜI NGẮN GỌN, MẠNH MẼ.`,

    'mig21': `
NGỮ CẢNH: Phân tích "Tiêm kích MiG-21 - Én bạc"
MÔ TẢ HÌNH ẢNH: Máy bay chiến đấu gọn nhẹ, mũi nhọn.

YÊU CẦU: Hóa thân thành Giáo sư Sử học, viết **ngắn gọn, hào hùng**:
- **Đặc điểm**: Nhỏ, nhẹ, cơ động, leo cao nhanh. Khắc tinh của máy bay nặng nề.
- **Chiến thuật**: Bay thấp tránh radar -> Vọt lên cao -> Phóng tên lửa -> Thoát ly.
- **Kỳ tích**: Phạm Tuân lái MiG-21 tắt máy núp mây, bắn rơi B-52 đêm 27/12.
KHÔNG DẪN DẮT, VÀO THẲNG CHIẾN CÔNG.`,

    'sam2': `
NGỮ CẢNH: Phân tích "Tên lửa S-75 Dvina (SAM-2) - Rồng lửa Thăng Long"
MÔ TẢ HÌNH ẢNH: Quả tên lửa dài trên bệ phóng.

YÊU CẦU: Hóa thân thành Giáo sư Sử học, viết **cực kỳ súc tích**:
- **Vai trò**: Vũ khí duy nhất vươn tới tầm cao B-52 ("Vít cổ" pháo đài bay).
- **Trí tuệ**: Bộ đội tên lửa "vạch nhiễu tìm thù", đánh cách đánh 3 điểm.
- **Khoảnh khắc**: Rồng lửa vút lên, B-52 bốc cháy sáng rực bầu trời Hà Nội.
TRẢ LỜI NGAY LẬP TỨC, KHÔNG DÀI DÒNG.`,
  };

  const prompt = imagePrompts[imageId];
  const fullInstruction = `${BASE_SYSTEM_INSTRUCTION}\n\n${prompt}`;

  try {
    const result = await ai.models.generateContent({
      model: 'gemini-2.5-flash-lite',
      contents: fullInstruction
    });

    return result.text || "Đang cập nhật tư liệu lịch sử...";
  } catch (error) {
    console.error("Gemini API Error for Image Detail:", error);
    return "Kết nối đến kho tàng lịch sử đang gián đoạn. Vui lòng thử lại sau.";
  }
};
