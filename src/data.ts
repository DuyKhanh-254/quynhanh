import type { Assignment, Goal, Hobby } from './types';

export const PROFILE = {
  name: 'Nguyễn Đặng Quỳnh Anh',
  studentId: '25042332',
  major: 'Ngôn ngữ Hàn Quốc',
  school: 'Trường Đại học Ngoại ngữ - ĐHQGHN',
  course: 'VNU1001_E252057',
  email: 'quynhanhkemmm@gmail.com',
  phone: '0869175***',
};

export const HOBBIES: Hobby[] = [
  {
    id: 'sports',
    title: 'Thể thao',
    desc: 'Yêu thích vận động, đặc biệt là cầu lông, bóng chuyền và võ thuật.',
    icon: 'Dumbbell',
  },
  {
    id: 'music',
    title: 'Âm nhạc & điện ảnh',
    desc: 'Nghe nhạc và xem phim là cách mình thư giãn, làm mới nguồn năng lượng.',
    icon: 'Headphones',
  },
  {
    id: 'books',
    title: 'Đọc sách',
    desc: 'Mình thích khám phá những góc nhìn mới qua từng trang sách.',
    icon: 'BookOpen',
  },
  {
    id: 'connect',
    title: 'Kết nối & học hỏi',
    desc: 'Luôn sẵn sàng lắng nghe, học hỏi từ mọi người và các bạn đồng trang lứa.',
    icon: 'Users',
  },
];

export const ACADEMIC_GOALS: Goal[] = [
  { id: 'g1', text: 'Nâng cao trình độ sử dụng công nghệ số và trí tuệ nhân tạo để phục vụ học tập và công việc sau này.' },
  { id: 'g2', text: 'Hình thành tư duy số cùng ý thức đạo đức khi sử dụng trí tuệ nhân tạo.' },
  { id: 'g3', text: 'Biến AI thành công cụ đắc lực hỗ trợ quá trình học tập học phần Công nghệ số và Trí tuệ nhân tạo.' },
];

export const PORTFOLIO_GOALS: Goal[] = [
  { id: 'p1', text: 'Hệ thống hóa toàn bộ kiến thức và kỹ năng số đã tích lũy qua môn học.' },
  { id: 'p2', text: 'Thể hiện năng lực ứng dụng AI và công nghệ vào giải quyết các bài toán thực tế.' },
  { id: 'p3', text: 'Lưu trữ sản phẩm học tập làm tư liệu tham khảo và giới thiệu bản thân với nhà tuyển dụng sau này.' },
];

export const ASSIGNMENTS: Assignment[] = [
  {
    id: 1,
    shortTitle: 'Tệp tin & thư mục',
    title: 'Bài 1 - Bài tập 1 của mục 1.4: Thao tác cơ bản với tệp tin và thư mục',
    subtitle: 'Trình bày cấu trúc thư mục tối ưu và quy tắc đặt tên tệp, kèm ảnh chụp minh họa.',
    file: '/files/bai-1.docx',
    icon: 'FolderTree',
    accent: '#f2a9bf',
    lesson: 'Mình hiểu rõ hơn cách tổ chức dữ liệu khoa học, đặt tên tệp nhất quán và sử dụng thành thạo các thao tác sao chép, di chuyển, xóa và khôi phục tệp. Một cấu trúc gọn gàng giúp tiết kiệm rất nhiều thời gian khi học tập và làm việc nhóm.',
  },
  {
    id: 2,
    shortTitle: 'Thông tin học thuật',
    title: 'Bài 2 - Bài tập 2 của mục 2.4: Tìm kiếm và đánh giá thông tin học thuật',
    subtitle: 'Tìm kiếm học thuật bằng từ khóa, toán tử nâng cao và đánh giá độ tin cậy của nguồn tin.',
    file: '/files/bai-2.docx',
    icon: 'SearchCheck',
    accent: '#b8a7e8',
    lesson: 'Bài tập giúp mình biết xây dựng từ khóa, khai thác Google Scholar và đối chiếu tác giả, cơ quan xuất bản, phương pháp nghiên cứu, trích dẫn và tính cập nhật. Mình không còn xem kết quả tìm kiếm đầu tiên là câu trả lời cuối cùng.',
  },
  {
    id: 3,
    shortTitle: 'Prompt hiệu quả',
    title: 'Bài 3 - Bài tập 2 của mục 3.4: Viết Prompt hiệu quả cho các tác vụ học tập',
    subtitle: 'So sánh prompt ban đầu và prompt cải tiến để tạo đầu ra rõ ràng, đúng mục tiêu hơn.',
    file: '/files/bai-3.docx',
    icon: 'MessageSquareText',
    accent: '#94c8dc',
    lesson: 'Mình nhận ra chất lượng đầu ra phụ thuộc rất nhiều vào cách giao nhiệm vụ cho AI. Một prompt tốt cần có vai trò, mục tiêu, ngữ cảnh, yêu cầu đầu ra và tiêu chí đánh giá; đồng thời vẫn phải được người học kiểm chứng và chỉnh sửa.',
  },
  {
    id: 4,
    shortTitle: 'Cộng tác trực tuyến',
    title: 'Bài 4 - Bài tập 3 của mục 4.4: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm',
    subtitle: 'Minh chứng quá trình quản lý dự án nhóm, phân công nhiệm vụ và phối hợp trực tuyến.',
    file: '/files/bai-4.docx',
    icon: 'UsersRound',
    accent: '#f1c57f',
    lesson: 'Công cụ số chỉ phát huy hiệu quả khi nhóm có quy ước chung, trách nhiệm rõ ràng và thường xuyên cập nhật tiến độ. Mình đã rèn kỹ năng phân công, phản hồi, lưu trữ phiên bản và phối hợp với các thành viên trên cùng một không gian làm việc.',
  },
  {
    id: 5,
    shortTitle: 'AI tạo sinh',
    title: 'Bài 5 - Bài tập 2 của mục 5.4: Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung',
    subtitle: 'Phát triển sản phẩm số với sự hỗ trợ của AI và phân tích vai trò của AI trong quy trình sáng tạo.',
    file: '/files/bai-5.docx',
    icon: 'WandSparkles',
    accent: '#ef9aa1',
    lesson: 'AI giúp tạo ý tưởng, nội dung, hình ảnh và bố cục ban đầu rất nhanh, nhưng sản phẩm chỉ thực sự có giá trị khi người dùng biết chọn lọc, kiểm chứng, biên tập và thêm dấu ấn cá nhân. Minh bạch việc sử dụng AI cũng là một phần quan trọng của sáng tạo có trách nhiệm.',
  },
  {
    id: 6,
    shortTitle: 'AI có trách nhiệm',
    title: 'Bài 6 - Bài tập 4 của mục 6.4: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu',
    subtitle: 'Xây dựng bộ nguyên tắc cá nhân về sử dụng AI minh bạch, an toàn và có trách nhiệm.',
    file: '/files/bai-6.docx',
    icon: 'ShieldCheck',
    accent: '#92c9b2',
    lesson: 'Mình xác định rõ ranh giới giữa hỗ trợ hợp lý và gian lận học thuật: AI không thay thế tư duy. Mọi đầu ra phải được kiểm chứng, trích dẫn minh bạch, tôn trọng bản quyền, bảo vệ dữ liệu cá nhân và tuân thủ quy định của giảng viên, nhà trường.',
  },
];
